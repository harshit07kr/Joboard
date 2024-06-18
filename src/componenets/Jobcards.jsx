import React from 'react';
import dayjs from 'dayjs';

const Jobcards = (props) => {
   const date1 = dayjs(Date.now());
   const diffInDays = date1.diff(props.postedon, 'day');
   return (
     <div className='mx-4 sm:mx-10 lg:mx-40 mb-4'>
         <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-4 bg-zinc-200 rounded-md border shadow-gray-500 hover:border-blue-500 hover:scale-105 duration-500'>
             <div className='flex flex-col items-start gap-3 w-full sm:w-auto'>
                 <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                 <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                 <div className='flex flex-wrap items-center gap-2'>
                     {props.skills.map((skill, i) => (
                         <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-gray-500'>{skill}</p>
                     ))}
                 </div>
             </div>
             <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto'>
                 <p className='text-gray-500'>Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
                 <a href={props.link} target="_blank" rel="noopener noreferrer" className='w-full sm:w-auto'>
                     <button className='w-full sm:w-auto text-blue-500 border border-black px-10 py-2 rounded-md hover:border-blue-800'>Apply</button>
                 </a>
             </div>
         </div>
     </div>
   );
}

export default Jobcards;
