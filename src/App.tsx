
const data = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
]

function App() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="relative p-5 bg-[#F5F5F5]/50 border border-[#E2E2E2] rounded-lg grid grid-cols-5 gap-5">
        <div className="bg-purple-600/50 blur-2xl h-60 w-60 absolute top-0 left-0 animate-pulse -z-10" />
        <div className="bg-orange-600/50 blur-2xl h-60 w-60 absolute bottom-0 right-0 animate-pulse -z-10" />
      {data.map((data)=>
      <button className={`rounded-lg p-3 h-28 w-40 bg-white flex justify-center items-center hover:bg-opacity-80 shadow-lg ${false && "bg-green-600/20 border border-green-600 border-opacity-30 text-green-600 font-semibold"}`}>
      <p className="truncate text-ellipsis" title={`${data}`}>{data}</p>
    </button>
      )}

      </div>
    </div>
  );
}

export default App;
