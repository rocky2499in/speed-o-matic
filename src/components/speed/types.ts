export interface NetworkInfo {
  ip: string;
  downloadSpeed: number;
  uploadSpeed: number;
  latency: number;
  isp: string;
}

export interface Server {
  id: string;
  location: string;
  distance: string;
}