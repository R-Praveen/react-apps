import "./Home.scss";
import React, { useState, useEffect, useCallback } from "react";

import { CONSTANTS } from "../../constants/constants";
import AvailableFlights from "../../containers/AvailableFlights/AvailableFlights";
import BookNow from "../../containers/BookNow/BookNow";
import CityPromotion from "../../containers/CityPromotion/CityPromotion";
import GlobalPromotion from "../../containers/GlobalPromotion/GlobalPromotion";
import Header from "../../containers/Header/Header";
import PlanMyTrip, {
  CityInterface,
} from "../../containers/PlanMyTrip/PlanMyTrip";
import Search from "../../containers/Search/Search";
import { UserInfoService } from "../../services/UserInfoService";

interface User {
  name: string;
  prime: string;
}

const initialUserState = { name: "", prime: "" };
export const UserContext = React.createContext(initialUserState);

/**
 * Home Page
 */
const Home: React.FunctionComponent = () => {
  console.log("Screen - Home");

  const initialCityState = { code: "", name: "" };

  const [user, setUser] = useState<User>(initialUserState);
  const [tripPlan, setTripPlan] = useState<{
    src: CityInterface;
    dest: CityInterface;
  }>({ src: initialCityState, dest: initialCityState });
  const [destCityCode, setDestCityCode] = useState("");
  const [updateHistory, setUpdateHistory] = useState(false);
  const [flightPrice, setFlightPrice] = useState(0);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const { data } = await UserInfoService.loginInUser(
          CONSTANTS.DUMMY_USER.USERNAME,
          CONSTANTS.DUMMY_USER.PASSWORD
        );
        setUser(data);
      } catch (err) {
        setUser(initialUserState);
      }
    };

    getUserDetails();
  }, []);

  const handleTripSearch = useCallback(
    (source: CityInterface, destination: CityInterface) => {
      setTripPlan({ src: source, dest: destination });
      setFlightPrice(0);
    },
    []
  );

  const handleDestinationSearch = useCallback(
    (destination: string, updateHistory: boolean) => {
      setDestCityCode(destination);
      setUpdateHistory(updateHistory);
    },
    []
  );

  const handleBooking = useCallback((price: number) => {
    setFlightPrice(price);
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="home">
        <Header />
        <div className="container">
          <div className="container-left">
            <Search onDestinationSearch={handleDestinationSearch} />
            {destCityCode && (
              <CityPromotion
                cityCode={destCityCode}
                updateHistory={updateHistory}
                onPreviousSelection={handleDestinationSearch}
              />
            )}
            <GlobalPromotion />
          </div>
          <div className="container-right">
            <PlanMyTrip
              onTripSearch={handleTripSearch}
              onDestinationChange={handleDestinationSearch}
            />
            {tripPlan.src.code && tripPlan.dest.code ? (
              <AvailableFlights
                src={tripPlan.src}
                dest={tripPlan.dest}
                onBooking={handleBooking}
              />
            ) : null}
            {flightPrice > 0 && <BookNow flightPrice={flightPrice} />}
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Home;
