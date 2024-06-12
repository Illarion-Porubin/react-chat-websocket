    import React from 'react'
    
    export const Body = () => {
      return (
        <>
          <header className='header'>
            <button className='btn'>Покинуть чат</button>
          </header>

          <div className='container'>
              <div className='chats'>
                <p>Вы</p>
                <div className='message_sendler'>
                  <p></p>
                </div>
              </div>
          </div>

          <div className='container'>
              <div className='chats'>
                <p>Вы</p>
                <div className='message_recipient'>
                  <p></p>
                </div>
              </div>
          </div>
        </>
      )
    }
    