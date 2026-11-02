/* B2B Supply CRM – demo con dati statici. Vanilla JS, router a hash, nessuna dipendenza. */
const TODAY = '2026-11-02';
const IVA = 0.22;
const ICON = {
  home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
  box: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12',
  cart: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0',
  file: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8',
  list: 'M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01',
  card: 'M2 5h20v14H2z M2 10h20',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  brief: 'M2 7h20v14H2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  bank: 'M3 21h18 M5 21V10 M19 21V10 M9 21V10 M15 21V10 M12 3L2 9h20z',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20',
  check: 'M20 6L9 17l-5-5',
  search: 'M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16z M21 21l-4.35-4.35',
  plus: 'M12 5v14 M5 12h14',
  moon: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
  sun: 'M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42',
  percent: 'M19 5L5 19 M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z M17.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  ucheck: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M17 11l2 2 4-4',
  x: 'M18 6L6 18 M6 6l12 12',
  euro: 'M18 7a7 7 0 1 0 0 10 M4 10h10 M4 14h10',
  alert: 'M12 9v4 M12 17h.01 M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
  lock: 'M5 11h14v10H5z M8 11V7a4 4 0 0 1 8 0v4',
  truck: 'M1 3h15v13H1z M16 8h4l3 3v5h-7z M5.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M18.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
};
const ic = n => `<svg class="icon" viewBox="0 0 24 24"><path d="${ICON[n] || ''}"/></svg>`;

const ROLES = {
  public: { label: 'Vetrina pubblica', nav: [] },
  client: { label: 'Cliente', nav: [['dashboard', 'Dashboard', 'home'], ['catalog', 'Catalogo', 'box'], ['cart', 'Carrello', 'cart'], ['quotes', 'Richieste e preventivi', 'file'], ['orders', 'Ordini', 'list'], ['payments', 'Pagamenti', 'card']] },
  admin: { label: 'CRM Fornitore', nav: [['dashboard', 'Dashboard', 'home'], ['orders', 'Ordini', 'list'], ['customers', 'Clienti', 'users'], ['agents', 'Agenti', 'brief'], ['stock', 'Magazzino', 'box'], ['payments', 'Pagamenti', 'bank'], ['registrations', 'Registrazioni', 'ucheck'], ['showcase', 'Vetrina web', 'globe'], ['newsletter', 'Newsletter', 'mail']] },
  agent: { label: 'Agente', nav: [['dashboard', 'Dashboard', 'home'], ['customers', 'I miei clienti', 'users'], ['orders', 'Ordini attribuiti', 'list'], ['commissions', 'Provvigioni', 'percent']] }
};

const S = {
  role: 'public', page: 'showcase', D: JSON.parse(JSON.stringify(DATA)), cart: [], q: '', cat: 'Tutte', chan: 'all', tab: 'bank', modal: null, toast: null, intent: null,
  me: { client: 'C1', agent: 'A1' }, dark: false,
  nl: { type: 'Offerte', name: 'Promo di novembre', subject: 'Offerte esclusive per i clienti B2B', skus: ['PRD-1002', 'PRD-1009'], discount: 15, from: '2026-11-05', to: '2026-11-19' },
  sq: ''
};

/* ---------- helpers ---------- */
const eur = c => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(c / 100);
const fmtD = iso => new Date(iso).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' });
const esc = s => String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
const prod = sku => S.D.products.find(p => p.sku === sku);
const cust = id => S.D.customers.find(c => c.id === id);
const agent = id => S.D.agents.find(a => a.id === id);
const initials = n => n.split(' ').map(x => x[0]).slice(0, 2).join('').toUpperCase();
const avail = p => p.stock - p.reserved;
const unitFor = (sku, c) => Math.round(prod(sku).price * (1 - c.discount / 100));

function init() {
  const D = S.D;
  D.ledger = [];
  D.orders.forEach(o => {
    const c = cust(o.customerId);
    o.lines = o.lines.map(l => ({ sku: l[0], qty: l[1], unit: unitFor(l[0], c) }));
    o.paid = 0;
    if (['approvato', 'completato'].includes(o.status)) {
      o.channel = c.agentId ? 'agent' : 'direct';
      o.agentId = c.agentId || null;
      o.rate = c.agentId ? agent(c.agentId).rate : 0;
    }
    const tot = orderTotal(o);
    if (o.paidFull) o.paid = tot;
    if (o.paidHalf) o.paid = Math.round(tot / 2);
    if (o.paid) D.ledger.push({ id: 'TX-' + (900 + D.ledger.length), orderId: o.id, method: o.method, amount: o.paid, at: o.date, ref: o.method === 'stripe' ? 'pi_3Q' + o.id.slice(-3) + 'x8' : 'Bonifico riconciliato' });
  });
  D.bank.forEach(b => {
    if (b.amountFromOrder) { const o = D.orders.find(x => x.id === b.amountFromOrder); b.amount = b.residual ? orderTotal(o) - o.paid : orderTotal(o); }
  });
}

/* ---------- calcoli ---------- */
const orderNet = o => o.lines.reduce((s, l) => s + l.qty * l.unit, 0);
const orderShip = o => (orderNet(o) >= 200000 ? 0 : 1800);
const orderVat = o => Math.round((orderNet(o) + orderShip(o)) * IVA);
const orderTotal = o => orderNet(o) + orderShip(o) + orderVat(o);
const isApproved = o => ['approvato', 'completato'].includes(o.status);
const payStatus = o => (!isApproved(o) ? 'na' : o.processing ? 'processing' : o.paid >= orderTotal(o) ? 'paid' : o.paid > 0 ? 'partially_paid' : 'pending');
const chanOf = o => o.channel || (cust(o.customerId).agentId ? 'agent' : 'direct');
const agentOf = o => (o.channel ? o.agentId : cust(o.customerId).agentId);
const rateOf = o => (o.channel ? o.rate : (agentOf(o) ? agent(agentOf(o)).rate : 0));
function comm(o) {
  if (chanOf(o) !== 'agent') return { total: 0, matured: 0, liquidable: 0, liquidated: 0, est: 0 };
  const total = Math.round(orderNet(o) * rateOf(o) / 100);
  if (!isApproved(o)) return { total: 0, matured: 0, liquidable: 0, liquidated: 0, est: total };
  const liquidated = o.liquidated ? total : 0;
  const liquidable = Math.max(0, Math.round(total * Math.min(1, o.paid / orderTotal(o))) - liquidated);
  return { total, matured: total, liquidable, liquidated, est: total };
}
const sum = (arr, f) => arr.reduce((s, x) => s + f(x), 0);
const ordersOfClient = id => S.D.orders.filter(o => o.customerId === id);
const ordersOfAgent = id => S.D.orders.filter(o => agentOf(o) === id);

/* ---------- componenti ---------- */
const BADGES = {
  st: { richiesta: ['Richiesta inviata', 'gray'], preventivo: ['Preventivo inviato', 'blue'], accettato: ['Accettato · da approvare', 'violet'], approvato: ['Approvato', 'green'], completato: ['Completato', 'green'] },
  pay: { na: ['—', 'gray'], pending: ['Non pagato', 'gray'], processing: ['In elaborazione', 'amber'], partially_paid: ['Pagato in parte', 'amber'], paid: ['Pagato', 'green'] },
  log: { '—': ['—', 'gray'], da_preparare: ['Da preparare', 'gray'], in_preparazione: ['In preparazione', 'blue'], spedito: ['Spedito', 'violet'], consegnato: ['Consegnato', 'green'] }
};
const badge = (kind, key) => { const b = BADGES[kind][key] || [key, 'gray']; return `<span class="badge b-${b[1]}">${b[0]}</span>`; };
const chanBadge = c => (c === 'agent' ? '<span class="badge b-violet">Con agente</span>' : '<span class="badge b-blue">Diretto</span>');
const head = (t, sub, actions = '') => `<div class="pagehead"><div><h1>${t}</h1>${sub ? `<p>${sub}</p>` : ''}</div><div class="row">${actions}</div></div>`;
const kpi = (l, v, s, i) => `<div class="card kpi"><div class="l">${ic(i)} ${l}</div><div class="v">${v}</div><div class="s">${s || ''}</div></div>`;
const note = (t, cls = '', i = 'alert') => `<div class="note ${cls}">${ic(i)}<div>${t}</div></div>`;
const thumb = p => `background: linear-gradient(135deg, hsl(${p.hue} 80% 92%), hsl(${(p.hue + 40) % 360} 75% 82%))`;
const stockLabel = p => (avail(p) > 50 ? ['Disponibile', 'green'] : avail(p) > 0 ? ['Scorte limitate', 'amber'] : ['Su ordinazione', 'gray']);

