import Link from "next/link";

const Logo = () => {
  return (
    <div className="fitems-center gap-2 flex-shrink-0 flex">
      <Link href="/" className="text-2xl font-bold relative inline-block">
        <span
          className="relative bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #B88746 10%, #FDF5A6 150%)",
          }}
        >
          UI
          <span
            aria-hidden="true"
            className="absolute left-0 bottom-0 h-[4px] w-full rounded-full"
            style={{
              background:
                "linear-gradient(to right, #B88746 10%, #FDF5A6 150%)",
            }}
          />
        </span>
        <span className="text-2xl text-gray-300">view</span>
      </Link>
      <span className="relative rounded-md bg-muted px-2 h-4 mt-3.5 -ml-1 text-xs align-middle text-muted-foreground shimmer">
        v1.0.0
      </span>
    </div>
  );
};

export default Logo;
