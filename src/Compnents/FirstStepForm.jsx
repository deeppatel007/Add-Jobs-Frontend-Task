import { useState } from "react";


const FirstStepForm = ({ formData, setFormData }) => {
  const [isEmptyTitle, setisEmptyTitle] = useState(false)
  const [isEmptyCompanyName, setIsEmptyCompanyName] = useState(false)
  const [isEmptyIndustryName, setIsEmptyIndustryName] = useState(false)
  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (formData.jobTitle !== "") {
      setisEmptyTitle(false)
    }
    if (formData.companyName !== "") {
      setIsEmptyCompanyName(false)
    }
    if (formData.industryName !== "") {
      setIsEmptyIndustryName(false)
    }
  };
  const secondStep = (event) => {

    if (formData.jobTitle !== "" && formData.industryName !== "" && formData.companyName !== "") {
      const { name } = event.target;
      setFormData({ ...formData, [name]: 2 });
    }
    if (formData.jobTitle === "") {
      setisEmptyTitle(true)
    }
    if (formData.companyName === "") {
      setIsEmptyCompanyName(true)
    }
    if (formData.industryName === "") {
      setIsEmptyIndustryName(true)
    }

  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div class="bg-white shadow-md rounded px-8 pt-8 ">
          <div>
            <div>
              <span class="display-block top-3">
                <span class="float-right right-0 h-16 w-16 bold text-base">step 1</span>
              </span>
            </div>
            <div class="text-xl">
              Create a Job
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900  pt-6" >Job title<span className="text-red-600">*</span></label>
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. UX UI Designer" name="jobTitle" value={formData.jobTitle} onChange={(e) => handleOnChange(e)} required />
                {
                  isEmptyTitle && <p class="text-red-500 text-xs pt-1">This field is required</p>
                }
              </div>
              <div>
                <label class="pt-6 block mb-2 text-sm font-medium text-gray-900 ">Company name<span className="text-red-600">*</span></label>
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. Google" name="companyName" value={formData.companyName} onChange={(e) => handleOnChange(e)} required />
                {
                  isEmptyCompanyName && <p class="text-red-500 text-xs pt-1">This field is required</p>
                }
              </div>
              <div>
                <label class="block pt-6 mb-2 text-sm font-medium text-gray-900 ">Industry<span className="text-red-600">*</span></label>
                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. Information Technology" name="industryName" value={formData.industryName} onChange={(e) => handleOnChange(e)} required />
                {
                  isEmptyIndustryName && <p class="text-red-500 text-xs pt-1">This field is required</p>
                }
              </div>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label class="block pt-6 mb-2 text-sm font-medium text-gray-900 ">Location</label>
                  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. Chennai" name="locationName" value={formData.locationName} onChange={(e) => handleOnChange(e)} />
                </div>
                <div>
                  <label class="block pt-6 mb-2 text-sm font-medium text-gray-900 ">Remote Type</label>
                  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex. in-office" name="remoteType" value={formData.remoteType} onChange={(e) => handleOnChange(e)} />
                </div>
              </div>
            </div>
            <div class="pt-6"></div>
            <div class="pt-6"></div>
            <div class=" float-right pb-6 ">
              <button class="inline-flex justify-center rounded-md bg-sky-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 w-16" name="pageNumber" onClick={(e) => secondStep(e)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default FirstStepForm;