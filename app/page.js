"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import VotingPortal from "./components/votingportal"; 

export default function MainDispatcher() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If user is definitely not logged in, go to home
    if (status === "unauthenticated") {
      router.push("/home");
    }
  }, [status, router]);

  // If successfully logged in, show the portal
  if (status === "authenticated") {
    return <VotingPortal session={session} />;
  }

  // Show this while checking status
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <h2>Loading Portal...</h2>
      <p>Verifying your session...</p>
      <button 
        onClick={() => router.push("/home")}
        style={{ marginTop: '20px', padding: '10px', cursor: 'pointer' }}
      >
        Click here if stuck
      </button>
    </div>
  );
}