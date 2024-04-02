
const data = [
    {key: 1, title: "Dr. Rick McCartney", role: "CEO"},
    {key: 2, title: "Chris Koha", role: "COO"},
    {key: 3, title: "Caroline Nieto", role: "Chief Product Officer"},
    {key: 4, title: "Victor Albertos", role: "CTO"},
    {key: 5, title: "Dr. Jana Hapfelmeier", role: "Chief Innovation Officer"},
    {key: 6, title: "Michael Robin", role: "VP of Marketing"},
    {key: 7, title: "Adrian Rubio", role: "VP of Engineering"},
    {key: 8, title: "Cy Serrano", role: "VP of Product"},
    {key: 9, title: "Lenya McGrath", role: "VP of Partnerships"},
]


function List() {
  return (
    <div className="list-container">
      {data.map((item, index) => {
        return (
            <div key={index} className="listelem w-full py-10 px-10  flex 
                items-center justify-between border-b-2 border-black ">
                <div className="flex items-center gap-10 text-5xl">
                    <h3 className="opacity-25">0{item.key}</h3>
                    <h1 className="">{item.title}</h1>
                </div>
                <h3 className="font-[Sansita] text-xl font-semibold">{item.role}</h3>
                </div>
        )
      })}
    </div>
  )
}

export default List
