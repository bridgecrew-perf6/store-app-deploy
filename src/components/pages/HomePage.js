import React from 'react';
import ItemListContainer from "../itemsList/ItemListContainer";
import ShopingListContainer from "../ShopingList/ShopingListContainer";


function HomePage() {
    return (
        <div className = 'home-page'>
            <ItemListContainer />
            <ShopingListContainer/>
        </div>
    );
}

export default HomePage;