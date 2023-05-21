import type { RouteRecordRaw } from 'vue-router';
import { MainPage, SignInPage, SignUpPage } from '@/pages';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/sign-in',
		name: 'sign-in',
		component: SignInPage,
	},
	{
		path: '/sign-up',
		name: 'sign-up',
		component: SignUpPage,
	},
];
