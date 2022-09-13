import Commerce from "@chec/commerce.js";

const checAPIKey = import.meta.env.VITE_CHEC_PUBLIC_KEY || "";
const devEnvironment = import.meta.env.NODE_ENV === "development";

const commerceConfig = {
  axiosConfig: {
    headers: {
      "X-Chec-Agent": "commerce.js/v2",
      "Chec-Version": "2021-09-29",
    },
  },
};

export default new Commerce(checAPIKey, devEnvironment, commerceConfig);
