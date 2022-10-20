import React, { useState } from "react";
import _map from "lodash/map";
import _sortBy from "lodash/sortBy";
import _size from "lodash/size";
import { Link } from "react-router-dom";

import SectionHeader from "../sectionHeader/sectionHeader";
import { useHost } from "../../hooks";

interface IntHostListing {}

const HostListing: React.FC<IntHostListing> = () => {
  const { hostListing } = useHost();
  const [state, setState] = useState<any[]>([]);

  let sortedData = _sortBy(hostListing(), ["name"]);

  console.log(18, hostListing());

  return (
    <>
      <SectionHeader
        link="/hosts/new"
        linkText="New Host"
        name="Host Listing"
      />

      <div className="row g-3" data-testid="host_listing__component">
        <div className="col-sm-12">
          <div className=" card">
            <h5 className="card-header">
              <span className="badge bg-primary">{_size(sortedData)}</span>{" "}
              Hosts
            </h5>

            <ul className="list-group list-group-flush">
              {_map(sortedData, m => (
                <li className="list-group-item">
                  <Link
                    data-testid={`host_listing__link-${m._id}`}
                    style={{ textDecoration: "none" }}
                    to={`/hosts/${m._id}`}
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostListing;
