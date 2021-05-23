import React from 'react';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SearchIcon from '@material-ui/icons/Search';
export const NavbarData =[
    {
        title: "Add Item",
        icon: <PostAddIcon/>,
        link: "/buyerAddItem"
    },

    {
        title:"Fashion",
        icon:<DescriptionIcon />,
        link:"/fashion"
    },

    {
        title:"Cart",
        icon:<ShoppingCartIcon />,
        link:"/cart"
    },

    {
        title:"Payment",
        icon:<CreditCardIcon />,
        link:"/payment"
    },

    {
        title:"Search Item",
        icon:<SearchIcon />,
        link:"/searchItem"
    },
]