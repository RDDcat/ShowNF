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
import AccountPage from './views/views/AccountPage'
import AchievementPage from './views/views/AchievementPage'
import AlermPage from './views/views/AlermPage'
import LeaderPage from './views/views/LeaderPage'
import MyChangePage from './views/views/MyChangePage'
import PointPage from './views/views/PointPage'
import SettingPage from './views/views/SettingPage'
import StoragePage from './views/views/StoragePage'
import StorageAlbum from '@/components/StorageAlbum'
import StorageCommunity from '@/components/StorageCommunity'
import StorageAdopt from '@/components/StorageAdopt'


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

        { path: "/account", component: AccountPage},
        { path: "/achievement", component: AchievementPage},
        { path: "/alerm", component: AlermPage},
        { path: "/leader", component: LeaderPage},
        { path: "/my/change", component: MyChangePage},
        { path: "/point", component: PointPage},
        { path: "/setting", component: SettingPage},
        { path: "/storage", component: StoragePage, children: [
            { path: "album", component: StorageAlbum},
            { path: "community", component: StorageCommunity},
            { path: "adopt", component: StorageAdopt},
        ]},

    ]
});

export default router;