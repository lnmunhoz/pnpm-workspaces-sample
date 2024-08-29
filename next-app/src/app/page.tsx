import { greet } from "@project/common";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {greet("NextJS App using pnpm workspaces")}
    </main>
  );
}
