'use client';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      router.push('/pages/login');
      return;
    }

    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/Users/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Include the token in the request headers
          },
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfileData();
  }, [router]);

  if (error) {
    return <div className="min-h-screen bg-gray-900 text-white p-6">Error: {error}</div>;
  }

  if (!profileData) {
    return <div className="min-h-screen bg-gray-900 text-white p-6">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <img src="/avatar.jpg" alt="Avatar" className="w-28 h-28 rounded-full " />
              <div className='pl-10'>
                <h1 className="text-3xl font-bold">{profileData.profile.username || 'N/A'}</h1>
                <p className="text-gray-400">{profileData.profile.email || 'N/A'}</p>
                <p className="text-gray-400">Joined: {new Date(profileData.profile.created_at).toLocaleDateString() || 'N/A'}</p>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              {profileData.achievements.length > 0 ? (
                <ul>
                  {profileData.achievements.map((achievement) => (
                    <li key={achievement.title} className="mb-4">
                      <h3 className="text-lg font-bold">{achievement.title}</h3>
                      <p>{achievement.description || 'N/A'}</p>
                      <p className="text-gray-400">Earned on: {new Date(achievement.earned_at).toLocaleDateString() || 'N/A'}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No achievements found.</p>
              )}
            </div>
            <div className="bg-gray-700 p-4 rounded-lg mb-6">
              <h2 className="text-2xl font-bold mb-4">Game Sessions</h2>
              {profileData.gameSessions.length > 0 ? (
                <ul>
                  {profileData.gameSessions.map((session) => (
                    <li key={session.start_time} className="mb-4">
                      <p>Game: {session.title || 'N/A'}</p>
                      <p>Start Time: {new Date(session.start_time).toLocaleString() || 'N/A'}</p>
                      <p>End Time: {session.end_time ? new Date(session.end_time).toLocaleString() : 'Ongoing'}</p>
                      <p>Score: {session.score || 'N/A'}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No game sessions found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
