/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorResponse } from "@/app/interface/error";
import { AxiosError } from "axios";


const handleAxiosError = (
  error: AxiosError<ErrorResponse>
): { error: string } => {
  const { response, request, message } = error;

  if (response) {
    return {
      error:
        response?.data?.message ||
        "Something is wrong. Please try again later.",
    };
  }

  if (request) {
    return {
      error:
        request?.data?.message || "Something is wrong. Please try again later.",
    };
  }

  return { error: message || "Something is wrong. Please try again later." };
};

export default handleAxiosError;
