<template>
	<div>
		<form @submit="onSubmit">
			<TextInput
				type="email"
				:value="initialValues.email"
				name="email"
				label="Your email"
				placeholder="Enter your email"
			/>
			<TextInput
				type="password"
				:value="initialValues.password"
				name="password"
				label="Your password"
				placeholder="Enter your password"
			/>
			<RegistrationButton>Sign In</RegistrationButton>
			<p>
				Don't have an account? Then
				<RouterLink to="/sign-up">Sign Up</RouterLink>
			</p>
		</form>
	</div>
</template>

<script setup lang="ts">
	import type { SignInValues } from '@/types';
	import { useForm } from 'vee-validate';
	import signInValidateSchema from '@/utils/validateSchemas/signInValidateSchema';
	import TextInput from '@/UI/inputs/TextInput.vue';
	import RegistrationButton from '@/UI/buttons/RegistrationButton.vue';
	import { RouterLink } from 'vue-router';

	const initialValues: SignInValues = {
		email: '',
		password: '',
	};

	const { handleSubmit } = useForm<SignInValues>({
		initialValues,
		validationSchema: signInValidateSchema,
	});

	const onSubmit = handleSubmit((values, { resetForm }) => {
		console.log(values);
		resetForm();
	});
</script>

<style scoped></style>
