import { Progress } from "@/components/ui/progress";

interface SpeedTestProgressProps {
  progress: number;
  testPhase: "download" | "upload" | "complete";
}

export const SpeedTestProgress = ({ progress, testPhase }: SpeedTestProgressProps) => {
  return (
    <div className="space-y-6">
      <div className="animate-speed-pulse">
        <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
          {progress.toFixed(0)}%
        </div>
        <div className="text-foreground/70 text-sm md:text-base">
          Testing {testPhase === "download" ? "download" : "upload"} speed...
        </div>
      </div>
      <Progress 
        value={progress} 
        className="w-full h-2 bg-secondary/50"
      />
    </div>
  );
};