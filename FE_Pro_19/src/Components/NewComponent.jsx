import { useState } from 'react'

function NewComponent() {
    const [aboutH2, setAboutH2] = useState(false)
    const [statusNumber, setStatusNumber] = useState(0)
    return (
        <div>
            {/* {aboutH2 && <h2>text</h2>}
           <button
           onClick={() => setAboutH2(!aboutH2)}
           >push</button>  */}
           <h3>{statusNumber}</h3>
           <button
           onClick={() => setStatusNumber(statusNumber - 1)}
           >-</button>
           <button
           onClick={() => setStatusNumber(statusNumber + 1)}
           >+</button>
        </div>
        
    )
}
export default NewComponent