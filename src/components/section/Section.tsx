import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './Section.scss';

interface MainProps {
  className?: string,
  children: ReactNode,
}

const Section: React.FC<MainProps> = ({ className, children, ...props }) => {

  const classes = classNames(
    'section',
    className
  );

  return (
    <section className={classes} {...props}>{children}</section>
  );
};

export default Section;

