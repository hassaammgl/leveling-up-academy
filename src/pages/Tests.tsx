
import React, { useState } from 'react';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Trophy, Clock, Star, CheckCircle, X, Play } from 'lucide-react';
import { CodeEditor } from '@/components/course/code-editor';
import { toast } from 'sonner';

const testCategories = [
  {
    id: 'html',
    name: 'HTML',
    description: 'Test your HTML knowledge',
    color: 'bg-orange-500',
    tests: [
      {
        id: 1,
        title: "Basic HTML Structure",
        description: "Create a semantic HTML page with proper structure",
        difficulty: "Easy",
        timeLimit: "15 min",
        xpReward: 50,
        language: "html",
        initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <!-- Create a semantic structure with header, main, and footer -->
    
</body>
</html>`,
        testCases: [
          {
            input: "Semantic structure",
            expectedOutput: "header, main, footer elements",
            description: "Must include semantic HTML5 elements"
          },
          {
            input: "Navigation",
            expectedOutput: "nav element with links",
            description: "Should have navigation menu"
          }
        ]
      },
      {
        id: 2,
        title: "HTML Forms",
        description: "Build a contact form with proper validation",
        difficulty: "Medium",
        timeLimit: "25 min",
        xpReward: 75,
        language: "html",
        initialCode: `<!-- Create a contact form with name, email, message, and submit button -->
<form>
    <!-- Add your form elements here -->
    
</form>`,
        testCases: [
          {
            input: "Form elements",
            expectedOutput: "input, textarea, button",
            description: "Must include proper form controls"
          },
          {
            input: "Validation",
            expectedOutput: "required attributes",
            description: "Should have form validation"
          }
        ]
      }
    ]
  },
  {
    id: 'css',
    name: 'CSS',
    description: 'Test your CSS styling skills',
    color: 'bg-blue-500',
    tests: [
      {
        id: 3,
        title: "Flexbox Layout",
        description: "Create a responsive card layout using Flexbox",
        difficulty: "Medium",
        timeLimit: "20 min",
        xpReward: 75,
        language: "css",
        initialCode: `.container {
    /* Add flexbox properties */
}

.card {
    width: 300px;
    padding: 20px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
}

/* Make it responsive */
@media (max-width: 768px) {
    /* Add responsive styles */
}`,
        testCases: [
          {
            input: "Flex container",
            expectedOutput: "display: flex, flex-wrap",
            description: "Should use flexbox properties"
          },
          {
            input: "Responsive",
            expectedOutput: "Mobile-friendly layout",
            description: "Should adapt to screen size"
          }
        ]
      },
      {
        id: 4,
        title: "CSS Grid Layout",
        description: "Build a complex layout using CSS Grid",
        difficulty: "Hard",
        timeLimit: "30 min",
        xpReward: 100,
        language: "css",
        initialCode: `.grid-container {
    /* Create a grid layout */
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Define the grid template */`,
        testCases: [
          {
            input: "Grid template",
            expectedOutput: "Proper grid areas",
            description: "Should define grid template areas"
          },
          {
            input: "Layout",
            expectedOutput: "Header, sidebar, main, footer",
            description: "Should create complex layout"
          }
        ]
      }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Test your JavaScript programming skills',
    color: 'bg-yellow-500',
    tests: [
      {
        id: 5,
        title: "Array Methods",
        description: "Use array methods to manipulate data",
        difficulty: "Medium",
        timeLimit: "20 min",
        xpReward: 75,
        language: "javascript",
        initialCode: `// Given an array of numbers, write functions to:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Filter even numbers
function getEvenNumbers(arr) {
    // Your code here
}

// 2. Double all numbers
function doubleNumbers(arr) {
    // Your code here
}

// 3. Sum all numbers
function sumNumbers(arr) {
    // Your code here
}

// Test your functions
console.log(getEvenNumbers(numbers));
console.log(doubleNumbers(numbers));
console.log(sumNumbers(numbers));`,
        testCases: [
          {
            input: "[1,2,3,4,5,6,7,8,9,10]",
            expectedOutput: "[2,4,6,8,10]",
            description: "getEvenNumbers should filter even numbers"
          },
          {
            input: "[1,2,3,4,5]",
            expectedOutput: "[2,4,6,8,10]",
            description: "doubleNumbers should double each number"
          },
          {
            input: "[1,2,3,4,5]",
            expectedOutput: "15",
            description: "sumNumbers should sum all numbers"
          }
        ]
      },
      {
        id: 6,
        title: "DOM Manipulation",
        description: "Manipulate DOM elements with JavaScript",
        difficulty: "Hard",
        timeLimit: "30 min",
        xpReward: 100,
        language: "javascript",
        initialCode: `// Create a todo list with add/remove functionality
function createTodoApp() {
    // 1. Create the HTML structure
    const container = document.createElement('div');
    
    // 2. Add input and button
    
    // 3. Add todo list container
    
    // 4. Implement add todo function
    
    // 5. Implement remove todo function
    
    return container;
}

// Test your function
const app = createTodoApp();
document.body.appendChild(app);`,
        testCases: [
          {
            input: "DOM structure",
            expectedOutput: "input, button, list elements",
            description: "Should create proper DOM structure"
          },
          {
            input: "Add functionality",
            expectedOutput: "New todos appear in list",
            description: "Should add new todos"
          },
          {
            input: "Remove functionality",
            expectedOutput: "Todos can be deleted",
            description: "Should remove todos"
          }
        ]
      }
    ]
  }
];

const Tests = () => {
  const [activeCategory, setActiveCategory] = useState(testCategories[0]);
  const [activeTest, setActiveTest] = useState(testCategories[0].tests[0]);
  const [completedTests, setCompletedTests] = useState<number[]>([]);

  const handleCompleteTest = (testId: number, xpReward: number) => {
    if (!completedTests.includes(testId)) {
      setCompletedTests([...completedTests, testId]);
      toast.success(`Test completed! Earned ${xpReward} XP`, {
        position: "top-center",
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const categoryProgress = (categoryId: string) => {
    const category = testCategories.find(c => c.id === categoryId);
    if (!category) return 0;
    const completed = category.tests.filter(test => completedTests.includes(test.id)).length;
    return (completed / category.tests.length) * 100;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-solo-blue/10 to-solo-purple/10 py-12">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Coding Tests & Challenges</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Test your skills with hands-on coding challenges
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-solo-blue">
                    {testCategories.reduce((acc, cat) => acc + cat.tests.length, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Tests</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-solo-purple">{completedTests.length}</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">
                    {completedTests.reduce((acc, testId) => {
                      const test = testCategories.flatMap(c => c.tests).find(t => t.id === testId);
                      return acc + (test?.xpReward || 0);
                    }, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">XP Earned</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tests Content */}
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-3">
                {testCategories.map((category) => (
                  <Card 
                    key={category.id}
                    className={`cursor-pointer transition-colors neo-glass ${
                      activeCategory.id === category.id ? 'border-solo-blue' : ''
                    }`}
                    onClick={() => {
                      setActiveCategory(category);
                      setActiveTest(category.tests[0]);
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <h4 className="font-medium">{category.name}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{Math.round(categoryProgress(category.id))}%</span>
                        </div>
                        <Progress value={categoryProgress(category.id)} className="h-1" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tests List and Editor */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Tests List */}
                <div className="xl:col-span-1">
                  <h3 className="text-lg font-semibold mb-4">{activeCategory.name} Tests</h3>
                  <div className="space-y-3">
                    {activeCategory.tests.map((test) => (
                      <Card 
                        key={test.id}
                        className={`cursor-pointer transition-colors neo-glass ${
                          activeTest.id === test.id ? 'border-solo-blue' : ''
                        }`}
                        onClick={() => setActiveTest(test)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge className={getDifficultyColor(test.difficulty)}>
                              {test.difficulty}
                            </Badge>
                            {completedTests.includes(test.id) && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                          <h4 className="font-medium mb-1">{test.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{test.description}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {test.timeLimit}
                            </div>
                            <div className="flex items-center gap-1">
                              <Trophy className="h-3 w-3" />
                              {test.xpReward} XP
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Active Test */}
                <div className="xl:col-span-2">
                  <Card className="neo-glass">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>{activeTest.title}</CardTitle>
                          <p className="text-muted-foreground mt-1">{activeTest.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getDifficultyColor(activeTest.difficulty)}>
                            {activeTest.difficulty}
                          </Badge>
                          <Badge variant="outline">
                            <Trophy className="h-3 w-3 mr-1" />
                            {activeTest.xpReward} XP
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CodeEditor
                        language={activeTest.language}
                        initialCode={activeTest.initialCode}
                        testCases={activeTest.testCases}
                        onRunCode={() => handleCompleteTest(activeTest.id, activeTest.xpReward)}
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tests;
