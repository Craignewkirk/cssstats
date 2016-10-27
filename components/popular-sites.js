import React from 'react'
import Link from './relink'
import { Section, Heading } from 'rebass'

export default ({ sites, url }) => (
  <Section>
    <Heading
      level={2}
      children='View Stats for Popular Sites and Frameworks' mb={2}
    />
    {sites.map(site => (
      <Link
        url={url}
        href={`/stats?url=${site}`}
        children={site}
        py={3}
        pr={3}
        style={{display: 'inline-block'}}
      />
    ))}
  </Section>
)
