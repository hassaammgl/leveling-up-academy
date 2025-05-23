
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGamesStore } from '@/store/useGamesStore';
import { Clock, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export function GamesModal() {
  const { showGamesModal, setShowGamesModal, setCurrentGame, getRandomGames } = useGamesStore();
  const randomGames = getRandomGames();

  const handlePlayGame = (game: any) => {
    setCurrentGame(game);
    setShowGamesModal(false);
    toast.success(`Starting ${game.name}! Enjoy your refreshment break.`, {
      position: "top-center",
    });
  };

  const handleSkip = () => {
    setShowGamesModal(false);
    toast.info("You can play games anytime from the dashboard!", {
      position: "top-center",
    });
  };

  return (
    <Dialog open={showGamesModal} onOpenChange={setShowGamesModal}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-solo-purple" />
            <DialogTitle className="text-2xl text-gradient">Quest Complete!</DialogTitle>
          </div>
          <p className="text-muted-foreground">
            Great job! Take a refreshment break with one of these fun games.
          </p>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {randomGames.map((game) => (
            <Card key={game.id} className="neo-glass hover-scale cursor-pointer group" onClick={() => handlePlayGame(game)}>
              <CardHeader className="text-center pb-2">
                <div className="text-3xl mb-2">{game.icon}</div>
                <CardTitle className="text-lg">{game.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">{game.description}</p>
                
                <div className="flex justify-center gap-2">
                  <Badge variant="outline" style={{ borderColor: game.color, color: game.color }}>
                    {game.difficulty}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{game.estimatedTime}</span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-solo-blue to-solo-purple hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayGame(game);
                  }}
                >
                  Play Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <Button variant="outline" onClick={handleSkip}>
            Skip for now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
