/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { ErrorResponse } from "@/app/interface/error";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";
import { AxiosError } from "axios";

export const sendEmail = async (data: any) => {
  try {
    const response = await axios.post(`/contact-us`, data);
    return response.data;
  } catch (error: any) {
    return handleAxiosError(error as AxiosError<ErrorResponse>);
  }
};