
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, RotateCcw, CheckCircle, X } from 'lucide-react';
import { toast } from 'sonner';

interface CodeEditorProps {
  language?: string;
  initialCode?: string;
  testCases?: Array<{
    input: string;
    expectedOutput: string;
    description: string;
  }>;
  onRunCode?: (code: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  language = 'javascript',
  initialCode = '// Write your code here\nfunction solution() {\n  return "Hello World!";\n}',
  testCases = [],
  onRunCode
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<Array<{ passed: boolean; result: string }>>([]);

  const handleRunCode = async () => {
    setIsRunning(true);
    try {
      // Simulate code execution
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockOutput = `> Running code...\n> Code executed successfully!\n> Output: Hello World!`;
      setOutput(mockOutput);
      
      // Simulate test results
      const results = testCases.map((testCase, index) => ({
        passed: Math.random() > 0.3, // 70% pass rate for demo
        result: `Test ${index + 1}: ${testCase.description}`
      }));
      setTestResults(results);
      
      const passedTests = results.filter(r => r.passed).length;
      toast.success(`Code executed! ${passedTests}/${testCases.length} tests passed`);
      
      if (onRunCode) {
        onRunCode(code);
      }
    } catch (error) {
      setOutput('Error: Failed to execute code');
      toast.error('Failed to execute code');
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
    setTestResults([]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Code Editor */}
      <Card className="neo-glass">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              Code Editor
              <Badge variant="outline">{language}</Badge>
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button 
                size="sm" 
                onClick={handleRunCode}
                disabled={isRunning}
                className="bg-gradient-to-r from-solo-blue to-solo-purple hover:opacity-90"
              >
                <Play className="h-4 w-4 mr-2" />
                {isRunning ? 'Running...' : 'Run Code'}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <Editor
              height="400px"
              language={language}
              value={code}
              onChange={(value) => setCode(value || '')}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Output and Tests */}
      <div className="space-y-6">
        {/* Output Console */}
        <Card className="neo-glass">
          <CardHeader>
            <CardTitle>Output Console</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm min-h-[200px] overflow-auto">
              {output || 'Click "Run Code" to see output here...'}
            </div>
          </CardContent>
        </Card>

        {/* Test Results */}
        {testCases.length > 0 && (
          <Card className="neo-glass">
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {testCases.map((testCase, index) => {
                  const result = testResults[index];
                  return (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{testCase.description}</p>
                        <p className="text-sm text-muted-foreground">
                          Input: {testCase.input} | Expected: {testCase.expectedOutput}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {result ? (
                          result.passed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                        )}
                        <Badge variant={result?.passed ? "default" : result ? "destructive" : "outline"}>
                          {result ? (result.passed ? "Passed" : "Failed") : "Pending"}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
