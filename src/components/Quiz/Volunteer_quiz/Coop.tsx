import React from 'react'

import styles from "@styles/QuizPages/Volunteer_quiz/HelpTo.module.scss";
import Container from './Base/Container'
import BaseTitle from './Base/BaseTitle'
import BaseButtons from './Base/BaseButtons'
import BaseMainCoop from './Base/BaseMainCoop'

const Coop = () => {
  return (
    <Container>
      <div className={styles.container}>
        <BaseTitle image="/Volunteer_quiz/Base/fourth.svg" title="С кем помогать?"></BaseTitle>
        <BaseMainCoop coop_info="on" is_bottom={true}></BaseMainCoop>
      </div>

      <BaseButtons back_link="/volunteer-quiz/kind-help/" forward_link="/"></BaseButtons>
    </Container>
  )
}

export default Coop
