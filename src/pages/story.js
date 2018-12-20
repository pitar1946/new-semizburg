import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Story = () => (
  <Layout>
    <SEO title="Story" keywords={['semizburg', 'pivo', 'beer', 'pub', 'brewery', 'pivnica', 'sarajevo']} />
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12  mx-auto">
          <div className="post-preview">
             <p>Pivo je sa ljudima dugo koliko i pismo a craft ga je uveo u dvadeset prvi vijek</p>
             <hr/>
             <p className="mb-3">Pivara Semizburg nastala je zbog interesantnog životnog puta vlasnika, Harisa Piknjača,
                koji je dio života proveo u Vijetnamu gdje je, družeći se s lokalnim kraft pivarima, razvio interesovanje za proizvodnju zanatskog ili popularno Craft piva.
                To znanje mu je poslužilo dok je radio u Pakistanu u kojem se pivo zvanično ne može kupiti.
                Nakon povratka u Sarajevo pokreće pivaru iz želje da sebi i drugima prozvede pivo vrhunskog kvaliteta.
              </p>
              <p className="mb-3">Naziv Semizburg  nastao je kao nadimak za Semizovac, naselje pored Sarajeva gdje se pivara i nalazi.
                 Jedan period je bilo  popularno kao idealno mjesto za izgradnju vikendice na obalama rijeke Bosne dok je ista bila nezagađena.
                  Vlasnici vikendica, uglavnom imućne Saralije su od milja Semizovac nazvali Semizburg.
              </p>
              <p className='mb-5'>Interesantni nazivi piva nastali su iz želje da se ožive Slavenska mitološka bića i da se Semizburg piva približe domaćoj publici.</p>
            <span className="post-meta">Posted by on December 17, 2018</span>
          </div>
        </div>
       </div> 
      </div> 
  </Layout>
)

export default Story
