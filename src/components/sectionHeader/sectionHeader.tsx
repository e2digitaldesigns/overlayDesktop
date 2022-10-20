import React from "react";
import { Link } from "react-router-dom";

interface IntSectionHeader {
  header?: string;
  link?: string;
  linkText?: string;
  name: string;
  text?: string;
}

const SectionHeader: React.FC<IntSectionHeader> = ({
  header,
  link,
  linkText,
  name,
  text
}) => {
  return (
    <>
      <div className="card">
        {header && <div className="card-header">{header}</div>}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {text ? (
            <p className="card-text">{text}</p>
          ) : (
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          )}
          {link && linkText && (
            <Link to={link} className="btn btn-primary btn-sm">
              {linkText}
            </Link>
          )}
        </div>
      </div>

      <hr className="my-4" />
    </>
  );
};

export default SectionHeader;
