import { Form } from "./form";

export default function Home() {
  return (
    <>
      <h2 className="text-xl mb-3 font-semibold">
        First, let&apos;s check if we&apos;re available in your area
      </h2>
      <p className="text-md">
        We&apos;re funded to deliver free services in areas across the UK. We work with local commissioners to decide what to offer in different places. Enter your postcode to see if you&apos;re eligible for our services.
      </p>

      <Form />
    </>
  );
}
