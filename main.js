// Espera até que o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os elementos HTML pelos seus IDs (o recebimento das informações funciona atravez da requisição que é feita para a API do GitHub)
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const repositoriosElement = document.querySelector('#repositorios');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    
    // Faz uma requisição para a API do GitHub para obter os dados do usuário 'Heclypso'
    fetch('https://api.github.com/users/Heclypso') // Para receber informações de outros usuarios basta mudar o https://api.github.com/users/######
    .then(function(res) {
        // Verifica se a resposta da requisição é bem-sucedida (status code 200-299)
        if (!res.ok) {
            throw new Error('O sistema não está respondendo adequadamente');
        }
        // Converte a resposta para JSON
        return res.json();
    })
    .then(function(json) {
        // Define os valores dos elementos HTML com base nos dados recebidos da API
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        repositoriosElement.innerText = json.public_repos;
        linkElement.href = json.html_url;
    })
    .catch(function(erro) {
        // Captura e trata qualquer erro que ocorra durante a requisição ou processamento dos dados
        alert("Ocorreu um erro.");
    })
    .finally(function() {
        // Executa esta função independentemente de a requisição ter sido bem-sucedida ou ter falhado
        console.log('O fetch foi executado;');
    });
});
