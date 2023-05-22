import * as yup from 'yup';

export default yup.object().shape({
	name: yup.string().required('Name is a required field'),
	email: yup.string().required('Email is required field').email('Invalid email address'),
	password: yup
		.string()
		.required('Password is required field')
		.min(6, 'Password must contain at least six characters')
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
			'Password must contain a letter, a number and one special character',
		),  
});
