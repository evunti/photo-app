import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'a1xx4x23', // your project ID
  dataset: 'production',
  apiVersion: '2023-07-01', // use a recent date
  useCdn: true,
})
