"use client";

import { Plus } from "lucide-react";

export default function ProfileExperience({ experience = [], education = [] }) {
  return (
    <>
      {/* --------- Experience Section --------- */}
      <section className="bg-white rounded-sm border border-gray-300 my-2 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Experience</h3>
          <button className="flex hover:cursor-pointer items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>

        {experience.length === 0 && (
          <p className="text-gray-500">No experience added yet.</p>
        )}

        {experience.map((job, idx) => (
          <div
            key={idx}
            className="mb-4 pb-3 border-b border-gray-200 last:border-0"
          >
            <h4 className="font-medium">{job.role}</h4>
            <p className="text-sm text-gray-600">{job.company}</p>
            <p className="text-xs text-gray-500">
              {job.start} – {job.end || "Present"}
            </p>
            {job.summary && (
              <p className="text-sm text-gray-700 mt-2">{job.summary}</p>
            )}
          </div>
        ))}
      </section>

      {/* --------- Education Section --------- */}
      <section className="bg-white rounded-sm border border-gray-300 my-2 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Education</h3>
          <button className="hover:cursor-pointer flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>

        {education.length === 0 && (
          <p className="text-gray-500">No education added yet.</p>
        )}

        {education.map((edu, idx) => (
          <div
            key={idx}
            className="mb-4 pb-3 border-b border-gray-200 last:border-0"
          >
            <h4 className="font-medium">{edu.degree}</h4>
            <p className="text-sm text-gray-600">{edu.school}</p>
            <p className="text-xs text-gray-500">
              {edu.start} – {edu.end || "Present"}
            </p>
            {edu.details && (
              <p className="text-sm text-gray-700 mt-2">{edu.details}</p>
            )}
          </div>
        ))}
      </section>

        <section className="bg-white rounded-sm border border-gray-300 my-2 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Skills</h3>
          <button className="hover:cursor-pointer flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>
      </section>
    </>
  );
}


