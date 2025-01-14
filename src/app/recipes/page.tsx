import Filters from "@/components/filters";
import RecipeCard from "@/components/recipe-card";
import { Recipe } from "@/types/recipe";
import generateSearchQueryString from "@/util/generate-query-string";

type SearchParams = Promise<{ [key: string]: string }>;

// app/recipes/page.js
export default async function RecipesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchParamsData = await searchParams;
  const queryString = generateSearchQueryString(searchParamsData);

  const apiEndpoint = queryString
    ? `https://dummyjson.com/recipes?${queryString}`
    : `https://dummyjson.com/recipes`;

  const res = await fetch(apiEndpoint);
  const { recipes } = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipes</h1>
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe: Recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
