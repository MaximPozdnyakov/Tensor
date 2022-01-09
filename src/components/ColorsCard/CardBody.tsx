import React, { Fragment } from "react";

import { ColorsCardProps } from "components/ColorsCard/";
import { ColorsGroupsI, ColorsI, ColorsGroupI } from "types/colors";

import ColorItem from "components/ColorsCard/ColorItem";

interface CardBodyProps {
  colors: ColorsI;
  colorsData: ColorsGroupsI[] | ColorsGroupI;
  setNextModalProps: React.Dispatch<
    React.SetStateAction<ColorsCardProps | null>
  >;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

function CardBody({
  colors,
  colorsData,
  setNextModalProps,
  onClose,
}: CardBodyProps) {
  if (Array.isArray(colorsData)) {
    return (
      <>
        {colorsData.map(({ title, colorsGroups }) => {
          const items = colorsGroups.map((colorsGroup) => {
            const { title, subtitle, description } = colorsGroup;
            const currentColors = colorsGroup.colors
              .map(({ label }) => colors[label])
              .filter((color) => color !== undefined);

            const onItemClick = setNextModalProps.bind(null, {
              title,
              colors,
              colorsData: colorsGroup,
              onBackClick: setNextModalProps.bind(null, null),
              onClose,
            });

            return (
              <ColorItem
                {...{
                  colors: currentColors,
                  title: subtitle,
                  description,
                  onClick: onItemClick,
                }}
                key={subtitle}
              />
            );
          });

          return (
            <Fragment key={`group-${title}`}>
              <div className="colors-card__divider"></div>
              <div className="title colors-card__list-title">{title}</div>
              {items}
            </Fragment>
          );
        })}
      </>
    );
  }
  return (
    <>
      {colorsData.colors.map(({ label, title, description }) => (
        <ColorItem
          {...{
            colors: [colors[label]],
            title,
            description,
          }}
          key={title}
        />
      ))}
    </>
  );
}

export default CardBody;
