import { Building2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="w-full mt-8 py-6 px-4 border-t border-border/40 bg-secondary/30 backdrop-blur-sm">
      <div className="max-w-md mx-auto text-center space-y-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Building2 className="w-5 h-5" />
            <Globe className="w-5 h-5" />
          </div>
          <Button 
            variant="link" 
            className="text-primary font-medium hover:text-primary/80 transition-colors"
            onClick={() => window.open('https://kinematicdigital.com', '_blank')}
          >
            A Product by Kinematic Digital
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          An Austin based company
        </p>
        <address className="text-xs text-muted-foreground not-italic">
          701 Tillery Street Unit 12-1636<br />
          Austin, Texas 78702<br />
          United States
        </address>
      </div>
    </footer>
  );
};