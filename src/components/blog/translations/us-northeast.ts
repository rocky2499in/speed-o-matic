import { CityTranslations } from '../types';

export const usNortheastTranslations: Record<string, CityTranslations> = {
  "new-york-speed-test": {
    en: {
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
    }
  },
  "boston-speed-test": {
    en: {
      title: "Boston Internet Speed Test & ISP Guide",
      content: `
        <h2>Greater Boston Internet Speed Guide</h2>
        <p>Boston's academic and tech sectors drive demand for high-speed internet throughout the region.</p>

        <h3>Boston Speed Averages</h3>
        <ul>
          <li>Download: 200-1000 Mbps</li>
          <li>Upload: 100-1000 Mbps</li>
          <li>Latency: 8-25ms</li>
        </ul>

        <h3>Provider Overview</h3>
        <p>Verizon Fios and Comcast Xfinity dominate the market, with RCN available in some areas. Starry Internet offers innovative fixed wireless.</p>

        <h3>Area Analysis</h3>
        <p>Cambridge and Boston proper have excellent coverage, while some suburban areas may have more limited options.</p>
      `
    }
  }
};