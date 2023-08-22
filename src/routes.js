import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from './views/MainPage'
import AdoptPage from './views/AdoptPage'
import CommunityPage from './views/CommunityPage'
import SwipePage from './views/SwipePage'

import MyPet from './views/MyPet'
import MyPetMain from '@/views/MyPet/MyPetMain'
import MyPetCalender from '@/views/MyPet/MyPetCalender'
import MyPetAdd from '@/views/MyPet/MyPetAdd'
import MyPetAddDiary from '@/views/MyPet/MyPetAddDiary'

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

        { path: "/pet", component: MyPet, children: [
            { path: "main", component: MyPetMain},
            { path: "calender", component: MyPetCalender},
            { path: "diary", component: MyPetAdd},
            { path: "diary/add", component: MyPetAddDiary},
        ]},

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