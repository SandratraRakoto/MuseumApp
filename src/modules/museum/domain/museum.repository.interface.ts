import { MuseumModel } from "@/modules/museum/domain/museum.model";
import { LatLng } from "react-native-maps";

export interface IMuseumRepository {
  getMuseums(query?: string): Promise<MuseumModel.Museum[]>;
}
