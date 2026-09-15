import { apiPost } from "@/lib/api"

export interface LoginRequest {
  email: string
  password: string
}

export interface TokenResponse {
  access_token: string
  token_type: string
}

const TOKEN_KEY = "vetino_access_token"

export async function login(
  credentials: LoginRequest,
): Promise<TokenResponse> {
  const response = await apiPost<TokenResponse>(
    "/auth/login",
    credentials,
  )

  localStorage.setItem(TOKEN_KEY, response.access_token)

  return response
}

export function getAccessToken(): string | null {
  if (typeof window === "undefined") {
    return null
  }

  return localStorage.getItem(TOKEN_KEY)
}

export function logout(): void {
  if (typeof window === "undefined") {
    return
  }

  localStorage.removeItem(TOKEN_KEY)
}

export function isAuthenticated(): boolean {
  return getAccessToken() !== null
}