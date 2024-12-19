import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  apiVersion: "v2024-12-18",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_ACCESS_TOKEN,

  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
