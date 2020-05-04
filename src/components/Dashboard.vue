<template>
  <v-container v-if="!isMobile()" class="fill-height d-none d-xl-flex d-none d-lg-flex d-xl-none d-none d-md-flex d-lg-none d-none d-sm-flex d-md-none" fluid="">
    <div
      class="d-flex fill-height flex-column justify-space-between mt-n6"
      style="width: 100%;"
      >
      <div class="d-flex justify-space-between">

        <v-card v-for="(item,index) in statsCardData" :key="index" min-width="250" max-width="300" outlined elevation="10">
          <v-list-item two-line>
            <v-list-item-avatar tile size="50">
              <v-icon size="50" light color="green darken-2">{{item.icon}}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title style="display: block;word-wrap:break-word;width: 50px;white-space: normal" class="title mb-1">{{item.value}}</v-list-item-title>
              <v-list-item-subtitle>{{item.label}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

      </div>

      <div style="width: 100%;" class="d-flex fill-height mt-2 mb-n5">
        <v-card
          class="fill-height"
          width="45%"
          style="z-index: 4;"
          outlined
          elevation="10"
        >
          <mapbox
            class="fill-height mb-n12"
            style="width: 100%; z-index: 2;"
            access-token="pk.eyJ1IjoidHIwemFud293IiwiYSI6ImNrOWwzcXllbzAwdTgzZXA5amlkNTVib3QifQ.WGdBMQVJlRuVEPj1ILjs6Q"
            :map-options="{
              style: 'mapbox://styles/mapbox/light-v9',
              center: [77.5946, 12.9716],
              zoom: 10,
              attributionControl: false,
            }"
			:geolocate-control="{
				show: true,
				position: 'top-right',
			}"
			:scale-control="{
				show: true,
				position: 'bottom-left',
			}"
			@map-load="loaded"

          />
        </v-card>

        <v-card class="fill-height ml-2" width="55%" outlined elevation="10">
          <BarChart style="height: auto" class="mt-4" :chartData="chartData" :options="options" />
        </v-card>
      </div>
        <v-overlay :value="isOverlaySet">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </div>
    
  </v-container>

  <v-layout v-else style="width:100%;" class="d-flex d-sm-none fill-height">
      <v-card
          style=""
          class=""
          width="100%"
          height="100%"
          outlined
          elevation="10"
        >
          <mapbox
            class="fill-height"
            style="width: 100%;"
            access-token="pk.eyJ1IjoidHIwemFud293IiwiYSI6ImNrOWwzcXllbzAwdTgzZXA5amlkNTVib3QifQ.WGdBMQVJlRuVEPj1ILjs6Q"
            :map-options="{
              style: 'mapbox://styles/mapbox/light-v9',
              center: [77.5946, 12.9716],
              zoom: 10,
              attributionControl: false,
            }"
			:geolocate-control="{
				show: true,
				position: 'top-right',
			}"
			:scale-control="{
				show: true,
				position: 'bottom-left',
			}"
			@map-load="loaded"

          />
        </v-card>
        <BottomSheet :chartData="chartDataMob" :statsData="statsCardDataMob" :sheet="popupSheet"/>
        <v-overlay :value="isOverlaySet">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
  </v-layout>
</template>

<style lang="scss">
::-webkit-scrollbar {
  display: none;

}
</style>

