import { get } from "../lib/api";


export const openHeavenRepository = {


  getOpenHeavensData: async (dataParams : any): Promise<any> => {
    return await get(`/api/open-heavens/date/${dataParams}`);
  }
};