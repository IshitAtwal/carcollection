import React, { useContext, useState } from 'react'
import usercontext from './context'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const { setflag } = useContext(usercontext)

    const submit = async () => {
        const data = { email, password }

        try {
            const result = await fetch("http://localhost:8000/login", {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json; charset=UTF-8"
                }

            })

            const res = await result.json()
            if (res.statuscode == 1) {
                alert("data match")
                setflag(res.utype)
                sessionStorage.setItem("flag", res.utype)
            }
            else {
                console.log("not send")
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <style>{`
                .breadcrumb-section {
                    padding: 30px 0;
                    background-color: #f7f7f7;
                }
                .theme-breadcrumb .breadcrumb {
                    background: none;
                    padding: 0;
                    margin-bottom: 0;
                }
                .theme-breadcrumb .breadcrumb-item + .breadcrumb-item::before {
                    content: ">";
                    padding: 0 5px;
                    color: #888;
                }
                .login-page {
                    padding: 60px 0;
                }
                .theme-card {
                    padding: 30px;
                    border: 1px solid #eaeaea;
                    border-radius: 8px;
                    background-color: #fff;
                }
                .theme-form .form-box {
                    margin-bottom: 20px;
                }
                .theme-form .form-label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                }
                .theme-form .form-control {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .btn-solid {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #ff6f61;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    text-decoration: none;
                    cursor: pointer;
                    text-align: center;
                }
                .btn-solid:hover {
                    background-color: #e85c50;
                }
                .authentication-right {
                    padding: 30px;
                    border: 1px solid #eaeaea;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }
                .authentication-right h6 {
                    margin-bottom: 15px;
                    font-weight: 700;
                }
            `}</style>

            {/* <!-- breadcrumb start --> */}
            <div class="breadcrumb-section">
                <div class="container">
                    <h2>Customer's login</h2>
                    <nav class="theme-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li class="breadcrumb-item active">Customer's login</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- breadcrumb End --> */}

            {/* <!--section start--> */}
            <section class="login-page section-b-space">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h3>Login</h3>
                            <div class="theme-card">
                                <div class="theme-form">
                                    <div class="form-box">
                                        <label class="form-label">Email</label>
                                        <input type="text" class="form-control" id="email" placeholder="Email" required="" onChange={(e) => setemail(e.target.value)} />
                                    </div>
                                    <div class="form-box">
                                        <label class="form-label">Password</label>
                                        <input type="text" class="form-control" id="review"
                                            placeholder="Enter your password" required="" onChange={(e) => setpassword(e.target.value)} />
                                    </div>
                                    <a onClick={submit} class="btn btn-solid">Login</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 right-login">
                            <h3>New Customer</h3>
                            <div class="theme-card authentication-right">
                                <h6 class="title-font">Create A Account</h6>
                               
                                <Link to={'/signup'} class="btn btn-solid">Create an Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Section ends--> */}
        </div>
    )
}

export default Login
