import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "dxkcrx6s", // from sanity.json or manage.sanity.io
  dataset: "production",
  useCdn: true, // `false` if you want fresh data
  apiVersion: "2024-06-14", // today's date or your schema's date
});
