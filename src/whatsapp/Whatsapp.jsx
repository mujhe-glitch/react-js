import React, { useState } from 'react'
import './whatsapp.css'
export const Whatsapp = () => {

  const [activeTab, setactiveTab] = useState('PHONE SETTINGS')
  const [hoveredMessage, setHoveredMessage] = useState(null)

  const [name, setname] = useState('')
  const [status, setstatus] = useState('')
  const [operator, setoperator] = useState('')
  const [phoneClock, setphoneClock] = useState('12:00')

  const [labels, setlabels] = useState({
    chats: 'Chats',
    contact: 'Contact',
    message: 'Message'
  })

  const [profilePic, setprofilePic] = useState(null)

  const [messages, setmessages] = useState([])
  const [inputMsg, setinputMsg] = useState('')
  const [msgType, setmsgType] = useState('sent')

  const [battery, setBattery] = useState(80)
  const [showPercent, setShowPercent] = useState(true)
  const [connection, setConnection] = useState('4G')
  const [signal] = useState(4)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) setprofilePic(URL.createObjectURL(file))
  }

  const addMessage = () => {
    if (!inputMsg.trim()) return

    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })

    setmessages([
      ...messages,
      { id: Date.now(), text: inputMsg, type: msgType, time }
    ])

    setinputMsg('')
  }

  const deleteMessage = (id) => {
    setmessages(messages.filter(m => m.id !== id))
  }

  return (
    <div className="wa-app-container">

      <nav className="wa-tabs-nav">
        {['PHONE SETTINGS', 'BATTERY OPTIONS', 'CONNECTION', 'MESSAGES'].map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'tab-link active' : 'tab-link'}
            onClick={() => setactiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="wa-main-layout">

        <aside className="wa-settings-sidebar">

          {activeTab === 'PHONE SETTINGS' && (
            <div className="settings-grid">
              <div><label>Name</label><input value={name} onChange={e => setname(e.target.value)} /></div>
              <div><label>Status</label><input value={status} onChange={e => setstatus(e.target.value)} /></div>
              <div><label>Operator</label><input value={operator} onChange={e => setoperator(e.target.value)} /></div>
              <div><label>Clock</label><input value={phoneClock} onChange={e => setphoneClock(e.target.value)} /></div>
              <div><label>Chats Label</label><input value={labels.chats} onChange={e => setlabels({ ...labels, chats: e.target.value })} /></div>
              <div><label>Message Placeholder</label><input value={labels.message} onChange={e => setlabels({ ...labels, message: e.target.value })} /></div>
              <div>
                <label>Profile Pic</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </div>
            </div>
          )}

          {activeTab === 'BATTERY OPTIONS' && (
            <div>
              <p>Battery: {battery}%</p>
              <input type="range" min="1" max="100" value={battery} onChange={e => setBattery(e.target.value)} />
              <label>
                <input type="checkbox" checked={showPercent} onChange={() => setShowPercent(!showPercent)} />
                Show %
              </label>
            </div>
          )}

          {activeTab === 'CONNECTION' && (
            ['None', '3G', '4G', '5G', 'WiFi'].map(c => (
              <label key={c}>
                <input type="radio" checked={connection === c} onChange={() => setConnection(c)} />
                {c}
              </label>
            ))
          )}

          {activeTab === 'MESSAGES' && (
            <div>
              <button onClick={() => setmsgType('sent')}>Sender</button>
              <button onClick={() => setmsgType('received')}>Receiver</button>
              <textarea value={inputMsg} onChange={e => setinputMsg(e.target.value)} />
              <button onClick={addMessage}>Add</button>
            </div>
          )}

        </aside>

        <section className="wa-preview-area">
          <div className="iphone-outer-shell">
            <div className="iphone-inner-screen">

             
              <div className="iphone-status-bar">
              <span>
                {'●'.repeat(signal)} {operator} {connection !== 'None' && connection}
              </span>
              <span>{phoneClock}</span>
              <span>{showPercent && `${battery}%`} 🔋</span>
              </div>

              <header className="iphone-chat-header">
                <span>‹ {labels.chats}</span>
                <div>
                  <div>{name}</div>
                  <div>{status}</div>
                </div>
                <img src={profilePic} className="wa-header-pfp" />
              </header>

              <div className="iphone-chat-body">
                {messages.map(m => (
                  <div
                    key={m.id}
                    className={`wa-bubble-row ${m.type}`}
                    onMouseEnter={() => setHoveredMessage(m.id)}
                    onMouseLeave={() => setHoveredMessage(null)}
                  >
                    <div className="wa-bubble-item">
                      {m.text}
                      {/* <span className="wa-bubble-time">{m.time}</span> */}
                      {hoveredMessage === m.id && (
                        <button className="wa-delete-btn" onClick={() => deleteMessage(m.id)}>
                          Delete <br /> message
                         </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
