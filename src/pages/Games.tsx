
import React, { useState } from 'react';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useGamesStore } from '@/store/useGamesStore';
import { Clock, Filter, Search } from 'lucide-react';
import { toast } from 'sonner';

const Games = () => {
  const { availableGames, setCurrentGame } = useGamesStore();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = availableGames.filter(game => {
    const matchesFilter = filter === 'all' || game.difficulty === filter;
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handlePlayGame = (game: any) => {
    setCurrentGame(game);
    toast.success(`Starting ${game.name}! Get ready to play.`, {
      position: "top-center",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          {/* Header Section */}
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-4xl font-bold text-gradient">Games Collection</h1>
            <p className="text-muted-foreground">Take a break and challenge yourself with these fun programming games.</p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex items-center gap-2 flex-1">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-solo-purple focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-solo-purple focus:border-transparent"
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <Card key={game.id} className="neo-glass hover-scale group">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{game.icon}</div>
                  <CardTitle className="text-xl">{game.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    {game.description}
                  </p>
                  
                  <div className="flex justify-center">
                    <Badge 
                      variant="outline" 
                      style={{ borderColor: game.color, color: game.color }}
                      className="font-medium"
                    >
                      {game.difficulty}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{game.estimatedTime}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-solo-blue to-solo-purple hover:opacity-90 transition-opacity"
                    onClick={() => handlePlayGame(game)}
                  >
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2">No games found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Games;
