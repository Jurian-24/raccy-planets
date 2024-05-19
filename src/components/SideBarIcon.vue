<template>
    <div class="sidebar-icon group w-16 my-4">
        <img v-bind:src="'/assets/planets/icons/' + planetName + '-icon.svg'"  alt="planet" class="object-fill">

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
