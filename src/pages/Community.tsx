
import React from 'react';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageCircle, Heart } from 'lucide-react';

const Community = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-4xl font-bold text-gradient">Hunter Community</h1>
            <p className="text-muted-foreground">Connect with fellow developers on their journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="neo-glass hover-scale">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-4">
                  <Users className="w-12 h-12 text-solo-blue" />
                  <h3 className="text-xl font-semibold">Discussion Forums</h3>
                  <p className="text-center text-muted-foreground">
                    Join conversations about development, share experiences, and learn from others.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="neo-glass hover-scale">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-4">
                  <MessageCircle className="w-12 h-12 text-solo-purple" />
                  <h3 className="text-xl font-semibold">Study Groups</h3>
                  <p className="text-center text-muted-foreground">
                    Form or join study groups to tackle challenges and learn together.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="neo-glass hover-scale">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-4">
                  <Heart className="w-12 h-12 text-solo-blue" />
                  <h3 className="text-xl font-semibold">Help Center</h3>
                  <p className="text-center text-muted-foreground">
                    Get support from the community and contribute to helping others.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
