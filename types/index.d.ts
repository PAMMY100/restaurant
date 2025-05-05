declare type CompanyData = {
  id: number;
  logo: StaticImageData;
  name: string;
  experience: string;
  project: string;
}

declare type AdvertData = {
  id: number;
  name: string;
  agent: string;
  image: StaticImageData;
  location: string;
  price: string;
}

declare type cardAdvert = {
  name: string;
  desc: string;
  img: StaticImageData;
}


interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}