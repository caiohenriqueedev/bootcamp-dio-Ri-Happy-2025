const projetos = [
    {
      nome: "Projeto Catálogo de Jogos",
      descricao: "Um site para mostrar e organizar jogos.",
      link: "https://github.com/caiohenriqueedev/projeto-cataologo-de-jogos"
    },
    {
      nome: "Projeto Calculadora",
      descricao: "Calculadora simples feita em JavaScript.",
      link: "https://github.com/caiohenriqueedev/projetocalculadora"
    },
    {
      nome: "Projeto Tabuada JS",
      descricao: "Aplicativo para aprender tabuada usando JavaScript.",
      link: "https://github.com/caiohenriqueedev/projeto-tabuada-js"
    }
  ];
  
  const listaProjetos = document.getElementById('lista-projetos');
  
  function mostrarProjetos() {
    projetos.forEach(projeto => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${projeto.nome}</strong><br>${projeto.descricao} <br><a href="${projeto.link}" target="_blank">Veja no GitHub</a>`;
      listaProjetos.appendChild(li);
    });
  }
  
  mostrarProjetos();
  
  const formContato = document.getElementById('form-contato');
  const msgStatus = document.getElementById('msg-status');
  
  formContato.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
  
    if (nome && email && mensagem) {
      msgStatus.style.color = 'green';
      msgStatus.textContent = `Obrigado pelo contato, ${nome}! Em breve responderemos.`;
      formContato.reset();
    } else {
      msgStatus.style.color = 'red';
      msgStatus.textContent = 'Por favor, preencha todos os campos corretamente.';
    }
  });
  