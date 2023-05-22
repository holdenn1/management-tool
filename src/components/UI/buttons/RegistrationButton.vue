<template>
	<button class="refistration-btn"><slot /></button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
	@import '@/assets/styles/variables';
	.refistration-btn {
		width: 180px;
		height: 36px;
		background: rgb(61, 61, 172);
		box-shadow: 0px 3px 6px 0px rgb(61, 61, 172);
		color: $secondary-color;
		border-radius: $primary-border-radius;
		font-weight: $fw-title;
		font-size: 16px;
		margin: auto 0 20px;
		border: none;
		cursor: pointer;
		transition-duration: 0.3s;
		&:hover {
			background: rgb(33, 33, 167);
			box-shadow: 0px 2px 5px 0px rgb(33, 33, 167);
		}
	}
</style>
