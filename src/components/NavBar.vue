<template>
    <div class="fixed top-0 left-0 h-screen w-16 m-0 
                flex flex-col 
              bg-gray-900 text-white shadow-lg"
        
    >
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