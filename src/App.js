import React from 'react'

import './App.css'

function App() {
  return (
    <div className='App'>
      <p>À supprimer, vous importerez et mettrez ici votre Routeur</p>
      <p>
        Il est préférable d'initialiser le routeur dans le dossier config dans
        un fichier "router.js" et de l'importer ici
      </p>
      <p>
        Le dossier "components" contiendra vos composants, pensez à séparer
        intelligemment vos composants, évitez la redondance de code.
      </p>
      <p>
        Le dossier "screens" contiendra vos pages, une page est un composant qui
        affiche d'autres composants, tout simplement.
      </p>
      <p>
        Le routeur gérera vos differentes pages présentes dans le dossier
        screens
      </p>
      <p>Le site devra être pensé exclusivement pour mobile.</p>
      <p>
        Le dossier "utils" contiendra vos logiques (calls Apis, regexp et autres
        fonctions pouvant être utiles partout
      </p>
    </div>
  )
}

export default App
