import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddJob = () => {
    const navigate = useNavigate()
    const handleAddJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)
        const {min,max,currency, ...newJob} = initialData;
        console.log(min,max,currency, newJob)
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        newJob.salaryRange = {min,max,currency}
        console.log(newJob)

        //send to database
        fetch('http://localhost:4000/jobs',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newJob)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "You're work TEMPhas been saved",
                                showConfirmButton: false,
                                timer: 1500
                              });
                              navigate('/myPostedJobs')
                        }
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <h1 className="text-3xl">add a job</h1>
            <form onSubmit={handleAddJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name='title' placeholder="job title" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name='location' placeholder="job location" className="input input-bordered" required />
                </div>
                {/* job type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select name='jobType' className="select select-ghost w-full border ">
                        <option disabled selected>Pick the best job</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>part-time</option>
                    </select>
                </div>
                {/* job category */}
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select name='category' className="select select-ghost w-full border-2 ">
                        <option disabled selected>Pick the best Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Teaching</option>
                        <option>Doctor</option>
                        <option>Programmer</option>
                    </select>
                </div>
                {/* salary range */}
                <div className='grid grid-cols-1 lg:grid-cols-3 items-end gap-4'>
                    <div className="form-control">
                        <p>Salary Range</p>
                        <input type="number" name='min' placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="number" name='max' placeholder="Max" className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                    <select name='currency' className="select select-ghost w-full border-2 ">
                        <option disabled selected>Salary Range</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>NRI</option>
                        <option>URO</option>
                        <option>BIT COIN</option>
                    </select>
                </div>
                {/* job description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <textarea name='description' className=" lg:w-[1200px] textarea textarea-bordered " placeholder="Bio"></textarea>
                </div>
                </div>
                 {/* company name */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">company name</span>
                    </label>
                    <input type="text" name='company' placeholder=" company name" className="input input-bordered" required />
                </div>
                 {/* job Requirements */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">Requirements</span>
                    </label>
                    <textarea name='requirements' className=" lg:w-[1200px] textarea textarea-bordered " placeholder="put each requirements in a new line"></textarea>
                </div>
                 {/* job responsibilities */}
                 <div className="form-control">
                    <label className="label">
                        <span className="label-text">responsibilities</span>
                    </label>
                    <textarea name='responsibilities' className=" lg:w-[1200px] textarea textarea-bordered " placeholder="write each responsibilities in a new line"></textarea>
                </div>
                {/* hr name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">hr_name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder=" hr_name" className="input input-bordered" required />
                </div>
                {/* Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" name='applicationDeadline' placeholder=" Deadline" className="input input-bordered" required />
                </div>
                {/* hr email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" name='hr_email' placeholder=" hr email" className="input input-bordered" required />
                </div>
                {/* company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">company logo</span>
                    </label>
                    <input type="text" name='company_logo' placeholder=" company logo" className="input input-bordered" required />
                </div>
                {/* submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;