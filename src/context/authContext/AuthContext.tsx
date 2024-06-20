'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  User as FirebaseUser,
  UserCredential,
} from 'firebase/auth';
import { auth } from '../../../firebase.config';
import Cookies from 'js-cookie';
import Script from 'next/script';

interface AuthContextProps {
  user: FirebaseUser | null;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  passwordReset: (email: string) => Promise<void>;
  cookiesConsent: string | null;
  setCookiesConsent: (consent: string) => void;
}

const UserContext = createContext<AuthContextProps | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [cookiesConsent, setCookiesConsentState] = useState<string | null>(() => {
    const storedConsent = Cookies.get('cookies-consent');
    return storedConsent || null;
  });

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const passwordReset = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const setCookiesConsent = (consent: string) => {
    Cookies.set('cookies-consent', consent, { expires: 365 });
    setCookiesConsentState(consent);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logOut, signIn, passwordReset, cookiesConsent, setCookiesConsent }}>
      {children}
      {cookiesConsent === 'accepted' && (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
          </Script>
          <Script
            async
            src="https://cloud.umami.is/script.js"
            data-website-id="2af62211-472c-4dfc-925a-197b88a8c4c9"
          />
        </>
      )}
    </UserContext.Provider>
  );
};

export const useUserAuth = (): AuthContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserAuth must be used within a UserContextProvider");
  }
  return context;
};
