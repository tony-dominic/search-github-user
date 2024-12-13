import { Repository } from "@/types/repos";

interface ListProps {
  data: Repository[];
}

export const List = ({ data }: ListProps) => {
  if (data.length === 0) {
    return (
      <p className="text-lg text-gray-500">
        No repositories found for this user.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((repo) => (
        <Item key={repo.name} repo={repo} />
      ))}
    </div>
  );
};

export const Item = ({ repo }: { repo: Repository }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6"
      >
        <h3 className="text-xl font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800">
          {repo.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          {repo.description || "No description available."}
        </p>
      </a>
    </div>
  );
};
