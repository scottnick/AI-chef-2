
import React, { useState, useEffect } from 'react';
import { UserProfile } from './types';
import { STORAGE_KEYS } from './constants';
import Onboarding from './components/Onboarding';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import CameraPage from './components/CameraPage';
import ProfilePage from './components/ProfilePage';
import CategoryListPage from './components/CategoryListPage';

type ViewState = 'main' | 'category_list' | 'recipe_detail';

const App: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'camera' | 'profile'>('home');
  const [viewState, setViewState] = useState<ViewState>('main');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedProfile = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
    setIsLoading(false);
  }, []);

  const handleOnboardingComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  };

  const handleResetProfile = () => {
    if (userProfile) {
      const updatedProfile = { ...userProfile, onboardingComplete: false };
      setUserProfile(updatedProfile);
    }
  };

  // Navigation handlers
  const navigateToCategory = (category: string) => {
    setSelectedCategory(category);
    setViewState('category_list');
  };

  const backToHome = () => {
    setViewState('main');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!userProfile || !userProfile.onboardingComplete) {
    return <Onboarding onComplete={handleOnboardingComplete} initialData={userProfile || undefined} />;
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={(tab) => {
      setActiveTab(tab);
      setViewState('main'); // Switch back to main view when tab changes
    }}>
      {activeTab === 'home' && (
        <>
          {viewState === 'main' && <HomePage onSelectCategory={navigateToCategory} />}
          {viewState === 'category_list' && (
            <CategoryListPage 
              category={selectedCategory} 
              onBack={backToHome} 
              onSelectRecipe={(id) => console.log('Select Recipe', id)} 
            />
          )}
        </>
      )}
      {activeTab === 'camera' && <CameraPage />}
      {activeTab === 'profile' && (
        <ProfilePage userProfile={userProfile} onEditProfile={handleResetProfile} />
      )}
    </Layout>
  );
};

export default App;
