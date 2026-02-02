"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const s = {
    nav: { backgroundColor: 'transparent', color: 'white', padding: '15px 40px', display: 'flex', justifyContent: 'flex-end', gap: '25px', fontWeight: 'bold' },
    wrapper: { minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' },
    card: { backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', width: '100%', maxWidth: '400px', border: '1px solid rgba(255,255,255,0.3)', boxSizing: 'border-box' },
    input: { width: '100%', padding: '12px', margin: '8px 0 20px 0', borderRadius: '8px', border: '1px solid #ccc', boxSizing: 'border-box', outline: 'none', backgroundColor: 'white' },
    btn: { width: '100%', padding: '12px', backgroundColor: '#27272a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }
  };

  return (
    <div>
      <nav style={s.nav}>
        <a href="/" style={{color:'white', textDecoration:'none'}}>Home</a>
        <a href="/signup" style={{color:'white', textDecoration:'none'}}>Sign Up</a>
        <a href="/login" style={{color:'white', textDecoration:'underline'}}>Login</a>
      </nav>

      <div style={s.wrapper}>
        <div style={s.card}>
          <h1 style={{textAlign:'center', marginBottom:'30px', color: '#fafafa', fontSize: '28px'}}>Voter Login</h1>
          
          <label style={{fontSize:'14px', fontWeight:'bold', color: '#fbfbfb'}}>Username</label>
          <input style={s.input} type="text" placeholder="Enter username" />

          <label style={{fontSize:'14px', fontWeight:'bold', color: '#fcfdff'}}>LinkedIn ID</label>
          <input style={s.input} type="text" placeholder="Enter LinkedIn profile ID" />

          <button style={s.btn}>Login</button>

          <div style={{textAlign:'center', margin:'20px 0', color:'#f7faff', fontSize:'12px', fontWeight:'bold'}}>OR USE SOCIAL</div>
          
          <div style={{display:'flex', gap: '10px'}}>
            {/* Kept Google button and removed LinkedIn button */}
            <button onClick={() => signIn('google')} style={{...s.btn, backgroundColor:'white', color:'#333', border:'1px solid #ddd', flex: 1}}>Google</button>
          </div>

          <div style={{marginTop:'30px', textAlign:'center', fontSize:'14px', borderTop:'1px solid #eee', paddingTop:'20px'}}>
            <a href="/forgot-password" style={{color:'#f9f9fa', textDecoration:'none', display:'block', marginBottom:'10px'}}>Forgot Password?</a>
            <p style={{color: '#f1f3f5'}}>Don't have an account? <a href="/signup" style={{color:'#f8fafc', fontWeight:'bold', textDecoration:'none'}}>Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}