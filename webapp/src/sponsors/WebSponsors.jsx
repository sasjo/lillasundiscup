import * as React from 'react';
import sponsors from './sponsor-data.json';
import SponsorList from './SponsorList';

const WebSponsors = () => {
  const {main, field, home, tshirt, footballs, web} = sponsors;

  const filterAndSort = (array) => array.filter(({ img }) => img != null)
    .sort((a, b) => a.name.localeCompare(b.name));

  const all = [
    main,
    ...filterAndSort(home),
    ...filterAndSort(field),
    ...filterAndSort(web),
    ...filterAndSort(tshirt),
    ...filterAndSort(footballs),
  ];

  return (
    <SponsorList sponsors={all} title="Sponsorer"/>
  );
}

export default WebSponsors;
