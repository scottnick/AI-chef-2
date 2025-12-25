
import React, { useState } from 'react';
import { seedRecipes } from '../data/seedRecipes';
import { RecipeCandidate } from '../types';

interface HomePageProps {
  onSelectCategory: (category: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectCategory }) => {
  const [top5Tab, setTop5Tab] = useState<'綜合' | '評分最高' | '最流行' | '我最常煮' | '我的最愛'>('綜合');
  
  const categories = ['麵類', '飯類', '湯品', '火鍋', '甜點'];

  // Helper to get 4 recipes per category
  const getCategoryRecipes = (cat: string) => {
    return seedRecipes.filter(r => r.category === cat).slice(0, 4);
  };

  // Mock Top 5 logic (actual logic would use scoring/history in M5)
  const getTop5Recipes = () => {
    return seedRecipes.slice(0, 5);
  };

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex justify-between items-center px-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">今天想煮什麼？</h1>
          <p className="text-gray-500 text-sm">為您挑選的美味靈感</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
          <i className="fa-solid fa-utensils text-orange-500"></i>
        </div>
      </div>

      {/* Top 5 Hero Section */}
      <section className="space-y-4">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-1 px-2">
          {['綜合', '評分最高', '最流行', '我最常煮', '我的最愛'].map((tab) => (
            <button
              key={tab}
              onClick={() => setTop5Tab(tab as any)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                top5Tab === tab ? 'bg-orange-500 text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar px-2 snap-x snap-mandatory">
          {getTop5Recipes().map((recipe) => (
            <div 
              key={recipe.id} 
              className="min-w-[85%] snap-center bg-orange-500 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl"
            >
              <div className="relative z-10 space-y-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {recipe.category}
                </span>
                <h2 className="text-2xl font-bold line-clamp-1">{recipe.title}</h2>
                <p className="text-orange-100 text-sm line-clamp-2 opacity-90">{recipe.intro}</p>
                <div className="flex gap-3 pt-2 text-xs font-medium">
                  <span><i className="fa-regular fa-clock mr-1"></i>{recipe.estimated_minutes} min</span>
                  <span><i className="fa-solid fa-fire mr-1"></i>{recipe.calories_est} kcal</span>
                </div>
              </div>
              <i className="fa-solid fa-bowl-food absolute -right-6 -bottom-6 text-white/20 text-9xl"></i>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Scroll (Foodpanda Style) */}
      <div className="space-y-8 px-2">
        {categories.map((cat) => (
          <section key={cat} className="space-y-4">
            <div className="flex justify-between items-end">
              <h3 className="font-bold text-xl flex items-center gap-2">
                {cat}
              </h3>
              <button 
                onClick={() => onSelectCategory(cat)}
                className="text-orange-500 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
              >
                查看更多 <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
            
            <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x">
              {getCategoryRecipes(cat).map((recipe) => (
                <div 
                  key={recipe.id} 
                  className="min-w-[140px] max-w-[140px] snap-start bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col active:scale-95 transition-transform"
                >
                  <div className="h-28 bg-gray-100 flex items-center justify-center relative">
                    <i className="fa-solid fa-image text-gray-300 text-3xl"></i>
                    <div className="absolute top-2 right-2 bg-white/80 backdrop-blur px-2 py-0.5 rounded-lg text-[10px] font-bold text-orange-600">
                      {recipe.estimated_minutes}m
                    </div>
                  </div>
                  <div className="p-3 space-y-1 flex-1 flex flex-col">
                    <h4 className="font-bold text-sm line-clamp-1 text-gray-800">{recipe.title}</h4>
                    <p className="text-[10px] text-gray-400 line-clamp-2 leading-tight">
                      {recipe.intro}
                    </p>
                    <div className="pt-2 mt-auto">
                      <div className="flex flex-wrap gap-1">
                        {recipe.heroIngredients?.slice(0, 2).map(ing => (
                          <span key={ing} className="bg-gray-50 text-gray-500 text-[9px] px-1.5 py-0.5 rounded">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Fake card to trigger "View More" */}
              <button 
                onClick={() => onSelectCategory(cat)}
                className="min-w-[100px] bg-gray-50 rounded-2xl flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200 text-gray-400 active:bg-gray-100"
              >
                <i className="fa-solid fa-circle-plus text-xl"></i>
                <span className="text-[10px] font-bold uppercase">更多</span>
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
