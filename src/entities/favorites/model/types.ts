import { Book } from "@/entities/books";

export type FavoritesState = {
  list: Book[];
  listId: string[];
  isLoading: boolean;
}
