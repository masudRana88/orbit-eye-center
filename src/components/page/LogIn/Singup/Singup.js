import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Singup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
             <div className="container my-container">
            <div className="row my-auto">
                <div className="col-lg-5 col-md-5 col-sm-12 mx-auto">
                    <h2 className="text-center mt-5 mb-3">Create An Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue="" placeholder="Your Full Name" type="text" className="form-control mb-3" {...register("name", { required: true })} />
                            
                        <input defaultValue="" placeholder="Your Email" type="email" className="form-control mb-3" {...register("email" , { required: true })} />
                        
                        <input defaultValue="" placeholder="Your Password" type="password" className="form-control mb-3" {...register("pass", { required: true })} />
                        
                        {errors.email && <p className="text-danger">Email field is required  </p>}
                        {errors.pass && <p className="text-danger">Password field is required</p>}
                        
                        {/* <input type="submit" /> */}
                        <button className="btn w-100 bg-color-reguler text-light">Login</button>
                        <p className="mt-1 ms-1">Have an Acount ?<Link to="login" className="nav-link login-link d-inline">Login</Link></p>
                    </form>
                    <p className="text-center mt-2">Login with</p>
                    <div className="text-center mb-3">
                        <button className="me-1 btn-firebase btn-fb"><i class="fab fa-facebook-f"></i></button>
                        <button className="me-1 btn-firebase btn-tw"><i class="bi bi-twitter"></i></button>
                        <button className="btn-firebase btn-go"><i class="bi bi-google"></i></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Singup;