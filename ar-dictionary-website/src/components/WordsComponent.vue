<template>
    <div class="word-wrapper">
        <div class="word">
            {{words}}
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