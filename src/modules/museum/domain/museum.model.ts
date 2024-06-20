export namespace MuseumModel {
  export type Museum = {
    id: string;
    name: string;
    history: string;
    is_remarkable_for: string;
    interest: string;
    address: {
      line1: string;
      line2: string;
      postal_code: string;
      city: string;
      state: string;
      country: string;
    };
    phoneNumber: string;
    website: string;
    coordinates: {
      lat: number;
      lon: number;
    };
    categories: {
      id: number;
      name: string;
    };
    distance: string;
  };

  export type State = {
    museums: {
      data: Museum[];
      status: "idle" | "loading" | "success" | "error";
      error: string | null;
    };
  };
}
