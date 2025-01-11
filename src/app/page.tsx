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
