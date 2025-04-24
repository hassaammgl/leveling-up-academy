
import React from 'react';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { CoursesSection } from '@/components/home/courses-section';

const Courses = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gradient">Available Courses</h1>
            <p className="text-muted-foreground">Level up your skills with our comprehensive courses.</p>
          </div>
        </div>
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
