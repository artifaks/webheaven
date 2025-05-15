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
  scientificName?: string;
  family?: string;
  nativeRegion?: string;
  companionPlants?: string[];
  culinaryUses?: string[];
  medicinalProperties?: {
    property: string;
    description: string;
  }[];
  historicalUses?: string;
  propagationMethods?: string[];
  pests?: string[];
  diseases?: string[];
  harvestTips?: string;
  storageInstructions?: string;
}
