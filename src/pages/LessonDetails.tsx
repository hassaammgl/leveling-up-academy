
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

// Enhanced lesson data with comprehensive content
const lessonData = {
  1: {
    id: 1,
    courseId: 1,
    title: "Introduction to HTML",
    content: `
# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup.

## What is HTML?

HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.

## Basic HTML Structure

Every HTML document follows a basic structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first paragraph.</p>
</body>
</html>
\`\`\`

## Key HTML Elements

### Headings
HTML provides six levels of headings:
- **&lt;h1&gt;**: Main heading (largest)
- **&lt;h2&gt;**: Secondary heading
- **&lt;h3&gt;**: Tertiary heading
- **&lt;h4&gt;**, **&lt;h5&gt;**, **&lt;h6&gt;**: Additional heading levels

### Text Elements
- **&lt;p&gt;**: Paragraphs of text
- **&lt;strong&gt;**: Important text (bold)
- **&lt;em&gt;**: Emphasized text (italic)
- **&lt;br&gt;**: Line break
- **&lt;hr&gt;**: Horizontal rule

### Links and Media
- **&lt;a href="URL"&gt;**: Links to other pages
- **&lt;img src="image.jpg" alt="description"&gt;**: Images

### Container Elements
- **&lt;div&gt;**: Generic container (block-level)
- **&lt;span&gt;**: Generic container (inline)

## Practice Exercise

Try creating a simple HTML page with:
1. A main heading
2. Two paragraphs of text
3. A link to your favorite website
4. Proper document structure

## Key Takeaways

- HTML uses tags to structure content
- Every tag should be properly closed
- Always include proper document structure
- Use semantic elements when possible
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

## What is Semantic HTML?

Semantic HTML uses HTML tags that convey the meaning of the content they contain, not just how they look. This helps:
- Screen readers and assistive technologies
- Search engines understand your content
- Developers maintain and understand code
- Improve SEO rankings

## Document Structure Elements

### &lt;header&gt;
Represents introductory content, typically containing:
- Site logo
- Navigation menu
- Page title

\`\`\`html
<header>
    <h1>My Website</h1>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>
\`\`\`

### &lt;nav&gt;
Contains navigation links:
\`\`\`html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
\`\`\`

### &lt;main&gt;
Contains the main content of the page:
\`\`\`html
<main>
    <h1>Welcome to Our Store</h1>
    <p>Find the best products here...</p>
</main>
\`\`\`

### &lt;article&gt;
Represents standalone, reusable content:
\`\`\`html
<article>
    <h2>Blog Post Title</h2>
    <p>Published on <time datetime="2024-01-15">January 15, 2024</time></p>
    <p>Article content goes here...</p>
</article>
\`\`\`

### &lt;section&gt;
Groups related content together:
\`\`\`html
<section>
    <h2>Our Services</h2>
    <p>We offer various services...</p>
</section>
\`\`\`

### &lt;aside&gt;
Contains sidebar content:
\`\`\`html
<aside>
    <h3>Related Articles</h3>
    <ul>
        <li><a href="/article1">Article 1</a></li>
        <li><a href="/article2">Article 2</a></li>
    </ul>
</aside>
\`\`\`

### &lt;footer&gt;
Contains footer information:
\`\`\`html
<footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>
\`\`\`

## Complete Semantic Structure Example

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>My Blog</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h2>Understanding Semantic HTML</h2>
                <p>Published by <strong>John Doe</strong> on 
                   <time datetime="2024-01-15">January 15, 2024</time>
                </p>
            </header>
            
            <section>
                <h3>What is Semantic HTML?</h3>
                <p>Semantic HTML provides meaning to web content...</p>
            </section>
            
            <section>
                <h3>Benefits of Semantic HTML</h3>
                <ul>
                    <li>Better accessibility</li>
                    <li>Improved SEO</li>
                    <li>Cleaner code</li>
                </ul>
            </section>
        </article>
        
        <aside>
            <h3>Related Posts</h3>
            <ul>
                <li><a href="/html-basics">HTML Basics</a></li>
                <li><a href="/css-intro">CSS Introduction</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 My Blog. All rights reserved.</p>
    </footer>
</body>
</html>
\`\`\`

## Best Practices

1. **Use headings in hierarchical order** (h1 → h2 → h3)
2. **One main element per page**
3. **Use semantic elements instead of div when possible**
4. **Include alt attributes for images**
5. **Use descriptive link text**

## Practice Exercise

Create a semantic HTML page for a restaurant website with:
1. Header with restaurant name and navigation
2. Main content with restaurant description
3. Section for menu highlights
4. Aside with contact information
5. Footer with copyright

## Key Takeaways

- Semantic HTML improves accessibility and SEO
- Structure your content logically
- Use the right element for the right purpose
- Think about meaning, not just appearance
    `,
    duration: "20 min",
    xpReward: 30,
    order: 2,
    totalLessons: 12,
    nextLessonId: 3,
    prevLessonId: 1
  },
  3: {
    id: 3,
    courseId: 1,
    title: "HTML Forms & Input Types",
    content: `
# HTML Forms & Input Types

Forms are essential for collecting user input on web pages. They allow users to submit data to web servers for processing.

## Basic Form Structure

Every HTML form starts with the &lt;form&gt; element:

\`\`\`html
<form action="/submit" method="POST">
    <!-- Form inputs go here -->
</form>
\`\`\`

### Form Attributes
- **action**: URL where form data is sent
- **method**: HTTP method (GET or POST)
- **enctype**: How form data is encoded

## Input Types

### Text Input
\`\`\`html
<label for="name">Name:</label>
<input type="text" id="name" name="name" required>
\`\`\`

### Email Input
\`\`\`html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
\`\`\`

### Password Input
\`\`\`html
<label for="password">Password:</label>
<input type="password" id="password" name="password" required>
\`\`\`

### Number Input
\`\`\`html
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="1" max="120">
\`\`\`

### Date Input
\`\`\`html
<label for="birthday">Birthday:</label>
<input type="date" id="birthday" name="birthday">
\`\`\`

### File Input
\`\`\`html
<label for="avatar">Profile Picture:</label>
<input type="file" id="avatar" name="avatar" accept="image/*">
\`\`\`

## Textarea for Long Text

\`\`\`html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50" placeholder="Enter your message..."></textarea>
\`\`\`

## Select Dropdown

\`\`\`html
<label for="country">Country:</label>
<select id="country" name="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
</select>
\`\`\`

## Radio Buttons

\`\`\`html
<fieldset>
    <legend>Gender:</legend>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    
    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Other</label>
</fieldset>
\`\`\`

## Checkboxes

\`\`\`html
<fieldset>
    <legend>Interests:</legend>
    <input type="checkbox" id="coding" name="interests" value="coding">
    <label for="coding">Coding</label>
    
    <input type="checkbox" id="design" name="interests" value="design">
    <label for="design">Design</label>
    
    <input type="checkbox" id="music" name="interests" value="music">
    <label for="music">Music</label>
</fieldset>
\`\`\`

## Form Validation

### HTML5 Validation Attributes
- **required**: Field must be filled
- **pattern**: Regular expression pattern
- **min/max**: For numbers and dates
- **minlength/maxlength**: For text length

\`\`\`html
<input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">
<input type="password" minlength="8" required>
<input type="number" min="18" max="65">
\`\`\`

## Complete Contact Form Example

\`\`\`html
<form action="/contact" method="POST">
    <fieldset>
        <legend>Contact Information</legend>
        
        <div>
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required>
        </div>
        
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone">
        </div>
        
        <div>
            <label for="subject">Subject:</label>
            <select id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
            </select>
        </div>
        
        <div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required 
                      placeholder="Please describe your inquiry..."></textarea>
        </div>
        
        <div>
            <input type="checkbox" id="newsletter" name="newsletter" value="yes">
            <label for="newsletter">Subscribe to our newsletter</label>
        </div>
        
        <div>
            <button type="submit">Send Message</button>
            <button type="reset">Clear Form</button>
        </div>
    </fieldset>
</form>
\`\`\`

## Accessibility Best Practices

1. **Always use labels** with form inputs
2. **Group related inputs** with fieldset and legend
3. **Provide clear instructions** and error messages
4. **Use appropriate input types** for better mobile experience
5. **Make forms keyboard navigable**

## Practice Exercise

Create a registration form with:
1. Personal information (name, email, birthday)
2. Account details (username, password, confirm password)
3. Preferences (interests checkboxes, country dropdown)
4. Terms and conditions checkbox
5. Submit and reset buttons

## Key Takeaways

- Use semantic form elements for better accessibility
- Choose appropriate input types for data validation
- Always include labels for form inputs
- Use fieldsets to group related form elements
- Implement proper form validation
    `,
    duration: "25 min",
    xpReward: 35,
    order: 3,
    totalLessons: 12,
    nextLessonId: 4,
    prevLessonId: 2
  },
  4: {
    id: 4,
    courseId: 1,
    title: "Introduction to CSS",
    content: `
# Introduction to CSS

CSS (Cascading Style Sheets) is the language used to style HTML documents. It controls the presentation, layout, and visual appearance of web pages.

## What is CSS?

CSS describes how HTML elements should be displayed on screen, in print, or in other media. It saves a lot of work by controlling the layout of multiple web pages all at once.

## CSS Syntax

CSS is made up of rules that consist of selectors and declaration blocks:

\`\`\`css
selector {
    property: value;
    property: value;
}
\`\`\`

Example:
\`\`\`css
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}
\`\`\`

## Ways to Add CSS

### 1. Inline CSS
Directly in HTML elements:
\`\`\`html
<h1 style="color: blue; font-size: 24px;">Hello World</h1>
\`\`\`

### 2. Internal CSS
In the HTML head section:
\`\`\`html
<head>
    <style>
        h1 {
            color: blue;
            font-size: 24px;
        }
    </style>
</head>
\`\`\`

### 3. External CSS (Recommended)
In a separate CSS file:
\`\`\`html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
\`\`\`

## Basic CSS Properties

### Colors
\`\`\`css
/* Color names */
color: red;
background-color: blue;

/* Hex values */
color: #ff0000;
background-color: #0000ff;

/* RGB values */
color: rgb(255, 0, 0);
background-color: rgb(0, 0, 255);

/* HSL values */
color: hsl(0, 100%, 50%);
\`\`\`

### Typography
\`\`\`css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;
text-align: center;
text-decoration: underline;
line-height: 1.5;
\`\`\`

### Spacing
\`\`\`css
/* Margins (outside spacing) */
margin: 10px;
margin-top: 10px;
margin-right: 15px;
margin-bottom: 10px;
margin-left: 15px;

/* Padding (inside spacing) */
padding: 20px;
padding: 10px 20px; /* top/bottom left/right */
padding: 10px 15px 20px 25px; /* top right bottom left */
\`\`\`

### Borders
\`\`\`css
border: 1px solid black;
border-width: 2px;
border-style: dashed;
border-color: red;
border-radius: 5px;
\`\`\`

### Dimensions
\`\`\`css
width: 300px;
height: 200px;
max-width: 100%;
min-height: 400px;
\`\`\`

## CSS Selectors

### Element Selector
\`\`\`css
p {
    color: black;
}
\`\`\`

### Class Selector
\`\`\`css
.highlight {
    background-color: yellow;
}
\`\`\`
\`\`\`html
<p class="highlight">This text is highlighted</p>
\`\`\`

### ID Selector
\`\`\`css
#header {
    background-color: navy;
    color: white;
}
\`\`\`
\`\`\`html
<div id="header">This is the header</div>
\`\`\`

### Descendant Selector
\`\`\`css
.container p {
    margin-bottom: 15px;
}
\`\`\`

### Pseudo-classes
\`\`\`css
a:hover {
    color: red;
}

button:active {
    background-color: darkblue;
}

input:focus {
    border-color: blue;
}
\`\`\`

## Complete Example

HTML:
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Introduction</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header id="main-header">
        <h1>Welcome to CSS</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="intro">
            <h2>Getting Started with CSS</h2>
            <p class="highlight">CSS makes web pages beautiful and interactive.</p>
            <p>Learn to style your HTML content effectively.</p>
        </section>
    </main>
</body>
</html>
\`\`\`

CSS:
\`\`\`css
/* Reset default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

#main-header {
    background-color: #2c3e50;
    color: white;
    padding: 20px 0;
    text-align: center;
}

#main-header h1 {
    margin-bottom: 10px;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 3px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #34495e;
}

.intro {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
}

.intro h2 {
    color: #2c3e50;
    margin-bottom: 20px;
}

.intro p {
    margin-bottom: 15px;
    font-size: 16px;
}

.highlight {
    background-color: #f39c12;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
}
\`\`\`

## Practice Exercise

Style a simple blog post with:
1. Header with site title and navigation
2. Main content area with article
3. Sidebar with related links
4. Footer with copyright information

Apply:
- Typography styles
- Colors and backgrounds
- Spacing (margins and padding)
- Hover effects on links

## Key Takeaways

- CSS controls the visual presentation of HTML
- Use external stylesheets for better organization
- Selectors target specific elements to style
- Cascade and specificity determine which styles apply
- Always consider responsive design from the start
    `,
    duration: "18 min",
    xpReward: 30,
    order: 4,
    totalLessons: 12,
    nextLessonId: 5,
    prevLessonId: 3
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

  // Enhanced content rendering with proper code highlighting
  const renderContent = (content: string) => {
    return content
      .replace(/\n/g, '<br>')
      .replace(/```html([\s\S]*?)```/g, '<div class="code-block html"><pre><code>$1</code></pre></div>')
      .replace(/```css([\s\S]*?)```/g, '<div class="code-block css"><pre><code>$1</code></pre></div>')
      .replace(/```javascript([\s\S]*?)```/g, '<div class="code-block js"><pre><code>$1</code></pre></div>')
      .replace(/```([\s\S]*?)```/g, '<div class="code-block"><pre><code>$1</code></pre></div>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/&lt;/g, '<span class="tag">&lt;</span>')
      .replace(/&gt;/g, '<span class="tag">&gt;</span>');
  };

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
                  className="prose prose-lg max-w-none lesson-content"
                  dangerouslySetInnerHTML={{ 
                    __html: renderContent(lesson.content)
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
      
      {/* Embedded CSS for code highlighting */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .lesson-content .code-block {
            background: #1e1e1e;
            border-radius: 8px;
            margin: 16px 0;
            overflow-x: auto;
          }
          .lesson-content .code-block pre {
            margin: 0;
            padding: 16px;
            color: #d4d4d4;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            line-height: 1.5;
          }
          .lesson-content .code-block.html pre {
            border-left: 4px solid #e34c26;
          }
          .lesson-content .code-block.css pre {
            border-left: 4px solid #1572b6;
          }
          .lesson-content .code-block.js pre {
            border-left: 4px solid #f7df1e;
          }
          .lesson-content .tag {
            color: #569cd6;
          }
        `
      }} />
    </div>
  );
};

export default LessonDetails;
