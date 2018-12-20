import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Shop = () => (
  <Layout>
    <SEO title="Shop"  keywords={['semizburg', 'pivo', 'beer', 'pub', 'brewery', 'pivnica', 'sarajevo']} />
    <div className="container mt-5">
         <div className='row mb-5'>
          <div className="col-lg-12  mx-auto mb-5">
            <h1 className='heading mb-5'>Beer shop merchandise</h1>
            <hr/>
            <h4 className='mb-3'>Odjevni predmeti:</h4>
            <ul>
              <li>Majice i duxevi</li>
              <li>Novčanik</li>
              <li>Kaiš</li>
              <li>Kuharska kecelja</li>
              <li>Vunena kapa</li>
            </ul>
          </div>
          <div className="col-lg-12  mx-auto mb-5">
          <h4 className='mb-3'>Gift shop style:</h4>
            <ul>
              <li>Otvarač (dio štoka naravno)</li>
              <li>Glassware</li>
              <li>Set podmetača sa svim vrstama piva</li>
              <li>Paket svih vrsta piva koje se trenutno proizvode u kutiji kao za vino. Pored loga Semizburga isprintana interesantna poruka ili fact iz svijeta craft  piva</li>
              <li>Boce i limenke od jedan i pet litara</li>
              <li>Peškir za ruke 50x20 cm</li>
              <li>Šampon od piva (ako proizvodnja istog dolazi u obzir)</li>
            </ul>
          </div>
          <div className="col-lg-12  mx-auto mb-5">
          <h4 className='mb-3'>Mogućnost mjesečne predplate:</h4>
            <ul>
              <li>Dostava omiljenog piva na mjesečnoj i sedmičnoj bazi u željenoj količini.</li>
            </ul>
          </div>
          <p>Da bi usli shop upisite lozinku 'quiali' <a href='https://testmysemy.myshopify.com/' target='_blank' rel="noopener noreferrer">My Shop</a></p>
         </div>
      </div>
  </Layout>
)

export default Shop