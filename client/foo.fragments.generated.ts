import * as Types from './graphql';

import { BarFragment } from './foo.fragments.generated';
export type BarFragment = { __typename?: 'Student', id: string, lastName?: Types.Maybe<string> };

export type FooFragment = { __typename?: 'Query', greeting?: Types.Maybe<string>, students?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Student', id: string, firstName?: Types.Maybe<string> }
    & BarFragment
  )>>> };
