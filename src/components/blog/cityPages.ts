interface CityPage {
  title: string;
  description?: string;
  content: string;
}

export const cityPages: Record<string, CityPage> = {
  "new-york-speed-test": {
    title: "Internet Speed Test Guide for New York City",
    content: `
      <h2>Internet Speed Test Guide for NYC Residents</h2>
      <p>New York City, being a global hub for business and technology, demands reliable and fast internet connectivity. This comprehensive guide helps you understand and test your internet speeds across the five boroughs.</p>
      
      <h3>Average Internet Speeds in NYC</h3>
      <ul>
        <li>Download: 200-940 Mbps</li>
        <li>Upload: 100-880 Mbps</li>
        <li>Latency: 5-20ms</li>
      </ul>

      <h3>Major ISP Performance</h3>
      <p>Verizon Fios leads the market with fiber connectivity, offering symmetrical speeds up to 940 Mbps. Spectrum follows with cable internet service reaching up to 940 Mbps download speeds. Optimum provides competitive options in select neighborhoods.</p>

      <h3>Borough-Specific Analysis</h3>
      <p>Manhattan generally enjoys the best coverage and fastest speeds, particularly in areas with fiber infrastructure. Brooklyn and Queens show varying performance based on neighborhood, while The Bronx and Staten Island are seeing continued infrastructure improvements.</p>
    `
  },
  "houston-speed-test": {
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
  },
  "dallas-speed-test": {
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
  },
  // ... Additional cities will be added in subsequent updates
};