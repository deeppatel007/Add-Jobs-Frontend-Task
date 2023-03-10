import axios from "axios"
import { useState, useEffect } from "react"
const Jobs = (props) => {
    const [jobs, setJobs] = useState();
    const getJobs = async () => {
        try {
            const fetchData = await axios.get("https://640899878ee73db92e45b847.mockapi.io/jobsdata")
            setJobs(fetchData.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getJobs()
    }, [])

    return (
        <>
            {
                jobs ?
                    <div class="grid grid-cols-1  gap-4 p-4 overflow-y-auto absolute overflow-x-hidden w-full z-50 md:grid-cols-2 sm:grid-cols-2">
                        {jobs.map((items, key) => (
                            <div class="flex flex-col bg-white border rounded-lg mx-5 md:flex-row px-4 py-6" key={key}>

                                <img
                                    class="my-1 ml-1 w-12 h-12 rounded"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png"
                                    alt="image"
                                />
                                <div class="justify-start mx-3 flex flex-col ">
                                    <p class="text-2xl  tracking-tight">
                                        {items.companyName}
                                    </p>
                                    <p class=" text-base leading-normal">
                                        {items.industryName}
                                    </p>
                                    <p class="text-slate-300 mb-2 font-light">
                                        {items.locationName}
                                    </p>
                                    <p class=" text-base">
                                        {items.remoteType !== "" ? items.remoteType : "()"}
                                    </p>
                                    <p class="text-base">
                                        Experience: ({items.minimumExperience} - {items.maximumExperience} years)
                                    </p>
                                    <p class="text-base">
                                        INR: (&#8377;) {items.minimumSalary} - {items.maximumSalary} / Month
                                    </p>
                                    <p class="text-base">
                                        {items.numberOfEmployees} employees
                                    </p>
                                    {
                                        items.applyType === "QuickApply" ?
                                            <button class="w-28 mt-2 mb-2 h-10 mb-1 text-sm text-white 0 bg-sky-500 hover:bg-white hover:text-blue-500 rounded shadow border">
                                                Apply Now
                                            </button>
                                            :
                                            <button class="w-36 mt-2 mb-2 h-10 h-10 bg-transparent hover:bg-sky-500 text-sky-400 hover:text-white  border border-sky-400	 hover:border-transparent rounded">
                                                External apply
                                            </button>
                                    }
                                </div>
                            </div>

                        ))}
                    </div> : <></>
            }

        </>
    )
}
export default Jobs;