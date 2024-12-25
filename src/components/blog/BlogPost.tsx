import { useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import { BlogContent } from "./BlogContent";

type Language = "en" | "es" | "de";

interface BlogTranslation {
  title: string;
  content: string;
}

interface CityTranslations {
  [key: string]: BlogTranslation;
}

interface Translations {
  [key: string]: CityTranslations;
}

const translations: Translations = {
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
    },
    es: {
      title: "Guía de prueba de velocidad de Internet para la ciudad de Nueva York",
      content: `
        <h2>Guía de prueba de velocidad de Internet para residentes de NYC</h2>
        <p>Nueva York, siendo un centro global de negocios y tecnología, exige una conectividad a Internet confiable y rápida. Esta guía completa te ayuda a comprender y probar tus velocidades de Internet en los cinco distritos.</p>
        
        <h3>Velocidades promedio de Internet en NYC</h3>
        <ul>
          <li>Descarga: 200-940 Mbps</li>
          <li>Carga: 100-880 Mbps</li>
          <li>Latencia: 5-20ms</li>
        </ul>

        <h3>Rendimiento de los principales ISP</h3>
        <p>Verizon Fios lidera el mercado con conectividad de fibra, ofreciendo velocidades simétricas de hasta 940 Mbps. Spectrum sigue con servicio de internet por cable alcanzando velocidades de descarga de hasta 940 Mbps. Optimum ofrece opciones competitivas en vecindarios selectos.</p>

        <h3>Análisis específico por distrito</h3>
        <p>Manhattan generalmente disfruta de la mejor cobertura y las velocidades más rápidas, particularmente en áreas con infraestructura de fibra. Brooklyn y Queens muestran rendimiento variable según el vecindario, mientras que El Bronx y Staten Island están experimentando mejoras continuas en infraestructura.</p>
      `
    },
    de: {
      title: "Internet-Geschwindigkeitstest-Guide für New York City",
      content: `
        <h2>Internet-Geschwindigkeitstest-Guide für NYC-Bewohner</h2>
        <p>New York City als globales Zentrum für Wirtschaft und Technologie erfordert eine zuverlässige und schnelle Internetverbindung. Dieser umfassende Leitfaden hilft Ihnen, Ihre Internetgeschwindigkeiten in allen fünf Stadtbezirken zu verstehen und zu testen.</p>
        
        <h3>Durchschnittliche Internetgeschwindigkeiten in NYC</h3>
        <ul>
          <li>Download: 200-940 Mbps</li>
          <li>Upload: 100-880 Mbps</li>
          <li>Latenz: 5-20ms</li>
        </ul>

        <h3>Leistung der wichtigsten ISPs</h3>
        <p>Verizon Fios führt den Markt mit Glasfaser-Konnektivität an und bietet symmetrische Geschwindigkeiten von bis zu 940 Mbps. Spectrum folgt mit Kabelinternet-Service mit Download-Geschwindigkeiten von bis zu 940 Mbps. Optimum bietet wettbewerbsfähige Optionen in ausgewählten Nachbarschaften.</p>

        <h3>Bezirksspezifische Analyse</h3>
        <p>Manhattan genießt im Allgemeinen die beste Abdeckung und schnellste Geschwindigkeiten, besonders in Gebieten mit Glasfaser-Infrastruktur. Brooklyn und Queens zeigen je nach Nachbarschaft unterschiedliche Leistung, während die Bronx und Staten Island kontinuierliche Infrastrukturverbesserungen erfahren.</p>
      `
    }
  },
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

export const BlogPost = () => {
  const { slug } = useParams();
  const [language, setLanguage] = useState<Language>("en");
  
  if (!slug || !translations[slug]) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">Post not found</h1>
      </div>
    );
  }

  const post = translations[slug][language as keyof typeof translations[typeof slug]];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">Translation not available</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <LanguageSelector 
          currentLanguage={language}
          onLanguageChange={setLanguage}
        />
      </div>
      <BlogContent 
        content={post.content}
        language={language}
      />
    </div>
  );
};