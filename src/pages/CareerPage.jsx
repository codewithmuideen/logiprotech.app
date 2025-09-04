import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { FaHome, FaBriefcase, FaPaperPlane } from "react-icons/fa";

export default function CareerPage() {
  const [openModal, setOpenModal] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      description: "Build and maintain user-facing features using React and Tailwind CSS.",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Lagos, Nigeria",
      type: "Hybrid",
      description: "Design scalable APIs and database solutions with Node.js and MySQL.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
      description: "Create modern, user-friendly interfaces and design systems.",
    },
  ];

  const handleOpen = (jobId) => setOpenModal(jobId);
  const handleClose = () => setOpenModal(null);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-green-950 text-white min-h-screen">
      {/* Back to Home */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 bg-gray-800/80 hover:bg-lime-500 hover:text-black 
        transition-all px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
      >
        <FaHome className="text-lg" /> Home
      </Link>

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto pt-28 pb-16 px-6">
        <FaBriefcase className="text-6xl text-lime-400 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Join Our <span className="text-lime-400">Team</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          We’re building innovative solutions and are always looking for passionate people.  
          Explore open roles below and become part of our mission.
        </p>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 lg:px-20 pb-20">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 border border-gray-700 
            rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
            <p className="text-gray-400 mb-2">{job.location} • {job.type}</p>
            <p className="text-gray-300 text-sm mb-6">{job.description}</p>
            <button
              onClick={() => handleOpen(job.id)}
              className="w-full bg-lime-500 hover:bg-lime-600 text-black px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Job Application Modal */}
      {jobs.map((job) => (
        <Dialog key={job.id} open={openModal === job.id} onClose={handleClose} className="relative z-50">
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">
            <Dialog.Panel className="bg-gray-900 text-white rounded-2xl max-w-lg w-full p-8 shadow-lg">
              <Dialog.Title className="text-2xl font-bold mb-4">Apply for {job.title}</Dialog.Title>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-lime-500 outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-lime-500 outline-none"
                  required
                />
                <input
                  type="file"
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-lime-500 outline-none"
                />
                <textarea
                  rows="4"
                  placeholder="Cover Letter / Message"
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-lime-500 outline-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-lime-500 hover:bg-lime-600 text-black px-6 py-3 rounded-xl font-semibold shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Application Submitted! (Hook backend here)");
                    handleClose();
                  }}
                >
                  Submit Application
                </button>
              </form>

              <button onClick={handleClose} className="mt-4 text-gray-400 hover:text-white">
                Cancel
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      ))}
    </section>
  );
}
