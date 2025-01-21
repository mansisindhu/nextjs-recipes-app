/* eslint-disable @next/next/no-img-element */
import Back from "@/components/back";
import { Recipe } from "@/types/recipe";
import { type Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// ISR
export const revalidate = 60;

export const dynamicParams = true;

// SSG
export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/recipes");
  const { recipes }: {recipes: Recipe[]} = await res.json();

  // Only genrating 
  return recipes.slice(0, 5).map((recipe: Recipe) => ({
    id: String(recipe.id),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = (await params).id;
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe: Recipe = await res.json();

  return {
    title: recipe.name
  };
}

export default async function RecipePage({ params }: Props) {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <Back />
      {/* Recipe Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
          <p className="text-gray-600 mb-4">
            {recipe.cuisine} · {recipe.difficulty} · {recipe.caloriesPerServing}{" "}
            calories per serving
          </p>
          <p className="text-yellow-500 font-bold">
            {recipe.rating} stars ({recipe.reviewCount} reviews)
          </p>
        </div>
      </div>

      {/* Recipe Details */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Details</h2>
        <ul className="text-gray-600 mb-4">
          <li>
            <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
          </li>
          <li>
            <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
          </li>
          <li>
            <strong>Servings:</strong> {recipe.servings}
          </li>
          <li>
            <strong>Meal Type:</strong> {recipe.mealType.join(", ")}
          </li>
        </ul>
      </div>

      {/* Ingredients */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600">
          {recipe.ingredients.map((ingredient: string, index: number) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-600">
          {recipe.instructions.map((step: string, index: number) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
