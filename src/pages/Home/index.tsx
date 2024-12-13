import { Button, Error, Input, Searching, Title, UserCard } from "@/components";
import { useSearchUser } from "@/hooks";
import { useState } from "react";

export const Home = () => {
  const [input, setInput] = useState<string>("");

  const { mutateAsync, data: user, error, isPending } = useSearchUser({});

  const handleSearch = async () => {
    await mutateAsync(input);
  };

  return (
    <div className="flex h-full flex-1 items-center justify-center bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <Title title="GitHub User Search" />

        <div className="mb-6 flex gap-2">
          <Input value={input} onChange={(e) => setInput(e.target.value)} />

          <Button disabled={isPending} onClick={handleSearch}>
            {isPending ? "Searching..." : "Search"}
          </Button>
        </div>

        {error && !user && <Error onSubmit={() => setInput("")} />}

        {isPending && !error && <Searching />}

        {user && <UserCard {...user} />}
      </div>
    </div>
  );
};
