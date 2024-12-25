import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Server {
  id: string;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  averageSpeed: number;
}

const servers: Server[] = [
  {
    id: "us-west",
    name: "US West",
    location: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    averageSpeed: 85,
  },
  {
    id: "us-east",
    name: "US East",
    location: "New York, NY",
    latitude: 40.7128,
    longitude: -74.0060,
    averageSpeed: 78,
  },
  {
    id: "us-central",
    name: "US Central",
    location: "Dallas, TX",
    latitude: 32.7767,
    longitude: -96.7970,
    averageSpeed: 82,
  },
  {
    id: "eu-central",
    name: "EU Central",
    location: "Frankfurt, DE",
    latitude: 50.1109,
    longitude: 8.6821,
    averageSpeed: 92,
  },
  {
    id: "eu-west",
    name: "EU West",
    location: "London, UK",
    latitude: 51.5074,
    longitude: -0.1278,
    averageSpeed: 89,
  },
  {
    id: "asia-east",
    name: "Asia East",
    location: "Tokyo, JP",
    latitude: 35.6762,
    longitude: 139.6503,
    averageSpeed: 88,
  },
  {
    id: "asia-south",
    name: "Asia South",
    location: "Singapore, SG",
    latitude: 1.3521,
    longitude: 103.8198,
    averageSpeed: 91,
  },
  {
    id: "oceania",
    name: "Oceania",
    location: "Sydney, AU",
    latitude: -33.8688,
    longitude: 151.2093,
    averageSpeed: 76,
  },
  {
    id: "eu-north",
    name: "EU North",
    location: "Stockholm, SE",
    latitude: 59.3293,
    longitude: 18.0686,
    averageSpeed: 94,
  },
  {
    id: "asia-pacific",
    name: "Asia Pacific",
    location: "Seoul, KR",
    latitude: 37.5665,
    longitude: 126.9780,
    averageSpeed: 93,
  },
  {
    id: "india-west",
    name: "India West",
    location: "Mumbai, IN",
    latitude: 19.0760,
    longitude: 72.8777,
    averageSpeed: 79,
  },
  {
    id: "brazil-east",
    name: "Brazil East",
    location: "São Paulo, BR",
    latitude: -23.5505,
    longitude: -46.6333,
    averageSpeed: 77,
  },
  {
    id: "canada-east",
    name: "Canada East",
    location: "Toronto, CA",
    latitude: 43.6532,
    longitude: -79.3832,
    averageSpeed: 86,
  }
];

interface ServerSelectionProps {
  selectedServer: Server;
  onServerChange: (server: Server) => void;
}

const ServerSelection = ({ selectedServer, onServerChange }: ServerSelectionProps) => {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center space-x-2 text-primary">
        <MapPin className="w-5 h-5" />
        <span className="text-sm font-medium">Select Server Location</span>
      </div>
      <Select
        value={selectedServer.id}
        onValueChange={(value) => {
          const server = servers.find((s) => s.id === value);
          if (server) onServerChange(server);
        }}
      >
        <SelectTrigger className="w-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
          <SelectValue placeholder="Select a server" />
        </SelectTrigger>
        <SelectContent className="bg-background/95 backdrop-blur-sm border-primary/20">
          {servers.map((server) => (
            <SelectItem 
              key={server.id} 
              value={server.id}
              className="hover:bg-primary/10 cursor-pointer transition-colors"
            >
              {server.name} - {server.location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export { servers };
export default ServerSelection;