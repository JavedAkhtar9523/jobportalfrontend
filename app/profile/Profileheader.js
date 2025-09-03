"use client";
import Image from "next/image";
import { useState } from "react";
import { Pencil } from 'lucide-react';

export default function ProfileHeader({ user }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(user.followers || 0);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    headline: user.headline,
    location: user.location,
  });

  // Toggle follow
  const handleFollow = () => {
    setFollowers((prev) => (isFollowing ? prev - 1 : prev + 1));
    setIsFollowing(!isFollowing);
  };

  // Save edits
  const handleSave = () => {
    user.name = formData.name;
    user.headline = formData.headline;
    user.location = formData.location;
    setIsEditOpen(false);
  };

  return (
    <div className="bg-white shadow-md  overflow-hidden">
      {/* Cover Image */}
  <div className="relative w-full h-36 md:h-48 bg-gray-200">
    <Image
      src={user.cover || "/profile-cover.jpg"}
      alt="Cover"
      fill
      className="object-cover"
      priority
    />
    {/* Edit button */}
    <button
      onClick={() => setIsEditOpen(true)}
      className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 hover:cursor-pointer"
    >
      <Pencil size={16} />
    </button>
  </div>

  {/* Profile Info */}
  <div className="relative p-6">
    {/* Avatar */}
    <img
      src={user.avatar || "/profile-avatar.png"}
      alt="Profile"
      className="absolute -top-16 left-16 md:left-24 w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
    />

    {/* Content Wrapper */}
    <div className="md:ml-56 mt-18 sm:mt-0 px-2.5  flex justify-between items-start">
      {/* Left: Info */}
      <div className="-mt-2 ">
        <h2 className="text-lg sm:text-xl font-semibold">{formData.name}</h2>
        <p className="text-sm sm:text text-gray-600">{formData.headline}</p>
        <p className="text-sm text-gray-500">{formData.location}</p>

        {/* Stats */}
        <div className="flex gap-6 mt-3 text-sm text-gray-700">
          <span>{followers} Followers</span>
          <span>{user.following} Following</span>
          <span>{user.connections}+ Connections</span>
        </div>
      </div>

      {/* Right: Follow Button */}
      <button
        onClick={handleFollow}
        className={` px-2 text-sm  sm:text sm:px-4 py-1.5 rounded-xl border transition hover:cursor-pointer ${
          isFollowing ? "border-blue-700 text-blue-700" : "border-gray-700 text-gray-700"
        }`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  </div>



      {/* Edit Modal */}
      {/* {isEditOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000080]">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>

            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border p-2 rounded-lg mb-3"
            />

            <label className="block mb-2 text-sm font-medium">Headline</label>
            <input
              type="text"
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
              className="w-full border p-2 rounded-lg mb-3"
            />

            <label className="block mb-2 text-sm font-medium">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full border p-2 rounded-lg mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsEditOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
