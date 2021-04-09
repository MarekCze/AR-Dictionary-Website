import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import Notebooks from "../views/Notebooks.vue";
import Notebook from "../views/Notebook.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/notebooks",
    name: "Notebooks",
    component: Notebooks,
  },
  {
    path: "/notebook/:notebookId",
    name: "Notebook",
    component: Notebook,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
