
import React, { useState, useEffect } from 'react';
import { toast } from "sonner";
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { HeroSection } from '@/components/home/hero-section';
import { CoursesSection } from '@/components/home/courses-section';
import { QuestsSection } from '@/components/home/quests-section';
import { LeaderboardSection } from '@/components/home/leaderboard-section';
import { GamificationSection } from '@/components/home/gamification-section';
import { NotificationPanel } from '@/components/home/notification-panel';

const Index = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show the notification after a brief delay
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    toast.success("Welcome to Leveling Up Academy! Your journey begins now.", {
      position: "top-center",
      duration: 4000,
    });
    setShowNotification(false);
  };

  const handleClose = () => {
    toast.info("You can always start your journey later.", {
      position: "top-center",
    });
    setShowNotification(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <CoursesSection />
        <GamificationSection />
        <QuestsSection />
        <LeaderboardSection />
      </main>
      
      <Footer />
      
      <NotificationPanel
        message="You have acquired the qualifications to be a Player. Will you accept?"
        isOpen={showNotification}
        onAccept={handleAccept}
        onClose={handleClose}
      />
    </div>
  );
};

export default Index;
