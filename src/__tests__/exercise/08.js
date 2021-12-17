// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

const CustomHookTester = () => {
   const { count, increment, decrement } = useCounter();
   return (
      <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <div>{count}</div>
      </div>
   );
}

test('exposes the count and increment/decrement functions', () => {
  // 🐨 render the component
  // 🐨 get the elements you need using screen
  // 🐨 assert on the initial state of the hook
  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
  render(<CustomHookTester />);

  const incrementButton = screen.getByRole('button', { name: /increment/ });
  const decrementButton = screen.getByRole('button', { name: /decrement/ });
  expect(screen.getByText(/0/)).toBeInTheDocument();

  userEvent.click(incrementButton);
  expect(screen.getByText(/1/)).toBeInTheDocument();

  userEvent.click(decrementButton);
  userEvent.click(decrementButton);
  expect(screen.getByText(/-1/)).toBeInTheDocument();
})

test('tests the custom hook by assigning the result to a value', () => {
   let result
   function TestComponent(props) {
      result = useCounter(props)
      return null
   }

   render(<TestComponent />);

   expect(result.count).toBe(0);

   act(() => result.increment());
   expect(result.count).toBe(1);

   act(() => result.decrement());
   act(() => result.decrement());
   expect(result.count).toBe(-1);
});

/* eslint no-unused-vars:0 */
