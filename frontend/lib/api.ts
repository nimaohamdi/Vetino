const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"

type ApiRequestOptions = RequestInit & {
  token?: string
}

export async function apiRequest<T>(
  endpoint: string,
  options: ApiRequestOptions = {},
): Promise<T> {
  const { token, ...requestOptions } = options

  const headers = new Headers(requestOptions.headers)

  headers.set("Content-Type", "application/json")

  if (token) {
    headers.set("Authorization", `Bearer ${token}`)
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...requestOptions,
    headers,
  })

  if (!response.ok) {
    let message = `API request failed with status ${response.status}`

    try {
      const errorData = await response.json()

      if (typeof errorData?.detail === "string") {
        message = errorData.detail
      }
    } catch {
      // Ignore invalid or empty error responses.
    }

    throw new Error(message)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}

export function apiGet<T>(
  endpoint: string,
  options?: ApiRequestOptions,
) {
  return apiRequest<T>(endpoint, {
    ...options,
    method: "GET",
  })
}

export function apiPost<T>(
  endpoint: string,
  body?: unknown,
  options?: ApiRequestOptions,
) {
  return apiRequest<T>(endpoint, {
    ...options,
    method: "POST",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
}

export function apiPut<T>(
  endpoint: string,
  body?: unknown,
  options?: ApiRequestOptions,
) {
  return apiRequest<T>(endpoint, {
    ...options,
    method: "PUT",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
}

export function apiPatch<T>(
  endpoint: string,
  body?: unknown,
  options?: ApiRequestOptions,
) {
  return apiRequest<T>(endpoint, {
    ...options,
    method: "PATCH",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
}

export function apiDelete<T>(
  endpoint: string,
  options?: ApiRequestOptions,
) {
  return apiRequest<T>(endpoint, {
    ...options,
    method: "DELETE",
  })
}
