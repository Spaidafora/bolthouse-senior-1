import { Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
    return (
        <div className="auth-container">
            <div className="auth-card">
                
                <h1 className="auth-title">Log in</h1>

                <span className="auth-subtext">
                    Don't have an account?{" "}
                    <Link to="/register" className="auth-link">
                        Register
                    </Link>
                </span>

                <label className="auth-field">
                    <span>Email</span>
                    <input type="email" placeholder="Enter your email" />
                </label>

                <label className="auth-field">
                    <span>Password</span>
                    <input type="password" placeholder="Enter your password" />
                </label>

                <label className="auth-checkbox">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </label>

                <button className="auth-button">Log in</button>
            </div>
        </div>
    );
}