import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const cityBlogs = [
  {
    city: "New York",
    title: "Internet Speed Test Guide for New York City",
    description: "Discover the best internet speeds across Manhattan, Brooklyn, Queens, and beyond. Compare major ISPs like Verizon Fios, Spectrum, and Optimum in NYC.",
    slug: "new-york-speed-test"
  },
  {
    city: "Chicago",
    title: "Chicago Internet Speed Test & ISP Comparison",
    description: "Comprehensive guide to internet speeds in Chicago. Compare Xfinity, AT&T, and RCN performance across different neighborhoods.",
    slug: "chicago-speed-test"
  },
  {
    city: "Los Angeles",
    title: "LA Internet Speed Test & Provider Analysis",
    description: "Test and compare internet speeds across Los Angeles County. Find the best ISPs from Santa Monica to Downtown LA.",
    slug: "los-angeles-speed-test"
  },
  {
    city: "San Francisco",
    title: "San Francisco Bay Area Speed Test Guide",
    description: "Compare internet speeds across the Bay Area. Find the fastest providers in SF, Silicon Valley, and East Bay.",
    slug: "san-francisco-speed-test"
  },
  {
    city: "Seattle",
    title: "Seattle Internet Speed Test & Provider Guide",
    description: "Analyze internet speeds across Greater Seattle. Compare CenturyLink, Xfinity, and Wave performance.",
    slug: "seattle-speed-test"
  },
  {
    city: "Washington DC",
    title: "DC Metro Area Internet Speed Analysis",
    description: "Test internet speeds in the Capital Region. Compare Verizon, Xfinity, and RCN across DC, Maryland, and Virginia.",
    slug: "washington-dc-speed-test"
  },
  {
    city: "Boston",
    title: "Boston Internet Speed Test & ISP Guide",
    description: "Compare internet speeds across Greater Boston. Find the best providers from Cambridge to Quincy.",
    slug: "boston-speed-test"
  },
  {
    city: "Melbourne",
    title: "Melbourne NBN Speed Test Guide",
    description: "Test your NBN speeds across Melbourne. Compare providers and plans across Victoria's capital.",
    slug: "melbourne-speed-test"
  },
  {
    city: "Sydney",
    title: "Sydney Internet Speed Test & NBN Guide",
    description: "Comprehensive NBN speed test guide for Sydney. Compare providers across all metro areas.",
    slug: "sydney-speed-test"
  },
  {
    city: "Frankfurt",
    title: "Frankfurt Internet Speed Test Guide",
    description: "Test internet speeds in Frankfurt am Main. Compare Deutsche Telekom, Vodafone, and local providers.",
    slug: "frankfurt-speed-test"
  },
  {
    city: "Stuttgart",
    title: "Stuttgart Internet Speed Analysis",
    description: "Compare internet speeds across Stuttgart region. Find the best providers in Baden-Württemberg's capital.",
    slug: "stuttgart-speed-test"
  },
  {
    city: "Berlin",
    title: "Berlin Internet Speed Test & Provider Guide",
    description: "Test internet speeds across Berlin districts. Compare all major German ISPs and local providers.",
    slug: "berlin-speed-test"
  }
];

export const BlogPosts = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" aria-label="Blog Posts">
      <h2 className="text-3xl font-bold text-center mb-8">City-Specific Speed Test Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cityBlogs.map((blog) => (
          <Card key={blog.slug} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{blog.title}</CardTitle>
              <CardDescription>{blog.city}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{blog.description}</p>
              <Link 
                to={`/blog/${blog.slug}`}
                className="inline-block mt-4 text-primary hover:underline"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};