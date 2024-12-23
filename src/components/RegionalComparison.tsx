import { Server } from "./ServerSelection";
import { Progress } from "@/components/ui/progress";

interface RegionalComparisonProps {
  selectedServer: Server;
  currentSpeed: number | null;
}

const RegionalComparison = ({ selectedServer, currentSpeed }: RegionalComparisonProps) => {
  if (!currentSpeed) return null;

  const comparison = (currentSpeed / selectedServer.averageSpeed) * 100;
  const comparisonText = comparison > 100 
    ? `${(comparison - 100).toFixed(1)}% faster than average`
    : `${(100 - comparison).toFixed(1)}% slower than average`;

  return (
    <div className="space-y-4 bg-secondary/30 backdrop-blur-sm p-6 rounded-xl shadow-sm transition-all hover:bg-secondary/40">
      <h3 className="text-sm font-medium text-foreground/90">Regional Comparison</h3>
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-foreground/70">Your Speed</span>
          <span className="font-medium text-primary">{currentSpeed.toFixed(1)} Mbps</span>
        </div>
        <Progress value={comparison} className="h-2" />
        <div className="flex justify-between text-sm">
          <span className="text-foreground/70">Regional Average</span>
          <span className="font-medium">{selectedServer.averageSpeed} Mbps</span>
        </div>
        <p className="text-sm text-foreground/60 mt-2">
          {comparisonText}
        </p>
      </div>
    </div>
  );
};

export default RegionalComparison;