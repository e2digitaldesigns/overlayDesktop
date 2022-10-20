import React, { useEffect, useState } from "react";
import _cloneDeep from "lodash/cloneDeep";
import _findIndex from "lodash/findIndex";
import _filter from "lodash/filter";
import _map from "lodash/map";

import http from "../../utils/httpService";
import { ApiEndPoints } from "../../types/types";
import SectionHeader from "../sectionHeader/sectionHeader";
import { validation } from "./../../utils/alphaNumeric";

interface IntSocialNetworks {}

const SocialNetworks: React.FC<IntSocialNetworks> = () => {
  const [state, setState] = useState<any[]>([]);

  useEffect(() => {
    let stillHere = true;

    const fetchData = async () => {
      try {
        const { data } = await http.get<any[]>(ApiEndPoints.socialNetworks);

        if (data && stillHere) {
          setState(state => [...data]);
        }
      } catch (error) {}
    };

    fetchData();

    return () => {
      stillHere = false;
    };
  }, []);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    _id: string
  ): void => {
    e.preventDefault();
    const { name, value } = e.target;
    const newState = _cloneDeep(state);
    const index = _findIndex(newState, f => f._id === _id);
    const theValue =
      name === "username"
        ? validation.alphaNumericFilterUser(value)
        : validation.alphaNumericFilter(value);

    newState[index][name] = theValue;
    setState(newState);
  };

  const handleNew = async () => {
    try {
      const { data } = await http.post<any>(ApiEndPoints.socialNetworks);
      if (!data.errors) {
        const newState = _cloneDeep(state);
        newState.push(data);
        setState(newState);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async (_id: string) => {
    try {
      await http.delete<any[]>(`${ApiEndPoints.socialNetworks}/${_id}`);
      const newState = _filter(state, (f: any) => f._id !== _id);
      setState(newState);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent, social: any) => {
    e.preventDefault();

    try {
      await http.put<any>(
        `${ApiEndPoints.socialNetworks}/${social._id}`,
        social
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SectionHeader name="Social Networks" />

      <button
        className="btn btn-primary btn-sm"
        onClick={handleNew}
        type="button"
      >
        New
      </button>
      <hr className="my-4" />

      <div className="row g-3" data-testid="__component">
        <div className="col-sm-12">
          {_map(state, (m: any) => (
            <div key={m._id} className="card mb-2">
              <div className="card-body">
                <form>
                  <div className="form-group row mb-2">
                    <label
                      htmlFor="username"
                      className="col-sm-2 col-form-label"
                    >
                      Site
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        id="site"
                        name="site"
                        placeholder="FB"
                        type="text"
                        value={m.site}
                        onChange={e => handleOnChange(e, m._id)}
                      />
                    </div>
                  </div>

                  <div className="form-group row mb-2">
                    <label
                      htmlFor="username"
                      className="col-sm-2 col-form-label"
                    >
                      User
                    </label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="@ohCMS"
                        type="text"
                        value={m.username}
                        onChange={e => handleOnChange(e, m._id)}
                      />
                    </div>
                  </div>

                  <div className="form-group row mb-2">
                    <label className="col-sm-2 col-form-label"></label>

                    <div className="col-sm-10">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={e => handleSubmit(e, m)}
                      >
                        Submit
                      </button>

                      <button
                        className="btn btn-danger btn-sm mx-3"
                        onClick={() => handleRemove(m._id)}
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialNetworks;