function bars() {
  const { months, direct, agent: ag } = S.D.sales, max = Math.max(...months.map((_, i) => direct[i] + ag[i]));
  return `<div class="bars">${months.map((m, i) => `<div class="col"><span class="small muted">${(direct[i] + ag[i]).toFixed(1)}k</span><div class="stack" style="height:${((direct[i] + ag[i]) / max) * 140}px"><div style="height:${(direct[i] / (direct[i] + ag[i])) * 100}%;background:#0ea5e9"></div><div style="height:${(ag[i] / (direct[i] + ag[i])) * 100}%;background:var(--primary)"></div></div><span class="small muted">${m}</span></div>`).join('')}</div>
  <div class="legend"><span><i style="background:#0ea5e9"></i>Vendite dirette</span><span><i style="background:var(--primary)"></i>Vendite con agente</span></div>`;
}

function ordersTable(list, role) {
  if (!list.length) return '<div class="empty">Nessun ordine trovato.</div>';
  return `<div class="table-wrap"><table><thead><tr><th>Ordine</th>${role !== 'client' ? '<th>Cliente</th>' : ''}<th>Data</th>${role === 'admin' ? '<th>Canale</th>' : ''}<th>Commerciale</th><th>Pagamento</th><th>Logistica</th><th class="num">Totale</th>${role === 'agent' ? '<th class="num">Provvigione</th>' : ''}</tr></thead><tbody>
  ${list.slice().sort((a, b) => b.id.localeCompare(a.id)).map(o => { const c = comm(o); return `<tr class="click" data-a="order" data-id="${o.id}"><td><b>${o.id}</b></td>${role !== 'client' ? `<td>${cust(o.customerId).name}</td>` : ''}<td>${fmtD(o.date)}</td>${role === 'admin' ? `<td>${chanBadge(chanOf(o))}</td>` : ''}<td>${badge('st', o.status)}</td><td>${badge('pay', payStatus(o))}</td><td>${badge('log', o.log)}</td><td class="num">${eur(orderTotal(o))}</td>${role === 'agent' ? `<td class="num">${isApproved(o) ? eur(c.total) : '<span class="muted">' + eur(c.est) + ' (stima)</span>'}</td>` : ''}</tr>`; }).join('')}</tbody></table></div>`;
}

/* ---------- pagine CLIENTE ---------- */
function cDashboard() {
  const c = cust(S.me.client), os = ordersOfClient(c.id), ap = os.filter(isApproved);
  const due = sum(ap, o => orderTotal(o) - o.paid), open = os.filter(o => o.status !== 'completato' && !(o.log === 'consegnato' && payStatus(o) === 'paid'));
  const ag = c.agentId ? agent(c.agentId) : null;
  return head(`Buongiorno, ${c.contact.split(' ')[0]}`, `${c.name} · ${c.city}`, `<button class="btn primary" data-a="go" data-to="client/catalog">${ic('box')} Vai al catalogo</button>`) +
    `<div class="grid g4">${kpi('Ordini in corso', open.length, 'richieste, preventivi e consegne', 'list')}${kpi('Preventivi da accettare', os.filter(o => o.status === 'preventivo').length, 'in attesa della tua risposta', 'file')}${kpi('Residuo da pagare', eur(due), 'su ordini approvati', 'euro')}${kpi('Sconto riservato', c.discount + '%', 'applicato sul listino', 'percent')}</div>
    <div class="grid g-main" style="margin-top:16px"><div class="card"><div class="hd"><h2>Ultimi ordini</h2><a href="#/client/orders">Vedi tutti</a></div><div class="bd">${ordersTable(os.slice(0, 5), 'client')}</div></div>
    <div class="grid"><div class="card"><div class="hd"><h2>Il tuo account</h2></div><div class="bd"><p class="muted" style="margin-top:0">Stato: <span class="badge b-green">Azienda approvata</span></p><p>Referente commerciale:<br><b>${ag ? ag.name : 'Gestione diretta – ufficio vendite'}</b></p><p class="small muted">Gli ordini non sono definitivi finché il fornitore non li approva.</p></div></div>
    ${note('Prezzi, sconti e listino sono riservati e ricalcolati dal server ad ogni richiesta.', '', 'lock')}</div></div>`;
}

function cCatalog() {
  const c = cust(S.me.client), cats = ['Tutte', ...new Set(S.D.products.map(p => p.cat))];
  const list = S.D.products.filter(p => (S.cat === 'Tutte' || p.cat === S.cat) && (p.name + p.sku).toLowerCase().includes(S.q.toLowerCase()));
  return head('Catalogo prodotti', 'Prezzi con il tuo listino riservato. I prodotti senza prezzo si ordinano tramite quotazione.') +
    `<div class="row" style="margin-bottom:16px"><div class="searchbox">${ic('search')}<input id="b_q" class="input" data-bind="q" value="${esc(S.q)}" placeholder="Cerca per SKU o nome…"></div><div class="chips">${cats.map(x => `<button class="chip ${S.cat === x ? 'on' : ''}" data-a="cat" data-v="${x}">${x}</button>`).join('')}</div></div>
    <div class="pgrid">${list.map(p => { const sl = stockLabel(p); return `<div class="card pcard"><div class="pimg" style="${thumb(p)}" data-a="prod" data-sku="${p.sku}">${p.emoji}</div><div class="pbody"><div class="small muted mono">${p.sku} · ${p.cat}</div><div class="name">${p.name}</div>
      ${p.priceVisible ? `<div class="price">${eur(unitFor(p.sku, c))}<s>${eur(p.price)}</s></div>` : `<div class="price" style="font-size:15px">Prezzo su richiesta</div>`}<span class="badge b-${sl[1]}" style="align-self:flex-start">${sl[0]}</span>
      <div class="foot"><button class="btn ${p.priceVisible ? 'primary' : ''} block" data-a="add" data-sku="${p.sku}">${p.priceVisible ? ic('cart') + ' Aggiungi' : ic('file') + ' Richiedi quotazione'}</button></div></div></div>`; }).join('')}</div>${list.length ? '' : '<div class="empty">Nessun prodotto corrisponde alla ricerca.</div>'}`;
}

function cCart() {
  const c = cust(S.me.client);
  if (!S.cart.length) return head('Carrello') + `<div class="card"><div class="empty">Il carrello è vuoto.<br><br><button class="btn primary" data-a="go" data-to="client/catalog">Sfoglia il catalogo</button></div></div>`;
  const vis = S.cart.filter(l => prod(l.sku).priceVisible), net = sum(vis, l => l.qty * unitFor(l.sku, c)), unq = S.cart.length - vis.length;
  return head('Carrello', 'Invio una richiesta di fornitura: non è un ordine definitivo.') + `<div class="grid g-main"><div class="card"><div class="table-wrap"><table><thead><tr><th>Prodotto</th><th>Quantità</th><th class="num">Prezzo unit.</th><th class="num">Totale</th><th></th></tr></thead><tbody>
    ${S.cart.map(l => { const p = prod(l.sku); return `<tr><td><b>${p.name}</b><div class="small muted mono">${p.sku}</div></td><td><div class="qty"><button data-a="qty" data-sku="${l.sku}" data-d="-1">−</button><span>${l.qty}</span><button data-a="qty" data-sku="${l.sku}" data-d="1">+</button></div></td><td class="num">${p.priceVisible ? eur(unitFor(l.sku, c)) : '<span class="badge b-amber">Da quotare</span>'}</td><td class="num">${p.priceVisible ? eur(l.qty * unitFor(l.sku, c)) : '—'}</td><td><button class="btn sm ghost" data-a="rm" data-sku="${l.sku}">${ic('x')}</button></td></tr>`; }).join('')}</tbody></table></div></div>
    <div class="card"><div class="bd"><h2>Riepilogo</h2><div class="totals" style="margin:14px 0"><div><span class="muted">Imponibile (prezzi noti)</span><span>${eur(net)}</span></div><div><span class="muted">Spedizione</span><span>${net >= 200000 ? 'Gratuita' : eur(1800)}</span></div><div><span class="muted">IVA 22%</span><span>${eur(Math.round((net + (net >= 200000 ? 0 : 1800)) * IVA))}</span></div></div>${unq ? note(`${unq} articol${unq > 1 ? 'i' : 'o'} richiede${unq > 1 ? 'ono' : ''} una quotazione dal fornitore.`, 'warn') : ''}
    <div class="field" style="margin-top:14px"><label>Indirizzo di consegna</label><select class="input"><option>${c.name} – ${c.city} (sede)</option><option>Cantiere via Roma 12</option></select></div><div class="field"><label>Note</label><textarea class="input" rows="2" id="cart_note" placeholder="Es. consegna al mattino"></textarea></div>
    <button class="btn primary block" data-a="submitCart">Invia richiesta al fornitore</button></div></div></div>`;
}

const cQuotes = () => head('Richieste e preventivi', 'Il preventivo è accettabile solo dopo che il fornitore ha verificato prezzi e disponibilità.') +
  `<div class="card"><div class="bd">${ordersTable(ordersOfClient(S.me.client).filter(o => ['richiesta', 'preventivo', 'accettato'].includes(o.status)), 'client')}</div></div>`;
