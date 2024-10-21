/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { ErrorResponse } from "@/app/interface/error";
import handleAxiosError from "@/handlers/axios/error";
import axios from "@/lib/axios";
import { AxiosError } from "axios";

export const getSinglePosts = async (id: string) => {
  try {
    const response = await axios.get(`/post/get-post/${id}`);
    return response.data;
  } catch (error: any) {
    return handleAxiosError(error as AxiosError<ErrorResponse>);
  }
};
