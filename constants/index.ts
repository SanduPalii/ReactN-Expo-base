import arm_sleeve from '@/assets/icons/arm_sleeve.png';
import back_white from '@/assets/icons/back_white.png';
import bluetooth_blue from '@/assets/icons/bluetooth_blue.png';
import bluetooth_white from '@/assets/icons/bluetooth_white.png';
import help_list from '@/assets/icons/help_list.png';
import help_white from '@/assets/icons/help_white.png';
import power_white from '@/assets/icons/power_white.png';
import server_connection_red from '@/assets/icons/server_connection_red.png';
import server_connection_white from '@/assets/icons/server_connection_white.png';
import settings_blue from '@/assets/icons/settings_blue.png';
import settings_white from '@/assets/icons/settings_white.png';
import statistics_blue from '@/assets/icons/statistics_blue.png';
import statistics_white from '@/assets/icons/statistics_white.png';
import user_white from '@/assets/icons/user_white.png';
import phone_white from '@/assets/images/guide/phone_white.png';
import sleeve_power from '@/assets/images/guide/sleeve_power.png';
import sleeve_tag from '@/assets/images/guide/sleeve_tag.png';
import background from '@/assets/images/background.png';
import EU_EAKR_EN from '@/assets/images/EU_EAKR_EN.png';
import HAMK_Logo_Transparent from '@/assets/images/HAMK_Logo_Transparent.png';
import HAMK from '@/assets/images/HAMK.jpg';
import leverageEU_2014_2020 from '@/assets/images/leverageEU_2014_2020.png';
import logo_medium from '@/assets/images/logo_medium.png';
import logo from '@/assets/images/logo.png';
import logo_small from '@/assets/images/logo_small.png';
import sleeve_bluetooth from '@/assets/images/sleeve_bluetooth.png';
import tap_background from '@/assets/images/tap_background.png';

export const images = {
  phone_white,
  sleeve_power,
  sleeve_tag,
  background,
  EU_EAKR_EN,
  HAMK_Logo_Transparent,
  HAMK,
  leverageEU_2014_2020,
  logo_medium,
  logo_small,
  logo,
  sleeve_bluetooth,
  tap_background,
};

export const icons = {
  arm_sleeve,
  back_white,
  bluetooth_blue,
  bluetooth_white,
  help_list,
  help_white,
  power_white,
  server_connection_red,
  server_connection_white,
  settings_blue,
  settings_white,
  statistics_blue,
  statistics_white,
  user_white,
};

export const onboarding = [
  {
    id: 1,
    title: 'How does it work?',
    description: '1. Turn on the sleeve',
    image: images.sleeve_power,
  },
  {
    id: 2,
    title: 'How does it work?',
    description: '2. Check the number from the sleeve',
    image: images.sleeve_tag,
  },
  {
    id: 3,
    title: 'How does it work?',
    description: '3. Connect the sleeve to the app',
    image: images.phone_white,
  },
];

export const data = {
  onboarding,
};
