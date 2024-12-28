import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    const {title,company,applicationDeadline ,_id} = job;
    return (
        <div className='border p-9 mx-auto text-center'>
            <h1 className='text-5xl text-red-300'>job title : {title}</h1>
            <h3 className='text-2xl text-green-300'>company :{company}</h3>
            <p className='text-xl text-red-900'>deadline : {applicationDeadline}</p>
            <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-primary'>Apply Now</button>
               
            </Link>
        </div>
    );
};

export default JobDetails;