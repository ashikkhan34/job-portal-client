import React, { useEffect, useState } from 'react';
import UseAuth from '../hook/UseAuth';

const MyPostedJobs = () => {
    const [jobs,setJobs] = useState([])
    const {user} = UseAuth()

    useEffect(() => {
        fetch(`http://localhost:4000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    },[user.email])
    return (
        <div>
            <h1> MyPostedJobs : {jobs.length}</h1>
        </div>
    );
};

export default MyPostedJobs;