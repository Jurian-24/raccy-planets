<template>
    <div class="flex">
        <NavBar></NavBar>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
    name: 'app',
    components: {
        NavBar: NavBar,
    }
}
</script>

<style>
</style>
