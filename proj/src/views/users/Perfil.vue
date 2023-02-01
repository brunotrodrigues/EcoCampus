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

</style>