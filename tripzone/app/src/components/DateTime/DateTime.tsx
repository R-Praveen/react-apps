import React from "react";

import moment from "moment";

import { CONSTANTS } from "../../constants/constants";

interface DateTimeInterface {
  dateTime?: string;
}

const DateTime: React.FunctionComponent<DateTimeInterface> = ({ dateTime }) => {
  console.log("Container - Date Time");

  let formattedTime, formattedDate;
  const zone = dateTime === undefined ? "IST" : "EST";

  if (dateTime !== "") {
    const now = dateTime
      ? moment(dateTime.substring(0, dateTime.length - 6))
      : moment();
    formattedTime = now.format(CONSTANTS.TIME_FORMAT);
    formattedDate = now.format(CONSTANTS.DATE_FORMAT);
  }

  return (
    <div className="date-time">
      <div className="text-top">
        {formattedDate} - {zone}
      </div>
      <div className="text-bottom">{formattedTime}</div>
    </div>
  );
};

export default React.memo(DateTime);
