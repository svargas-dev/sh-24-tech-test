import { type InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.RefObject<HTMLInputElement>;
  hasError?: boolean;
}

export function TextInput({ ref, hasError, ...props }: TextInputProps) {
  return (
    <div className="relative z-5">
    <input
      className={`
        peer w-full px-4 py-3 bg-transparent
        border-0 rounded-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500
        motion-reduce:transition-none transition-all duration-100
      `}
      {...props}
      ref={ref}
    />
    {/* Using scale is more performant than changing the border width & has smoother transition using compositing */}
    <div className={`absolute inset-0 -z-2 rounded-sm overflow-hidden bg-gray-100 peer-focus:bg-teal-300 dark:bg-gray-800 dark:peer-focus:bg-cyan-800
      ${hasError ? 'bg-red-50 after:border-red-700 after:scale-y-200 peer-focus:after:scale-x-101' : 'bg-gray-100 dark:bg-gray-800'}
      after:absolute after:inset-0 after:z-1 after:rounded-sm after:border-b-2 after:origin-bottom peer-focus:after:scale-y-200 peer-focus:after:scale-x-101
      after:motion-reduce:transition-none after:transition-all after:duration-100`}
    />
  </div>
  );
}

