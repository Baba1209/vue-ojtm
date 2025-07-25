import HomeView from "./View/HomeView.vue";
import AboutView from "./View/AboutView.vue";
import ContactView from "./View/ContactView.vue";
import { createRouter, createWebHistory } from "vue-router";
import Taem1View from "./View/Taem1View.vue";
import Taem2View from "./View/Taem2View.vue";
import MemberCenter from "./View/MemberCenter.vue";
import TodosView_Full from "./View/TodosView_Full.vue";
import NotFound from "./View/NotFound.vue";

const xyz = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeView, name: "home" },
    {
        path: "/About", component: AboutView, name: "about",
        redirect: "/About/team1",
        children: [
            { path: "team1", component: Taem1View, name: "team1" },
            { path: "team2", component: Taem2View, name: "team2" },
        ]
    },
    { path: "/abc", component: ContactView, name: "contact" },
    { path: "/member/:id", component: MemberCenter, name: "member" },
    { path: "/todo", component: TodosView_Full, name: "todo" },
    { path: '/:pathMath(.*)*', component: NotFound, name: "notfound" },
]

const router = createRouter({
    history: createWebHistory(),
    //如果名稱一樣可以省略後面
    routes: xyz,
});

export default router;