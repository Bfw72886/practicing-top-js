import { playerOne, playerTwo } from "@/app/lib/players";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <p>{playerOne.sayName()}</p>
      <p>{playerTwo.sayName()}</p>
    </div>
  );
}
