import React, { useState } from 'react'

export const Demo = () => {
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
    <div>
      {/* Navigation */}
      <nav>
        {['PHONE SETTINGS', 'BATTERY OPTIONS', 'CONNECTION', 'MESSAGES'].map(tab => (
          <button
            key={tab}
            style={{ fontWeight: activeTab === tab ? 'bold' : 'normal' }}
            onClick={() => setactiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <hr />

      <div>
        {/* Settings Sidebar Content */}
        <aside>
          {activeTab === 'PHONE SETTINGS' && (
            <div>
              <div><label>Name: </label><input value={name} onChange={e => setname(e.target.value)} /></div>
              <div><label>Status: </label><input value={status} onChange={e => setstatus(e.target.value)} /></div>
              <div><label>Operator: </label><input value={operator} onChange={e => setoperator(e.target.value)} /></div>
              <div><label>Clock: </label><input value={phoneClock} onChange={e => setphoneClock(e.target.value)} /></div>
              <div><label>Chats Label: </label><input value={labels.chats} onChange={e => setlabels({ ...labels, chats: e.target.value })} /></div>
              <div><label>Message Placeholder: </label><input value={labels.message} onChange={e => setlabels({ ...labels, message: e.target.value })} /></div>
              <div>
                <label>Profile Pic: </label>
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
            <div>
              {['None', '3G', '4G', '5G', 'WiFi'].map(c => (
                <label key={c} style={{ display: 'block' }}>
                  <input type="radio" checked={connection === c} onChange={() => setConnection(c)} />
                  {c}
                </label>
              ))}
            </div>
          )}

          {activeTab === 'MESSAGES' && (
            <div>
              <button onClick={() => setmsgType('sent')}>Sender Mode</button>
              <button onClick={() => setmsgType('received')}>Receiver Mode</button>
              <br />
              <textarea value={inputMsg} onChange={e => setinputMsg(e.target.value)} placeholder="Type message..." />
              <br />
              <button onClick={addMessage}>Add Message</button>
            </div>
          )}
        </aside>

        <hr />

        {/* Preview Area */}
        <section>
          <div>
            <div>
              {/* Status Bar */}
              <div>
                <span>{'●'.repeat(signal)} {operator} {connection !== 'None' && connection}</span>
                {' | '}
                <span>{phoneClock}</span>
                {' | '}
                <span>{showPercent && `${battery}%`} 🔋</span>
              </div>

              {/* Chat Header */}
              <header>
                <strong>‹ {labels.chats}</strong>
                <div>
                  <div>{name || "User Name"}</div>
                  <small>{status || "Online"}</small>
                </div>
                {profilePic && <img src={profilePic} alt="pfp" style={{ width: '40px', height: '40px' }} />}
              </header>

              <hr />

              {/* Chat Body */}
              <div>
                {messages.map(m => (
                  <div
                    key={m.id}
                    onMouseEnter={() => setHoveredMessage(m.id)}
                    onMouseLeave={() => setHoveredMessage(null)}
                    style={{ textAlign: m.type === 'sent' ? 'right' : 'left', margin: '10px 0' }}
                  >
                    <div style={{ display: 'inline-block', border: '1px solid #ccc', padding: '5px' }}>
                      <small>[{m.type.toUpperCase()}]</small> <br />
                      {m.text}
                      {hoveredMessage === m.id && (
                        <button onClick={() => deleteMessage(m.id)} style={{ marginLeft: '10px', color: 'red' }}>
                          x
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