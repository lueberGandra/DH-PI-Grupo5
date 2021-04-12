

import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import News from '../../components/News'
import './style.css'




function Home() {
    return (
        <div id="Home">
            <Header />
            <div>
             <Banner />
             <News />

            </div>
            
            
        </div>
    );
}

export default Home;

