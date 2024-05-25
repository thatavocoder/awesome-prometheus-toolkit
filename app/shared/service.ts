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

export async function apiRequest<T>(
  endpoint: string,
  method: RequestMethod = RequestMethod.GET,
  data: unknown = null,
): Promise<T> {
  const options: RequestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(endpoint, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }

  return response.json();
}

export function get<T>(
  endpoint: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  const queryString = new URLSearchParams(
    params as Record<string, string>,
  ).toString();
  const url = queryString ? `${endpoint}?${queryString}` : endpoint;
  return apiRequest<T>(url, RequestMethod.GET);
}

export function post<T>(endpoint: string, data: unknown): Promise<T> {
  return apiRequest<T>(endpoint, RequestMethod.POST, data);
}

export function put<T>(endpoint: string, data: unknown): Promise<T> {
  return apiRequest<T>(endpoint, RequestMethod.PUT, data);
}

export function del<T>(endpoint: string): Promise<T> {
  return apiRequest<T>(endpoint, RequestMethod.DELETE);
}
