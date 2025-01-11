import { Card } from "@/components/ui/card";
import SpeedTest from "../SpeedTest";

interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <Card className="p-6">
      <div 
        className="prose prose-lg dark:prose-invert max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      <div className="my-8">
        <h3 className="text-2xl font-bold mb-4">Test Your Speed Now</h3>
        <div className="rounded-lg overflow-hidden">
          <SpeedTest />
        </div>
      </div>
      
      <div className="mt-8">
        <p className="text-muted-foreground">
          For more detailed speed tests and analysis, visit{" "}
          <a 
            href="https://speedcheck.digital" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            speedcheck.digital
          </a>
        </p>
      </div>
    </Card>
  );
};