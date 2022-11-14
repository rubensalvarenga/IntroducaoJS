var paciente = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){

    event.target.parentNode.classList.add("faceOut");


      // espera 5s antes de remover


        setTimeout(function(){

            var paiDoAlvo = event.target.parentNode
            paiDoAlvo.remove();

        }, 500);




});

