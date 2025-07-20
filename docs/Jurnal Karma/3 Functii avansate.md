---
sidebar_position: 3
---

# Funcții Avansate

## Cronometru avansat

### Funcționalități cronometru

#### Cronometru multiplu
- **Până la 5 cronometrele** active simultan
- **Etichetare**: Fiecare cronometru poate avea o etichetă
- **Comutare rapidă**: Switch între cronometrele active
- **Totaluri separate**: Timp individual pentru fiecare activitate

#### Cronometru cu pauze
- **Pauze automate**: La inactivitate (configurabil)
- **Pauze manuale**: Buton de pauză/continuare
- **Istoric pauze**: Vizualizarea tuturor pauzelor
- **Excludere pauze**: Timpul de pauză nu se contorizează

#### Notificări cronometru
- **Reminder-e**: La intervale setate (30 min, 1h, 2h)
- **Limite de timp**: Alertă la depășirea timpului planificat
- **Sugestii de pauză**: Pentru sesiuni lungi de lucru

### Configurări cronometru

#### Setări generale
```javascript
// Exemplu configurare cronometru
{
  "autoStart": true,           // Pornire automată la selectarea dosarului
  "autoPause": 300,           // Pauză automată după 5 min inactivitate
  "reminderInterval": 1800,    // Reminder la 30 minute
  "maxDailyHours": 12,        // Alertă la depășirea a 12 ore/zi
  "roundingMinutes": 6        // Rotunjire la 6 minute (0.1 ore)
}
```

#### Personalizare interfață
- **Poziție**: Cronometru fix sau flotant
- **Dimensiune**: Compact, normal sau extins
- **Culori**: Teme personalizate pentru diferite tipuri de activități
- **Sunete**: Notificări audio pentru start/stop/pauză

## Categorii și etichete

### Sistem de categorii

#### Categorii predefinite
- **Tip activitate**: Consultare, redactare, ședință, deplasare
- **Urgență**: Normală, urgentă, foarte urgentă
- **Complexitate**: Simplă, medie, complexă
- **Facturabilă**: Da/Nu

#### Categorii personalizate
Creați propriile categorii pentru:
- **Proiecte speciale**: Etichetare activități pentru proiecte mari
- **Clienți VIP**: Marcarea activităților pentru clienți importanți
- **Tipuri de lucru**: Research, writing, meeting, travel
- **Locații**: Birou, tribunal, client, acasă

### Gestionarea etichetelor

#### Adăugarea etichetelor
1. **În timpul introducerii**: Selectați din lista sau creați noi
2. **Editare ulterioară**: Adăugați etichete la activități existente
3. **Import automat**: Din descrierea activității (cuvinte cheie)

#### Utilizarea etichetelor
- **Filtrare**: Găsiți rapid activități cu anumite etichete
- **Raportare**: Grupați rapoartele după etichete
- **Analiză**: Identificați tipare în activități
- **Facturare**: Diferențiați activități facturabile/nefacturabile

## Filtrare și căutare avansată

### Filtre complexe

#### Filtre multiple
Combinați mai multe criterii:
```sql
-- Exemplu filtru complex
Data ÎNTRE '2024-01-01' ȘI '2024-01-31'
ȘI Client = 'ACME Corp'
ȘI Tip_Activitate ÎN ('Consultare', 'Redactare')
ȘI Durata > 2 ore
```

#### Filtre salvate
- **Creați** filtre pentru căutări frecvente
- **Numiți** și salvați pentru utilizare ulterioară
- **Partajați** cu echipa (dacă aveți permisiuni)
- **Programați** pentru rapoarte automate

### Căutare în text

#### Căutare simplă
- **Descriere**: Căutare în descrierea activităților
- **Observații**: Căutare în notele interne
- **Client/Dosar**: Căutare după nume

#### Căutare avansată
- **Operatori booleeni**: AND, OR, NOT
- **Wildcards**: * pentru orice caracter
- **Fraze exacte**: "text exact" între ghilimele
- **Căutare fuzzy**: Găsește și variante apropiate

#### Exemple căutare
```
"contract de vânzare" AND urgent
client:ACME OR client:BETA
NOT facturat
redactare* (găsește: redactare, redactarea, redactării)
```

## Raportare și analiză

### Rapoarte personalizate

