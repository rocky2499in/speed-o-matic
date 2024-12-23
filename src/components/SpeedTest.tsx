import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";
import { Wifi, Signal } from "lucide-react";

interface NetworkInfo {
  ip: string;
  downloadSpeed: number;
  uploadSpeed: number;
  latency: number;
  isp: string;
}

interface IpApiResponse {
  ip: string;
  org: string;
}

const SpeedTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo | null>(null);
  const [progress, setProgress] = useState(0);
  const [testPhase, setTestPhase] = useState<"download" | "upload" | "complete">("download");

  const fetchNetworkInfo = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data: IpApiResponse = await response.json();
      return {
        ip: data.ip,
        isp: data.org || 'Unknown ISP'
      };
    } catch (error) {
      console.error('Error fetching network info:', error);
      toast({
        title: "Error",
        description: "Failed to fetch network information. Using fallback data.",
        variant: "destructive",
      });
      return {
        ip: "192.168.1." + Math.floor(Math.random() * 255),
        isp: "Sample ISP Provider"
      };
    }
  };

  const simulateSpeedTest = async () => {
    setIsLoading(true);
    setNetworkInfo(null);
    setProgress(0);
    setTestPhase("download");

    // Fetch real network info while speed test is running
    const networkData = await fetchNetworkInfo();

    // Simulate download test
    const downloadInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(downloadInterval);
          setTestPhase("upload");
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    // After download completes, simulate upload test
    setTimeout(() => {
      const uploadInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(uploadInterval);
            setTestPhase("complete");
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }, 5000);

    // Simulate final results
    setTimeout(() => {
      setIsLoading(false);
      setNetworkInfo({
        ip: networkData.ip,
        downloadSpeed: Math.floor(Math.random() * 100) + 50,
        uploadSpeed: Math.floor(Math.random() * 50) + 30,
        latency: Math.floor(Math.random() * 50) + 10,
        isp: networkData.isp,
      });
    }, 10000);
  };

  useEffect(() => {
    simulateSpeedTest();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center space-y-8 animate-fade-in max-w-md w-full">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Signal className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">Speedcheck Digital</h1>
          <Wifi className="w-8 h-8 text-primary" />
        </div>

        <h2 className="text-xl font-semibold text-gray-700">
          Internet Speed Test
        </h2>

        {isLoading ? (
          <div className="space-y-6">
            <div className="animate-speed-pulse">
              <div className="text-6xl font-bold text-primary mb-2">
                {progress.toFixed(0)}%
              </div>
              <div className="text-gray-500">
                Testing {testPhase === "download" ? "download" : "upload"} speed...
              </div>
            </div>
            <Progress value={progress} className="w-64 mx-auto" />
          </div>
        ) : (
          <div className="space-y-8">
            {networkInfo && (
              <>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {networkInfo.downloadSpeed}
                    </div>
                    <div className="text-sm text-gray-500">Download (Mbps)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {networkInfo.uploadSpeed}
                    </div>
                    <div className="text-sm text-gray-500">Upload (Mbps)</div>
                  </div>
                </div>
                
                <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-left text-gray-500">IP Address</div>
                    <div className="text-right font-medium">{networkInfo.ip}</div>
                    
                    <div className="text-left text-gray-500">Latency</div>
                    <div className="text-right font-medium">{networkInfo.latency} ms</div>
                    
                    <div className="text-left text-gray-500">ISP</div>
                    <div className="text-right font-medium">{networkInfo.isp}</div>
                  </div>
                </div>
                
                <button
                  onClick={simulateSpeedTest}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors w-full"
                >
                  Test Again
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeedTest;