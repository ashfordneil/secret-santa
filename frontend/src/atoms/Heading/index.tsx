import React from 'react';

import './component.css';

export interface HeadingProps {
  children: React.ReactChild;
  subHeading?: true;
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const Tag = props.subHeading ? 'h2' : 'h1';

  return (
    <Tag className="Heading">{ props.children }</Tag>
  );
};