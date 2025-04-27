import { theHobbit } from "@/app/lib/books";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <p>{theHobbit.info()}</p>
    </div>
  );
}
