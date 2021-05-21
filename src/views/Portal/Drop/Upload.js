import React from "react";
import { Heading, MusicCard, Dropzone } from "components";

const Upload = ({ songDetails, setSongDetails }) => {
  const handleOnCoverArtDrop = (acceptedFiles) => {
    setSongDetails({
      ...songDetails,
      image: "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    });
    setTimeout(
      () =>
        setSongDetails({
          ...songDetails,
          image:
            "https://images.vexels.com/media/users/3/145464/isolated/preview/0842d1719ec663c3256b9f46c740bbed-audio-wave-by-vexels.png",
        }),
      3000
    );
  };

  return (
    <>
      <Heading fontSize={2} mb={2}>
        Upload your MP3 file
      </Heading>
      <Dropzone onDrop={handleOnCoverArtDrop}>
        <MusicCard {...songDetails} />
      </Dropzone>
    </>
  );
};

export default Upload;
