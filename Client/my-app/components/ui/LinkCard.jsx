import Link from "next/link";

const LinkCard = ({ redirectLink }) => {
  return (
    <div
      role="alert"
      className=" transition ease-in-out hover:-translate-y-1 duration-700  flex justify-between rounded-xl border border-gray-100 bg-white p-4"
    >
      
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">
            {" "}
            URL Shorterned{" "}
          </strong>

          <p className="mt-1 text-sm text-gray-700">{redirectLink}</p>

          <div className="mt-4 flex gap-2">
            <Link
              href={redirectLink}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              <span className="text-sm"> Visit </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Link>

            <button
              className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-[#e7e7e7]"
              onClick={() => navigator.clipboard.writeText(redirectLink)}
            >
              <span className="text-sm">Copy</span>
            </button>
          </div>
        </div>
      </div>
      <div><span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span></div>
    </div>
  );
};

export default LinkCard;
