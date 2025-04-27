import { playerOne, playerTwo, getName } from "@/app/lib/players";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <p>{getName(playerOne)}</p>
      <p>{getName(playerTwo)}</p>
    </div>
  );
}
