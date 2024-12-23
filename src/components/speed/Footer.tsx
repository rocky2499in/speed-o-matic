import { Building2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full mt-8 py-6 px-4 border-t border-border/40 bg-secondary/30 backdrop-blur-sm">
      <div className="max-w-md mx-auto text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-primary">
          <Building2 className="w-4 h-4" />
          <p className="font-medium">A Product by Kinematic Digital</p>
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