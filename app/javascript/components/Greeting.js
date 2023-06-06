import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/Greeting/GreetingSlice';

function Greeting() {
  const greeting = useSelector(state => state.greeting.greetingstore) || [];
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      {greeting.length > 0 && (
        <h1>{greeting[0].message}</h1>
      )}
    </div>
  );
}

export default Greeting;
