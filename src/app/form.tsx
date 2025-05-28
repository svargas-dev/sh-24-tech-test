"use client";

import { startTransition, useActionState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form"

import { checkPostcode } from "./actions";
import { TextInput } from "@/components/ui/text-input";
import { WarningIcon } from "@/components/icons/warning";
import { Button } from "@/components/ui/button";

type FormValues = {
  postcode: string;
}

const initialState = {
  message: "",
};

export function Form() {
  const [state, formAction, isPending] = useActionState(checkPostcode, initialState);
  const ref = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
   } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = () => {
    startTransition(() => {
      const formData = new FormData(ref.current as HTMLFormElement);
      formAction(formData);
    });
  };

  return (
    <form action={formAction} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-8" ref={ref}>
      <div className="flex flex-col gap-2 my-4">
        <label htmlFor="postcode" className="text-md font-semibold">Postcode</label>
        {(state.message || errors.postcode?.message) && !isPending && (
          <div className="flex items-center gap-2">
            <WarningIcon fill="var(--color-red-700)" aria-hidden={true} focusable={false} />
            <output name="status" htmlFor="postcode" >
              <span>{errors.postcode?.message || state.message}</span>
            </output>
          </div>
        )}
        <TextInput
          type="text"
          id="postcode"
          // We need to duplicate 'name' for progressive enhancement
          //@ts-expect-error
          name="postcode"
          autoComplete="shipping postal-code"
          hasError={!!state.message || !!errors.postcode?.message}
          {...register("postcode", {
            required: "Postcode is required",
            pattern: {
              value: /^[a-zA-Z\d]+ ?[a-zA-Z\d]+$/,
              message: "Your postcode must be a valid UK postcode."
            },
          })}
        />
      </div>
      <p>We&apos;ll also use your postcode to find your delivery address.</p>

      <div className="flex gap-4 py-6 px-8 mx-auto rounded-3xl bg-gray-300 mb-8">
        <div className="flex-shrink-0 relative w-12 h-12 m-0 p-0 flex items-center justify-center bg-white rounded-full">
          <WarningIcon aria-hidden={true} focusable={false} />
          <span className="sr-only">Attention: </span>
        </div>
        <p className="text-md dark:text-gray-900">We cannot deliver to pick-up locations like InPost or OOHPod lockers or Post Offices.</p>
      </div>

      <hr className="my-3" />

      <Button isLoading={isPending} className="ml-auto" />
    </form>
  )
}
