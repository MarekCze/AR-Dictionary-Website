import { createStore } from "vuex"
import * as fb from "../firebase/firebaseConfig"

const store = createStore({
  state: {
    authType: 'auth',
    userDocument: {},
    notebooks: [],
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
    }
  },
  actions: {
    async fetchUserDocument(state, uid) {
      const userDocument = await fb.userCollection.doc(uid).get()

      this.commit("setUserDocument", userDocument)
      console.log(state.userDocument.id)
    },
    async fetchUserNotebooks(state, uid) {
      fb.userCollection.doc(uid).collection('Notebooks').orderBy('dateModified', 'desc').onSnapshot(snapshot => {
        let notebookArray = []

        snapshot.forEach(doc => {
          let notebook = doc.data()
          notebook.id = doc.id

          notebookArray.push(notebook)
        })
        console.log(notebookArray)
        this.commit("setUserNotebooks", notebookArray)
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