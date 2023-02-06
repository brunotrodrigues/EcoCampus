<script>

</script>



<template>
  <div class="containerBg">
			<div class="container2">
        <h2 class="headerContainer2">Registe as ocorrências!</h2>
          <span class="span1">
            Nesta pagina pode registar as ocorrências que visualiza no espaço escolar. Como por exemplo (na sala B201 existe uma lâmpada fundida). 
          </span> 
      </div>      
				<div class="editContainer">
					<div class="infoContainer">
						<span>Titulo:</span>
						<input class="value1" type="text" name="titleOc" id="titleOc" />
					</div>
					<div class="infoContainer">
						<span>Descrição:</span>
						<input class="value2" type="text" name="descriptionOC" id="descriptionOC" />
					</div>
					<div class="infoContainer">
						<span>Localização:</span>
						<input class="value3" type="text" name="locationOco" id="locationOco" />
					</div>
			</div>
      <div class="buttonContainer">
        <button class="button">Enviar</button>
      </div>
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

.span1 {
  justify-content: center;
  text-align: center;
}

.span {
	margin-top: 10px;
  font-family: 'Gilroy', sans-serif;
  width: 50%;
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