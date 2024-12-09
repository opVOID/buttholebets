// src/pages/index.tsx
import { GambaButton } from "@/components/ui/GambaPlayButton";
import { GameGrid } from "@/components/game/GameGrid";
import { PLATFORM_REFERRAL_FEE } from "@/constants";
import RecentPlays from "@/components/game/RecentPlays/RecentPlays";
import { toast } from "sonner";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
  const walletModal = useWalletModal();
  const wallet = useWallet();

  const copyInvite = () => {
    if (!wallet.publicKey) {
      return walletModal.setVisible(true);
    }
    const referralLink = `${location.host}?code=${wallet.publicKey.toString()}`;
    navigator.clipboard.writeText(referralLink);
    toast.success(
      `Copied! Share your link to earn a ${
        PLATFORM_REFERRAL_FEE * 100
      }% fee when players use this platform`,
    );
  };
  return (
    <>
      <div 
        className="fixed inset-0 w-full h-full" 
        style={{ 
          backgroundImage: "url(/American-BG.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundColor: '#0a192f',
          transform: 'translateY(-100px)'
        }} 
      />
      <div className="relative z-10 min-h-screen flex flex-col gap-5 pt-48 pb-10 transition-all duration-250 ease-in-out">
        <div className="absolute inset-0 flex items-center justify-center z-0">
        </div>
        <div className="max-w-[600px] pl-8 bg-[#15152e]/80 rounded-lg p-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md mb-4">Welcome to Butthole Bets</h1>
          <p className="my-2 text-white drop-shadow">The gambleFi protocol with end-to-end tools for on-chain degeneracy on Solana.</p>
          <p className="my-2 text-sm text-white drop-shadow">Share your link to earn a {PLATFORM_REFERRAL_FEE * 100}% fee on each play when players use this platform using your code.</p>
          <div className="flex gap-2">
            <button onClick={copyInvite} className="bg-[#8851ff] hover:bg-[#9564ff] rounded-lg p-2 text-xs text-white">Copy Link</button>
            <button onClick={() => window.open("https://explorer.gamba.so")} className="bg-[#8851ff] hover:bg-[#9564ff] rounded-lg p-2 text-xs text-white">
              🌐 Explorer
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mt-16 text-white drop-shadow">
       .
       .
       .
        </h2>


 

<GameGrid />


        <h2 className="text-2xl font-bold text-center text-white drop-shadow">Recent Plays</h2>
        <RecentPlays />
      </div>
    </>
  );
}
