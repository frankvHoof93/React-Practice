import React, { useState } from 'react';

import LoadingIndicator from '../UI/LoadingIndicator';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  // State does NOT have to be an object. Can be a primitive
  // Parameter is initial (default) state
  // const [state, setState] = useState({
  //   title: '',
  //   amount: ''
  // });
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.addHandler({ title: title, amount: amount });
  };
  console.log('rendering form');
  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title"
              value={title}
              onChange={
                event => {
                  // Store because of closure on outer variable for inner function in setState
                  setTitle(event.target.value);
                }
              } />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount"
              value={amount}
              onChange={
                event => {
                  // // Store because of closure on outer variable for inner function in setState
                  // const val = event.target.value;
                  // setState(prevState => ({ ...prevState, amount: val }))
                  setAmount(event.target.value);
                }
              } />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
