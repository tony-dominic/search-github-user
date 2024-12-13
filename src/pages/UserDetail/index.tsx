import { Error, Loading, Title } from "@/components";
import { List } from "@/components/List";
import { useUser } from "@/hooks/useUser";
import { useParams } from "react-router-dom";

export const UserDetail = () => {
  const { userId } = useParams();

  const { data, isLoading, error } = useUser(userId || "", {
    options: { enabled: !!userId },
  });

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <div className="flex h-full items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50">
        <Error />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-1 items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="space-y-2 py-2">
        <Title title={`Hi ${userId} 🚀`} />

        <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">
            Your Repositories
          </h2>

          <List data={data || []} />
        </div>
      </div>
    </div>
  );
};
