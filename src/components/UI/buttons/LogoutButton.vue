<template>
	<button type="button" @click="store.logoutUser"><slot /></button>
</template>

<script setup lang="ts">
	import { useUserStore } from '@/stores/userStore';

	const store = useUserStore();
</script>

<style scoped></style>
