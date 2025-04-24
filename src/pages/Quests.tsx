
import React from 'react';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { QuestsSection } from '@/components/home/quests-section';

const Quests = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gradient">Daily Quests</h1>
            <p className="text-muted-foreground">Complete challenges to earn XP and unique badges.</p>
          </div>
        </div>
        <QuestsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Quests;
