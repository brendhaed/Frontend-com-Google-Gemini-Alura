function pesquisar(){

    //obtem a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se pesquisa for uma string sem nada
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada Encontrado!</p>"
    return
    }

campoPesquisa = campoPesquisa.toLowerCase();
    //inicializa uma string vazia para armazenar os resultados
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| 
        tags.includes(campoPesquisa)){
            //cria um novo elemento
            resultado +=`<div class="item-resultado">
            <h2> 
             <a href="${dados.link}"> ${dado.titulo}</a>
             </h2>
             <p class="descricao-meta">${dado.descricao}</p>
             <a href="${dado.link}" 
             target="_blank">Saiba mais sobre</a>
        </div>`;
        }
        
    }

    if(!resultado){
        resultado = "<p> Nada foi encontrado </p>"

    }
    
    //Atribui os resultados gerados á seção HTML
    section.innerHTML = resultado;
}

