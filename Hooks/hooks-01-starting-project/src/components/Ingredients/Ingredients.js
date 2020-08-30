import React, { useReducer, /*useState,*/ useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

const ingredientReducer = (currstate, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currstate, action.ingredient];
    case 'DELETE':
      return currstate.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Invalid Type');
  }
}

function Ingredients() {
  const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest, param, method, clear } = useHttp();

  //const [ingredients, setIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  // useEffect(() => {
  //   fetch('https://react-hooks-tutorial-e1119.firebaseio.com/ingredients.json').then(
  //     response => response.json()
  //   ).then(responseData => {
  //     const loadedIngredients = [];
  //     for (const key in responseData) {
  //       loadedIngredients.push({ ...responseData[key], id: key });
  //     }
  //     // This will create an infinite loop (updates state, restarts request) without (empty) dependencies
  //     setIngredients(loadedIngredients);
  //   })
  // }, []); // empty array acts like componentDidMount (runs only once)

  // Runs after every render cycle
  useEffect(() => {
    console.log('rendering');
  })

  // Runs after render cycles in which ingredients changed
  useEffect(() => {
    console.log('rendering new ingredients:', ingredients);
  }, [ingredients])

  useEffect(() => {
    switch (method) {
      case 'DELETE':
        dispatchIngredients({ type: 'DELETE', id: param });
        break;
      case 'ADD':
        dispatchIngredients({
          type: 'ADD',
          ingredient: { ...param, id: data.name }
        });
        break;
      default:
        break;
    }
  }, [data, param, method]);

  const addIngredientHandler = useCallback(ingredient => {
    sendRequest(`https://react-hooks-tutorial-e1119.firebaseio.com/ingredients.json`, 'POST', JSON.stringify(ingredient), ingredient, 'ADD');
    // dispatchHttp({ type: 'SEND' });
    // fetch('https://react-hooks-tutorial-e1119.firebaseio.com/ingredients.json', {
    //   method: 'POST',
    //   body: JSON.stringify(ingredient),
    //   headers: { 'Content-Type': 'application/json' }
    // })
    //   .then(response => {
    //     dispatchHttp({ type: 'RESPONSE' });
    //     return response.json();
    //   })
    //   .then(body => {
    //     dispatchIngredients({
    //       type: 'ADD',
    //       ingredient: { ...ingredient, id: body.name }
    //     })
    //   }).catch(error => {
    //     dispatchHttp({ type: 'ERROR', error: error.message });
    //   });
  }, [sendRequest]);

  const removeIngredientHandler = useCallback(id => {
    sendRequest(`https://react-hooks-tutorial-e1119.firebaseio.com/ingredients/${id}.json`, 'DELETE', null, id, 'DELETE');
  }, [sendRequest]);

  const onLoadIngredients = useCallback(toLoad => {
    dispatchIngredients({ type: 'SET', ingredients: toLoad });
  }, [dispatchIngredients]);

  const ingredientList = useMemo(() => {
    return (<IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler} />);
  }, [ingredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <IngredientForm addHandler={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={onLoadIngredients} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
