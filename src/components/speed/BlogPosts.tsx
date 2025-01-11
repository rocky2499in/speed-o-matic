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
    city: "Houston",
    title: "Houston Internet Speed Test & Coverage Guide",
    description: "Complete analysis of internet speeds in Houston. Compare providers and find the best service for your area.",
    slug: "houston-speed-test"
  },
  {
    city: "Phoenix",
    title: "Phoenix Internet Speed Test & Provider Guide",
    description: "Comprehensive guide to internet speeds in Phoenix. Compare Cox, CenturyLink, and other providers.",
    slug: "phoenix-speed-test"
  },
  {
    city: "Philadelphia",
    title: "Philadelphia Internet Speed Test & Coverage Analysis",
    description: "Test and compare internet speeds across Philadelphia. Find the best providers from Center City to the suburbs.",
    slug: "philadelphia-speed-test"
  },
  {
    city: "San Antonio",
    title: "San Antonio Internet Speed Test & Provider Guide",
    description: "Compare internet speeds and providers across San Antonio. Find the fastest and most reliable service.",
    slug: "san-antonio-speed-test"
  },
  {
    city: "San Diego",
    title: "San Diego Internet Speed Test & Coverage Guide",
    description: "Comprehensive guide to internet speeds in San Diego. Compare Cox, Spectrum, AT&T, and more.",
    slug: "san-diego-speed-test"
  },
  {
    city: "Dallas",
    title: "Dallas Internet Speed Test & Provider Analysis",
    description: "Test and compare internet speeds across Dallas. Find the best providers and plans for your neighborhood.",
    slug: "dallas-speed-test"
  },
  {
    city: "San Jose",
    title: "San Jose Internet Speed Test & Silicon Valley Guide",
    description: "Compare internet speeds across San Jose and Silicon Valley. Find the fastest fiber and cable options.",
    slug: "san-jose-speed-test"
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
                to={`/${blog.slug}`}
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
