import Image from "next/image";
import Link from "next/link";

const highlightsData = [
  {
    title: "Quick & Easy",
    description: "Enjoy simple recipes that fit into your busy lifestyle.",
    image: "/assets/highlights-recipes/1.jpg",
  },
  {
    title: "Healthy Options",
    description: "Explore a variety of healthy and delicious meals.",
    image: "/assets/highlights-recipes/2.jpg",
  },
  {
    title: "Community Driven",
    description: "Share your own recipes and connect with other food lovers.",
    image: "/assets/highlights-recipes/3.jpg",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 via-yellow-300 to-orange-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Master</h1>
          <p className="text-lg mb-6">
            Discover, cook, and share amazing recipes from around the world!
          </p>
          <Link
            href="/recipes"
            className="px-6 py-3 bg-white text-green-600 font-medium rounded-md shadow-md hover:bg-gray-100 transition"
          >
            Browse Recipes
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightsData.map((highlight) => {
              return (
                <div
                  key={highlight.title}
                  className="text-center p-6 bg-white shadow-md rounded-md"
                >
                  <Image
                    width={200}
                    height={200}
                    style={{ objectFit: "cover" }}
                    src={highlight.image}
                    alt="Quick and Easy Recipes"
                    className="h-16 mx-auto mb-4"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,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"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
