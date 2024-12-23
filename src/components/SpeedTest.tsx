import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const SpeedTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [speed, setSpeed] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const simulateSpeedTest = () => {
    setIsLoading(true);
    setSpeed(null);
    setProgress(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Simulate final speed calculation
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      setSpeed(Math.floor(Math.random() * 100) + 50); // Random speed between 50-150 Mbps
      setIsLoading(false);
    }, 5000);
  };

  useEffect(() => {
    simulateSpeedTest();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="text-2xl font-semibold text-gray-700 mb-8">
          Internet Speed Test
        </h1>

        {isLoading ? (
          <div className="space-y-6">
            <div className="animate-speed-pulse">
              <div className="text-6xl font-bold text-primary mb-2">
                {progress.toFixed(0)}%
              </div>
              <div className="text-gray-500">Testing your speed...</div>
            </div>
            <Progress value={progress} className="w-64 mx-auto" />
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="text-7xl font-bold text-primary mb-2">
                {speed}
              </div>
              <div className="text-xl text-gray-500">Mbps</div>
            </div>
            <button
              onClick={simulateSpeedTest}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Test Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeedTest;