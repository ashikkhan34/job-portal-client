import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../hook/UseAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} = useParams()
    const {user} = UseAuth()
    const navigate = useNavigate()

    const submitJobApplication = e =>{
        e.preventDefault()
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedIn,github,resume)

        const jobApplication = {
            job_id:id,
            applicant_email:user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:4000/job-applications',{
            method:'post',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You're work TEMPhas been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myApplications')
            }
        })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
                <form onSubmit={submitJobApplication} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn URL</span>
                        </label>
                        <input type="url" name='linkedIn' placeholder="LinkedIn" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github URL</span>
                        </label>
                        <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Resume URL</span>
                        </label>
                        <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;