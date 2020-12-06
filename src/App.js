import React from 'react'

import FullScreenCircuralProgress from './components/FullScreenCircuralProgress'
import ScrollToTop from './components/ScrollToTop'
import Snackbars from './components/Snackbars'

const App = props => {
    return (
        <div>
            <FullScreenCircuralProgress />
            <Snackbars />
            <ScrollToTop />
        </div>
    )
}

export default App
