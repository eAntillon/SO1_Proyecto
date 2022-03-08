import React from 'react'

import { Layout } from './components/newComponents/Layout.js';
import { Hero } from './components/newComponents/Hero.js';
import { HeroIllustration } from './components/newComponents/HeroIllustration.js';
import "./components/newComponents/assets.css";

export const App = () =>{
  return (
    <Layout>
      <Hero
        title="Grupo #6"
        content="Sistemas operativos 1 - PROYECTO FASE 1"
        illustration={HeroIllustration}
      />
    </Layout>
  )
}