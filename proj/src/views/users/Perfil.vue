<script>

</script>

<template>
		<div class="containerBg">
			<div class="container2">
        <h2 class="headerContainer2">Edite os seus dados!</h2>
          <span class="span1">
            Nesta pagina pode editar os seus dados, como o seu nome, o seu apelido, o seu nome de utilizador e a sua password.
          </span> 
      </div>      
				<div class="editContainer">
					<div class="infoContainer nameContainer">
						<span>Primeiro Nome:</span>
						<input class="value1" type="text" name="firstName" id="firstName" />
					</div>
					<div class="infoContainer surnameContainer">
						<span>Apelido:</span>
						<input class="value2" type="text" name="lastName" id="lastName" />
					</div>
					<div class="infoContainer surnameContainer">
						<span>Nome de utilizador:</span>
						<input class="value3" type="text" name="username" id="username" />
					</div>
					<div class="infoContainer surnameContainer">
						<span>Palavra-passe:</span>
						<input class="value4" type="password" name="password" id="password" />
					</div>
			</div>
      <div class="buttonContainer">
        <button class="button">Editar</button>
      </div>
			
		</div>
		<!-- footer -->
		<footer class="bottom">
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
                <router-link class="aa" to="#">Privacidade</router-link>
                <router-link class="aa" to="#">Termos de Utilização</router-link>
                <router-link class="aa" to="#">Contactos</router-link>
            </div>
            <div class="forthContainer container">
                <img src="../../assets/instagram-svgrepo-com.svg" alt="" class="social" />
                <img src="../../assets/facebook-svgrepo-com.svg" alt="" class="social" />
                <img src="../../assets/tiktok-svgrepo-com.svg" alt="" class="social" />
                <img src="../../assets/twitter-svgrepo-com.svg" alt="" class="social" />
            </div>
    </footer>
</template>

<style>

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
  font-family: "Gilroy", sans-serif;
}
.value1 {
  margin-left: 1%;
  width: 200px;
}
.value2 {
  margin-left: 1%;
  width: 250px;
}
.value3 {
  margin-left: 1%;
  width: 167px;
}
.value4 {
  margin-left: 1%;
  width: 197px;
}

.container {
  display: flex;
}

.infoContainer {
    margin-top: 3%;
    margin-left: 8%;
}

#logo {
  width: 85px; 
  position: relative;
  right: -80px;
}

.firstContainer {
  height: 120px;
  position: absolute;
  grid-column: 1/2;
  justify-content: center;
}

.headerContainer2 {
  margin-top: 3%;
  font-size: 60px;
	font-family: 'Gilroy', sans-serif;
	font-weight: bold;
	text-align: center;
	line-height: 88.5%;
	margin-bottom: 20px;
}

.span1 {
	margin-top: 10px;
  font-family: 'Gilroy', sans-serif;
  width: 50%;
}

.container2 {
	margin-top: 0%;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}



.span {
	margin-top: 10px;
  font-family: 'Gilroy', sans-serif;
  width: 50%;
}

.buttonContainer {
    display: flex;
    margin-left:5%;
    margin-top: 3%;
    background-color: white;
    
}
.button {
    background-color: white;
    color: black;
    box-sizing: border-box;
    border: 3px solid #000000;
    text-align: center;
    font-weight: 700;
    margin-left: 10%;
}

.secondContainer {
  grid-column: 2/3;
  color: black;
  flex-direction: column;
  justify-content: center;
  background-color: white;
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

.aa {
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

</style>