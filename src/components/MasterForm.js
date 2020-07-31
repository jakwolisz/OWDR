import React, { useState } from 'react';
import MasterFormStep1 from "./MasterFormSteps/MasterFormStep1";
import MasterFormStep2 from "./MasterFormSteps/MasterFormStep2";
import MasterFormStep3 from "./MasterFormSteps/MasterFormStep3";
import MasterFormStep4 from "./MasterFormSteps/MasterFormStep4";
import Summary from "./MasterFormSteps/Summary";
import Thanks from "./MasterFormSteps/Thanks";

const MasterForm = () => {
 
      const [formState, updateformState] = useState({
        currentStep: 1, // Default is Step 1
        options: 
                {
                    toGive: "",
                    bagsNumber: "1",
                    localization: "",
                    help: "",
                    organizationSpecific: "",
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

      const checkbox = (e) => {
        const { name, value } = e.target;
        if (formState.options.help.indexOf(value) === -1) {
          updateformState((prevState) => {
            return {
              ...prevState,
              "options": {
                ...prevState.options, 
                [name]: prevState.options.help.concat(" ", value, " ").trimStart()
              },
            };
          });
        } else {
          updateformState((prevState) => {
            return {
              ...prevState,
              "options": {
                ...prevState.options, 
                [name]: prevState.options.help.replace(value, "").trim()
              },
            };
          });
        }
      };

      console.log(formState.options)
      console.log(formState)

    const next = () => {

        if (formState.currentStep >=4){
        updateformState(prevValues => ({
            ...prevValues,
            currentStep: 5,
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

    const submit = (e) => {
      e.preventDefault();
      // const newShare = firebase.shareData.push();
      // newShare.set(form);
      updateformState(prevValues => ({
        ...prevValues,
        currentStep: 6,
      }));
    };

    const PreviousButton = () => {
     
        if(formState.currentStep !== 1 && formState.currentStep !== 6 ){
          return (
            <button type="button" onClick={prev}>
            Wstecz
            </button>
          )
        }
        return null;
      }

      const NextButton = () => {

        if(formState.currentStep <= 4){
          return (
            <button type="button" onClick={next}>
              Dalej
            </button>        
          )
        }
        else if(formState.currentStep == 5){
          return (
            <button type="button" onClick={submit}>
              Potwierdzam
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
        <section id="master_form">
        {formState.currentStep === 1 && (
          <div className="yellow_header">
          <h4>Ważne!</h4>
          <p>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </p>
          </div>
          )
        }
        {formState.currentStep === 2 && (
        <div className="yellow_header">
          <h4>Ważne!</h4>
          <p>
            Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
            jak poprawnie spakować rzeczy znajdziesz TUTAJ.
          </p>
        </div>
          )
        }
        {formState.currentStep === 3 && (
        <div className="yellow_header">
          <h4>Ważne!</h4>
          <p>
            Jeśli wiesz komu chcesz pomóc, możęsz wpisać nazwę tej organizacji w wyszukiwarce. 
            Możesz też filtrować organizacje po ich lokalizacji bądź w celu ich pomocy.
          </p>
        </div>
          )
        }
        {formState.currentStep === 4 && (
        <div className="yellow_header">
          <h4>Ważne!</h4>
          <p>
            Podaj adres oraz termin odbioru rzeczy przez kuriera.
          </p>
        </div>
          )
        }


        <div className="column">

        {formState.currentStep <=4 ? <h1>{`Krok ${formState.currentStep}/ 4`}</h1> : null} 

        <form onSubmit={handleSubmit}>
        
          <MasterFormStep1 
            currentStep={formState.currentStep}
            handleChange={handleChange}
          />
          <MasterFormStep2 
            currentStep={formState.currentStep}
            form={formState.options}
            handleChange={handleChange}
          />
          <MasterFormStep3
            currentStep={formState.currentStep} 
            form={formState.options}
            handleChange={handleChange}
            checkbox={checkbox}
          /> 
          <MasterFormStep4
            currentStep={formState.currentStep}
            handleChange={handleChange}
          />      
        </form>
        <div className="summary">
          <Summary
            currentStep={formState.currentStep} 
          />   
          <Thanks
            currentStep={formState.currentStep} 
          />
        </div>
        <div className="master_form_buttons">
          <PreviousButton />
          <NextButton />
        </div>
        </div>
        </section>  
        </>
    )
  }

  export default MasterForm;