<script>

</script>

<template>
  <div>
		<div class="container">
			<div class="topContainer">
				<img
					src="../../public/assets/user.png"
					id="profile"
					alt=""
					width="100"
					height="100"
				/>
				<!-- <h1>Olá {{ getLoggedUser.userName }}!</h1> -->
			</div>
			<div class="secondContainer">
				<h4>Informações do Utilizador</h4>
				<div class="divider"></div>
				<button>Editar</button>

				<div class="editContainer">
					<div class="infoContainer nameContainer">
						<span>Primeiro Nome</span>
						<span class="value"></span>
					</div>
					<div class="infoContainer surnameContainer">
						<span>Apelido</span>
						<span class="value"></span>
					</div>
					<div class="infoContainer numberContainer">
						<span>Número de aluno</span>
						<span class="value"></span>
					</div>
					<div class="infoContainer dobContainer">
						<span>Data de Nascimento</span>
						<span class="value"></span>
					</div>
					<div class="infoContainer emailContainer">
						<span>Email</span>
						<span class="value"></span>
					</div>
					<div class="infoContainer nifContainer">
						<span>NIF</span>
						<span class="value"></span>
					</div>
				</div>
			</div>

			<div class="thirdContainer">
				<h4>Editar Palavra-passe</h4>
				<div class="divider"></div>
				<div class="passContainer">
					<form>
						<label for="actualPass">Palavra-passe atual</label>
						<input type="password" name="" id="" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.container {
	height: 121vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;
	background-color: black;
	font-family: 'Gilroy', sans-serif;
	color: white;
}

.topContainer {
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 44px;
	font-weight: 800;
}

.topContainer h1 {
	margin-top: 20px;
	margin-bottom: 20px;
}

.secondContainer {
	width: 70%;
}

.secondContainer h4 {
	padding-left: 30px;
}

.infoContainer {
	display: flex;
	flex-direction: column;
}

.infoContainer span:first-child {
	font-size: 12px;
}

.value {
	font-weight: 700;
	font-size: 21px;
}

.divider {
	width: 100%;
	height: 1px;
	background-color: #bababa;
}

.editContainer {
	margin-top: 50px;
	margin-bottom: 50px;
	padding-left: 50px;
	display: grid;
	width: 50%;
	grid-template-columns: 1.9fr 2fr 0.5fr 2fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.thirdContainer {
	width: 70%;
}

.thirdContainer h4 {
	padding-left: 30px;
}

.dobContainer {
	grid-row: 3/4;
}

.nifContainer {
	grid-row: 5/6;
}
.numberContainer {
	grid-row: 3/4;
	grid-column: 4/5;
}

.emailContainer {
	grid-row: 1/2;
	grid-column: 4/5;
}
</style>