export type SignInValues = {
	email: string;
	password: string;
};

export type SignUpValues = SignInValues & {
	name: string;
};
