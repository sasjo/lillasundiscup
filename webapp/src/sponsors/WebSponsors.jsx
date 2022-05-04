import * as React from 'react';
import sponsors from './sponsor-data.json';
import SponsorList from './SponsorList';

const WebSponsors = () => {
  const {main, field, home, web} = sponsors;

  const all = [
    main,
    ...home.filter(({ img }) => img !== null).sort((a, b) => a.name.localeCompare(b.name)),
    ...field.filter(({ img }) => img !== null).sort((a, b) => a.name.localeCompare(b.name)),
    ...web.filter(({ img }) => img !== null).sort((a, b) => a.name.localeCompare(b.name)),
  ];

  return (
    <SponsorList sponsors={all} title="Sponsorer"/>
  );
}

export default WebSponsors;
