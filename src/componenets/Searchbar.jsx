import PreviousMap from 'postcss/lib/previous-map';
import React, { useState } from 'react';

const Searchbar = (props) => {
    const [jobcriteria,setjobcriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: "",

    })

    const handlechange=(e)=>{
        setjobcriteria((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const search = async() => {
        await props.fetchjobcustom(jobcriteria);
    }
  return (
    <div className="flex flex-wrap gap-4 my-4 justify-center px-4 sm:px-10">
      <select onChange={handlechange} name="title" value={jobcriteria.title} className="w-1/3 sm:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden >Job Role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <select onChange={handlechange} name="type" value={jobcriteria.type} className="w-1/3 sm:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden>Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select onChange={handlechange} name="location" value={jobcriteria.location} className="w-1/3 sm:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden>Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select onChange={handlechange} name="experience" value={jobcriteria.experience} className="w-1/3 sm:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button onClick={search} className="w-1/2 sm:w-64 py-3 bg-blue-500 font-bold text-lg rounded-md text-white hover:scale-105 duration-500">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
