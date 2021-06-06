import React from "react";
import { Heading, MusicCard, Dropzone } from "components";

const CoverArt = ({ songDetails, setSongDetails }) => {
  const handleOnCoverArtDrop = (acceptedFiles) => {
    setSongDetails({
      ...songDetails,
      image: URL.createObjectURL(acceptedFiles[0]),
    });
  };

  return (
    <>
      <Heading fontSize={2} mb={2}>
        Upload your cover art
      </Heading>
      <Dropzone onDrop={handleOnCoverArtDrop}>
        <MusicCard {...songDetails} />
      </Dropzone>
    </>
  );
};

export default CoverArt;
