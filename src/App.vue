<template>
	<Header />
	<RouterView />
	<Footer />
</template>

<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import Footer from './components/Footer/Footer.vue';
	import Header from './components/Header/Header.vue';
</script>

<style lang="scss" scoped></style>
