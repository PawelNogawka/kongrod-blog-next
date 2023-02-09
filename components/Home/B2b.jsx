import React from 'react'
import Link from 'next/link'

const B2b = () => {
  return (
    <section id="b2b" className='b2b '>
      <div className="container container--p0">
       <div className="b2b__container">
       <h2 className="section-heading section-heading--m0 section-heading--white">współpraca B2B</h2>
       <p className="b2b__txt">
            Ciągle chcemy się rozwijać i uważamy, że współpraca z innymi to
            ważny element rozwoju firmy. Dlatego zachęcamy do zapoznania się z
            naszą ofertą współpracy biznesowej oraz kontaktu.
            </p>
            <Link href="/wspolpraca-biznesowa" className='btn'>czytaj więcej</Link>
       </div>
      </div>
    </section>
  )
}

export default B2b
