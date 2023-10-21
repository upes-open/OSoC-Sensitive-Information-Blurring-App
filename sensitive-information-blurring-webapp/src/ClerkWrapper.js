import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkFrontendApi = "pk_test_aW1tZW5zZS1jb3lvdGUtMzcuY2xlcmsuYWNjb3VudHMuZGV2JA"; // Replace with your Clerk frontend API key

function ClerkWrapper({ children }) {
  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>
      {children}
    </ClerkProvider>
  );
}

export default ClerkWrapper;
