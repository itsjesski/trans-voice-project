import {
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  panelClassName?: string;
  titleClassName?: string;
  onClose: (bool: boolean) => void;
}

export const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  panelClassName,
  titleClassName,
}: Props) => {
  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={onClose}
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className="fixed inset-0 bg-black/30 backdrop-filter backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel
                className={clsx(
                  "max-w-[90%] w-full rounded-xl bg-white/5 p-6 backdrop-blur-2xl relative",
                  panelClassName
                )}
              >
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <CloseButton
                    onClick={() => onClose(false)}
                    className="rounded-md  text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </CloseButton>
                </div>
                {title && (
                  <DialogTitle
                    as="h3"
                    className={clsx(
                      "text-base/7 font-medium text-white",
                      titleClassName
                    )}
                  >
                    {title}
                  </DialogTitle>
                )}
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
