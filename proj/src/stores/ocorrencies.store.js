import { defineStore } from "pinia";

export const useOcorrencieStore = defineStore('OcorrencieStore',{
    state: {
        arrayOcorrencies: [
			{
				id: 0,
				titleOco: 'Torneira a pingar',
				descriptionOco: 'Na passada segunda-feira visualizei que na casa de banho dos rapazes estava uma torneira a pingar, mesmo depois de a fechar.',
				locationOco: '2º piso',
			},
			{
				id: 1,
				titleOco: 'Luz acessa',
				descriptionOco: 'Em uma sala de aula tem a luz acessa depois de as aulas acabarem',
				locationOco: 'Sala B303',
			},
		],
    },
    getters: {
        getOcorrenciesByID: (state) => (id) =>
			state.getOcorrenciesByID.filter((ocorrencies) => ocorrencies.id == id),
    },
    mutations: {},
    actions: {},
})