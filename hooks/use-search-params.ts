import { createLoader } from "nuqs";
const sortValues = ['curated', 'trending', 'hot_and_new'] as const
import { parseAsArrayOf, parseAsStringLiteral,parseAsString, } from 'nuqs/server';
export const params = {
    minPrice: parseAsString.withOptions({
      clearOnDefault: true,
    }),
    maxPrice: parseAsString.withOptions({
      clearOnDefault: true,
    }), // <-- missing bracket was added here
    tags: parseAsArrayOf(parseAsString).withOptions({
      clearOnDefault: true
    }),
    sort: parseAsStringLiteral(sortValues).withDefault('curated')
  };
export const loadProductFilters = createLoader(params);