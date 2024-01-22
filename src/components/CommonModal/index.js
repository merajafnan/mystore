'use client';

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";


export default function CommonModal() {
  return (
    <Transition.Root as={Fragment}>
      <Dialog as="div" className={'relative' z-10}>
      <Transition.Child as={Fragment} enter="ease-in-out"></Transition.Child>
    </Dialog>
    </Transition.Root >
  )
}