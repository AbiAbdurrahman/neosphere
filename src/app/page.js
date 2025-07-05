import Achievements from '@/components/achievements'
import Activities from '@/components/activities'
import Activity from '@/components/activity'
import HomepageBanner from '@/components/homepage-banner'
import OurPartners from '@/components/our-partners'
import WhatWeDo from '@/components/what-we-do'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomepageBanner />
      <WhatWeDo />
      <Activities />
      <Achievements />
      <OurPartners />
    </>
  );
}
