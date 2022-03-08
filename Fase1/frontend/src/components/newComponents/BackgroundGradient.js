import React from 'react';
import classnames from 'clsx';

export const BackgroundGradient = ({ className }) => {
  return <div className={classnames('bg-gradient-to-b from-primary-600 to-primary-400', className)} />
}