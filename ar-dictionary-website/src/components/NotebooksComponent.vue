<template>
    <div class="notebook-wrapper">
        <div class="notebook" v-for="(notebook, index) in notebooks" :key="index">
            <router-link :to="{ name: 'Notebook', params: {notebookId: notebook.uid}}">
                <h2>{{notebook.name}}</h2>
                <p>{{notebook.date}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NotebooksComponent',
    data () {
        return {

        }
    },
    computed: {
        notebooks () {
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
    created () {
        this.fetchNotebooks()
    }
}
</script>
