import React from 'react'
import './style.css'


const Banner = () => {
    return (
    <div className="carousel--wrapper">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1615726244940-a923cec9a0f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1615842193764-38aa1923f02e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="d-block w-100 mx-auto text- align-items-center " alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1615879965520-cde89ea80726?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80" className="d-block w-100 mx-auto text- align-items-center " alt="" />
                </div>
            </div>
            <a href="#carouselExampleControls" className="carousel-control-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a href="#carouselExampleControls" className="carousel-control-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <div className="carousel_content-wrapper">
            <h3>Esporte</h3>
            <h1>Lorem, ipsum.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius fuga fugit ullam blanditiis molestiae, consectetur vitae praesentium rerum suscipit? Deleniti laudantium atque autem? Tempora odit quisquam nostrum! Cumque, delectus molestias!
            Ducimus, magnam fugit accusantium ut eius accusamus maiores delectus quaerat ex. Consequatur tempora id maxime veniam, totam blanditiis amet repellendus, reprehenderit aspernatur molestias recusandae accusantium ullam illo qui provident sed.
            Placeat quibusdam quisquam vel molestias aut architecto optio? Officia mollitia ducimus magnam magni error cum unde modi! Itaque esse laudantium earum et repudiandae quis hic nihil, ipsum voluptatem dolores aliquid.</p>
        </div>
    </div>

    )
}
export default Banner