const cOrders = () => head('I miei ordini', 'Stato commerciale, pagamento e logistica sono indipendenti.') + `<div class="card"><div class="bd">${ordersTable(ordersOfClient(S.me.client).filter(isApproved), 'client')}</div></div>`;

function cPayments() {
  const os = ordersOfClient(S.me.client).filter(isApproved);
  return head('Pagamenti', 'Carta (Stripe) o bonifico bancario. Un bonifico segnalato non è un pagamento finché non è verificato l’accredito.') +
    `<div class="card"><div class="bd"><div class="table-wrap"><table><thead><tr><th>Ordine</th><th>Metodo</th><th class="num">Dovuto</th><th class="num">Incassato</th><th class="num">Residuo</th><th>Stato</th><th></th></tr></thead><tbody>
    ${os.map(o => { const res = orderTotal(o) - o.paid, ps = payStatus(o); return `<tr><td><b>${o.id}</b></td><td>${o.method === 'stripe' ? 'Carta' : 'Bonifico'}</td><td class="num">${eur(orderTotal(o))}</td><td class="num">${eur(o.paid)}</td><td class="num"><b>${eur(res)}</b></td><td>${badge('pay', ps)}${o.notice && ps !== 'paid' ? '<div class="small muted">Bonifico segnalato · in attesa di accredito</div>' : ''}</td><td class="right">${res > 0 && ps !== 'processing' ? `<button class="btn sm primary" data-a="stripe" data-id="${o.id}">${ic('card')} Carta</button> <button class="btn sm" data-a="bank" data-id="${o.id}">${ic('bank')} Bonifico</button>` : ''}</td></tr>`; }).join('')}</tbody></table></div></div></div>`;
}

/* ---------- pagine ADMIN ---------- */
function aDashboard() {
  const ap = S.D.orders.filter(isApproved), dir = ap.filter(o => o.channel === 'direct'), ag = ap.filter(o => o.channel === 'agent');
  const cm = ag.map(comm), todo = S.D.orders.filter(o => ['richiesta', 'accettato'].includes(o.status));
  const low = S.D.products.filter(p => avail(p) < 20), exc = S.D.bank.filter(b => b.status !== 'abbinato').length;
  return head('Dashboard', 'Vendite dirette e tramite agente sono sempre tenute separate.') +
    `<div class="grid g4">${kpi('Fatturato diretto', eur(sum(dir, orderNet)), dir.length + ' ordini · provvigione 0', 'euro')}${kpi('Fatturato con agente', eur(sum(ag, orderNet)), ag.length + ' ordini', 'brief')}${kpi('Provvigioni teoriche', eur(sum(cm, x => x.total)), 'solo canale agente', 'percent')}${kpi('Provvigioni liquidabili', eur(sum(cm, x => x.liquidable)), eur(sum(cm, x => x.liquidated)) + ' già liquidate', 'check')}</div>
    <div class="grid g-main" style="margin-top:16px"><div class="card"><div class="hd"><h2>Vendite mensili (k€)</h2></div><div class="bd">${bars()}</div></div>
    <div class="grid"><div class="card"><div class="hd"><h2>Da gestire</h2></div><div class="bd" style="display:grid;gap:10px">
      <a class="row" href="#/admin/orders">${ic('list')}<span>${todo.length} ordini in attesa di azione</span></a><a class="row" href="#/admin/registrations">${ic('ucheck')}<span>${S.D.registrations.filter(r => r.status === 'in attesa').length} registrazioni da approvare</span></a>
      <a class="row" href="#/admin/payments">${ic('bank')}<span>${exc} movimenti bancari da riconciliare</span></a><a class="row" href="#/admin/stock">${ic('alert')}<span>${low.length} articoli con scorta bassa</span></a></div></div>
    ${note('Un cliente diretto genera sempre provvigione €0 e nessuna riga provvigionale.', 'ok', 'check')}</div></div>
    <div class="card" style="margin-top:16px"><div class="hd"><h2>Ordini recenti</h2></div><div class="bd">${ordersTable(S.D.orders.slice(-6), 'admin')}</div></div>`;
}

const aOrders = () => head('Ordini e preventivi', 'Approvazione obbligatoria del fornitore. Alla conferma si fotografano canale, agente e aliquota.') + `<div class="card"><div class="bd">${ordersTable(S.D.orders, 'admin')}</div></div>`;

function aCustomers() {
  const list = S.D.customers.filter(c => S.chan === 'all' || (S.chan === 'agent') === !!c.agentId);
  return head('Clienti', 'Default “Diretto”: l’agente è facoltativo e assegnato solo da operatore autorizzato.') +
    `<div class="chips" style="margin-bottom:14px">${[['all', 'Tutti'], ['direct', 'Diretti'], ['agent', 'Con agente']].map(x => `<button class="chip ${S.chan === x[0] ? 'on' : ''}" data-a="chan" data-v="${x[0]}">${x[1]}</button>`).join('')}</div>
    <div class="card"><div class="table-wrap"><table><thead><tr><th>Azienda</th><th>Referente</th><th>Canale</th><th>Agente</th><th class="num">Sconto</th><th>Marketing</th><th></th></tr></thead><tbody>
    ${list.map(c => `<tr><td><b>${c.name}</b><div class="small muted">${c.city} · ${c.vat}</div></td><td>${c.contact}<div class="small muted">${c.email}</div></td><td>${chanBadge(c.agentId ? 'agent' : 'direct')}</td><td>${c.agentId ? agent(c.agentId).name + ' <span class="muted">(' + agent(c.agentId).rate + '%)</span>' : '—'}</td><td class="num">${c.discount}%</td><td>${c.marketing ? '<span class="badge b-green">Consenso</span>' : '<span class="badge b-gray">Nessun consenso</span>'}</td><td class="right"><button class="btn sm" data-a="assign" data-id="${c.id}">Assegnazione</button></td></tr>`).join('')}</tbody></table></div></div>`;
}

function aAgents() {
  return head('Agenti', 'Una sola aliquota fissa per agente. Le modifiche valgono solo per gli ordini confermati dopo la decorrenza.') +
    `<div class="card"><div class="table-wrap"><table><thead><tr><th>Agente</th><th>Stato</th><th class="num">Aliquota</th><th class="num">Clienti</th><th class="num">Venduto netto</th><th class="num">Provv. teoriche</th><th class="num">Liquidabili</th><th></th></tr></thead><tbody>
    ${S.D.agents.map(a => { const os = ordersOfAgent(a.id).filter(isApproved), cm = os.map(comm); return `<tr><td><b>${a.name}</b><div class="small muted">${a.email}</div></td><td><span class="badge b-${a.status === 'attivo' ? 'green' : 'amber'}">${a.status}</span></td><td class="num"><b>${a.rate}%</b></td><td class="num">${S.D.customers.filter(c => c.agentId === a.id).length}</td><td class="num">${eur(sum(os, orderNet))}</td><td class="num">${eur(sum(cm, x => x.total))}</td><td class="num">${eur(sum(cm, x => x.liquidable))}</td><td class="right">${a.status === 'attivo' ? `<button class="btn sm" data-a="rate" data-id="${a.id}">Modifica aliquota</button>` : `<button class="btn sm primary" data-a="approveAgent" data-id="${a.id}">Approva</button>`}</td></tr>`; }).join('')}</tbody></table></div></div>`;
}

function aStock() {
  return head('Magazzino', 'Giacenza fisica, riservato e disponibile. La riserva avviene solo all’approvazione dell’ordine.') +
    `<div class="card"><div class="table-wrap"><table><thead><tr><th>SKU</th><th>Prodotto</th><th class="num">Fisica</th><th class="num">Riservata</th><th class="num">Disponibile</th><th style="width:180px">Impegno</th><th></th></tr></thead><tbody>
    ${S.D.products.map(p => { const a = avail(p), pct = p.stock ? Math.round(p.reserved / p.stock * 100) : 0; return `<tr><td class="mono">${p.sku}</td><td><b>${p.name}</b></td><td class="num">${p.stock}</td><td class="num">${p.reserved}</td><td class="num"><b style="color:${a < 20 ? 'var(--red)' : 'inherit'}">${a}</b></td><td><div class="progress"><i style="width:${pct}%;background:${pct > 80 ? 'var(--red)' : 'var(--primary)'}"></i></div></td><td class="right"><button class="btn sm" data-a="load" data-sku="${p.sku}">+ Carico 20</button></td></tr>`; }).join('')}</tbody></table></div></div>`;
}

