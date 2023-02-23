import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server

    return axios.create({
      // baseURL: "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",        
      baseURL: "http://www.pablo-magro-gaspar.site",        
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: "/",
    });
  }
};

export default buildClient;
