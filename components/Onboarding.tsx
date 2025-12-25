
import React, { useState } from 'react';
import { UserProfile, Allergy, DietaryRule, EquipmentType } from '../types';
import { ALLERGY_OPTIONS, DIET_OPTIONS, EQUIPMENT_OPTIONS } from '../constants';

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
  initialData?: UserProfile;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete, initialData }) => {
  const [step, setStep] = useState(1);
  const [displayName, setDisplayName] = useState(initialData?.displayName || '');
  const [allergies, setAllergies] = useState<string[]>(initialData?.allergies || []);
  const [dietaryRules, setDietaryRules] = useState<string[]>(initialData?.dietaryRules || []);
  const [equipment, setEquipment] = useState<string[]>(initialData?.equipment || []);

  const totalSteps = 5;

  const toggleSelection = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleNext = () => {
    if (step === 1 && !displayName.trim()) return;
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const profile: UserProfile = {
      displayName,
      allergies,
      dietaryRules,
      equipment,
      onboardingComplete: true,
    };
    onComplete(profile);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">如何稱呼您？</h2>
            <p className="text-gray-500">讓我們開始客製化您的主廚體驗。</p>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="輸入您的暱稱"
              className="w-full p-4 border-2 border-orange-100 rounded-2xl focus:border-orange-500 outline-none text-lg transition-all"
              autoFocus
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">有過敏原嗎？</h2>
            <p className="text-gray-500">我們會避開含有這些食材的食譜。</p>
            <div className="grid grid-cols-2 gap-3">
              {ALLERGY_OPTIONS.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleSelection(allergies, setAllergies, item)}
                  className={`p-4 rounded-2xl border-2 transition-all text-left ${
                    allergies.includes(item) ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-100 bg-white text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">飲食習慣？</h2>
            <p className="text-gray-500">選擇您的偏好或限制。</p>
            <div className="grid grid-cols-2 gap-3">
              {DIET_OPTIONS.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleSelection(dietaryRules, setDietaryRules, item)}
                  className={`p-4 rounded-2xl border-2 transition-all text-left ${
                    dietaryRules.includes(item) ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-100 bg-white text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">可用器材？</h2>
            <p className="text-gray-500">讓我們知道您廚房有哪些幫手。</p>
            <div className="grid grid-cols-2 gap-3">
              {EQUIPMENT_OPTIONS.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleSelection(equipment, setEquipment, item)}
                  className={`p-4 rounded-2xl border-2 transition-all text-left ${
                    equipment.includes(item) ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-100 bg-white text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">確認資訊</h2>
            <p className="text-gray-500">檢查一下設定是否正確。</p>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 space-y-4 shadow-sm">
              <div>
                <span className="text-sm text-gray-400 block">暱稱</span>
                <span className="font-medium">{displayName}</span>
              </div>
              <div className="border-t pt-4">
                <span className="text-sm text-gray-400 block">過敏原</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {allergies.length > 0 ? allergies.map(a => <span key={a} className="px-2 py-1 bg-gray-100 rounded-lg text-xs">{a}</span>) : <span className="text-sm text-gray-300">無</span>}
                </div>
              </div>
              <div className="border-t pt-4">
                <span className="text-sm text-gray-400 block">飲食習慣</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {dietaryRules.length > 0 ? dietaryRules.map(d => <span key={d} className="px-2 py-1 bg-gray-100 rounded-lg text-xs">{d}</span>) : <span className="text-sm text-gray-300">無</span>}
                </div>
              </div>
              <div className="border-t pt-4">
                <span className="text-sm text-gray-400 block">廚房器材</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {equipment.length > 0 ? equipment.map(e => <span key={e} className="px-2 py-1 bg-gray-100 rounded-lg text-xs">{e}</span>) : <span className="text-sm text-gray-300">無</span>}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 pb-24">
      <div className="w-full max-w-md">
        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`h-2 w-8 rounded-full transition-all ${
                  i <= step ? 'bg-orange-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-400">Step {step} of 5</span>
        </div>

        {renderStep()}

        {/* Navigation */}
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-gray-50/80 backdrop-blur-md flex gap-4 max-w-md mx-auto">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="flex-1 py-4 px-6 rounded-2xl bg-white border border-gray-200 text-gray-600 font-semibold shadow-sm"
            >
              返回
            </button>
          )}
          {step < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={step === 1 && !displayName.trim()}
              className={`flex-[2] py-4 px-6 rounded-2xl text-white font-semibold shadow-lg transition-all ${
                step === 1 && !displayName.trim() ? 'bg-gray-300 cursor-not-allowed' : 'bg-orange-500 active:scale-95'
              }`}
            >
              下一步
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex-[2] py-4 px-6 rounded-2xl bg-orange-600 text-white font-semibold shadow-lg active:scale-95 transition-all"
            >
              完成設定
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
