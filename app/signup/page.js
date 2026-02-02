"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignUpPage() {
  return (
    <div style={styles.container}>
      {/* 1. Top Navigation */}
      <nav style={styles.nav}>
        <Link href="/home" style={styles.navLink}>Home</Link>
        <Link href="/login" style={styles.navLink}>Login</Link>
        <Link href="/signup" style={styles.navLink}>Sign Up</Link>
      </nav>

      {/* 2. The Sign Up Glass Card */}
      <div style={styles.formCard}>
        <h1 style={styles.title}>Create Account</h1>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name</label>
          <input type="text" placeholder="Enter your name" style={styles.input} />
          
          <label style={styles.label}>Email Address</label>
          <input type="email" placeholder="email@example.com" style={styles.input} />
          
          {/* Password label and input have been removed */}
        </div>

        <button style={styles.registerBtn}>Register</button>

        <div style={styles.divider}>
          <span style={styles.dividerLine}></span>
          <span style={styles.dividerText}>or</span>
          <span style={styles.dividerLine}></span>
        </div>

        <p style={styles.footerText}>
          Already have an account? 
          <Link href="/login" style={styles.loginLink}> Log In</Link>
        </p>
        
        {/* Quick Google Sign Up Option */}
        <button 
          onClick={() => signIn("google", { callbackUrl: "/" })} 
          style={styles.googleBtn}
        >
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    fontFamily: 'sans-serif',
  },
  nav: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    display: 'flex',
    gap: '20px'
  },
  navLink: { color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: '500', opacity: 0.8 },
  
  formCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    backdropFilter: 'blur(12px)', 
    padding: '40px',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    width: '90%',
    maxWidth: '420px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
  },
  title: {
    color: 'white',
    fontSize: '28px',
    marginBottom: '25px',
    marginTop: '0',
    fontWeight: 'bold'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '20px'
  },
  label: { color: 'white', fontSize: '13px', marginBottom: '4px', opacity: 0.9 },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.3)',
    backgroundColor: 'rgba(255,255,255,0.9)',
    fontSize: '14px',
    marginBottom: '10px',
    outline: 'none',
    color: '#333'
  },
  registerBtn: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#fff',
    color: '#1a1a1a',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    transition: '0.3s'
  },
  divider: { display: 'flex', alignItems: 'center', margin: '20px 0', gap: '10px' },
  dividerLine: { flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' },
  dividerText: { color: 'rgba(255,255,255,0.5)', fontSize: '12px' },
  footerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: '14px',
    marginBottom: '15px'
  },
  loginLink: {
    color: '#ffd700', // Kept your Golden color exactly as it was
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '5px'
  },
  googleBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px'
  }
};