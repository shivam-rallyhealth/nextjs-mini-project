import React from 'react';
import { useRouter } from 'next/router';
export default function SpecificClientWithSpecificProject() {
  const urlParams = useRouter().query;
  return (
    <div>{`Client Name: ${urlParams.clientId} and Project Id: ${urlParams.clientProjectId}`}</div>
  );
}
