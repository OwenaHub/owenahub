import { House, Inbox, Search, Bell, UserRound } from 'lucide-react';

const APP_TABS = [
    {
        href: `/home`,
        title: 'Feed',
        icon: <House size={22} strokeWidth={2.2} />,
    },
    {
        href: `/inbox`,
        title: 'Inbox',
        icon: <Inbox size={22} strokeWidth={2.2} />,
    },
    {
        href: `/search`,
        title: 'Search',
        icon: <Search size={22} strokeWidth={2.2} />,
    },
    {
        href: `/notifications`,
        title: 'Alerts',
        icon: <Bell size={22} strokeWidth={2.2} />,
    },
    {
        href: `/account`,
        title: 'Account',
        icon: <UserRound size={22} strokeWidth={2.2} />,
    },
];

export default APP_TABS;
