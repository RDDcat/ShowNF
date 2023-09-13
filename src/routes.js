import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from '@/views/MainPage'

import AdoptPage from '@/views/Adopt/AdoptPage'
import AdoptPostPage from '@/views/Adopt/AdoptPostPage'

import CommunityPage from '@/views/Community/CommunityPage'
import CommunityAddPostPage from '@/views/Community/CommunityAddPostPage'
import CommunityPostPage from '@/views/Community/CommunityPostPage'

import SwipePage from '@/views/SwipePage'

import MyPet from '@/views/MyPet'
import MyPetAdd from '@/components/MyPet/MyPetAdd'

import MyPage from '@/views/My/MyPage'
import MyPageMain from '@/components/MyPageMain'
import MyPageAdopt from '@/components/MyPageAdopt'
import MyPageAlbum from '@/components/MyPageAlbum'
import MyPageDealing from '@/components/MyPageDealing'

import MyFollowPage from'@/views/My/MyFollowPage'
import AccountPage from '@/views/views/AccountPage'
import AchievementPage from '@/views/views/AchievementPage'
import AlermPage from '@/views/views/AlermPage'
import LeaderPage from '@/views/views/LeaderPage'
import MyChangePage from '@/views/views/MyChangePage'
import PointPage from '@/views/views/PointPage'
import SettingPage from '@/views/views/SettingPage'

import StoragePage from '@/views/views/StoragePage'
import StorageAlbum from '@/components/StoragePage/StorageAlbum'
import StorageCommunity from '@/components/StoragePage/StorageCommunity'
import StorageAdopt from '@/components/StoragePage/StorageAdopt'


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        { path: "/", component: MainPage},

        { path: "/adopt", component: AdoptPage},
        { path: "/adopt/post", component: AdoptPostPage},

        { path: "/community", component: CommunityPage},
        { path: "/community/post", component: CommunityPostPage},
        { path: "/community/add", component: CommunityAddPostPage},


        { path: "/swipe", component: SwipePage},

        { path: "/pet", component: MyPet},
        { path: "/pet/add", component: MyPetAdd},
        
        { path: "/my", component: MyPage, children: [
            { path: "main", component: MyPageMain},
            { path: "adopt", component: MyPageAdopt},
            { path: "album", component: MyPageAlbum},
            { path: "dealing", component: MyPageDealing},
        ]},
        { path: "/follow", component: MyFollowPage},

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