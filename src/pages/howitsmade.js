import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const HowItsMade = () => (
  <Layout>
    <SEO title="How It's Made"  keywords={['semizburg', 'pivo', 'beer', 'pub', 'brewery', 'pivnica', 'sarajevo']} />
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12  mx-auto">
          <div className="post-preview">
              <p className='mb-3'>Osnova svakog piva, tako i crafta, su žitarice, kvasac i voda.</p>
              <hr/>
              <p className='mb-3'>
                 Iako se dosta žitarica može koristiti za proizvodnju piva mi biramo ječam jer se kroz istoriju pokazao kao najbolji.
                 Ječam se miješa s vodom da započne proces klijanja koji se zaustavlja toplotom.
                 Od količine toplote kojoj je ječam izložen zavisi boja piva, a donekle i ukus.
                </p>
                <p className='mb-3'>
                 Sljedeći korak je mljevenje pa zagrijavanje zajedno s vodom da bi se dobila smjesa u kojoj se skrob razdvaja na proste šećere i stvara smjesu sladkastog ukusa.
                </p>
                <p className='mb-3'>
                 Odatle smjesa ide u sljedeći kazan u kojem se dodaje hmelj kojem možemo zahvaliti za ukus i gorčinu.
                 Smjesa se zagrijava do tačke ključanja a zatim naglo hladi do adekvatne temperature za sljedeći korak u procesu proizvodnje a to je dodavanje kvasca.
                </p>
               <p className='mb-3'>
                Kvasac je ono što pokreće fermentaciju, proces koji stvara alkohol i karbondioksid.
                Po završetku fermentacije „mlado“ pivo se prebacuje u tankove u kojima odleži. 
                Odležavanje može trajati od nekoliko dana, preko par sedmica, do čak nekoliko godina što je rijetka situacija.
               </p> 
               <p className='mb-5'>
               Kad Master Pivar odluči da je pivo spremno pretače se u boce ili burad i dolazi do vas da u njemu uživate.
               </p>
            <span className="post-meta">Posted by on December 17, 2018</span>
          </div>
        </div>
       </div> 
      </div> 
  </Layout>
)

export default HowItsMade