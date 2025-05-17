import logo3 from "../assets/logo.jpg";
import logo2 from "../assets/estfbs.png";
import logo1 from "../assets/université Sultan Moulay Slimane - Beni Mellal-01.png";
import { LuHome } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FiServer } from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link from React Router
import { useState } from "react";
import axios from 'axios';
import { Modal } from "flowbite-react";

import { useSpring, animated } from "@react-spring/web";

const Prediction = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openErrorModal, setErrorModal] = useState([false,'']);

  const [formData, setFormData] = useState({
    G1: '',
    G2: '',
    studytime:  { value: '1', label: 'Less than 2 hours' },
    failures: { value: '0', label: '0 failures' },
    Medu: { value: '0', label: 'None' },
    Fedu: { value: '0', label: 'None' }
  });

  const [prediction, setPrediction] = useState('');
    const [error, setError] = useState('');
  // Separate state variables for each dropdown menu
  const [studytimeDropdown, setStudytimeDropdown] = useState(false);
  const [failuresDropdown, setFailuresDropdown] = useState(false);
  const [MeduDropdown, setMeduDropdown] = useState(false);
  const [FeduDropdown, setFeduDropdown] = useState(false);
  const [loading, setloading] = useState(false);

  const handleSubmit = async(e) => {
    setloading(true)
    e.preventDefault();
    // Check if G1 and G2 are not empty
    if (!formData.G1 || !formData.G2 || !formData.studytime || !formData.failures || !formData.Medu || !formData.Fedu) {
      setTimeout(() => {
        setloading(false);
        setErrorModal([true,'Please fill full form'])
      }, 2000);
      return;
    }
    
    // Convert G1 and G2 values to numbers
    const valueG1 = parseFloat(formData.G1);
    const valueG2 = parseFloat(formData.G2);
    
    // Check if G1 and G2 are valid numbers
    if (isNaN(valueG1) || isNaN(valueG2)) {
      setTimeout(() => {
        setloading(false);
        setErrorModal([true,'Please enter valid numbers for G1 and G2.'])
      }, 2000);

      return;
    }
    if (valueG1 > 20 || valueG2 > 20) {
      setTimeout(() => {
        setloading(false);
        setErrorModal([true,'Please enter valid numbers for G1 and G2.'])
      }, 2000);

      return;
    }
    // Update formData with the converted values
    const data = {
      G1: valueG1,
      G2: valueG2,
      Medu: formData.Medu.value,
      Fedu: formData.Fedu.value,
      studytime: formData.studytime.value,
        failures: formData.failures.value,
       
     
    }
    
    console.log(data);
    try {
      const response = await axios.post('http://127.0.0.1:5000/prediction', data);
      console.log(response)
      setTimeout(() => {
        setloading(false);
        setPrediction(response.data.prediction);
        setOpenModal(true);
        setError('');
      }, 2000);
     
      
  } catch (error) {
    console.log(error)
    setTimeout(() => {
      setloading(false);
      setError('Error fetching prediction');
      setErrorModal([true, 'Error fetching prediction']);
      setPrediction('');
    }, 2000);
      
  }
    // Proceed with form submission
  };
  

  const handleChange = (e, field) => {
    const value = e.target.value

      setFormData({
        ...formData,
        [field]: value 
      });
    
  };
  
  const handleDropdownView = (field) => {
        setStudytimeDropdown(field !== 'studytime' ? field === 'studytime' : !studytimeDropdown);
       setFailuresDropdown(field !== 'failures' ? field === 'failures' : !failuresDropdown);
   setMeduDropdown(field !== 'Medu' ? field === 'Medu' : !MeduDropdown);
   setFeduDropdown(field !== 'Fedu' ? field === 'Fedu' : !FeduDropdown);
  }
  const handleDropdown = (value, field) => {
    setFormData({
      ...formData,
      [field]: value
    });
    // Set the appropriate dropdown state variable to false
    if (field === 'studytime') setStudytimeDropdown(false);
    if (field === 'failures') setFailuresDropdown(false);
    if (field === 'Medu') setMeduDropdown(false);
    if (field === 'Fedu') setFeduDropdown(false);
  };

  // Function to render dropdown options dynamically
  const renderDropdownOptions = (options, field) => {
    return options.map((option, index) => (
      <button 
        key={index} 
        className="block px-4 w-full  text-start py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" 
        onClick={() => handleDropdown(option, field)}
      >
        {option.label}
      </button>
    ));
  };
  const containerAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(3rem)" },
    to: { opacity: 1, transform: "translateX(0rem)" },
    config: { duration: 1000 },
    delay: 100,
  });

  return (
    <>
    
        <div className=" min-[860px]:w-[50rem] w-full  z-30 min-[1000px]:ml-[4rem] mt-[1rem]">
          <animated.div style={containerAnimation}>
          <div className="mb-6">
            <h2 className="font-bold text-2xl text-gray-800">Student Performance Prediction Form</h2>
            <h3 className="text-sm">Enter the student details below to predict performance:</h3>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex items-center max-[860px]:flex-col w-full gap-7">
              <div className="w-full">
                <label htmlFor="G1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">G1 Grade:</label>
                <input name="G1" id="G1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={formData.G1} placeholder='Your G1 Grade' onChange={(e) => handleChange(e, "G1")}  />
              </div>
              <div className="w-full">
                <label htmlFor="G2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">G2 Grade:</label>
                <input name="G2" id="G2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={formData.G2} placeholder='Your G2 Grade' onChange={(e) => handleChange(e, "G2")}  />
              </div>
            </div>
            <div className="flex items-center max-[860px]:flex-col w-full gap-7">
              <div className="w-full">
                <label htmlFor="studytime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Study Time:</label>
                <div className="relative inline-block w-full">
                  <button className="bg-gray-50 border  flex items-center justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5" type="button" onClick={() => handleDropdownView('studytime')}>
                   <span> {formData.studytime.label}</span>
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                  {studytimeDropdown && (
                    <div className="absolute left-0 mt-2 w-full z-40 border border-gray-200 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                      {renderDropdownOptions([
                        { value: '1', label: 'Less than 2 hours' },
                        { value: '2', label: '2 to 5 hours' },
                        { value: '3', label: '5 to 10 hours' },
                        { value: '4', label: 'More than 10 hours' }
                      ], 'studytime')}
                    </div>
                  )}
                </div>
              </div>
              <div  className="w-full">
                <label htmlFor="failures" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Failures:</label>
                <div className="relative inline-block w-full">
                  <button className="bg-gray-50 border flex items-center justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5" type="button" onClick={() => handleDropdownView('failures')}>
                    <span>{formData.failures.label}</span>
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                  {failuresDropdown && (
                    <div className="absolute left-0 mt-2 w-full z-40 border border-gray-200 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                      {renderDropdownOptions([
                        { value: '0', label: '0 failures' },
                        { value: '1', label: '1 failure' },
                        { value: '2', label: '2 failures' },
                        { value: '3', label: '3 or more failures' }
                      ], 'failures')}
                    </div>
                  )}
                </div>
              </div>
              </div>
              <div className="flex items-center max-[860px]:flex-col w-full gap-7">
              <div className="w-full">
                <label htmlFor="medu" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mother's Education:</label>
                <div className="relative inline-block w-full">
                  <button className="bg-gray-50 border flex items-center justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5" type="button"  onClick={() => handleDropdownView('Medu')}>
                   <span>{formData.Medu.label}</span>
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                  {MeduDropdown && (
                    <div className="absolute left-0 mt-2 w-full z-40 border border-gray-200 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                      {renderDropdownOptions([
                        { value: '0', label: 'None' },
                        { value: '1', label: 'Primary education (up to 4th grade)' },
                        { value: '2', label: '5th to 9th grade' },
                        { value: '3', label: 'Secondary education' },
                        { value: '4', label: 'Higher education' }
                      ], 'Medu')}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="fedu" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Father's Education:</label>
                <div className="relative inline-block w-full">
                  <button className="bg-gray-50 border flex items-center justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5" type="button" onClick={() => handleDropdownView('Fedu')}>
                   <span> {formData.Fedu.label}</span>
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                  {FeduDropdown && (
                    <div className="absolute left-0 mt-2 w-full z-40 border border-gray-200 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                      {renderDropdownOptions([
                        { value: '0', label: 'None' },
                        { value: '1', label: 'Primary education (up to 4th grade)' },
                        { value: '2', label: '5th to 9th grade' },
                        { value: '3', label: 'Secondary education' },
                        { value: '4', label: 'Higher education' }
                      ], 'Fedu')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          
            <button className="flex justify-center items-center text-white bg-cyan-900 py-3 rounded-sm"  type="submit">{ loading ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="28" height="28"  ><g><circle fill="#ffffff" r="10" cy="50" cx="84">
    <animate begin="0s" keySplines="0 0.5 0.5 1" values="10;0" keyTimes="0;1" calcMode="spline" dur="0.25s" repeatCount="indefinite" attributeName="r"></animate>
    <animate begin="0s" values="#ffffff;#ffffff;#ffffff;#ffffff;#ffffff" keyTimes="0;0.25;0.5;0.75;1" calcMode="discrete" dur="1s" repeatCount="indefinite" attributeName="fill"></animate>
</circle><circle fill="#ffffff" r="10" cy="50" cx="16">
  <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="r"></animate>
  <animate begin="0s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
</circle><circle fill="#ffffff" r="10" cy="50" cx="50">
  <animate begin="-0.25s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="r"></animate>
  <animate begin="-0.25s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
</circle><circle fill="#ffffff" r="10" cy="50" cx="84">
  <animate begin="-0.5s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="r"></animate>
  <animate begin="-0.5s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
</circle><circle fill="#ffffff" r="10" cy="50" cx="16">
  <animate begin="-0.75s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="r"></animate>
  <animate begin="-0.75s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
</circle><g></g></g></svg> : 'Predict'}</button>
          </form>
          </animated.div>
        </div>
       
      
    
   { openModal && <div id="default-modal" tabindex="-1" aria-hidden="true" className=" overflow-y-auto flex bg-black bg-opacity-40  overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full">
     <div className="relative p-4 w-full max-w-2xl max-h-full">
         
         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Result
                 </h3>
                 <button type="button" onClick={()=> setOpenModal(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                     <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                     </svg>
                     <span className="sr-only">Close modal</span>
                 </button>
             </div>
              <div className="p-4 md:p-7">
                  <p className="text-gray-800 dark:text-gray-100">
                    Prediction de G3 is :   {prediction}
                  </p>
                  </div>
         </div>
     </div>
 </div>
   }
    { openErrorModal[0] && <div id="default-modal" tabindex="-1" aria-hidden="true" className=" overflow-y-auto flex bg-black bg-opacity-40  overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full">
     <div className="relative p-4 w-full max-w-2xl max-h-full">
         
         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
             <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                 <h3 className="text-xl font-semibold text-red-700 dark:text-white">
                 {openErrorModal[1]}
                 </h3>
                 <button type="button" onClick={()=> setErrorModal([false,''])} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                     <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                     </svg>
                     <span className="sr-only">Close modal</span>
                 </button>
             </div>
              
         </div>
     </div>
 </div>
   }
    </>
  );
};

export default Prediction;
