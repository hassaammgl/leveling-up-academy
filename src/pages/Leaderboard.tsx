
import React from 'react';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { LeaderboardSection } from '@/components/home/leaderboard-section';

const Leaderboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gradient">Global Rankings</h1>
            <p className="text-muted-foreground">See where you stand among fellow hunters.</p>
          </div>
        </div>
        <LeaderboardSection />
      </main>
      <Footer />
    </div>
  );
};

export default Leaderboard;
