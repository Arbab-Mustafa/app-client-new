import { ComponentProps } from "react";

export const Shield = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={277}
      height={369}
      viewBox="0 0 277 369"
      fill="none"
      {...props}
    >
      <path
        fill="#3A426C"
        d="M138.5 75.983c28.116 16.99 53.461 24.6 76.944 28.183v119.31c0 24.692-6.386 29.75-76.944 73.185V75.983ZM277 46.125v177.351c0 70.771-49.291 89.236-138.5 145.524C49.29 312.712 0 294.247 0 223.476V46.125c54.107 0 86.624-2.06 138.5-46.125 51.876 44.065 84.393 46.125 138.5 46.125Zm-17 16.357c-37.641-1.906-83.028-12.23-121.5-39.982C100.028 50.252 54.641 60.576 17 62.482v160.994c0 46.77 39.785 74.64 121.5 125.024C220.261 298.055 260 270.246 260 223.476V62.482Z"
      />
    </svg>
  );
};
