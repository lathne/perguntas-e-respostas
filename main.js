const name = window.prompt("Bem vindo! Qual seu nome?");

nome.innerHTML = "Olá, " + name;


const querJogar = window.prompt("Você quer responder o questionário? Responda 1-Sim 2-Não");

if(querJogar == 1) {
    const questaoUm = window.prompt("Quanto é 1 + 1?");
    
    if (questaoUm == 2){
        const respostaCorreta1 = document.getElementById("resposta-correta1");
        respostaCorreta1.innerHTML = "Resposta 1";
    } else {
        const respostaErrada1 = document.getElementById("resposta-errada1");
        respostaErrada1.innerHTML = "Resposta 1";
    }
    console.log(questaoUm);


    const questaoDois = window.prompt("Quanto é 2 + 2?");

    if (questaoDois == 4) {
        const respostaCorreta2 = document.getElementById("resposta-correta2");
        respostaCorreta2.innerHTML = "Resposta 2";
    } else {
        const respostaErrada2 = document.getElementById("resposta-errada2")
        respostaErrada2.innerHTML = "Resposta 2";
    }

    const questaoTres = window.prompt("Quanto é 5 + 1?");

    if (questaoTres == 6){
      const respostaCorreta3 = document.getElementById("resposta-correta3");
      respostaCorreta3.innerHTML = "Resposta 3";  
    } else {
        const respostaErrada3 = document.getElementById("resposta-errada3");
        respostaErrada3.innerHTML = "Resposta 3";
    }
}

if(querJogar == 2) {
   alert("Obrigado, nos encontramos na próxima!");
}
