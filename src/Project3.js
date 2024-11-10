function Project3({values, handleClick, index}) {
  
  const {name,image,profession,friends} = values;
  return (
    <div className="w-52 bg-white rounded-md overflow-hidden ">
      <div className="w-full h-40 bg-sky-200">
        <img className="w-full h-full object-cover object-[center_top]" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-[15px] mt-1">{profession}</h5>
        <button onClick={()=>handleClick(index)} className={`px-3 py-1 text-sm text-white ${friends === true ? "bg-zinc-600": "bg-blue-500"} font-semibold rounded-md mt-3`}>{friends === true ? "Friends": "Add Friend"}</button>
      </div>
    </div>
  )
}

export default Project3