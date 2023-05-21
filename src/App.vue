<template>
	<Header />
	<Main>
		<RouterView />
	</Main>
	<Footer />
</template>

<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import Footer from './components/Footer/Footer.vue';
	import Header from './components/Header/Header.vue';
	import Main from './components/Main/Main.vue';
</script>

<style scoped></style>
