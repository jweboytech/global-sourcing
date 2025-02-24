import QueryString from "qs";

export function getGoogleWindowParams() {
  // 打开新窗口
  const width = 500;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2.5;
  const params = QueryString.stringify(
    { width, height, left, top },
    { delimiter: "," }
  );

  return params;
}

export function serializateQuery(
  data: Record<string, any>,
  addQueryPrefix: boolean = true
) {
  return QueryString.stringify(data, { addQueryPrefix });
}

export function serializateUrl<T extends object>(url: string, param: T) {
  const query = serializateQuery(param);

  return url + query;
}
