<template>
	<div class="text-input" :class="{ 'text-input-error': onInvalidSubmit && errorMessage }">
		<label class="text-input__label" :for="name" v-if="label">{{ label }}</label>
		<input
			:name="name"
			:id="name"
			:type="type"
			:value="inputValue"
			:placeholder="placeholder"
			v-on="validationListeners"
			class="text-input__input"
			:class="{ 'text-input__is-error': errorMessage }"
		/>
		<p class="text-input__error" v-show="errorMessage || meta.valid">
			{{ errorMessage }}
		</p>
	</div>
</template>

<script setup lang="ts">
	import { useField } from 'vee-validate';
	import { toRef, computed } from 'vue';

	type TextInputProps = {
		type: string;
		value: string;
		name: string;
		label?: string;
		placeholder: string;
		onInvalidSubmit: boolean;
	};

	const props = defineProps<TextInputProps>();

	const name = toRef(props, 'name');

	const {
		value: inputValue,
		errorMessage,
		handleChange,
		meta,
	} = useField(name, undefined, {
		initialValue: props.value,
	});

	const validationListeners = computed(() => {
		if (!errorMessage.value) {
			return {
				blur: handleChange,
				change: handleChange,
			};
		}

		return {
			blur: handleChange,
			change: handleChange,
			input: handleChange,
		};
	});
</script>

<style lang="scss" scoped>
	@import '@/assets/styles/variables';
	@import '@/assets/styles/mixins/input.scss';
	@import '@/assets/styles/mixins/flexColumnAICenter.scss';

	.text-input {
		@include flexColumnAICenter;
		&__label {
			font-size: $fz-title-form;
			margin-bottom: 4px;
		}
		&__input {
			@include input(0 0 14px 0);
		}
		&__is-error {
			border: 1px solid red;
			background: rgb(230, 181, 181);
			&::placeholder {
				color: rgb(43, 42, 42);
			}
			&:focus {
				border: 1px solid red;
			}
		}
		&__error {
			color: red;
			margin-bottom: 6px;
			text-align: center;
		}
	}
	.text-input-error {
		position: relative;
		animation-name: input-error;
		animation-duration: 0.16s;
		animation-timing-function: linear;
		animation-iteration-count: 2;
		@keyframes input-error {
			0% {
				left: 2px;
			}
			50% {
			}
			100% {
				right: 2px;
			}
		}
	}
</style>
