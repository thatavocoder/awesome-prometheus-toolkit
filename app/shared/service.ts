enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

interface RequestOptions {
  method: RequestMethod;
  headers: {
    'Content-Type': string;
  };
  body?: string;
}

export async function apiRequest(
  endpoint: string,
  method: RequestMethod = RequestMethod.GET,
  data: unknown = null,
): Promise<Response> {
  const options: RequestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(endpoint, options);

    if (!response.ok) {
      const errorData = await response.json();
      return Promise.reject(
        new Error(errorData.message || 'Something went wrong'),
      );
    }

    return response;
  } catch (error) {
    return Promise.reject(new Error('Something went wrong'));
  }
}

export function get(
  endpoint: string,
  params: Record<string, unknown> = {},
): Promise<Response> {
  const queryString = new URLSearchParams(
    params as Record<string, string>,
  ).toString();
  const url = queryString ? `${endpoint}?${queryString}` : endpoint;
  return apiRequest(url, RequestMethod.GET);
}

export function post(endpoint: string, data: unknown): Promise<Response> {
  return apiRequest(endpoint, RequestMethod.POST, data);
}

export function put(endpoint: string, data: unknown): Promise<Response> {
  return apiRequest(endpoint, RequestMethod.PUT, data);
}

export function del(endpoint: string): Promise<Response> {
  return apiRequest(endpoint, RequestMethod.DELETE);
}
