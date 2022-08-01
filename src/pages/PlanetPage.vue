<template>
    <div>{{ $route.params.planetName }}</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'planetPage',
    data() {
        return {
            planetInfo: [],
        }
    },
    methods: {
        getPlanetInfo() {
            axios.get('../data/planets.json')
                .then(({data}) => {
                    this.planetInfo = data.find(planet => planet.planetName === this.$route.params.planetName)
                    console.log(this.planetInfo);
                })
        }
    },
    created() {
        this.getPlanetInfo();
    }
}
</script>

<style>

</style>