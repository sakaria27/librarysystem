import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "3jb8lsau",
  dataset: "production",
  apiVersion: "2023-10-01",
  token: "skCfPe5xdlHBGQ8oSn5IwPJr3AOuuZ5NNuiaQlYzZhlV6l43sAKv3Sz11yqRcRiQlLKSGXwGlnqK8g5rKt1B7MD47EYxFMPXjUpItNAr9rduVynkqvOcM8PO7pNCaWt7lK4XABVU8bg15J3mES50J2ErzqBKVeGgekLEenXwnb72FjacdGsa",
  useCdn: false
});

export default client