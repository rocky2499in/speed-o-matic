import { CityTranslations } from '../types';

export const texasCityTranslations: Record<string, CityTranslations> = {
  "houston-speed-test": {
    en: {
      title: "Houston Internet Speed Test & Provider Guide",
      content: `
        <h2>Houston Internet Speed Guide</h2>
        <p>As the largest city in Texas, Houston requires robust internet infrastructure to support its diverse population and growing tech sector.</p>
        
        <h3>Houston Speed Averages</h3>
        <ul>
          <li>Download: 200-1000 Mbps</li>
          <li>Upload: 100-1000 Mbps</li>
          <li>Latency: 8-25ms</li>
        </ul>

        <h3>Major Providers</h3>
        <p>Comcast Xfinity and AT&T Fiber are the primary providers, with Spectrum serving specific areas. 5G home internet is expanding through T-Mobile and Verizon.</p>

        <h3>Area Analysis</h3>
        <p>Downtown Houston and The Woodlands typically enjoy excellent connectivity, while some suburban areas may have more limited options. Fiber deployment is ongoing throughout the region.</p>
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
  },
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
  }
};