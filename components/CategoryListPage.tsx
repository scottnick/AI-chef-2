
import React from 'react';
import { seedRecipes } from '../data/seedRecipes';
import { RecipeCandidate } from '../types';

interface CategoryListPageProps {
  category: string;
  onBack: () => void;
  onSelectRecipe: (id: string) => void;
}

const CategoryListPage: React.FC<CategoryListPageProps> = ({ category, onBack, onSelectRecipe }) => {
  const filteredRecipes = seedRecipes.filter(r => r.category === category);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 sticky top-0 bg-white/80 backdrop-blur-md z-20 py-2">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 active:scale-90 transition-transform"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h2 className="text-xl font-bold">{category}全系列</h2>
        <div className="ml-auto text-sm text-gray-400 font-medium">
          {filteredRecipes.length} 道食譜
        </div>
      </div>

      {/* Filter/Sort Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        <button className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold shadow-sm">綜合排序</button>
        <button className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold">高分優先</button>
        <button className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold">快速完成</button>
        <button className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-500 text-xs font-bold">低卡路里</button>
      </div>

      {/* Vertical List */}
      <div className="space-y-4">
        {filteredRecipes.map((recipe) => (
          <div 
            key={recipe.id}
            onClick={() => onSelectRecipe(recipe.id)}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex gap-4 p-3 active:scale-[0.98] transition-all"
          >
            <div className="w-28 h-28 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 relative">
              <i className="fa-solid fa-utensils text-gray-300 text-3xl"></i>
              {recipe.calories_est < 400 && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-bold">
                  HEALTHY
                </div>
              )}
            </div>
            <div className="flex-1 py-1 space-y-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-gray-800 line-clamp-1">{recipe.title}</h4>
                <button className="text-gray-300 hover:text-orange-500">
                  <i className="fa-regular fa-heart"></i>
                </button>
              </div>
              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                {recipe.intro}
              </p>
              <div className="flex gap-3 pt-2 text-[10px] font-bold text-gray-400">
                <span className="flex items-center gap-1">
                  <i className="fa-regular fa-clock text-orange-400"></i> {recipe.estimated_minutes}m
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-fire text-orange-400"></i> {recipe.calories_est}kcal
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-screwdriver-wrench text-orange-400"></i> {recipe.equipmentHint}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer hint */}
      <div className="py-8 text-center text-gray-300 text-sm font-medium">
        到底囉！試試拍照搜尋更多靈感
      </div>
    </div>
  );
};

export default CategoryListPage;
