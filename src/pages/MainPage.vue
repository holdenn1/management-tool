<template>
	<div>main</div>
	<RouterLink to="/sign-up">sign-up</RouterLink>
	<LogoutButton>Logout</LogoutButton>
</template>

<script setup lang="ts">
	import LogoutButton from '@/components/UI/buttons/LogoutButton.vue';
</script>

<style scoped></style>
