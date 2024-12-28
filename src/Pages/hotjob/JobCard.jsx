import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FiDollarSign } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { _id,title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mt-10">
                <div className='flex gap-3'>
                    <figure>
                        <img
                            className='w-16'
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h3 className="text-2xl">{company}</h3>
                        <p className='flex items-center gap-1'> <CiLocationOn/>
                        {location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className='flex gap-2 flex-wrap'>
                        {
                            requirements.map(skill => <p
                            className='border rounded-xl text-center px-2 hover:text-blue-800 hover:bg-slate-400 hover:duration-500'
                            >{skill}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end mt-5">
                        <p className='flex items-center'>Salary : <FiDollarSign />{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                        <Link to={`/job-details/${_id}`}>
                        <button className="btn btn-primary">Apply</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;