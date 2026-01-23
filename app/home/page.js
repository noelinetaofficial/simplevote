"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={styles.wrapper}>
      {/* 1. Navigation Bar with Logo */}
      <nav style={styles.nav}>
        <div style={styles.navLinks}>
          <Link href="/home" style={styles.linkWrapper}>
            <span style={styles.link}>Home</span>
          </Link>
          <Link href="/login" style={styles.linkWrapper}>
            <span style={styles.link}>Sign Up</span>
          </Link>
          <Link href="/login" style={styles.linkWrapper}>
            <span style={styles.loginLink}>Login</span>
          </Link>

          {/* --- THE LOGO --- */}
          <img 
            src="/logo.jpeg" 
            alt="Simple Vote Logo" 
            style={styles.logo} 
          />
        </div>
      </nav>

      {/* 2. Main Visual Section */}
      <div style={styles.imageContainer}>
        <img 
          src="/voting.jpeg" 
          alt="Main Visual" 
          style={styles.heroImage} 
        />
      </div>

      <div style={styles.content}>
        {/* Text removed as per your request */}
      </div>
    </div>
  );
}

const styles = {
  wrapper: { minHeight: '100vh', backgroundColor: 'transparent' },
  nav: { 
    backgroundColor: 'transparent', 
    padding: '20px 40px', 
    display: 'flex', 
    justifyContent: 'flex-end',
    alignItems: 'center' // Ensures links and logo are perfectly centered vertically
  },
  navLinks: { 
    display: 'flex', 
    gap: '30px', 
    color: 'white', 
    fontWeight: 'bold', 
    alignItems: 'center' 
  },
  linkWrapper: { textDecoration: 'none', color: 'inherit' },
  link: { cursor: 'pointer', fontSize: '16px' },
  loginLink: { cursor: 'pointer', borderBottom: '2px solid white', fontSize: '16px' },
  
  // --- Logo Styling ---
  logo: {
    width: '60px',        // Adjust size as needed
    height: '60px',       // Keep it square to match your image
    borderRadius: '50%',  // Makes the logo perfectly circular
    border: '2px solid rgba(255, 255, 255, 0.3)', // Optional: adds a soft border
    marginLeft: '10px'
  },

  imageContainer: { 
    width: '90%', 
    margin: '20px auto', 
    height: '700px', 
    borderRadius: '15px', 
    overflow: 'hidden',
    boxShadow: '0px 10px 30px rgba(0,0,0,0.5)'
  },
  heroImage: { width: '100%', height: '100%', objectFit: 'cover' },
  content: { textAlign: 'center', padding: '20px' }
};