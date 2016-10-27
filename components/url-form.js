import React from 'react'
import { InlineForm, Section, Heading } from 'rebass'

export default ({ onSubmit, onChange }) => (
  <Section>
    <Heading level={1} children='Parse Css' mb={2} />
    <InlineForm
      label='url'
      name='url'
      type='url'
      buttonLabel='Go'
      placeholder='google.com'
      onChange={onChange}
      onClick={onSubmit}
    />
  </Section>
)
