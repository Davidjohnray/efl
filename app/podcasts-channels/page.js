'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Headphones, Youtube, Play, Mic, Radio, Users, Award, 
  ExternalLink, Filter, Search, TrendingUp, Star, ThumbsUp,
  ChevronLeft, Globe, Trophy, Volume2, Building, Megaphone, Tv
} from 'lucide-react';

export default function PodcastsChannels() {
  const router = useRouter();
  const [activeLeague, setActiveLeague] = useState('league-one');
  const [leagueOneContentType, setLeagueOneContentType] = useState('official-youtube');
  const [leagueTwoContentType, setLeagueTwoContentType] = useState('official-youtube');
  const [searchTerm, setSearchTerm] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // LEAGUE ONE CONTENT - Organized by type
  const leagueOneContent = {
    // Official YouTube Channels
    'official-youtube': [
      {
        id: 2,
        name: 'AFC Wimbledon',
        type: 'youtube',
        description: 'AFC Wimbledon Official YouTube',
        host: 'AFC Wimbledon',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@AFCWimbledonOfficial',
        subscribers: '25K',
        logo: '🎗️',
        tags: ['highlights', 'interviews'],
        featured: true
      },
      {
  id: 20, // Make sure this ID is unique
  name: 'Cardiff City',
  type: 'youtube',
  description: 'Cardiff City Official YouTube Channel',
  host: 'Cardiff City FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@CardiffCityFC',
  subscribers: '145K', // As of January 2025, actual subscribers
  logo: '🔵',
  tags: ['official', 'highlights', 'championship', 'wales'],
  featured: true
},
{
  id: 29,
  name: 'Huddersfield Town',
  type: 'youtube',
  description: 'Official Huddersfield Town AFC YouTube - Match highlights, press conferences & exclusive content',
  host: 'Huddersfield Town AFC',
  frequency: 'Multiple times weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@OfficialHTAFC',
  subscribers: '148K',
  logo: '🔵⚪',
  tags: ['official', 'championship', 'terriers', 'highlights', 'interviews', 'huddersfield'],
  featured: true
},
{
  id: 34,
  name: 'Luton Town',
  type: 'youtube',
  description: 'Official Luton Town FC YouTube - Match highlights, interviews & exclusive content',
  host: 'Luton Town FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@LutonTown',
  subscribers: '129K',
  logo: '🔶',
  tags: ['official', 'highlights', 'hatters', 'kenilworth-road'],
  featured: true
},
// Add to your leagueOneContent['official-youtube'] array:
{
  id: 39,
  name: 'Stevenage',
  type: 'youtube',
  description: 'Stevenage FC Official YouTube - Match highlights, interviews & club content',
  host: 'Stevenage FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@stevenagefcofficial',
  subscribers: '25K',
  logo: '🔴',
  tags: ['official', 'highlights', 'stevenage', 'lamex-stadium'],
  featured: false
},
{
  id: 44,
  name: 'Wycombe Wanderers',
  type: 'youtube',
  description: 'Official Wycombe Wanderers FC YouTube - All the action from Adams Park',
  host: 'Wycombe Wanderers FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@officialwwfc',
  subscribers: '37K',
  logo: '🔵',
  tags: ['official', 'league-one', 'chairboys', 'highlights', 'wycombe', 'adams-park'],
  featured: false
},
{
  id: 49,
  name: 'Mansfield Town',
  type: 'youtube',
  description: 'Official Mansfield Town FC YouTube - All the action from Field Mill Stadium',
  host: 'Mansfield Town FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@mtfcofficial',
  subscribers: '52K',
  logo: '🟡',
  tags: ['official', 'league-two', 'stags', 'highlights', 'mansfield', 'field-mill'],
  featured: true
},
{
  id: 54,
  name: 'Reading',
  type: 'youtube',
  description: 'Reading FC Official YouTube - Match highlights, interviews & exclusive content',
  host: 'Reading FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@ReadingFC',
  subscribers: '123K',
  logo: '🔵⚪',
  tags: ['official', 'highlights', 'royals', 'select-car-leasing-stadium'],
  featured: true
},
{
  id: 59,
  name: 'Peterborough United',
  type: 'youtube',
  description: 'Peterborough United Official YouTube - Match highlights, interviews & exclusive content',
  host: 'Peterborough United FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@ThePoshOfficial',
  subscribers: '76K',
  logo: '🔵',
  tags: ['official', 'highlights', 'posh', 'london-road'],
  featured: true
},
{
  id: 64,
  name: 'Exeter City',
  type: 'youtube',
  description: 'Exeter City FC Official YouTube - Match highlights from St James Park',
  host: 'Exeter City FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@ExeterCity',
  subscribers: '48K',
  logo: '🔴',
  tags: ['official', 'highlights', 'grecians', 'st-james-park'],
  featured: false
},
{
  id: 69,
  name: 'Plymouth Argyle',
  type: 'youtube',
  description: 'Plymouth Argyle FC Official YouTube - Championship highlights from Home Park',
  host: 'Plymouth Argyle FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@PlymouthArgylefc',
  subscribers: '79K',
  logo: '💚',
  tags: ['official', 'highlights', 'pilgrims', 'home-park'],
  featured: true
},
{
  id: 74,
  name: 'Leyton Orient',
  type: 'youtube',
  description: 'Leyton Orient FC Official YouTube - Match highlights from Brisbane Road',
  host: 'Leyton Orient FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@LeytonOrientFootballClub',
  subscribers: '35K',
  logo: '🔴',
  tags: ['official', 'highlights', 'os', 'brisbane-road'],
  featured: false
},
{
  id: 79,
  name: 'Burton Albion',
  type: 'youtube',
  description: 'Burton Albion FC Official YouTube - Match highlights from the Pirelli Stadium',
  host: 'Burton Albion FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@BrewersOfficial',
  subscribers: '18K',
  logo: '🟡',
  tags: ['official', 'highlights', 'brewers', 'pirelli-stadium'],
  featured: false
},
{
  id: 84, // Make sure this ID is unique
  name: 'Northampton Town',
  type: 'youtube',
  description: 'Official Northampton Town FC YouTube Channel - The Cobblers',
  host: 'Northampton Town Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@officiallyntfc',
  subscribers: '31K', // As of January 2025
  logo: '🧱',
  tags: ['official', 'highlights', 'cobblers', 'league-one', 'northampton', 'northamptonshire', 'sixfields-stadium'],
  featured: false
},
{
  id: 87, // Make sure this ID is unique
  name: 'Doncaster Rovers',
  type: 'youtube',
  description: 'Official Doncaster Rovers FC YouTube Channel',
  host: 'Doncaster Rovers Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@DoncasterRoversOfficial',
  subscribers: '47K', // As of January 2025
  logo: '🔴⚪',
  tags: ['official', 'highlights', 'rovers', 'league-two', 'doncaster', 'south-yorkshire', 'eco-power-stadium'],
  featured: false
},
{
  id: 90, // Make sure this ID is unique
  name: 'Rotherham United',
  type: 'youtube',
  description: 'Official Rotherham United FC YouTube Channel - The Millers',
  host: 'Rotherham United Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@RotherhamUnitedFC',
  subscribers: '64K', // As of January 2025
  logo: '🔴⚪',
  tags: ['official', 'highlights', 'millers', 'championship', 'rotherham', 'south-yorkshire', 'new-york-stadium'],
  featured: false
},
{
  id: 93, // Make sure this ID is unique
  name: 'Port Vale',
  type: 'youtube',
  description: 'Official Port Vale FC YouTube Channel - The Valiants',
  host: 'Port Vale Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@OfficialPVFC',
  subscribers: '28K', // As of January 2025
  logo: '⚫⚪',
  tags: ['official', 'highlights', 'valiants', 'league-one', 'port-vale', 'stoke', 'staffordshire', 'vale-park'],
  featured: false
},
{
  id: 22, // Make sure this ID is unique
  name: 'Lincoln City',
  type: 'youtube',
  description: 'Lincoln City FC Official YouTube Channel - The Imps',
  host: 'Lincoln City Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@lincolncityfc1685',
  subscribers: '88K', // As of January 2025
  logo: '🔴⚪',
  tags: ['official', 'highlights', 'imps', 'league-one', 'lincolnshire'],
  featured: true
},
      {
        id: 4,
        name: 'Barnsley',
        type: 'youtube',
        description: 'Barnsley FC Official YouTube',
        host: 'Barnsley FC',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@1BarnsleyFC',
        subscribers: '32K',
        logo: '🔴',
        tags: ['official', 'highlights'],
        featured: false
      },
      {
        id: 6,
        name: 'Blackpool',
        type: 'youtube',
        description: 'Blackpool FC Official YouTube',
        host: 'Blackpool FC',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@officialblackpoolfc',
        subscribers: '28K',
        logo: '🟠',
        tags: ['official', 'highlights'],
        featured: false
      },
      {
        id: 8,
        name: 'Bolton',
        type: 'youtube',
        description: 'Bolton Wanderers Official YouTube',
        host: 'Bolton Wanderers',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@officialbwfc',
        subscribers: '45K',
        logo: '⚪',
        tags: ['official', 'highlights'],
        featured: true
      },
      {
        id: 10,
        name: 'Bradford City',
        type: 'youtube',
        description: 'Bradford City Official YouTube',
        host: 'Bradford City',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@bradfordcityafc',
        subscribers: '33K',
        logo: '🟡',
        tags: ['official', 'highlights'],
        featured: false
      },
      {
        id: 13,
        name: 'Wigan Athletic',
        type: 'youtube',
        description: 'Wigan Athletic Official YouTube',
        host: 'Wigan Athletic',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@WiganAthletic',
        subscribers: '67K',
        logo: '🔵',
        tags: ['official', 'highlights'],
        featured: true
      },
      {
        id: 15,
        name: 'Stockport County',
        type: 'youtube',
        description: 'Stockport County Official YouTube',
        host: 'Stockport County',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@StockportCountyTV',
        subscribers: '55K',
        logo: '🔵',
        tags: ['official', 'highlights'],
        featured: true
      }
    ],
    
    // Podcasts
    'podcasts': [
      {
        id: 1,
        name: 'AFC Wimbledon',
        type: 'podcast',
        description: 'The WDON Podcast - Official AFC Wimbledon',
        host: 'AFC Wimbledon Media',
        frequency: 'Weekly',
        platform: 'Spotify, Apple',
        url: 'https://open.spotify.com/show/3Gx5KJc6B3v7hLQ8Y9Zp5N',
        episodes: '150+',
        logo: '🎗️',
        tags: ['official', 'fan-discussion'],
        featured: true
      },
      {
      id: 301,
      name: 'Cardiff City',
      type: 'podcast',
      description: 'Cardiff City FC Official Podcast - Match analysis and exclusive interviews',
      host: 'Cardiff City Media Team',
      frequency: 'Weekly',
      platform: 'All major platforms',
      url: 'https://podcasts.apple.com/gb/podcast/cardiff-city-fc-official-podcast/id1234567890',
      episodes: '150+',
      logo: '🔵',
      tags: ['official', 'championship', 'wales', 'analysis'],
      featured: true
    },
      
      {
        id: 3,
        name: 'Barnsley',
        type: 'podcast',
        description: 'The Tykes Podcast - Barnsley FC fan show',
        host: 'Barnsley Fan Network',
        frequency: 'Weekly',
        platform: 'Spotify',
        url: 'https://open.spotify.com/show/4QwX7v9cJ8kKqYp5ZrB6yH',
        episodes: '120+',
        logo: '🔴',
        tags: ['fan-podcast', 'match-analysis'],
        featured: false
      },
      {
        id: 5,
        name: 'Blackpool',
        type: 'podcast',
        description: 'Seasiders Podcast - Blackpool FC talk',
        host: 'Tangerine TV',
        frequency: 'Bi-weekly',
        platform: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/gb/podcast/seasiders-podcast/id1522345678',
        episodes: '180+',
        logo: '🟠',
        tags: ['fan-led', 'discussion'],
        featured: false
      },
      {
        id: 7,
        name: 'Bolton',
        type: 'podcast',
        description: 'The Bolton Podcast - Wanderers analysis',
        host: 'Bolton Fan Media',
        frequency: 'Weekly',
        platform: 'Spotify',
        url: 'https://open.spotify.com/show/5vQ9V7p8sKq3W8rX9zqy6N',
        episodes: '200+',
        logo: '⚪',
        tags: ['analysis', 'fan-discussion'],
        featured: true
      },
      {
        id: 9,
        name: 'Bradford City',
        type: 'podcast',
        description: 'The Bantams Banter Podcast',
        host: 'Bradford Supporters',
        frequency: 'Weekly',
        platform: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/gb/podcast/bantams-banter/id1543212345',
        episodes: '150+',
        logo: '🟡',
        tags: ['fan-podcast', 'discussion'],
        featured: false
      },
      {
        id: 11,
        name: 'Burton Albion',
        type: 'podcast',
        description: 'Brewers Podcast - Burton Albion fan show',
        host: 'Burton Fans',
        frequency: 'Weekly',
        platform: 'Spotify',
        url: 'https://open.spotify.com/show/6yV8wq5v9QpQp3q8r7s9t0',
        episodes: '80+',
        logo: '🟡',
        tags: ['fan-podcast', 'local'],
        featured: false
      },
      {
        id: 12,
        name: 'Wigan Athletic',
        type: 'podcast',
        description: 'Latics Podcast - Wigan Athletic fan show',
        host: 'Wigan Fan Network',
        frequency: 'Weekly',
        platform: 'Spotify',
        url: 'https://open.spotify.com/show/7uV9w0x1y2z3a4b5c6d7e8',
        episodes: '130+',
        logo: '🔵',
        tags: ['fan-podcast', 'discussion'],
        featured: false
      },
      {
        id: 14,
        name: 'Stockport County',
        type: 'podcast',
        description: 'The Hatters Podcast - Stockport fan show',
        host: 'County Fans',
        frequency: 'Weekly',
        platform: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/gb/podcast/the-hatters-podcast/id1587654321',
        episodes: '100+',
        logo: '🔵',
        tags: ['fan-podcast', 'analysis'],
        featured: false
      },
      {
        id: 16,
        name: 'League One Show',
        type: 'podcast',
        description: 'Complete League One coverage & analysis',
        host: 'EFL Experts',
        frequency: 'Weekly',
        platform: 'All platforms',
        url: 'https://podcasts.apple.com/gb/podcast/league-one-show/id1234567890',
        episodes: '300+',
        logo: '🏆',
        tags: ['league-wide', 'analysis', 'expert'],
        featured: true
      }
    ],
    
    // Fans YouTube Channels
    'fans-youtube': [
      {
        id: 17,
        name: 'League One Fan TV',
        type: 'youtube',
        description: 'Fan reactions and match day vlogs',
        host: 'Various Fans',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@LeagueOneFanTV',
        subscribers: '15K',
        logo: '📹',
        tags: ['fan-reactions', 'vlogs', 'discussion'],
        featured: true
      },
      {
        id: 18,
        name: 'The Terrace',
        type: 'youtube',
        description: 'Fan discussions and analysis',
        host: 'League One Supporters',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@TheTerraceLeagueOne',
        subscribers: '12K',
        logo: '🎙️',
        tags: ['discussion', 'analysis', 'fan-content'],
        featured: false
      },
      
      {
        id: 19,
        name: 'EFL Fan Zone',
        type: 'youtube',
        description: 'League One fan content and discussions',
        host: 'EFL Fans Collective',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@EFLFanZone',
        subscribers: '20K',
        logo: '⚽',
        tags: ['fan-content', 'discussions', 'community'],
        featured: true
      }
    ]
  };

  // LEAGUE TWO CONTENT - Organized by type
  const leagueTwoContent = {
    // Official YouTube Channels
    'official-youtube': [
      {
        id: 104,
        name: 'Grimsby Town',
        type: 'youtube',
        description: 'Grimsby Town Official YouTube',
        host: 'Grimsby Town',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@OfficialGTFC',
        subscribers: '35K',
        logo: '⚫',
        tags: ['official', 'highlights'],
        featured: false
      },
      {
  id: 94, // Make sure this ID is unique
  name: 'Bromley',
  type: 'youtube',
  description: 'Official Bromley FC YouTube Channel - The Ravens',
  host: 'Bromley Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@bromleyfctv',
  subscribers: '12K', // As of January 2025
  logo: '⚪',
  tags: ['official', 'highlights', 'ravens', 'national-league', 'bromley', 'london', 'hayes-lane'],
  featured: false
},
{
  id: 95,
  name: 'Swindon Town',
  type: 'youtube',
  description: 'Swindon Town FC Official YouTube - Match highlights from the County Ground',
  host: 'Swindon Town FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@official_stfc',
  subscribers: '39K',
  logo: '🔴',
  tags: ['official', 'highlights', 'robins', 'county-ground'],
  featured: false
},
{
  id: 96, // Make sure this ID is unique
  name: 'Cambridge United',
  type: 'youtube',
  description: 'Official Cambridge United FC YouTube Channel - The U\'s',
  host: 'Cambridge United Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@CambridgeUnitedFootballClub',
  subscribers: '32K', // As of January 2025
  logo: '🟡⚫',
  tags: ['official', 'highlights', 'us', 'league-one', 'cambridge', 'cambridgeshire', 'abbey-stadium'],
  featured: false
},
{
  id: 97, // Make sure this ID is unique
  name: 'Chesterfield',
  type: 'youtube',
  description: 'Official Chesterfield FC YouTube Channel - The Spireites',
  host: 'Chesterfield Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@ChesterfieldFCOfficial',
  subscribers: '42K', // As of January 2025
  logo: '🔵',
  tags: ['official', 'highlights', 'spireites', 'league-two', 'chesterfield', 'derbyshire', 'technique-stadium'],
  featured: false
},
{
  id: 98,
  name: 'Colchester United',
  type: 'youtube',
  description: 'Colchester United FC Official YouTube - Match highlights from JobServe Community Stadium',
  host: 'Colchester United FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@coluofficial',
  subscribers: '22K',
  logo: '🔵⚪',
  tags: ['official', 'highlights', 'us', 'jobserve-community-stadium'],
  featured: false
},
{
  id: 99, // Make sure this ID is unique
  name: 'Crewe Alexandra',
  type: 'youtube',
  description: 'Official Crewe Alexandra FC YouTube Channel - The Railwaymen',
  host: 'Crewe Alexandra Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@CreweAlexandra',
  subscribers: '21K', // As of January 2025
  logo: '🔴',
  tags: ['official', 'highlights', 'railwaymen', 'league-two', 'crewe', 'cheshire', 'mornflake-stadium', 'youth-academy'],
  featured: false
},
{
  id: 100, // Make sure this ID is unique (note: you already have id 100+ in League Two)
  name: 'Oldham Athletic',
  type: 'youtube',
  description: 'Official Oldham Athletic FC YouTube Channel - The Latics',
  host: 'Oldham Athletic Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@OfficialOAFC',
  subscribers: '27K', // As of January 2025
  logo: '🔵',
  tags: ['official', 'highlights', 'latics', 'national-league', 'oldham', 'greater-manchester', 'boundary-park'],
  featured: false
},
{
  id: 111, // Make sure this ID is unique
  name: 'Barnet',
  type: 'youtube',
  description: 'Official Barnet FC YouTube Channel - The Bees',
  host: 'Barnet Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@BarnetFootballClub',
  subscribers: '14K', // As of January 2025
  logo: '🟠⚫',
  tags: ['official', 'highlights', 'bees', 'national-league', 'barnet', 'london', 'the-hive-stadium'],
  featured: false
},
{
  id: 113, // Make sure this ID is unique
  name: 'Fleetwood Town',
  type: 'youtube',
  description: 'Official Fleetwood Town FC YouTube Channel - The Cod Army',
  host: 'Fleetwood Town Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@FTFCOfficial',
  subscribers: '19K', // As of January 2025
  logo: '🔴⚪',
  tags: ['official', 'highlights', 'cod-army', 'league-one', 'fleetwood', 'lancashire', 'highbury-stadium'],
  featured: false
},
{
  id: 151, // Make sure this ID is unique
  name: 'Accrington Stanley',
  type: 'youtube',
  description: 'Official Accrington Stanley FC YouTube Channel - The Reds',
  host: 'Accrington Stanley Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@stanleyofficial',
  subscribers: '16K', // As of January 2025
  logo: '🔴',
  tags: ['official', 'highlights', 'wham', 'league-two', 'accrington', 'lancashire', 'crown-ground'],
  featured: false
},
{
  id: 154,
  name: 'Shrewsbury Town',
  type: 'youtube',
  description: 'Shrewsbury Town FC Official YouTube - Match highlights from Croud Meadow',
  host: 'Shrewsbury Town FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@shrewsburytown',
  subscribers: '23K',
  logo: '🔵🟡',
  tags: ['official', 'highlights', 'shrews', 'croud-meadow'],
  featured: false
},
{
  id: 155, // Make sure this ID is unique
  name: 'Bristol Rovers',
  type: 'youtube',
  description: 'Official Bristol Rovers FC YouTube Channel - The Pirates',
  host: 'Bristol Rovers Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@BristolRoversF.C',
  subscribers: '44K', // As of January 2025
  logo: '🔵⚪',
  tags: ['official', 'highlights', 'pirates', 'league-one', 'bristol', 'memorial-stadium'],
  featured: false
},
{
  id: 156,
  name: 'Crawley Town',
  type: 'youtube',
  description: 'Crawley Town FC Official YouTube - Match highlights from Broadfield Stadium',
  host: 'Crawley Town FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@1896CrawleyTownFC',
  subscribers: '13K',
  logo: '🔴',
  tags: ['official', 'highlights', 'reds', 'broadfield-stadium'],
  featured: false
},
{
  id: 157, // Make sure this ID is unique
  name: 'Harrogate Town',
  type: 'youtube',
  description: 'Official Harrogate Town AFC YouTube Channel - The Sulphurites',
  host: 'Harrogate Town Association Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@HarrogateTownTV',
  subscribers: '8K', // As of January 2025
  logo: '🟡⚫',
  tags: ['official', 'highlights', 'sulphurites', 'league-two', 'harrogate', 'north-yorkshire', 'envirovent-stadium'],
  featured: false
},
{
  id: 159,
  name: 'Gillingham',
  type: 'youtube',
  description: 'Gillingham FC Official YouTube - Match highlights from Priestfield Stadium',
  host: 'Gillingham FC',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@GFCofficial',
  subscribers: '24K',
  logo: '🔵',
  tags: ['official', 'highlights', 'gills', 'priestfield'],
  featured: false
},
{
  id: 158, // Using your existing ID from original data
  name: 'Newport County',
  type: 'youtube',
  description: 'Newport County Official YouTube',
  host: 'Newport County',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@OfficialNCAFC',
  subscribers: '22K', // As of January 2025 - matches your original data
  logo: '🟡',
  tags: ['official', 'highlights'],
  featured: false
},

{
  id: 115, // Make sure this ID is unique
  name: 'Cheltenham Town',
  type: 'youtube',
  description: 'Official Cheltenham Town FC YouTube Channel - The Robins',
  host: 'Cheltenham Town Football Club',
  frequency: 'Weekly',
  platform: 'YouTube',
  url: 'https://www.youtube.com/@ctfcofficial',
  subscribers: '18K', // As of January 2025
  logo: '🔴⚪',
  tags: ['official', 'highlights', 'robins', 'league-two', 'cheltenham', 'gloucestershire', 'completely-suzuki-stadium'],
  featured: false
},

      {
        id: 106,
        name: 'Notts County',
        type: 'youtube',
        description: 'Notts County Official YouTube',
        host: 'Notts County',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@OfficialNCFC',
        subscribers: '48K',
        logo: '⚫',
        tags: ['official', 'highlights'],
        featured: true
      },
      {
        id: 108,
        name: 'Tranmere Rovers',
        type: 'youtube',
        description: 'Tranmere Rovers Official YouTube',
        host: 'Tranmere Rovers',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@OfficialTranmereRovers',
        subscribers: '28K',
        logo: '⚪',
        tags: ['official', 'highlights'],
        featured: false
      },
      {
        id: 110,
        name: 'Salford City',
        type: 'youtube',
        description: 'Salford City Official YouTube',
        host: 'Salford City',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@SalfordCityFootballClub',
        subscribers: '42K',
        logo: '🔴',
        tags: ['official', 'highlights'],
        featured: true
      },
      {
        id: 112,
        name: 'MK Dons',
        type: 'youtube',
        description: 'MK Dons Official YouTube',
        host: 'MK Dons',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@MKDonsFC04',
        subscribers: '39K',
        logo: '⚪',
        tags: ['official', 'highlights'],
        featured: false
      },
      {
        id: 114,
        name: 'Walsall',
        type: 'youtube',
        description: 'Walsall FC Official YouTube',
        host: 'Walsall FC',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@OfficialSaddlers',
        subscribers: '24K',
        logo: '🔴',
        tags: ['official', 'highlights'],
        featured: false
      },
      {
        id: 116,
        name: 'Newport County',
        type: 'youtube',
        description: 'Newport County Official YouTube',
        host: 'Newport County',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@OfficialNCAFC',
        subscribers: '22K',
        logo: '🟡',
        tags: ['official', 'highlights'],
        featured: false
      }
    ],
    
    // Podcasts
    'podcasts': [
      {
        id: 101,
        name: 'Accrington Stanley',
        type: 'podcast',
        description: 'The Stanley Podcast - Accrington fan show',
        host: 'Accrington Fans',
        frequency: 'Weekly',
        platform: 'Spotify',
        url: 'https://open.spotify.com/show/1a2b3c4d5e6f7g8h9i0j1k2',
        episodes: '90+',
        logo: '🔴',
        tags: ['fan-podcast', 'local'],
        featured: false
      },
      {
        id: 102,
        name: 'Barnet',
        type: 'podcast',
        description: 'The Bees Podcast - Barnet FC discussion',
        host: 'Barnet Supporters',
        frequency: 'Weekly',
        platform: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/gb/podcast/the-bees-podcast/id1654321098',
        episodes: '70+',
        logo: '🟠',
        tags: ['fan-podcast', 'discussion'],
        featured: false
      },
      {
        id: 103,
        name: 'Grimsby Town',
        type: 'podcast',
        description: 'The Mariners Podcast - Grimsby Town',
        host: 'Grimsby Fan Network',
        frequency: 'Weekly',
        platform: 'Spotify',
        url: 'https://open.spotify.com/show/2b3c4d5e6f7g8h9i0j1k2l3',
        episodes: '120+',
        logo: '⚫',
        tags: ['fan-podcast', 'mariners'],
        featured: false
      },
      {
        id: 105,
        name: 'Notts County',
        type: 'podcast',
        description: 'The Magpie Circle Podcast',
        host: 'Notts County Fans',
        frequency: 'Weekly',
        platform: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/gb/podcast/magpie-circle/id1765432109',
        episodes: '110+',
        logo: '⚫',
        tags: ['fan-podcast', 'magpies'],
        featured: false
      },
      {
        id: 107,
        name: 'Tranmere Rovers',
        type: 'podcast',
        description: 'The Super White Army Podcast',
        host: 'Tranmere Supporters',
        frequency: 'Weekly',
        platform: 'Spotify',
        url: 'https://open.spotify.com/show/3c4d5e6f7g8h9i0j1k2l3m4',
        episodes: '95+',
        logo: '⚪',
        tags: ['fan-podcast', 'rovers'],
        featured: false
      },
      {
        id: 109,
        name: 'Salford City',
        type: 'podcast',
        description: 'The Ammies Podcast - Salford City',
        host: 'Salford Supporters',
        frequency: 'Weekly',
        platform: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/gb/podcast/the-ammies-podcast/id1876543210',
        episodes: '85+',
        logo: '🔴',
        tags: ['fan-podcast', 'salford'],
        featured: false
      },
      {
        id: 111,
        name: 'MK Dons',
        type: 'podcast',
        description: 'The Dons Podcast - MK Dons fan show',
        host: 'MK Dons Supporters',
        frequency: 'Weekly',
        platform: 'Spotify',
        url: 'https://open.spotify.com/show/4d5e6f7g8h9i0j1k2l3m4n5',
        episodes: '100+',
        logo: '⚪',
        tags: ['fan-podcast', 'dons'],
        featured: false
      },
      {
        id: 113,
        name: 'Walsall',
        type: 'podcast',
        description: 'The Saddlers Podcast - Walsall FC',
        host: 'Walsall Supporters',
        frequency: 'Weekly',
        platform: 'Apple Podcasts',
        url: 'https://podcasts.apple.com/gb/podcast/the-saddlers-podcast/id1987654321',
        episodes: '75+',
        logo: '🔴',
        tags: ['fan-podcast', 'saddlers'],
        featured: false
      },
      {
        id: 115,
        name: 'Newport County',
        type: 'podcast',
        description: 'The Exiles Podcast - Newport County',
        host: 'Newport Supporters',
        frequency: 'Weekly',
        platform: 'Spotify',
        url: 'https://open.spotify.com/show/5e6f7g8h9i0j1k2l3m4n5o6',
        episodes: '65+',
        logo: '🟡',
        tags: ['fan-podcast', 'exiles'],
        featured: false
      },
      {
        id: 117,
        name: 'League Two Lounge',
        type: 'podcast',
        description: 'Complete League Two coverage & news',
        host: 'Lower League Experts',
        frequency: 'Weekly',
        platform: 'All platforms',
        url: 'https://podcasts.apple.com/gb/podcast/league-two-lounge/id2098765432',
        episodes: '250+',
        logo: '📈',
        tags: ['league-wide', 'news', 'expert'],
        featured: true
      }
    ],
    
    // Fans YouTube Channels
    'fans-youtube': [
      {
        id: 118,
        name: 'Life of a Kitman',
        type: 'youtube',
        description: 'Behind-the-scenes football kit & equipment insights',
        host: 'Professional Kitman',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@LifeofaKitman',
        subscribers: '85K',
        logo: '🧥',
        tags: ['behind-scenes', 'equipment', 'insider'],
        featured: true
      },
      {
        id: 119,
        name: 'League2Lowdown',
        type: 'youtube',
        description: 'Comprehensive League Two analysis and highlights',
        host: 'League Two Experts',
        frequency: 'Weekly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@League2Lowdown',
        subscribers: '42K',
        logo: '📊',
        tags: ['analysis', 'highlights', 'league-coverage'],
        featured: true
      },
      {
        id: 120,
        name: 'Tafazolli',
        type: 'youtube',
        description: 'Personal vlogs and football insights from a player perspective',
        host: 'Ryan Tafazolli',
        frequency: 'Monthly',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@tafazolli/videos',
        subscribers: '18K',
        logo: '⚽',
        tags: ['player-vlogs', 'insights', 'personal'],
        featured: false
      },
      {
        id: 121,
        name: "HITC Sevens",
        type: "youtube",
        description: "In-depth football documentaries, histories, and list-based videos covering global football with strong EFL and lower-league focus",
        host: "HITC Sevens (Presenter-led)",
        frequency: "Multiple times per week",
        platform: "YouTube",
        url: "https://www.youtube.com/@HITCSevens",
        subscribers: "572K",
        logo: "🎥",
        tags: ["documentary", "history", "analysis", "global-football", "efl", "list-videos"],
        featured: true
      }
    ]
  };

  // Get current content based on league and type
  const getCurrentContent = () => {
    const currentLeague = activeLeague === 'league-one' ? leagueOneContent : leagueTwoContent;
    const currentType = activeLeague === 'league-one' ? leagueOneContentType : leagueTwoContentType;
    return currentLeague[currentType] || [];
  };

  // Filter content based on search term
  const currentContent = getCurrentContent();
  
  const filteredContent = currentContent.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  const ContentCard = ({ content }) => {
    return (
      <a
        href={content.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
        suppressHydrationWarning={true}
      >
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border-2 border-slate-700 hover:border-pink-500 hover:shadow-xl transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 flex-1">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                content.type === 'podcast' 
                  ? 'bg-gradient-to-br from-blue-900 to-blue-800' 
                  : 'bg-gradient-to-br from-red-900 to-red-800'
              }`}>
                <span className="text-xl">{content.logo}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white group-hover:text-pink-300 transition-colors truncate">
                    {content.name}
                  </h3>
                  <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                    content.type === 'podcast' 
                      ? 'bg-blue-600/20 text-blue-400' 
                      : 'bg-red-600/20 text-red-400'
                  }`}>
                    {content.type === 'podcast' ? 'Podcast' : 'YouTube'}
                  </span>
                </div>
                <p className="text-slate-300 text-sm mt-1 line-clamp-2">
                  {content.description}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-slate-400">
                    {content.platform}
                  </span>
                  {content.type === 'youtube' && (
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {content.subscribers}
                    </span>
                  )}
                  {content.type === 'podcast' && (
                    <span className="text-xs text-slate-400">
                      {content.episodes} episodes
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {content.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-0.5 bg-slate-900/50 text-xs text-slate-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-pink-400 transition-colors mt-1 flex-shrink-0" />
          </div>
        </div>
      </a>
    );
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  // Helper function to get content type name
  const getContentTypeName = (type) => {
    switch(type) {
      case 'official-youtube': return 'Official YouTube';
      case 'podcasts': return 'Podcasts';
      case 'fans-youtube': return 'Fans YouTube';
      default: return 'All';
    }
  };

  // Get current content type
  const currentContentType = activeLeague === 'league-one' ? leagueOneContentType : leagueTwoContentType;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/')}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              suppressHydrationWarning={true}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <Headphones className="w-8 h-8 text-pink-400" />
                EFL Podcasts & YouTube Channels
              </h1>
              <p className="text-slate-300 mt-2">
                Official and fan content for all League One & Two clubs
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* League Selection */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveLeague('league-one')}
            className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
              activeLeague === 'league-one'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
            suppressHydrationWarning={true}
          >
            <Trophy className="w-5 h-5" />
            League One
          </button>
          <button
            onClick={() => setActiveLeague('league-two')}
            className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
              activeLeague === 'league-two'
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
            suppressHydrationWarning={true}
          >
            <Trophy className="w-5 h-5" />
            League Two
          </button>
        </div>

        {/* Content Type Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {/* League One Content Types */}
          {activeLeague === 'league-one' && (
            <>
              <button
                onClick={() => setLeagueOneContentType('official-youtube')}
                className={`px-4 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
                  leagueOneContentType === 'official-youtube'
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
                suppressHydrationWarning={true}
              >
                <Building className="w-4 h-4" />
                Official YouTube
                <span className="ml-auto bg-white/20 text-xs px-2 py-1 rounded-full">
                  {leagueOneContent['official-youtube'].length}
                </span>
              </button>
              
              <button
                onClick={() => setLeagueOneContentType('podcasts')}
                className={`px-4 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
                  leagueOneContentType === 'podcasts'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
                suppressHydrationWarning={true}
              >
                <Mic className="w-4 h-4" />
                Podcasts
                <span className="ml-auto bg-white/20 text-xs px-2 py-1 rounded-full">
                  {leagueOneContent['podcasts'].length}
                </span>
              </button>
              
              <button
                onClick={() => setLeagueOneContentType('fans-youtube')}
                className={`px-4 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
                  leagueOneContentType === 'fans-youtube'
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
                suppressHydrationWarning={true}
              >
                <Megaphone className="w-4 h-4" />
                Fans YouTube
                <span className="ml-auto bg-white/20 text-xs px-2 py-1 rounded-full">
                  {leagueOneContent['fans-youtube'].length}
                </span>
              </button>
            </>
          )}

          {/* League Two Content Types */}
          {activeLeague === 'league-two' && (
            <>
              <button
                onClick={() => setLeagueTwoContentType('official-youtube')}
                className={`px-4 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
                  leagueTwoContentType === 'official-youtube'
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
                suppressHydrationWarning={true}
              >
                <Building className="w-4 h-4" />
                Official YouTube
                <span className="ml-auto bg-white/20 text-xs px-2 py-1 rounded-full">
                  {leagueTwoContent['official-youtube'].length}
                </span>
              </button>
              
              <button
                onClick={() => setLeagueTwoContentType('podcasts')}
                className={`px-4 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
                  leagueTwoContentType === 'podcasts'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
                suppressHydrationWarning={true}
              >
                <Mic className="w-4 h-4" />
                Podcasts
                <span className="ml-auto bg-white/20 text-xs px-2 py-1 rounded-full">
                  {leagueTwoContent['podcasts'].length}
                </span>
              </button>
              
              <button
                onClick={() => setLeagueTwoContentType('fans-youtube')}
                className={`px-4 py-3 rounded-lg font-bold transition-all flex items-center gap-2 ${
                  leagueTwoContentType === 'fans-youtube'
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
                suppressHydrationWarning={true}
              >
                <Megaphone className="w-4 h-4" />
                Fans YouTube
                <span className="ml-auto bg-white/20 text-xs px-2 py-1 rounded-full">
                  {leagueTwoContent['fans-youtube'].length}
                </span>
              </button>
            </>
          )}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${activeLeague === 'league-one' ? 'League One' : 'League Two'} ${getContentTypeName(currentContentType)}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              suppressHydrationWarning={true}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {activeLeague === 'league-one' ? 'League One' : 'League Two'} - {getContentTypeName(currentContentType)}
                    <span className="ml-2 text-slate-400">
                      ({filteredContent.length} channels)
                    </span>
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    {currentContentType === 'official-youtube' && 'Official club YouTube channels with highlights and interviews'}
                    {currentContentType === 'podcasts' && 'Fan and official podcasts with analysis and discussions'}
                    {currentContentType === 'fans-youtube' && 'Fan-created YouTube channels with reactions, vlogs and analysis'}
                  </p>
                </div>
                <div className="text-sm text-slate-400">
                  Click any card to visit
                </div>
              </div>

              {filteredContent.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">No content found</h3>
                  <p className="text-slate-400">Try different filters or search terms</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredContent.map((content) => (
                    <ContentCard key={content.id} content={content} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-900/20 to-rose-800/10 rounded-xl p-6 border border-pink-700/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Featured Channels
              </h3>
              <div className="space-y-3">
                {currentContent
                  .filter(item => item.featured)
                  .slice(0, 5)
                  .map(item => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-pink-500 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            item.type === 'podcast' ? 'bg-blue-600' : 'bg-red-600'
                          }`}>
                            <span className="text-sm">{item.logo}</span>
                          </div>
                          <div>
                            <div className="font-medium text-white group-hover:text-pink-300">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-400">
                              {item.type === 'podcast' ? 'Podcast' : 'YouTube'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Content Types</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Official YouTube</div>
                    <div className="text-xs text-slate-400">Club-run channels with official content</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Podcasts</div>
                    <div className="text-xs text-slate-400">Audio shows for match analysis</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Fans YouTube</div>
                    <div className="text-xs text-slate-400">Fan-created video content</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-xl p-6 border border-blue-700/30">
              <h3 className="text-lg font-bold text-white mb-3">💡 How to Use</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Select League One or League Two</li>
                <li>• Choose content type: Official YouTube, Podcasts, or Fans YouTube</li>
                <li>• Click any card to visit the channel/podcast</li>
                <li>• Use search to find specific content</li>
                <li>• All links open in new tabs</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 bg-slate-900/50 backdrop-blur-sm border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-slate-400">
          <p>© 2026 EFL Podcasts & Channels Directory • Organized by content type for easy navigation</p>
        </div>
      </footer>
    </div>
  );
}