import { createLoader,  useQueryStates,parseAsArrayOf, parseAsStringLiteral,parseAsString } from 'nuqs';
const sortValues = ['curated', 'trending', 'hot_and_new'] as const
export const params = {
  minPrice: parseAsString.withOptions({
    clearOnDefault: true,
  }).withDefault(''),
  maxPrice: parseAsString.withOptions({
    clearOnDefault: true,
  }).withDefault(''), // <-- missing bracket was added here
  tags: parseAsArrayOf(parseAsString).withOptions({
    clearOnDefault: true
  }),
  sort: parseAsStringLiteral(sortValues).withDefault('curated')
};
export const useProductFilters =  () => {
  return useQueryStates(params);
};

export const loadProductFilters = createLoader(params);