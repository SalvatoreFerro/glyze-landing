import { useEffect } from "react";
import { motion } from "framer-motion";

export default function GlyzeLanding() {
  useEffect(() => {
    document.title = "Glyze - Il menù NFC intelligente";
  }, []);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '2rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Il menù digitale NFC per il tuo locale
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Sostituisci i vecchi QR code con una soluzione più elegante, veloce e smart. Basta un tocco.
        </p>
        <button style={{
          padding: '0.8rem 1.5rem',
          backgroundColor: '#2563eb',
          color: 'white',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Richiedi il tuo kit gratuito
        </button>
      </section>

      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Come funziona Glyze</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          {[
            { step: "1. Tocca", desc: "Il cliente avvicina lo smartphone al tag NFC Glyze sul tavolo." },
            { step: "2. Scopri", desc: "Si apre automaticamente il menù digitale personalizzato." },
            { step: "3. Ordina", desc: "Più veloce, interattivo e coinvolgente." }
          ].map(({ step, desc }, i) => (
            <div key={i} style={{
              width: '250px',
              backgroundColor: '#f3f4f6',
              borderRadius: '1rem',
              padding: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{step}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: 'center', marginBottom: '4rem', backgroundColor: '#ede9fe', padding: '3rem 1rem', borderRadius: '1rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Diventa Ambassador Glyze</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          Stiamo selezionando 5 locali partner per ogni zona d’Italia. Ottieni visibilità nazionale, badge esclusivo e supporto dedicato.
        </p>
        <button style={{
          padding: '0.8rem 1.5rem',
          backgroundColor: '#7c3aed',
          color: 'white',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Candidati ora
        </button>
      </section>

      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contattaci</h2>
        <p style={{ marginBottom: '2rem' }}>Compila il modulo per ricevere informazioni o unirti al progetto Glyze.</p>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '500px',
          margin: '0 auto',
          gap: '1rem'
        }}>
          <input type="text" placeholder="Nome del locale" style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} />
          <input type="email" placeholder="Email" style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #ccc' }} />
          <textarea placeholder="Messaggio" rows="4" style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}></textarea>
          <button type="submit" style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#2563eb',
            color: 'white',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Invia richiesta
          </button>
        </form>
      </section>
    </div>
  );
}