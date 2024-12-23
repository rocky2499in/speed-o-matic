import { WifiHigh, SignalHigh, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const SpeedTestHeader = () => {
  const { theme, setTheme } = useTheme();
  
  return (
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
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </div>
  );
};