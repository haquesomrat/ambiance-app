export const generateImage = (path: string) => {
  if (!path) {
    return "";
  }

  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
};
