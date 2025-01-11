import { CityTranslations } from '../types';

export const usCapitalTranslations: Record<string, CityTranslations> = {
  "washington-dc-speed-test": {
    en: {
      title: "DC Metro Area Internet Speed Analysis",
      content: `
        <h2>Washington DC Internet Speed Guide</h2>
        <p>The Capital Region requires reliable connectivity for government, business, and residential users alike.</p>

        <h3>DC Area Speed Averages</h3>
        <ul>
          <li>Download: 200-940 Mbps</li>
          <li>Upload: 100-880 Mbps</li>
          <li>Latency: 5-20ms</li>
        </ul>

        <h3>Provider Analysis</h3>
        <p>Verizon Fios and Comcast Xfinity are the primary providers, with RCN available in select areas. 5G home internet is expanding rapidly.</p>

        <h3>Regional Coverage</h3>
        <p>DC proper has extensive fiber coverage, while Maryland and Virginia suburbs have varying options based on development age and density.</p>
      `
    }
  }
};