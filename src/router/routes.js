import Home from "../pages/Home";
import JourneyList from "../pages/JourneyList";
import NotFound from "../pages/NotFound";

export const routes =
    [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/journeyList/:originId/:destinationId/:departureDate",
            element: <JourneyList />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]