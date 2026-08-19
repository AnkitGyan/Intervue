import React from 'react'
import { getInterviewers } from '@/actions/explore';
import PageHeader from '@/components/reusables';
import ExploreGrid from '@/components/ExploreGrid';

export default async function page() {
  const interviewers = await getInterviewers();
  return (
   <main className="min-h-screen bg-black">
     <PageHeader
        label="Explore"
        gray="Find your"
        gold="expert interviewer"
        description="Browse senior engineers from top companies."
      />
       <div className="max-w-6xl mx-auto px-8 xl:px-0 py-10">
        <ExploreGrid interviewers={interviewers} />
      </div>
   </main>
  )
}
