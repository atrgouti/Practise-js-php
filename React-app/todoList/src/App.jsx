import { useState } from 'react'
import NavBar from './NavBar'
import MainSection from './mainSection'
import SecendSection from './SecendSection'
import "./AppStyle.css"
export default function App() {
  return(
    <>
    <nav>
      <NavBar></NavBar>
    </nav>
    <main>
      <MainSection></MainSection>
    </main>
    <section>
      <SecendSection></SecendSection>
    </section>
    </>
  )
}