import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from './views/MainPage'
import AdoptPage from './views/AdoptPage'
import CommunityPage from './views/CommunityPage'
import SwipePage from './views/SwipePage'
import MyPage from './views/MyPage'
import MyPageMain from './components/MyPageMain'
import MyPageAdopt from './components/MyPageAdopt'
import MyPageAlbum from './components/MyPageAlbum'
import MyPageDealing from './components/MyPageDealing'
import MyChangePage from './views/views/MyChangePage'


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        { path: "/", component: MainPage},

        { path: "/adopt", component: AdoptPage},

        { path: "/community", component: CommunityPage},

        { path: "/swipe", component: SwipePage},

        { path: "/my", component: MyPage, children: [
            { path: "main", component: MyPageMain},
            { path: "adopt", component: MyPageAdopt},
            { path: "album", component: MyPageAlbum},
            { path: "dealing", component: MyPageDealing},
        ]},

        { path: "/my/change", component: MyChangePage},

    ]
});

export default router;