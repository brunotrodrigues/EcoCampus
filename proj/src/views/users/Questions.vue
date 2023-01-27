<template>
    <div>
        <form @submit.prevent>
            <div>
                <label for="">Introduza o seu nome</label>
                <input type="text" id="name" name="name">
            </div>
            <h3>Em tua casa é habitual separar alguns resíduos e colocá-los para reciclar por exemplo no ecoponto?</h3>
            <div>
                <div>
                    <input type="radio" id="sempre" value="sempre" name="sempre">
                    <label for="">Sempre</label>
                </div>
                <div>
                    <input type="radio" id="quaseSempre" value="quaseSempre" name="quaseSempre">
                    <label for="">Quase Sempre</label>
                </div>
                <div>
                    <input type="radio" id="asvezes" value="asvezes" name="asvezes">
                    <label for="">Ás vezes</label>
                </div>
                <div>
                    <input type="radio" id="nunca" value="nunca" name="nunca">
                    <label for="">Nunca</label>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                surveyQuestionarie: [
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
    }
    
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>