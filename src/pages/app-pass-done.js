import React from 'react';
import Layout from '@theme/Layout';

export default function PasswordChanged() {
  return (
    <Layout title="Jurnal Gold Recovery" description="Jurnal Gold Password recovery redirect">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Parola a fost schimbata cu succes. <br />
		  Va rugam sa va logati in Jurnal Gold cu noua parola.
        </p>
      </div>
    </Layout>
  );
}