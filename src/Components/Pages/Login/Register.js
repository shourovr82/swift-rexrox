import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContextss';
import { toast } from 'react-toastify';

const Register = () => {
  // const { user, setUser } = useState(EveryContext)
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const navigateTo = useNavigate();

  const { createUser, verifyEmail, logOutHandle, handleGithubLogin, handleGoogleLogIn } = useContext(AuthContext);
  const handleEmailChange = e => {
    setError('');
    setUserinfo({ ...userinfo, email: e.target.value });
  }
  const handlePasswordChange = e => {
    setError('');
    setUserinfo({ ...userinfo, password: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // create user
    createUser(email, password)
      .then(result => {
        form.reset();
        verifyEmail();
        logOutHandle();
        toast('Email Verfication  Link has been sent')
        navigateTo('/login')
      })
      .catch(e => {
        setError(e.message)
        toast.success(e.message);
      })
  }

  const githubLogin = () => {
    handleGithubLogin()
      .then(result => {
        navigate(from, { replace: true })
        toast.succces('Welcome to the Website')
      })
      .catch(e => {
        console.log(e.message)
      })
  }

  const googleLogin = () => {
    handleGoogleLogIn()
      .then(result => {
        navigate(from, { replace: true })
        toast.succces('Welcome to the Website')
      })
      .catch(e => {
        console.log(e);
      })
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
            {
              error && <p className='text-red-100'>{error}</p>
            }

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
                <button className="btn bg-red-800 hover:bg-slate-200 hover:text-red-800 font-bold border-0">Register</button>
              </div>
            </form>
            <hr className='mt-2' />
            <div className='text-center'>
              <h2>Login with</h2>
              <hr className='mt-2' />
              <div className="form-control mt-4">
                <button
                  onClick={googleLogin}
                  className="btn bg-transparent border-white hover:bg-red-800 hover:border-0 text-white">continue with Google</button>
              </div>
              <div className="form-control mt-4">
                <button
                  onClick={githubLogin}
                  className="btn py-0 bg-transparent border-white hover:bg-red-800 hover:border-0 text-white">  Login with Github</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;