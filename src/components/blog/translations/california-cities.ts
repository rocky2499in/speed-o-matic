import { CityTranslations } from '../types';

export const californiaCityTranslations: Record<string, CityTranslations> = {
  "san-jose-speed-test": {
    en: {
      title: "San Jose Internet Speed Test & Silicon Valley Guide",
      content: `
        <h2>San Jose Internet Speed Analysis</h2>
        <p>As the heart of Silicon Valley, San Jose demands world-class internet infrastructure to support its tech-driven economy.</p>
        
        <h3>San Jose Speed Averages</h3>
        <ul>
          <li>Download: 300-2000 Mbps</li>
          <li>Upload: 200-2000 Mbps</li>
          <li>Latency: 5-15ms</li>
        </ul>

        <h3>Provider Analysis</h3>
        <p>AT&T Fiber and Xfinity provide extensive coverage, with local providers offering additional options. Google Fiber serves select neighborhoods.</p>

        <h3>Area Coverage</h3>
        <p>Downtown San Jose and north San Jose typically have the best connectivity, with ongoing expansion in other areas.</p>
      `
    }
  },
  "san-diego-speed-test": {
    en: {
      title: "San Diego Internet Speed Test & Provider Guide",
      content: `
        <h2>San Diego Internet Speed Guide</h2>
        <p>San Diego's diverse economy and tech sector require reliable internet connectivity across its varied landscapes.</p>
        
        <h3>San Diego Speed Averages</h3>
        <ul>
          <li>Download: 200-1000 Mbps</li>
          <li>Upload: 100-1000 Mbps</li>
          <li>Latency: 8-25ms</li>
        </ul>

        <h3>Major Providers</h3>
        <p>Cox Communications and Spectrum are the primary providers, with AT&T and local ISPs serving specific areas.</p>

        <h3>Regional Analysis</h3>
        <p>Downtown and La Jolla have extensive fiber coverage, while coastal and inland areas show varying levels of connectivity.</p>
      `
    }
  }
};