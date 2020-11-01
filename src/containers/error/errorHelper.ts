export const getErrorMessage = (err: {
  status: number;
  data?: {
    message: string;
  };
}) => {
  if (err?.data?.message) {
    return `Error: ${err.data.message}`;
  }

  return 'Error [500]: An unexpected error has occurred.';
};
