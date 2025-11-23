// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    setupMapInteractions();
});

// Função para filtrar bases nacionais
function filtrarNacional() {
    limparSelecaoMapa();
    renderizarResultados('nacional', 'Bases de Dados Nacionais (Federal)');
    
    // Rola a página até os resultados
    document.getElementById('resultados-container').style.display = 'block';
    document.getElementById('resultados-container').scrollIntoView({ behavior: 'smooth' });
}

// Configura a interatividade do mapa SVG
function setupMapInteractions() {
    // Pega todos os grupos (<g>) dentro do SVG
    const estados = document.querySelectorAll('svg g');

    estados.forEach(estado => {
        // Adiciona evento de clique
        estado.addEventListener('click', function() {
            const estadoID = this.id; // Pega o ID (ex: "MatoGrosso")
            
            // Remove classe 'active' de todos e adiciona no clicado
            limparSelecaoMapa();
            
            // Como o SVG é complexo, aplicamos a classe no path dentro do grupo
            const path = this.querySelector('path');
            if(path) path.classList.add('active');

            // Verifica se temos dados para este estado no data.js
            if (database[estadoID]) {
                renderizarResultados(estadoID, `Bases de Dados: ${formatarNome(estadoID)}`);
            } else {
                renderizarVazio(formatarNome(estadoID));
            }
            
            // Mostra a div de resultados
            const container = document.getElementById('resultados-container');
            container.style.display = 'block';
            container.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Função para renderizar os cards na tela
function renderizarResultados(chave, titulo) {
    const lista = document.getElementById('lista-bases');
    const tituloEl = document.getElementById('titulo-sessao');
    
    // Atualiza o título
    tituloEl.textContent = titulo;
    
    // Limpa resultados anteriores
    lista.innerHTML = '';

    // Pega os dados do data.js
    const dados = database[chave];

    // Cria o HTML para cada item
    dados.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:start;">
                <h4>${item.titulo}</h4>
                <span class="tag">${item.categoria}</span>
            </div>
            <p>${item.descricao}</p>
            <a href="${item.link}" target="_blank" class="card-link">
                Acessar Base <span class="material-icons" style="font-size:14px; vertical-align:middle;">open_in_new</span>
            </a>
        `;
        
        lista.appendChild(card);
    });
}

function renderizarVazio(nomeEstado) {
    const lista = document.getElementById('lista-bases');
    const tituloEl = document.getElementById('titulo-sessao');
    
    tituloEl.textContent = `Bases de Dados: ${nomeEstado}`;
    lista.innerHTML = `
        <div class="card" style="background: #fff3cd; border-color: #ffeeba;">
            <h4>Ops!</h4>
            <p>Ainda não temos bases cadastradas especificamente para <strong>${nomeEstado}</strong> neste protótipo.</p>
            <p>Tente clicar em "Mato Grosso" ou "Minas Gerais" para ver exemplos.</p>
        </div>
    `;
}

// Utilitários
function limparSelecaoMapa() {
    // Remove a classe .active de todos os paths
    document.querySelectorAll('svg path').forEach(path => {
        path.classList.remove('active');
    });
}

function limparResultados() {
    document.getElementById('resultados-container').style.display = 'none';
    limparSelecaoMapa();
}

function formatarNome(string) {
    // Adiciona espaço em nomes CamelCase (Ex: MatoGrosso -> Mato Grosso)
    return string.replace(/([A-Z])/g, ' $1').trim();
}