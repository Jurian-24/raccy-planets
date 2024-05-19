<template>
    <div class="top-0 left-0 h-screen w-48 m-0
                flex flex-col
              bg-gray-900 text-white shadow-lg bg-[url('/assets/banners/night-sky.jpeg')]"
    >
        <h1 class="justify-center text-center mt-4 font-bold">RACCY PLANETS</h1>
        <router-link
            v-for="planet in planets"
            :key="planet.id"
            :to="{ name: 'PlanetPage', params: { planetName: planet.planetName } }"
        >
        <SideBarIcon
            :planetName="planet.planetName"
        >
        </SideBarIcon>
        </router-link>

    </div>

</template>

<script>
import axios from 'axios';

import SideBarIcon from './SideBarIcon.vue'

export default {
    name: 'navbar',
    data() {
        return {
            planets: []
        }
    },
    methods: {
        getPlanets() {
            axios.get('../data/planets.json')
                .then(({data}) => {
                    this.planets = data
                })
                .catch(err => console.log(err))
        }
    },
    components: {
        SideBarIcon: SideBarIcon
    },
    created() {
        this.getPlanets();
    }
}
</script>

<style>

</style>