function aPayments() {
  const tabs = [['bank', 'Riconciliazione bancaria'], ['ledger', 'Ledger incassi'], ['stripe', 'Eventi Stripe']];
  let body = '';
  if (S.tab === 'bank') body = `<div class="card"><div class="table-wrap"><table><thead><tr><th>Movimento</th><th>Data</th><th>Descrizione</th><th class="num">Importo</th><th>Stato</th><th></th></tr></thead><tbody>
    ${S.D.bank.map(b => `<tr><td class="mono">${b.id}</td><td>${fmtD(b.date)}</td><td>${b.desc}${b.suggest ? `<div class="small muted">Suggerito: <b>${b.suggest}</b> (confidenza ${b.conf})</div>` : ''}${b.note ? `<div class="small" style="color:var(--amber)">${b.note}</div>` : ''}</td><td class="num"><b>${eur(b.amount)}</b></td><td>${b.status === 'abbinato' ? '<span class="badge b-green">Abbinato</span>' : b.status === 'eccezione' ? '<span class="badge b-amber">Eccezione</span>' : '<span class="badge b-blue">Da abbinare</span>'}</td><td class="right">${b.status === 'da_abbinare' ? `<button class="btn sm primary" data-a="match" data-id="${b.id}">Conferma abbinamento</button>` : b.status === 'eccezione' ? `<button class="btn sm" data-a="exc" data-id="${b.id}">Gestisci</button>` : ''}</td></tr>`).join('')}</tbody></table></div></div>`;
  if (S.tab === 'ledger') body = `<div class="card"><div class="table-wrap"><table><thead><tr><th>ID</th><th>Ordine</th><th>Metodo</th><th>Riferimento</th><th>Data</th><th class="num">Importo</th></tr></thead><tbody>${S.D.ledger.map(t => `<tr><td class="mono">${t.id}</td><td>${t.orderId}</td><td>${t.method === 'stripe' ? 'Stripe' : 'Bonifico'}</td><td class="mono small">${t.ref}</td><td>${fmtD(t.at)}</td><td class="num">${eur(t.amount)}</td></tr>`).join('')}</tbody></table></div></div><p class="small muted">Registro append-only: i saldi si calcolano da incassi, rimborsi e rettifiche, mai sovrascrivendo.</p>`;
  if (S.tab === 'stripe') body = `<div class="card"><div class="table-wrap"><table><thead><tr><th>Evento</th><th>Tipo</th><th>Ordine</th><th>Esito</th><th>Ricevuto</th></tr></thead><tbody>${S.D.stripeEvents.map(e => `<tr><td class="mono">${e.id}</td><td class="mono small">${e.type}</td><td>${e.order}</td><td>${e.result.startsWith('Elab') ? '<span class="badge b-green">' + e.result + '</span>' : '<span class="badge b-amber">' + e.result + '</span>'}</td><td>${e.at}</td></tr>`).join('')}</tbody></table></div></div>`;
  return head('Pagamenti', 'Solo un webhook firmato o un movimento bancario riconciliato registra un incasso.') + `<div class="tabs">${tabs.map(t => `<button class="${S.tab === t[0] ? 'on' : ''}" data-a="tab" data-v="${t[0]}">${t[1]}</button>`).join('')}</div>` + body;
}

function aRegistrations() {
  const list = S.D.registrations;
  return head('Registrazioni aziende', 'Nuove aziende restano in attesa: nessun ordine né listino riservato fino all’approvazione.') +
    (list.length ? `<div class="card"><div class="table-wrap"><table><thead><tr><th>Azienda</th><th>P.IVA</th><th>Referente</th><th>Origine</th><th>Data</th><th>Stato</th><th></th></tr></thead><tbody>${list.map(r => `<tr><td><b>${esc(r.company)}</b><div class="small muted">${esc(r.city)}</div></td><td class="mono">${esc(r.vat)}</td><td>${esc(r.contact)}<div class="small muted">${esc(r.email)}</div></td><td class="small">${esc(r.origin)}</td><td>${fmtD(r.date)}</td><td><span class="badge b-${r.status === 'in attesa' ? 'amber' : r.status === 'approvata' ? 'green' : 'red'}">${r.status}</span></td><td class="right">${r.status === 'in attesa' ? `<button class="btn sm primary" data-a="regOk" data-id="${r.id}">Approva</button> <button class="btn sm danger" data-a="regNo" data-id="${r.id}">Rifiuta</button>` : ''}</td></tr>`).join('')}</tbody></table></div></div>` : '<div class="card"><div class="empty">Nessuna registrazione.</div></div>');
}

function aShowcase() {
  const sc = S.D.showcase, on = sc.status === 'pubblicata';
  return head('Vetrina web', 'Seleziona gli articoli da promuovere: la pagina pubblica si aggiorna automaticamente.', `<button class="btn" data-a="go" data-to="public/showcase">${ic('globe')} Apri vetrina pubblica</button><button class="btn ${on ? '' : 'primary'}" data-a="pubToggle">${on ? 'Sospendi' : 'Pubblica'}</button>`) +
    `<div class="grid g4" style="margin-bottom:16px">${kpi('Stato', on ? 'Pubblicata' : 'Sospesa', '/vetrina/' + sc.slug, 'globe')}${kpi('Articoli selezionati', sc.items.length, 'ordine come da elenco', 'box')}${kpi('Visualizzazioni', sc.views.toLocaleString('it-IT'), 'ultimi 30 giorni', 'search')}${kpi('Lead generati', sc.leads, 'richieste informazioni', 'mail')}</div>
    <div class="grid g-main"><div class="card"><div class="hd"><h2>Selezione prodotti</h2></div><div class="table-wrap"><table><thead><tr><th></th><th>Prodotto</th><th>Categoria</th><th>Etichetta</th></tr></thead><tbody>${S.D.products.map(p => `<tr><td><input type="checkbox" ${sc.items.includes(p.sku) ? 'checked' : ''} data-a="selItem" data-sku="${p.sku}"></td><td><b>${p.name}</b><div class="small muted mono">${p.sku}</div></td><td>${p.cat}</td><td>${sc.badges[p.sku] ? `<span class="badge b-violet">${sc.badges[p.sku]}</span>` : '—'}</td></tr>`).join('')}</tbody></table></div></div>
    <div class="grid"><div class="card"><div class="hd"><h2>Integrazione nel sito</h2></div><div class="bd"><p class="small muted" style="margin-top:0">Widget JavaScript (domini autorizzati e CORS configurati)</p><textarea class="input mono" rows="4" readonly>&lt;div id="b2b-vetrina"&gt;&lt;/div&gt;\n&lt;script async src="https://crm.example/embed.js"\n  data-slug="${sc.slug}"&gt;&lt;/script&gt;</textarea><p class="small muted">Oppure iframe con <span class="mono">frame-ancestors</span> dedicato.</p></div></div>
    ${note('La vetrina pubblica non espone listini, giacenze, clienti né provvigioni.', 'ok', 'lock')}</div></div>`;
}

