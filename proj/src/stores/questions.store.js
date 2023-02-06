import { defineStore } from "pinia";

export const useQuestionStore = defineStore('QuestionStore',{
    state: {
        usernameQuestion: {
            id: 0,
            username: 'antonio'
        },
        arrayQuestions: [
			{
				id: 1,
				question: 'Em tua casa é habitual separar alguns resíduos e colocá-los para reciclar por exemplo no ecoponto?',
				options: 'quaseSempre1',
			},
            {
				id: 2,
				question: 'Quando lavas os dentes a torneia do lavatório está aberta?',
				options: 'asvezes2',
			},
            {
				id: 3,
				question: 'Lá em casa é costume apagar a televisão deixando-a em Stand By (desligar com o comando)?',
				options: 'nunca3',
			},
            {
				id: 4,
				question: 'Costumas ouvir música muito alto?',
				options: 'asvezes4',
			},
            {
				id: 5,
				question: 'Na tua casa existe o hábito de comprar produtos biológicos?',
				options: 'asvezes5',
			},
            {
				id: 6,
				question: 'Se existisse uma campanha de limpeza de praia, com que frequencia irias participar?',
				options: 'quaseSempre6',
			},
            {
				id: 7,
				question: 'Com que frequencia deslocas para a escola, a pé, de bicicleta ou de transportes públicos?',
				options: 'asvezes7',
			},
            {
				id: 8,
				question: 'Com que frequencia deslocas para a escola de viatura privada?',
				options: 'asvezes8',
			},
		],
    },
    getters: {
        getQuestionsByID: (state) => (id) =>
			state.getQuestionsByID.filter((Questions) => Questions.id == id),
    },
    mutations: {},
    actions: {},
    
})