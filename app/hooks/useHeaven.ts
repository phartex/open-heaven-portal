import { useQuery } from "@tanstack/react-query";
import openHeavenService from "../services/openHeavenService";


export const useOpenHeavens = (date: any) => {
  return useQuery({
    queryKey: ["open-heavens", date],
    queryFn: () => openHeavenService.fetchOpenHeavensData(date),
    enabled: !!date,
  });
};
