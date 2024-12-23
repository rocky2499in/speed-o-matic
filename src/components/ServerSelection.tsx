import { useState } from "react";
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
    id: "eu-central",
    name: "EU Central",
    location: "Frankfurt, DE",
    latitude: 50.1109,
    longitude: 8.6821,
    averageSpeed: 92,
  },
  {
    id: "asia-east",
    name: "Asia East",
    location: "Tokyo, JP",
    latitude: 35.6762,
    longitude: 139.6503,
    averageSpeed: 88,
  },
];

interface ServerSelectionProps {
  selectedServer: Server;
  onServerChange: (server: Server) => void;
}

const ServerSelection = ({ selectedServer, onServerChange }: ServerSelectionProps) => {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center space-x-2">
        <MapPin className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">Select Server Location</span>
      </div>
      <Select
        value={selectedServer.id}
        onValueChange={(value) => {
          const server = servers.find((s) => s.id === value);
          if (server) onServerChange(server);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a server" />
        </SelectTrigger>
        <SelectContent>
          {servers.map((server) => (
            <SelectItem key={server.id} value={server.id}>
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