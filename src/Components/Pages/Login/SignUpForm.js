import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContextss';


const SignUpForm = () => {
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: ''
  });

  const { createUser, name, logOutHandle, setUser } = useContext(AuthContext);

  const handleEmailChange = e => {
    setUserinfo({ ...userinfo, email: e.target.value });
    console.log(userinfo.email);
  }
  const handlePasswordChange = e => {
    setUserinfo({ ...userinfo, password: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(e => console.log(e))
  }


  return (
    <div className='login-banner'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='flex justify-center'>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl form-background">
          <div className="card-body">



            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" />
              </div>

              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"
                  value={userinfo.email}
                  onChange={handleEmailChange}
                  name='email'
                  className="input input-bordered"
                  required
                />
              </div>

              {/*  */}


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password"
                  onChange={handlePasswordChange}
                  name='password'
                  value={userinfo.password}
                  className="input input-bordered"
                />

                <h2 className='pt-4'>Already Have an Account? <Link to='/login' className='underline text-blue-600'>Login..</Link></h2>
              </div>

              <div className="form-control mt-2">
                <button className="btn btn-primary">Register</button>
              </div>
              <hr className='mt-2' />
              <div className='text-center'>
                <h2>Login with</h2>
                <hr className='mt-2' />
                <div className="form-control mt-4">
                  <button className="btn bg-transparent border-white hover:bg-red-800 hover:border-0 text-white">continue with Google</button>
                </div>
                <div className="form-control mt-4">
                  <button className="btn py-0 bg-transparent border-white hover:bg-red-800 hover:border-0 text-white">  Login with Github</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignUpForm;