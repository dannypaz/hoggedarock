import Head from 'next/head';

const hotlineNumber = '1-855-HOG-ROCK';
const excuses = [
  '"I swear the hog line crept closer!"',
  '"My broom was in eco mode."',
  '"Gravity momentarily doubled."'
];
const violations = [
  { end: 2, rock: 3, status: 'hogged' },
  { end: 4, rock: 6, status: 'double hog' },
  { end: 5, rock: 1, status: 'hog whisper' }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>hoggedarock.com | Hog Line Hotline</title>
        <meta
          name="description"
          content="Hogged a rock again? hoggedarock.com has gentle roast, hotline and a curling intervention kit for serial hoggers."
        />
      </Head>
      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <p className="domain">hoggedarock.com</p>
            <h1>
              Friendly reminder: you hogged the rock. Again. The whole team knows, so we made a website.
            </h1>
            <p className="tagline">
              The hog line judges called—they want their favorite violator to stop high-fiving the rock before it crosses the
              line. Consider this your digital nudge with jazz hands.
            </p>
            <p className="definition">
              Hogging a rock = tossing it so light it gives up before the hog line. It&rsquo;s less &ldquo;precision curling&rdquo; and
              more &ldquo;stone napping&rdquo;—which, somehow, is your signature move.
            </p>
            <div className="hotline-card">
              <h2>Emergency Hog Line Support</h2>
              <p>
                If you&apos;ve experienced repeated hogged-a-rock incidents, call our 24/7 hotline at
                <a className="hotline" href={`tel:+18554647625`}> {hotlineNumber}</a>.
              </p>
              <p className="fine-print">Specialists standing by with motivational pebbles and slow-mo replays.</p>
            </div>
            <div className="excuses">
              <h3>Recently Submitted Excuses</h3>
              <ul>
                {excuses.map((excuse) => (
                  <li key={excuse}>{excuse}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hero-graphic">
            <div className="curling-sheet">
              <div className="sheet-lines" />
              <div className="target outer">
                <div className="target middle">
                  <div className="target inner" />
                </div>
              </div>
              <div className="hog-line" />
              <div className="rock" />
              <div className="rock ghost" />
              <div className="penalty-banner">
                <p className="banner-title">Hog Watch</p>
                <ul>
                  {violations.map((v) => (
                    <li key={`${v.end}-${v.rock}`}>
                      End {v.end}, Rock {v.rock}: <span>{v.status}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="cta-card">
            <h2>Redemption Challenge</h2>
            <p>Pledge to resolve all hog line violations for future throws.</p>
            <button type="button">I solemnly swear (again)</button>
          </div>
          <div className="cta-card" aria-live="polite">
            <h2>Practice Checklist</h2>
            <ul>
              <li>Dial in your release weight</li>
              <li>Compliment the hog line</li>
              <li>Whisper &ldquo;stay cool&rdquo; to every stone</li>
              <li>Visualize not hogging the rock</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
