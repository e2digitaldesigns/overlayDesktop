import { IHost } from "../../types";
import { idGenerator } from "../../utils";
import { useGlobalData } from "../";

type THostList = () => IHost[];
type TGetHostById = (_id: string) => IHost | undefined;

export interface IUseHostHooks {
  hostListing: THostList;
  getHostById: TGetHostById;
}

const useHostHook = (): IUseHostHooks => {
  const { state } = useGlobalData();

  const hostListing: THostList = () => {
    return state.hosts;
  };

  const getHostById: TGetHostById = _id => {
    const host = state.hosts.find((f: IHost) => f._id === _id);
    return host;
  };

  return {
    hostListing,
    getHostById
  };
};

export default useHostHook;
