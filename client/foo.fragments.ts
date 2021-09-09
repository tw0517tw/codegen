import gql from 'graphql-tag';

const bar = gql`
  fragment bar on Student {
    id
    lastName
  }
`;

export default {
  foo: gql`fragment foo on Query {
    greeting

    students{
      id
      firstName

      ...bar
    }

    ${bar}
  }`,

  bar,
};
