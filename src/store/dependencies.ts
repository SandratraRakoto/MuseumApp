import {IMuseumRepository} from '@/modules/museum/domain/museum.repository.interface';

export type Dependencies = {
  museumGateway: IMuseumRepository;
};
