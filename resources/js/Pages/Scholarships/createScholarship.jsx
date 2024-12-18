import { Fragment, useRef, useState } from 'react';
import { router } from '@inertiajs/react'
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon  } from '@heroicons/react/24/outline';
import SelectionCriteria from '@/Pages/Partners/./partials/selection_criteria';
import SelectionRequirements from '@/Pages/Partners/./partials/selection_requirements';
import UsesSelect from '@/Pages/Partners/./partials/selection_uses';
import RenewSelect from '@/Pages/Partners/./partials/selection_renewable';
import BasisSelect from '@/Pages/Partners/./partials/selection_basis';
import { PlusIcon } from '@heroicons/react/24/solid';


export default function CreateScholarship() {
  const [data, setData] = useState({
    name: '',
    deadline: '',
    award_payments: '',
    fund_amount: '',
    // award_dispersal: '',
    description: '',
    additional_information: '',
    question1: '',
    question2: '',
    question3: '',
  })

  let [isOpen, setIsOpen] = useState(false)

  const cancelButtonRef = useRef(null);
  
  const [selected, setSelected] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [selectBasis, setSelectBasis] = useState([]);
  const [selectedRenew, setSelectedRenew] = useState([]);
  const [selectedUses, setSelectedUses] = useState([]);
  // const [selectedView, setSelectedView] = useState([]);  

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setData(data => ({
        ...data,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post(route('scholarship.create'), [data, selected, selectedValue, selectBasis, selectedRenew, selectedUses] );
    console.log(data, selected, selectedValue, selectBasis);
  }

  return (
    <>
        <a onClick={openModal}>  
          <PlusIcon className="h-12 w-12 text-gray-600" aria-hidden="true" />
          <h5 className="text-slate-400">Add New Scholarship</h5>
        </a>
      

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-left sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Create Scholarship
                      </Dialog.Title>
                      <div className="mt-2">
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-12">
                          <div className="border-b border-gray-900/10 pb-8">
                  
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                              <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-base text-left font-medium leading-6 text-gray-900">
                                  Name of Scholarship
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="scholarshship-name"
                                    value={data.name}
                                    id="name"
                                    autoComplete="scholarshship-name"
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>

                              <div className="col-span-full">
                                <label htmlFor="about" className="block text-base text-left font-medium leading-6 text-gray-900">
                                  Scholarship Description
                                </label>
                                <div className="mt-2">
                                  <textarea
                                    id="description"
                                    name="description"
                                    type="text"
                                    value={data.description}
                                    rows={5}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={'Description about scholarship'}
                                  />
                                </div>
                                <p className="mt-3 text-sm text-right leading-6 text-gray-600">Write a short description about the scholarship.</p>
                              </div>
                            </div>
                          </div>

                          <div className="border-b border-gray-900/10 pb-8">
                            <h2 className="text-base text-left font-semibold leading-7 text-gray-900">Scholarship Information</h2>
                            {/* <p className="mt-1 text-sm text-left leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm text-left font-medium leading-6 text-gray-900">
                                  Scholarship Deadline
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="date"
                                    name="fullname"
                                    value={data.deadline}
                                    id="deadline"
                                    autoComplete="deadline"
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm text-left font-medium leading-6 text-gray-900">
                                  Individual Award Amount
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="award_payments"
                                    value={data.award_payments}
                                    id="award_payments"
                                    autoComplete="award_payments"
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="ex: 2000"
                                  />
                                </div>
                              </div>

                              <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm text-left font-medium leading-6 text-gray-900">
                                  Fund Amount
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="fund_amount"
                                    name="fund_amount"
                                    value={data.fund_amount}
                                    type="text"
                                    autoComplete="fund-amount"
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="ex: 2000"
                                 />
                                </div>
                              </div>

                              {/* <div className="sm:col-span-3">
                                <label htmlFor="street-address" className="block text-sm text-left font-medium leading-6 text-gray-900">
                                  Street address
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div> */}

                              <div className="sm:col-span-3">
                                  <label htmlFor="country" className="block text-base text-left font-medium leading-6 text-gray-900">
                                      Selection Criteria
                                   </label>
                                  <SelectionCriteria selected={selected} setSelected={setSelected}/>
                              </div>

                              <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-base text-left font-medium leading-6 text-gray-900">
                                  Requirements
                                </label>
                                <SelectionRequirements selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                              </div>

                              <div className="sm:col-span-3">
                                <label htmlFor="basisAward" className="block text-base text-left font-medium leading-6 text-gray-900">
                                Possible basis for the Award
                                </label>
                                <BasisSelect selectBasis={selectBasis} setSelectBasis={setSelectBasis}/>
                              </div>
                              <div className="sm:col-span-3">
                                <label htmlFor="renewable" className="block text-base text-left font-medium leading-6 text-gray-900">
                                Frequency or Renew-ability of the Award
                                </label>
                                <RenewSelect selectedRenew={selectedRenew} setSelectedRenew={setSelectedRenew}/>
                              </div>
                              <div className="sm:col-span-3">
                                <label htmlFor="uses" className="block text-base text-left font-medium leading-6 text-gray-900">
                                Possible allowable uses of Award by student
                                </label>
                                <UsesSelect  selectedUses={selectedUses} setSelectedUses={setSelectedUses}/>
                              </div>

                            </div>
                          </div>

                          <div className="border-b border-gray-900/10 pb-4">
                          <div className="mt-4 space-y-10">
                              <div className="col-span-full">
                                <label htmlFor="about" className="block text-base text-left font-medium leading-6 text-gray-900">
                                  Additional question 1
                                </label>
                                <div className="mt-2">
                                  <textarea
                                    id="question1"
                                    name='question1'
                                    type="text"
                                    value={data.question1}
                                    rows={1}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 space-y-10">
                              <div className="col-span-full">
                                <label htmlFor="about" className="block text-base text-left font-medium leading-6 text-gray-900">
                                Additional question 2
                                </label>
                                <div className="mt-2">
                                  <textarea
                                    id="question2"
                                    name='question2'
                                    type="text"
                                    value={data.question2}
                                    rows={1}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                  />
                                </div>
                             </div>
                            </div>

                            <div className="mt-6 space-y-6">
                              <div className="col-span-full">
                                <label htmlFor="about" className="block text-base text-left font-medium leading-6 text-gray-900">
                                Additional question 3
                                </label>
                                <div className="mt-2">
                                  <textarea
                                    id="question3"
                                    name='question3'
                                    type="text"
                                    value={data.question3}
                                    rows={1}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                  />
                                </div>
                              </div>
                            </div>
                            {/* <h2 className="text-base text-left font-semibold leading-7 text-gray-900">Scholarship Rules</h2> */}
                            <div className="mt-4 space-y-10">
                              <div className="col-span-full">
                                <label htmlFor="about" className="block text-base text-left font-medium leading-6 text-gray-900">
                                  Additional information
                                </label>
                                <div className="mt-2">
                                  <textarea
                                    id="additional_information"
                                    name='additional_information'
                                    type="text"
                                    value={data.additional_information}
                                    rows={3}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                  />
                                </div>
                                <p className="mt-3 text-sm text-left leading-6 text-gray-600">Write a few additional sentences about the scholarship.</p>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                        <div className="sm:col-span-3">
                          <button
                            type="submit"
                            className="inline-block w-full px-3 py-3 my-4 font-bold text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg select-none shadow-soft-md bg-150 bg-x-25 leading-pro text-xs bg-gradient-to-tl from-red-700 to-pink-500 hover:shadow-soft-2xl hover:scale-102"
                            onClick={() => setIsOpen(false)}
                          >
                            Submit
                          </button>
                          </div>
                         
                        </div>

                      </form>
                      </div>
                    </div>
                  </div>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
