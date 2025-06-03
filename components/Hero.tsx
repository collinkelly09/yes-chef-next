import { italianno } from "@/app/layout";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`${italianno.className} text-5xl md:text-7xl flex justify-center items-center md:pb-3`}
      >
        yesChef
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-5 md:my-8" />
    </div>
  );
}
