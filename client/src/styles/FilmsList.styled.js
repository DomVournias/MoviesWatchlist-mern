import styled from "styled-components";

export const FilmsWrapper = styled.div`
  padding: 4em;
  background-color: ${({ theme }) => theme.dark.a};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FilmCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  justify-content: space-evenly;
  grid-gap: 1rem;
  grid-row-gap: 2em;
`;

export const FilmCard = styled.li`
  display: flex;
  flex-direction: column;

  > img {
  }
`;

export const FilmPoster = styled.div`
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  padding-bottom: 148%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    min-height: 100%;
  }
`;

export const FilmName = styled.h3`
  font-size: 14px;
  line-height: 1.3em;
  margin: 0;
  margin-bottom: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
`;

export const FileInfo = styled.div`
  font-size: 13px;
  color: #aaa;
  line-height: 1.3em;
`;
