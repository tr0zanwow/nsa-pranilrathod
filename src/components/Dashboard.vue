<template>
  <v-container class="fill-height" fluid="">
    <div
      class="d-flex fill-height flex-column justify-space-between mt-n6"
      style="width: 100%;"
    >
      <div class="d-flex justify-space-between">
        <v-card width="200" outlined elevation="10">
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

        <v-card class="ml-2" width="200" outlined elevation="10">
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

        <v-card width="200" outlined elevation="10">
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

        <v-card width="200" outlined elevation="10">
          <v-list-item two-line>
            <v-list-item-avatar tile size="50">
              <v-icon size="50" light color="green darken-2">mdi-currency-inr</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title mb-1">256689</v-list-item-title>
              <v-list-item-subtitle>Income</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card width="200" outlined elevation="10">
          <v-list-item two-line>
            <v-list-item-avatar tile size="50">
              <v-icon size="50" light color="green darken-2"
                >mdi-google-maps</v-icon
              >
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title mb-1"
                >Bangalore</v-list-item-title
              >
              <v-list-item-subtitle>District</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card width="200" outlined elevation="10">
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
              center: [77.373063, 12.953625],
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
          <BarChart class="fill-height" :chartdata="chartdata" :options="options" />
        </v-card>
      </div>
    </div>
  </v-container>
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
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
	name: "Dashboard",
  components: { Mapbox, BarChart },
  methods:{
    loaded(map){
      map.addSource('maine', {
          'type': 'geojson',
          'data': 
          {
          'type': 'Feature',
          'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
            [
              77.479470000000006,
              12.958931
            ],
            [
              77.479274000000004,
              12.958657000000001
            ],
            [
              77.479223000000005,
              12.958178999999999
            ],
            [
              77.479091999999994,
              12.957516
            ],
            [
              77.479073,
              12.957435
            ],
            [
              77.478718999999998,
              12.955949
            ],
            [
              77.478396000000004,
              12.954592
            ],
            [
              77.478325999999996,
              12.954592
            ],
            [
              77.478164000000007,
              12.954044
            ],
            [
              77.478018000000006,
              12.953548
            ],
            [
              77.477918000000003,
              12.953208999999999
            ],
            [
              77.477601000000007,
              12.952400000000001
            ],
            [
              77.477379999999997,
              12.951831
            ],
            [
              77.477258000000006,
              12.951836
            ],
            [
              77.477171999999996,
              12.951826000000001
            ],
            [
              77.477117000000007,
              12.951810999999999
            ],
            [
              77.477046000000001,
              12.951805999999999
            ],
            [
              77.476878999999997,
              12.951816000000001
            ],
            [
              77.476772999999994,
              12.951836
            ],
            [
              77.476662000000005,
              12.951847000000001
            ],
            [
              77.476566000000005,
              12.951841
            ],
            [
              77.476505000000003,
              12.951827
            ],
            [
              77.476433999999998,
              12.951803
            ],
            [
              77.476369000000005,
              12.951763
            ],
            [
              77.476175999999995,
              12.951689
            ],
            [
              77.476095000000001,
              12.951748
            ],
            [
              77.475973999999994,
              12.951783000000001
            ],
            [
              77.475549000000001,
              12.951786999999999
            ],
            [
              77.474870999999993,
              12.951794
            ],
            [
              77.472919000000005,
              12.951813
            ],
            [
              77.472829000000004,
              12.951815
            ],
            [
              77.472738000000007,
              12.951816000000001
            ],
            [
              77.472438999999994,
              12.951817999999999
            ],
            [
              77.472493,
              12.951771000000001
            ],
            [
              77.471326000000005,
              12.951765
            ],
            [
              77.471406000000002,
              12.952349999999999
            ],
            [
              77.471759000000006,
              12.95607
            ],
            [
              77.471849000000006,
              12.960734
            ],
            [
              77.471658000000005,
              12.964567000000001
            ],
            [
              77.471564000000001,
              12.965519
            ],
            [
              77.471577999999994,
              12.966106999999999
            ],
            [
              77.471564000000001,
              12.966340000000001
            ],
            [
              77.471563000000003,
              12.966483999999999
            ],
            [
              77.471592000000001,
              12.966706
            ],
            [
              77.471635000000006,
              12.966926000000001
            ],
            [
              77.471672999999996,
              12.967116000000001
            ],
            [
              77.471855000000005,
              12.967022999999999
            ],
            [
              77.472554000000002,
              12.966856
            ],
            [
              77.472712000000001,
              12.966727000000001
            ],
            [
              77.472881000000001,
              12.966708000000001
            ],
            [
              77.474744999999999,
              12.966388999999999
            ],
            [
              77.474880999999996,
              12.966362999999999
            ],
            [
              77.475065999999998,
              12.966328000000001
            ],
            [
              77.475099,
              12.966322
            ],
            [
              77.475139999999996,
              12.966312
            ],
            [
              77.475199000000003,
              12.966283000000001
            ],
            [
              77.475250000000003,
              12.966263
            ],
            [
              77.475285999999997,
              12.966248
            ],
            [
              77.475346000000002,
              12.966219000000001
            ],
            [
              77.475361000000007,
              12.966199
            ],
            [
              77.475371999999993,
              12.966169000000001
            ],
            [
              77.475421999999995,
              12.966225
            ],
            [
              77.475489999999994,
              12.966206
            ],
            [
              77.475513000000007,
              12.966194
            ],
            [
              77.475550999999996,
              12.966179
            ],
            [
              77.475611999999998,
              12.966165999999999
            ],
            [
              77.475646999999995,
              12.966154
            ],
            [
              77.475678000000002,
              12.966149
            ],
            [
              77.475716000000006,
              12.966144999999999
            ],
            [
              77.475730999999996,
              12.966144999999999
            ],
            [
              77.475751000000002,
              12.966142
            ],
            [
              77.475770999999995,
              12.966137
            ],
            [
              77.475798999999995,
              12.966132
            ],
            [
              77.475817000000006,
              12.966125
            ],
            [
              77.475853000000001,
              12.966108999999999
            ],
            [
              77.475903000000002,
              12.966082999999999
            ],
            [
              77.475932999999998,
              12.966062000000001
            ],
            [
              77.475986000000006,
              12.966051
            ],
            [
              77.476023999999995,
              12.966048000000001
            ],
            [
              77.476060000000004,
              12.966044999999999
            ],
            [
              77.476089999999999,
              12.966035
            ],
            [
              77.476125999999994,
              12.966022000000001
            ],
            [
              77.476236999999998,
              12.965954
            ],
            [
              77.476287999999997,
              12.965927000000001
            ],
            [
              77.476322999999994,
              12.965907
            ],
            [
              77.476364000000004,
              12.96589
            ],
            [
              77.476406999999995,
              12.96588
            ],
            [
              77.476489999999998,
              12.965861
            ],
            [
              77.476530999999994,
              12.965854
            ],
            [
              77.476552999999996,
              12.965835999999999
            ],
            [
              77.476575999999994,
              12.965812
            ],
            [
              77.476590999999999,
              12.96579
            ],
            [
              77.476613999999998,
              12.96576
            ],
            [
              77.476648999999995,
              12.965718000000001
            ],
            [
              77.476692,
              12.965700999999999
            ],
            [
              77.476727999999994,
              12.965695999999999
            ],
            [
              77.476778999999993,
              12.965681
            ],
            [
              77.476821000000001,
              12.965681
            ],
            [
              77.476850999999996,
              12.965693
            ],
            [
              77.476872,
              12.965706000000001
            ],
            [
              77.476909000000006,
              12.965716
            ],
            [
              77.476934999999997,
              12.965718000000001
            ],
            [
              77.476971000000006,
              12.965706000000001
            ],
            [
              77.477005000000005,
              12.965686
            ],
            [
              77.477039000000005,
              12.965647000000001
            ],
            [
              77.477065999999994,
              12.9656
            ],
            [
              77.477080999999998,
              12.965563
            ],
            [
              77.477112000000005,
              12.965531
            ],
            [
              77.477157000000005,
              12.965498999999999
            ],
            [
              77.477204999999998,
              12.965481
            ],
            [
              77.477236000000005,
              12.965464000000001
            ],
            [
              77.477267999999995,
              12.96543
            ],
            [
              77.477309000000005,
              12.965363
            ],
            [
              77.477346999999995,
              12.965309
            ],
            [
              77.477470999999994,
              12.965159999999999
            ],
            [
              77.477677,
              12.964914
            ],
            [
              77.477936999999997,
              12.964603
            ],
            [
              77.478140999999994,
              12.964359
            ],
            [
              77.478375999999997,
              12.964078000000001
            ],
            [
              77.478746000000001,
              12.963635
            ],
            [
              77.478716000000006,
              12.963613
            ],
            [
              77.478666000000004,
              12.963578999999999
            ],
            [
              77.478605000000002,
              12.963525000000001
            ],
            [
              77.478584999999995,
              12.963480000000001
            ],
            [
              77.478559000000004,
              12.963416
            ],
            [
              77.478549000000001,
              12.963347000000001
            ],
            [
              77.478538999999998,
              12.963288
            ],
            [
              77.478523999999993,
              12.963179
            ],
            [
              77.478538999999998,
              12.962706000000001
            ],
            [
              77.478639999999999,
              12.9621
            ],
            [
              77.478847999999999,
              12.961313000000001
            ],
            [
              77.478874000000005,
              12.961232000000001
            ],
            [
              77.479071000000005,
              12.960613
            ],
            [
              77.479174,
              12.960241999999999
            ],
            [
              77.479191999999998,
              12.960179
            ],
            [
              77.479273000000006,
              12.959702
            ],
            [
              77.479324000000005,
              12.9594
            ],
            [
              77.479370000000003,
              12.959212000000001
            ],
            [
              77.479410000000001,
              12.959109
            ],
            [
              77.479434999999995,
              12.959015000000001
            ],
            [
              77.479470000000006,
              12.958931
            ]
          ]
          ]
          }
          }
          });
          map.addLayer({
          'id': 'maine',
          'type': 'fill',
          'source': 'maine',
          'layout': {},
          'paint': {
          'fill-color': '#FF8A65',
          'fill-opacity': 0.5
          }
          });
//           map.on('click', 'maine', function(e) {
//             new mapboxgl.Popup()
//             .setLngLat(e.lngLat)
//             .setHTML("<strong>Wonderfull</strong>")
//             .addTo(map);
// });
    }
  },

  apollo:{
    getCoordinates:{
      query: getCoordinates,
      result({ data, loading, networkStatus}){
        console.log("Coordinates")
        console.log(data)
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
      result({ data, loading, networkStatus}){
        console.log("Search Data")
        console.log(data)
      },
      error(error){
        console.error("Got An Error", error)
      }
    }
  },

	data: () => ({
    pincode: 560096,
    getCoordinates: null,
    searchData: null,
    chartdata: {
      labels: ['January', 'February','March','April','May', 'June', 'July'],
      datasets: [
        {
          label: 'Pincode [400091]  ',
          backgroundColor: '#43A047',
          data: [40, 20,10,60,120,80,5]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
	mounted(){
	}
};
</script>