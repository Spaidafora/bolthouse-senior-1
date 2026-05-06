import { Link } from "react-router-dom";
import "./SignupPage.css";

export default function SignupPage() {
    return (
        <div className="auth-container">
            <div className="auth-card">
                
                <h1 className="auth-title">Create an account</h1>

                <span className="auth-subtext">
                    Already have an account?{" "}
                    <Link to="/login" className="auth-link">
                        Log in
                    </Link>
                </span>

                <label className="auth-field">
                    <span>Email</span>
                    <input type="email" />
                </label>

                <label className="auth-field">
                    <span>Password</span>
                    <input type="password" />
                </label>

                <label className="auth-field">
                    <span>Confirm password</span>
                    <input type="password" />
                </label>

                <label className="auth-checkbox">
                    <input type="checkbox" />
                    <span>
                        I accept the <a className="auth-link">Terms</a>
                    </span>
                </label>

                <button className="auth-button">Create Account</button>
            </div>
        </div>
    );
}