import Image from "next/image";
import React from "react";

export default function DraggingCard({ location }) {
  return (
    <div
      className="flex items-center hover:bg-slate-100 rounded-md p-4 gap-4
    w-[288px] shadow-md z-10
    "
    >
      <Image
        src={location.image}
        alt={location.title}
        width={32}
        height={32}
        className="rounded-md cover"
      />
      <h2 className="font-medium text-base">{location.title}</h2>
    </div>
  );
}
