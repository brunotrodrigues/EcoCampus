<template>
    <div>
        <router-link v-for="(survey, index) in surveyQuestionarie" :key="index" tag="button" :to="{path: '/question/' + survey.id}">{{ survey.question }} <br><br> {{ survey.answer !== null ? valueQuestion(survey.answer, survey.choices): '' }}</router-link>
        <div v-if="$root.answerIsNotNull">
            {{ $root.answerIsNotNull }} {{ $root.answerIsNotNull > 1 ? 'questions' : 'question' }}
        </div>
        <div>
            <button @click="isFinish">Finish</button>
        </div>
    </div>
    <div>
        <div v-for="item in survey.choices">
            <input type="radio" :id="item.value" :value="item.value" v-model="survey.answer">
            <label :for="item.value">{{ item.choice }}}</label>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                surveyQuestionarie: [
                    {
                        id:1,
                        question: 'Em tua casa é habitual separar alguns resíduos e colocá-los para reciclar por exemplo no ecoponto?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:2,
                        question: 'Quando lavas os dentes a torneia do lavatório está aberta?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:3,
                        question: 'Lá em casa é costume apagar a televisão deixando-a em Stand By (desligar com o comando)?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:4,
                        question: 'Costumas ouvir música muito alto?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:5,
                        question: 'Na tua casa existe o hábito de comprar produtos biológicos?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:6,
                        question: 'Se pudesses optar entre autocarro e comboio para o mesmo percurso, qual escolherias?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:7,
                        question: 'Se existisse uma campanha de limpeza de praia, com que frequencia irias participar?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:8,
                        question: 'Como te deslocas para a escola? A pé, de bicicleta ou transportes públicos?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    },
                    {
                        id:9,
                        question: 'Como te deslocas para a escola? Em viatura privada?',
                        choices: [
                            {value: 0, choice:'Sempre'},
                            {value: 1, choice:'Quase Sempre'},
                            {value: 2, choice:'Ás vezes'},
                            {value: 3, choice:'Nunca'},
                        ],
                        answer: null,
                    }
                ]
            }
        },
        methods: {
            isFinish() {
                alert('finished')
            },
            valueQuestion(answer, choices){
                var vm = this
                return _.find(choices, ['value', _.parseInt(answer)]).choice
            }
        },
        computed: {
            answerIsNotNull() {
                var vm = this
                return _.filter(vm.survey, function(o){
                    return o.answer == null
                }).length
            }
        },
    }
    
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>