function aNewsletter() {
  const tabs = [['list', 'Campagne'], ['new', 'Nuova campagna offerte']], elig = S.D.customers.filter(c => c.marketing);
  let body;
  if (S.tab === 'nlnew') {
    const n = S.nl;
    body = `<div class="grid g2"><div class="card"><div class="bd"><div class="field"><label>Nome campagna</label><input id="b_nl.name" class="input" data-bind="nl.name" value="${esc(n.name)}"></div><div class="field"><label>Oggetto</label><input id="b_nl.subject" class="input" data-bind="nl.subject" value="${esc(n.subject)}"></div>
      <div class="grid g3"><div class="field"><label>Sconto %</label><input id="b_nl.discount" type="number" min="1" max="60" class="input" data-bind="nl.discount" value="${n.discount}"></div><div class="field"><label>Dal</label><input type="date" class="input" data-bind="nl.from" value="${n.from}"></div><div class="field"><label>Al</label><input type="date" class="input" data-bind="nl.to" value="${n.to}"></div></div>
      <label class="small" style="font-weight:600">Articoli in offerta</label><div class="chips" style="margin:8px 0 14px">${S.D.products.filter(p => p.priceVisible).map(p => `<button class="chip ${n.skus.includes(p.sku) ? 'on' : ''}" data-a="nlSku" data-sku="${p.sku}">${p.name}</button>`).join('')}</div>
      <p class="small muted"><b>Destinatari ammissibili:</b> ${elig.length} di ${S.D.customers.length}. Esclusi: ${S.D.customers.filter(c => !c.marketing).map(c => c.name + ' (nessun consenso marketing)').join(', ') || '—'}.</p>
      <div class="row"><button class="btn" data-a="nlTest">Invia prova</button><button class="btn primary" data-a="nlSchedule">Programma invio</button></div></div></div>
      <div class="card"><div class="hd"><h2>Anteprima email</h2></div><div class="bd"><div style="border:1px solid var(--border);border-radius:12px;overflow:hidden;background:#fff;color:#172033"><div style="background:#4f46e5;color:#fff;padding:18px 20px"><b>B2B Supply</b><div style="opacity:.85;font-size:12.5px">${esc(n.subject)}</div></div><div style="padding:18px 20px"><p style="margin-top:0">Gentile cliente, ecco le offerte valide dal ${fmtD(n.from)} al ${fmtD(n.to)}.</p>
      ${n.skus.map(s => { const p = prod(s); return `<div style="display:flex;gap:12px;align-items:center;padding:10px 0;border-top:1px solid #e4e8f0"><div style="width:54px;height:54px;border-radius:10px;display:grid;place-items:center;font-size:26px;${thumb(p)}">${p.emoji}</div><div style="flex:1"><b>${p.name}</b><div style="font-size:12px;color:#64708a">${p.sku}</div></div><div style="text-align:right"><div style="font-size:12px;color:#64708a">Accedi per il tuo prezzo</div><b style="color:#b42318">−${n.discount}%</b></div></div>`; }).join('') || '<p style="color:#64708a">Seleziona almeno un articolo.</p>'}
      <p style="margin-bottom:0;font-size:11.5px;color:#64708a">Il prezzo scontato è ricalcolato dal server all’apertura della scheda. <u>Disiscriviti</u> · Preferenze</p></div></div></div></div></div>`;
  } else {
    body = `<div class="card"><div class="table-wrap"><table><thead><tr><th>Campagna</th><th>Tipo</th><th>Stato</th><th>Data</th><th class="num">Destinatari</th><th class="num">Consegnate</th><th class="num">Clic</th><th class="num">Ordini</th></tr></thead><tbody>${S.D.campaigns.map(c => `<tr><td><b>${esc(c.name)}</b><div class="small muted">${esc(c.subject)}</div></td><td>${c.type}</td><td><span class="badge b-${c.status === 'inviata' ? 'green' : 'blue'}">${c.status}</span></td><td>${fmtD(c.date)}</td><td class="num">${c.recipients}</td><td class="num">${c.delivered}</td><td class="num">${c.clicks}</td><td class="num">${c.orders}</td></tr>`).join('')}</tbody></table></div></div>${note('Le disiscrizioni e gli hard bounce vengono esclusi anche dagli invii già in coda.', '', 'mail')}`;
  }
  return head('Newsletter', 'Campagne generali e offerte, solo verso contatti con base giuridica registrata.') + `<div class="tabs">${tabs.map(t => { const k = t[0] === 'new' ? 'nlnew' : 'list'; return `<button class="${S.tab === k || (S.tab !== 'nlnew' && k === 'list') ? 'on' : ''}" data-a="tab" data-v="${k}">${t[1]}</button>`; }).join('')}</div>` + body;
}

/* ---------- pagine AGENTE ---------- */
function gDashboard() {
  const a = agent(S.me.agent), os = ordersOfAgent(a.id), ap = os.filter(isApproved), cm = ap.map(comm);
  return head(`Ciao ${a.name.split(' ')[0]}`, `Aliquota fissa personale: ${a.rate}% (sola lettura)`) +
    `<div class="grid g4">${kpi('Venduto netto', eur(sum(ap, orderNet)), ap.length + ' ordini approvati', 'euro')}${kpi('Provvigioni maturate', eur(sum(cm, x => x.matured)), 'sul venduto approvato', 'percent')}${kpi('Liquidabili', eur(sum(cm, x => x.liquidable)), 'in base agli incassi verificati', 'check')}${kpi('Liquidate', eur(sum(cm, x => x.liquidated)), 'già pagate', 'bank')}</div>
    <div class="card" style="margin-top:16px"><div class="hd"><h2>Ordini del tuo portafoglio</h2></div><div class="bd">${ordersTable(os, 'agent')}</div></div>${note('Vedi solo i clienti assegnati a te: i clienti diretti e i dati di altri agenti non sono accessibili.', '', 'lock')}`;
}
const gCustomers = () => head('I miei clienti') + `<div class="grid g2">${S.D.customers.filter(c => c.agentId === S.me.agent).map(c => { const os = ordersOfClient(c.id).filter(isApproved); return `<div class="card"><div class="bd"><div class="row"><div class="avatar">${initials(c.name)}</div><div><b>${c.name}</b><div class="small muted">${c.city} · ${c.contact}</div></div></div><div class="grid g3" style="margin-top:14px"><div><div class="small muted">Ordini</div><b>${os.length}</b></div><div><div class="small muted">Venduto netto</div><b>${eur(sum(os, orderNet))}</b></div><div><div class="small muted">Cliente dal</div><b>${fmtD(c.since)}</b></div></div></div></div>`; }).join('')}</div>`;
const gOrders = () => head('Ordini attribuiti') + `<div class="card"><div class="bd">${ordersTable(ordersOfAgent(S.me.agent), 'agent')}</div></div>`;
function gCommissions() {
  const a = agent(S.me.agent), os = ordersOfAgent(a.id), ap = os.filter(isApproved), cm = ap.map(comm);
  return head('Provvigioni', 'Estratto conto mensile con dettaglio per ordine.', `<button class="btn" data-a="toast" data-m="Estratto conto PDF generato (demo)">PDF</button><button class="btn" data-a="toast" data-m="Estratto conto Excel generato (demo)">Excel</button>`) +
    `<div class="grid g4" style="margin-bottom:16px">${kpi('Aliquota fissa', a.rate + '%', 'uguale per tutti i tuoi clienti', 'percent')}${kpi('Teoriche', eur(sum(cm, x => x.total) + sum(os.filter(o => !isApproved(o)), o => comm(o).est)), 'incl. ordini non ancora approvati', 'euro')}${kpi('Liquidabili', eur(sum(cm, x => x.liquidable)), 'sugli incassi verificati', 'check')}${kpi('Liquidate', eur(sum(cm, x => x.liquidated)), '', 'bank')}</div>
    <div class="card"><div class="table-wrap"><table><thead><tr><th>Ordine</th><th>Cliente</th><th class="num">Base netta</th><th class="num">Aliquota</th><th class="num">Provvigione</th><th class="num">Liquidabile</th><th>Stato</th></tr></thead><tbody>${os.map(o => { const c = comm(o), st = !isApproved(o) ? ['Stimata', 'gray'] : c.liquidated ? ['Liquidata', 'green'] : c.liquidable ? ['Liquidabile', 'blue'] : ['Maturata · attesa incasso', 'amber']; return `<tr><td><b>${o.id}</b></td><td>${cust(o.customerId).name}</td><td class="num">${eur(orderNet(o))}</td><td class="num">${rateOf(o)}%</td><td class="num">${eur(isApproved(o) ? c.total : c.est)}</td><td class="num">${eur(c.liquidable)}</td><td><span class="badge b-${st[1]}">${st[0]}</span></td></tr>`; }).join('')}</tbody></table></div></div>
    <p class="small muted">La base esclude IVA e trasporto. L’aliquota è quella fotografata alla conferma dell’ordine.</p>`;
}

/* ---------- VETRINA PUBBLICA ---------- */
function publicPage() {
  const sc = S.D.showcase;
  const items = sc.items.map(prod).filter(p => (S.cat === 'Tutte' || p.cat === S.cat) && p.name.toLowerCase().includes(S.q.toLowerCase()));
  const cats = ['Tutte', ...new Set(sc.items.map(prod).map(p => p.cat))];
  const body = sc.status !== 'pubblicata' ? '<div class="card"><div class="empty">Questa campagna non è al momento disponibile.</div></div>' :
    `<div class="row" style="margin-bottom:18px"><div class="searchbox">${ic('search')}<input id="b_q" class="input" data-bind="q" value="${esc(S.q)}" placeholder="Cerca nella vetrina…"></div><div class="chips">${cats.map(x => `<button class="chip ${S.cat === x ? 'on' : ''}" data-a="cat" data-v="${x}">${x}</button>`).join('')}</div></div>
    <div class="pgrid">${items.map(p => `<div class="card pcard"><div class="pimg" style="${thumb(p)}">${sc.badges[p.sku] ? `<span class="tag">${sc.badges[p.sku]}</span>` : ''}${p.emoji}</div><div class="pbody"><div class="small muted">${p.cat}</div><div class="name">${p.name}</div><div class="small muted">${p.desc}</div><div class="small muted"><span class="badge b-gray">Riservato B2B</span> Accedi per vedere le condizioni</div>
    <div class="foot"><button class="btn primary block" data-a="request" data-sku="${p.sku}">Accedi per richiedere</button><button class="btn block" data-a="register">Non sei cliente? Registrati</button></div></div></div>`).join('')}</div>${items.length ? '' : '<div class="empty">Nessun articolo trovato.</div>'}`;
  return `<div class="pub-head"><div class="in"><div class="logo">B</div><b>B2B Supply</b><span class="muted small">Forniture professionali</span><span class="sp"></span><button class="btn" data-a="login">Accedi</button><button class="btn primary" data-a="register">Registrati</button></div></div>
  <div class="hero"><div class="in"><h1>${sc.title}</h1><p>Una selezione di articoli per professionisti dell’edilizia e degli impianti. Prezzi e condizioni riservati ai clienti B2B approvati.</p></div></div>
  <div class="pub-main">${body}<div class="card" style="margin-top:26px"><div class="bd row"><div>${ic('mail')}</div><div class="sp"><b>Vuoi più informazioni?</b><div class="small muted">Lasciaci un contatto: un commerciale ti risponderà.</div></div><button class="btn" data-a="lead">Richiedi informazioni</button></div></div></div>
  <div class="pub-foot">© 2026 B2B Supply S.r.l. · Informativa privacy · La navigazione non richiede account</div>`;
}

