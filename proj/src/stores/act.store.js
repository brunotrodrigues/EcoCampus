import { defineStore } from "pinia";
import { useAuthStore } from "./auth.store";
const authStore = useAuthStore();

export const useActStore = defineStore('ActStore',{
    state: {
        arrayActivities: [
			{
				id: 0,
				titleAct: 'Atividade 1',
				descriptionAct: 'Limpar as ruas',
			},
            {
				id: 1,
				titleAct: 'Atividade 2',
				descriptionAct: 'Limpar as florestas    ',
			},
            {
				id: 2,
				titleAct: 'Atividade 3',
				descriptionAct: 'Fazer a reciclagem',
			},
            {
				id: 3,
				titleAct: 'Atividade 4',
				descriptionAct: 'Poster Eco-Códgio',
			},
		],
    },
    getters: {
        getActivitiesByID: (state) => (id) =>
			state.getActivitiesByID.filter((activities) => activities.id == id),
        getLoggedUser: (state) => state.loggedUser,

    },
    mutations: {
        SET_LOGGED_USER(state, payload) {
			state.loggedUser = state.users.find(
				(user) => user.email === payload
			);
			localStorage.loggedUser = JSON.stringify(state.loggedUser);
		},
    },
    actions: {},
    
})