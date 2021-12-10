import React from 'react';
import Link from 'next/link'; // Link is a component that is used to link to other pages

export default function HomePage() {
  return (
    <div>
      <h1>Journey of Next Starts Here</h1>
      <li>
        <ul>
          <Link href='/client'>Clients Page</Link>
        </ul>
      </li>
    </div>
  );
}
