import { useEffect, useState } from 'react'
import './index.css'
import Card from './components/Card';



function App() {
  const [confo, setConfo] = useState([])

  useEffect(() => {
    fetch('https://khoideo-backend-i6nub74uf-saniaahmeds-projects.vercel.app/allConfo'
    )
      .then(res => res.json())
      .then(data => setConfo(data))
  }, [confo])

  const [MSG, setMSG] = useState('')
  console.log(MSG)
  const AddConfos = () => {
    console.log('clicked')
    const confo = {
      MSG
    }
    console.log(confo)
    fetch('https://khoideo-backend-i6nub74uf-saniaahmeds-projects.vercel.app/postConfo', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(confo)

    })
      .then(res => res.json())
      .then(data => {
      })
      console.log(confo)
  }
  return (
    <>
      <section className='bg-image'>
        <div>
          <h1 style={{ 'backgroundColor': 'rgb(224, 12, 54)', 'width': 'fit-content' }} className='title mx-auto my-2'>Khoi <span style={{ 'color': ' rgb(224, 12, 54)', 'backgroundColor': 'white' }}>Deo :3</span></h1>
          <p>Note: ekhane keo tumar name jante parbe na so relax :3.. AMIO NA ! , ar name janaite chaile confession e bolte paro , anner iccha :V </p>
        </div>
        <section className='settingHome glass'>

          <div className='cardsec'>
            
              {
                confo.map(confo => <Card confo={confo} key={confo._id}></Card>)
              }
           
          </div>
          <div className='writesec'>
            <div className='textBar'>
             <textarea  onChange={() => setMSG(event.target.value)} placeholder='write it here..:3'>
             </textarea>
            </div>

            <div className='btn-div'>
              <button onClick={() => AddConfos()} className='btn'>Send</button>
            </div>

          </div>

        </section>
      </section>
    </>
  )
}

export default App
