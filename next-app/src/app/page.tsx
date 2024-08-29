import { greet } from "@project/common";
import { Button } from "@project/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {greet("NextJS App using pnpm workspaces")}

      <Button />
    </main>
  );
}
