---
sidebar_position: 5
---

# Modulele din Jurnal Extended

**user ANA sau OLIVIA**

## 1. HOME (general)

Cateva widgeturi pe care userul alege se le vada la deschiderea softului. Ar fi de remarcat alertele de genul “Este ceva de facturat azi…” sau programarea salilor de sedinta.

## 2. CONTACTE (secretariatul)

1. Contacte

   1. mai multe adrese, la entitate.
   2. categorii
   3. un comentariu “cerinte exprese” care face pop-up de cate ori lucrez sau am in atentie entitatea respectiva. (ex. “Se comunica doar in scris la email office@acme.com”);
   4. cine a facut ultima modificare
   5. cine a adus contactul
   6. Persoana de legatura (Acme → Jessica Rabbit) ex

   ![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%201.png)

2. Liste

   ![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%202.png)

## 3. CONTRACTE (financiarul)

- de retinut conceptele convenite in acceptiunea acestui software : “Contract” = un angajament, contract cadru, o intelegere.; “Dosar” - o lucrare subsecventa.
- aspectul financiar care guverneaza lucrarea se va inscrie in program fie pe Contract, fie pe Dosar - si marcheaza o ”regula de facturare”
- Contractul are sens ca un “set de dosare care se factureaza grupat”.
- Dosarul se aloca la avocati si va colecta activitatile (timpii), cheltuielile, termenele.
- Avocatii vor vizualiza doar “Dosarul” unde vor inscrie timpi samd.
  mai jos, cele cu albastru sunt Contracte, sub ele Dosare. cele cu R - sunt regula de facturare
  ![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%203.png)
  Se pot bifa avocatii care au acces la dosar, cine e bifat vede dosarul. In cazul unor drepturi de acces superioare, doserele sunt accesibile si daca nu esti bifat (Drept financiare de ex)
  ![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%204.png)
  De remarcat modurile complexe de facturare in mai multe monede. e.g. Putem defini un angajament in EUR si vom factura in RON la cursul zilei sau unul prestabilit
  De remarcat existenta alarmelor de facturare. Practic se verifica atingerea unui prag de ore sau sume de facturat pentru un contract si se emite un mesaj de atentionare.
  e.g. Sistemul va emite un mesaj (apare cu rosu in Home, se poate si email samd) care atentioneaza cand se vor fi cumulat 20 de ore lucrate la clientul Olivander’s wand shop / Dosarul: Despagubiri in dosarul 44999:
  ![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%205.png)
  De remarcat ca modulul se sincronizeaza cu Portalul Instantelor de Judecata (PIJ) si in cazul in care se bifeaza ca atare, dosarele se vor updata cu datele aferente termenelor de judecata. Pentru verificarea operatiunilor exista tab-ul “Dosare PIJ”

## 4. JURNAL (avocatii)

Modulul este accesibil tuturor, fiecare are acces la dosarele proprii.

Se introduc activitati (timpi), cheltuieli, termene, concedii.

Activitatile se pot introduce in doua feluri:

	CLIENT > DOSAR -  fiecare vizualizeaza dosarele la care a fost bifat

![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%206.png)

	sau

PE ZI (breakdown) - ca un snapshot zilnic. Culorile au sens cand avem un barem de ore pe avocat sau la concedii/invoiri.

![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%207.png)

In lista cu activitati, sunt cele nefacturate, modificabile inca.

O activitate ce s-a facturat, e considerata “blocata” si nu mai poate fi modificata. Daca firma are alte politici se pot bloca si cele nefacturate dar mai vechi de n zile ( ex 3 zile lucratoare in urma ).

Se pot adauga activitati pentru un grup (util la sedinte sau activitati comune).

Apare un Label cu rosu, care arata limba in care trebuie completata activitatea. Asta pentru ca timesheetul sa fie uniform.

![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%208.png)

Se pot pune activitati pe “Intern” cu semnificatia “Non Client/Non chargeable”

Activitatile se pot Copy/Paste, se pot sterge si modifica cu click dreapta.

![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%209.png)

sau se pot edita “inline” cu click scurt

![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%2010.png)

Ar fi de mentionat ca la Termene, se populeaza automat din PIJ dar se pot introduce sau modifica manual informatiile.

## 5. FACTURARE (financiarul)

- ar fi de punctat faptul ca se pot grupa dosare cu cele mai complexe reguli de facturare, mai multe dosare (chiar mai multi clienti spre a fi facturati catre un tert).
- se pot utiliza mai multe monede, la cursul oficial sau alt curs
- se pot genera mai multe tipuri de facturi
- remarcam ca sunt selectabile doar nodurile care au fost definite ca fiind regula de facturare.

Un exemplu, facturarea clientului Bubba Gump

1. In Facturare, selectam contractele clientului

	![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%2011.png)

2.  click “Calculeaza factura”

	![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%2012.png)

3. Se pot revedea calculele, se pot aplica discounturi se ajusteaza diferitele valori, daca este cazul. Diferitele moduri de ajustare le-am amintit la prezentare si le vom parcurge cu atentie la training.

	![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%2013.png)

4. Se alege template (ROMANA) si se face click “Genereaza”

	![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%2014.png)

	in executabilul dumneavoastra vor fi mai template-uri pentru facturile in limbile pe care le alegeti. Uzual RO si EN.

	Se pot crea template-uri diferite si pentru diferiti emitenti.

5. Se va genera un fisier excel, cu mai multe sheeturi

	![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%2015.png)

	Factura se va ajusta pana ajunge la formatul dorit, apoi, uzual se exporta in format pdf pentru a fi transmisa la client.

6. Concomitent puteti apare un mesaj  (alege “Nu” pentru a putea relua/repeta mai tarziu facturarea folosind acelasi exemplu)

	![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%2016.png)


Urmarirea facturilor emise si incasarea ulterioara.

![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%2017.png)

de remarcat multiplele cursuri valutare

de asemenea de remarcat incasarile multiple.

Urmatorul pas ar fi FACTURA FISCALA - este un capitol diferit unde ar fi de evidentiat ca putem defini facturiere multiple pentru fiecare entitate EMITENT

Factura fiscala din Jurnal Gold poate sa fie in stransa corelatie cu o factura proforma ( sau cu rol estimativ) ca cea prezentata anterior sau, la fel de bine, poate contine elemente in plus sau poate  fi cu totul independenta de acestea.

Ideea este ca facturile proforma ( pe care unii clienti le numesc deviz, sau nota de lucrari) au corespondent facturi fiscale insa nu si invers.

Modulul de facturare fiscala din Jurnal Gold nu este obligatoriu pe fluxul de lucru. Proformele si incasarile aferente sunt suficiente pentru a genera rapoartele de eficienta si pentru a face toate calculele.

De notat este de asemenea ca s-a realizat  si modulul de export al facturii in format electronic xml, conform legii.

## 6. RAPOARTE (access in functie de rolul utilizatorului) 

criterii multiple de selectie in functie de continut.

Majoritatea rapoartelor sunt in format excel

Sunt disponibile foarte multe rapoarte,  uzual dispuse in categoriile :

Operative - timesheeturi, cheltuieli , termene - relativ la munca prestata zilnic.

Financiare - facturare,  incasari/plati,  realizari - eficienta

Evidente - clienti, contacte dosare cu istoricul lor.

Resurse umane - timpi, norme, concedii invoiri

Fiscale - facturi fiscale. sume diverse

## 7. CAUTARE 

cautare entitati/persoane/contracte/dosare

## 8. SETARI 

onorarii standard, activitati standard, emitenti si conturi bancare samd
