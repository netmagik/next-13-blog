import { Suspense } from 'react';
import Link from 'next/link';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDir';


// Create static params for SSG 
export async function generateStaticParams() {
  const res = await fetch("https://api.github.com/users/netmagik/repos");
  const repos = await res.json();
  return repos.map(repo => ({ name: repo.id.toString()}));
}


const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};
export default RepoPage;


