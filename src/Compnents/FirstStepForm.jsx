import { useState } from "react";
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

const FirstStepForm = ({ jobData, setJobData }) => {
  const [isEmptyTitle, setisEmptyTitle] = useState(false)
  const [isEmptyCompanyName, setIsEmptyCompanyName] = useState(false)
  const [isEmptyIndustryName, setIsEmptyIndustryName] = useState(false)
  const handleOnChange = event => {
    console.log(jobData)
    const { name, value } = event.target;
    setJobData({ ...jobData, [name]: value });
    if (jobData.jobTitle !== "") {
      setisEmptyTitle(false)
    }
    if (jobData.companyName !== "") {
      setIsEmptyCompanyName(false)
    }
    if (jobData.industryName !== "") {
      setIsEmptyIndustryName(false)
    }
  };
  const secondStep = (event) => {

    if (jobData.jobTitle !== "" && jobData.industryName !== "" && jobData.companyName !== "") {
      const { name } = event.target;
      setJobData({ ...jobData, [name]: 2 });
    }
    if (jobData.jobTitle === "") {
      setisEmptyTitle(true)
    }
    if (jobData.companyName === "") {
      setIsEmptyCompanyName(true)
    }
    if (jobData.industryName === "") {
      setIsEmptyIndustryName(true)
    }

  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div class="bg-white shadow-md rounded-10 px-8 py-8 h-141 w-145 ">
            <div>
              <span class="display-block top-3">
                <span class="float-right right-0 text-base bold text-base leading-6">step 1</span>
              </span>
            </div>
            <div class="text-xl">
              <span class="w-28 leading-7 text-xl">Create a Job</span>
              <div class= "pt-6">
                <label class="block text-sm mb-1 font-medium text-gray-900 " ><span class="w-16">Job title</span><span className="text-red-600">*</span>
                {
                  isEmptyTitle && <span class="text-red-500 text-xs pl-1">This field is required</span>
                }
                </label>
                <input type="text" class=" font-normal  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-5 focus:ring-blue-500 focus:border-blue-500 block w-full h-9 p-2.5 " placeholder="ex. UX UI Designer" name="jobTitle" value={jobData.jobTitle} onChange={(e) => handleOnChange(e)} required />
                
              </div>
              <div class = "pt-6">
                <label class="mb-1 font-medium  block text-sm font-medium text-gray-900 "><span class="w-123">Company name</span><span className="text-red-600">*</span>
                {
                  isEmptyCompanyName && <span class="text-red-500 text-xs pl-1">This field is required</span>
                }
                </label>
                <input type="text" class="font-normal h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. Google" name="companyName" value={jobData.companyName} onChange={(e) => handleOnChange(e)} required />
            
              </div>
              <div class = "pt-6">
                <label class="mb-1 block text-sm  font-medium text-gray-900 "><span class="w-65">Industry</span><span className="text-red-600">*</span>
                {
                  isEmptyIndustryName && <span class="text-red-500 text-xs pl-1">This field is required</span>
                }
                </label>
                <input type="text" id="company" class=" font-normal h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. Information Technology" name="industryName" value={jobData.industryName} onChange={(e) => handleOnChange(e)} required />
              </div>
              <div class="grid gap-6 md:grid-cols-2 pt-6">
                <div>
                  <label class="mb-1 w-60 block text-sm font-medium text-gray-900 ">Location</label>
                  <input type="text" class=" font-normal h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. Chennai" name="locationName" value={jobData.locationName} onChange={(e) => handleOnChange(e)} />
                </div>
                <div>
                  <label class="mb-1 block text-sm w-24 font-medium text-gray-900 ">Remote Type</label>
                  <input type="text" class="font-normal h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-5 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. in-office" name="remoteType" value={jobData.remoteType} onChange={(e) => handleOnChange(e)} />
                </div>
              </div>
              <button class="flex items-end w-68 justify-end  bottom-0 mt-24 float-right h-10  inline-flex justify-center rounded-5 bg-sky-500 py-2 px-3 text-base  text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 text-base" name="pageNumber" onClick={(e) => secondStep(e)}>Next</button>
            
              </div>
              
            
          </div>
      </div>
    </>
  )
}
export default FirstStepForm;