import type { AxiosError } from 'axios';
import type { ApiErrorPayload } from '../types/parking';

export const getApiErrorMessage = (error: unknown, fallback: string): ApiErrorPayload => {
  const axiosError = error as AxiosError<{ message?: string | string[]; error?: string }>;

  const responseMessage = axiosError.response?.data?.message;
  const responseError = axiosError.response?.data?.error;

  if (Array.isArray(responseMessage) && responseMessage.length > 0) {
    return {
      message: responseMessage.join(', '),
      statusCode: axiosError.response?.status,
    };
  }

  if (typeof responseMessage === 'string' && responseMessage.length > 0) {
    return {
      message: responseMessage,
      statusCode: axiosError.response?.status,
    };
  }

  if (typeof responseError === 'string' && responseError.length > 0) {
    return {
      message: responseError,
      statusCode: axiosError.response?.status,
    };
  }

  if (axiosError.message) {
    return {
      message: axiosError.message,
      statusCode: axiosError.response?.status,
    };
  }

  return { message: fallback };
};
