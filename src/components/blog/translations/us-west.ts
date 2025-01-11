import { CityTranslations } from '../types';

export const usWestTranslations: Record<string, CityTranslations> = {
  "seattle-speed-test": {
    en: {
      title: "Seattle Internet Speed Test & Provider Guide",
      content: `
        <h2>Seattle Area Internet Speed Guide</h2>
        <p>Seattle's tech-focused economy requires robust internet infrastructure. This guide covers options throughout the Puget Sound region.</p>

        <h3>Seattle Speed Averages</h3>
        <ul>
          <li>Download: 200-1000 Mbps</li>
          <li>Upload: 100-1000 Mbps</li>
          <li>Latency: 8-25ms</li>
        </ul>

        <h3>Provider Overview</h3>
        <p>CenturyLink (now Quantum) offers fiber in many areas, while Comcast Xfinity provides cable coverage. Wave Broadband serves specific neighborhoods.</p>

        <h3>Area Analysis</h3>
        <p>Downtown Seattle and Bellevue have extensive fiber coverage, while outlying areas may rely more on cable or fixed wireless options.</p>
      `
    }
  },
  "san-francisco-speed-test": {
    en: {
      title: "San Francisco Bay Area Speed Test Guide",
      content: `
        <h2>Bay Area Internet Speed Analysis</h2>
        <p>The San Francisco Bay Area, home to Silicon Valley, demands top-tier internet connectivity. This guide covers options from SF to San Jose.</p>

        <h3>Bay Area Speed Averages</h3>
        <ul>
          <li>Download: 300-2000 Mbps</li>
          <li>Upload: 200-2000 Mbps</li>
          <li>Latency: 5-20ms</li>
        </ul>

        <h3>Provider Landscape</h3>
        <p>Sonic and AT&T Fiber lead in fiber coverage, while Comcast Xfinity provides cable options. Google Fiber is available in limited areas of Silicon Valley.</p>

        <h3>Regional Coverage</h3>
        <p>San Francisco proper and Silicon Valley enjoy extensive fiber coverage, while East Bay and North Bay areas have more varied options.</p>
      `
    }
  }
};