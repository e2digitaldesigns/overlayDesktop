import React from "react";

interface IntHostProfileInfo {
  name: string;
  handleOnChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const HostProfileInfo: React.FC<IntHostProfileInfo> = ({
  name,
  handleOnChange,
  handleSubmit
}) => {
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
                placeholder="Sam Rothestine"
                type="text"
                value={name}
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-sm-4">
              <button
                className="btn btn-primary btn-sm"
                onClick={e => handleSubmit(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostProfileInfo;
