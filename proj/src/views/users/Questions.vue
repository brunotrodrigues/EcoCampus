<template>
    <div class="containerQuestions">
        <form @submit.prevent>
            <div class="">
                <label class="name" for="">Introduza o seu nome:</label>
                <input class="nameLabel" type="text" id="name" name="name">
            </div>
            <h4 class="questionsNumber">Pergunta 1</h4>
            <h5 class="question">Em tua casa é habitual separar alguns resíduos e colocá-los para reciclar por exemplo no ecoponto?</h5>
            <div class="options">
                <div>
                    <input type="radio" id="sempre" value="sempre" name="sempre">
                    <label for="">Sempre</label>
                </div>
                <div>
                    <input type="radio" id="quaseSempre" value="quaseSempre" name="quaseSempre">
                    <label for="">Quase Sempre</label>
                </div>
                <div>
                    <input type="radio" id="asvezes" value="asvezes" name="asvezes">
                    <label for="">Ás vezes</label>
                </div>
                <div>
                    <input type="radio" id="nunca" value="nunca" name="nunca">
                    <label for="">Nunca</label>
                </div>
            </div>
        </form>
    </div>
    <!-- footer -->
    <footer>
        <div class="firstContainer container">
            <img src="../../assets/ecocampus2.svg" alt="Logo" id="logo" />
        </div>
            <div class="secondContainer container">
                <span>ECOCAMPUS, Inc. © 2023</span>
                <p>
                    A <span class="bold">ECOCAMPUS</span> é um projeto da
                    <span class="bold">Escola Superior de Media Artes e Design</span>
                    do
                    <span class="bold">Instituto Politécnico do Porto</span>
                </p>
            </div>
            <div class="thirdContainer container">
                <router-link to="#">Privacidade</router-link>
                <router-link to="#">Termos de Utilização</router-link>
                <router-link to="#">Contactos</router-link>
            </div>
            <div class="forthContainer container">
                <img src="../../assets/instagram-svgrepo-com.svg" alt="" class="social" />
                <img src="../../assets/facebook-svgrepo-com.svg" alt="" class="social" />
                <img src="../../assets/tiktok-svgrepo-com.svg" alt="" class="social" />
                <img src="../../assets/twitter-svgrepo-com.svg" alt="" class="social" />
            </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                surveyQuestionarie: [
                    {
                        id:2,
                        question: 'Quando lavas os dentes a torneia do lavatório está aberta?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:3,
                        question: 'Lá em casa é costume apagar a televisão deixando-a em Stand By (desligar com o comando)?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:4,
                        question: 'Costumas ouvir música muito alto?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:5,
                        question: 'Na tua casa existe o hábito de comprar produtos biológicos?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:6,
                        question: 'Se pudesses optar entre autocarro e comboio para o mesmo percurso, qual escolherias?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:7,
                        question: 'Se existisse uma campanha de limpeza de praia, com que frequencia irias participar?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:8,
                        question: 'Como te deslocas para a escola? A pé, de bicicleta ou transportes públicos?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:9,
                        question: 'Como te deslocas para a escola? Em viatura privada?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    }
                ]
            }
        },
    }
    
</script>

<style scoped>
footer {
  font-family: "Gilroy", sans-serif;
  background-color: white;
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-columns: minmax(80px, 8%) 300px auto 430px;
}
.containerBg {
  background-color: white;
}
.container {
  display: flex;
}
.firstContainer {
  height: 120px;
  position: absolute;
  grid-column: 1/2;
  justify-content: center;
}
#logo {
  width: 85px;
  position: relative;
  left: -80px;
}
.secondContainer {
  grid-column: 2/3;
  color: black;
  flex-direction: column;
  justify-content: center;
}
.secondContainer span {
  font-weight: 1000;
  font-size: 9px;
}
.secondContainer p {
  font-weight: 700;
  font-size: 9px;
  color: black;
  max-width: 180px;
  margin-bottom: 0;
}
.bold {
  font-weight: 700 !important;
  color: #212020;
  font-weight: bold;
}
.thirdContainer {
  align-items: center;
  justify-content: center;
}
a {
  color: black;
  font-family: "Gilroy", sans-serif;
  text-decoration: none;
  font-weight: 700;
  font-size: 10px;
  padding: 0 20px;
}
.forthContainer {
  align-items: flex-end;
}
.social {
  width: 50px;
  padding: 0 10px;
}
.containerQuestions{
    margin-top: 0%;
    background-color: white;
    font-family: 'Gilroy', sans-serif;
}
.options {
    margin-top: 15px;
    margin-left: 10%;
}
.nameLabel{
    margin-left: 1%;
}
.name{
   margin-top: 2.5%;
   margin-left: 5%;
}
.questionsNumber{
    margin-left:5%;
    margin-top: 1%;
}
.question{
    margin-top: 15px;
    margin-left: 8%;
}

</style>