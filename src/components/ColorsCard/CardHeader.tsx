import React from "react";

import { ReactComponent as CheckIcon } from "icons/check.svg";
import { ReactComponent as CrossIcon } from "icons/cross.svg";
import { ReactComponent as BackIcon } from "icons/back.svg";

interface CardHeaderProps {
  title: string;
  description?: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  onConfirm: React.MouseEventHandler<HTMLDivElement>;
  onBackClick?: React.MouseEventHandler<HTMLDivElement>;
}

function CardHeader({
  title,
  description,
  onClose,
  onConfirm,
  onBackClick,
}: CardHeaderProps) {
  return (
    <>
      <div className="colors-card__header">
        <div className="colors-card__title-wrapper">
          {onBackClick && (
            <div className="colors-card__back-icon" onClick={onBackClick}>
              <BackIcon />
            </div>
          )}
          <div className="title">{title}</div>
        </div>
        <div className="colors-card__icons">
          <div className="colors-card__icon" onClick={onConfirm}>
            <CheckIcon />
          </div>
          <div className="colors-card__icon" onClick={onClose}>
            <CrossIcon />
          </div>
        </div>
      </div>
      {description && (
        <div className="text colors-card__description">{description}</div>
      )}
    </>
  );
}

export default CardHeader;
