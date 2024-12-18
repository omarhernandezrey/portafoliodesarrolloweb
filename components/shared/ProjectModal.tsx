"use client";
import { Project } from "../../types";
import { motion } from "framer-motion";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-800 text-white rounded-lg p-8 max-w-4xl relative"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl hover:text-gray-400"
        >
          ✖
        </button>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {project.video && (
          <video controls className="w-full mb-4 rounded-lg">
            <source src={project.video} type="video/mp4" />
          </video>
        )}

        <div className="flex gap-4">
          <a
            href={project.github}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Código
          </a>
          <a
            href={project.demo}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
