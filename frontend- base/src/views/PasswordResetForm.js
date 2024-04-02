import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext'

function PasswordResetForm() {
    const [email, setEmail] = useState('');
    const { resetPassword } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPassword(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit">Reset Password</button>
        </form>
    );
}

export default PasswordResetForm; // Add this line