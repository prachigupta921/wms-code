import { Headphones, Home } from 'react-feather';

export const MENUITEMS = [
    {
        menutitle: 'General',
        menucontent: 'Dashboards,Widgets',
        Items: [
            {
                title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Sample', type: 'link' },
                ]
            },
            {
                title: 'Catlog', icon: Home, type: 'sub', active: false, children: [
                    { title: 'Category', type: 'exteral_link', path: `${process.env.PUBLIC_URL}/category` },
                    { title: 'Brand', type: 'exteral_link', path: `${process.env.PUBLIC_URL}/brand` },
                    { title: 'Catlog Banner', type: 'exteral_link', path: `${process.env.PUBLIC_URL}/catlog-banner` },
                    { title: 'Manage Banner', type: 'exteral_link', path: `${process.env.PUBLIC_URL}/manage-banner` },
                    { title: 'Attribute', type: 'exteral_link', path: `${process.env.PUBLIC_URL}/attribute` },
                    { title: 'Option', type: 'exteral_link', path: `${process.env.PUBLIC_URL}/option` },
                ]
            },
            {
                title: 'Admin', icon: Home, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/customer`, title: 'Customer', type: 'exteral_link' },
                ]
            },
        ]
    },
    {
        menutitle: "Support",
        Items: [
            {
                title: 'Raise Support', icon: Headphones, type: 'sub', active: false, children: [
                    { title: 'Raise Ticket', type: 'exteral_link', path: 'http://support.pixelstrap.com/help-center' },
                ]
            },
            // {
            //     title: 'Category', icon: Home, type: 'sub', active: false, children: [
            //         { path: `${process.env.PUBLIC_URL}/category`, title: 'Add Category', type: 'link' },
            //     ]
            // }
        ]
    },
];