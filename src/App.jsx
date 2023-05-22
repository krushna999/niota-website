import React from 'react'
import styles from './style'
import {Navbar, Hero, Stats, FeatureCard, OrderCard, ToolCard, Testimonials, CTA, Footer } from './components'

const App = () =>  (
    <div className="bg-primary w-full overflow-hidden">
      <div className='{`${styles.paddingX} $styles.flexCenter`}'>
        <div className='{`$styles.bocWidth`}'>
          < Navbar />
        </div>
      </div>

      <div className='{`${styles.paddingX} $styles.flexCenter`}'>
        <div className='{`$styles.bocWidth`}'>
          <Hero/>
          <Stats/>
        </div>
      </div>

      <div className='{`${styles.paddingX} ${styles.paddingX} $styles.flexCenter`}'>
        <div className='{`$styles.bocWidth`}'>
          <FeatureCard/>
          <ToolCard/>
          <OrderCard/>
          <Testimonials/>
          <CTA/>
        </div>
      </div>

      <div className='{`${styles.paddingX} ${styles.paddingX} $styles.flexCenter`}'>
        <div className='{`$styles.bocWidth`}'>
          <Footer/>
        </div>
      </div>
    </div>
    
  );

export default App
