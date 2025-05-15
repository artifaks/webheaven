export interface Herb {
  id: string;
  name: string;
  description: string;
  image: string;
  benefits: string[];
  category?: string;
  growingDifficulty?: string;
  usageInstructions?: string;
  harvestSeason?: string;
  isFavorite?: boolean;
}
