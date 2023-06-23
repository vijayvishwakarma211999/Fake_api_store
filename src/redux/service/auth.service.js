import  Axios  from "axios";
import { METHODS, SERVICE_ROUTES } from "../constant/serviceConstant";

export function AuthService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.AUTH_LOGIN,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
    .then((res)=>{
        return resolve(res);
    })
    .catch((err)=>{
        return reject(err);
    })
  });
}
