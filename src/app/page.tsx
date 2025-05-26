"use client";

import { useActionState } from "react";
import { checkPostcode } from "./actions";
import { TextInput } from "@/components/ui/text-input";
import { WarningIcon } from "@/components/icons/warning";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [state, formAction, isPending] = useActionState(checkPostcode, initialState);

  return (
    <>
      <h2 className="text-xl mb-3 font-semibold">
        First, let&apos;s check if we&apos;re available in your area
      </h2>
      <p className="text-md">
        We&apos;re funded to deliver free services in areas across the UK. We work with local commissioners to decide what to offer in different places. Enter your postcode to see if you&apos;re eligible for our services.
      </p>

      <form action={formAction} className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="postcode" className="text-md font-semibold">Postcode</label>
          {state.message && !isPending && (
            <div className="flex items-center gap-2">
              <WarningIcon fill="var(--color-red-700)" aria-hidden={true} focusable={false}/>
              <output name="status" htmlFor="postcode" >
                <span>{state.message}</span>
              </output>
            </div>
          )}
          <TextInput type="text" id="postcode" name="postcode" autoComplete="shipping postal-code" hasError={!!state.message} />
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
        <Button isLoading={isPending} className="ml-auto"/>
      </form>
    </>
  );
}

const initialState = {
  message: "",
};
