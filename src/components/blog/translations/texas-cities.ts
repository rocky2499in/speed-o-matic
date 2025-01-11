import { CityTranslations } from '../types';

export const texasCityTranslations: Record<string, CityTranslations> = {
  "san-antonio-speed-test": {
    en: {
      title: "San Antonio Internet Speed Test & Provider Guide",
      content: `
        <h2>San Antonio Internet Speed Guide</h2>
        <p>As one of Texas's fastest-growing cities, San Antonio requires robust internet infrastructure to support its expanding population.</p>
        
        <h3>San Antonio Speed Averages</h3>
        <ul>
          <li>Download: 200-940 Mbps</li>
          <li>Upload: 100-880 Mbps</li>
          <li>Latency: 8-25ms</li>
        </ul>

        <h3>Provider Overview</h3>
        <p>Spectrum and AT&T are the primary providers, with Google Fiber available in select areas. Local providers offer additional options.</p>

        <h3>Area Analysis</h3>
        <p>Downtown and North San Antonio typically have the best coverage, while some outlying areas are seeing continued expansion.</p>
      `
    }
  },
  "dallas-speed-test": {
    en: {
      title: "Dallas Internet Speed Test & Coverage Analysis",
      content: `
        <h2>Dallas Internet Speed Guide</h2>
        <p>Dallas's position as a major tech hub demands high-performance internet infrastructure throughout the metroplex.</p>
        
        <h3>Dallas Speed Averages</h3>
        <ul>
          <li>Download: 200-1000 Mbps</li>
          <li>Upload: 100-1000 Mbps</li>
          <li>Latency: 5-20ms</li>
        </ul>

        <h3>Provider Landscape</h3>
        <p>AT&T Fiber and Spectrum lead the market, with additional options from Frontier FiOS in select areas.</p>

        <h3>Area Coverage</h3>
        <p>Downtown Dallas and Uptown enjoy extensive fiber coverage, while suburban areas have varying levels of service options.</p>
      `
    }
  }
};