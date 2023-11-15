/*
Inizio
​
 Prendi la pratica da scannerizzare
 Controlla l'integrità della pratica
​
   |--- SE la pratica non è integra e completa
         ALLORA recupera i documenti mancanti
​
   
             Vai allo scanner
​
                 |--- SE lo scanner è spento
                      accendilo
​
             apri lo scanner 
​
             controlla impostazioni scanner
​
                 |--- SE il documento è a colori impostare scansione a colori
                 |--- SE il documento è BW impostare scansione BW
​
             |--- PER OGNI pagina nella pratica
                    Posiziona la pagina corrente sul vetro dello scanner, con il lato fronte verso il basso
                    Chiudi lo scanner
                    Avvia lo scanner
                    Scannerizza il fronte della pagina corrente
            
                |---SE la pagina corrente ha un retro
                        Prendi la pagina corrente
                        Capovolgi la pagina
                        Posiziona la pagina corrente sul vetro dello scanner, con il lato retro verso il basso
                        Chiudi lo scanner
                        Avvia lo scanner
                        Scannerizza il retro della pagina corrente
                Spegni lo scanner
​
             Salva il file scannerizzato in formato digitale
                Assegna un nome al file 
                Seleziona il formato di salvataggio desiderato
                Specifica la cartella di destinazione
                Salva il file
​
 Fine
 */