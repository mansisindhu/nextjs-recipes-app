import Link from "next/link";

const routes = [
  {
    name: "Recipes",
    route: "/recipes",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

export default function Header() {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-xl font-bold">My Recipes App</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {routes.map((route) => (
              <li key={route.route}>
                <Link href={route.route} className="hover:underline">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
