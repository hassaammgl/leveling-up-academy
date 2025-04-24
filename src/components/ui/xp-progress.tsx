
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface XpProgressProps {
  currentXP: number;
  maxXP: number;
  level: number;
  className?: string;
}

export function XpProgress({ currentXP, maxXP, level, className }: XpProgressProps) {
  const xpPercentage = (currentXP / maxXP) * 100;
  
  return (
    <div className={cn("flex items-center gap-3 min-w-[180px]", className)}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-solo-blue bg-solo-muted shadow-[0_0_10px_rgba(0,191,255,0.5)]">
          <span className="text-sm font-bold text-solo-blue">{level}</span>
        </div>
      </div>
      <div className="flex-1">
        <Progress 
          value={xpPercentage} 
          className="h-2 bg-solo-muted overflow-hidden" 
          indicatorClassName="bg-gradient-to-r from-solo-blue to-solo-purple shadow-[0_0_10px_rgba(0,191,255,0.5)]"
        />
        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
          <span>{currentXP} XP</span>
          <span>{maxXP} XP</span>
        </div>
      </div>
    </div>
  );
}
