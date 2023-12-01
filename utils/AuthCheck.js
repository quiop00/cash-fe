import { useRouter } from 'next/router'

export const AuthCheck = (props) => {
  const router = useRouter();
  let token = null;

  if (typeof window !== 'undefined') {
    token = localStorage.getItem("TOKEN");
  }

  const isJWTValid = token != null;

  if (typeof window !== 'undefined' && !isJWTValid) {
    router.push('/authentication/sign-in');
  }
   
  return props.children
}