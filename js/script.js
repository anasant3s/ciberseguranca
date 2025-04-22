const emails = [
    {
      remetente: "magazineluiiza@gmail.com",
      assunto: "Compra no valor de R$ 3.400 realizada!!",
      corpo: "Clique aqui caso não reconheça a compra e queira cancelar.",
      phishing: true
    },
    {
      remetente: "rh@empresa.com",
      assunto: "Reunião de equipe agendada",
      corpo: "A reunião ocorrerá amanhã às 10h no Teams.",
      phishing: false
    },
    {
      remetente: "oferta@lojasmercadolivre.com",
      assunto: "Parabéns! Você ganhou um PS5 no nosso sorteio!",
      corpo: "Para validar seu prêmio, clique no link abaixo e insira seus dados para o envio.",
      phishing: true
    },
    {
      remetente: "coordenador@universidade.edu",
      assunto: "Entrega do trabalho final",
      corpo: "Não se esqueça do prazo até sexta-feira.",
      phishing: false
    }
  ];
  
  function startQuiz() {
    const container = document.getElementById("emails");
    const quizSection = document.getElementById('quiz');
    quizSection.scrollIntoView({ behavior: 'smooth' });
    container.innerHTML = "";
 
      
    emails.forEach((email, index) => {
      const card = document.createElement("div");
      card.classList.add("email-card");
  
      card.innerHTML = `
        <h4>De: ${email.remetente}</h4>
        <p><strong>Assunto:</strong> ${email.assunto}</p>
        <p>${email.corpo}</p>
        <button class="phishing" onclick="verificar(${index}, true)">Phishing</button>
        <button class="safe" onclick="verificar(${index}, false)">Seguro</button>
        <p id="resposta-${index}"></p>
      `;
  
      container.appendChild(card);
    });
  }
  
  function verificar(index, respostaUsuario) {
    const email = emails[index];
    const resposta = document.getElementById(`resposta-${index}`);
  
    if (respostaUsuario === email.phishing) {
      resposta.textContent = "✅ Resposta correta, Boa!";
      resposta.style.color = "green";
    } else {
      resposta.textContent = "❌ Resposta errada.";
      resposta.style.color = "red";
    }
  }
  