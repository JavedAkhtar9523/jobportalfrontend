import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react"; // default icon

export default function LinkButton({
  redirection,
  name,
  linkclassname = "",
  icon,
}) {
  const IconComponent = icon || ArrowRight;

  return (
    <Link
      href={`${redirection}`}
      className={`text-white bg-[#0A66C2]  font-semibold inline-flex items-center gap-1 mx-2 sm:px-2 py-2 rounded ${linkclassname}`}
    >
      <span>{name}</span>
      <IconComponent size={16} />
    </Link>
  );
}
