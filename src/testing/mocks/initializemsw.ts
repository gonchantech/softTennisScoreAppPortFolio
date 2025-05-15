import { IS_SERVER } from "@/config/constants";
import { seedDb } from "./seedDb";

export const initializemsw = () => {
  console.log("initializemsw");
  if (IS_SERVER) {
    const { server } = require("./server");
    server.listen();
    seedDb();
  }
};
