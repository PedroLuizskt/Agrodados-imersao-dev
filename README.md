# AgroDados 🌱🛰️
### Hub de Inteligência Geoespacial e Agrária

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Licença](https://img.shields.io/badge/Licença-MIT-blue)

> **Projeto desenvolvido durante a Imersão Dev com Alura e Google.**

## 📖 Sobre o Projeto

O **AgroDados** é uma plataforma web interativa desenvolvida para centralizar, organizar e democratizar o acesso às bases de dados geoespaciais, ambientais e fundiárias do Brasil.

Profissionais de **Geoprocessamento**, **Engenharia Florestal** e **Agronomia** enfrentam diariamente o desafio da fragmentação de dados: encontrar um shapefile do CAR, dados de outorga de água ou mapas de uso do solo exige navegar por dezenas de portais governamentais distintos.

O **AgroDados** resolve isso atuando como um "One-Stop-Shop" (balcão único), conectando o usuário diretamente às fontes oficiais (MapBiomas, SICAR, INDE, Órgãos Estaduais) através de uma interface visual e intuitiva.

---

## ✨ Funcionalidades

* **Mapa Interativo SVG:** Navegação visual pelo território nacional. O usuário pode clicar em qualquer estado para filtrar recursos específicos.
* **Filtro Nacional vs. Estadual:** Alternância rápida entre bases de dados federais (ex: MapBiomas Brasil) e estaduais (ex: GeoPortal SEMA-MT, IDE-SISEMA MG).
* **Categorização Inteligente:** Os links são organizados por tags (Regularização, Topografia, Hidrologia, Uso do Solo, etc.).
* **Design Responsivo:** Interface limpa e adaptável a diferentes tamanhos de tela.
* **Base de Dados Curada:** Um arquivo `data.js` robusto contendo links diretos para as Infraestruturas de Dados Espaciais (IDEs) de todos os estados brasileiros.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais, sem dependência de frameworks pesados, garantindo leveza e performance:

* **HTML5 Semântico:** Estruturação do conteúdo e acessibilidade.
* **CSS3:** Estilização com uso de Variáveis CSS (Custom Properties), Flexbox e Grid Layout.
* **JavaScript (ES6+):** Lógica de manipulação do DOM, tratamento de eventos e renderização dinâmica dos cards.
* **SVG (Scalable Vector Graphics):** Manipulação vetorial para criar a interatividade do mapa do Brasil.
* **JSON Structure:** Organização dos dados no arquivo `data.js`.

---

## 📂 Estrutura do Projeto

```text
agrodados/
│
├── index.html      # Estrutura principal e o mapa SVG incorporado
├── style.css       # Estilos visuais, animações e responsividade
├── script.js       # Lógica de interação, filtros e renderização
├── data.js         # "Banco de dados" local contendo os links e descrições
└── README.md       # Documentação do projeto
````

-----

## 🚀 Como Executar o Projeto

Como este é um projeto estático (Front-end puro), você não precisa instalar dependências ou configurar servidores complexos.

1.  **Clone este repositório:**

    ```bash
    git clone [https://github.com/SEU-USUARIO/agrodados.git](https://github.com/SEU-USUARIO/agrodados.git)
    ```

2.  **Acesse a pasta:**

    ```bash
    cd agrodados
    ```

3.  **Abra o projeto:**

      * Basta dar um duplo clique no arquivo `index.html`.
      * **Recomendação:** Se estiver usando o VS Code, utilize a extensão **Live Server** para uma melhor experiência.

-----

## 🧠 O "Cérebro" do Projeto: `data.js`

O diferencial deste projeto reside no arquivo `data.js`. Ele foi estruturado para ser escalável. Um exemplo da estrutura de dados utilizada:

```javascript
const database = {
    "MatoGrosso": [
        {
            titulo: "SEMA-MT - GeoPortal",
            descricao: "Portal de dados ambientais do Mato Grosso...",
            link: "[http://monitoramento.sema.mt.gov.br/](http://monitoramento.sema.mt.gov.br/)",
            categoria: "Estadual"
        }
    ]
};
```

Isso permite que novos estados ou bases sejam adicionados facilmente sem alterar a lógica do `script.js`.

-----

## 🤝 Contribuição

Contribuições são muito bem-vindas\! Se você conhece uma base de dados geoespacial importante que não está listada:

1.  Faça um **Fork** do projeto.
2.  Adicione a nova base no arquivo `data.js`.
3.  Realize um **Pull Request**.

-----

## 👏 Agradecimentos

Este projeto foi desenvolvido durante a **Imersão Dev**, promovida pela **Alura** em parceria com o **Google**. Agradeço aos instrutores e à comunidade pelo conhecimento compartilhado sobre lógica de programação e desenvolvimento web.

-----

**Desenvolvido por [Seu Nome]** 🚀
[Link para seu LinkedIn] | [Link para seu Portfólio]

```
