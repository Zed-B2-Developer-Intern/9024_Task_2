'use client';

import jobs from '../data/jobs.json';
import Link from 'next/link';
import { useState } from 'react';
import { Job } from '@/types/job';

export default function HomePage() {
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');

  const filteredJobs = jobs.filter((job: Job) => {
    return (
      (role === '' || job.role.toLowerCase().includes(role.toLowerCase())) &&
      (location === '' || job.location.toLowerCase().includes(location.toLowerCase()))
    );
  });

  return (
    <div className="container">
      <h1>Job Board</h1>
      <input placeholder="Filter by role" onChange={(e) => setRole(e.target.value)} />
      <input placeholder="Filter by location" onChange={(e) => setLocation(e.target.value)} />

      {filteredJobs.map((job) => (
        <div key={job.id} className="job-card">
          <h2>{job.title}</h2>
          <p>{job.role} — {job.location}</p>
          <Link href={`/job/${job.id}`}>View Details</Link>
        </div>
      ))}

      {filteredJobs.length === 0 && <p>No jobs found</p>}
    </div>
  );
}
