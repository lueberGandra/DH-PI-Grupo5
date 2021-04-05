import React from 'react'

import AdminContent from '../../components/adminContent'
import './style.css'



const Admin = () => {
    return (
        <div id="admin">
            <div className="admin-sideBar">
                <div className="admin-sideBar-logoWrapper">
                    <img src="./img/logo.png" alt="Logo" className="sideBar-logoImg" />
                </div>
                <div className="admin-sideBar-btnsWrapper">
                    <div className="admin-sideBar-btnsWrapper-btnHome">
                        <div className="btnsWrapper-btnimgWrapper">
                            <img src="./img/home.png" alt="" className="sideBar-btnIconImg" />
                        </div>
                        <h2 className="sideBar-btnTitle">Home</h2>
                    </div>
                    <div className="admin-sideBar-btnsWrapper-btnArticle">
                        <div className="btnsWrapper-btnimgWrapper">
                            <img src="./img/article.png" alt="" className="sideBar-btnIconImg" />
                        </div>
                        <h2 className="sideBar-btnTitle">Artigos</h2>
                    </div>
                    <div className="admin-sideBar-btnsWrapper-btnPodcast">
                        <div className="btnsWrapper-btnimgWrapper">
                            <img src="./img/podcast.png" alt="" className="sideBar-btnIconImg" />
                        </div>
                        <h2 className="sideBar-btnTitle">Podcast</h2>
                    </div>
                    <div className="admin-sideBar-btnsWrapper-btnVideo">
                        <div className="btnsWrapper-btnimgWrapper">
                            <img src="./img/video.png" alt="" className="sideBar-btnIconImg" />
                        </div>
                        <h2 className="sideBar-btnTitle">Videos</h2>
                    </div>
                    <div className="admin-sideBar-btnsWrapper-btnAbout">
                        <div className="btnsWrapper-btnimgWrapper">
                            <img src="./img/about.png" alt="" className="sideBar-btnIconImg" />
                        </div>
                        <h2 className="sideBar-btnTitle">Sobre</h2>
                    </div>
                </div>
            </div>
            <div className="admin-content">
                <AdminContent />
            </div>
        </div>
    )

}

export default Admin