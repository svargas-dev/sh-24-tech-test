"use client";

import { useActionState } from "react";
import { checkPostcode } from "./actions";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [state, formAction] = useActionState(checkPostcode, initialState);

  return (
    <>
      <h2 className="text-xl mb-3 font-semibold">
        First, let&apos;s check if we&apos;re available in your area
      </h2>
      <p className="text-md">
        We&apos;re funded to deliver free services in areas across the UK. We work with local commissioners to decide what to offer in different places. Enter your postcode to see if you&apos;re eligible for our services.
      </p>

      <form action={formAction} className="flex flex-col gap-4 mb-8">
        <span className="flex flex-col gap-2 my-4">
          <label htmlFor="postcode" className="text-md font-semibold">Postcode</label>
          {state.message && (
            <output name="status" htmlFor="postcode">
              <span className="text-red-500">⚠&nbsp;</span>
              <span>{state.message}</span>
            </output>
          )}
          <Input type="text" id="postcode" name="postcode" autoComplete="shipping postal-code" />
        </span>
        <p>We&apos;ll also use your postcode to find your delivery address.</p>

        <div className="flex gap-4 py-6 px-8 mx-auto rounded-3xl bg-gray-300 mb-8">
          <div className="flex-shrink-0 relative w-12 h-12 m-0 p-0 flex items-center justify-center bg-white rounded-full">
            ⚠
          </div>
          <p className="text-md dark:text-gray-900">We cannot deliver to pick-up locations like InPost or OOHPod lockers or Post Offices.</p>
        </div>
        <hr className="my-3" />
        <button type="submit" className="w-full py-2 px-4 rounded-full bg-blue-500 text-white">Continue →</button>
      </form>
    </>
  );
}

const initialState = {
  message: "",
};
