import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Layout from '@components/Layout'
import styles from '@styles/AuthForm.module.css'
import AuthContext from '@context/AuthContext'

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const { register, error } = useContext(AuthContext)

    useEffect(() => {
        error && toast.error(error)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password !== passwordConfirm) {
            toast.error('Passwords do not match!')
            return
        }

        register({ username, email, password })
    }

    return (
        <Layout title="User Registration">
            <section>
                <div className={styles.auth}>
                    <h1 className="section__title">
                        <FontAwesomeIcon icon={faUser} /> Register
                    </h1>
                    <ToastContainer />
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="username"
                                className="section__subtitle"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="section__subtitle"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="section__subtitle"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="passwordConfirm"
                                className="section__subtitle"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="passwordConfirm"
                                value={passwordConfirm}
                                onChange={(e) =>
                                    setPasswordConfirm(e.target.value)
                                }
                            />
                        </div>
                        <input type="submit" value="Register" className="btn" />
                    </form>
                    <p>
                        Already have an account?{' '}
                        <Link href="/account/login">Login</Link>
                    </p>
                </div>
            </section>
        </Layout>
    )
}
