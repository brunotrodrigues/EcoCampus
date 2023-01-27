<template>
    <div class="containerQuestions">
        <form @submit.prevent>
            <div class="">
                <label class="name" for="">Introduza o seu nome:</label>
                <input class="nameLabel" type="text" id="name" name="name">
            </div>
            <!-- pergunta 1 -->
            <div>
                <h4 class="questionsNumber">Pergunta 1</h4>
                <h5 class="question">Em tua casa é habitual separar alguns resíduos e colocá-los para reciclar por exemplo no ecoponto?</h5>
                <div class="options">
                    <div>
                        <input type="radio" id="sempre1" value="sempre1" name="radio1">
                        <label for="sempre1">Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="quaseSempre1" value="quaseSempre1" name="radio1">
                        <label for="quaseSempre1">Quase Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="asvezes1" value="asvezes1" name="radio1">
                        <label for="asvezes1">Ás vezes</label>
                    </div>
                    <div>
                        <input type="radio" id="nunca1" value="nunca1" name="radio1">
                        <label for="nunca1">Nunca</label>
                    </div>
                </div>
            </div>
            <!-- pergunta 2-->
            <div>
                <h4 class="questionsNumber">Pergunta 2</h4>
                <h5 class="question">Quando lavas os dentes a torneia do lavatório está aberta?</h5>
                <div class="options">
                    <div>
                        <input type="radio" id="sempre2" value="sempre2" name="radio2">
                        <label for="sempre2">Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="quaseSempre2" value="quaseSempre2" name="radio2">
                        <label for="quaseSempre2">Quase Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="asvezes2" value="asvezes2" name="radio2">
                        <label for="asvezes2">Ás vezes</label>
                    </div>
                    <div>
                        <input type="radio" id="nunca2" value="nunca2" name="radio2">
                        <label for="nunca2">Nunca</label>
                    </div>
                </div>
            </div>
            <!-- pergunta 3-->
            <div>
                <h4 class="questionsNumber">Pergunta 3</h4>
                <h5 class="question">Lá em casa é costume apagar a televisão deixando-a em Stand By (desligar com o comando)?</h5>
                <div class="options">
                    <div>
                        <input type="radio" id="sempre3" value="sempre3" name="radio3">
                        <label for="sempre3">Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="quaseSempre3" value="quaseSempre3" name="radio3">
                        <label for="quaseSempre3">Quase Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="asvezes3" value="asvezes3" name="radio3">
                        <label for="asvezes3">Ás vezes</label>
                    </div>
                    <div>
                        <input type="radio" id="nunca3" value="nunca3" name="radio3">
                        <label for="nunca3">Nunca</label>
                    </div>
                </div>
            </div>
            <!-- pergunta 4-->
            <div>
                <h4 class="questionsNumber">Pergunta 4</h4>
                <h5 class="question">Costumas ouvir música muito alto?</h5>
                <div class="options">
                    <div>
                        <input type="radio" id="sempre4" value="sempre4" name="radio4">
                        <label for="sempre4">Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="quaseSempre4" value="quaseSempre4" name="radio4">
                        <label for="quaseSempre4">Quase Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="asvezes4" value="asvezes4" name="radio4">
                        <label for="asvezes4">Ás vezes</label>
                    </div>
                    <div>
                        <input type="radio" id="nunca4" value="nunca4" name="radio4">
                        <label for="nunca4">Nunca</label>
                    </div>
                </div>
            </div>
            <!-- pergunta 5-->
            <div>
                <h4 class="questionsNumber">Pergunta 5</h4>
                <h5 class="question">Na tua casa existe o hábito de comprar produtos biológicos?</h5>
                <div class="options">
                    <div>
                        <input type="radio" id="sempre5" value="sempre5" name="radio5">
                        <label for="sempre5">Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="quaseSempre5" value="quaseSempre5" name="radio5">
                        <label for="quaseSempre5">Quase Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="asvezes5" value="asvezes5" name="radio5">
                        <label for="asvezes5">Ás vezes</label>
                    </div>
                    <div>
                        <input type="radio" id="nunca5" value="nunca5" name="radio5">
                        <label for="nunca5">Nunca</label>
                    </div>
                </div>
            </div>
            <!-- pergunta 6-->
            <div>
                <h4 class="questionsNumber">Pergunta 6</h4>
                <h5 class="question">Se existisse uma campanha de limpeza de praia, com que frequencia irias participar?</h5>
                <div class="options">
                    <div>
                        <input type="radio" id="sempre6" value="sempre6" name="radio6">
                        <label for="sempre6">Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="quaseSempre6" value="quaseSempre6" name="radio6">
                        <label for="quaseSempre6">Quase Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="asvezes6" value="asvezes6" name="radio6">
                        <label for="asvezes6">Ás vezes</label>
                    </div>
                    <div>
                        <input type="radio" id="nunca6" value="nunca6" name="radio6">
                        <label for="nunca6">Nunca</label>
                    </div>
                </div>
            </div>
            <!-- pergunta 7-->
            <div>
                <h4 class="questionsNumber">Pergunta 7</h4>
                <h5 class="question">Com que frequencia deslocas para a escola, a pé, de bicicleta ou de transportes públicos?</h5>
                <div class="options">
                    <div>
                        <input type="radio" id="sempre7" value="sempre7" name="radio7">
                        <label for="sempre7">Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="quaseSempre7" value="quaseSempre7" name="radio7">
                        <label for="quaseSempre7">Quase Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="asvezes7" value="asvezes7" name="radio7">
                        <label for="asvezes7">Ás vezes</label>
                    </div>
                    <div>
                        <input type="radio" id="nunca7" value="nunca7" name="radio7">
                        <label for="nunca7">Nunca</label>
                    </div>
                </div>
            </div>
            <!-- pergunta -->
            <div>
                <h4 class="questionsNumber">Pergunta 8</h4>
                <h5 class="question">Com que frequencia deslocas para a escola de viatura privada?</h5>
                <div class="options">
                    <div>
                        <input type="radio" id="sempre8" value="sempre8" name="radio8">
                        <label for="sempre8">Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="quaseSempre8" value="quaseSempre8" name="radio8">
                        <label for="quaseSempre8">Quase Sempre</label>
                    </div>
                    <div>
                        <input type="radio" id="asvezes8" value="asvezes8" name="radio8">
                        <label for="asvezes8">Ás vezes</label>
                    </div>
                    <div>
                        <input type="radio" id="nunca8" value="nunca8" name="radio8">
                        <label for="nunca8">Nunca</label>
                    </div>
                </div>
            </div>
            <div class="buttonContainer">
                <button class="button">Enviar respostas</button>
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
input[type="radio"] {
  margin-top: -1px;
  vertical-align: middle;
  margin-right: 5px;
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
  align-items: center;
}
.social {
  width: 50px;
  padding: 0 10px;
}
.buttonContainer {
    display: flex;
    margin-left:5%;
    margin-top: 3%;
    
}
.button {
    background-color: white;
    color: black;
    box-sizing: border-box;
    border: 3px solid #000000;
    text-align: center;
    font-weight: 700;
}
.containerQuestions{
    margin-top: 0%;
    background-color: white;
    font-family: 'Gilroy', sans-serif;
}
.options {
    margin-top: 15px;
    margin-left: 11%;
}
.nameLabel{
    margin-left: 1%;
}
.name{
   margin-top: 2.5%;
   font-weight: 600;
   font-size: 18px;
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