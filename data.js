/* Dati statici della demo B2B Supply CRM. Importi in centesimi. */
const DATA = {
  products: [
    { sku: 'PRD-1001', name: 'Trapano a percussione 18V', cat: 'Utensili', unit: 'pz', price: 18900, priceVisible: true, stock: 120, reserved: 14, emoji: '🔧', hue: 215, desc: 'Trapano brushless con 2 batterie 4Ah, mandrino 13 mm, valigetta inclusa.' },
    { sku: 'PRD-1002', name: 'Set punte HSS 25 pezzi', cat: 'Utensili', unit: 'set', price: 2450, priceVisible: true, stock: 560, reserved: 40, emoji: '🔩', hue: 200, desc: 'Punte in acciaio rapido per metallo, legno e plastica. Astuccio rigido.' },
    { sku: 'PRD-1003', name: 'Casco da cantiere EN 397', cat: 'Sicurezza', unit: 'pz', price: 1290, priceVisible: true, stock: 800, reserved: 120, emoji: '⛑️', hue: 35, desc: 'Casco con regolazione a cremagliera e bardatura a 6 punti.' },
    { sku: 'PRD-1004', name: 'Guanti antitaglio cat. 5', cat: 'Sicurezza', unit: 'paio', price: 640, priceVisible: true, stock: 1500, reserved: 200, emoji: '🧤', hue: 150, desc: 'Guanti in HPPE con rivestimento in nitrile, taglie 8–11.' },
    { sku: 'PRD-1005', name: 'Scarpe antinfortunistiche S3', cat: 'Sicurezza', unit: 'paio', price: 5400, priceVisible: true, stock: 90, reserved: 78, emoji: '🥾', hue: 25, desc: 'Puntale composito, suola antiscivolo, impermeabili.' },
    { sku: 'PRD-1006', name: 'Livella laser 360°', cat: 'Misura', unit: 'pz', price: 13900, priceVisible: false, stock: 35, reserved: 5, emoji: '📐', hue: 140, desc: 'Livella a 3 linee verdi, portata 30 m, autolivellamento.' },
    { sku: 'PRD-1007', name: 'Cavo H07RN-F 3G2.5 (100 m)', cat: 'Elettrico', unit: 'bobina', price: 21500, priceVisible: false, stock: 22, reserved: 12, emoji: '🔌', hue: 265, desc: 'Cavo flessibile per posa mobile, guaina in gomma.' },
    { sku: 'PRD-1008', name: 'Quadro elettrico 12 moduli', cat: 'Elettrico', unit: 'pz', price: 3870, priceVisible: true, stock: 210, reserved: 18, emoji: '⚡', hue: 50, desc: 'Centralino da incasso IP40, portello fumé, guida DIN.' },
    { sku: 'PRD-1009', name: 'Smerigliatrice 125 mm 850 W', cat: 'Utensili', unit: 'pz', price: 7900, priceVisible: true, stock: 64, reserved: 9, emoji: '🛠️', hue: 5, desc: 'Smerigliatrice angolare con protezione regolabile e avvio dolce.' },
    { sku: 'PRD-1010', name: 'Vernice murale lavabile 14 L', cat: 'Vernici', unit: 'latta', price: 6200, priceVisible: true, stock: 140, reserved: 30, emoji: '🎨', hue: 180, desc: 'Idropittura traspirante bianca, resa 10–12 m²/L.' },
    { sku: 'PRD-1011', name: 'Silicone sanitario 280 ml (box 24)', cat: 'Vernici', unit: 'box', price: 5800, priceVisible: true, stock: 75, reserved: 6, emoji: '🧴', hue: 300, desc: 'Silicone acetico antimuffa, trasparente, scatola da 24 cartucce.' },
    { sku: 'PRD-1012', name: 'Scala telescopica alluminio 3,8 m', cat: 'Accessori', unit: 'pz', price: 12900, priceVisible: true, stock: 0, reserved: 0, emoji: '🪜', hue: 230, desc: 'Scala telescopica 12 gradini con chiusura di sicurezza.' }
  ],

  agents: [
    { id: 'A1', name: 'Marco Rossi', status: 'attivo', rate: 5, email: 'marco.rossi@agenti.example', phone: '+39 335 100 2001', vat: 'IT01234560155', rateHistory: [{ rate: 4, from: '2024-01-01', by: 'Giulia Conti', reason: 'Contratto iniziale' }, { rate: 5, from: '2025-04-01', by: 'Giulia Conti', reason: 'Revisione annuale' }] },
    { id: 'A2', name: 'Laura Bianchi', status: 'attivo', rate: 7, email: 'laura.bianchi@agenti.example', phone: '+39 347 220 3002', vat: 'IT02345670266', rateHistory: [{ rate: 7, from: '2024-06-01', by: 'Giulia Conti', reason: 'Contratto area Nord-Est' }] },
    { id: 'A3', name: 'Paolo Verdi', status: 'attivo', rate: 6, email: 'paolo.verdi@agenti.example', phone: '+39 339 330 4003', vat: 'IT03456780377', rateHistory: [{ rate: 6, from: '2024-09-01', by: 'Giulia Conti', reason: 'Contratto area Sud' }] },
    { id: 'A4', name: 'Sara Neri', status: 'in verifica', rate: 5.5, email: 'sara.neri@agenti.example', phone: '+39 345 440 5004', vat: 'IT04567890488', rateHistory: [] }
  ],

  customers: [
    { id: 'C1', name: 'Alfa Costruzioni S.r.l.', city: 'Milano', vat: 'IT09876540151', agentId: 'A1', discount: 8, contact: 'Elena Marchi', email: 'acquisti@alfacostruzioni.example', marketing: true, since: '2023-03-12', history: [{ date: '2023-03-12', agentId: 'A1', by: 'Giulia Conti', reason: 'Assegnazione iniziale' }] },
    { id: 'C2', name: 'Beta Impianti S.p.A.', city: 'Torino', vat: 'IT08765430012', agentId: 'A1', discount: 5, contact: 'Luca Ferri', email: 'ordini@betaimpianti.example', marketing: true, since: '2023-06-20', history: [{ date: '2023-06-20', agentId: 'A1', by: 'Giulia Conti', reason: 'Zona Piemonte' }] },
    { id: 'C3', name: 'Gamma Edilizia S.n.c.', city: 'Bologna', vat: 'IT07654320376', agentId: null, discount: 10, contact: 'Paola Neri', email: 'info@gammaedilizia.example', marketing: false, since: '2022-11-03', history: [] },
    { id: 'C4', name: 'Delta Serramenti S.r.l.', city: 'Verona', vat: 'IT06543210231', agentId: 'A2', discount: 6, contact: 'Andrea Costa', email: 'amministrazione@deltaserramenti.example', marketing: true, since: '2024-02-14', history: [{ date: '2024-02-14', agentId: 'A2', by: 'Giulia Conti', reason: 'Nuovo cliente Veneto' }] },
    { id: 'C5', name: 'Epsilon Termoidraulica', city: 'Napoli', vat: 'IT05432100638', agentId: 'A3', discount: 4, contact: 'Giorgio Esposito', email: 'giorgio@epsilontermo.example', marketing: true, since: '2024-05-08', history: [{ date: '2024-05-08', agentId: 'A3', by: 'Giulia Conti', reason: 'Zona Campania' }] },
    { id: 'C6', name: 'Zeta Forniture S.r.l.', city: 'Roma', vat: 'IT04321090589', agentId: null, discount: 7, contact: 'Marta Greco', email: 'ordini@zetaforniture.example', marketing: true, since: '2025-01-22', history: [] }
  ],

  /* status commerciale: richiesta → preventivo → accettato → approvato → completato
     logistica e pagamento sono stati indipendenti */
  orders: [
    { id: 'ORD-0141', customerId: 'C1', date: '2026-10-02', status: 'approvato', log: 'consegnato', method: 'stripe', paidFull: true, liquidated: true, lines: [['PRD-1001', 30], ['PRD-1008', 60], ['PRD-1004', 200]] },
    { id: 'ORD-0142', customerId: 'C2', date: '2026-10-09', status: 'approvato', log: 'in_preparazione', method: 'bonifico', paidHalf: true, lines: [['PRD-1007', 8], ['PRD-1009', 20]] },
    { id: 'ORD-0143', customerId: 'C3', date: '2026-10-12', status: 'completato', log: 'consegnato', method: 'stripe', paidFull: true, lines: [['PRD-1005', 40], ['PRD-1003', 100]] },
    { id: 'ORD-0144', customerId: 'C4', date: '2026-10-20', status: 'approvato', log: 'da_preparare', method: 'bonifico', lines: [['PRD-1010', 60], ['PRD-1011', 40]] },
    { id: 'ORD-0145', customerId: 'C5', date: '2026-10-22', status: 'approvato', log: 'spedito', method: 'bonifico', paidFull: true, lines: [['PRD-1002', 50], ['PRD-1009', 10]] },
    { id: 'ORD-0146', customerId: 'C6', date: '2026-10-30', status: 'richiesta', log: '—', lines: [['PRD-1003', 60], ['PRD-1004', 150]] },
    { id: 'ORD-0147', customerId: 'C1', date: '2026-10-29', status: 'preventivo', log: '—', lines: [['PRD-1006', 6], ['PRD-1002', 40]] },
    { id: 'ORD-0148', customerId: 'C3', date: '2026-10-27', status: 'approvato', log: 'da_preparare', method: 'stripe', processing: true, lines: [['PRD-1010', 20], ['PRD-1011', 10]] },
    { id: 'ORD-0149', customerId: 'C4', date: '2026-09-18', status: 'completato', log: 'consegnato', method: 'bonifico', paidFull: true, liquidated: true, lines: [['PRD-1001', 15], ['PRD-1009', 25]] },
    { id: 'ORD-0150', customerId: 'C1', date: '2026-09-05', status: 'completato', log: 'consegnato', method: 'stripe', paidFull: true, liquidated: true, lines: [['PRD-1004', 300], ['PRD-1003', 80]] }
  ],

  bank: [
    { id: 'BM-501', date: '2026-10-29', desc: 'BONIFICO ORD-0144 DELTA SERRAMENTI SRL', status: 'da_abbinare', suggest: 'ORD-0144', conf: 'alta', amountFromOrder: 'ORD-0144' },
    { id: 'BM-502', date: '2026-10-28', desc: 'SALDO ORD 0142 BETA IMPIANTI SPA', status: 'da_abbinare', suggest: 'ORD-0142', conf: 'alta', amountFromOrder: 'ORD-0142', residual: true },
    { id: 'BM-503', date: '2026-10-30', desc: 'PAGAMENTO FATTURA 2026/778', amount: 125000, status: 'eccezione', note: 'Causale non riconducibile a un ordine' },
    { id: 'BM-504', date: '2026-10-30', desc: 'ZETA FORNITURE ACCONTO', amount: 300000, status: 'eccezione', note: 'Nessun ordine approvato per il cliente: acconto su richiesta ORD-0146?' }
  ],

  stripeEvents: [
    { id: 'evt_1QxA…9c2', type: 'checkout.session.completed', order: 'ORD-0141', result: 'Elaborato', at: '2026-10-03 09:14' },
    { id: 'evt_1QxB…77e', type: 'checkout.session.completed', order: 'ORD-0143', result: 'Elaborato', at: '2026-10-13 15:02' },
    { id: 'evt_1QxB…77e', type: 'checkout.session.completed', order: 'ORD-0143', result: 'Duplicato ignorato', at: '2026-10-13 15:02' },
    { id: 'evt_1QxC…410', type: 'payment_intent.payment_failed', order: 'ORD-0148', result: 'Tentativo fallito – nuovo tentativo consentito', at: '2026-10-27 18:40' }
  ],

  registrations: [
    { id: 'R1', company: 'Omega Manutenzioni S.r.l.', vat: 'IT03210980154', city: 'Brescia', contact: 'Davide Longo', email: 'd.longo@omegamanut.example', date: '2026-10-30', origin: 'Vetrina – Novità d’autunno', status: 'in attesa' },
    { id: 'R2', company: 'Kappa Costruzioni S.r.l.', vat: 'IT02109870217', city: 'Padova', contact: 'Sofia Rinaldi', email: 'sofia@kappacostruzioni.example', date: '2026-10-31', origin: 'Newsletter – Novità ottobre', status: 'in attesa' }
  ],

  showcase: { title: 'Novità d’autunno', slug: 'novita-autunno', status: 'pubblicata', items: ['PRD-1001', 'PRD-1003', 'PRD-1005', 'PRD-1008', 'PRD-1010'], badges: { 'PRD-1001': 'In evidenza', 'PRD-1005': 'Novità', 'PRD-1010': 'Offerta' }, leads: 7, views: 1284 },

  campaigns: [
    { id: 'NL-12', type: 'Generale', name: 'Novità di ottobre', subject: 'Nuovi arrivi e orari festività', status: 'inviata', date: '2026-10-08', recipients: 4, delivered: 4, clicks: 3, orders: 1 },
    { id: 'NL-13', type: 'Offerte', name: 'Settimana Sicurezza -15%', subject: 'DPI in offerta fino al 15 novembre', status: 'programmata', date: '2026-11-04', recipients: 4, delivered: 0, clicks: 0, orders: 0 },
    { id: 'NL-11', type: 'Offerte', name: 'Promo Utensili settembre', subject: 'Utensili professionali scontati', status: 'inviata', date: '2026-09-15', recipients: 4, delivered: 4, clicks: 2, orders: 1 }
  ],

  sales: { months: ['Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott'], direct: [14.2, 16.8, 12.1, 18.5, 19.9, 21.3], agent: [31.0, 28.4, 35.2, 33.9, 38.1, 42.6] }
};
