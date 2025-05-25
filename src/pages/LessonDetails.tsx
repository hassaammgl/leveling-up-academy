
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

// Sample lesson data - in a real app this would come from an API
const lessonData = {
  1: {
    id: 1,
    courseId: 1,
    title: "Introduction to HTML",
    content: `
# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup.

## What is HTML?

HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear or act a certain way.

## Basic HTML Structure

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>
\`\`\`

## Key HTML Elements

- **&lt;h1&gt; to &lt;h6&gt;**: Headings
- **&lt;p&gt;**: Paragraphs
- **&lt;a&gt;**: Links
- **&lt;img&gt;**: Images
- **&lt;div&gt;**: Divisions/containers
- **&lt;span&gt;**: Inline containers

## Practice Exercise

Try creating a simple HTML page with a heading, paragraph, and link!
    `,
    duration: "15 min",
    xpReward: 25,
    order: 1,
    totalLessons: 12,
    nextLessonId: 2,
    prevLessonId: null
  },
  2: {
    id: 2,
    courseId: 1,
    title: "HTML Structure & Semantics",
    content: `
# HTML Structure & Semantics

Understanding the proper structure and semantic meaning of HTML elements is crucial for creating accessible and well-organized web pages.

## Semantic HTML

Semantic HTML uses HTML tags that convey the meaning of the content they contain, not just how they look.

## Common Semantic Elements

- **&lt;header&gt;**: Represents introductory content
- **&lt;nav&gt;**: Navigation links
- **&lt;main&gt;**: Main content area
- **&lt;article&gt;**: Standalone content
- **&lt;section&gt;**: Thematic grouping of content
- **&lt;footer&gt;**: Footer information

## Example Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML</title>
</head>
<body>
    <header>
        <h1>Site Title</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>Article Title</h2>
            <p>Article content...</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>
\`\`\`
    `,
    duration: "20 min",
    xpReward: 30,
    order: 2,
    totalLessons: 12,
    nextLessonId: 3,
    prevLessonId: 1
  }
};

const LessonDetails = () => {
  const { courseId, lessonId } = useParams();
  const lesson = lessonData[parseInt(lessonId || '1') as keyof typeof lessonData];
  const [completed, setCompleted] = useState(false);

  if (!lesson) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
            <Link to={`/courses/${courseId}`}>
              <Button>Back to Course</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleCompleteLesson = () => {
    setCompleted(true);
    toast.success(`Lesson completed! Earned ${lesson.xpReward} XP`, {
      position: "top-center",
    });
  };

  const progress = (lesson.order / lesson.totalLessons) * 100;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Navigation Header */}
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container py-4">
            <div className="flex items-center justify-between">
              <Link 
                to={`/courses/${courseId}`} 
                className="inline-flex items-center gap-2 text-solo-blue hover:text-solo-purple transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Course
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Lesson {lesson.order} of {lesson.totalLessons}
                </div>
                <div className="w-32">
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="container py-8">
          <div className="max-w-4xl mx-auto">
            {/* Lesson Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-solo-blue" />
                <Badge variant="outline">Lesson {lesson.order}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {lesson.duration}
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
              
              <div className="flex items-center gap-4">
                <Badge className="bg-solo-blue/10 text-solo-blue">
                  {lesson.xpReward} XP
                </Badge>
                {completed && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                )}
              </div>
            </div>

            {/* Lesson Content */}
            <Card className="neo-glass mb-8">
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: lesson.content.replace(/\n/g, '<br>').replace(/```html/g, '<pre><code class="language-html">').replace(/```/g, '</code></pre>') 
                  }}
                />
              </CardContent>
            </Card>

            {/* Lesson Actions */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {lesson.prevLessonId && (
                  <Button variant="outline" asChild>
                    <Link to={`/courses/${courseId}/lessons/${lesson.prevLessonId}`}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous Lesson
                    </Link>
                  </Button>
                )}
              </div>
              
              <div className="flex gap-2">
                {!completed && (
                  <Button 
                    onClick={handleCompleteLesson}
                    className="bg-gradient-to-r from-solo-blue to-solo-purple hover:opacity-90"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Complete Lesson
                  </Button>
                )}
                
                {lesson.nextLessonId && (
                  <Button variant={completed ? "default" : "outline"} asChild>
                    <Link to={`/courses/${courseId}/lessons/${lesson.nextLessonId}`}>
                      Next Lesson
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LessonDetails;
