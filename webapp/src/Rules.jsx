import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Rules = () => (
  <Container sx={{mt: 2, mb: 2}} maxWidth="md">
    <Typography variant="h4" component="h1" gutterBottom>Regler</Typography>

    <Typography variant="body1" paragraph>
      Syftet med turneringen är att pojkar och flickor ska få börja känna på bollen igen som
      uppstart på säsongen, men framförallt – <Typography fontWeight="bold" component="em">att dom
      ska ha
      roligt!</Typography>
    </Typography>

    <Typography variant="body1" paragraph>
      <Typography component="em">
        Fotboll ska vara kul, alla ska få vara med, få vara delaktig och vi vill ha rent spel.
      </Typography>
    </Typography>

    <Typography variant="body1" paragraph>
      Därför gäller det att vi alla uppträder positivt mot varandra och respekterar domarnas beslut.
      Vi kommer att ha helt nyutbildade domare under cupen. Vi vill uppmana ledare och föräldrar att
      föregå med gott exempel.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Spelregler
    </Typography>
    <Typography variant="body1" paragraph>
      Lilla Sundis Cup spelas efter Svenska FF:s tävlingsbestämmelser. Cupen är avsedd för spelare
      födda 2010 eller senare.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Tävlingsform
    </Typography>
    <Typography variant="body1" paragraph>
      Vi följer Svenska Fotbollsförbundets nya riktlinjer för cupspel med spelare t.o.m 12 års
      ålder, vilket innebär att inga tabeller eller slutsegrare kommer att förekomma. Regler i
      övrigt med Norrbottens FF:s spelregler för ungdomsfotboll.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Matchtid – Speltid
    </Typography>
    <Typography variant="body1" paragraph>
      Speltid 2x15 minuter.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Antal spelare och avbytare
    </Typography>
    <Typography variant="body1" paragraph>
      Man får använda fritt antal avbytare. Vi använder avbytarsystem som innebär att utbytt spelare
      får fritt återinsättas i matchen obegränsat antal gånger. Flygande byten gäller, utbytt
      spelare måste ha lämnat planen vid det tekniska området innan ny spelare får insättas. Båda
      lagen måste sitta på samma långsida under spelets gång, i det så kallade tekniska området.
      Detta område är också bytesområde. Anmälda spelare får endast delta i ett lag under cupen.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Deltagarförteckning
    </Typography>
    <Typography variant="body1" paragraph>
      Fylls i och lämnas till sekreteriatet innan första matchen.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Vid match
    </Typography>
    <Typography variant="body1" paragraph>
      Alla lag skall vara omklädda och färdiga vid sin spelplan senast 10 minuter före matchens
      början. Om matchdomaren bedömer att ena laget skall byta speldräkt på grund av likhet med
      andra lagets speldräkt, skall bortalaget byta. Samtliga spelare måste bära benskydd.
    </Typography>
    <Typography variant="body1" paragraph>
      Inga gula eller röda kort delas ut. Domaren instruerar och talar spelarna till rätta. Vid
      upprepade förseelser eller särskilt grova förseelser kan domaren visa spelaren av planen.
      Annan spelare får då sättas in som ersättare. Respektive lagledare ansvarar för att den
      berörde spelaren INTE spelar mer den matchen.
    </Typography>
    <Typography variant="body1" paragraph>
      Ledare/föräldrar som uppträder olämpligt i samband med match, kan bli avvisade av domare,
      matchvärd eller arenaansvariga från spelplanen/matchen.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Allmänna matchregler
    </Typography>
    <Typography variant="body1" paragraph>
      Vid ”inspark” (död boll) får målvakten kasta eller sparka ut bollen dock ej över mittlinjen.
      Bollen måste lämna straffområdet innan den är i spel. Om med eller motspelare tar bollen innan
      den lämnat straffområdet, skall målvakten göra om försöket. Om målvakten vid ”inspark”
      kastar/sparkar in bollen i eget mål godkänns inte målet.
    </Typography>
    <Typography variant="body1" paragraph>
      Vid ”utspark” (levande boll) får bollen gå direkt i motståndarens mål. Om målvakten vid
      ”utspark” kastar/sparkar in bollen i eget mål godkänns målet.
    </Typography>
    <Typography variant="body1" paragraph>
      Vi använder oss inte av offsideregeln.
    </Typography>
    <Typography variant="body1" paragraph>
      Samtliga hörnor går från hörnmarkering.
    </Typography>
    <Typography variant="body1" paragraph>
      6-sekundersregeln gäller ej för målvakt.
    </Typography>
    <Typography variant="body1" paragraph fontWeight="bold">
      Bakåtspel är tillåtet men enligt fotbollsförbundets nya regler får målvakten inte ta upp
      bollen med händerna vid avsiktligt tillbakaspel, efter att ha släppt bollen i spel och tagit
      upp den igen utan att bollen rört någon annan spelare samt tagit upp bollen med händerna efter
      ett inkast från medspelare. I sådant fall döms indirekt frispark till anfallande lag.
    </Typography>
    <Typography variant="body1" paragraph fontWeight="bold">
      Lag som har överåriga spelare med dispens får använda max två dispensspelare per match samt
      endast en dispensspelare i spel på plan vid varje tillfälle. Totalt för cupen får fem
      dispensspelare i varje lag delta. Dispensspelare skall använda armbindel/tejp som visar att
      spelaren är en dispensspelare.
    </Typography>
    <Typography variant="body1" paragraph>
      För ytterligare info gällande nya reglerna se mer på
      {' '}
      <Link href="https://norrbotten.svenskfotboll.se/tavling/barn---ungdomsfotboll/">
        Norrbottens fotbollsförbund
      </Link>
      .
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Walk Over
    </Typography>
    <Typography variant="body1" paragraph>
      Lag som uteblivit från match utan giltig orsak, förlorar matchen med 3-0.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Domare
    </Typography>
    <Typography variant="body1" paragraph>
      En eller tvådomarsystem tillämpas. Utbildade ungdomsdomare används.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Spelprogram
    </Typography>
    <Typography variant="body1" paragraph>
      Spelprogram fås vid registrering. Tävlingsledningen förbehåller sig rätten att ändra i
      spelprogrammet. Både vad det gäller grupper, tider och spelplaner.
    </Typography>

    <Typography variant="h5" component="h2" gutterBottom>
      Försäkringar
    </Typography>
    <Typography variant="body1" paragraph>
      Varje lagledare måste se till att samtliga deltagare är försäkrade både på och utanför planen.
      Lilla Sundis Cup har ingen kollektiv försäkring som täcker skador, sjukdomar, stölder eller
      skadegörelse.
    </Typography>
  </Container>
);

export default Rules;
