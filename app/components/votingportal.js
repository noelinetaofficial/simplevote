"use client";
import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function VotingPortal({ session }) {
  const [voters, setVoters] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("voters list") || "[]");
    setVoters(saved);
    if (session?.user?.id) {
      setHasVoted(saved.some(v => v.voterId === session.user.id));
    }
  }, [session]);

  const handleVote = (candidate) => {
    if (hasVoted) return;
    const newVote = {
      name: session.user.name,
      voterId: session.user.id || "Unknown ID",
      candidate: candidate
    };
    const updatedList = [...voters, newVote];
    setVoters(updatedList);
    localStorage.setItem("voters list", JSON.stringify(updatedList));
    setHasVoted(true);
  };

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <span style={{ fontWeight: 'bold' }}>Candidate Portal</span>
        <div>
          {session.user.name} 
          <button onClick={() => signOut()} style={s.logoutBtn}>Logout</button>
        </div>
      </nav>

      <div style={s.container}>
        <h1 style={{ textAlign: 'center' }}>{hasVoted ? "Vote Recorded" : "Select Candidate"}</h1>
        
        <div style={s.grid}>
          {['Noeline T A', 'Priyal Joshi'].map((c) => (
            <div key={c} style={s.glassCard}>
              <h3>{c}</h3>
              <button 
                onClick={() => handleVote(c)} 
                disabled={hasVoted} 
                style={{ ...s.voteBtn, backgroundColor: hasVoted ? '#9ca3af' : '#ec1804' }}
              >
                {hasVoted ? "Voted" : "Vote Now"}
              </button>
            </div>
          ))}
        </div>

        {voters.length > 0 && (
          <div style={s.glassTable}>
            <h2>Live Voter List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {voters.map((v, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '10px 0' }}>
                      <div style={{ fontWeight: 'bold' }}>{v.name}</div>
                      {/* Deleted the line that displayed the voter ID here */}
                    </td>
                    <td style={{ textAlign: 'right' }}>{v.candidate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

const s = {
  page: { minHeight: '100vh', color: 'white' },
  nav: { backgroundColor: 'rgba(41, 41, 41, 0.8)', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logoutBtn: { backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', marginLeft: '10px' },
  container: { maxWidth: '800px', margin: '40px auto', padding: '0 20px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  glassCard: { backgroundColor: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '12px', textAlign: 'center', color: '#333' },
  voteBtn: { width: '100%', padding: '10px', color: 'white', border: 'none', borderRadius: '6px' },
  glassTable: { marginTop: '40px', backgroundColor: 'rgba(255, 255, 255, 0.83)', padding: '20px', borderRadius: '15px', color: '#333' }
};