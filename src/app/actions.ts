"use server";

import { redirect } from 'next/navigation'
import { z } from "zod/v4";

export async function checkPostcode(prevState: {
  message: string;
}, formData: FormData) {
  if (!formData.get("postcode")) {
    return {
      message: "Postcode is required"
    };
  }

  const PostCodeSchema = z.object({
    // This is very simple normalization & validation of a postcode input
    // In the real-world you may want a more complex regex validation
    // or a library to validate postcode formats
    postcode: z.string()
      .trim()
      .toUpperCase()
      .regex(/^[A-Z\d]+ ?[A-Z\d]+$/)
      .transform(val => val.replace(/\s/g, "")),
  });
  const parse = PostCodeSchema.safeParse({
    postcode: formData.get("postcode"),
  });

  if (!parse.success) {
    return {
      message: "Your postcode must be a valid UK postcode."
    };
  }

  if (allowList.includes(parse.data.postcode)) {
    redirect("/success");
  }

  const response = await fetch(`http://postcodes.io/postcodes/${parse.data.postcode}`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 }
  });
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
const allowList = [
  "SH241AA",
  "SH241AB",
];
