import { Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { NetworkInfo } from "./types";
import { QRCodeSVG } from "qrcode.react";

interface SpeedTestResultsProps {
  networkInfo: NetworkInfo;
  onTestAgain: () => void;
  selectedServer: { location: string };
}

export const SpeedTestResults = ({ networkInfo, onTestAgain, selectedServer }: SpeedTestResultsProps) => {
  const handleShare = async () => {
    const shareData = {
      title: 'Speedcheck Digital Results',
      text: `My internet speed test results:\nDownload: ${networkInfo.downloadSpeed} Mbps\nUpload: ${networkInfo.uploadSpeed} Mbps\nLatency: ${networkInfo.latency} ms\nISP: ${networkInfo.isp}\nServer: ${selectedServer.location}`,
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

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `My internet speed test results:\nDownload: ${networkInfo.downloadSpeed} Mbps\nUpload: ${networkInfo.uploadSpeed} Mbps\nLatency: ${networkInfo.latency} ms\nISP: ${networkInfo.isp}\nServer: ${selectedServer.location}\n\nTest your speed at: ${window.location.href}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-8 animate-fade-in">
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
        <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-4 text-sm">
          <div className="text-left text-foreground/80">IP Address</div>
          <div className="text-right font-medium break-all">{networkInfo.ip}</div>
          
          <div className="text-left text-foreground/80">Latency</div>
          <div className="text-right font-medium">{networkInfo.latency} ms</div>
          
          <div className="text-left text-foreground/80">ISP</div>
          <div className="text-right font-medium truncate" title={networkInfo.isp}>{networkInfo.isp}</div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <QRCodeSVG 
            value={`${window.location.href}?results=${encodeURIComponent(JSON.stringify(networkInfo))}`}
            size={128}
          />
        </div>
        <p className="text-sm text-foreground/80">Scan to test on your mobile device</p>
      </div>
      
      <div className="flex gap-4">
        <Button
          onClick={onTestAgain}
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
        <Button
          onClick={handleWhatsAppShare}
          variant="secondary"
          className="flex gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};