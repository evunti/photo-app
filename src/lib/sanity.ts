import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
if (!projectId) {
  // eslint-disable-next-line no-console
  console.warn(
    "Sanity project ID is not set. Please check your environment variables."
  );
}
export const sanity = createClient({
  projectId: projectId || "",
  dataset,
  apiVersion: "2023-01-01",
  useCdn: true,
});
