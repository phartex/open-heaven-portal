import { openHeavenRepository } from "../repositories/openHeavenRepository";



const openHeavenService = {
  fetchOpenHeavensData: async (dataParams: any) => {
    return await openHeavenRepository.getOpenHeavensData(dataParams);
  },

}

export default openHeavenService;