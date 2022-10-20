import * as React from "react";
import { useParams } from "react-router-dom";
import { useHost } from "../../hooks";
import { IHost } from "./../../types";

const HostProfile: React.FC = () => {
  const { id } = useParams();
  const { getHostById } = useHost();
  const [theHost, setTheHost] = React.useState<IHost>({
    _id: "",
    name: "",
    socials: [],
    img: ""
  });

  React.useEffect(() => {
    let stillHere = true;

    const data = id ? getHostById(id) : undefined;
    if (data && stillHere) setTheHost(data);

    return () => {
      stillHere = false;
    };
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setTheHost({ ...theHost, name: e.target.value });
  };

  const handleSubmit = () => {};

  if (!theHost) {
    return null;
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="col-sm-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                name="name"
                onChange={handleOnChange}
                placeholder="host name..."
                type="text"
                value={theHost?.name}
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-sm-4">
              <button className="btn btn-primary btn-sm">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostProfile;
