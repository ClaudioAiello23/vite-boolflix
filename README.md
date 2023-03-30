# Esercizio: BoolFlix
nome repo: vite-boolflix
Vi lascio il link a questo documento con tutte le info, suddivise in milestone, su come procedere alla realizzazione.
https://docs.google.com/document/d/1JBwSbzVo88GBKKUwNTx6fQe7RetT_uw_PTxtGgoQPWI/edit?usp=sharing
Ps. usate la vostra api key, non quella delle slide.
------------------------------------------------------------------------------------------
## MILESTONE 0:
- inserire in cartella la struttura iniziale del Global State in un file store.js, che conterrà tutte le proprietà che mi servirà utilizzare tra i vari components del progetto.

## MILESTONE 1:
- creare il componente AppHeader e il componente SearchBar (contenuto nell'Header).
- creare nel SearchBar il campo input e il campo button.
- fare in modo che il campo input utente venga letto (utilizzare v-model) e che il tasto button passi l'evento "input utente" al componente padre (AppHeader) e successivamente al componente App.vue, che sarà il componente padre finale che effettuerà la chiamata all'API di TheMovieDataBase; utilizzata la caratteristica $emit per il passaggio evento SearchBar-AppHeader-App.vue, e configurato lo store globale per permettere la lettura e l'utilizzo della proprietà creata (searchUser) da parte di tutti i componenti.
- effettuare la chiamata all'API dopo che l'utente avrà inserito un input e cliccare sul bottone Search; la chiamata restituisce un array contenente i titoli dei film trovati.
- rappresentare nel DOM i dati richiesti dall'esercizio; creato un component cardModel per la rappresentazione dei dati, che è stato poi incluso nell'AppMain.

## MILESTONE 2:
- installare tramite terminale VsCode un pacchetto da NPM contenente le flags; scelto di utilizzare il pacchetto "vue-country-flag-next".
- configurare l'import del pacchetto nei component in cui intendo utilizzarlo, e dichiararlo nella parte "components".
- impostare nel component Card Model il tag relativo al pacchetto flag scaricato, come da indicazioni documentazione.
- nel Card Model impostare una funzione switch che converta il valore "en" presente nella chiave "lingua originale" dell'array MovieResults" , in valore "gb" per poter stampare la bandiera GB (nel pacchetto flag la codifica EN è differente e nel Dom non veniva mostrata la bandiera in caso di lingua EN).
- dal component principale App.vue, tramite axios agganciare alla chiamata api Movies già esistente, una ulteriore chiamata api Tv Series per ampliare la ricerca anche alle serie TV.
- nel component CardModel impostare una v-if per gestire correttamente le chiavi degli oggetti, che nella parte del titolo e titolo originale hanno nomi differenti tra Movies (title, original_title) e TvSeries (name, original_name).

## MILESTONE 3:
- il Feedback ricevuto dall'array MovieResults deve essere trasformato in un voto con numero intero da 1 a 5 (invece che da 1 a 10); utilizzare una funzione che divide per 2 il numero iniziale e lo arrotonda all'intero successivo. Dopodichè inserire la funzione nel DOM (component CardModel).
- trasformare il numero del Feedback in stelle (utilizzare la libreria Font Awesome), in modo che siano sempre presenti 5 stelle per ogni card, e il numero di voto corrisponderà al numero di stelle piene, mentre il numero di stelle vuote sarà costituito dalla differenza tra il numero di stelle totali (5) e il numero di stelle voto. Utilizzato un ciclo FOR sul dom (component Card Model) per ciclare le stelle fontAwsome.