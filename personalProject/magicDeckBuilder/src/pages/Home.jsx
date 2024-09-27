import React from 'react'
import { useState } from 'react'
import { FaRegPlusSquare, FaCopy } from "react-icons/fa"
import { Modal } from 'flowbite'

const Home = () => {
  const [update, setUpdate] = useState(true)
  const $target = document.getElementById('default-modal')

  const options = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses:
        'bg-gray-900/50 fixed inset-0 z-40',
    closable: true,
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
        setUpdate(!update)
    },
  }

  const instanceOptions = {
    id: 'default-modal',
    override: true
  }

  const modal = new Modal($target, options, instanceOptions)

  return (
    <div>
        <div>
            Welcome to Jareth's Magic the gathering Deckbuilder
        </div>
        <div>
            You can log in to see and make your own decks or go see what other people have made
        </div>
    </div>
  )
}

export default Home