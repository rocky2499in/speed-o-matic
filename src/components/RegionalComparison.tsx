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
    <div className="space-y-4 bg-secondary/50 p-6 rounded-lg">
      <h3 className="text-sm font-medium">Regional Comparison</h3>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Your Speed</span>
          <span>{currentSpeed.toFixed(1)} Mbps</span>
        </div>
        <Progress value={comparison} className="h-2" />
        <div className="flex justify-between text-sm">
          <span>Regional Average</span>
          <span>{selectedServer.averageSpeed} Mbps</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {comparisonText}
        </p>
      </div>
    </div>
  );
};

export default RegionalComparison;