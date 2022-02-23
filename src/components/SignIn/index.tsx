import { SignInContainer, Icon, Text , Form , FormWrap, FormContent, FormH1, FormLabel, FormInput, FormButton} from "./SignInElements";
import {INavBarItem} from "../../global/types/NavBarItem";

export const SignIn = (() => {
  return(
    <SignInContainer >
      <FormWrap>
        <Icon to="/">dolla</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type='email' required/>
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type='password' required/>
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </SignInContainer>
  )
})