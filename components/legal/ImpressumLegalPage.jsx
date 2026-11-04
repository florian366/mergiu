import LegalPageLayout from './LegalPageLayout';

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum">
      <p>
        <strong>Erklärungen gemäß § 5</strong>
      </p>
      <p>
        VIRALNATION LTD
        <br />
        Georgiou Anastasi, 5 - 202
        <br />
        8021 Paphos, Zypern
      </p>
      <p>
        USt-ID: CY10429630T
        <br />
        E-Mail: <a href="mailto:florian@viralnation.de">florian@viralnation.de</a>
      </p>
      <p>
        <strong>Verantwortlich für die folgenden Inhalte gemäß § 55 Abs. 2 RStV</strong>
        <br />
        VIRALNATION LTD.
      </p>
    </LegalPageLayout>
  );
}
