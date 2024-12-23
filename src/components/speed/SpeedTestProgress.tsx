import { Progress } from "@/components/ui/progress";

interface SpeedTestProgressProps {
  progress: number;
  testPhase: "download" | "upload" | "complete";
}

export const SpeedTestProgress = ({ progress, testPhase }: SpeedTestProgressProps) => {
  return (
    <div className="space-y-6">
      <div className="animate-speed-pulse">
        <div className="text-6xl font-bold text-primary mb-2">
          {progress.toFixed(0)}%
        </div>
        <div className="text-foreground/80">
          Testing {testPhase === "download" ? "download" : "upload"} speed...
        </div>
      </div>
      <Progress value={progress} className="w-64 mx-auto" />
    </div>
  );
};