import React from 'react'
import { Button, Form } from 'semantic-ui-react';

export default function Login() {
  return (

    <div className='flex justify-center'>
            <Form className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
    <Form.Field>
      <label>Username</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
    </div>


  )
}

