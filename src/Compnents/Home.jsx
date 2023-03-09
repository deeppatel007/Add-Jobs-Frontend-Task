import { useState, React } from 'react';
import FirstStepForm from './FirstStepForm';
import SecondStepForm from './SecondStepForm';

const Home = ({ buttonText }) => {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
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
  });


  const PageDisplay = () => {
    if (formData.page === 1) {
      return <FirstStepForm formData={formData} setFormData={setFormData} />;
    } else if (formData.page == 2) {
      return <SecondStepForm formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <button
        class="bg-sky-500 text-white active:bg-sky-600 ml-5 mt-5 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonText}
      </button>
      {showModal ? (
        <>

          <div>{PageDisplay()}</div>

          <div class="opacity-25  overflow-x-hidden fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Home;