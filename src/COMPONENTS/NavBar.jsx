import React from 'react';
import { Form } from 'react-router-dom';

export function NavBar({}) {
  return (
    <div className='nav-bar'>
      <div className='app-title'>Movie Search</div>
      <Form className='search-container'>
        <input type='search' name='search' />
        <button type='submit' className='btn search'>
          search
        </button>
      </Form>
    </div>
  );
}
