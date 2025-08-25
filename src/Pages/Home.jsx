import DisplayHead from "../components/DisplayHead";
import Projects from "../components/Projects";
import Card from "../components/Card";
import Api from "../components/Api";
import axiosInstance from "../axios/axiosInstance"
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const {
    isLoading: FeIsLoading,
    error: FeError,
    data: FeData,
  } = useQuery({
    queryKey: ["frontend-data"],
    queryFn: async () => {
      const response = await axiosInstance.get("/frontend/get-data");
      return response.data;
    },
  });

  const {
    isLoading: MaIsLoading,
    error: MaError,
    data: MaData,
  } = useQuery({
    queryKey: ["mobile-data"],
    queryFn: async () => {
      const response = await axiosInstance.get("/mobile/get-all-mobileApps");
      return response.data;
    },
  });

  const MobileAppProject = MaData?.data || [];

  return (
    <div>
      <div id="frontend" className="pt-[12vh]">
        <DisplayHead
          TextA="FRONT"
          TextB="END "
          aboutText="I craft responsive, high-performance user interfaces using React, Vue.js, Nuxt.js, TypeScript, and JavaScript. With tools like Tailwind CSS, Next.js, Redux, Pinia, and React Query, I build clean, accessible UIs from admin dashboards and portfolios to e-commerce and fintech apps always with a focus on UX, speed, and pixel perfect"
          
        />
      </div>
      <div>
        <Projects
          projects={FeData?.projects || []}
          FeIsLoading={FeIsLoading}
          FeError={FeError}
          type="frontend"
        />
      </div>
      <div>
        <Card />
      </div>
      <div id="mobile" className="pb-[20px]">
        <DisplayHead
           TextA="MOBILE"
           TextB="APP "
           aboutText="I develop cross-platform mobile apps with React Native and Expo, delivering smooth, native like experiences on both iOS and Android. Using Reanimated for advanced gestures and animations, I build intuitive apps from fitness trackers to fintech platforms with responsive layouts and platform specific optimizations."
           
         />
      </div>
      <div>
        <Projects
          projects={MobileAppProject}
          BeIsLoading={MaIsLoading}
          BeError={MaError}
          type="mobile"
        />
      </div>
      <div className="pt-[20vh]">
        <DisplayHead
          TextA="BACK"
          TextB="END "
          aboutText="I design scalable, secure backend systems using Node.js and Express. I build and document RESTful APIs with Swagger, implement JWT and cookie based authentication, and integrate third-party services like payment gateways. I work with PostgreSQL, MongoDB, and MySQL, ensuring robust, maintainable, and performant backend services."
          id="backend" 
        />
      </div>
      <div>
        <Api />
      </div>
    </div>
  );
};

export default Home;