<template>
    <div class="sidebar-icon group">
        <img v-bind:src="'/assets/planets/icons/' + planetName + '-icon.svg'"  alt="planet">

        <span class="sidebar-tooltip group-hover:scale-100">
            {{planetName}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'sidebar-icon',
    props: {
        planetName: String,
    }
}
</script>

<style>

</style>