<template>
	<v-container class="fill-height">

		<!-- Mobile Layout -->
		<div
			style="width:100%"
			class="fill-height d-sm-none d-flex justify-center flex-column"
		>
			<div class="text-center mt-2 d-flex">
				<v-icon size="45" color="deep-orange darken-3">room</v-icon>
				<span id="headLabel" class="text--deep-purple darken-4 pa-1 "
					>GeoSpoc Test Project</span
				>
			</div>

			<div class="text-center mt-3 d-flex justify-center align-center">
				<span id="madeWithLabel" class="black--text darken-3">Made With</span>
			</div>

			<v-container class="fill-height d-flex flex-column ml-n4">
				<div class="d-flex mt-9 justify-space-betwen">
					<div class="d-flex">
						<div class="d-flex flex-column align-center justify-center">
							<v-img
								contain=""
								height="100"
								src="https://img.icons8.com/color/144/000000/vue-js.png"
							></v-img>
						</div>
					</div>
					<div class="d-flex">
						<div class="d-flex flex-column align-center justify-center">
							<v-img
								contain=""
								height="100"
								width="150"
								src="@/assets/mapbox-logo.png"
							></v-img>
						</div>
					</div>
				</div>

				<div class="d-flex mt-6 ml-7">
					<div class="d-flex align-center justify-center">
						<v-img
							contain=""
							height="100"
							width="200"
							src="https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg"
						></v-img>
					</div>
				</div>

				<div class="d-flex mt-6 justify-space-betwen">
					<div class="d-flex ml-3 align-center justify-center">
						<div class="d-flex flex-column align-center justify-center">
							<v-img
								contain=""
								height="120"
								width="120"
								src="https://raw.githubusercontent.com/chartjs/chartjs.github.io/822c141e58223dac8e98b68e21beb37dfeed4a3d/img/chartjs-logo.svg"
							></v-img>
						</div>
					</div>
					<div class="d-flex ml-4">
						<div class="d-flex flex-column align-center justify-center">
							<v-img
								contain=""
								height="50"
								width="140"
								src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"
							></v-img>
						</div>
					</div>
				</div>
			</v-container>
		</div>


		<!-- PC Browser Layout -->
		<v-card
			elevation="10"
			class="fill-height d-flex justify-center align-center flex-column d-none d-xl-flex d-none d-lg-flex d-xl-none d-none d-md-flex d-lg-none d-none d-sm-flex d-md-none"
			width="100%"
			outlined
		>

			<div class="text-center mt-2 d-flex">
				<v-icon size="45" color="deep-orange darken-3">room</v-icon>
				<span id="headLabel" class="text--deep-purple darken-4 pa-1 "
					>GeoSpoc Test Project</span
				>
			</div>

			<div class="text-center mt-3 d-flex justify-center align-center">
				<span id="madeWithLabel" class="black--text darken-3">Made With</span>
			</div>

			<v-container class="fill-height d-flex flex-column">
				<div class="d-flex mt-9 ">
					<div class="d-flex align-center justify-center">
							<v-img
								contain=""
								height="100"
								src="https://img.icons8.com/color/144/000000/vue-js.png"
							></v-img>

							<v-img
								contain=""
								height="100"
								width="150"
								src="@/assets/mapbox-logo.png"
							></v-img>

							<v-img
							class="ml-4"
							contain=""
							height="100"
							width="200"
							src="https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg"
						></v-img>

						<v-img
								contain=""
								height="120"
								width="120"
								src="https://raw.githubusercontent.com/chartjs/chartjs.github.io/822c141e58223dac8e98b68e21beb37dfeed4a3d/img/chartjs-logo.svg"
							></v-img>

						<v-img
								contain=""
								height="50"
								width="140"
								src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"
							></v-img>

					</div>
				</div>
			</v-container>

		</v-card>
	</v-container>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@500&Montserrat:wght@300&family=Kalam&display=swap");

#headLabel {
	font-family: "Jost", sans-serif;
	font-size: 1.65em;
}

#candidateLabel {
	font-family: "Montserrat", sans-serif;
	font-size: 1.1em;
}

#madeWithLabel {
	font-family: "Kalam", cursive;
	font-size: 1.65em;
}
</style>

<script>
export default {};
</script>

<style></style>
