import { User } from "@/types/user";
import { useNavigate } from "react-router-dom";

export const UserCard = ({ ...user }: User) => {
  const navigate = useNavigate();

  const goToDetail = (id: string) => navigate(`/${id}`);

  return (
    <div
      className="mt-8 cursor-pointer rounded-lg bg-white p-6 shadow-xl transition-all duration-200 hover:shadow-2xl"
      onClick={() => goToDetail(user.login)}
    >
      <div className="flex gap-x-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="mb-4 h-20 w-20 rounded-full border-4 border-blue-200 shadow-md"
        />

        <div>
          <h2 className="text-2xl font-semibold text-blue-800">
            {user.name || user.login}
          </h2>
          <p className="text-lg text-gray-600">
            {user.bio || "No bio available"}
          </p>
        </div>
      </div>
    </div>
  );
};
