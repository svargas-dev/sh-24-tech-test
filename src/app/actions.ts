"use server";

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

  console.log(JSON.stringify(parse, null, 4))

  const response = await fetch(`http://postcodes.io/postcodes/${parse.data.postcode}`);
  const data = await response.json();
  if (!data.result) {
    // TODO: add exceptions for some postcodes in allowlist
    return { 
      message: "Your postcode must be a valid UK postcode."
    };
  }

  console.log(JSON.stringify(data, null, 4));

  return { 
    message: "SUCCESS"
  };
}
