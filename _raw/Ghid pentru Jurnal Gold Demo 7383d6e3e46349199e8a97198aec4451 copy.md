# Ghid pentru Jurnal Gold Demo

*Nota: aceste considerente, chiar daca majoritatea lor au valente generale,  sunt scrise in contextul evaluarii modulului Demo(2), cu baza de date gazduita pe severul Softwiz/one00* 

*Pentru contact, va rugam sa gasiti datele pe [pagina de noastra de web](https://www.softwiz.ro/contact/).*

## Introducere

Jurnal Gold este un sistem informatic pentru managementul activitatii avocatiale. 

Principalele scopuri pe care le satisface  ar fi:

- Evidenta de timpi, in diferite abordari. Se pot genera time-sheet-uri in diferite formate si dupa criterii de filtrare si selectie dintre cele mai variate.
- Calculatia prestatiilor, ca etapa premergatoare facturarii. Tinand cont de reguli complexe de calcul in functie de avocat, client, contract/dosar,  durata, perioada/etapa, onorarii, moneda samd., se poate face rapid o evaluare financiara a lucrarilor.
- Facturarea propriu-zisa. Abordarea este una dintre cele mai permisive si elastice. Se poate analiza si revizui continutul de lucrari si in aceasta etapa. Se pot genera facturi estimative,  proforma sau direct facturi fiscale. Exista facturi de avans, de decont, de prestatii samd. Se pot urmari incasarile si stingerea facturilor. Rezulta asadar si o multime de posibile rapoarte financiare.
- Aportul fiecarui avocat la realizarile financiare comune. Presupune un set de module care gestioneaza reguli de distribuire a rezultatelor financiare catre cei care le-au generat.
- Sistemul este multi-emitent din punct de vedere al facturarii. Perimite asadar definirea mai multor entitati (ex. Cabinet de avocatura, Societate de insolventa,  Societate de consultanta fiscala ) care “impart” activitatea in baza de date.

## Inainte de a incepe

 *In cele ce urmeaza ne propunem sa punctam elementele remarcabile din diferite module ale softului, ca o completare a prezentarii noastre. Nu vom aminti chestiuni evidente, nici dintre cele pe care le-am subliniat mai insistent in prezentare si nici nu vom intra in detalii ce ar trebui sa faca obiectul trainingurilor.*

### Categorii de utilizatori

Structura de drepturi de acces este una mai complexa, insa pentru scopul acestui Demo, pentru simplitate, putem distinge utilizatori cu “Drepturi Extinse” si cu “Drepturi Restranse”. 

| # | Nume Intreg | Utilizator | Parola | Drepturi |
| --- | --- | --- | --- | --- |
| 1 | Annalise Keating | ANA | a | Avocat Partener, Drept extins |
| 2 | Olivia Pope | OLIVIA | a | Avocat Partener, Drept extins |
| 3 | Jack Daniels | JACK | a | Avocat Colaborator, Drept restrans |
| 4 | Saul Goodman | SAUL | a | Avocat Colaborator, Drept restrans |
| 5 | Willy Bach | WILLY | a | Avocat Colaborator, Drept restrans |

Puteti accesa sistemul  cu oricare dintre userii de mai sus.

### Interfete ale softului

In mod uzual, utilizatorul lanseaza Jurnal Gold si apoi, in functie de drepturi va opta daca este cazul pentru una din interfete:

**Jurnal Gold  (extended)**  -  interfata extinsa care permite unui user cu toate drepturile sa acceseze toate functiile si modulele softului.

**Jurnal Quick** - interfata restransa, din care sunt accesibile modulele de lucru operativ, de zi cu zi. In general blocate individual.

**Altele** *- pentru diferite functionalitati punctuale specifice. e,g. UserConfig - configurare utilizatori* 

### Module logice

CONTACTE - entitati si persoane cu care societatea noastra interactioneaza. Plus email-list.

CONTRACTE- angajamentele luate de firma fata de clienti. Aici, asa cum am descris la prezentare, am convenit o structura care, in acceptiunea softului presupune (i) Contracte  - un ansamblu compact de lucrari  (ii) Dosare - un fir logic subsecvent contractului  evidentiat distinct, o lucrare. 

JURNAL - activitati (timpi), cheltuieli, termene.  

FACTURI- calculele conform regulilor de facturare. Facturile estimative, proforme, fiscale. Incasari

RAPOARTE - grupate dupa aria pe care o adreseaza. 

MANAGEMENT -  exceptii la distribuirea de rezultate.

DIVERSE - utilizatori/drepturi, setari, curs valutar

### Despre reguli:

Ca punct de pornire putem avea urmatoarele reguli pentru completarea de activitati:

1. Avocatul are acees deplin la activitatile proprii.
2. Avocatul poate opera numai asupra activitatilor proprii
3. Avocatul are acces numai la dosarele atribuite lui
4. Avocatul nu vizualizeaza aspectele financiare si nici modurile de facturare.
5. Nu se pot introduce in urma activitati intr-o perioada “inchisa” (e.g. facturata deja,  anterioara contractului, blocata manual cf regulilor de lucru interne  samd).

Aceste reguli au fiecare exceptii, care se pot include in functie de situatie.

Pentru utilizatorii cu drepturi depline regulile sunt mai permisive, in limite conforme cu politicile societatii si ale logicii firesti.

Se poate opta pentru un numar minim de ore (distinct pentru fiecare)  pe care utilizatorii trebuie sa il introduca in sistem, fie ca sunt ore client, fie ca sunt ”pe Intern”;  O astfel de abordare aduce dupa sine si introducerea unor constrangeri, alarme etc. Practic, vorbim despre o optionala norma de ore. 

Din punctul de vedere al introducerii de contracte si dosare, modul de lucru din software nu trebuie sa constranga in vreun fel abordarea fluxului de lucru existent deja. 

Angajamentele luate in relatia cu clientii se vor introduce ca atare in soft, care trebuie sa se muleze pe realitate si nu invers.

Majoritatea regulilor definite in program vin cu proceduri de tratare a exceptiilor. Acest lucru ofera o mare elasticitate in abordare. 

Uzual, incepem lucrul pe un sistem standard sau aproape standard si apoi, in timp, ajustam reguli si exceptii.

## Scenariul cel mai probabil de lucru

| Utilizatori | Module functionale |
| --- | --- |
| Secretariat | CONTACTE |
| Avocati  | JURNAL |
| Financiar | CONTRACTE, FACTURARE, RAPOARTE |
| Parteneri | RAPOARTE, MANAGEMENT  |

## Lanarea programului

Dupa instalarea programului pe statia dumneavoastra, veti  gasi pe desktop o scurtatura catre Jurnal Gold:

Veti lansa programul care va va ghida spre una din interfetele acestuia, in functie de drepturile de acces ale utilizatorului cu care va logati.

![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled.png)

## De remarcat la Demo Extended ( user ANA sau OLIVIA )

1.  HOME - cateva widgeturi pe care userul alege se le vada la deschiderea softului.  Ar fi de remarcat alertele de genul “Este ceva de facturat azi…” sau  programarea salilor de sedinta.
2. CONTACTE  (secretariat in general)
    1. Contacte  
        1. mai multe adrese, la entitate. 
        2. categorii 
        3. un comentariu “cerinte exprese” care face pop-up de cate ori lucrez sau am in atentie entitatea respectiva. (ex.  “Se comunica doar in scris la email office@acme.com”);
        4. cine a facut ultima modificare
        5. cine a adus contactul 
        6. Persoana de legatura  (Acme → Jessica Rabbit) ex
        
        ![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%201.png)
        
    2. Liste
    
    ![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%202.png)
    
3. CONTRACTE - (financiarul):  de retinut conceptele convenite in acceptiunea acestui software : “Contract” = un angajament, contract cadru,  o intelegere.; “Dosar” - o lucrare subsecventa.
    - aspectul financiar care guverneaza lucrarea se va inscrie in program fie pe Contract, fie pe Dosar - si marcheaza o ”regula de facturare”
    - Contractul are sens ca un “set de dosare care se factureaza grupat”.
    - Dosarul se aloca la  avocati si va colecta activitatile (timpii), cheltuielile, termenele.
    - Avocatii vor vizualiza doar “Dosarul” unde vor inscrie timpi samd.
    
    mai jos, cele cu albastru sunt Contracte, sub ele Dosare.  cele cu R - sunt regula de facturare
    
    ![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%203.png)
    
     Se pot bifa avocatii care au acces la dosar, cine e bifat vede dosarul. In cazul unor drepturi de acces superioare, doserele sunt accesibile si daca nu esti bifat (Drept financiare de ex)
    
    ![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%204.png)
    
    De remarcat modurile complexe de facturare in mai multe monede. e.g. Putem defini un angajament in EUR si vom factura in RON la cursul zilei sau unul prestabilit
    
    De remarcat existenta alarmelor de facturare. Practic se verifica atingerea unui prag de ore sau sume de facturat pentru un contract si se emite un mesaj de atentionare.
    
    e.g. Sistemul va emite un mesaj (apare cu rosu in Home, se poate si email samd) care atentioneaza cand se vor fi cumulat 20 de ore lucrate la clientul Olivander’s wand shop / Dosarul: Despagubiri in dosarul 44999:
    
    ![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%205.png)
    
    De remarcat ca modulul se sincronizeaza cu Portalul Instantelor de Judecata (PIJ) si in cazul in care se bifeaza ca atare,  dosarele se vor updata cu datele aferente termenelor de judecata.  Pentru verificarea operatiunilor exista tab-ul  “Dosare PIJ”
    
4. JURNAL (avocatii):  modulul este accesibil tuturor, fiecare are acces la dosarele proprii. 
    
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
    
5. FACTURARE  (financiarul) : 
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
    
6. RAPOARTE - criterii multiple de selectie in functie de continut. 
    
    Majoritatea rapoartelor sunt in format excel
    
    Sunt disponibile foarte multe rapoarte,  uzual dispuse in categoriile :
    
    Operative - timesheeturi, cheltuieli , termene - relativ la munca prestata zilnic.
    
    Financiare - facturare,  incasari/plati,  realizari - eficienta
    
    Evidente - clienti, contacte dosare cu istoricul lor. 
    
    Resurse umane - timpi, norme, concedii invoiri
    
    Fiscale - facturi fiscale. sume diverse
    
7. CAUTARE  cautare entitati/persoane/contracte/dosare  
8. SETARI   onorarii standard, activitati standard, emitenti si conturi bancare samd

 

## De remarcat la Jurnal Quick (user SAUL, JACK sau WILLY)

Pentru utilizatorii cu drepturi restranse se va deschide automat aplicatia “Jurnal Quick”. 

Aceasta insumeaza cateva din modulele de mai sus, strictul necesar pentru introducerea si consultarea de activitati pentru un avocat, tinand cont de drepturile de acces ale acestuia.

 

![Untitled](Ghid%20pentru%20Jurnal%20Gold%20Demo%207383d6e3e46349199e8a97198aec4451/Untitled%2018.png)

Jurnal Gold  este un software dezvoltat  si exploatat de [Softwiz Creation](https://www.softwiz.ro) - Bucuresti

Pentru a lua legatura cu noi, va rugam sa  [vizitati pagina de contact](https://www.softwiz.ro/contact/).