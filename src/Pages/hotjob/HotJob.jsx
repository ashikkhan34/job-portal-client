import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJob = () => {
    const[jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h3>
                <div className="text-3xl">Total jobs : {jobs.length}</div>
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    jobs.map(job => <JobCard job={job} key={job._id} ></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJob;