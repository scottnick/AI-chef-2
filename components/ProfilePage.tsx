
import React from 'react';
import { UserProfile } from '../types';

interface ProfilePageProps {
  userProfile: UserProfile;
  onEditProfile: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userProfile, onEditProfile }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 py-4">
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
          <span className="text-2xl text-orange-500 font-bold">
            {userProfile.displayName.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h2 className="text-xl font-bold">{userProfile.displayName}</h2>
          <p className="text-gray-500 text-sm">您的專屬主廚助理</p>
        </div>
        <button
          onClick={onEditProfile}
          className="ml-auto p-2 text-gray-400 hover:text-orange-500 transition-colors"
        >
          <i className="fa-solid fa-gear text-xl"></i>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <i className="fa-solid fa-ban text-orange-500"></i> 過敏原
          </h3>
          <div className="flex flex-wrap gap-2">
            {userProfile.allergies.length > 0 ? (
              userProfile.allergies.map(a => (
                <span key={a} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium">
                  {a}
                </span>
              ))
            ) : (
              <span className="text-gray-400 text-sm">尚未設定</span>
            )}
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <i className="fa-solid fa-leaf text-green-500"></i> 飲食習慣
          </h3>
          <div className="flex flex-wrap gap-2">
            {userProfile.dietaryRules.length > 0 ? (
              userProfile.dietaryRules.map(d => (
                <span key={d} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                  {d}
                </span>
              ))
            ) : (
              <span className="text-gray-400 text-sm">尚未設定</span>
            )}
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <i className="fa-solid fa-kitchen-set text-blue-500"></i> 現有器材
          </h3>
          <div className="flex flex-wrap gap-2">
            {userProfile.equipment.length > 0 ? (
              userProfile.equipment.map(e => (
                <span key={e} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                  {e}
                </span>
              ))
            ) : (
              <span className="text-gray-400 text-sm">尚未設定</span>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={onEditProfile}
        className="w-full py-4 text-gray-500 text-sm font-medium bg-gray-100 rounded-2xl active:bg-gray-200 transition-colors"
      >
        重新修改個人偏好
      </button>
    </div>
  );
};

export default ProfilePage;
