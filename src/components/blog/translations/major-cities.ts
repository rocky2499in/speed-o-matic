import { CityTranslations } from '../types';

export const majorCityTranslations: Record<string, CityTranslations> = {
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
  "phoenix-speed-test": {
    en: {
      title: "Phoenix Internet Speed Test & ISP Analysis",
      content: `
        <h2>Phoenix Metro Area Internet Speed Guide</h2>
        <p>Phoenix's rapid growth and expanding tech presence demand reliable internet connectivity across the Valley of the Sun.</p>
        
        <h3>Phoenix Speed Averages</h3>
        <ul>
          <li>Download: 200-940 Mbps</li>
          <li>Upload: 100-880 Mbps</li>
          <li>Latency: 10-30ms</li>
        </ul>

        <h3>Provider Analysis</h3>
        <p>Cox Communications dominates the market, with CenturyLink (now Quantum) providing fiber options. Local providers offer additional choices in specific areas.</p>

        <h3>Regional Coverage</h3>
        <p>Central Phoenix and Scottsdale have extensive fiber coverage, while outlying areas may rely more on cable or fixed wireless options.</p>
      `
    }
  },
  "philadelphia-speed-test": {
    en: {
      title: "Philadelphia Internet Speed Test Guide",
      content: `
        <h2>Philadelphia Internet Speed Analysis</h2>
        <p>Philadelphia's historic districts and modern business centers require diverse internet solutions to meet varying needs.</p>
        
        <h3>Philly Speed Averages</h3>
        <ul>
          <li>Download: 200-1000 Mbps</li>
          <li>Upload: 100-1000 Mbps</li>
          <li>Latency: 5-20ms</li>
        </ul>

        <h3>Major ISPs</h3>
        <p>Verizon Fios and Comcast Xfinity provide extensive coverage, with additional options from smaller providers in select areas.</p>

        <h3>Neighborhood Coverage</h3>
        <p>Center City and University City enjoy premium connectivity, while some residential areas are seeing continued infrastructure improvements.</p>
      `
    }
  }
};