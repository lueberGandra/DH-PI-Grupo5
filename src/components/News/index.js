import React from 'react'
import './style.css'

const News = ()=>{
    return (
        <>
            <div id="news">
                <div class="news-item">
                    <div class="img-wrapper">
                        <img src="./img/congresso.jpg" alt="congresso Nacional" />
                    </div>
                    <div class="content-wrapper">
                        <h3 class="content-tag">Política</h3>
                        <h1 class="content-title">Lorem ipsum dolor.</h1>
                        <h2 class="content-summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quas, corporis maiores asperiores recusandae commodi officiis, ullam illo amet nostrum quaerat magnam facere iusto exercitationem quis consequatur odit error tempore. Suscipit eius harum minus quisquam natus. Aspernatur, rerum sunt? Magnam!</h2>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </>)
}
export default News



