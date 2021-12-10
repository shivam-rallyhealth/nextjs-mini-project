import React from 'react';
import { useRouter } from 'next/router';
export default function NestedBlogPage() {
  const { slug } = useRouter().query;

  return <div>{slug ? slug.join(', ') : 'Hey There'}</div>;
}
