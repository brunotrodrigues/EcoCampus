<template>
    <div>

    </div>
</template>

<script setup>
    import { ref, computed} from 'vue'

    const questions = ref([
        {
            id:1,
            questions: 'Em tua casa é habitual separar alguns resíduos e colocá-los para reciclar por exemplo no ecoponto?',
            options: [
                {value: 0, choice:'Sempre'},
                {value: 1, choice:'Quase Sempre'},
                {value: 2, choice:'Ás vezes'},
                {value: 3, choice:'Nunca'},
            ],
            answer: null,
        },
        {
            id:2,
            questions: 'Quando lavas os dentes a torneia do lavatório está aberta?',
            options: [
                {value: 0, choice:'Sempre'},
                {value: 1, choice:'Quase Sempre'},
                {value: 2, choice:'Ás vezes'},
                {value: 3, choice:'Nunca'},
            ],
            answer: null,
        },
        {
            id:3,
            questions: 'Lá em casa é costume apagar a televisão deixando-a em Stand By (desligar com o comando)?',
            options: [
                {value: 0, choice:'Sempre'},
                {value: 1, choice:'Quase Sempre'},
                {value: 2, choice:'Ás vezes'},
                {value: 3, choice:'Nunca'},
            ],
            answer: null,
        },
        {
            id:4,
            questions: 'Costumas ouvir música muito alto?',
            options: [
                {value: 0, choice:'Sempre'},
                {value: 1, choice:'Quase Sempre'},
                {value: 2, choice:'Ás vezes'},
                {value: 3, choice:'Nunca'},
            ],
            answer: null,
        },
        {
            id:5,
            questions: 'Na tua casa existe o hábito de comprar produtos biológicos?',
            options: [
                {value: 0, choice:'Sempre'},
                {value: 1, choice:'Quase Sempre'},
                {value: 2, choice:'Ás vezes'},
                {value: 3, choice:'Nunca'},
            ],
            answer: null,
        },
        {
            id:6,
            questions: 'Se pudesses optar entre autocarro e comboio para o mesmo percurso, qual escolherias?',
            options: [
                {value: 0, choice:'Sempre'},
                {value: 1, choice:'Quase Sempre'},
                {value: 2, choice:'Ás vezes'},
                {value: 3, choice:'Nunca'},
            ],
            answer: null,
        },
        {
            id:7,
            questions: 'Se existisse uma campanha de limpeza de praia, com que frequencia irias participar?',
            options: [
                {value: 0, choice:'Sempre'},
                {value: 1, choice:'Quase Sempre'},
                {value: 2, choice:'Ás vezes'},
                {value: 3, choice:'Nunca'},
            ],
            answer: null,
        },
        {
            id:8,
            questions: 'Como te deslocas para a escola? A pé, de bicicleta ou transportes públicos?',
            options: [
                {value: 0, choice:'Sempre'},
                {value: 1, choice:'Quase Sempre'},
                {value: 2, choice:'Ás vezes'},
                {value: 3, choice:'Nunca'},
            ],
            answer: null,
        },
        {
            id:9,
            questions: 'Como te deslocas para a escola? Em viatura privada?',
            options: [
                {value: 0, choice:'Sempre'},
                {value: 1, choice:'Quase Sempre'},
                {value: 2, choice:'Ás vezes'},
                {value: 3, choice:'Nunca'},
            ],
            answer: null,
        }
    ])

    const quizzCompleted = ref(false)
    const currentQuestion = ref(0)
    const getCurrentQuestion = computed(() => {
        let question = questions.value[currentQuestion.value]
        question.index = currentQuestion.value
        return question
    })
    const NextQuestion = () => {
        if (currentQuestion.value < questions.value.length - 1) {
            currentQuestion.value++
        } else {
            quizzCompleted.value = true
        }
    }
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>