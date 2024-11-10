function Project1() {
  const data = [
    {img: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Apple Inc.", description: "Apple Inc. is an American multinational corporation and technology company headquartered and incorporated in Cupertino, California, in Silicon Valley."},

    {img: "https://etimg.etb2bimg.com/photo/90049545.cms", name: "Google.", description: "Google LLC is an American multinational corporation and technology company focusing on online advertising, search engine technology."},

    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZjPD3e_bDJWCAARocQcrLyiuT8iZDqTzrw&s", name: "Microsoft.", description: "Microsoft Corporation is an American multinational corporation and technology company headquartered in Washington. Its software products are the Windows."},
  ]
  const clickHandling = ()=>{alert("Hello World")};
  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index)=>(
        <div className="w-52 bg-zinc-100 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img className="w-full h-full object-cover" src={elem.img}/>
        </div>
        <div className="w-full px-3 py-4">
          <h1 className="font-semibold">{elem.name}</h1>
          <p className="text-xs mt-2">
            {elem.description}
          </p>
          <button onClick={clickHandling} className="px-1 py-1 mt-3 bg-zinc-400 rounded-md">About more</button>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Project1