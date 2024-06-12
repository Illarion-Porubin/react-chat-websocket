import React from 'react'

export const MessageBlock = () => {
  return (
    <div className='message_block'>
        <form>
          <input type="text" className='user_message'/>
          <button>Сказать</button>
        </form>
    </div>
  )
}
