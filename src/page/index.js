import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';


function Main() {
  const [data, setData] = useState([])

  return (
    <div >
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          about: "",
          phoneNumber: "",
        }}
        onSubmit={(value) => {
          setData(prevState => [...prevState, value])
        }}
      >
        {() => (
          <Form >

            <label htmlFor="name">Name</label>
            <Field name="name" />

            <label htmlFor="lastname">Last Name</label>
            <Field name="lastname" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />

            <label htmlFor="about">About</label>
            <Field name="about" type="text" />

            <label htmlFor="phonenumber">Phone Number</label>
            <Field name="phonenumber" type="text" />


            <button type='submit'>Add List</button>
          </Form>
        )
        }
      </Formik>
      {
        <ul>
          {data.map((element, index) => {
            return (

              <li key={index}>
                <p >Name: {element.name}</p>
                <p >Last-Name: {element.lastname}</p>
                <p >E-mail: {element.email}</p>
                <p >About: {element.about}</p>
                <p >Phone-Number: {element.phonenumber}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  );
}

export default Main;