import { axiosPrivate } from "./axios";

// HomePage Api

// 1.More Ammenities

export const getMoreAmmenities = async () => {
  let res = await axiosPrivate.get(`/amenties/get_amenties`);
  return res.data;
};

// 2.Additional Section

export const getAdditionalSectiondata = async () => {
  let res = await axiosPrivate.get(`/additionalsection/get_additionalsection`);
  return res.data;
};

// 3. Make it Your Self Content

export const getmakeityourself = async () => {
  let res = await axiosPrivate.get(`/self/get_self`);
  return res.data;
};

// 4. Make it Your Self Content Icon

export const getmakeityourselfIcons = async () => {
  let res = await axiosPrivate.get(`/selficon/get_selficon`);
  return res.data;
};

// 5. Food Content

export const FoodContent = async () => {
  let res = await axiosPrivate.get(`/Food/get_Food`);
  return res.data;
};

//6.Food Content Icon

export const FoodContentIcon = async () => {
  let res = await axiosPrivate.get(`/foodicon/get_foodicon`);
  return res.data;
};

// 7.PG Games Content

export const GamesContent = async () => {
  let res = await axiosPrivate.get(`/game/get_game`);
  return res.data;
};

// 8.PG GamesIcon Content

export const GamesContentIcon = async () => {
  let res = await axiosPrivate.get(`/gameicon/get_gameicon`);
  return res.data;
};

// 9.Lounge  Content

export const LoungeContent = async () => {
  let res = await axiosPrivate.get(`/longue/get_longue`);
  return res.data;
};

// 10.Advertisement Content

export const AdvertisementContent = async () => {
  let res = await axiosPrivate.get(`/homepage/get_homepage`);
  return res.data;
};

// 11.Main Banner HomePage  Content

export const MainHomeBanner = async () => {
  let res = await axiosPrivate.get(`/banner/get_banner`);
  return res.data;
};

// Properties Page

export const GetAllPG = async () => {
  let res = await axiosPrivate.get(`/pgcreation/get_pgcreation`);
  return res.data;
};

export const GetAllPGFAQ = async () => {
  let res = await axiosPrivate.get(`/faq/get_faq`);
  return res.data;
};

// Single PG page

export const getSinglePG = async (slug) => {
  let res = await axiosPrivate.get(`/getpgwithslug/${slug}`);
  return res.data;
};



// About us 


// 1.Content


export const GetAboutContent = async () => {
  let res = await axiosPrivate.get(`/aboutus/get_aboutus`);
  return res.data;
};


// 2.Team Section

export const GetAboutTeam = async () => {
  let res = await axiosPrivate.get(`/team/get_aboutus`);
  return res.data;
};