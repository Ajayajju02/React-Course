function Table(){
  return (
    <div className="w-[500px] h-[320px] bg-[#7A7A7A] ml-[30px] mt-[30px] text-white rounded-[12px]">
      <div className="flex justify-between items-center p-1 font-bold">
        <label className="ml-8 ">
          RANK
        </label>
        <label>
          USERNAME
        </label>
        <label className="mr-8">
          CHIP COUNT
        </label>
      </div>
        <div className="w-[450px] h-[250px] bg-black rounded-md ml-[25px] mt-[6px]">
          <div className="bg-black p-4 rounded-md">
          <table className="w-full text-white">
            <tbody className="flex flex-col">
             <tr className="flex justify-between">
             <td className="text-left ">1</td>
              <td className="text-center">Kunnal</td>
              <td className="text-right">96%</td>
             </tr >
             <hr className="w-[420px] border-[1px] border-gray-800 mt-2"/>
             <tr className="flex justify-between mt-4">
             <td className="text-left ">2</td>
              <td className="text-center">Raju</td>
              <td className="text-right">58%</td>
             </tr>
             <hr className="w-[420px] border-[1px] border-gray-800 mt-2"/>
             <tr className="flex justify-between mt-3">
             <td className="text-left ">3</td>
              <td className="text-center">Ankit</td>
              <td className="text-right">96%</td>
             </tr>
             <hr className="w-[420px] border-[1px] border-gray-800 mt-2"/>
             <tr className="flex justify-between mt-3">
             <td className="text-left ">4</td>
              <td className="text-center">Anshu</td>
              <td className="text-right">99%</td>
             </tr>
             <hr className="w-[420px] border-[1px] border-gray-800 mt-2"/>
             <tr className="flex justify-between mt-3">
             <td className="text-left ">5</td>
              <td className="text-center">Munnu</td>
              <td className="text-right">80%</td>
             </tr>
            </tbody>
          </table>
          </div>
        </div>
    </div>
  );
}

export default Table;
