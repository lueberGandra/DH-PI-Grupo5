import React from 'react'
import Banner from '../../components/Banner'
import News from '../../components/News'
import './style.css'

const Home = () => {
    return (
        <div className='home'>          
         <Banner />
          <News />        
        </div>
    )
}
export default Home