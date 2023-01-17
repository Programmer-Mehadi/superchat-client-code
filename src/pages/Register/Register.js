import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Shared/Loading/Loading';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const [thisLoading, setThisLoading] = useState(false)
    const navigate = useNavigate();
    const { loading, user, createUser, googleSignupAndLogin, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const imageHostKey = process.env.REACT_APP_imgbb_key;


    useEffect(() => {
        if (user) {
            return navigate('/')
        }
    })


    const handleRegister = (event) => {

        event.preventDefault();
        setThisLoading(true);
        const form = event.target;
        const name = form.fullname.value;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.file.files[0];
        const data = {
            name, username, email, password, img
        }
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                setError(null)
                const formData = new FormData();
                let imgUrl = '';
                formData.append('image', img);
                const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
                fetch(url, {
                    method: 'POST',
                    body: formData
                }).then(res => res.json())
                    .then(imgbb => {
                        if (imgbb.success) {
                            imgUrl = imgbb.data.display_url;
                            updateUserProfile(data.name, imgUrl)
                                .then(res => {
                                    toast.success('Create user successfully!');
                                    const userData = {
                                        name: result?.user?.displayName,
                                        email: result?.user?.email,
                                        uid: result?.user?.uid,
                                        photoURL: result?.user?.photoURL,
                                        type: data?.userType,
                                        username: username,
                                    }
                                    fetch(`${process.env.REACT_APP_server_api}addusers`, {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(userData)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.acknowledged === true || "Already inserted.") {
                                                // getToken(userData?.email);
                                                toast.success('Signin successfully!');
                                                setThisLoading(false);
                                                return navigate('/');
                                            }
                                        })

                                })
                                .catch(error => setThisLoading(false))
                        }
                    })

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
                    <h2 className='text-xl font-semibold text-green-800 text-center p-4 bg-green-300 rounded-t'>Register Here</h2>
                    <form className="card-body rounded-sm" onSubmit={handleRegister}>
                        {
                            thisLoading && <Loading></Loading>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input required type="text" placeholder="full name" className="input input-bordered" name='fullname' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input required type="text" placeholder="username" className="input input-bordered" name='username' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="text" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="text" placeholder="password" className="input input-bordered" name='password' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">File upload</span>
                            </label>
                            <input required type="file" className="file-input file-input-bordered file-input-success w-full " name='file' />
                        </div>
                        {
                            error && <p className='text-red-600 mt-2'>{error}*</p>
                        }
                        <div className="form-control mt-6">
                            <button type='submit' className="btn bg-green-400 text-slate-700 hover:bg-green-500 hover:text-white transition ease-in border-2">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;