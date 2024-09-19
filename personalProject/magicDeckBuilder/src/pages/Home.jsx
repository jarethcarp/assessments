import React from 'react'
import { FaRegPlusSquare, FaCopy } from "react-icons/fa"
import { Modal } from 'flowbite'

const Home = () => {

  const target = document.getElementById('default-modal')

  const options = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    closable: true,
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    },
  }

  const instanceOptions = {
    id: 'default-modal',
    override: true
  }

  const modal = new Modal(target, options, instanceOptions)

  return (
    <div>
        <div>
            Welcome to Jareth's Magic the gathering Deckbuilder
        </div>
        <div>
            You can log in to see and make your own decks or go see what other people have made
        </div>
        <div className="float bg-gold">
        <FaCopy data-modal-target="default-modal" data-modal-toggle="default-modal" className="size-5 text-gray hover:text-blue active:bg-gold" type='button' onClick={() => {modal.toggle()}}  />
        <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Toggle modal
        </button>
      </div>

      <div id="default-modal" tabIndex={'-1'} aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div  class="relative p-4 w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Test
              </p>
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <FaCopy data-modal-hide="default-modal" className="size-5 hover:text-blue active:bg-black" onClick={() => {modal.toggle()}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home