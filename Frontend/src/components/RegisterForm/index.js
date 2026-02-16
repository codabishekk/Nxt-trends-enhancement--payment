import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useHistory, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {registerUser, resetAuth} from '../../redux/slices/authSlice'

import './index.css'

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()
  const {loading, error, success} = useSelector(state => state.auth)

  useEffect(() => {
    if (success) {
      dispatch(resetAuth())
      history.push('/login')
    }
  }, [success, history, dispatch])

  const submitForm = event => {
    event.preventDefault()
    dispatch(registerUser({name, email, password}))
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="register-form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="register-website-logo-mobile-img"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="register-img"
        alt="website register"
      />
      <form className="form-container" onSubmit={submitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="register-website-logo-desktop-img"
          alt="website logo"
        />
        <div className="input-container">
          <label className="input-label" htmlFor="name">
            NAME
          </label>
          <input
            type="text"
            id="name"
            className="input-field"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="email">
            EMAIL
          </label>
          <input
            type="text"
            id="email"
            className="input-field"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="register-button" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        {error && <p className="error-message">*{error}</p>}
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default RegisterForm
