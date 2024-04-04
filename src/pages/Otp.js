import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Otp.css";

export default function Otp() {

  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState('');

  const verifyOtp = async () => {
    try {
      await user.confirm(otp);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="background">
      <div className='Otp-design'>
        <h1>Enter OTP</h1>
        <form >
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          {error && <p>{error}</p>}
          <button type="submit" className='send-otp' onClick={verifyOtp}>Verify OTP</button>
        </form>
      </div>
    </div>
  );
}


