
export enum EquipmentType {
  GAS_STOVE = '瓦斯爐',
  INDUCTION_COOKER = '電磁爐',
  OVEN = '烤箱',
  AIR_FRYER = '氣炸鍋',
  ELECTRIC_POT = '電鍋',
  MICROWAVE = '微波爐',
  OTHER = '其他'
}

export enum DietaryRule {
  VEGETARIAN = '素食',
  HALAL = '清真',
  LOW_CARB = '低碳',
  GLUTEN_FREE = '無麩質',
  KETOGENIC = '生酮',
  NO_BEEF = '不吃牛',
  NO_PORK = '不吃豬'
}

export enum Allergy {
  PEANUTS = '花生',
  SHELLFISH = '海鮮/甲殼類',
  DAIRY = '乳製品',
  EGGS = '蛋',
  SOY = '大豆',
  NUTS = '堅果',
  OTHER = '其他'
}

export interface UserProfile {
  displayName: string;
  allergies: string[];
  dietaryRules: string[];
  equipment: string[];
  onboardingComplete: boolean;
}

export interface Ingredient {
  name: string;
  amount: string;
  group: '預備' | '調味' | '輔料';
}

export interface RecipeStep {
  title: string;
  description: string;
  timer_seconds?: number;
  estimated_minutes: number;
}

export interface RecipeCandidate {
  id: string;
  title: string;
  category: string;
  intro: string;
  estimated_minutes: number;
  calories_est: number;
  match_reason: string;
  // Added fields for Seed Recipes
  heroIngredients?: string[];
  seedIngredients?: string[];
  equipmentHint?: string;
}

export interface DetailedRecipe extends RecipeCandidate {
  servings: number;
  ingredients: Ingredient[];
  steps: RecipeStep[];
}
