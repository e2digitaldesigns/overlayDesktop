import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../utils/httpService";
import { ApiEndPoints } from "../../types/types";
import HostProfileInfo from "./hostProfileInfo";
import SectionHeader from "../sectionHeader/sectionHeader";
import { validation } from "./../../utils/alphaNumeric";

interface IntHostNew {}
interface IntState {
  name: string;
}

const HostNew: React.FC<IntHostNew> = () => {
  const [state, setState] = useState<IntState>({
    name: ""
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: validation.alphaNumericFilter(value) });
  };

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (!validation.alphaNumericTest(state.name)) return;

  //     try {
  //       const { data } = await http.post<any>(ApiEndPoints.host, {
  //         ...state
  //       });

  //       if (data?._id) history.push(`/console/hosts/${data._id}`);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <>
      <SectionHeader
        link="/hosts"
        linkText="Hosts"
        name="New Host"
        text="Create a new host"
      />

      <HostProfileInfo
        name={state.name}
        handleOnChange={handleOnChange}
        handleSubmit={() => console.log("submit")}
      />
    </>
  );
};

export default HostNew;
