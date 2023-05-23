import { auth, database } from '@/firebase';
import router from '@/router';
import type { Account, SignInValues, SignUpValues, User } from '@/types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ref as databaseRef, onValue, push, set } from 'firebase/database';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
	const userStore = ref<User>({
		id: '',
		name: '',
		email: '',
	});

	function setUser(id: string, email: string, name: string) {
		userStore.value.id = id;
		userStore.value.email = email;
		userStore.value.name = name;
	}

	function removeUser() {
		userStore.value.id = '';
		userStore.value.email = '';
		userStore.value.name = '';
	}

	function signUpUser(userData: SignUpValues) {
		createUserWithEmailAndPassword(auth, userData.email, userData.password)
			.then(({ user }) => {
				if (user.email) {
					const usersAccountRef = databaseRef(database, 'users-accounts');
					const newAccount = push(usersAccountRef);
					if (newAccount.key) {
						const account: Account = {
							accountId: newAccount.key,
							userId: user.uid,
							userName: userData.name,
							userEmail: user.email,
						};
						set(newAccount, account);
					}
					setUser(user.uid, user.email, userData.name);
					router.push('/');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function signInUser(userData: SignInValues) {
		signInWithEmailAndPassword(auth, userData.email, userData.password)
			.then(({ user }) => {
				const usersAccountRef = databaseRef(database, 'users-accounts');
				onValue(usersAccountRef, (snapshot) => {
					const data: Record<string, Account> = snapshot.val();
					if (data !== null) {
						const account: Account = Object.values(data).find(
							(account) => account.userId === user.uid,
						)!;
						setUser(account.userId, account.userEmail, account.userName);
						router.push('/');
					}
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function logoutUser() {
		signOut(auth)
			.then(() => {
				removeUser();
				router.push('/sign-in');
			})
			.catch((e) => {
				router.push('/sign-in');
				console.error(e);
			});
	}

	return { userStore, setUser, signUpUser, signInUser, logoutUser };
});
