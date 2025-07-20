---
sidebar_position: 2
---

# Introducerea Activităților (Timesheet)

## Dashboard principal

După autentificare, veți accesa dashboard-ul principal care oferă o vedere de ansamblu asupra activităților dumneavoastră.

### Elemente principale

#### 1. **Bara de navigare**
- Logo Jurnal Gold Karma
- Meniu principal (Dashboard, Timesheet, Rapoarte)
- Notificări și setări utilizator
- Buton de deconectare

#### 2. **Widget-uri dashboard**
- **Activități recente**: Ultimele 10 activități introduse
- **Timp total azi**: Suma orelor lucrate în ziua curentă
- **Dosare active**: Dosarele cu activitate în ultima săptămână
- **Deadline-uri**: Termene apropiate care necesită atenție

#### 3. **Acces rapid**
- Buton "Adaugă activitate" prominent
- Toolbar cu funcții de editare și export
- Filtre rapide pentru vizualizarea datelor
- Funcții de clipboard pentru copierea activităților

## Introducerea unei activități noi

### Metoda 1: Formular standard

#### Pasul 1: Accesarea formularului
1. Click pe butonul **"+ Adaugă activitate"** din dashboard
2. Sau navigați la **Timesheet → Activitate nouă**

#### Pasul 2: Completarea informațiilor de bază

**Câmpuri obligatorii:**
- **Data**: Data când s-a desfășurat activitatea
- **Client**: Selectați clientul din lista dropdown
- **Dosar**: Alegeți dosarul asociat (se filtrează automat după client)
- **Activitate**: Tipul de activitate (consultare, redactare, ședință, etc.)
- **Ore**: Numărul de ore (0-23) folosind NumberBox
- **Minute**: Numărul de minute (0-59) folosind NumberBox

**Câmpuri opționale:**
- **Activitate**: Editor rich text (HtmlEditor) pentru descrierea detaliată
- **Observații**: Editor rich text pentru note suplimentare
- **Formatare**: Formatarea se elimină automat la paste pentru consistență
- **Verificare ortografică**: Suport pentru verificarea ortografică specifică limbii

#### Pasul 3: Salvarea
- **Salvează**: Salvează activitatea și rămâne în formular pentru următoarea
- **Salvează și închide**: Salvează și revine la dashboard
- **Anulează**: Anulează introducerea fără salvare

### Metoda 2: Introducere rapidă

Pentru activități simple și repetitive:

1. **Click pe "Introducere rapidă"** din dashboard
2. **Selectați template-ul** predefinit (dacă există)
3. **Modificați** doar câmpurile necesare (data, durata)
4. **Salvați** cu un click

### Metoda 3: Funcții de clipboard

Pentru copierea și gestionarea rapidă a activităților:

#### Operații clipboard
1. **Selectați** o activitate din grid
2. **Cut (Ctrl+X)**: Taie activitatea pentru mutare
3. **Copy (Ctrl+C)**: Copiază activitatea pentru duplicare
4. **Paste (Ctrl+V)**: Lipește activitatea copiată

#### Clipboard popup
- **Vizualizare conținut**: Vezi ce este în clipboard
- **Gestionare**: Modifică datele înainte de paste
- **Validare**: Verifică compatibilitatea înainte de lipire

#### Ajustare incrementală
- **+10 minute**: Buton pentru adăugarea rapidă de 10 minute
- **Validare automată**: Verifică limitele de timp (0-23 ore, 0-59 minute)
- **Feedback vizual**: Indicatori pentru operații reușite/eșuate

## Gestionarea activităților existente

### Vizualizarea activităților

#### Lista activităților
- **Filtrare**: După dată, client, dosar, tip activitate
- **Sortare**: După dată, durată, client
- **Căutare**: Text în descriere sau observații
- **Grupare**: După client, dosar sau tip activitate

#### Detalii activitate
Click pe orice activitate pentru a vedea:
- Toate detaliile introduse
- Istoricul modificărilor
- Activități similare/conexe
- Opțiuni de editare sau ștergere

### Editarea activităților

#### Activități editabile
- Activități din ziua curentă: editare completă
- Activități din ultimele 7 zile: editare cu aprobare
- Activități mai vechi: doar cu permisiuni speciale

#### Procesul de editare
1. **Click** pe activitatea dorită
2. **Selectați** "Editează"
3. **Modificați** câmpurile necesare
4. **Salvați** modificările

:::warning Atenție
Editarea activităților mai vechi de 7 zile poate necesita aprobare din partea managerului.
:::

### Ștergerea activităților

#### Condiții pentru ștergere
- Doar activități proprii
- În intervalul de timp permis
- Fără impact asupra facturilor emise

#### Procesul de ștergere
1. **Selectați** activitatea
2. **Click** pe "Șterge"
3. **Confirmați** ștergerea
4. Activitatea este marcată ca ștearsă (nu se elimină definitiv)

## Funcții speciale

### Template-uri de activități

#### Crearea unui template
1. **Introduceți** o activitate completă
2. **Selectați** "Salvează ca template"
3. **Numiți** template-ul
4. Template-ul devine disponibil pentru utilizări viitoare

#### Utilizarea template-urilor
- **Selectați** template-ul din lista
- **Modificați** doar data și durata
- **Salvați** rapid activitatea

### Activități recurente

Pentru activități care se repetă regulat:

1. **Definiți** activitatea de bază
2. **Setați** frecvența (zilnic, săptămânal, lunar)
3. **Specificați** perioada de valabilitate
4. Activitățile se vor crea automat conform programului

### Import/Export

#### Import din calendar
- **Google Calendar**: Sincronizare automată a întâlnirilor
- **Outlook**: Import evenimente ca activități
- **CSV**: Import în lot din alte sisteme

#### Export pentru raportare
- **Excel**: Pentru analize suplimentare
- **PDF**: Pentru prezentări
- **CSV**: Pentru integrare cu alte sisteme

## Validări și reguli de business

### Validări automate

#### Timp maxim pe zi
- **Limită**: 24 ore pe zi (configurabilă)
- **Alertă**: La depășirea limitei normale (8-10 ore)
- **Blocare**: La valori imposibile

#### Suprapuneri de timp
- **Detectare**: Activități simultane
- **Alertă**: Notificare despre conflict
- **Rezolvare**: Sugestii pentru ajustare

#### Dosare inactive
- **Verificare**: Dosare închise sau suspendate
- **Alertă**: Avertisment la introducerea pe dosare inactive
- **Blocare**: Opțional, pentru dosare complet închise

### Reguli de aprobare

#### Activități normale
- **Sub 8 ore/zi**: Aprobare automată
- **8-12 ore/zi**: Aprobare cu notificare
- **Peste 12 ore/zi**: Necesită aprobare explicită

#### Activități speciale
- **Weekend**: Poate necesita justificare
- **Sărbători**: Aprobare specială
- **Ore suplimentare**: Conform politicilor companiei

:::tip Sugestie
Utilizați funcțiile de clipboard pentru a copia rapid activități similare și butonul "+10 minute" pentru ajustări rapide de timp.
:::
