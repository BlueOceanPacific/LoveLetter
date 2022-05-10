**Sign up**

1. The user fills in the required fields of username, email, password and optionally fills in pronoun, and avatar fields
   Bootstrap and React

2. If fields are not valid, the front end will notify the user on submitting

3. if fields are valid, the front end will allow the submission to run a post on the signup route
   1. POST all fields in a single object
      use axios to start -> dive into react query after workign
4. If the post is successful:
   1. Success Status: 201
      1. Route the user to the signup page
5. if the post fails:
   1. Error Status: 500 and error object
      1. If the error object code = 11000 → username already exists
         1. Render red text stating ‘username already exists’
      2. If we get any other error
         1. Render red text stating “error creating an account; please try again”
            1. Likely that DB is down, or something went wrong with bcrypt

// import { useQuery } from 'react-query';

// React Query info for polishing
// const { data, isFetching, isError } = useQuery(
// '/user/signup',
// () => {
// console.log(form.values);
// },
// {
// enabled: false,
// retry: false,
// }
// );
// console.log('data: ', data);
// console.log('isFetching', isFetching);
// if the error data comes back we need to rerender the
// useEffect(() => {
// if (data?.length) {
// setResults(data);
// }
// }, [data, setResults]);
