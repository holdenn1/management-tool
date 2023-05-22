<template>
	<main class="registration-main-wrapper">
		<slot />
	</main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
	@import '@/assets/styles/mixins/flexCenter.scss';
	.registration-main-wrapper {
		flex: 1 1 auto;
		@include flexCenter;
	}
</style>
