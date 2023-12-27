import personImg from "../assets/person.svg"
const Person = ()=>{
        return(
            <div className="flex items-center justify-center p-[2rem] bg-teal-300 h-[45vh]">
                <div className="grid grid-cols-3 gap-4  w-[90vw] w-max-[1120px]">
                    <div className="col-span-2 border border-red-800 flex items-start justify-center flex-col wrap p-4">
                        <h2>Musa Sayar</h2>
                        <h6>Junior Front-End Developer</h6>
                    </div>
                    <div className="p-5 hidden md:flex  w-56 h-56  bg-teal-600 border-4 border-gray-50 rounded-full drop-shadow-xl" >
                        <img className="rounded-full  w-[100%] h-[100%] " src={personImg}/>
                    </div>

                </div>


            </div>
        )

}

export default Person;