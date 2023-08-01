import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from './views/MainPage'
import AdoptPage from './views/AdoptPage'
import CommunityPage from './views/CommunityPage'
import SwipePage from './views/SwipePage'
import MyPage from './views/MyPage'
// import BasePage from './views/BasePage';

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        { path: "/", component: MainPage},
        { path: "/adopt", component: AdoptPage},
        { path: "/community", component: CommunityPage},
        { path: "/swipe", component: SwipePage},
        { path: "/my", component: MyPage},
    ]
});

export default router;