import React from 'react'
import './style.css'
import logo from './logo512.png'


const ChangePass = () => {
    return (
        <div className="signin--wrapper">
            <div className="signin-box">
                <form className="login-form">
                    <div className="form-header">
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="form-body">
                        <div className="form-group">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="button" class="btn btn-primary" id="entrar">Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ChangePass

