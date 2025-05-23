
import React from 'react';
import { CodeEditor } from './code-editor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Trophy, Clock } from 'lucide-react';

const testChallenges = [
  {
    id: 1,
    title: "HTML Structure Challenge",
    description: "Create a basic HTML page with proper semantic structure",
    difficulty: "Easy",
    timeLimit: "15 min",
    xpReward: 50,
    language: "html",
    initialCode: `<!-- Create a semantic HTML page structure -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <!-- Add your code here -->
    
</body>
</html>`,
    testCases: [
      {
        input: "Page structure",
        expectedOutput: "Header, main, footer elements",
        description: "Must include semantic elements"
      },
      {
        input: "Accessibility",
        expectedOutput: "Proper heading hierarchy",
        description: "Should have h1, h2 structure"
      }
    ]
  },
  {
    id: 2,
    title: "CSS Flexbox Layout",
    description: "Create a responsive card layout using CSS Flexbox",
    difficulty: "Medium",
    timeLimit: "20 min",
    xpReward: 75,
    language: "css",
    initialCode: `/* Create a responsive card layout */
.card-container {
    /* Add your flexbox styles here */
}

.card {
    /* Style individual cards */
    width: 300px;
    padding: 20px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
}`,
    testCases: [
      {
        input: "Flex container",
        expectedOutput: "Cards wrap on small screens",
        description: "Should use flex-wrap"
      },
      {
        input: "Responsive design",
        expectedOutput: "Cards stack vertically on mobile",
        description: "Should adapt to screen size"
      }
    ]
  },
  {
    id: 3,
    title: "JavaScript Function",
    description: "Write a function to validate email addresses",
    difficulty: "Hard",
    timeLimit: "25 min",
    xpReward: 100,
    language: "javascript",
    initialCode: `// Write a function to validate email addresses
function validateEmail(email) {
    // Your code here
    
}

// Test your function
console.log(validateEmail("test@example.com")); // should return true
console.log(validateEmail("invalid-email")); // should return false`,
    testCases: [
      {
        input: "test@example.com",
        expectedOutput: "true",
        description: "Valid email should return true"
      },
      {
        input: "invalid-email",
        expectedOutput: "false",
        description: "Invalid email should return false"
      },
      {
        input: "user@domain.co.uk",
        expectedOutput: "true",
        description: "Should handle multiple domains"
      }
    ]
  }
];

export const TestsSection = () => {
  const [activeChallenge, setActiveChallenge] = React.useState(testChallenges[0]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Challenge Selection */}
      <Card className="neo-glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Coding Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  activeChallenge.id === challenge.id
                    ? 'border-solo-blue bg-solo-blue/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveChallenge(challenge)}
              >
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getDifficultyColor(challenge.difficulty)}>
                    {challenge.difficulty}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Trophy className="h-3 w-3" />
                    {challenge.xpReward} XP
                  </div>
                </div>
                <h3 className="font-medium mb-1">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {challenge.timeLimit}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Challenge */}
      <Card className="neo-glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{activeChallenge.title}</CardTitle>
              <p className="text-muted-foreground mt-1">{activeChallenge.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={getDifficultyColor(activeChallenge.difficulty)}>
                {activeChallenge.difficulty}
              </Badge>
              <Badge variant="outline">
                <Trophy className="h-3 w-3 mr-1" />
                {activeChallenge.xpReward} XP
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CodeEditor
            language={activeChallenge.language}
            initialCode={activeChallenge.initialCode}
            testCases={activeChallenge.testCases}
          />
        </CardContent>
      </Card>
    </div>
  );
};
