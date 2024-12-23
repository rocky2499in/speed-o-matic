import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import ServerSelection, { Server, servers } from "./ServerSelection";
import RegionalComparison from "./RegionalComparison";
import { SpeedTestHeader } from "./speed/SpeedTestHeader";
import { SpeedTestProgress } from "./speed/SpeedTestProgress";
import { SpeedTestResults } from "./speed/SpeedTestResults";
import { NetworkInfo } from "./speed/types";

const SpeedTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo | null>(null);
  const [progress, setProgress] = useState(0);
  const [testPhase, setTestPhase] = useState<"download" | "upload" | "complete">("download");
  const [selectedServer, setSelectedServer] = useState<Server>(servers[0]);

  const fetchNetworkInfo = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
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

    const networkData = await fetchNetworkInfo();

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
  }, [selectedServer]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4 md:p-8">
      <div className="w-full max-w-md mx-auto space-y-8 animate-fade-in">
        <header>
          <SpeedTestHeader />
        </header>
        
        <section 
          className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 shadow-lg space-y-8"
          aria-label="Speed Test Section"
        >
          <ServerSelection 
            selectedServer={selectedServer} 
            onServerChange={setSelectedServer}
            aria-label="Server Selection"
          />
          
          <h2 className="text-xl font-semibold text-foreground/90 tracking-tight">
            Testing Speed to {selectedServer.location}
          </h2>

          {isLoading ? (
            <SpeedTestProgress 
              progress={progress} 
              testPhase={testPhase}
              aria-live="polite"
            />
          ) : (
            networkInfo && (
              <SpeedTestResults 
                networkInfo={networkInfo}
                onTestAgain={simulateSpeedTest}
                selectedServer={selectedServer}
                aria-label="Speed Test Results"
              />
            )
          )}
        </section>
      </div>
    </main>
  );
};

export default SpeedTest;