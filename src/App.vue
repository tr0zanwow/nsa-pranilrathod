<template>
	<v-app id="inspire">
		<v-app-bar app color="deep-orange darken-3" height="50" dark>
			<v-img
				alt="geospoc_logo"
				class="shrink mr-2"
				contain
				src="../src/assets/pin.png"
				transition="scale-transition"
				width="30"
			/>

			<v-toolbar-title class="white--text">
				GeoSpoc
			</v-toolbar-title>

			<v-spacer></v-spacer>
			<v-btn class="d-none d-xl-flex d-none d-lg-flex d-xl-none d-none d-md-flex d-lg-none d-none d-sm-flex d-md-none" to="/dashboard" text small dark=""
				><v-icon size="26" left>dashboard</v-icon>Dashboard</v-btn
			>
			<v-btn class="d-none d-xl-flex d-none d-lg-flex d-xl-none d-none d-md-flex d-lg-none d-none d-sm-flex d-md-none" to="/about" text small dark=""
				><v-icon size="26" left>info_outline</v-icon>About</v-btn
			>

			<v-btn class="d-flex d-sm-none" to="/dashboard" icon dark=""
				><v-icon >dashboard</v-icon></v-btn
			>

			<v-btn class="d-flex d-sm-none" to="/about" icon dark=""
				><v-icon >info_outline</v-icon></v-btn
			>
		</v-app-bar>

		<v-content v-if="!isMobile()">
			<v-container class="fill-height" fluid>
				<transition name="fade">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</transition>
			</v-container>
		</v-content>
		<v-content v-else>
			<v-container class="fill-height" style="height: calc(100% - 53px)" fluid>
				<transition name="fade">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</transition>
			</v-container>
		</v-content>
	</v-app>
</template>

<style lang="scss">

</style>

<script>
export default {
	name: "App",
	props: {
		source: String
	},
	methods:{
		isMobile() {
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				return true
			} else {
				return false
			}
			},
	},
	components: {},

	data: () => ({
		drawer: null
		//
	})
};
</script>
