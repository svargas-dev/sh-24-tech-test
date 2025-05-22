"use server";

import { redirect } from 'next/navigation'
import { z } from "zod";

export async function checkPostcode(prevState: {
  message: string;
}, formData: FormData) {
  if (!formData.get("postcode")) {
    return { 
      message: "Postcode is required"
    };
  }

  const schema = z.object({
    postcode: z.string().trim().toUpperCase().regex(/^[A-Z\d]+ ?[A-Z\d]+$/),
  });
  const parse = schema.safeParse({
    postcode: (formData.get("postcode") as string).replace(/\s/g, ""),
  });

  if (!parse.success) {
    return { 
      message: "Your postcode must be a valid UK postcode."
    };
  }

  if (allowlist.includes(parse.data.postcode)) {
    redirect("/success");
  }

  const response = await fetch(`http://postcodes.io/postcodes/${parse.data.postcode}`);
  const data = await response.json();

  if (!data.result) {
    return {
      message: "Your postcode must be a valid UK postcode."
    };
  }

  if (lsoaRegex.test(data.result.lsoa)) {
    redirect("/success");
  }

  redirect("/out-of-service-area");
}

const lsoaRegex = /^Lambeth|Southwark/;
const allowlist = [
  "SH241AA",
  "SH241AB",
];
