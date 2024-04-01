import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // 在這裡處理提交表單，例如發送到API或更新狀態
        console.log(username);
    }
    return (
        <div className="create-account-container">
        <form onSubmit={handleSubmit} className="create-account-form">
            <h2>Create an account</h2>
            <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                id="username" 
                name="username" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                required
            />
            </div>
            <button type="submit" className="create-btn">Create</button>
        </form>
        </div>
    );
}
export default Register;