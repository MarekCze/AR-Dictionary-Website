<template>
    <div class="word-wrapper">
        <div class="word"
         :class="word.style"
         v-for="(word, index) in words" :key="index">
            <h2>{{word.word}}</h2>
            <p>{{word.pronunciation}}</p>
            
            <div class="definitions" v-for="(definition, index) in word.definitions" :key="index">
                <p>{{definition}}</p>
            </div>
            
            <hr>
            <h2>Example Sentences</h2>
            <div class="example-sentences" v-for="(sentence, index) in word.sentences" :key="index">
                <p>{{sentence}}</p>
            </div>

            <hr>
            <h2>Similar Words</h2>
            <ul id="example-1">
                <li v-for="(synonym, index) in word.synonyms" :key="index">
                    {{ synonym }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'WordsComponent',
    data () {
        return {

        }
    },
    computed: {
        words () {
            return this.$store.state.words
        }
    },
    methods: {
        async fetchWords (notebookId) {
            console.log("this.user")
            let response = await this.$store.dispatch("fetchNotebookWords", notebookId)
            
            return response
        }
    },
    mounted () {
        this.fetchWords(this.$route.params.notebookId)
    }
}
</script>