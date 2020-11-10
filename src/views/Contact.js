import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import Header from 'components/Header/Header';
import Input from 'components/Input/Input';
import Textarea from 'components/Textarea/Textarea';
import Button from 'components/Button/Button';
import Paragraph from 'components/Paragraph/Paragraph';
import MainTemplate from 'templates/MainTemplate';

const Wrapper = styled.div`
  width: 83%;
  margin: 0 auto 0 auto;
  padding: 15px 0;
`;
const StyledForm = styled.form`
  height: 80%;
  width: 60%;
`;

const FieldContent = styled.div`
  position: relative;
`;

const StyledHeader = styled(Header)`
  margin-top: 0;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  /* position: absolute; */
  margin: 0 auto;
`;

const ErrorContainer = styled.div`
  position: absolute;
  height: 52px;
  right: 10%;
  top: -2%;
  font-size: 3rem;
`;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  console.log(values)
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));

  // Clearing out form because final-form form.reset() doesn't work
  values.email = values.title = values.message = ""

};

const Contact = () => (
  <MainTemplate>
    <Wrapper>
      <StyledHeader fontSize="5.5rem" color="#000">
        Contact me
      </StyledHeader>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          console.log(values);
          const errors = {};
          if (!values.title) {
            errors.title = 'This field is required';
          }
          if (!values.email) {
            errors.email = 'This field is required';
          }
          if (!values.textarea) {
            errors.textarea = 'This field is required';
          }
          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Field name="title">
              {({ input, meta }) => (
                <FieldContent>
                  <Input
                    {...input}
                    border="2px solid black"
                    type="text"
                    label="Title"
                    placeholder="What's your project about..."
                    color="black"
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
                  <Input
                    type="email"
                    {...input}
                    border="2px solid black"
                    label="Email"
                    placeholder="Your personal email..."
                    color="black"
                  />
                  {meta.error && meta.touched && (
                    <ErrorContainer>
                      <Paragraph color="red">{meta.error}</Paragraph>
                    </ErrorContainer>
                  )}
                </FieldContent>
              )}
            </Field>
            <Field name="textarea">
              {({ input, meta }) => (
                <FieldContent>
                  <Textarea
                    {...input}
                    border="2px solid black"
                    label="Describe your project"
                    placeholder="About your project..."
                    color="black"
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
              <Button type="submit" disabled={submitting}>
                Submit
              </Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      />
    </Wrapper>
  </MainTemplate>
);

export default Contact;
