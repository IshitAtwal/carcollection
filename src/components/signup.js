import React, { useState } from 'react'

const Signup = () => {
    const [fname, setfname] = useState()
    const [lname, setlname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const submit = async () => {
        const data = { fname, lname, email, password }

        try {
            const result = await fetch("http://localhost:8000/register", {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json ; charset=UTF-8"
                }
            })

            const res = await result.json()
            if (res.statuscode == 1) {
                alert("datasend")
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
            {/* Internal CSS */}
            <style>
                {`
                    .breadcrumb-section {
                        padding: 20px 0;
                        background: #f8f9fa;
                        border-bottom: 1px solid #dee2e6;
                    }

                    .breadcrumb-section h2 {
                        margin-bottom: 10px;
                        font-weight: bold;
                        text-transform: uppercase;
                    }

                    .theme-breadcrumb .breadcrumb {
                        background: transparent;
                        padding: 0;
                        margin-bottom: 0;
                    }

                    .login-page {
                        padding: 40px 0;
                        background-color: #ffffff;
                    }

                    .theme-card {
                        padding: 30px;
                        border: 1px solid #e0e0e0;
                        border-radius: 5px;
                        background: #fefefe;
                    }

                    .form-box {
                        margin-bottom: 20px;
                    }

                    .form-label {
                        font-weight: 600;
                        margin-bottom: 8px;
                        display: block;
                    }

                    .form-control {
                        border-radius: 4px;
                        padding: 10px;
                        border: 1px solid #ced4da;
                    }

                    .btn-solid {
                        background-color: #007bff;
                        color: white;
                        padding: 10px 25px;
                        border-radius: 4px;
                        text-decoration: none;
                        cursor: pointer;
                    }

                    .btn-solid:hover {
                        background-color: #0056b3;
                    }
                `}
            </style>

            {/* <!-- breadcrumb start --> */}
            <div class="breadcrumb-section">
                <div class="container">
                    <h2>Create account</h2>
                    <nav class="theme-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li class="breadcrumb-item active">Create account</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- breadcrumb End --> */}

            {/* <!--section start--> */}
            <section class="login-page section-b-space">
                <div class="container">
                    <h3>create account</h3>
                    <div class="theme-card">
                        <div class="theme-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-box">
                                        <label class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="fname" placeholder="First Name" required="" onChange={(e) => setfname(e.target.value)} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-box">
                                        <label class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="lname" placeholder="Last Name"
                                            required="" onChange={(e) => setlname(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-box">
                                        <label class="form-label">email</label>
                                        <input type="text" class="form-control" id="email" placeholder="Email" required="" onChange={(e) => setemail(e.target.value)} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-box">
                                        <label class="form-label">Password</label>
                                        <input type="text" class="form-control" id="review"
                                            placeholder="Enter your password" required="" onChange={(e) => setpassword(e.target.value)} />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <a class="btn btn-solid w-auto" onClick={submit}>create Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Section ends--> */}
        </div>
    )
}

export default Signup
