import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Maler & Gestalter Vogel",
  description: "Datenschutzerkl\u00e4rung von Maler & Gestalter Vogel im Landkreis Bamberg.",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="bg-background-alt border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-accent text-sm transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Zur{"\u00fc"}ck zur Startseite
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
            Datenschutzerkl{"\u00e4"}rung
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-none space-y-6 text-foreground-muted leading-relaxed">
          <p>
            Wir freuen uns sehr {"\u00fc"}ber Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen
            Stellenwert f{"\u00fc"}r die Gesch{"\u00e4"}ftsleitung der Marcel Vogel. Eine Nutzung der Internetseiten der
            Marcel Vogel ist grunds{"\u00e4"}tzlich ohne jede Angabe personenbezogener Daten m{"\u00f6"}glich. Sofern eine
            betroffene Person besondere Services {"\u00fc"}ber die Internetseite in Anspruch nehmen m{"\u00f6"}chte,
            k{"\u00f6"}nnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung
            personenbezogener Daten erforderlich und besteht f{"\u00fc"}r eine solche Verarbeitung keine gesetzliche
            Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.
          </p>
          <p>
            Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder
            Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in
            {"\u00dc"}bereinstimmung mit den f{"\u00fc"}r die Marcel Vogel geltenden landesspezifischen
            Datenschutzbestimmungen. Mittels dieser Datenschutzerkl{"\u00e4"}rung m{"\u00f6"}chte das Unternehmen die
            {"\u00d6"}ffentlichkeit {"\u00fc"}ber Art, Umfang und Zweck der erhobenen, genutzten und verarbeiteten
            personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser
            Datenschutzerkl{"\u00e4"}rung {"\u00fc"}ber die ihnen zustehenden Rechte aufgekl{"\u00e4"}rt.
          </p>
          <p>
            Die Marcel Vogel hat als f{"\u00fc"}r die Verarbeitung Verantwortlicher zahlreiche technische und
            organisatorische Ma{"\u00df"}nahmen umgesetzt, um einen m{"\u00f6"}glichst l{"\u00fc"}ckenlosen Schutz der
            {"\u00fc"}ber diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch k{"\u00f6"}nnen
            Internetbasierte Daten{"\u00fc"}bertragungen grunds{"\u00e4"}tzlich Sicherheitsl{"\u00fc"}cken aufweisen,
            sodass ein absoluter Schutz nicht gew{"\u00e4"}hrleistet werden kann. Aus diesem Grund steht es jeder
            betroffenen Person frei, personenbezogene Daten auch auf alternativen Wegen, beispielsweise telefonisch, zu
            {"\u00fc"}bermitteln.
          </p>

          {/* 1. Begriffsbestimmungen */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">1. Begriffsbestimmungen</h2>
          <p>
            Die Datenschutzerkl{"\u00e4"}rung der Marcel Vogel beruht auf den Begrifflichkeiten, die durch den
            Europ{"\u00e4"}ischen Richtlinien- und Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung (DS-GVO)
            verwendet wurden. Die Datenschutzerkl{"\u00e4"}rung soll sowohl f{"\u00fc"}r die {"\u00d6"}ffentlichkeit als
            auch f{"\u00fc"}r Kunden und Gesch{"\u00e4"}ftspartner einfach lesbar und verst{"\u00e4"}ndlich sein. Um dies
            zu gew{"\u00e4"}hrleisten, m{"\u00f6"}chten wir vorab die verwendeten Begrifflichkeiten erl{"\u00e4"}utern.
          </p>
          <p>Wir verwenden in dieser Datenschutzerkl{"\u00e4"}rung unter anderem die folgenden Begriffe:</p>

          <div className="space-y-4 pl-4">
            <div>
              <p className="font-semibold text-foreground">a) personenbezogene Daten</p>
              <p>
                Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
                nat{"\u00fc"}rliche Person (im Folgenden {"\u201e"}betroffene Person{"\u201c"}) beziehen. Als
                identifizierbar wird eine nat{"\u00fc"}rliche Person angesehen, die direkt oder indirekt, insbesondere
                mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer
                Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen,
                physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identit{"\u00e4"}t
                dieser nat{"\u00fc"}rlichen Person sind, identifiziert werden kann.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">b) betroffene Person</p>
              <p>
                Betroffene Person ist jede identifizierte oder identifizierbare nat{"\u00fc"}rliche Person, deren
                personenbezogene Daten von dem f{"\u00fc"}r die Verarbeitung Verantwortlichen verarbeitet werden.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">c) Verarbeitung</p>
              <p>
                Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgef{"\u00fc"}hrte Vorgang oder jede
                solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die
                Organisation, das Ordnen, die Speicherung, die Anpassung oder Ver{"\u00e4"}nderung, das Auslesen, das
                Abfragen, die Verwendung, die Offenlegung durch {"\u00dc"}bermittlung, Verbreitung oder eine andere Form
                der Bereitstellung, den Abgleich oder die Verkn{"\u00fc"}pfung, die Einschr{"\u00e4"}nkung, das
                L{"\u00f6"}schen oder die Vernichtung.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">d) Einschr{"\u00e4"}nkung der Verarbeitung</p>
              <p>
                Einschr{"\u00e4"}nkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem
                Ziel, ihre k{"\u00fc"}nftige Verarbeitung einzuschr{"\u00e4"}nken.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">e) Profiling</p>
              <p>
                Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass
                diese personenbezogenen Daten verwendet werden, um bestimmte pers{"\u00f6"}nliche Aspekte, die sich auf
                eine nat{"\u00fc"}rliche Person beziehen, zu bewerten, insbesondere, um Aspekte bez{"\u00fc"}glich
                Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, pers{"\u00f6"}nlicher Vorlieben, Interessen,
                Zuverl{"\u00e4"}ssigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser nat{"\u00fc"}rlichen Person zu
                analysieren oder vorherzusagen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">f) Pseudonymisierung</p>
              <p>
                Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die
                personenbezogenen Daten ohne Hinzuziehung zus{"\u00e4"}tzlicher Informationen nicht mehr einer spezifischen
                betroffenen Person zugeordnet werden k{"\u00f6"}nnen, sofern diese zus{"\u00e4"}tzlichen Informationen
                gesondert aufbewahrt werden und technischen und organisatorischen Ma{"\u00df"}nahmen unterliegen, die
                gew{"\u00e4"}hrleisten, dass die personenbezogenen Daten nicht einer identifizierten oder
                identifizierbaren nat{"\u00fc"}rlichen Person zugewiesen werden.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">g) Verantwortlicher oder f{"\u00fc"}r die Verarbeitung Verantwortlicher</p>
              <p>
                Verantwortlicher oder f{"\u00fc"}r die Verarbeitung Verantwortlicher ist die nat{"\u00fc"}rliche oder
                juristische Person, Beh{"\u00f6"}rde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen
                {"\u00fc"}ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die
                Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben,
                so kann der Verantwortliche beziehungsweise k{"\u00f6"}nnen die bestimmten Kriterien seiner Benennung nach
                dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">h) Auftragsverarbeiter</p>
              <p>
                Auftragsverarbeiter ist eine nat{"\u00fc"}rliche oder juristische Person, Beh{"\u00f6"}rde, Einrichtung
                oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">i) Empf{"\u00e4"}nger</p>
              <p>
                Empf{"\u00e4"}nger ist eine nat{"\u00fc"}rliche oder juristische Person, Beh{"\u00f6"}rde, Einrichtung
                oder andere Stelle, der personenbezogene Daten offengelegt werden, unabh{"\u00e4"}ngig davon, ob es sich
                bei ihr um einen Dritten handelt oder nicht. Beh{"\u00f6"}rden, die im Rahmen eines bestimmten
                Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten m{"\u00f6"}glicherweise
                personenbezogene Daten erhalten, gelten jedoch nicht als Empf{"\u00e4"}nger.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">j) Dritter</p>
              <p>
                Dritter ist eine nat{"\u00fc"}rliche oder juristische Person, Beh{"\u00f6"}rde, Einrichtung oder andere
                Stelle au{"\u00df"}er der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den
                Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters
                befugt sind, die personenbezogenen Daten zu verarbeiten.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">k) Einwilligung</p>
              <p>
                Einwilligung ist jede von der betroffenen Person freiwillig f{"\u00fc"}r den bestimmten Fall in informierter
                Weise und unmissverst{"\u00e4"}ndlich abgegebene Willensbekundung in Form einer Erkl{"\u00e4"}rung oder
                einer sonstigen eindeutigen best{"\u00e4"}tigenden Handlung, mit der die betroffene Person zu verstehen
                gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
              </p>
            </div>
          </div>

          {/* 2. Name und Anschrift */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            2. Name und Anschrift des f{"\u00fc"}r die Verarbeitung Verantwortlichen
          </h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der
            Europ{"\u00e4"}ischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem
            Charakter ist die:
          </p>
          <p>
            Marcel Vogel<br />
            Hauptstra{"\u00df"}e 34<br />
            96117 Memmelsdorf<br />
            Deutschland<br /><br />
            Tel.: 017624544505<br />
            E-Mail: marcel.vogel.maler@gmail.com<br />
            Website: vogelmarcel.de
          </p>

          {/* 3. Cookies */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">3. Cookies</h2>
          <p>
            Die Internetseiten der Marcel Vogel verwenden Cookies. Cookies sind Textdateien, welche {"\u00fc"}ber einen
            Internetbrowser auf einem Computersystem abgelegt und gespeichert werden.
          </p>
          <p>
            Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine
            Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche
            Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden k{"\u00f6"}nnen, in dem das Cookie
            gespeichert wurde. Dies erm{"\u00f6"}glicht es den besuchten Internetseiten und Servern, den individuellen
            Browser der betroffenen Person von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden. Ein
            bestimmter Internetbrowser kann {"\u00fc"}ber die eindeutige Cookie-ID wiedererkannt und identifiziert werden.
          </p>
          <p>
            Durch den Einsatz von Cookies kann die Marcel Vogel den Nutzern dieser Internetseite nutzerfreundlichere
            Services bereitstellen, die ohne die Cookie-Setzung nicht m{"\u00f6"}glich w{"\u00e4"}ren.
          </p>
          <p>
            Mittels eines Cookies k{"\u00f6"}nnen die Informationen und Angebote auf der Internetseite im Sinne des
            Benutzers optimiert werden. Cookies erm{"\u00f6"}glichen, die Benutzer der Internetseite wiederzuerkennen.
            Zweck dieser Wiedererkennung ist es, den Nutzern die Verwendung der Internetseite zu erleichtern. Der Benutzer
            einer Internetseite, die Cookies verwendet, muss beispielsweise nicht bei jedem Besuch der Internetseite erneut
            seine Zugangsdaten eingeben, weil dies von der Internetseite und dem auf dem Computersystem des Benutzers
            abgelegten Cookie {"\u00fc"}bernommen wird.
          </p>
          <p>
            Die betroffene Person kann die Setzung von Cookies durch die Internetseite jederzeit mittels einer
            entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft
            widersprechen. Ferner k{"\u00f6"}nnen bereits gesetzte Cookies jederzeit {"\u00fc"}ber einen Internetbrowser
            oder andere Softwareprogramme gel{"\u00f6"}scht werden. Dies ist in allen g{"\u00e4"}ngigen Internetbrowsern
            m{"\u00f6"}glich. Deaktiviert die betroffene Person die Setzung von Cookies in dem genutzten Internetbrowser,
            sind unter Umst{"\u00e4"}nden nicht alle Funktionen der Internetseite vollumf{"\u00e4"}nglich nutzbar.
          </p>

          {/* 4. Erfassung von allgemeinen Daten und Informationen */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            4. Erfassung von allgemeinen Daten und Informationen
          </h2>
          <p>
            Die Internetseite der Marcel Vogel erfasst mit jedem Aufruf der Internetseite durch eine betroffene Person oder
            ein automatisiertes System eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und
            Informationen werden in den Logfiles des Servers gespeichert. Erfasst werden k{"\u00f6"}nnen die (1) verwendeten
            Browsertypen und Versionen, (2) das vom zugreifenden System verwendete Betriebssystem, (3) die Internetseite,
            von welcher ein zugreifendes System auf die Internetseite gelangt (sogenannte Referrer), (4) die
            Unterwebseiten, welche {"\u00fc"}ber ein zugreifendes System auf der Internetseite angesteuert werden, (5) das
            Datum und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse),
            (7) der Internet-Service-Provider des zugreifenden Systems und (8) sonstige {"\u00e4"}hnliche Daten und
            Informationen, die der Gefahrenabwehr im Falle von Angriffen auf die informationstechnologischen Systeme dienen.
          </p>
          <p>
            Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die Marcel Vogel keine R{"\u00fc"}ckschl
            {"\u00fc"}sse auf die betroffene Person. Diese Informationen werden vielmehr ben{"\u00f6"}tigt, um (1) die
            Inhalte der Internetseite korrekt auszuliefern, (2) die Inhalte der Internetseite sowie die Werbung f{"\u00fc"}r
            diese zu optimieren, (3) die dauerhafte Funktionsf{"\u00e4"}higkeit der informationstechnologischen Systeme und
            der Technik der Internetseite zu gew{"\u00e4"}hrleisten sowie (4) um Strafverfolgungsbeh{"\u00f6"}rden im Falle
            eines Cyberangriffes die zur Strafverfolgung notwendigen Informationen bereitzustellen. Diese anonym erhobenen
            Daten und Informationen werden daher einerseits statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz
            und die Datensicherheit zu erh{"\u00f6"}hen, um letztlich ein optimales Schutzniveau f{"\u00fc"}r die
            verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen Daten der Server-Logfiles werden getrennt
            von allen durch eine betroffene Person angegebenen personenbezogenen Daten gespeichert.
          </p>

          {/* 5. Kontaktmöglichkeit */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            5. Kontaktm{"\u00f6"}glichkeit {"\u00fc"}ber die Internetseite
          </h2>
          <p>
            Die Internetseite der Marcel Vogel enth{"\u00e4"}lt aufgrund von gesetzlichen Vorschriften Angaben, die eine
            schnelle elektronische Kontaktaufnahme erm{"\u00f6"}glichen sowie eine unmittelbare Kommunikation, was
            ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine
            betroffene Person per E-Mail oder {"\u00fc"}ber ein Kontaktformular den Kontakt mit dem f{"\u00fc"}r die
            Verarbeitung Verantwortlichen aufnimmt, werden die von der betroffenen Person {"\u00fc"}bermittelten
            personenbezogenen Daten automatisch gespeichert. Solche auf freiwilliger Basis von einer betroffenen Person an
            den f{"\u00fc"}r die Verarbeitung Verantwortlichen {"\u00fc"}bermittelten personenbezogenen Daten werden
            f{"\u00fc"}r Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt
            keine Weitergabe dieser personenbezogenen Daten an Dritte.
          </p>

          {/* 6. Routinemäßige Löschung */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            6. Routinem{"\u00e4"}{"\u00df"}ige L{"\u00f6"}schung und Sperrung von personenbezogenen Daten
          </h2>
          <p>
            Der f{"\u00fc"}r die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der
            betroffenen Person nur f{"\u00fc"}r den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist
            oder sofern dies durch den Europ{"\u00e4"}ischen Richtlinien- und Verordnungsgeber oder einen anderen
            Gesetzgeber in Gesetzen oder Vorschriften, welchen der f{"\u00fc"}r die Verarbeitung Verantwortliche unterliegt,
            vorgesehen wurde.
          </p>
          <p>
            Entf{"\u00e4"}llt der Speicherungszweck oder l{"\u00e4"}uft eine vom Europ{"\u00e4"}ischen Richtlinien- und
            Verordnungsgeber oder einem anderen zust{"\u00e4"}ndigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden
            die personenbezogenen Daten routinem{"\u00e4"}{"\u00df"}ig und entsprechend den gesetzlichen Vorschriften
            gesperrt oder gel{"\u00f6"}scht.
          </p>

          {/* 7. Rechte der betroffenen Person */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">7. Rechte der betroffenen Person</h2>

          <div className="space-y-6 pl-4">
            <div>
              <p className="font-semibold text-foreground">a) Recht auf Best{"\u00e4"}tigung</p>
              <p>
                Jede betroffene Person hat das vom Europ{"\u00e4"}ischen Richtlinien- und Verordnungsgeber einger{"\u00e4"}umte
                Recht, von dem f{"\u00fc"}r die Verarbeitung Verantwortlichen eine Best{"\u00e4"}tigung dar{"\u00fc"}ber zu
                verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. M{"\u00f6"}chte eine betroffene
                Person dieses Best{"\u00e4"}tigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen
                Mitarbeiter des f{"\u00fc"}r die Verarbeitung Verantwortlichen wenden.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">b) Recht auf Auskunft</p>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ{"\u00e4"}ischen
                Richtlinien- und Verordnungsgeber gew{"\u00e4"}hrte Recht, jederzeit von dem f{"\u00fc"}r die Verarbeitung
                Verantwortlichen unentgeltliche Auskunft {"\u00fc"}ber die zu seiner Person gespeicherten personenbezogenen
                Daten und eine Kopie dieser Auskunft zu erhalten. Ferner hat der Europ{"\u00e4"}ische Richtlinien- und
                Verordnungsgeber der betroffenen Person Auskunft {"\u00fc"}ber folgende Informationen zugestanden:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>die Verarbeitungszwecke</li>
                <li>die Kategorien personenbezogener Daten, die verarbeitet werden</li>
                <li>die Empf{"\u00e4"}nger oder Kategorien von Empf{"\u00e4"}ngern, gegen{"\u00fc"}ber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden</li>
                <li>falls m{"\u00f6"}glich die geplante Dauer, f{"\u00fc"}r die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht m{"\u00f6"}glich ist, die Kriterien f{"\u00fc"}r die Festlegung dieser Dauer</li>
                <li>das Bestehen eines Rechts auf Berichtigung oder L{"\u00f6"}schung der sie betreffenden personenbezogenen Daten oder auf Einschr{"\u00e4"}nkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung</li>
                <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbeh{"\u00f6"}rde</li>
                <li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden: Alle verf{"\u00fc"}gbaren Informationen {"\u00fc"}ber die Herkunft der Daten</li>
                <li>das Bestehen einer automatisierten Entscheidungsfindung einschlie{"\u00df"}lich Profiling gem{"\u00e4"}{"\u00df"} Artikel 22 Abs.1 und 4 DS-GVO</li>
              </ul>
              <p className="mt-2">
                M{"\u00f6"}chte eine betroffene Person dieses Auskunftsrecht in Anspruch nehmen, kann sie sich hierzu
                jederzeit an einen Mitarbeiter des f{"\u00fc"}r die Verarbeitung Verantwortlichen wenden.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">c) Recht auf Berichtigung</p>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ{"\u00e4"}ischen
                Richtlinien- und Verordnungsgeber gew{"\u00e4"}hrte Recht, die unverz{"\u00fc"}gliche Berichtigung sie
                betreffender unrichtiger personenbezogener Daten zu verlangen. Ferner steht der betroffenen Person das
                Recht zu, unter Ber{"\u00fc"}cksichtigung der Zwecke der Verarbeitung, die Vervollst{"\u00e4"}ndigung
                unvollst{"\u00e4"}ndiger personenbezogener Daten {"\u2014"} auch mittels einer erg{"\u00e4"}nzenden
                Erkl{"\u00e4"}rung {"\u2014"} zu verlangen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">d) Recht auf L{"\u00f6"}schung (Recht auf Vergessen werden)</p>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ{"\u00e4"}ischen
                Richtlinien- und Verordnungsgeber gew{"\u00e4"}hrte Recht, von dem Verantwortlichen zu verlangen, dass die
                sie betreffenden personenbezogenen Daten unverz{"\u00fc"}glich gel{"\u00f6"}scht werden, sofern einer der
                folgenden Gr{"\u00fc"}nde zutrifft und soweit die Verarbeitung nicht erforderlich ist:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Die personenbezogenen Daten wurden f{"\u00fc"}r solche Zwecke erhoben oder auf sonstige Weise verarbeitet, f{"\u00fc"}r welche sie nicht mehr notwendig sind.</li>
                <li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gem{"\u00e4"}{"\u00df"} Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO st{"\u00fc"}tzte, und es fehlt an einer anderweitigen Rechtsgrundlage f{"\u00fc"}r die Verarbeitung.</li>
                <li>Die betroffene Person legt gem{"\u00e4"}{"\u00df"} Art. 21 Abs. 1 DS-GVO Widerspruch gegen die Verarbeitung ein, und es liegen keine vorrangigen berechtigten Gr{"\u00fc"}nde f{"\u00fc"}r die Verarbeitung vor.</li>
                <li>Die personenbezogenen Daten wurden unrechtm{"\u00e4"}{"\u00df"}ig verarbeitet.</li>
                <li>Die L{"\u00f6"}schung der personenbezogenen Daten ist zur Erf{"\u00fc"}llung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich.</li>
                <li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gem{"\u00e4"}{"\u00df"} Art. 8 Abs. 1 DS-GVO erhoben.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">e) Recht auf Einschr{"\u00e4"}nkung der Verarbeitung</p>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ{"\u00e4"}ischen
                Richtlinien- und Verordnungsgeber gew{"\u00e4"}hrte Recht, von dem Verantwortlichen die Einschr{"\u00e4"}nkung
                der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Die Richtigkeit der personenbezogenen Daten wird von der betroffenen Person bestritten, und zwar f{"\u00fc"}r eine Dauer, die es dem Verantwortlichen erm{"\u00f6"}glicht, die Richtigkeit der personenbezogenen Daten zu {"\u00fc"}berpr{"\u00fc"}fen.</li>
                <li>Die Verarbeitung ist unrechtm{"\u00e4"}{"\u00df"}ig, die betroffene Person lehnt die L{"\u00f6"}schung der personenbezogenen Daten ab und verlangt stattdessen die Einschr{"\u00e4"}nkung der Nutzung der personenbezogenen Daten.</li>
                <li>Der Verantwortliche ben{"\u00f6"}tigt die personenbezogenen Daten f{"\u00fc"}r die Zwecke der Verarbeitung nicht l{"\u00e4"}nger, die betroffene Person ben{"\u00f6"}tigt sie jedoch zur Geltendmachung, Aus{"\u00fc"}bung oder Verteidigung von Rechtsanspr{"\u00fc"}chen.</li>
                <li>Die betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art. 21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die berechtigten Gr{"\u00fc"}nde des Verantwortlichen gegen{"\u00fc"}ber denen der betroffenen Person {"\u00fc"}berwiegen.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">f) Recht auf Daten{"\u00fc"}bertragbarkeit</p>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ{"\u00e4"}ischen
                Richtlinien- und Verordnungsgeber gew{"\u00e4"}hrte Recht, die sie betreffenden personenbezogenen Daten,
                welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten,
                g{"\u00e4"}ngigen und maschinenlesbaren Format zu erhalten. Sie hat au{"\u00df"}erdem das Recht, diese Daten
                einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten
                bereitgestellt wurden, zu {"\u00fc"}bermitteln, sofern die Verarbeitung auf der Einwilligung gem{"\u00e4"}
                {"\u00df"} Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag
                gem{"\u00e4"}{"\u00df"} Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die Verarbeitung mithilfe
                automatisierter Verfahren erfolgt.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">g) Recht auf Widerspruch</p>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ{"\u00e4"}ischen
                Richtlinien- und Verordnungsgeber gew{"\u00e4"}hrte Recht, aus Gr{"\u00fc"}nden, die sich aus ihrer
                besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die
                aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch
                f{"\u00fc"}r ein auf diese Bestimmungen gest{"\u00fc"}tztes Profiling.
              </p>
              <p className="mt-2">
                Die Marcel Vogel verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei denn,
                es k{"\u00f6"}nnen zwingende schutzw{"\u00fc"}rdige Gr{"\u00fc"}nde f{"\u00fc"}r die Verarbeitung
                nachgewiesen werden, die den Interessen, Rechten und Freiheiten der betroffenen Person {"\u00fc"}berwiegen,
                oder die Verarbeitung dient der Geltendmachung, Aus{"\u00fc"}bung oder Verteidigung von
                Rechtsanspr{"\u00fc"}chen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">h) Automatisierte Entscheidungen im Einzelfall einschlie{"\u00df"}lich Profiling</p>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ{"\u00e4"}ischen
                Richtlinien- und Verordnungsgeber gew{"\u00e4"}hrte Recht, nicht einer ausschlie{"\u00df"}lich auf einer
                automatisierten Verarbeitung {"\u2014"} einschlie{"\u00df"}lich Profiling {"\u2014"} beruhenden Entscheidung
                unterworfen zu werden, die ihr gegen{"\u00fc"}ber rechtliche Wirkung entfaltet oder sie in {"\u00e4"}hnlicher
                Weise erheblich beeintr{"\u00e4"}chtigt.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</p>
              <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europ{"\u00e4"}ischen
                Richtlinien- und Verordnungsgeber gew{"\u00e4"}hrte Recht, eine Einwilligung zur Verarbeitung
                personenbezogener Daten jederzeit zu widerrufen.
              </p>
            </div>
          </div>

          {/* 8. Rechtsgrundlage */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">8. Rechtsgrundlage der Verarbeitung</h2>
          <p>
            Art. 6 I lit. a DS-GVO dient als Rechtsgrundlage f{"\u00fc"}r Verarbeitungsvorg{"\u00e4"}nge, bei denen eine
            Einwilligung f{"\u00fc"}r einen bestimmten Verarbeitungszweck eingeholt wird. Ist die Verarbeitung
            personenbezogener Daten zur Erf{"\u00fc"}llung eines Vertrags, dessen Vertragspartei die betroffene Person ist,
            erforderlich, wie dies beispielsweise bei Verarbeitungsvorg{"\u00e4"}ngen der Fall ist, die f{"\u00fc"}r eine
            Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht
            die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt f{"\u00fc"}r solche Verarbeitungsvorg{"\u00e4"}nge
            die zur Durchf{"\u00fc"}hrung vorvertraglicher Ma{"\u00df"}nahmen erforderlich sind, etwa in F{"\u00e4"}llen von
            Anfragen zu Produkten oder Leistungen. Unterliegt das Unternehmen einer rechtlichen Verpflichtung durch welche
            eine Verarbeitung von personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erf{"\u00fc"}llung
            steuerlicher Pflichten, so basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen F{"\u00e4"}llen
            k{"\u00f6"}nnte die Verarbeitung von personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen
            der betroffenen Person oder einer anderen nat{"\u00fc"}rlichen Person zu sch{"\u00fc"}tzen. Letztlich
            k{"\u00f6"}nnten Verarbeitungsvorg{"\u00e4"}nge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage
            basieren Verarbeitungsvorg{"\u00e4"}nge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn
            die Verarbeitung zur Wahrung eines berechtigten Interesses des Unternehmens oder eines Dritten erforderlich ist,
            sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht {"\u00fc"}berwiegen.
          </p>

          {/* 9. Berechtigte Interessen */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            9. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt werden
          </h2>
          <p>
            Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist das berechtigte Interesse die
            Durchf{"\u00fc"}hrung der Gesch{"\u00e4"}ftst{"\u00e4"}tigkeit zugunsten des Wohlergehens aller Beteiligten.
          </p>

          {/* 10. Dauer der Speicherung */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            10. Dauer, f{"\u00fc"}r die die personenbezogenen Daten gespeichert werden
          </h2>
          <p>
            Das Kriterium f{"\u00fc"}r die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche
            Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinem{"\u00e4"}{"\u00df"}ig
            gel{"\u00f6"}scht, sofern sie nicht mehr zur Vertragserf{"\u00fc"}llung oder Vertragsanbahnung erforderlich sind.
          </p>

          {/* 11. Gesetzliche Vorschriften */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            11. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten
          </h2>
          <p>
            Wir kl{"\u00e4"}ren Sie dar{"\u00fc"}ber auf, dass die Bereitstellung personenbezogener Daten zum Teil
            gesetzlich vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B.
            Angaben zum Vertragspartner) ergeben kann. Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass
            eine betroffene Person personenbezogene Daten zur Verf{"\u00fc"}gung stellt, die in der Folge verarbeitet werden
            m{"\u00fc"}ssen. Die betroffene Person ist beispielsweise verpflichtet personenbezogene Daten bereitzustellen,
            wenn das Unternehmen mit ihr einen Vertrag abschlie{"\u00df"}t. Eine Nichtbereitstellung der personenbezogenen
            Daten h{"\u00e4"}tte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden k{"\u00f6"}nnte.
          </p>

          {/* 12. Automatisierte Entscheidungsfindung */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
            12. Bestehen einer automatisierten Entscheidungsfindung
          </h2>
          <p>
            Als verantwortungsbewusstes Unternehmen verzichtet Marcel Vogel auf eine automatische Entscheidungsfindung oder
            ein Profiling.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-foreground-muted/60 text-sm">
              Diese Datenschutzerkl{"\u00e4"}rung wurde durch den Datenschutzerkl{"\u00e4"}rungs-Generator der DGD Deutsche
              Gesellschaft f{"\u00fc"}r Datenschutz GmbH, die als Externer Datenschutzbeauftragter Stuttgart t{"\u00e4"}tig
              ist, in Kooperation mit dem K{"\u00f6"}lner Datenschutz Anwalt Christian Solmecke erstellt.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