/* ---------- modali ---------- */
function modal(title, body, foot = '', wide = false) { S.modal = { title, body, foot, wide }; render(); }
function orderModal(id) {
  const o = S.D.orders.find(x => x.id === id), c = cust(o.customerId), role = S.role, ps = payStatus(o), cm = comm(o);
  let acts = '';
  if (role === 'client') {
    if (o.status === 'preventivo') acts += `<button class="btn primary" data-a="accept" data-id="${id}">Accetta preventivo</button>`;
    if (isApproved(o) && o.paid < orderTotal(o) && ps !== 'processing') acts += `<button class="btn primary" data-a="stripe" data-id="${id}">Paga con carta</button><button class="btn" data-a="bank" data-id="${id}">Bonifico</button>`;
  }
  if (role === 'admin') {
    if (o.status === 'richiesta') acts += `<button class="btn primary" data-a="quote" data-id="${id}">Invia preventivo</button>`;
    if (o.status === 'preventivo') acts += `<button class="btn" data-a="clientAccept" data-id="${id}">Simula accettazione cliente</button>`;
    if (o.status === 'accettato') acts += `<button class="btn primary" data-a="approve" data-id="${id}">Approva ordine</button>`;
    if (isApproved(o) && o.log === 'da_preparare') acts += `<button class="btn" data-a="logNext" data-id="${id}">Avvia preparazione</button>`;
    if (isApproved(o) && o.log === 'in_preparazione') acts += `<button class="btn primary" data-a="logNext" data-id="${id}">${ic('truck')} Spedisci</button>`;
    if (isApproved(o) && o.log === 'spedito') acts += `<button class="btn" data-a="logNext" data-id="${id}">Segna consegnato</button>`;
  }
  const body = `<div class="row" style="margin-bottom:14px">${badge('st', o.status)}${badge('pay', ps)}${badge('log', o.log)}${role !== 'client' ? chanBadge(chanOf(o)) : ''}</div>
  <div class="table-wrap"><table><thead><tr><th>Prodotto</th><th class="num">Qtà</th><th class="num">Prezzo</th><th class="num">Totale</th></tr></thead><tbody>${o.lines.map(l => `<tr><td>${prod(l.sku).name}<div class="small muted mono">${l.sku}</div></td><td class="num">${l.qty}</td><td class="num">${eur(l.unit)}</td><td class="num">${eur(l.qty * l.unit)}</td></tr>`).join('')}</tbody></table></div>
  <div class="totals" style="margin-top:14px"><div><span class="muted">Imponibile</span><span>${eur(orderNet(o))}</span></div><div><span class="muted">Spedizione</span><span>${eur(orderShip(o))}</span></div><div><span class="muted">IVA 22%</span><span>${eur(orderVat(o))}</span></div><div class="t"><span>Totale</span><span>${eur(orderTotal(o))}</span></div>${isApproved(o) ? `<div><span class="muted">Incassato</span><span>${eur(o.paid)}</span></div>` : ''}</div>
  ${role === 'admin' ? `<hr style="border:0;border-top:1px solid var(--border);margin:16px 0">${isApproved(o) ? `<p class="small"><b>Attribuzione fotografata:</b> ${o.channel === 'agent' ? `${agent(o.agentId).name} · aliquota ${o.rate}% · provvigione ${eur(cm.total)}` : 'vendita diretta · agent_id NULL · provvigione €0'}</p>` : `<p class="small muted">Canale previsto: ${chanOf(o) === 'agent' ? 'con agente ' + agent(c.agentId).name : 'diretto'}. Verrà fotografato alla conferma.</p>`}` : ''}`;
  modal(`Ordine ${o.id} · ${c.name}`, body, acts + '<button class="btn" data-a="close">Chiudi</button>', true);
}

/* ---------- azioni ---------- */
function toast(m) { S.toast = m; render(); clearTimeout(toast.t); toast.t = setTimeout(() => { S.toast = null; render(); }, 3200); }
function go(to) { location.hash = '#/' + to; }
function stripeModal(id) {
  const o = S.D.orders.find(x => x.id === id), res = orderTotal(o) - o.paid;
  modal('Checkout Stripe (simulato)', `<div class="note">${ic('lock')}<div>Pagina ospitata da Stripe: nessun dato carta transita o viene salvato nel CRM.</div></div><div class="field" style="margin-top:14px"><label>Importo</label><input class="input" value="${eur(res)}" readonly></div><div class="field"><label>Numero carta (test)</label><input class="input mono" value="4242 4242 4242 4242" readonly></div><div class="grid g2"><div class="field"><label>Scadenza</label><input class="input" value="12 / 29" readonly></div><div class="field"><label>CVC</label><input class="input" value="•••" readonly></div></div>`, `<button class="btn" data-a="close">Annulla</button><button class="btn primary" data-a="payStripe" data-id="${id}">Paga ${eur(res)}</button>`);
}
function bankModal(id) {
  const o = S.D.orders.find(x => x.id === id), res = orderTotal(o) - o.paid;
  modal('Istruzioni bonifico', `<div class="card"><div class="bd" style="display:grid;gap:8px"><div><span class="muted">Beneficiario</span><br><b>B2B Supply S.r.l.</b></div><div><span class="muted">IBAN</span><br><b class="mono">IT60 X054 2811 1010 0000 0123 456</b></div><div><span class="muted">Importo</span><br><b>${eur(res)}</b></div><div><span class="muted">Causale univoca</span><br><b class="mono">${o.id} – ${cust(o.customerId).name.split(' ')[0].toUpperCase()}</b></div></div></div><p class="small muted">La segnalazione di bonifico disposto non costituisce prova di accredito: l’ordine resta “in attesa” finché l’amministrazione non riconcilia il movimento bancario.</p>`, `<button class="btn" data-a="close">Chiudi</button><button class="btn primary" data-a="notice" data-id="${id}">Ho disposto il bonifico</button>`);
}

