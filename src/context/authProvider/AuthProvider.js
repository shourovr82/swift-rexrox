import React, { createContext } from 'react';
import app from '../../firebase/firebase.config'
import { getAuth } from 'firebase/auth'

export const EveryContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const name = 'shafin';
  const totalValue = { name }

  return (
    <EveryContext.Provider value={totalValue}>
      {children}
    </EveryContext.Provider>
  );
};

export default AuthProvider;