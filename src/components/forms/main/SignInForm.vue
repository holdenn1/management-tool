<template>
	<form class="main-form" @submit="onSubmit">
		<TextInput
			type="email"
			:value="initialValues.email"
			name="email"
			label="Enter your email"
			placeholder="Enter your email"
		/>
		<TextInput
			type="password"
			:value="initialValues.password"
			name="password"
			label="Enter your password"
			placeholder="Enter your password"
		/>
		<RegistrationButton>Sign In</RegistrationButton>
		<p class="main-form__is-account">
			Don't have an account? Then
			<RouterLink to="/sign-up">Sign Up</RouterLink>
		</p>
	</form>
</template>

<script setup lang="ts">
	import type { SignInValues } from '@/types';
	import { useForm } from 'vee-validate';
	import signInValidateSchema from '@/utils/validateSchemas/signInValidateSchema';
	import { RouterLink } from 'vue-router';
	import TextInput from '@/components/UI/inputs/TextInput.vue';
	import RegistrationButton from '@/components/UI/buttons/RegistrationButton.vue';
	import { useUserStore } from '@/stores/userStore';

	const store = useUserStore();

	const initialValues: SignInValues = {
		email: '',
		password: '',
	};

	const { handleSubmit } = useForm<SignInValues>({
		initialValues,
		validationSchema: signInValidateSchema,
	});

	const onSubmit = handleSubmit((values, { resetForm }) => {
		store.signInUser(values);
		resetForm();
	});
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>
