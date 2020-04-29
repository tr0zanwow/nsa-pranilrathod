<template>
	<v-container class="fill-height" fluid="">
		<div class="d-flex fill-height flex-column justify-space-between mt-n6" style="width:100%">
			<div class="d-flex justify-space-between">
				<v-card width="250" outlined elevation="10">
					<v-list-item two-line>
						<v-list-item-avatar tile size="50">
							<v-icon size="50" light color="green darken-2">room</v-icon>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title class="title mb-1">400091</v-list-item-title>
							<v-list-item-subtitle>Pincode</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-card>

				<v-card width="250" outlined elevation="10">
					<v-list-item two-line>
						<v-list-item-avatar tile size="50">
							<v-icon size="50" light color="green darken-2">group</v-icon>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title class="title mb-1">5456465</v-list-item-title>
							<v-list-item-subtitle>Population</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-card>

				<v-card width="250" outlined elevation="10">
					<v-list-item two-line>
						<v-list-item-avatar tile size="50">
							<v-icon size="50" light color="green darken-2">apartment</v-icon>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title class="title mb-1">466565</v-list-item-title>
							<v-list-item-subtitle>Households</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-card>

				<v-card width="250" outlined elevation="10">
					<v-list-item two-line>
						<v-list-item-avatar tile size="50">
							<v-icon size="50" light color="green darken-2">mdi-google-maps</v-icon>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title class="title mb-1">Bangalore</v-list-item-title>
							<v-list-item-subtitle>District</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-card>

				<v-card width="250" outlined elevation="10">
					<v-list-item two-line>
						<v-list-item-avatar tile size="50">
							<v-icon size="50" light color="green darken-2">public</v-icon>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title class="title mb-1">India</v-list-item-title>
							<v-list-item-subtitle>Country</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-card>
			</div>

      <div style="width:100%" class="d-flex fill-height mt-3 mb-n2">
        
        <v-card
        class="fill-height"
        width="45%"
        style="z-index:4"
        outlined 
        elevation="10"
        >
<mapbox
      class="fill-height mb-n12"
      style="width:100%;z-index:2"
      access-token="pk.eyJ1IjoidHIwemFud293IiwiYSI6ImNrOWwzcXllbzAwdTgzZXA5amlkNTVib3QifQ.WGdBMQVJlRuVEPj1ILjs6Q"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 1,
        attributionControl: false,
      }"
    />
        </v-card>

        <v-card
        class="fill-height ml-2"
        width="55%"
        outlined 
        elevation="10"
        >
			<BarChart class="fill-height"/>
        </v-card>

      </div>
      
		</div>
	</v-container>
</template>

<style lang="scss">
  ::-webkit-scrollbar{
    display: none;
  }
</style>

<script>
import Mapbox from 'mapbox-gl-vue'
import BarChart from '../charts/BarChart.vue'

export default {
	name: "Dashboard",
	components: { Mapbox, BarChart },
	data: () => ({
	}),
};
</script>
