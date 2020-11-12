import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Form, Field } from 'react-final-form';
import CameraPhoto from 'assets/camera.jpg';
import Header from 'components/Header/Header';
import Input from 'components/Input/Input';
import Textarea from 'components/Textarea/Textarea';
import Button from 'components/Button/Button';
import Paragraph from 'components/Paragraph/Paragraph';

const Wrapper = styled.div`
  background: url(${CameraPhoto}) center;
  background-size: cover;
  padding: 16px 10px;
  @media (max-width: 600px){
    padding-bottom: 60px;
  }
`;

const StyledForm = styled.form`
  position: relative;
  margin-left: 2.5%;
  height: 80%;
  width: 40%;
  top: 10%;
  left: 10%;
  @media (max-width: 600px){
    width: 70%;
  }
`;

const FieldContent = styled.div`
  position: relative;
`;

const StyledHeader = styled(Header)`
  margin-bottom: 1em;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: -50%;
  bottom: 12%;
  @media (max-width: 600px){
    position: static;
    margin: 0 auto;
  }
`;

const ErrorContainer = styled.div`
  position: absolute;
  height: 52px;
  right: 10%;
  top: -2%;
  font-size: 3rem;
`;


// Executes after submitting the form.
const onSubmit = (values) => {
  const currentDate = new Date()
  values.date =
    `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`

  axios
    .post('https://photgraphers-app-backend.herokuapp.com/addProject', values)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  // Clearing out form because final-form form.reset() doesn't work
  values.email = values.title = values.message = ""
};

const ProjectForm = () => (
  <Wrapper>
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = 'This field is required';
        }
        if (!values.email) {
          errors.email = 'This field is required';
        }
        if (!values.message) {
          errors.message = 'This field is required';
        }
        return errors;
      }}
      render={({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledHeader fontSize="5rem">Estimate your project</StyledHeader>
          <Field name="title">
            {({ input, meta }) => (
              <FieldContent>
                <Input
                  {...input}
                  type="text"
                  label="Title"
                  placeholder="What's your project about..."
                />
                {meta.error && meta.touched && (
                  <ErrorContainer>
                    <Paragraph color="red">{meta.error}</Paragraph>
                  </ErrorContainer>
                )}
              </FieldContent>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <FieldContent>
                <Input type="email" {...input} label="Email" placeholder="Your personal email..." />
                {meta.error && meta.touched && (
                  <ErrorContainer>
                    <Paragraph color="red">{meta.error}</Paragraph>
                  </ErrorContainer>
                )}
              </FieldContent>
            )}
          </Field>
          <Field name="message">
            {({ input, meta }) => (
              <FieldContent>
                <Textarea
                  {...input}
                  label="Describe your project"
                  placeholder="About your project..."
                />
                {meta.error && meta.touched && (
                  <ErrorContainer>
                    <Paragraph color="red">{meta.error}</Paragraph>
                  </ErrorContainer>
                )}
              </FieldContent>
            )}
          </Field>
          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
        </StyledForm>
      )}
    />
  </Wrapper>
);

export default ProjectForm;
