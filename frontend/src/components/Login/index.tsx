import React, { useState } from 'react';

import { Heading } from 'atoms/Heading';
import { Input } from 'atoms/Input';

import './component.css';

export interface LoginProps {
}

export const Login: React.FC<LoginProps> = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form className="Login" onSubmit={submit}>
      <Heading subHeading>Log In</Heading>
      <Input
        type="name"
        value={name}
        update={setName}
        label="Please enter your name"
        placeholder="Namey McNameface"
      />
      <Input
        type="phone"
        value={phone}
        update={setPhone}
        label="Please enter your phone number"
      />
      <Input
        type="otp"
        value={code}
        update={setCode}
        label="Please enter the one time code we've texted you"
      />
    </form>
  )
}