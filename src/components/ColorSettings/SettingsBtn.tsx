import React from "react";
import { ReactComponent as SettingsIcon } from "icons/settings.svg";

interface SettingsBtnProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function SettingsBtn({ onClick }: SettingsBtnProps) {
  return (
    <div className="settings-icon" onClick={onClick}>
      <SettingsIcon />
    </div>
  );
}

export default SettingsBtn;
