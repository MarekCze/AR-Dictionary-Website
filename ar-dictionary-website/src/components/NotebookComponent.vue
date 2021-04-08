<template>
    <div class="notebook-wrapper">
        <div class="notebook">
            {{notebook}}
        </div>
    </div>
</template>

<script>

export default {
    name: 'NotebookComponent',
    data () {
        return {
            notebooks: []
        }
    },
    computed: {
        notebook () {
            return this.$store.state.notebooks
        }
    },
    methods: {
        async fetchNotebooks () {
            console.log("this.user")
            let response = await this.$store.dispatch("fetchUserNotebooks", this.$store.getters.getUserDocument.id)
            
            return response
        }
    },
    mounted () {
        this.notebooks = this.fetchNotebooks()
    }
}
</script>
