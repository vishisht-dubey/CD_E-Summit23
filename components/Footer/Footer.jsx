import Link from "next/link";
import Image from "next/image";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex justify-center gap-6">
            <Link
              className="text-blue-500 hover:text-blue-500/75 hover:scale-125 transition ease-in-out"
              href="https://twitter.com/ecelliitbhu"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </Link>
            <Link
              className="text-pink-600 hover:text-pink-600/75 hover:scale-125 transition ease-in-out"
              href="https://www.instagram.com/ecelliitbhu/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon fontSize="large" />
            </Link>

            <Link
              className="text-blue-600 hover:text-blue-600/75 hover:scale-125 transition ease-in-out"
              href="https://www.linkedin.com/company/ecelliitbhu/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </Link>

            <Link
              className="text-gray-900 hover:text-gray-900/75 dark:text-gray-300 dark:hover:text-gray-300/75 hover:scale-125 transition ease-in-out"
              href="https://www.youtube.com/c/ecelliitbhu"
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon
                className="text-red-600 hover:text-red-600/75"
                fontSize="large"
              />
            </Link>
          </div>

          <nav className="rounded-3xl border-4 border-orange-500 p-6 dark:border-orange-400">
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-bold">
              <li>
                <Link
                  className="text-gray-900 transition hover:text-gray-900/75 dark:text-black dark:hover:text-black/75"
                  href="https://www.ecelliitbhu.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-900 transition hover:text-gray-900/75 dark:text-black dark:hover:text-black/75"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Uses
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-900 transition hover:text-gray-900/75 dark:text-black dark:hover:text-black/75"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-900 transition hover:text-gray-900/75 dark:text-black dark:hover:text-black/75"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>

          <p className="mx-auto max-w-lg text-xs text-gray-500 dark:text-gray-500">
            {`E - Cell, IIT BHU Varanasi is a non-profit organization established to nurture the entrepreneurial culture in our college, and open doors for the next generation of startup founders, entrepreneurs and changemakers to leave behind a legacy!`}
            <span className="mt-4 block"> &copy; {year} E-Cell IIT BHU </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
