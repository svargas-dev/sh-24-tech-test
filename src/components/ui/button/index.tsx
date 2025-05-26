import RightArrowIcon from '@/components/icons/right-arrow';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'aria-disabled'> & {
  isDisabled?: boolean;
  isLoading?: boolean;
}

export function Button({ isDisabled, isLoading, className, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      className={`flex w-full sm:w-max justify-between sm:justify-center items-center py-3 px-6 rounded-full bg-gray-900 border-4 border-gray-900 text-white hover:cursor-pointer focus:outline-none focus:bg-teal-200 focus:text-gray-900 dark:bg-white dark:border-white dark:text-gray-900 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 group ${className ? ` ${className}` : ''}`}
      aria-disabled={isDisabled || isLoading}
      {...props}
    >
      <span className="font-medium">{isLoading && <span className="sr-only" role="status">Loading...</span>}Continue</span>
      <RightArrowIcon
        aria-hidden={true}
        focusable={false}
        className="ml-4 fill-current motion-reduce:transition-none transition-transform duration-200 group-focus:translate-x-2"
      />
    </button>
  )
}
