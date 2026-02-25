import { fileStatus } from "./services.js";

const useFileStats = async (path) => {
   const stats = await fileStatus(path);
   if (!stats) {
      return;
   }
   console.log(stats.size);
   console.log(stats.isFile());
   console.log(stats.isDirectory());
};

useFileStats("./services.js");