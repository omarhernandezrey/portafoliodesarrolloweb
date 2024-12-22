import React from 'react';
import Card from '@/components/shared/Card';

const ProjectsSection: React.FC = () => {
    return (
        <section className="py-8 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-100 mb-6">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
