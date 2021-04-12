import React from 'react'
import './style.css'

const AdminContent = () => {
    return (
        <div className="body">
            <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand">Artigos</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Procurar artigos criados" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fas fa-search">Procurar</i></button>
                </form>
            </nav>
            <div className="admin-content-postsWrapper">
            <div className="admin-content-postsWrapper-header">
                <h1 className="postWrapper-header-titles">Titulos</h1>
                <button type="button" class="btn btn-primary btn-rounded"><img src="./img/plus.png" alt="" />Novo</button>
            </div>
                <div className="admin-content-postsWrapper-post-item">
                    <h1 className="post-item-title">Febre Amarela</h1>
                    <div className="post-item-icons">
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/view.png" alt="view" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/edit.png" alt="edit" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/duplicate.png" alt="duplicate" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/delete.png" alt="delete" className="post-item-icons-imgIcon" />
                        </div>
                    </div>
                </div>
                <div className="admin-content-postsWrapper-post-item">
                    <h1 className="post-item-title">Diarreia</h1>
                    <div className="post-item-icons">
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/view.png" alt="view" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/edit.png" alt="edit" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/duplicate.png" alt="duplicate" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/delete.png" alt="delete" className="post-item-icons-imgIcon" />
                        </div>
                    </div>
                </div>
                <div className="admin-content-postsWrapper-post-item">
                    <h1 className="post-item-title">Febre Azul</h1>
                    <div className="post-item-icons">
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/view.png" alt="view" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/edit.png" alt="edit" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/duplicate.png" alt="duplicate" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/delete.png" alt="delete" className="post-item-icons-imgIcon" />
                        </div>
                    </div>
                </div>
                <div className="admin-content-postsWrapper-post-item">
                    <h1 className="post-item-title">Catapora</h1>
                    <div className="post-item-icons">
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/view.png" alt="view" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/edit.png" alt="edit" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/duplicate.png" alt="duplicate" className="post-item-icons-imgIcon" />
                        </div>
                        <div className="post-item-icons-imgWrapper">
                            <img src="./img/delete.png" alt="delete" className="post-item-icons-imgIcon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminContent