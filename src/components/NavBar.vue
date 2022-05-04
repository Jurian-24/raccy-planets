<template>
    <div  class="fixed top-0 left-0 h-screen w-16 m-0 
                flex flex-col 
              bg-gray-900 text-white shadow-lg"
        
    >
        <SideBarIcon
            v-for="planet in planets"
            :key="planet.id"
            :planetName="planet.planetName"
        >
        {{planet.planetName}}
        </SideBarIcon>
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