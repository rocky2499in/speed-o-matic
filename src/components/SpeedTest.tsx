import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";
import { WifiHigh, SignalHigh, Moon, Sun, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();

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

  const handleShare = async () => {
    if (!networkInfo) return;

    const shareData = {
      title: 'Speedcheck Digital Results',
      text: `My internet speed test results:\nDownload: ${networkInfo.downloadSpeed} Mbps\nUpload: ${networkInfo.uploadSpeed} Mbps\nLatency: ${networkInfo.latency} ms\nISP: ${networkInfo.isp}`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          title: "Success",
          description: "Results shared successfully!",
        });
      } else {
        await navigator.clipboard.writeText(shareData.text);
        toast({
          title: "Success",
          description: "Results copied to clipboard!",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to share results",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    simulateSpeedTest();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="text-center space-y-8 animate-fade-in max-w-md w-full">
        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center space-x-3">
            <SignalHigh className="w-10 h-10 text-primary animate-pulse" strokeWidth={2.5} />
            <h1 className="text-3xl font-bold text-primary tracking-tight">Speedcheck Digital</h1>
            <WifiHigh className="w-10 h-10 text-primary animate-pulse" strokeWidth={2.5} />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-auto"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        <h2 className="text-xl font-semibold text-foreground">
          Internet Speed Test
        </h2>

        {isLoading ? (
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
        ) : (
          <div className="space-y-8">
            {networkInfo && (
              <>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {networkInfo.downloadSpeed}
                    </div>
                    <div className="text-sm text-foreground/80">Download (Mbps)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {networkInfo.uploadSpeed}
                    </div>
                    <div className="text-sm text-foreground/80">Upload (Mbps)</div>
                  </div>
                </div>
                
                <div className="space-y-4 bg-secondary/50 p-6 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-left text-foreground/80">IP Address</div>
                    <div className="text-right font-medium">{networkInfo.ip}</div>
                    
                    <div className="text-left text-foreground/80">Latency</div>
                    <div className="text-right font-medium">{networkInfo.latency} ms</div>
                    
                    <div className="text-left text-foreground/80">ISP</div>
                    <div className="text-right font-medium">{networkInfo.isp}</div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button
                    onClick={simulateSpeedTest}
                    className="flex-1"
                  >
                    Test Again
                  </Button>
                  <Button
                    onClick={handleShare}
                    variant="secondary"
                    className="flex gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeedTest;
