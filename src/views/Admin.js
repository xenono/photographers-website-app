import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Header from 'components/Header/Header';
import Paragraph from 'components/Paragraph/Paragraph';
import MainTemplate from 'templates/MainTemplate';
import ProjectDetailsHeaderItem
  from 'components/AdminComponents/ProjectDetailsHeaderItem/ProjectDetailsHeaderItem';

const AdminHeader = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  padding: 1em 0.5em;
  grid-column-start: 1;
  grid-column-end: 7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const StyledHeader = styled(Header)`
  width: 20%;
  text-align: center;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 2rem;
  margin-top: 30px;
  line-height: 1.4;
`;

const ProjectList = styled.div`
  min-height: 100vh;
  grid-column-end: 2;
  border-right: 1px solid black;
`;

const ProjectDetails = styled.div`
  min-height: 100vh;
  grid-column-start: 2;
  grid-column-end: 7;
  border-left: 1px solid black;
`;

const ProjectDetailsHeader = styled.div`
  width: 100%;
    margin-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectDetailsContent = styled.div`
  width: 80%;
  margin: 55px auto 0 auto;
`;

const ListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid black;
`;

const ProjectInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;

  &:hover {
    cursor: pointer;
    background-color: #c4c4c4;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #000;
      color: #fff;
    `}
`;

const InfoItem = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 600;
  padding: 20px 10px;
  margin: 0;
`;

const Admin = () => {
  const [projectArray, setProjectArray] = useState([]);
  const [currentProject, changeActiveProject] = useState(null);

  axios
    .get('https://photgraphers-app-backend.herokuapp.com/projects')
    .then(({ data }) => {
      setProjectArray(data);
    })
    .catch((err) => console.log(err));

  useEffect(() => {
    if (!currentProject) {
      changeActiveProject(projectArray[0]);
    }
  },[currentProject,projectArray]);

  return (
    <MainTemplate admin="true">
      <Grid>
        <AdminHeader>
          <StyledHeader>Clients&apos; projects</StyledHeader>
        </AdminHeader>
        <ProjectList>
          <ListHeader>
            <StyledHeader color="black">Date</StyledHeader>
            <StyledHeader color="black">Title</StyledHeader>
          </ListHeader>
          {projectArray.length && currentProject ? (
            projectArray.map((item) => {
              if (item._id === currentProject._id) {
                return (
                  <ProjectInfo key={item._id} active>
                    <InfoItem color="black" key={item._id + "-date"}>{item.date}</InfoItem>
                    <InfoItem color="black" key={item._id + "-title"}>{item.title}</InfoItem>
                  </ProjectInfo>
                );
              } else {
                return (
                  <ProjectInfo key={item._id} onClick={() => changeActiveProject(item)}>
                    <InfoItem color="black" key={item._id + "-date"}>{item.date}</InfoItem>
                    <InfoItem color="black" key={item._id + "-title"}>{item.title}</InfoItem>
                  </ProjectInfo>
                );
              }
            })
          ) : (
            <Header fontSize="2.7rem" color="black">
              Loading...
            </Header>
          )}
        </ProjectList>
        <ProjectDetails>
          {currentProject ? (
            <>
              <ProjectDetailsHeader>
                <ProjectDetailsHeaderItem title="Title:" value={currentProject.title} />
                <ProjectDetailsHeaderItem title="Email:" value={currentProject.email} />
              </ProjectDetailsHeader>
              <ProjectDetailsContent>
                <Header color="black" fontSize="2.7rem" fontWeight="normal">
                  About project
                </Header>
                <StyledParagraph>{currentProject.message}</StyledParagraph>
              </ProjectDetailsContent>
            </>
          ) : (
            <Header fontSize="2.7rem" color="black">
              Loading...
            </Header>
          )}
        </ProjectDetails>
      </Grid>
    </MainTemplate>
  );
};

export default Admin;
