import { Category } from "@/payload-types";

export type modifiedCategory = Category & {
    subcategories: Category[]
}