function act(a, d) {
  const D = S.D;
  switch (a) {
    case 'go': go(d.to); break;
    case 'close': S.modal = null; render(); break;
    case 'toast': toast(d.m); break;
    case 'cat': S.cat = d.v; render(); break;
    case 'chan': S.chan = d.v; render(); break;
    case 'tab': S.tab = d.v; render(); break;
    case 'order': orderModal(d.id); break;
    case 'prod': { const p = prod(d.sku); modal(p.name, `<div class="row" style="align-items:flex-start;gap:20px"><div class="pimg" style="${thumb(p)};width:180px;border-radius:14px;height:160px">${p.emoji}</div><div style="flex:1"><div class="small muted mono">${p.sku} · ${p.cat}</div><p>${p.desc}</p><p class="small muted">Unità: ${p.unit}</p></div></div>`, '<button class="btn" data-a="close">Chiudi</button>'); break; }
    case 'add': { const l = S.cart.find(x => x.sku === d.sku); if (l) l.qty++; else S.cart.push({ sku: d.sku, qty: 1 }); toast('Aggiunto: ' + prod(d.sku).name); break; }
    case 'qty': { const l = S.cart.find(x => x.sku === d.sku); l.qty = Math.max(1, l.qty + Number(d.d)); render(); break; }
    case 'rm': S.cart = S.cart.filter(x => x.sku !== d.sku); render(); break;
    case 'submitCart': {
      const c = cust(S.me.client), id = 'ORD-' + String(151 + D.orders.filter(o => Number(o.id.slice(4)) > 150).length).padStart(4, '0');
      D.orders.push({ id, customerId: c.id, date: TODAY, status: 'richiesta', log: '—', paid: 0, lines: S.cart.map(l => ({ sku: l.sku, qty: l.qty, unit: unitFor(l.sku, c) })) });
      S.cart = []; toast(`Richiesta ${id} inviata al fornitore`); go('client/quotes'); break;
    }
    case 'accept': case 'clientAccept': { const o = D.orders.find(x => x.id === d.id); o.status = 'accettato'; S.modal = null; toast('Preventivo accettato: ora serve l’approvazione del fornitore'); break; }
    case 'quote': { const o = D.orders.find(x => x.id === d.id); o.status = 'preventivo'; S.modal = null; toast('Preventivo inviato al cliente'); break; }
    case 'approve': {
      const o = D.orders.find(x => x.id === d.id), c = cust(o.customerId);
      const bad = o.lines.find(l => avail(prod(l.sku)) < l.qty);
      if (bad) { toast(`Disponibilità insufficiente per ${prod(bad.sku).name}: riserva non effettuata`); break; }
      o.lines.forEach(l => { prod(l.sku).reserved += l.qty; });
      o.status = 'approvato'; o.log = 'da_preparare'; o.channel = c.agentId ? 'agent' : 'direct'; o.agentId = c.agentId || null; o.rate = c.agentId ? agent(c.agentId).rate : 0; o.method = 'bonifico';
      S.modal = null; toast(o.channel === 'agent' ? `Ordine approvato · agente ${agent(o.agentId).name} al ${o.rate}% fotografato` : 'Ordine approvato · vendita diretta, provvigione €0'); break;
    }
    case 'logNext': {
      const o = D.orders.find(x => x.id === d.id), seq = ['da_preparare', 'in_preparazione', 'spedito', 'consegnato'];
      if (o.log === 'in_preparazione' && o.paid <= 0) { toast('Policy di rilascio: spedizione non consentita senza almeno un acconto incassato'); break; }
      if (o.log === 'in_preparazione') o.lines.forEach(l => { const p = prod(l.sku); p.stock = Math.max(0, p.stock - l.qty); p.reserved = Math.max(0, p.reserved - l.qty); });
      o.log = seq[seq.indexOf(o.log) + 1]; if (o.log === 'consegnato' && o.paid >= orderTotal(o)) o.status = 'completato';
      S.modal = null; toast('Stato logistico aggiornato: ' + BADGES.log[o.log][0]); break;
    }
    case 'stripe': stripeModal(d.id); break;
    case 'bank': bankModal(d.id); break;
    case 'notice': { D.orders.find(x => x.id === d.id).notice = true; S.modal = null; toast('Segnalazione registrata. Non è un pagamento: attende l’accredito verificato'); break; }
    case 'payStripe': {
      const o = D.orders.find(x => x.id === d.id); o.processing = true; o.method = 'stripe'; S.modal = null; toast('Reindirizzamento a Stripe… pagamento in elaborazione');
      setTimeout(() => { o.processing = false; const amt = orderTotal(o) - o.paid; o.paid += amt; D.ledger.push({ id: 'TX-' + (900 + D.ledger.length), orderId: o.id, method: 'stripe', amount: amt, at: TODAY, ref: 'pi_3Q' + o.id.slice(-3) + 'z1' }); D.stripeEvents.unshift({ id: 'evt_1Qz…' + o.id.slice(-3), type: 'checkout.session.completed', order: o.id, result: 'Elaborato', at: TODAY + ' 10:42' }); toast('Webhook firmato verificato: incasso registrato una sola volta'); }, 2200); break;
    }
    case 'match': {
      const b = D.bank.find(x => x.id === d.id), o = D.orders.find(x => x.id === b.suggest);
      o.paid += b.amount; b.status = 'abbinato'; D.ledger.push({ id: 'TX-' + (900 + D.ledger.length), orderId: o.id, method: 'bonifico', amount: b.amount, at: b.date, ref: 'Riconciliato ' + b.id });
      toast(`Abbinato a ${o.id}: incasso registrato, provvigioni aggiornate`); break;
    }
    case 'exc': modal('Gestione eccezione', `<p>${esc(D.bank.find(x => x.id === d.id).desc)}</p><p class="muted">In produzione qui si abbina manualmente a uno o più ordini, o si restituisce l’importo. Ogni rettifica genera un movimento compensativo con audit.</p>`, '<button class="btn" data-a="close">Chiudi</button>'); break;
    case 'load': prod(d.sku).stock += 20; toast('Carico registrato: +20 ' + prod(d.sku).sku); break;
    case 'assign': {
      const c = cust(d.id);
      modal('Assegnazione · ' + c.name, `<div class="field"><label>Agente</label><select id="m_agent" class="input"><option value="">Nessuno – cliente diretto</option>${D.agents.filter(x => x.status === 'attivo').map(x => `<option value="${x.id}" ${c.agentId === x.id ? 'selected' : ''}>${x.name} (${x.rate}%)</option>`).join('')}</select></div><div class="field"><label>Motivazione (obbligatoria)</label><input id="m_reason" class="input" placeholder="Es. cambio zona commerciale"></div>${note('Gli ordini già confermati mantengono canale, agente e aliquota originali. Il cambio vale dagli ordini successivi.')}`, `<button class="btn" data-a="close">Annulla</button><button class="btn primary" data-a="saveAssign" data-id="${c.id}">Salva</button>`); break;
    }
    case 'saveAssign': {
      const r = document.getElementById('m_reason').value.trim(); if (!r) { toast('Inserisci la motivazione'); break; }
      const c = cust(d.id); c.agentId = document.getElementById('m_agent').value || null; c.history.push({ date: TODAY, agentId: c.agentId, by: 'Giulia Conti', reason: r }); S.modal = null; toast(c.agentId ? 'Cliente assegnato a ' + agent(c.agentId).name : 'Cliente ora diretto'); break;
    }
    case 'rate': {
      const ag = agent(d.id);
      modal('Aliquota fissa · ' + ag.name, `<div class="field"><label>Nuova percentuale (0–100)</label><input id="m_rate" type="number" step="0.5" min="0" max="100" class="input" value="${ag.rate}"></div><div class="field"><label>Decorrenza</label><input id="m_from" type="date" class="input" value="${TODAY}"></div><div class="field"><label>Motivazione</label><input id="m_reason" class="input"></div><p class="small muted"><b>Storico:</b> ${ag.rateHistory.map(h => `${h.rate}% dal ${fmtD(h.from)}`).join(' · ')}</p>`, `<button class="btn" data-a="close">Annulla</button><button class="btn primary" data-a="saveRate" data-id="${ag.id}">Salva con audit</button>`); break;
    }
    case 'saveRate': {
      const v = parseFloat(document.getElementById('m_rate').value), r = document.getElementById('m_reason').value.trim();
      if (isNaN(v) || v < 0 || v > 100 || !r) { toast('Valore 0–100 e motivazione obbligatori'); break; }
      const ag = agent(d.id); ag.rate = v; ag.rateHistory.push({ rate: v, from: document.getElementById('m_from').value, by: 'Giulia Conti', reason: r }); S.modal = null; toast('Aliquota aggiornata: gli ordini già confermati restano invariati'); break;
    }
    case 'approveAgent': { agent(d.id).status = 'attivo'; toast('Agente approvato e attivato'); break; }
    case 'regOk': { const r = D.registrations.find(x => x.id === d.id); r.status = 'approvata'; D.customers.push({ id: 'C' + (D.customers.length + 1), name: r.company, city: r.city, vat: r.vat, agentId: null, discount: 0, contact: r.contact, email: r.email, marketing: false, since: TODAY, history: [] }); toast('Azienda approvata come cliente DIRETTO (nessun agente di default)'); break; }
    case 'regNo': D.registrations.find(x => x.id === d.id).status = 'rifiutata'; toast('Registrazione rifiutata'); break;
    case 'selItem': { const it = D.showcase.items, i = it.indexOf(d.sku); if (i >= 0) it.splice(i, 1); else it.push(d.sku); render(); break; }
    case 'pubToggle': D.showcase.status = D.showcase.status === 'pubblicata' ? 'sospesa' : 'pubblicata'; toast(D.showcase.status === 'pubblicata' ? 'Vetrina pubblicata e cache invalidata' : 'Vetrina sospesa: rimossa da pagina e API pubbliche'); break;
    case 'nlSku': { const s = S.nl.skus, i = s.indexOf(d.sku); if (i >= 0) s.splice(i, 1); else s.push(d.sku); render(); break; }
    case 'nlTest': toast('Email di prova inviata agli indirizzi interni'); break;
    case 'nlSchedule': { if (!S.nl.skus.length) { toast('Seleziona almeno un articolo'); break; } const n = S.nl; D.campaigns.unshift({ id: 'NL-' + (14 + D.campaigns.length), type: 'Offerte', name: n.name, subject: n.subject, status: 'programmata', date: n.from, recipients: D.customers.filter(c => c.marketing).length, delivered: 0, clicks: 0, orders: 0 }); S.tab = 'list'; toast('Campagna programmata per i soli destinatari con consenso'); break; }
    case 'login': loginModal(); break;
    case 'request': S.intent = d.sku; loginModal(); break;
    case 'loginAs': {
      S.modal = null; const r = d.role; location.hash = '#/' + r + '/dashboard';
      if (r === 'client' && S.intent) { const sku = S.intent; S.intent = null; const l = S.cart.find(x => x.sku === sku); if (!l) S.cart.push({ sku, qty: 10 }); setTimeout(() => { go('client/cart'); toast('Richiesta ripresa: ' + prod(sku).name + ' nel carrello (prezzi ricalcolati dal server)'); }, 50); }
      break;
    }
    case 'register': registerModal(); break;
    case 'sendReg': {
      const g = id => document.getElementById(id).value.trim();
      if (!g('r_company') || !g('r_vat') || !g('r_email')) { toast('Compila ragione sociale, P.IVA ed email'); break; }
      D.registrations.push({ id: 'R' + (D.registrations.length + 1), company: g('r_company'), vat: g('r_vat'), city: '—', contact: g('r_contact') || '—', email: g('r_email'), date: TODAY, origin: 'Vetrina – ' + D.showcase.title, status: 'in attesa' });
      modal('Richiesta di registrazione ricevuta', `<div class="note ok">${ic('check')}<div>Abbiamo inviato una email di verifica. L’account resta <b>in attesa di approvazione</b>: fino ad allora non è possibile ordinare né vedere i listini. Se la tua selezione è ancora valida verrà ripresa dopo l’approvazione.</div></div>`, '<button class="btn" data-a="close">Ok</button>'); break;
    }
    case 'lead': modal('Richiedi informazioni', `<div class="field"><label>Nome e azienda</label><input class="input"></div><div class="field"><label>Email</label><input class="input"></div><div class="field"><label>Messaggio</label><textarea class="input" rows="3"></textarea></div><label class="small"><input type="checkbox"> Ho letto l’informativa privacy</label>`, `<button class="btn" data-a="close">Annulla</button><button class="btn primary" data-a="toast" data-m="Lead creato nel CRM con campagna e origine (demo)">Invia</button>`); break;
  }
  if (!['go', 'close', 'toast', 'order', 'prod', 'stripe', 'bank', 'assign', 'rate', 'exc', 'login', 'register', 'request', 'lead'].includes(a)) { /* gia' renderizzato dai handler o da toast */ if (!S.toastPending) render(); }
}
function loginModal() {
  modal('Accedi all’area B2B', `<p class="muted" style="margin-top:0">${S.intent ? `Dopo l’accesso riprenderemo la tua richiesta per <b>${prod(S.intent).name}</b>.` : 'Seleziona un profilo demo.'}</p><div class="field"><label>Email</label><input class="input" value="acquisti@alfacostruzioni.example"></div><div class="field"><label>Password</label><input type="password" class="input" value="••••••••"></div><div class="small muted" style="margin-bottom:8px">Demo: entra con un profilo</div><div class="row"><button class="btn primary" data-a="loginAs" data-role="client">Cliente (Alfa Costruzioni)</button><button class="btn" data-a="loginAs" data-role="agent">Agente (M. Rossi)</button><button class="btn" data-a="loginAs" data-role="admin">Admin CRM</button></div>`, '<button class="btn" data-a="register">Nuovo cliente? Registrati</button>');
}
function registerModal() {
  modal('Registrazione azienda', `<div class="grid g2"><div class="field"><label>Ragione sociale *</label><input id="r_company" class="input"></div><div class="field"><label>Partita IVA *</label><input id="r_vat" class="input"></div><div class="field"><label>Referente</label><input id="r_contact" class="input"></div><div class="field"><label>Email aziendale *</label><input id="r_email" class="input"></div></div><p class="small muted">Registrandoti non ottieni accesso agli acquisti: serve l’approvazione del fornitore. La conoscenza della P.IVA non dà accesso ai dati di aziende esistenti.</p>`, '<button class="btn" data-a="close">Annulla</button><button class="btn primary" data-a="sendReg">Invia richiesta</button>');
}

