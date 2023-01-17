import React from 'react';

const Register = () => {
    return (
        <div className=" py-10  bg-base-200 rounded-sm">
            <div className="flex-col rounded-sm">
                <div className="card  w-full max-w-[600px] mx-auto  shadow-2xl bg-green-100 rounded-b">
                    <h2 className='text-xl font-semibold text-green-800 text-center p-4 bg-green-300 rounded-t'>Register Here</h2>
                    <form className="card-body rounded-sm">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input required type="text" placeholder="full name" className="input input-bordered" name='fullname'/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input required type="text" placeholder="username" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">File upload</span>
                            </label>
                            <input required type="file" className="file-input file-input-bordered file-input-success w-full " />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-green-400 text-slate-700 hover:bg-green-500 hover:text-white transition ease-in border-2">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;