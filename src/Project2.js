import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function Project2(){
    const [val,setVal] = useState(false);
    return(
        <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
            <div className="relative w-72 h-52 bg-zinc-500 rounded-md flex overflow-hidden">
                <img className={`shrink-0 transition-transform duration-500 ${val === false ? "-translate-x-[0%]": "-translate-x-[100%]"} xw-full h-full object-cover`} src="https://images.unsplash.com/photo-1522037576655-7a93ce0f4d10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className={`shrink-0 transition-transform duration-500 ${val === false ? "-translate-x-[0%]": "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1623135957659-235e4f0396cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <span onClick={()=>setVal(()=>!val)} className="w-8 h-8 cursor-pointer flex justify-center items-center bg-[#dadada8b] bottom-0 rounded-full absolute left-1/2 -translate-x-[50%] -translate-y-[50%] bg-transparent-[5]">
                <FaArrowRight/>
                </span>
            </div>  
        </div>
    )
}
export default Project2