/* ---------- render & router ---------- */
const PAGES = {
  client: { dashboard: cDashboard, catalog: cCatalog, cart: cCart, quotes: cQuotes, orders: cOrders, payments: cPayments },
  admin: { dashboard: aDashboard, orders: aOrders, customers: aCustomers, agents: aAgents, stock: aStock, payments: aPayments, registrations: aRegistrations, showcase: aShowcase, newsletter: aNewsletter },
  agent: { dashboard: gDashboard, customers: gCustomers, orders: gOrders, commissions: gCommissions },
  public: { showcase: publicPage }
};
function who() {
  if (S.role === 'client') { const c = cust(S.me.client); return [c.contact, c.name]; }
  if (S.role === 'agent') return [agent(S.me.agent).name, 'Agente · ' + agent(S.me.agent).rate + '%'];
  return ['Giulia Conti', 'Amministrazione'];
}
function counts(id) {
  if (S.role === 'client' && id === 'cart') return S.cart.length;
  if (S.role === 'admin' && id === 'registrations') return S.D.registrations.filter(r => r.status === 'in attesa').length;
  if (S.role === 'admin' && id === 'orders') return S.D.orders.filter(o => ['richiesta', 'accettato'].includes(o.status)).length;
  return 0;
}
function render() {
  const fe = document.activeElement, fid = fe && fe.id, pos = fe && fe.selectionStart;
  const r = ROLES[S.role], page = (PAGES[S.role] || {})[S.page] || (PAGES[S.role] || {})[Object.keys(PAGES[S.role])[0]];
  const demobar = `<div class="demobar"><b>DEMO</b><span>Dati statici · nessun backend</span><span class="grow"></span><div class="seg">${[['public', 'Vetrina'], ['client', 'Cliente'], ['agent', 'Agente'], ['admin', 'CRM']].map(x => `<button class="${S.role === x[0] ? 'on' : ''}" data-a="go" data-to="${x[0]}/${x[0] === 'public' ? 'showcase' : 'dashboard'}">${x[1]}</button>`).join('')}</div><button class="iconbtn" data-a="theme" title="Tema">${ic(S.dark ? 'sun' : 'moon')}</button></div>`;
  let html;
  if (S.role === 'public') html = page();
  else {
    const [n, sub] = who();
    html = `<div class="shell"><aside class="sidebar"><div class="brand"><div class="logo">B</div><div>B2B Supply<small>${r.label}</small></div></div><nav class="nav">${r.nav.map(x => { const k = counts(x[0]); return `<a href="#/${S.role}/${x[0]}" class="${S.page === x[0] ? 'on' : ''}">${ic(x[2])}<span>${x[1]}</span>${k ? `<span class="count">${k}</span>` : ''}</a>`; }).join('')}</nav><div class="user"><div class="avatar">${initials(n)}</div><div><b>${n}</b><small>${sub}</small></div></div></aside><main class="main">${page()}</main></div>`;
  }
  const m = S.modal ? `<div class="overlay" data-a="overlay"><div class="modal ${S.modal.wide ? 'wide' : ''}"><div class="mh"><h2>${S.modal.title}</h2><button class="btn sm ghost" data-a="close">${ic('x')}</button></div><div class="mb">${S.modal.body}</div>${S.modal.foot ? `<div class="mf">${S.modal.foot}</div>` : ''}</div></div>` : '';
  document.getElementById('app').innerHTML = demobar + html + m + (S.toast ? `<div class="toast">${esc(S.toast)}</div>` : '');
  if (fid) { const el = document.getElementById(fid); if (el) { el.focus(); try { el.setSelectionRange(pos, pos); } catch (e) {} } }
}
function route() {
  const h = location.hash.replace(/^#\/?/, '').split('/');
  S.role = ROLES[h[0]] ? h[0] : 'public';
  S.page = h[1] || Object.keys(PAGES[S.role])[0];
  S.modal = null; S.q = ''; S.cat = 'Tutte';
  if (S.role === 'admin' && S.page === 'newsletter') S.tab = S.tab === 'nlnew' ? 'nlnew' : 'list'; else if (S.page === 'payments' && !['bank', 'ledger', 'stripe'].includes(S.tab)) S.tab = 'bank';
  render(); window.scrollTo(0, 0);
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-a]'); if (!t) return;
  if (t.dataset.a === 'overlay') { if (e.target === t) act('close', {}); return; }
  if (t.dataset.a === 'theme') { S.dark = !S.dark; document.documentElement.dataset.theme = S.dark ? 'dark' : 'light'; render(); return; }
  if (t.tagName === 'INPUT') return;
  act(t.dataset.a, t.dataset);
});
document.addEventListener('change', e => { const t = e.target; if (t.tagName === 'INPUT' && t.type === 'checkbox' && t.dataset.a) act(t.dataset.a, t.dataset); });
document.addEventListener('input', e => {
  const t = e.target; if (!t.dataset.bind) return;
  const path = t.dataset.bind.split('.'); let o = S; while (path.length > 1) o = o[path.shift()]; o[path[0]] = t.type === 'number' ? Number(t.value) : t.value; render();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && S.modal) act('close', {}); });
window.addEventListener('hashchange', route);
init();
if (!location.hash) location.hash = '#/public/showcase'; else route();
