function Card({data, handleClick}) {
  const {songname, image, artist, added} = data;
  return (
    <div className='w-52 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative'>
      <div className='w-16 h-16 bg-orange-600 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className=''>
        <h3 className='font-semibold text-[18px]'>{songname}</h3>
        <h3 className='text-[15px] '>{artist}</h3>
      </div>
        <button onClick={handleClick} className={`px-2 py-2 ${added === false ? "bg-orange-600" : "bg-teal-700"} absolute text-white text-sm bottom-0 rounded-full ml-12`}>{added === false ? "Add to favourite" : "Added"}</button>
    </div>
  )
}

export default Card