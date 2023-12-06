import Link from "next/link";
import React from "react";

type Props = {};

const Pagination = (props: Props) => {
  return (
    <ul className="flex items-center justify-center pt-8">
      <li className="mx-1">
        <Link
          href="#0"
          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
        >
          Prev
        </Link>
      </li>
      <li className="mx-1">
        <Link
          href="#0"
          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
        >
          1
        </Link>
      </li>
      <li className="mx-1">
        <Link
          href="#0"
          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
        >
          2
        </Link>
      </li>
      <li className="mx-1">
        <Link
          href="#0"
          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
        >
          3
        </Link>
      </li>
      <li className="mx-1">
        <Link
          href={"#0"}
          className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color"
        >
          ...
        </Link>
      </li>
      <li className="mx-1">
        <Link
          href="#0"
          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
        >
          12
        </Link>
      </li>
      <li className="mx-1">
        <Link
          href="#0"
          className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
        >
          Next
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
