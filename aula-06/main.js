// Obtenção do Elemento com id Content
let contentRef = document.querySelector('#content')

// Criação de um Array para armazenar Objetos, cada objeto desse irá representar uma noticia. Levando isso em consideração, as informações contidas precisam fazer sentido com o contexto
const noticias = [
    {
        titulo: 'Esse é o primeiro Post',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, blanditiis.',
        url: '#'
    },
    {
        titulo: 'Esse é o segundo Post',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, blanditiis.',
        url: '#'
    },
    {
        titulo: 'Esse é o terceiro Post',
        descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, blanditiis.',
        url: '#'
    }
]

// Utilização da funcionalidade For do Javascript para percorrermos o Array de Noticias
for(let noticia of noticias) {

    // Inserção de Novos Elementos com conteudo dinamico no HTML baseado na Notícia atual presente no Array que só existia em formato de Dado aqui no Javascript!
    contentRef.innerHTML += `
        <article>
            <h1>${noticia.titulo}</h1>
            <p>${noticia.descricao}</p>
            <a href="${noticia.url}">Acesse a notícia</a>
        </article>
    `

}