import React from 'react';

const FormErrors = ({formErrors}) => {
  return (
          <div className='formErrors'>
            {Object.keys(formErrors).map((errorName, id) => {
              if(formErrors[errorName].length > 0){
                return (
                  <p key={id}>{formErrors[errorName]}</p>
                )
              } else {
                return '';
              }
            })}
          </div>
        )
}
export default FormErrors
