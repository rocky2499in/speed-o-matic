import { WifiHigh, SignalHigh, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center space-x-3">
          <SignalHigh className="w-8 h-8 text-primary animate-pulse" strokeWidth={2.5} />
          <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
            Speedcheck Digital
          </h1>
          <WifiHigh className="w-8 h-8 text-primary animate-pulse" strokeWidth={2.5} />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-auto hover:bg-primary/10 transition-colors"
        >
          {theme === "dark" ? 
            <Sun className="h-5 w-5 text-primary" /> : 
            <Moon className="h-5 w-5 text-primary" />
          }
        </Button>
      </div>
    </header>
  );
};