import jobs from '../../../data/jobs.json';
import { notFound } from 'next/navigation';
import { Job } from '@/types/job';

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return jobs.map((job: Job) => ({
    id: job.id,
  }));
}

export default function JobDetailPage({ params }: Props) {
  const job = jobs.find((j) => j.id === params.id);
  if (!job) return notFound();

  return (
    <div className="container">
      <h1>{job.title}</h1>
      <p><strong>Role:</strong> {job.role}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description}</p>
      <a href="/">← Back to jobs</a>
    </div>
  );
}
