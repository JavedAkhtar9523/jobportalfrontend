"use client";

import { Plus } from "lucide-react";

export default function ProfileAbout({ about }) {
  return (
    <section className="bg-white rounded-sm border border-gray-300 my-2 p-5">
      <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold mb-2">About</h3>

 <button className="flex hover:cursor-pointer items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
            <Plus className="w-4 h-4" /> Add
          </button>
      </div>
      <p className="text-gray-600 text-sm">{about || "No bio added yet."}</p>
    </section>
  );
}
