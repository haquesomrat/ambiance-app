/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { ErrorResponse } from "@/app/interface/error";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";
import { AxiosError } from "axios";

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`/post/get-all-post`);
    return response.data;
  } catch (error: any) {
    return handleAxiosError(error as AxiosError<ErrorResponse>);
  }
};
