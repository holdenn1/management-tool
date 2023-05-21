<template>
	<div class="text-input">
		<label class="text-input__label" :for="name" v-if="label">{{ label }}</label>
		<input
			:name="name"
			:id="name"
			:type="type"
			:value="inputValue"
			:placeholder="placeholder"
			@input="handleChange"
			@blur="handleBlur"
			class="text-input__input"
		/>
		<p class="text-input__error" v-show="errorMessage || meta.valid">
			{{ errorMessage }}
		</p>
	</div>
</template>

<script setup lang="ts">
	import { useField } from 'vee-validate';
	import { toRef } from 'vue';

	type TextInputProps = {
		type: string;
		value: string;
		name: string;
		label?: string;
		placeholder: string;
	};

	const props = defineProps<TextInputProps>();

	const name = toRef(props, 'name');

	const {
		value: inputValue,
		errorMessage,
		handleChange,
		handleBlur,
		meta,
	} = useField(name, undefined, {
		initialValue: props.value,
	});
</script>

<style scoped></style>
