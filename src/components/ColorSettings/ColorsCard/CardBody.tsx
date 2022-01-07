import React, { Fragment } from "react";

import { ColorGroupI } from "types";

import ColorItem from "components/ColorSettings/ColorsCard/ColorItem";

interface CardBodyProps {
  description?: string;
  colorGroups: ColorGroupI[];
}

function CardBody({ description, colorGroups }: CardBodyProps) {
  return (
    <>
      {description && (
        <div className="text colors-card__description">{description}</div>
      )}
      {colorGroups.map(({ title, items }) => (
        <Fragment key={`group-${title}`}>
          {colorGroups.length > 1 && (
            <div className="colors-card__divider"></div>
          )}

          {title && (
            <div className="title colors-card__list-title">{title}</div>
          )}

          {items.map(({ colors, title, description, onClick }) => (
            <ColorItem
              {...{ colors, title, description, onClick }}
              key={title}
            />
          ))}
        </Fragment>
      ))}
    </>
  );
}

export default CardBody;
