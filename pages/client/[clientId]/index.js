import React from 'react';
import { useRouter } from 'next/router';
export default function ClientSpecific() {
  const urlParams = useRouter().query;
  return <div>{`Client Specific Page for ${urlParams.clientId}`}</div>;
}
