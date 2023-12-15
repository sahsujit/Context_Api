import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div className=" flex flex-col     w-[680px]  mx-auto   ">
            <Header />
            <div className='flex flex-col gap-7'>
                <div  >
                    <button 
                     className="py-1 border px-4 top-0 left-0  border-slate-400   "
                     onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 >
                    Blog Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default TagPage