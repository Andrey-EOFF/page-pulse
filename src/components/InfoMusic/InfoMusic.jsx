import React from "react";
import { useQuery } from "react-query";
import {
  InfoMusicWrapper,
  InfoColumn,
  InfoImage,
  InfoBlockOne,
  InfoBlockTwo,
  InfoBlockThree,
  InfoBlock,
  InfoStatus,
  InfoArtist,
  InfoSound,
  InfoType,
  InfoIcon,
  InfoIconList,
  InfoIconStatus,
  InfoItemTrend,
  InfoItemDuration,
  InfoItemBitrate,
  BitrateImage,
  InfoBirtateBlock,
  InfoItemCountry,
  InfoItemText,
  FlagImage,
  InfoBlockList,
  InfoMainBlock,
  InfoKeywords,
  KeywordsList,
  KeywordsItem,
  KeywordsTitle,
} from "./InfoMusic.styled";

import InfoViews from "./InfoViews/InfoViews";

const InfoMusic = ({ MusicData }) => {
  const { data, isLoading, isError } = useQuery("MusicData", () => {
    return MusicData[0];
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const {
    img,
    artist,
    status,
    sound_type,
    type,
    icons,
    trend,
    duration,
    Bitrate,
    country,
    flag,
    place_in_country,
    place_in_world,
    text,
    keywords,
  } = data;

  return (
    <InfoMusicWrapper key={artist}>
      <InfoMainBlock>
        <InfoBlock>
          <InfoBlockOne>
            <InfoImage src={img} alt={artist} />
            <InfoColumn>
              <InfoStatus>
                {status}{" "}
                <span>
                  <InfoIconStatus />
                </span>
              </InfoStatus>
              <InfoArtist>{artist}</InfoArtist>
              <InfoSound>{sound_type}</InfoSound>
              <InfoType>
                Type: <span>{type}</span>
              </InfoType>
              <InfoIconList>
                {icons.map((icon, index) => (
                  <InfoIcon key={index}>
                    <img src={icon.path} alt={icon.name} />
                  </InfoIcon>
                ))}
              </InfoIconList>
            </InfoColumn>
          </InfoBlockOne>
          <InfoBlockTwo>
            <InfoItemTrend>{trend}</InfoItemTrend>
            <InfoItemDuration>
              Duration: <span>{duration}</span>
            </InfoItemDuration>
            <InfoBirtateBlock>
              <InfoItemBitrate>Bitrate:</InfoItemBitrate>
              <BitrateImage src={Bitrate} alt="Bitrate Image" />
            </InfoBirtateBlock>
          </InfoBlockTwo>
          <InfoBlockThree>
            <InfoBlockList>
              <InfoItemCountry>
                Country: <span>{country}</span>
                <FlagImage src={flag} alt="Flag Canada" />
              </InfoItemCountry>
              <InfoItemCountry>
                Place in Country: <span>{place_in_country}</span>
              </InfoItemCountry>
              <InfoItemCountry>
                Place in World: <span>{place_in_world}</span>
              </InfoItemCountry>
            </InfoBlockList>
            <InfoItemText type="button">{text}</InfoItemText>
          </InfoBlockThree>
        </InfoBlock>

        <InfoKeywords>
          <KeywordsTitle>Keywords:</KeywordsTitle>
          <KeywordsList>
            {keywords.map((keyword, index) => (
              <KeywordsItem key={index}>{keyword}</KeywordsItem>
            ))}
          </KeywordsList>
        </InfoKeywords>
      </InfoMainBlock>

      <InfoViews music={data} />
    </InfoMusicWrapper>
  );
};

export default InfoMusic;
