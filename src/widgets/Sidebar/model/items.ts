import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/appRoutes';
import { AboutIcon, MainIcon, ProfileIcon } from 'shared/assets';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main page',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About page',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile page',
    },
];
