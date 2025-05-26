import React, { type SVGProps } from 'react';

interface WarningIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  fill?: string;
}

export const WarningIcon = ({
  width = 24,
  height = 24,
  className,
  fill = 'black',
  ...props
}: WarningIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill={fill}
    {...props}
    className={className}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M13.5382 4C12.7684 2.66667 10.8439 2.66667 10.0741 4L2.27093 17.5156C1.50113 18.8489 2.46339 20.5156 4.00299 20.5156H19.6094C21.149 20.5156 22.1113 18.8489 21.3415 17.5156L13.5382 4ZM12.8904 8.58938C12.8904 7.9906 12.405 7.50518 11.8062 7.50518C11.2074 7.50518 10.722 7.9906 10.722 8.58938V12.9262C10.722 13.525 11.2074 14.0104 11.8062 14.0104C12.405 14.0104 12.8904 13.525 12.8904 12.9262V8.58938ZM11.8062 16.1788C11.2074 16.1788 10.722 16.6642 10.722 17.263C10.722 17.8617 11.2074 18.3472 11.8062 18.3472H11.817C12.4158 18.3472 12.9012 17.8617 12.9012 17.263C12.9012 16.6642 12.4158 16.1788 11.817 16.1788H11.8062Z"></path>
  </svg>
);

export default WarningIcon;