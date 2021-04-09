import { createStore } from "vuex"
import * as fb from "../firebase/firebaseConfig"

const store = createStore({
  state: {
    authType: 'auth',
    userDocument: {},
    notebooks: [],
    words: [],
    isLoggedIn: false,
  },
  mutations: {
    setAuthType (state, authType) {
      state.authType = authType
      console.log(state.authType)
    },
    setUserDocument (state, user) {
      state.userDocument = user
    },
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
      console.log(state.isLoggedIn)
    },
    setUserNotebooks(state, notebooks) {
      state.notebooks = notebooks
    },
    setNotebookWords(state, words) {
      state.words = words
    }
  },
  actions: {
    async fetchUserDocument({commit}, uid) {
      const userDocument = await fb.userCollection.doc(uid).get()

      commit("setUserDocument", userDocument)
    },
    async fetchUserNotebooks({commit}, uid) {
      fb.userCollection.doc(uid).collection('Notebooks').orderBy('dateModified', 'desc').onSnapshot(snapshot => {
        let notebookArray = []

        snapshot.forEach(doc => {
          let notebook = doc.data()
          notebook.id = doc.id

          notebookArray.push(notebook)
        })
        console.log(notebookArray)
        commit("setUserNotebooks", notebookArray)
      })
    },
    async fetchNotebookWords({commit, state}, notebookId) {
      fb.userCollection.doc(state.userDocument.id).collection('Notebooks').doc(notebookId).collection('Words').onSnapshot(snapshot => {
        let wordArray = []

        snapshot.forEach(doc => {
          let word = doc.data()
          word.id = doc.id
          console.log(doc)
          wordArray.push(word)
        })
        console.log(wordArray)
        commit("setNotebookWords", wordArray)
      })
    }
  },
  modules: {},
  getters: {
    getAuthType: state => state.authType,
    getUser : state => state.user,
    getUserDocument : state => state.userDocument,
    getNotebooks : state => state.notebooks,
    getIsLoggedIn: state => state.isLoggedIn
  },
})

export default store