import { IMuseumRepository } from "@/modules/museum/domain/museum.repository.interface";
import { MuseumModel } from "@/modules/museum/domain/museum.model";

export class MuseumRepository implements IMuseumRepository {
  async getMuseums(query?: string): Promise<MuseumModel.Museum[]> {
    return MOCK.filter((item) => (query ? item.name.includes(query) : true));
  }
}

const MOCK = [
  {
    id: "1",
    name: "The Grand Palace",
    history:
      "Built in the 18th century, the Grand Palace has served as the official residence of the kings of Siam (and later Thailand) since 1782.",
    is_remarkable_for:
      "Its beautiful architecture and historical significance.",
    interest: "Tourists interested in Thai history and architecture.",
    address: {
      line1: "Na Phra Lan Rd",
      line2: "Phra Borom Maha Ratchawang, Phra Nakhon",
      postal_code: "10200",
      city: "Bangkok",
      state: "Bangkok",
      country: "Thailand",
    },
    phoneNumber: "+66 2 623 5500",
    website: "https://www.royalgrandpalace.th/",
    coordinates: {
      lat: 13.7515,
      lon: 100.4927,
    },
    categories: {
      id: 1,
      name: "Historical",
    },
    distance: "5 km",
  },
  {
    id: "2",
    name: "Eiffel Tower",
    history:
      "Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, the Eiffel Tower is one of the most recognizable structures in the world.",
    is_remarkable_for: "Its iconic structure and breathtaking views of Paris.",
    interest: "Visitors interested in iconic landmarks and panoramic views.",
    address: {
      line1: "Champ de Mars",
      line2: "5 Avenue Anatole France",
      postal_code: "75007",
      city: "Paris",
      state: "Île-de-France",
      country: "France",
    },
    phoneNumber: "+33 892 70 12 39",
    website: "https://www.toureiffel.paris/",
    coordinates: {
      lat: 48.8584,
      lon: 2.2945,
    },
    categories: {
      id: 2,
      name: "Landmark",
    },
    distance: "3 km",
  },
  {
    id: "3",
    name: "Statue of Liberty",
    history:
      "A gift from France to the United States, the Statue of Liberty was dedicated on October 28, 1886, and has become a symbol of freedom and democracy.",
    is_remarkable_for: "Its symbolic representation of freedom and democracy.",
    interest: "History enthusiasts and symbolists.",
    address: {
      line1: "Liberty Island",
      line2: "",
      postal_code: "10004",
      city: "New York",
      state: "New York",
      country: "USA",
    },
    phoneNumber: "+1 212-363-3200",
    website: "https://www.nps.gov/stli/index.htm",
    coordinates: {
      lat: 40.6892,
      lon: -74.0445,
    },
    categories: {
      id: 3,
      name: "Monument",
    },
    distance: "2 km",
  },
];
