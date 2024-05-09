import { MicrophoneIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { CreateRecordingModal } from "../modal/CreateRecordingModal";
import { useMyRecordings } from "../../hooks/api/useMyRecordings";
import { RecordingPlayer } from "../recordings/RecordingPlayer";

export const RecordingsSection = () => {
  const { data } = useMyRecordings();

  const recordings = data ?? [];

  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="mt-10">
      <div className="mx-auto max-w-7xl">
        <div className="py-10">
          <div className="">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">
                  Voice recordings
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                  Below are your anonymous recordings and feedback. Remember,
                  any feedback is part of the process, even if it's not what you
                  hoped for — keep practicing!
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                {recordings?.length > 0 && (
                  <button
                    type="button"
                    className="block rounded-md bg-violet-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    onClick={() => setShowCreateModal(true)}
                  >
                    <PlusIcon className="w-5 h-5 inline-block mr-2" />
                    Create recording
                  </button>
                )}
              </div>
            </div>
            <div className="mt-8 flow-root">
              {recordings.length === 0 && (
                <div className="text-center">
                  <MicrophoneIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-semibold text-gray-200">
                    No recordings
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Get started by creating a new voice recording.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => setShowCreateModal(true)}
                    >
                      <PlusIcon
                        className="-ml-0.5 mr-1.5 h-5 w-5"
                        aria-hidden="true"
                      />
                      New Recording
                    </button>
                  </div>
                </div>
              )}
              {recordings.length > 0 && (
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    {/* <table className="min-w-full divide-y divide-gray-700">
                      <thead>
                        <tr>
                          <th scope="col" className="w-10"></th>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          ></th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            Ratings
                          </th>
                          <th
                            scope="col"
                            className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                          >
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        {recordings.map((recording) => (
                          <tr key={recording._id}>
                            <td></td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                              {recording.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300"></td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {recording.ratings?.length ?? 0}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <a
                                href="#"
                                className="text-indigo-400 hover:text-indigo-300"
                              >
                                Edit
                                <span className="sr-only">
                                  , {recording.name}
                                </span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table> */}
                    <div className="w-full flex flex-col gap-y-3">
                      {recordings.map((recording) => {
                        return (
                          <div
                            key={recording._id}
                            className="border-2 border-white/15 rounded-lg p-3 w-full"
                          >
                            <div className="text-white">{recording.name}</div>
                            <RecordingPlayer url={recording.url} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <CreateRecordingModal
        isOpen={showCreateModal}
        setIsOpen={setShowCreateModal}
      />
    </div>
  );
};
