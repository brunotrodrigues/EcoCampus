<template>
    <div>

    </div>
</template>

<script setup>
    import { ref, computed} from 'vue'

    const questions = ref([
        {
            questions: 'Em tua casa é habitual separar alguns resíduos e colocá-los para reciclar por exemplo no ecoponto?',
            answer: 0,
            options: [
                'Sempre',
                'Quase Sempre',
                'Ás vezes',
                'Nunca'
            ],
            selected: null,
        },
        {
            questions: 'Quando lavas os dentes a torneia do lavatório está aberta?',
            answer: 1,
            options: [
                'Sempre',
                'Quase Sempre',
                'Ás vezes',
                'Nunca'
            ],
            selected: null,
        },
        {
            questions: 'Lá em casa é costume apagar a televisão deixando-a em Stand By (desligar com o comando)?',
            answer: 2,
            options: [
                'Sempre',
                'Quase Sempre',
                'Ás vezes',
                'Nunca'
            ],
            selected: null,
        },
        {
            questions: 'Costumas ouvir música muito alto?',
            answer: 3,
            options: [
                'Sempre',
                'Quase Sempre',
                'Ás vezes',
                'Nunca'
            ],
            selected: null,
        },
        {
            questions: 'Na tua casa existe o hábito de comprar produtos biológicos?',
            answer: 4,
            options: [
                'Sempre',
                'Quase Sempre',
                'Ás vezes',
                'Nunca'
            ],
            selected: null,
        },
        {
            questions: 'Se pudesses optar entre autocarro e comboio para o mesmo percurso, qual escolherias?',
            answer: 5,
            options: [
                'Sempre',
                'Quase Sempre',
                'Ás vezes',
                'Nunca'
            ],
            selected: null,
        },
        {
            questions: 'Se existisse uma campanha de limpeza de praia, com que frequencia irias participar?',
            answer: 6,
            options: [
                'Sempre',
                'Quase Sempre',
                'Ás vezes',
                'Nunca'
            ],
            selected: null,
        },
        {
            questions: '',
            answer: 7,
            options: [
                'Sempre',
                'Quase Sempre',
                'Ás vezes',
                'Nunca'
            ],
            selected: null,
        },
        {
            questions: 'Como te deslocas para a escola? A pé, de bicicleta ou transportes públicos?',
            answer: 8,
            options: [
                'Sempre',
                'Quase Sempre',
                'Ás vezes',
                'Nunca'
            ],
            selected: null,
        },
        {
            questions: 'Como te deslocas para a escola? Em viatura privada?',
            answer: 9,
            options: [
                'Sempre',
                'Quase Sempre',
                'Ás vezes',
                'Nunca'
            ],
            selected: null,
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