<template>
	<form class="main-form" @submit="onSubmit">
		<TextInput
			type="text"
			:value="initialValues.name"
			name="name"
			label="Enter your name"
			placeholder="Enter your name"
			:onInvalidSubmit="isSubmitError"
		/>
		<TextInput
			type="email"
			:value="initialValues.email"
			name="email"
			label="Enter your email"
			placeholder="Enter your email"
			:onInvalidSubmit="isSubmitError"
		/>
		<TextInput
			type="password"
			:value="initialValues.password"
			name="password"
			label="Enter your passwordd"
			placeholder="Enter your passwordd"
			:onInvalidSubmit="isSubmitError"
		/>
		<RegistrationButton>Sign Up</RegistrationButton>
		<p class="main-form__is-account">
			Already have an account? Then
			<RouterLink to="/sign-in">Sign In</RouterLink>
		</p>
	</form>
</template>

<script setup lang="ts">
	import type { SignUpValues } from '@/types';
	import { useForm } from 'vee-validate';
	import signUpValidateSchema from '@/utils/validateSchemas/signUpValidateSchema';
	import { RouterLink } from 'vue-router';
	import TextInput from '@/components/UI/inputs/TextInput.vue';
	import RegistrationButton from '@/components/UI/buttons/RegistrationButton.vue';
	import { useUserStore } from '@/stores/userStore';
	import { ref } from 'vue';

	const isSubmitError = ref<boolean>(false);

	const store = useUserStore();

	const initialValues: SignUpValues = {
		name: '',
		email: '',
		password: '',
	};

	const { handleSubmit } = useForm<SignUpValues>({
		initialValues,
		validationSchema: signUpValidateSchema,
	});

	const onSubmit = handleSubmit((values, { resetForm }) => {
		store.signUpUser(values);
		resetForm();
	}, onInvalidSubmit);

	function onInvalidSubmit() {
		isSubmitError.value = true;
		setTimeout(() => (isSubmitError.value = false), 400);
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>
