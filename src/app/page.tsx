"use client"
import { toast } from "sonner"
 
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Shadcn Button below
        </h1>
        <Button
          variant="outline"
          onClick={() =>
            toast("Shadcn is working!", {
              description: "This means that shadcn is working perfectly!",
              action: {
                label: "Close",
                onClick: () => console.log("toast closed"),
              },
            })
        }
        >
          Click here
        </Button>
      </div>
    </main>
  );
}
