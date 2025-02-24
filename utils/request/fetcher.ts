import request from ".";

export const postFetcher = <T>(
  param: string | [string, any],
  options?: any
) => {
  let url;
  let data;

  if (Array.isArray(param)) {
    url = param[0];
    if (param.length === 2) {
      data = param[1];
    }
  }

  if (typeof param === "string") {
    url = param;
    if (options?.arg) {
      data = options.arg;
    }
  }

  // console.log("[postFetcher] ", url, data);
  return request<T>({ url, method: "POST", data });
};

export const getFetcher = <T>(url: string) => {
  return request<T>({ url, method: "GET" });
};

// export const putFetcher = <T = any>(url: string, options?: any) => {
//   return put<T>({
//     ...(options?.arg && { data: options?.arg }),
//     url,
//   });
// };

// export const deleteFetcher = <T = any>(
//   url: string,
//   options?: Record<string, any>,
// ) => {
//   return _delete<T>({ url, param: options?.arg });
// };
