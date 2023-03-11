import axios from "axios";
import { useState } from "react";
import Jobs from "./Jobs";

const SecondStepForm = ({ jobData, setJobData }) => {
    const handleOnChange = event => {
        const { name, value } = event.target;
        setJobData({ ...jobData, [name]: value });
    };
    const [showJobs, setShowJobs] = useState(false);
    const sendJobData = async () => {
        await axios.post('https://640899878ee73db92e45b847.mockapi.io/jobsdata', jobData)
            .then()
            .catch(error => console.log(error))
        setShowJobs(true);
    }
    console.log(jobData)
    return (
        <>
            {
                showJobs !== true ?
                    <div class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div class="bg-white shadow-md rounded-10 px-8 py-8 h-141 w-145 ">
                        <div>
            <span class="display-block top-3">
              <span class="float-right right-0 text-base bold text-base leading-6">step 2</span>
            </span>
          </div>
          <div class="text-xl">
            <span class="w-28 leading-7 text-xl">Create a Job</span>

                                <div class="pt-6">
                                    <label class=" block text-sm font-medium text-gray-900 w-77">Experience</label>
                                    <div class="grid gap-6 md:grid-cols-2 pt-1">
                                        <div>
                                            <input type="text" class="font-normal bg-gray-50 w-full h-9 border border-gray-300 text-gray-900 text-sm rounded-5 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 " name="minimumExperience" value={jobData.minimumExperience} onChange={(e) => { handleOnChange(e) }} placeholder="Minimum" />
                                        </div>
                                        <div>
                                            <input type="text" class="font-normal bg-gray-50 w-full h-9 border border-gray-300 text-gray-900 text-sm rounded-5 focus:ring-blue-500 focus:border-blue-500 block p-2.5 " name="maximumExperience" value={jobData.maximumExperience} onChange={(e) => { handleOnChange(e) }} placeholder="Maximum" />
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-6">
                                    <label class=" block text-sm font-medium text-gray-900 w-45 " >Salary</label>
                                    <div class="grid gap-6 md:grid-cols-2 pt-1">
                                        <div>
                                            <input type="text" class="font-normal bg-gray-50 w-full h-9 border border-gray-300 text-gray-900 text-sm rounded-5 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 " name="minimumSalary" value={jobData.minimumSalary} onChange={(e) => { handleOnChange(e) }} placeholder="Minimum" />
                                        </div>
                                        <div>
                                            <input type="text" class="font-normal bg-gray-50 w-full h-9 border border-gray-300 text-gray-900 text-sm rounded-5 focus:ring-blue-500 focus:border-blue-500 block p-2.5 " name="maximumSalary" value={jobData.maximumSalary} onChange={(e) => { handleOnChange(e) }} placeholder="Maximum" />
                                        </div>
                                    </div>

                                </div>
                                <div class="pt-6">
                                    <label class=" block  text-sm font-medium text-gray-900 w-110" >Total Employee</label>
                                    <div class="pt-1">
                                        <input type="text" class="font-normal bg-gray-50 w-full h-9 border border-gray-300 text-gray-900 text-sm rounded-5 focus:ring-blue-500 focus:border-blue-500 block  p-2.5 " name="numberOfEmployees" value={jobData.numberOfEmployees} onChange={(e) => { handleOnChange(e) }} placeholder="ex. 100" />
                                    </div>
                                </div>
                            </div>
                            <div class="pt-6">
                                <label class="block text-sm font-medium text-gray-900 w-76" >Apply type</label>
                                <div class="flex gap-4 pt-3">
                                    <div class="flex items-center">
                                        <input type="radio" value="QuickApply" name="applyType" onChange={(e) => { handleOnChange(e) }} class="font-normal w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  " />
                                        <label class="ml-1 text-sm font-medium text-gray-900 ">Quick Apply</label>
                                    </div>
                                    <div class="flex items-center block pl-1">
                                        <input type="radio" name="applyType" value="ExternalApply" onChange={(e) => { handleOnChange(e) }} class="font-normal w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                        <label class="ml-1 text-sm font-medium text-gray-900 ">External apply</label>
                                    </div>
                                </div>
                            </div>
                            <div class=" float-right pt-24">
                                <button type="submit" class="w-72 h-10 inline-flex justify-center font-medium rounded-md bg-sky-500 py-2 px-3 text-base	 text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400  border-2" onClick={sendJobData}>Save</button>
                            </div>
                        </div>
                    </div>
                    :
                    <Jobs applyType={jobData.applyType} />

            }
        </>
    )
}
export default SecondStepForm;

/*
 jobTitle: "",
    CompanyName: "",
    industaryName: "",
    locationName: "",
    minimumSalary: "",
    maximumSalary: "",
    minimumExperience: "",
    maximumExperience: "",
    numberOfEmployees: "",
    pageNumber: 1,
    applyType: "",
    remoteType:"",
*/