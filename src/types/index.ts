export type SignInValues = {
	email: string;
	password: string;
};

export type SignUpValues = SignInValues & {
	name: string;
};

export type User = {
	name: string;
	id: string;
	email: string;
};

export type Account = {
	accountId: string;
	userId: string;
	userName: string;
	userEmail: string;
};
