"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    const savedVoters = JSON.parse(localStorage.getItem("voters list") || "[]");
    setVoters(savedVoters);
  }, []);

  // Calculate Vote Counts for the Chart
  const results = voters.reduce((acc, curr) => {
    acc[curr.candidate] = (acc[curr.candidate] || 0) + 1;
    return acc;
  }, {});

  const totalVotes = voters.length;

  if (status === "loading") return <p style={{ color: "white", textAlign: "center" }}>Checking permissions...</p>;

  // Security Check
  if (!session || session.user.role !== "admin") {
    return (
      <div style={{ textAlign: "center", marginTop: "100px", color: "red", fontFamily: 'sans-serif' }}>
        <h1>403 - Access Denied</h1>
        <p>Only the designated administrator can view this dashboard.</p>
        <button onClick={() => router.push("/")} style={styles.button}>Return Home</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Election Results Dashboard</h1>
      
      {/* --- Chart Section --- */}
      <div style={styles.card}>
        <h3>Live Vote Percentage</h3>
        {Object.entries(results).map(([name, count]) => {
          const percentage = totalVotes > 0 ? ((count / totalVotes) * 100).toFixed(1) : 0;
          return (
            <div key={name} style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span>{name}</span>
                <span>{count} Votes ({percentage}%)</span>
              </div>
              <div style={styles.chartTrack}>
                <div style={{ ...styles.chartBar, width: `${percentage}%` }}></div>
              </div>
            </div>
          );
        })}
        {totalVotes === 0 && <p style={{ color: "#888" }}>No votes cast yet.</p>}
      </div>

      {/* --- Data Table Section --- */}
      <div style={styles.card}>
        <h3>Detailed Voter Log</h3>
        <table style={styles.table}>
          <thead>
            <tr style={{ backgroundColor: "#333" }}>
              <th style={styles.th}>Linked ID</th>
              <th style={styles.th}>Selection</th>
            </tr>
          </thead>
          <tbody>
            {voters.map((v, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #333" }}>
                <td style={styles.td}>{v.voterId}</td>
                <td style={styles.td}>{v.candidate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button 
        onClick={() => { if(confirm("Clear all data?")) { localStorage.removeItem("voters list"); setVoters([]); } }}
        style={styles.resetBtn}
      >
        Reset Election Data
      </button>
    </div>
  );
}

const styles = {
  container: { padding: "40px", color: "white", backgroundColor: "#000", minHeight: "100vh", fontFamily: "sans-serif" },
  title: { borderBottom: "2px solid #28a745", paddingBottom: "10px", marginBottom: "30px" },
  card: { backgroundColor: "#111", padding: "20px", borderRadius: "10px", marginBottom: "30px", border: "1px solid #222" },
  chartTrack: { width: "100%", backgroundColor: "#333", borderRadius: "10px", height: "20px", overflow: "hidden" },
  chartBar: { height: "100%", backgroundColor: "#28a745", transition: "width 0.5s ease-in-out" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "10px" },
  th: { textAlign: "left", padding: "12px", color: "#28a745" },
  td: { padding: "12px" },
  button: { padding: "10px 20px", cursor: "pointer", marginTop: "20px" },
  resetBtn: { backgroundColor: "#dc3545", color: "white", border: "none", padding: "12px 24px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }
};