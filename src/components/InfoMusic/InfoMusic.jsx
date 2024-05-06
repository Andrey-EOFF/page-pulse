// InfoMusic.jsx
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
import { MusicData } from "../../data/artist";

const InfoMusic = () => {
  const { data, isLoading, isError } = useQuery("MusicData", () => {
    return MusicData[0];
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const music = data;

  return (
    <InfoMusicWrapper key={music.artist}>
      <InfoMainBlock>
        <InfoBlock>
          <InfoBlockOne>
            <InfoImage src={music.img} alt={music.artist} />
            <InfoColumn>
              <InfoStatus>
                {music.status}{" "}
                <span>
                  <InfoIconStatus />
                </span>
              </InfoStatus>
              <InfoArtist>{music.artist}</InfoArtist>
              <InfoSound>{music.sound_type}</InfoSound>
              <InfoType>
                Type:
                <span>{music.type}</span>
              </InfoType>
              <InfoIconList>
                {music.icons.map((icon, index) => (
                  <InfoIcon key={index}>
                    <img src={icon.path} alt={icon.name} />
                  </InfoIcon>
                ))}
              </InfoIconList>
            </InfoColumn>
          </InfoBlockOne>
          <InfoBlockTwo>
            <InfoItemTrend>{music.trend}</InfoItemTrend>
            <InfoItemDuration>
              Duration: <span>{music.duration}</span>
            </InfoItemDuration>
            <InfoBirtateBlock>
              <InfoItemBitrate>Bitrate:</InfoItemBitrate>
              <BitrateImage src={music.Bitrate} alt="Bitrate Image" />
            </InfoBirtateBlock>
          </InfoBlockTwo>
          <InfoBlockThree>
            <InfoBlockList>
              <InfoItemCountry>
                Country: <span>{music.country}</span>
                <FlagImage src={music.flag} alt="Flag Canada" />
              </InfoItemCountry>

              <InfoItemCountry>
                Place in Country: <span>{music.place_in_country}</span>
              </InfoItemCountry>
              <InfoItemCountry>
                Place in World: <span>{music.place_in_world}</span>
              </InfoItemCountry>
            </InfoBlockList>
            <InfoItemText type="button">{music.text}</InfoItemText>
          </InfoBlockThree>
        </InfoBlock>

        <InfoKeywords>
          <KeywordsTitle>Keywords:</KeywordsTitle>
          <KeywordsList>
            {music.keywords.map((keyword, index) => (
              <KeywordsItem
                key={index}
                isLast={index === music.keywords.length - 1}
              >
                {keyword}
              </KeywordsItem>
            ))}
          </KeywordsList>
        </InfoKeywords>
      </InfoMainBlock>

      <InfoViews music={music} />
    </InfoMusicWrapper>
  );
};

export default InfoMusic;
