import { AdComponent } from "./Ad";
import { PostComponent } from "./PostComponent";
import { ProfileCard } from "./ProfileCard";

export const Home = () => {
  return (
    <div className="container">
      <ProfileCard />
      <PostComponent />
      <AdComponent />
    </div>
  );
};
