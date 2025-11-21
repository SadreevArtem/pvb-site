"use client";
import { scrolltoHash } from "@/lib";
import React from "react";

type Props = {
  className?: string;
};

export const GlossaryLinks: React.FC<Props> = ({ className = "string" }) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="container">
      <ul className="flex flex-wrap gap-4 md:ml-[160px] my-4 ">
        {alphabet.map((item, index) => (
          <li key={index}>
            <div
              className="header-link hover:underline"
              onClick={() => scrolltoHash(item)}
            >
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
