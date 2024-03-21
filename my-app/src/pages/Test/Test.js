import React from 'react'
import { Amplify } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { Authenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

const Test = () => {
  return (
    <div>
        <Authenticator>
          {({ signOut, user }) => (
            <div>
              Test
              <button onClick={signOut}>Sign out</button>
            </div>
          )}
        </Authenticator>
    </div>
  )
}

export default Test;