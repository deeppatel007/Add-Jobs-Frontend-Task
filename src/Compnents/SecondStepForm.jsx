import axios from "axios";
import { useState } from "react";
import Jobs from "./Jobs";

const SecondStepForm = ({ formData, setFormData }) => {
    const [showJobs, setShowJobs] = useState(false);
    const handleOnChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const sendJobData = async () => {
        await axios.post('https://640899878ee73db92e45b847.mockapi.io/jobsdata', formData)
            .then()
            .catch(error => console.log(error))
        setShowJobs(true);
    }
    return (
        <>
            {
                showJobs !== true ? 
                    <div class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
                            <div>
                                <span class="display-block top-3">
                                    <span class="float-right right-0 h-16 w-16 boldctext-base">step 2</span>
                                </span>
                            </div>
                            <div class="text-xl">
                                Create a Job
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900  pt-4">Experience</label>
                                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="minimumExperience" value={formData.minimumExperience} onChange={(e) => { handleOnChange(e) }} placeholder="Minimum" />
                                        </div>
                                        <div>
                                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="maximumExperience" value={formData.maximumExperience} onChange={(e) => { handleOnChange(e) }} placeholder="Maximum" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 " >Salary</label>
                                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="minimumSalary" value={formData.minimumSalary} onChange={(e) => { handleOnChange(e) }} placeholder="Minimum" />
                                        </div>
                                        <div>
                                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="maximumSalary" value={formData.maximumSalary} onChange={(e) => { handleOnChange(e) }} placeholder="Maximum" />
                                        </div>
                                    </div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 " name="numberOfEmployees" value={formData.numberOfEmployees} onChange={(e) => { handleOnChange(e) }} placeholder="ex. 100">Total Employee</label>
                                    <input type="text" class="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="numberOfEmployees" value={formData.numberOfEmployees} onChange={(e) => { handleOnChange(e) }} placeholder="ex. 100" />
                                </div>
                            </div>
                            <label class="block mb-1 text-sm font-medium text-gray-900 " >Apply type</label>
                            <div class="flex gap-10">
                                <div class="flex items-center mr-4">
                                    <input type="radio" value="QuickApply" name="applyType" onChange={(e) => { handleOnChange(e) }} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  " />
                                    <label class="ml-2 text-sm font-medium text-gray-900 ">Quick Apply</label>
                                </div>
                                <div class="flex items-center mr-4 block mb-2">
                                    <input type="radio" name="applyType" value="ExternalApply" onChange={(e) => { handleOnChange(e) }} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                    <label class="ml-2 text-sm font-medium text-gray-900 ">External apply</label>
                                </div>
                            </div>
                            <div class="pt-6"></div>
                            <div class="pt-6"></div>
                            <div class=" float-right">
                                <button type="submit" class="inline-flex justify-center rounded-md bg-sky-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 w-16" onClick={sendJobData}>Save</button>
                            </div>
                        </div>
                    </div>
                    :
                    <Jobs applyType={formData.applyType}/>

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