
import { Allergy, DietaryRule, EquipmentType } from './types';

export const ALLERGY_OPTIONS = Object.values(Allergy);
export const DIET_OPTIONS = Object.values(DietaryRule);
export const EQUIPMENT_OPTIONS = Object.values(EquipmentType);

export const STORAGE_KEYS = {
  USER_PROFILE: 'user_profile_v1',
  RECIPE_FEEDBACK: 'recipe_feedback_v1',
  FAVORITES: 'favorites_v1',
  HISTORY: 'history_v1',
};
