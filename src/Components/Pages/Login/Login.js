import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../../../contexts/AuthContextss';
import { toast } from 'react-toastify';


const Login = () => {
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: ''
  });
  const { loginUser, user, setUser, handleGoogleLogIn, logOutHandle,
    handleGithubLogin, setLoading } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleEmailChange = e => {
    setError('');
    setUserinfo({ ...userinfo, email: e.target.value });
    // console.log(userinfo.email);
  }
  const handlePasswordChange = e => {
    setError('');
    setUserinfo({ ...userinfo, password: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        console.log(user);
        if (user.emailVerified) {
          toast.success('Welcome to the Website')
          navigate(from, { replace: true })
        } else {
          setError('Your email is not Verified')
          logOutHandle();
          toast.error('Your email is not verified. Please verify your email address.')
        }
      })
      .catch(e => {
        setError(e.message);
      })

  }

  const googleLoginHandle = () => {
    handleGoogleLogIn()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(e => console.log(e))
  }


  const githubLoginHandle = () => {
    handleGithubLogin()
      .then(result => {
      })
      .catch(e => console.log(e))
  }



  return (
    <div className=' login-banner'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='flex justify-center'>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl form-background">
          <div className="card-body">

            {
              error && <p className='text-red-100 border px-3 rounded py-2'>{error} !!!!</p>
            }

            <form onSubmit={handleSubmit}>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={handleEmailChange}
                  type="text" name='email' placeholder="email"
                  value={userinfo.email}
                  className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={handlePasswordChange}
                  value={userinfo.password}
                  type="password" name='password' placeholder="password" className="input input-bordered" />
                <h2 className='pt-4'>New to Rexrox ? <Link to='/register' className='underline text-blue-600'>Create an Account..</Link></h2>
              </div>
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              <div className="form-control mt-2">
                <button type='submit' className="btn bg-red-800 border-0 hover:bg-slate-200 hover:text-red-800 font-bold">Login</button>
              </div>
              <hr className='mt-2' />
            </form>

            <div className='text-center'>
              <h2>Login with</h2>
              <hr className='mt-2' />
              <div className="form-control mt-4">

                <button
                  onClick={googleLoginHandle}
                  className="btn bg-transparent border-white hover:bg-red-800 hover:border-0 text-white">Login with Google</button>
              </div>
              <div className="form-control mt-4">

                <button
                  onClick={githubLoginHandle}
                  className="btn bg-transparent border-white hover:bg-red-800 hover:border-0 text-white">  Login with Github</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;