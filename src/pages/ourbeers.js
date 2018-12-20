import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const OurBeers = () => (
  <Layout>
    <SEO title="Our Beers"  keywords={['semizburg', 'pivo', 'beer', 'pub', 'brewery', 'pivnica', 'sarajevo']} />
    <div className='container'>
      <h1 className='mt-3'>Our Beers</h1>
       <div className='row'>
       <div className="col-md-4 mb-5 mt-5">
                <div className="card">
                    <div className="card-img-top mb-3">
                        <img className='card-img' src="./images/avet.jpg" alt="avet"/>
                    </div>
                    <div className="card-body">
                        <h2>Avet</h2>
                        <h3>Weissbier - Pšenično Pivo</h3>
                        <span>Alc 4,9 %  , IBU 144</span>
                        <p className="card-text mt-3">
                        Avet je korijen riječi našla u turskom jeziku i riječi afet  što znači nesreća. Izraz ima široko značenje i teško je utvrditi klasifikaciju u narodnim vjerovanjima.
                        Sigurni smo samo da je ovo pivu izuzetno kompleksno i ukusno. I da se odlično kombinuje sa Masnim sirevima i ljutim jelima s povrćem.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-5 mt-5">
                <div className="card">
                    <div className="card-img-top mb-3">
                        <img className='card-img' src="./images/karandoloz.jpg" alt="karandoloz"/>
                    </div>
                    <div className="card-body">
                        <h2>Karanđoloz</h2>
                        <h3>Crna IPA</h3>
                        <span>Alc. 6,7% , IBU 62</span>
                        <p className="card-text mt-3">
                         Tamno nepasterizirano i nefiltrirano pivo
                         Kao i ovo pivo Karanđoloz je tamni demon iz Bosne i Hercegovine. Narodno vjerovanje kaže da nosi čeličnu košulju i njegovo prisustvo se da naslutiti po specifičnom sablasnom mirisu. Putuje od raskrsnice do raskrsnice skačući na leđa žrtvama kako bi ga ove nosile, obavezno noću.
                         Naš Karanđoloz takođe ima specifičan miris koji ni približno nije sablasan većima bogate note čokolade i kafe. Nije obaveza da se konzumira noću već svoje vrijednosti donosi u svakom dijelu dana. 
                         Najbolje se kombinuje sa hranom sa roštilja. Mada i delikatni ukusi ribe i riže neće razočarati u kombinaciji s ovim pivom.
                        </p>
                    </div>
                </div>
            </div> 
            <div className="col-md-4 mb-5 mt-5">
                <div className="card">
                    <div className="card-img-top mb-3">
                        <img className='card-img' src="./images/prikaza.jpg" alt="prikaza"/>
                    </div>
                    <div className="card-body">
                        <h2>Prikaza</h2>
                        <h3>Tamno nepasterizirano i nefiltrirano pivo.</h3>
                        <h3>IPA- India Pale Ale</h3>
                        <span>Alc 6,7% , gorčina 62,5 IBU</span>
                        <p className="card-text mt-3">
                         Vjerovanje kaže da kad djevica umre preobrati se u mistično biće koje mi smrtnici zovemo Prikaza.  Naše Prikaze ne treba da se bojite jer donosi samo dobro raspoloženje.
                         Ukomponovana sa ljutom hranom na početku pojačava ljutinu a smanjuje na kraju ukusa. I kada se susretne sa slađim dijelom jela, kao što je karamelizirani luk ili sweet chilly sos, takođe daje natprosječno zadovoljstvo  
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-5 mt-5">
                <div className="card">
                    <div className="card-img-top mb-3">
                        <img className='card-img' src="./images/stuha.jpg" alt="stuha"/>
                    </div>
                    <div className="card-body">
                        <h2>Stuha</h2>
                        <h3>Bijela IPA, kategoriše se kao specijalno pivo, svježija verzija američke IPA-e </h3>
                        <span>Alc 6,7%   ,IBU 35</span>
                        <p className="card-text mt-3">
                        Blijedo mitsko biće koje se pojavljuje i nestaje bez najave, neprimjetno. 
                        Ukus naše Stuhe takođe dolazi neprimjetno i obuzima aromama voća, začina i borovine.
                        Upariti se može sa kozijim sirom i jelima od piletine i ribe u sa dodatkom voća. 
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 md-5 mt-5'>
            <div className="card">
                    <div className="card-img-top mb-3">
                        <img className='card-img' src="./images/babaroga.jpg" alt="babaroga"/>
                    </div>
                    <div className="card-body">
                        <h2>Babaroga</h2>
                        <h3>Pale ale </h3>
                        <span>Alc. 5,4% , IBU 32</span>
                        <p className="card-text mt-3">
                        Babaroga je strašna starica, slična vještici, sa rogom na čelu.
                        Krije se na tamnim mjestima, izlazi samo noću i otima nevaljalu djecu. Jedina sličnost sa Semizburg Babarogom je što se i pivo čuva na tamnom i hladnom mjestu. Razlika je u tome što nakon par Babaroga konzument postaje donekle nevaljao, što je u ovom slučaju poželjno.
                        Hrana sa kojom ide pod ruku je parmezan, lagane salate, škampi i burger.  
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 md-5 mt-5'>
            <div className="card">
                    <div className="card-img-top mb-3">
                        <img className='card-img' src="./images/drekavac.jpg" alt="drekavac"/>
                    </div>
                    <div className="card-body">
                        <h2>Drekavac</h2>
                        <h3>APA </h3>
                        <span>Alc% 5,5 , IBU 40</span>
                        <p className="card-text mt-3">
                        Drekavac je mali demon ljudskog oblika čije je tijelo prekriveno dugim krznom po kojem često gazi pa stoga dreči. Njegove oštre kandže u ovom slučaju su ukus u kojem su arome lagane te je ovo pivo namijenjeno široj publici.
                        Dimljeni sir, čedar i hrana sa roštilja biće vam zahvalna ako je uparite sa Drekavcem.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 md-5 mt-5'>
            <div className="card">
                    <div className="card-img-top mb-3">
                        <img className='card-img' src="./images/beer1.png" alt="drekavac"/>
                    </div>
                    <div className="card-body">
                        <h2>Pivo 7</h2>
                        <p className="card-text mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 md-5 mt-5'>
            <div className="card">
                    <div className="card-img-top mb-3">
                        <img className='card-img' src="./images/beer2.png" alt="drekavac"/>
                    </div>
                    <div className="card-body">
                        <h2>Pivo 8</h2>
                        <p className="card-text mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 md-5 mt-5'>
            <div className="card">
                    <div className="card-img-top mb-3">
                        <img className='card-img' src="./images/beer3.png" alt="drekavac"/>
                    </div>
                    <div className="card-body">
                        <h2>Pivo 9</h2>
                        <p className="card-text mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
       </div>
       <p className='mt-3 info'> - IBU – Internacional Bitterness Unit</p>
       <p className='mb-3 info'>Označava hemijsku mjeru količine i broja gorkih sastojaka u pivu. Učestali podatak na etiketama zanatskih piva. Interesantno je da zapravo ne označava koliko je pivo gorko jer je balans ukusa ono što čini pravog Master Pivara.</p>
      </div>
  </Layout>
)

export default OurBeers