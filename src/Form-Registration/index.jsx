import React from 'react'
import Styles from './Form$Item/Styles'
import { Field } from 'react-final-form'
import Wizard from './Form$Item/Wizard'
// Pages 
import PageTwo from './Form$Item/Pages/PageTwo'
import PageThree from './Form$Item/Pages/PageThree'
import LastPage from './Form$Item/Pages/LastPage'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

const required = value => (value ? undefined : 'Required')

const FormRegistr = () => (
  <Styles>
    <Wizard onSubmit={onSubmit}>
      <Wizard.Page>
        <div>
          <Field
            name="Email"
            component="input"
            type="email"
            placeholder="Email"
            validate={required}
          />
          <Error name="Email" />
        </div>
        <div>
          <Field
            name="Password"
            component="input"
            type="password"
            placeholder="Password"
            validate={required}
          />
          <Error name="Password" />
        </div>
        <div>
          <Field
            name="Confirm password"
            component="input"
            type="password"
            placeholder="Password Confirm"
            validate={required}
          />
          <Error name="Confirm password" />
        </div>
      </Wizard.Page>

      <Wizard.Page>
        <PageTwo />
      </Wizard.Page>

      <Wizard.Page>
        <PageThree />
      </Wizard.Page>
      
      <Wizard.Page>
        <LastPage/>
      </Wizard.Page>
      
    </Wizard>
  </Styles>
)

export default FormRegistr