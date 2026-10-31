import AudioMessages from "@/components/AudioMessages";
import Livestream from "@/components/Livestream";
import YoutubeMessages from "@/components/YoutubeMessages";

const page = () => {
  return (
    <div>
      <Livestream />
      <YoutubeMessages />
      <AudioMessages />
    </div>
  );
};

export default page;
