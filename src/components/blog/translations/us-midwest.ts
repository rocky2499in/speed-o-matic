import { CityTranslations } from '../types';

export const usMidwestTranslations: Record<string, CityTranslations> = {
  "chicago-speed-test": {
    en: {
      title: "Chicago Internet Speed Test & ISP Comparison",
      content: `
        <h2>Chicago's Internet Speed Landscape</h2>
        <p>Chicago's diverse neighborhoods require different internet solutions. From the Loop to the suburbs, understanding your speed requirements and available options is crucial.</p>

        <h3>Chicago Speed Averages</h3>
        <ul>
          <li>Download: 200-1000 Mbps</li>
          <li>Upload: 100-1000 Mbps</li>
          <li>Latency: 8-25ms</li>
        </ul>

        <h3>Provider Analysis</h3>
        <p>Xfinity dominates the Chicago market with widespread cable coverage. AT&T provides fiber options in select areas, while RCN offers competitive alternatives in their service areas. Google Fiber's limited presence provides additional high-speed options.</p>

        <h3>Neighborhood Coverage</h3>
        <p>Downtown Chicago and the North Side typically see the fastest speeds, while South and West Side neighborhoods are experiencing ongoing infrastructure upgrades to improve service quality.</p>
      `
    }
  }
};