<script>
import Mapbox from "mapbox-gl-vue"
import BarChart from "../charts/BarChart.vue"
import getCoordinates from "../graphql/getCoordinates.gql"
import searchData from "../graphql/searchData.gql"
import PopupContent from '../charts/others/Popup.vue'
import { EventBus } from '../event-bus.js'
import BottomSheet from '../charts/others/BottomSheet.vue'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: "Dashboard",
  components: { Mapbox, BarChart, BottomSheet },
	data: () => ({
    chartData :  {
          labels: ['House', 'Food','Apparel','Transport','Health', 'Finance', 'Education', 'Entertainment', 'Other'],
          datasets: [
            {
              label: 'Checkout map to see details',
              backgroundColor: '#43A047',
              data: []
            }
          ]
        },
    statsCardDataMob: null,
    chartDataMob: null,
    popupSheet: false,
    isOverlaySet: false,
    getCoordinates: null,
    skipQuery: true,
    coordinatesLoading: true,
    statsCardData: [
      { icon: 'room', label: 'Pincode', value: 'N/A'},
      { icon: 'group', label: 'Population', value: 'N/A'},
      { icon: 'apartment', label: 'Households', value: 'N/A'},
      { icon: 'mdi-currency-inr', label: 'Income', value: 'N/A'},
      { icon: 'mdi-google-maps', label: 'City', value: 'N/A'}
    ],
    searchData: null,
    options: {
      scales: {
            yAxes: [{
                position: "left",
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Income in Lakhs'
                },
            }]
        },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  methods:{
    isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 },
    loaded(map){
      var featureCollection = []
      if(!this.coordinatesLoading){
          this.getCoordinates.forEach(element => {
            featureCollection.push({
                    'type': 'Feature',
                    'properties': {
                        'description': (element.attributes.pincode == null) ? 'Locality: '+element.attributes.locality : 'Pincode: '+element.attributes.pincode,
                    },
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': element.geometry.rings
                    }
                })
          });

          map.addSource('places', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': featureCollection
                }
        });

        map.addLayer({
              'id': 'places',
              'type': 'fill',
              'source': 'places',
              'layout': {},
              'paint': {
              'fill-color': '#ff5722',
              'fill-opacity': 0.5
              }
          });

        map.on('click', 'places', function(e) {
          var description = e.features[0].properties.description;
          new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML('<div id="popup-content"></div>')
          .addTo(map);

        new PopupContent({
          propsData: { description: description}
        }).$mount('#popup-content')

        });
      }
    },
    setChartData(payload){
      if(payload.education == null){
        this.chartData =  {
          labels: ['House', 'Food','Apparel','Transport','Health', 'Finance', 'Education', 'Entertainment', 'Other'],
          datasets: [
            {
              label: payload.pincode == null ? "Locality ["+payload.locality+"]  " : "Pincode ["+payload.pincode+"]  ",
              backgroundColor: '#43A047',
              data: []
            }
          ]
        }
      this.chartDataMob = {
        chartData: this.chartData,
        options: this.options
      }
      }
      else{
        this.chartData =  {
          labels: ['House', 'Food','Apparel','Transport','Health', 'Finance', 'Education', 'Entertainment', 'Other'],
          datasets: [
            {
              label: payload.pincode == null ? "Locality ["+payload.locality+"]  " : "Pincode ["+payload.pincode+"]  ",
              backgroundColor: '#43A047',
              data: [payload.house,payload.food,payload.apparel,payload.teansport,payload.health,payload.finance,payload.education,payload.entertainment,payload.other]
            }
          ]
        }
        this.chartDataMob = {
        chartData: this.chartData,
        options: this.options
      }
      }   
    },
    setStatsData(payload){
      this.statsCardData[0].value = payload.pincode == null ? payload.locality : payload.pincode
      this.statsCardData[0].label = payload.pincode == null ? "Locality" : "Pincode"
      this.statsCardData[1].value = payload.population == null ? 'N/A' : payload.population
      this.statsCardData[2].value = payload.households == null ? 'N/A' : payload.households
      this.statsCardData[3].value = payload.income == null ? 'N/A' : payload.income
      this.statsCardData[4].value = payload.city == null ? payload.state_name : payload.city
      this.statsCardData[4].label = payload.city == null ? "State" : "City"
      
      this.statsCardDataMob =  {
        pinLoc: {
          value: this.statsCardData[0].value,
          label: this.statsCardData[0].label
        },
        dataGrp: [
          [
            { icon: 'group', label: 'Population', value: this.statsCardData[1].value},
            { icon: 'apartment', label: 'Households', value: this.statsCardData[2].value}
          ],
          [
            { icon: 'mdi-currency-inr', label: 'Income', value: this.statsCardData[3].value},
            { icon: 'mdi-google-maps', label: 'City', value: this.statsCardData[4].value}
          ]
        ]
      }
        
    }
  },

  apollo:{
    getCoordinates:{
      query: getCoordinates,
      result({ data, loading, networkStatus}){
        this.coordinatesLoading = loading
        if(!loading)
        console.log("Coordinates loaded")
      },
      error(error){
        console.error("Got An Error", error)
      }
    },

    searchData:{
      query: searchData,
      variables(){
        return{
          pincode: this.pincode,
          locality: null
        }
      },
      skip() {
        return this.skipQuery
      },
      result({ data, loading, networkStatus}){
        if(!loading){
          this.setStatsData(data.searchData)
          this.setChartData(data.searchData)
          this.popupSheet = true
          this.isOverlaySet = false
        }
      },
      error(error){
        console.error("Got An Error", error)
      }
    }
  },
	mounted(){
    var vm = this
    EventBus.$on('searchPincode', function(payload) {
        vm.isOverlaySet = true
        vm.skipQuery = false
        vm.$apollo.queries.searchData.refetch({
          pincode: parseInt(payload.split('Pincode: ')[1]),
          locality: null
          })
    });

    EventBus.$on('searchLocality', function(payload) {
        vm.isOverlaySet = true
        vm.skipQuery = false
        vm.$apollo.queries.searchData.refetch({
          locality: payload.split('Locality: ')[1],
          pincode: null
          })
    });
    window.scrollTo(0,0);
	}
};
</script>