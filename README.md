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
- impostare nel component Card Model il tag relativo al pacchetto scaricato, come da indicazioni documentazione.
- dal component principale App.vue, tramite axios agganciare alla chiamata api Movies già esistente, una ulteriore chiamata api Tv Series per ampliare la ricerca anche alle serie TV.
- nel component CardModel impostare una v-if per gestire correttamente le chiavi degli oggetti, che nella parte del titolo e titolo originale hanno nomi differenti tra Movies (title, original_title) e TvSeries (name, original_name).