<template>
	<div class="text-center">
		<v-bottom-sheet v-model="sheet" persistent>
			<v-sheet class="fill-height" height="80vh">
				<div class="d-flex fill-height flex-column">
					<div class="green darken-3">
						<v-app-bar
							absolute
							color="#6A76AB"
							dark
							src="https://images.pexels.com/photos/1423601/pexels-photo-1423601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							scroll-target="#scrolling-techniques-3"
						>
							<template v-slot:img="{ props }">
								<v-img
									v-bind="props"
									gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
								></v-img>
							</template>

							<v-toolbar-title>Statistics</v-toolbar-title>

							<v-spacer></v-spacer>

							<v-btn icon @click="sheet = !sheet">
								<v-icon>mdi-close</v-icon>
							</v-btn>

							<template v-slot:extension>
								<v-tabs v-model="tab" align-with-title>
									<v-tab>Stats</v-tab>
									<v-tab>Chart</v-tab>
								</v-tabs>
							</template>
						</v-app-bar>
					</div>
					<v-tabs-items v-model="tab" class="fill-height mt-4">
						<v-tab-item class="mx-auto">
							<v-container class="fill-height mt-5" fluid="">
								<div style="width:100%" class="d-flex flex-column">
									<v-card
										v-for="statsGrp in statsData.dataGrp"
										:key="statsGrp"
										class="mb-5"
										outlined=""
										elevation="10"
										width="100%"
									>
										<v-row no-gutters>
											<template v-for="stats in statsGrp">
												<v-col :key="stats">
													<v-card
														id="statsGrpContents"
														class="pt-4 pb-4 pl-2 pr-2"
														outlined
														tile
													>
														<div class="d-flex"></div>
														<div class="d-flex align-center">
															<v-icon size="25" light color="green darken-2">{{
																stats.icon
															}}</v-icon>
															<span class="subtitle-1 font-weight-medium ml-1">{{
																stats.value
															}}</span>
														</div>
														<span id="helperLabel" class="caption grey--text darken-2">{{
															stats.label
														}}</span>
													</v-card>
												</v-col>
											</template>
										</v-row>
									</v-card>
									<v-card class="mt-8" outlined="" elevation="10" width="100%">
										<v-row no-gutters>
											<v-col>
												<v-card
													id="statsGrpContents"
													class="pt-4 pb-4 pl-2 pr-2"
													outlined
													tile
												>
													<div class="d-flex align-center flex-column justify-center">
														<v-icon size="45" light color="green darken-2">place</v-icon>
														<span class="title font-weight-medium mt-2">{{
															statsData.pinLoc.value
														}}</span>
													</div>
													<span id="helperLabel" class="caption grey--text darken-2">{{
														statsData.pinLoc.label
													}}</span>
												</v-card>
											</v-col>
										</v-row>
									</v-card>
								</div>
							</v-container>
						</v-tab-item>
						<v-tab-item class="fill-height">
							<BarChart style="height: calc(100% - 20px)" class="mt-3" :chartData="chartData.chartData" :options="chartData.options" />
						</v-tab-item>
					</v-tabs-items>
				</div>
			</v-sheet>
		</v-bottom-sheet>
	</div>
</template>

<style lang="scss" scoped>
#sheetContent {
	position: relative;
}

#statsGrpContents {
	position: relative;
}

#helperLabel {
	position: absolute;
	bottom: -2px;
	right: 5px;
	font-size: 11px !important;
}

#closeBtn {
	position: absolute;
	top: -10px;
	right: -10px;
}

#statsLabel {
	position: absolute;
	top: 0px;
	left: 0px;
}
</style>

<script>
import BarChart from "../../charts/BarChart.vue";
export default {
	components: {
		BarChart
	},
	props: {
		sheet: {
			required: true,
			type: Boolean
		},
		chartData: {
			required: true,
			type: Object
		},
		statsData: {
			required: true,
			type: Object
		}
	},
	data: () => ({
		tab: null,
		items: ["Appetizers", "Entrees", "Deserts", "Cocktails"],
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	})
};
</script>
