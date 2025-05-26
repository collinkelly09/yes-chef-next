export interface RecipeResponse {
  id: number;
  created_at: Date;
  title: string;
  photo?: string;
  time?: string;
  rating: number;
  user_id: number;
}
