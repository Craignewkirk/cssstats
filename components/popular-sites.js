import React from 'react'
import Link from './relink'
import { Section, Heading } from 'rebass'

export default ({ sites, url, description }) => (
  <Section>
    <Heading
      level={2}
      mb={2}
      children={description || 'View Stats for Popular Sites'}
    />
    {sites.map(site => (
      <Link
        py={2}
        pr={2}
        url={url}
        key={site}
        href={`/stats?url=${site}`}
        children={site}
        style={{display: 'inline-block'}}
      />
    ))}
  </Section>
)
