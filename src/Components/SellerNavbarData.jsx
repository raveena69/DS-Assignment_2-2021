import React from 'react';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Update from '@material-ui/icons/Update';
import Delete from '@material-ui/icons/Delete';

export const SellerNavbarData =[
    {
        title: "Add Item",
        icon: <PostAddIcon/>,
        link: "/sellerAddItem"
    },

    {
        title:"Update",
        icon:<Update/>,
        link:"/sellerUpdate"
    },

    {
        title:"Delete",
        icon:<Delete/>,
        link:"/sellerDelete"
    },


]