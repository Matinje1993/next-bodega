"use client";
import React, { useEffect, useState } from 'react';
import { toast } from "sonner";
import { EmblaOptionsType } from 'embla-carousel';
import SlimHeroBanner from '@/components/SlimHeroBanner';
import ClassNamesPlugin from 'embla-carousel-class-names'
import Autoplay from 'embla-carousel-autoplay'
import PageComponent from '@/components/PageComponent';
import LazyLoadComponent from '@/components/LazyLoadComponent';
//import { GetServerSideProps } from "next";

const autoplayOptions = {
  delay: 4000, // 4 seconds
  stopOnInteraction: false, // Keep autoplaying even after user interaction
  stopOnMouseEnter: true
};
const OPTIONS: EmblaOptionsType = { loop: true };
const PLUGINS = [ClassNamesPlugin(), Autoplay(autoplayOptions)];


const HomePage = () => {
  const [slides, setSlides] = useState([]);
  const [placementData, setPlacementData] = useState<any>([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch(`/api/v1/banners/home`, {
          cache: 'no-store',
        });
        const json = await res.json();

        if (json.meta?.message === 'success') {
          const filtered = json.data.filter((banner: any) =>
            ['hb2', 'hb3', 'hb4'].includes(banner.placement_id)
          );

          setSlides(filtered);
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    const fetchPlacementData = async () => {
      try {
        const res = await fetch("/api/v1/relevance/keyword?keyword=*&lang=en&placements=home_page.web_rank1|home_page.web_rank2|home_page.web_rank4");
        const data = await res.json();
        setPlacementData(data.placements); // assuming you want to set the first placement
      } catch (error) {
        console.error("Error fetching placement data:", error);
      }
    };

    fetchBanners();
    fetchPlacementData();
  }, []);

  return (
    <div>
      <main className="flex-1 w-full max-w-[1232px] pb-8 mx-auto min-w-0">
        <SlimHeroBanner slides={slides} options={OPTIONS} plugins={PLUGINS} />
        <PageComponent pageId={27874} />

        <LazyLoadComponent
          importFunc={() => import('@/components/ProductCarousel')}
          componentProps={{ data: placementData }}
        />
        <LazyLoadComponent
          importFunc={() => import('@/components/OffersCarousel')}
          componentProps={{ pageId: 35406 }}
        />
      </main>
    </div>
  );
};

export default HomePage;