#### Tipuri de rapoarte
- **Timesheet personal**: Activitățile proprii într-o perioadă
- **Raport pe client**: Toate activitățile pentru un client
- **Raport pe dosar**: Detalii complete pentru un dosar
- **Raport de eficiență**: Analiză productivitate

#### Configurare rapoarte
1. **Selectați tipul** de raport
2. **Setați perioada** (zi, săptămână, lună, personalizat)
3. **Alegeți coloanele** de afișat
4. **Aplicați filtrele** necesare
5. **Generați** raportul

### Analiză vizuală

#### Grafice disponibile
- **Grafic cu bare**: Ore pe zi/săptămână/lună
- **Grafic circular**: Distribuția timpului pe clienți
- **Heatmap**: Intensitatea activității pe zile
- **Trend lines**: Evoluția în timp

#### Dashboard analitic
- **KPI-uri**: Indicatori cheie de performanță
- **Comparații**: Față de perioada anterioară
- **Obiective**: Progres față de țintele setate
- **Alerte**: Notificări pentru anomalii

## Integrări externe

### Calendar sync

#### Google Calendar
```javascript
// Configurare sincronizare Google Calendar
{
  "syncDirection": "bidirectional",  // sau "import" / "export"
  "calendarId": "primary",
  "eventPrefix": "[JG] ",
  "syncFrequency": "realtime"       // sau "hourly" / "daily"
}
```

#### Microsoft Outlook
- **Import evenimente**: Transformă întâlnirile în activități
- **Export activități**: Creează evenimente din timesheet
- **Sincronizare contacte**: Clienți din Outlook în Jurnal Gold

### Aplicații mobile

#### Notificări push
- **Reminder-e**: Pentru activități planificate
- **Aprobare**: Când activitățile necesită aprobare
- **Deadline-uri**: Alerte pentru termene apropiate

#### Funcționalitate offline
- **Cache local**: Ultimele 30 zile de activități
- **Sincronizare**: Automată la reconectare
- **Conflict resolution**: Gestionarea modificărilor simultane

## Automatizări

### Reguli automate

#### Auto-categorization
```javascript
// Exemplu reguli automate
{
  "rules": [
    {
      "condition": "description CONTAINS 'tribunal'",
      "action": "SET category = 'Deplasare'"
    },
    {
      "condition": "duration > 4 AND client = 'VIP'",
      "action": "SET priority = 'High' AND notify_manager = true"
    }
  ]
}
```

#### Template-uri inteligente
- **Învățare**: Sistemul învață din activitățile anterioare
- **Sugestii**: Propune template-uri bazate pe context
- **Auto-complete**: Completează automat câmpurile frecvente

### Workflow-uri

#### Aprobare automată
1. **Activități standard**: Sub 8 ore/zi → aprobare automată
2. **Activități speciale**: Weekend/sărbători → necesită aprobare
3. **Activități mari**: Peste limita setată → escaladare manager

#### Notificări automate
- **Clienți**: Notificare automată pentru activități importante
- **Echipa**: Update-uri pentru activități colaborative
- **Management**: Rapoarte periodice automate

## Securitate și audit

### Audit trail

#### Înregistrare modificări
Toate acțiunile sunt înregistrate:
- **Cine**: Utilizatorul care a făcut modificarea
- **Ce**: Tipul modificării (creare, editare, ștergere)
- **Când**: Data și ora exactă
- **Unde**: IP-ul și browser-ul utilizat
- **De ce**: Motivul modificării (dacă este specificat)

#### Rapoarte audit
- **Activitate utilizator**: Toate acțiunile unui utilizator
- **Modificări dosar**: Istoricul complet al unui dosar
- **Acces neautorizat**: Tentative de acces suspicioase

### Backup și recovery

#### Backup automat
- **Frecvența**: Zilnic, săptămânal, lunar
- **Locația**: Cloud securizat + backup local
- **Retenție**: 1 an pentru backup-uri zilnice
- **Testare**: Verificare lunară a integrității

#### Recovery procedures
- **Point-in-time recovery**: Restaurare la orice moment
- **Selective recovery**: Doar anumite date/utilizatori
- **Disaster recovery**: Plan complet de continuitate

:::tip Pro Tip
Utilizați combinația de cronometru multiplu și etichete pentru a urmări eficient proiecte complexe cu mai multe componente.
:::
