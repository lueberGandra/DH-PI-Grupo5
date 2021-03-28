import React from 'react'
import './style.css'
import logo from './logo512.png'


const SignUp = () => {
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
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Nome Completo"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Confirm Password"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="button" class="btn btn-primary" id="cadastrar">Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp

