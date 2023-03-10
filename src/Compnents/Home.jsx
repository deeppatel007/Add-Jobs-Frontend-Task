import { useState, React } from 'react';
import FirstStepForm from './FirstStepForm';
import SecondStepForm from './SecondStepForm';

const Home = ({ buttonText }) => {
  const [showModal, setShowModal] = useState(false)
  const [jobData, setJobData] = useState({
    jobTitle: "",
    companyName: "",
    industryName: "",
    locationName: "",
    minimumSalary: "",
    maximumSalary: "",
    minimumExperience: "",
    maximumExperience: "",
    numberOfEmployees: "",
    pageNumber: 1,
    applyType: "",
    remoteType:"",
  });


  const PageDisplay = () => {
    if (jobData.pageNumber === 1) {
      return <FirstStepForm jobData={jobData} setJobData={setJobData} />;
    } else if (jobData.pageNumber == 2) {
      return <SecondStepForm jobData={jobData} setJobData={setJobData} />;
    }
  };
  return (
    <>
    
      {showModal ? (
        <>

          <div>{PageDisplay()}</div>

          <div class="opacity-25  overflow-x-hidden fixed inset-0 z-40 bg-black"></div>
        </>
      ) :  <button
        class="bg-sky-500 text-white active:bg-sky-600 ml-5 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonText}
      </button>}
    </>
  );
}

export default Home;