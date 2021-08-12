import React, { Fragment, ChangeEvent, useState, useCallback } from "react";

import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import Input from "../../components/Input/Input";
import { MESSAGES } from "../../constants/messages";
import { LotteryService } from "../../services/LotteryService";
import { LotteryValidation } from "../../utils/validations/LotteryValidation";
import styles from "./Lottery.module.scss";

const initialLotteryState = { prize: "" };

interface LotteryInterface {
  error?: boolean;
}

const Lottery: React.FunctionComponent<LotteryInterface> = ({ error }) => {
  console.log("Component - Lottery");

  const [mobileNumber, setMobileNumber] = useState("");
  const [lotteryResult, setLotteryResult] = useState(initialLotteryState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckPrize = useCallback(async () => {
    const parsedMobileNo = parseInt(mobileNumber);
    if (!LotteryValidation.isValidMobileNumber(parsedMobileNo))
      setErrorMessage(MESSAGES.ERRORS.LOTTERY.INVALID_MOBILE_NO);

    try {
      const { data } = await LotteryService.checkForPrize(
        parseInt(mobileNumber)
      );
      if (!data.prize) throw new Error("");

      setLotteryResult(data);
    } catch (err) {
      setLotteryResult(() => {
        throw err;
      });
    }
  }, [mobileNumber]);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (errorMessage) setErrorMessage("");

      const value = e.target.value;
      if (value.length <= 10) setMobileNumber(value);
    },
    [errorMessage]
  );

  const renderLotteryResponse = (message: string) => {
    return <div className={styles.lotteryResponse}>{message}</div>;
  };

  return (
    <div className={styles.lottery}>
      {error ? (
        renderLotteryResponse(MESSAGES.LOTTERY.FALLBACK)
      ) : (
        <Fragment>
          {lotteryResult.prize ? (
            renderLotteryResponse(MESSAGES.LOTTERY.SUCCESS)
          ) : (
            <Fragment>
              <div className={styles.label}>
                Your Mobile Number can win you exciting prizes
              </div>
              <FormField
                className={styles.phoneNumber}
                contentStyle={styles.content}
                errorStyle={styles.error}
                error={errorMessage}
              >
                <Input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={handleInputChange}
                />
              </FormField>
              <Button
                className={styles.lotteryButton}
                label="I'm Feeling Lucky"
                onClick={handleCheckPrize}
              />
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default React.memo(Lottery);
