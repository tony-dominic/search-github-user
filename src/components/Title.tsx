import { ReactNode } from "react";

export const Title = ({ title }: { title: ReactNode }) => {
  return (
    <h1 className="mb-8 text-center text-3xl font-extrabold text-blue-600">
      {title}
    </h1>
  );
};
