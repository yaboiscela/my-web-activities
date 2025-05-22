import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Contact from './components/Contact.'

function App() {

  return (
    <>
      <div className='contacts'>
        <Contact 
        contactImage = "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/476620352_122137499570464548_3886484951717482023_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEd33q7MoL0deu4twsF-tri2TVg5laRLc3ZNWDmVpEtzW2ZVHPVglQFXKyJyzzTKHCEno8uucT01xHynaVic1mL&_nc_ohc=vizrxl_PfkMQ7kNvwGQzOwf&_nc_oc=AdneUX9hdJPB2Y73pZIsRd-A-ZCY6RQjUgE22A_GEnG52cqDFI1KhhK3JHdcN0E2hX8&_nc_zt=23&_nc_ht=scontent.fmnl30-1.fna&_nc_gid=7Lq6wT2UtMXp-5HEl8ATfg&oh=00_AfLtW8I27MYo4-yOJ963QS-KByZ_tdB9F7dBpCr60v4aqA&oe=68226446" 
        name = "Nia"
        phone = "123978237"
        email = "nia.bernabe.mail@gmail.com"
        />
        <Contact
        contactImage = "https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/474765358_9299893776742023_8169038515368792561_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGECIIrGrOyVF5FbPAnW0ttsIlpM6qM2jawiWkzqozaNiqRZO2_C5BkJN6WRv0LrZwyFvLoBkjG7YErTEESr9YY&_nc_ohc=fMh5XSNJ0G4Q7kNvwE7PEb9&_nc_oc=Adkh9hh3z1KfvBvMaiKrVwDPOR40K2GbJCTnN7DkR0pu501zbaIJ8S1EmXMhkRZ5qjo&_nc_zt=23&_nc_ht=scontent.fmnl30-3.fna&_nc_gid=ZaYC9hl2FEAqqRXSD1K4Fw&oh=00_AfLwipi0IXKX-7NlHQ6gEpc_JrWWdMbUDUMlnZ_hfFZl7Q&oe=68227CAF"
        name = "Chrontrish"
        phone = "102939172"
        email = "chrontrish.alpha@gmail.com"
        />
        <Contact
        contactImage = "https://i.pinimg.com/736x/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg" 
        name = "Cairn Biane"
        phone = "019283702"
        email = "cairn.biane.dev@gmail.com"
        />
        <Contact
        contactImage = "https://images.steamusercontent.com/ugc/1690522341905398802/3E1BB499FC8E46925E5C9F2A7F3164882029932F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" 
        name = "Amogus Man"
        phone = "239847928"
        email = "amogus.man42@gmail.com"
        />
      </div>
    </>
  )
}

export default App
