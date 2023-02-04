<script>

</script>

<template>
		<div class="container">
			<div class="secondContainer">
				<h4>Edite os seus dados!</h4>
				<div class="divider"></div>
				<div class="editContainer">
					<div class="infoContainer nameContainer">
						<span>Primeiro Nome:</span>
						<input class="value" type="text" name="firstName" id="firstName" />
					</div>
					<div class="infoContainer surnameContainer">
						<span>Apelido:</span>
						<input class="value" type="text" name="lastName" id="lastName" />
					</div>
					<div class="infoContainer surnameContainer">
						<span>Nome de utilizador:</span>
						<input class="value" type="text" name="username" id="username" />
					</div>
					<div class="infoContainer surnameContainer">
						<span>Palavra-passe:</span>
						<input type="password" name="password" id="password" />
					</div>
					
				</div>
			</div>
			<button>Editar</button>
		</div>
</template>

<style>
.container {
	background-color: white;
}
</style>