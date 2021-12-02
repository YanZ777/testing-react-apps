// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  //
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  //
  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue

  const handleSubmit = jest.fn()
  // let submittedData;
  // const handleSubmit = data => (submittedData = data);

  render(<Login onSubmit={handleSubmit}/>)

  const username = screen.getByLabelText('Username');
  const password = screen.getByLabelText('Password');

  userEvent.type(username, 'hello');
  userEvent.type(password, 'world');

  const submitButton = screen.getByText('Submit');
  userEvent.click(submitButton);
  // expect(submittedData).toEqual({username: 'hello', password: 'world'});
  expect(handleSubmit).toHaveBeenCalledWith({username: 'hello', password: 'world'});
})

/*
eslint
  no-unused-vars: "off",
*/
