import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
function MyForm()
{
  return(
    <div>
      <Form/>
    </div>
  )
}
ReactDOM.render(<MyForm/>,document.getElementById("root"));