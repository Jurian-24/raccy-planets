<template>
    <div class="header">
        <div class="banner">
            <div class="">
                <img v-bind:src="'/assets/banners/'+ this.$route.params.planetName.toLowerCase() +'-banner.jpeg'" class="w-full h-96 max-h-96">
            </div>
            <!-- <h1>{{ this.$route.params.planetName }}</h1> -->
            <div class="w-full h-28 pt-0" :style="{backgroundColor: this.planetInfo.shortInfoColor}">
                <div class="columns-4">
                    <h1 class="text-white text-center">Temperature: {{ this.planetInfo.data.temperature }}</h1>
                    <h1 class="text-white text-center">Orbit Period: {{ this.planetInfo.data.orbitPeriod }}</h1>
                    <h1 class="text-white text-center">Volume in Earths: {{ this.planetInfo.data.volumeInEarths }}</h1>
                    <h1 class="text-white text-center">Radius: {{ this.planetInfo.data.radius }}</h1>
                </div>
            </div>
        </div>
        <div class="short-info flex-1 w-full h-auto" :style="{backgroundColor: this.planetInfo.longInfoColor}">
            <div class="div"></div>
        </div>
    </div>
    <div class="body">

    </div>
</template>

<script>
import axios from 'axios'
import planetsData from '../data/planets.json'

export default {
    name: 'planetPage',
    data() {
        return {
            planetInfo: [],
            planetBanner: '/assets/banners/'+ this.$route.params.planetName.toLowerCase() +'-banner.jpeg'
        }
    },
    methods: {
        getPlanetInfo() {
            var planetData = planetsData.find(({planetName}) => planetName === this.$route.params.planetName)
            this.planetInfo = planetData;
        }
    },
    watch: {
        '$route.params.planetName': function(newVal, oldVal) {
            this.getPlanetInfo();
        }
    },
    created() {
        this.getPlanetInfo();
    }
}
</script>

<style>

</style>
