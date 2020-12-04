import React from 'react';

import './component.css';

export type InputType = 'name' | 'phone' | 'otp';

export interface InputProps {
  value: string;
  update: (value: string) => void;
  label: string;
  placeholder?: string;
  type: InputType;
}

const getProps = (type: InputType): Partial<React.InputHTMLAttributes<HTMLInputElement>> => {
  switch (type) {
    case 'name':
      return {
        type: 'text',
        autoComplete: 'name',
        inputMode: 'text'
      };
    case 'phone':
      return {
        type: 'tel',
        autoComplete: 'tel-national',
        inputMode: 'numeric'
      };
    case 'otp':
      return {
        type: 'text',
        autoComplete: 'one-time-code',
        inputMode: 'numeric'
      }
  }
}

export const Input: React.FC<InputProps> = (props) => {

  return (
    <label className="TextInput">
      <p className="TextInput__label">{props.label}</p>
      <input
        className="TextInput__input"
        placeholder={props.placeholder}
        onChange={(e) => props.update(e.target.value)}
        value={props.value}
        {...getProps(props.type)}
      />
    </label>
  )
}