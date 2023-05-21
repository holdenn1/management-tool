<template>
	<div>
		<form @submit="onSubmit">
			<TextInput
				type="text"
				:value="initialValues.name"
				name="name"
				label="Your name"
				placeholder="Enter your name"
			/>
			<TextInput
				type="text"
				:value="initialValues.surname"
				name="surname"
				label="Your surname"
				placeholder="Enter your surname"
			/>
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
				label="Your passwordd"
				placeholder="Enter your passwordd"
			/>
			<RegistrationButton>Sign Up</RegistrationButton>
			<p>
				Already have an account? Then
				<RouterLink to="/sign-in">Sign In</RouterLink>
			</p>
		</form>
	</div>
</template>

<script setup lang="ts">
	import type { SignUpValues } from '@/types';
	import { useForm } from 'vee-validate';
	import signUpValidateSchema from '@/utils/validateSchemas/signInValidateSchema';
	import TextInput from '@/UI/inputs/TextInput.vue';
	import RegistrationButton from '@/UI/buttons/RegistrationButton.vue';
	import { RouterLink } from 'vue-router';

	const initialValues: SignUpValues = {
		name: '',
		surname: '',
		email: '',
		password: '',
	};

	const { handleSubmit } = useForm<SignUpValues>({
		initialValues,
		validationSchema: signUpValidateSchema,
	});

	const onSubmit = handleSubmit((values, { resetForm }) => {
		console.log(values);
		resetForm();
	});
</script>

<style scoped></style>
