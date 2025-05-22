"use client";

import { Logo } from "../components/icons/logo";
import { FormPage } from "./form-page";
import { useActionState } from "react";
import { checkPostcode } from "./actions";


export default function Home() {
  const [state, formAction] = useActionState(checkPostcode, initialState);

  return (
    <div className="mx-6">
      <header className="flex justify-center py-8">
        <Logo />
      </header>
      <main className="max-w-xl mx-auto my-4">
        <h1 className="text-3xl text-center font-bold mt-4 mb-8">Sam Vargas: Tech Test</h1>

        {state.message !== "SUCCESS" && (
          <FormPage state={state} formAction={formAction} />
        )}

        {state.message === "SUCCESS" && (
          <h2 className="text-xl mb-3 font-semibold text-center">
            We&apos;re available in your area!
          </h2>
        )}
      </main>
    </div>
  );
}

const initialState = {
  message: "",
};
