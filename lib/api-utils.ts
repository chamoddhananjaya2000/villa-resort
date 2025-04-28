export type ApiResponse<T = any> = {
  success: boolean
  data?: T
  message?: string
}

export function handleApiError(error: unknown): ApiResponse {
  console.error("API Error:", error)

  if (error instanceof Error) {
    return {
      success: false,
      message: error.message,
    }
  }

  return {
    success: false,
    message: "An unknown error occurred",
  }
}
