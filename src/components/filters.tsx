"use client";

import generateSearchQueryString from "@/util/generate-query-string";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Filters = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [filters, setFilters] = useState<Record<string, string>>({});

    const handleFilters = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters(prev => {
            return {
                ...prev,
                [name]: value,
                order: "asc"
            }
        });
    };

    //   useEffect(() => {
    //     if (filters?.order) {

    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, [filters]);

    return (
        <div className="mb-5">
            <select
                name="sortBy"
                onChange={handleFilters}
                className="p-3 w-[150px] bg-black text-white"
            >
                <option value=""> Sort</option>
                <option value="name">Name</option>
                <option value="caloriesPerServing">Calories Per Serving</option>
                <option value="rating">Rating</option>
            </select>

            <input className="w-[150px] border border-black" name="query" type="text" value={filters.search} onChange={handleFilters} />


            <button onClick={() => {
                router.push(`${pathname}?${generateSearchQueryString(filters)}`);
            }}>Filter</button>
        </div>
    );
};

export default Filters;
