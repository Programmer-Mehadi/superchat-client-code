import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Shared/Loading/Loading';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { loading, user, googleSignupAndLogin, signIn } = useContext(AuthContext);

    const navigate = useNavigate()
    const [thisLoading, setThisLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            return navigate('/')
        }
    })

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = {
            email, password
        }
        setThisLoading(true);
        signIn(data.email, data.password)
            .then((result) => {
                toast.success('Signin successfully!');
                setThisLoading(false);
            })
            .catch(error => {
                setError(error.code);
                setThisLoading(false);
            })
    }
    return (
        <div className=" py-10  bg-base-200 rounded-sm">
            <div className="flex-col rounded-sm">
                <div className="card  w-full max-w-[600px] mx-auto  shadow-2xl bg-green-100 rounded-b">
                    <h2 className='text-xl font-semibold text-green-800 text-center p-4 bg-green-300 rounded-t'>Login Here</h2>
                    <form className="card-body rounded-sm" onSubmit={handleLogin}>
                        {
                            thisLoading && <Loading></Loading>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="text" placeholder="password" className="input input-bordered" name='password' />
                        </div>
                        {
                            error && <p className='text-red-600 mt-2'>{error}*</p>
                        }
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-green-400 text-slate-700 hover:bg-green-500 hover:text-white transition ease-in border-2">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <span className='inline'>Don't have an account?<Link to='/register' className='text-green-700 underline inline ml-2'>Register</Link> </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;