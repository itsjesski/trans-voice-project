import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

export const StatsSection = () => {
  const stats = [
    {
      name: "Recordings created",
      stat: "71",
      previousStat: "70",
      change: "1",
      changeType: "increase",
    },
    {
      name: "Average rating",
      stat: "Androgynous",
    },
    {
      name: "Feedback received",
      stat: "21",
      previousStat: "23",
      change: "2",
      changeType: "decrease",
    },
    {
      name: "Feedback given",
      stat: "12",
      previousStat: "9",
      change: "3",
      changeType: "increase",
    },
  ];
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-white">
        Last 30 days
      </h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-900 overflow-hidden rounded-lg bg-gray-600/35 backdrop-filter backdrop-blur shadow md:grid-cols-4 md:divide-x md:divide-y-0">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-200">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-violet-400">
                {item.stat}
                {item.previousStat && (
                  <span className="ml-2 text-sm font-medium text-gray-400">
                    from {item.previousStat}
                  </span>
                )}
              </div>

              {item.changeType && (
                <div
                  className={clsx(
                    item.changeType === "increase"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-gray-400/10 text-gray-400",
                    "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowUpIcon
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownIcon
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-gray-400"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {" "}
                    {item.changeType === "increase"
                      ? "Increased"
                      : "Decreased"}{" "}
                    by{" "}
                  </span>
                  {item.change}
                </div>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
