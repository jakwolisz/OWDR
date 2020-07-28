import React, { useState } from 'react';
import MasterFormStep1 from "./MasterFormStep1";
import MasterFormStep2 from "./MasterFormStep2";
import MasterFormStep3 from "./MasterFormStep3";
import MasterFormStep4 from "./MasterFormStep4";

const MasterForm = () => {
 
      const [formState, updateformState] = useState({
        currentStep: 1, // Default is Step 1
        options: 
                {
                    toGive: "",
                    bagsNumber: "",
                }  
      }) 
    

    const handleChange = e => {
        const { name, value } = e.target;
    
        updateformState(prevValues => ({
          ...prevValues,
          "options": {
                 ...prevValues.options, 
                 [name]: value},
        }));
      };

      console.log(formState.options)
      console.log(formState)

    const next = () => {

        if (formState.currentStep >=3){
        updateformState(prevValues => ({
            ...prevValues,
            currentStep: 4,
          }))
        } 
        else {
        updateformState(prevValues => ({
            ...prevValues,
            currentStep: formState.currentStep + 1,
        }))
        }
    }

    const prev = () => {

        if (formState.currentStep <=1){
            updateformState(prevValues => ({
                ...prevValues,
                currentStep: 1,
              }))
            } 
            else {
            updateformState(prevValues => ({
                ...prevValues,
                currentStep: formState.currentStep - 1,
            }))
            }
    }

    const PreviousButton = () => {
     
        if(formState.currentStep !==1){
          return (
            <button type="button" onClick={prev}>
            Wstecz
            </button>
          )
        }
        
        return null;
      }

      const NextButton = () => {

        if(formState.currentStep < 4){
          return (
            <button type="button" onClick={next}>
            Dalej
            </button>        
          )
        }
        return null;
      }


    const handleSubmit = e => {
      e.preventDefault()
    }
    

    return (
        <>
        <h1>Krok {formState.currentStep} / 4 </h1>

  <form onSubmit={handleSubmit}>
  
    <MasterFormStep1 
      currentStep={formState.currentStep} 
      handleChange={handleChange}
    />
    <MasterFormStep2 
      currentStep={formState.currentStep} 
      handleChange={handleChange}
    />
    <MasterFormStep3
      currentStep={formState.currentStep} 
      handleChange={handleChange}
    /> 
    <MasterFormStep4
      currentStep={formState.currentStep} 
      handleChange={handleChange}
    />         

  </form>
  <div className="master_form_buttons">
     <PreviousButton />
      <NextButton />
   </div>
        </>
    )
  }

  export default MasterForm;