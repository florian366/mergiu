(function () {
  const headings = {
    '← Zur Startseite': ['← Back to home page', '← Retour à l’accueil', '← Volver a la página de inicio'],
    'Datenschutzerklärung': ['Privacy Policy', 'Politique de confidentialité', 'Política de privacidad'],
    'Stand: November 2026': ['Version: November 2026', 'Version : novembre 2026', 'Versión: noviembre de 2026'],
    '1. Verantwortlicher': ['1. Controller', '1. Responsable du traitement', '1. Responsable del tratamiento'],
    '2. Allgemeine Hinweise zur Datenverarbeitung': ['2. General information on data processing', '2. Informations générales sur le traitement des données', '2. Información general sobre el tratamiento de datos'],
    '3. Aufruf unserer Website und Server-Logfiles': ['3. Accessing our website and server log files', '3. Consultation de notre site et fichiers journaux du serveur', '3. Acceso a nuestro sitio web y archivos de registro del servidor'],
    '4. Kontaktaufnahme und allgemeine Anfragen': ['4. Contacting us and general enquiries', '4. Prise de contact et demandes générales', '4. Contacto y consultas generales'],
    '5. Vorstellung eines Unternehmens zur Nachfolgesuche': ['5. Presenting a company for a succession search', '5. Présentation d’une entreprise en vue d’une recherche de repreneur', '5. Presentación de una empresa para la búsqueda de sucesión'],
    '5.1 Welche Daten werden erhoben?': ['5.1 What data are collected?', '5.1 Quelles données sont collectées ?', '5.1 ¿Qué datos se recaban?'],
    '5.2 Zu welchen Zwecken werden die Daten verarbeitet?': ['5.2 For what purposes are the data processed?', '5.2 À quelles fins les données sont-elles traitées ?', '5.2 ¿Con qué fines se tratan los datos?'],
    '5.3 Rechtsgrundlage der Verarbeitung': ['5.3 Legal basis for processing', '5.3 Base juridique du traitement', '5.3 Base jurídica del tratamiento'],
    '5.4 Vertraulichkeit Ihrer Unternehmensdaten': ['5.4 Confidentiality of your company data', '5.4 Confidentialité de vos données d’entreprise', '5.4 Confidencialidad de los datos de su empresa'],
    '5.5 Empfänger und Weitergabe von Daten': ['5.5 Recipients and disclosure of data', '5.5 Destinataires et transmission des données', '5.5 Destinatarios y divulgación de datos'],
    '5.6 Speicherdauer': ['5.6 Retention period', '5.6 Durée de conservation', '5.6 Plazo de conservación'],
    '6. Google Analytics': ['6. Google Analytics', '6. Google Analytics', '6. Google Analytics'],
    '6.1 Rechtsgrundlage und Einwilligung': ['6.1 Legal basis and consent', '6.1 Base juridique et consentement', '6.1 Base jurídica y consentimiento'],
    '6.2 Datenübermittlung': ['6.2 Data transfers', '6.2 Transfert de données', '6.2 Transferencia de datos'],
    '6.3 Keine Übermittlung von Formularinhalten an Google Analytics': ['6.3 No transfer of form contents to Google Analytics', '6.3 Aucun transfert du contenu des formulaires à Google Analytics', '6.3 No se transmite el contenido de formularios a Google Analytics'],
    '7. Google Search Console': ['7. Google Search Console', '7. Google Search Console', '7. Google Search Console'],
    '8. Cookies und ähnliche Technologien': ['8. Cookies and similar technologies', '8. Cookies et technologies similaires', '8. Cookies y tecnologías similares'],
    'Technisch erforderliche Cookies': ['Technically necessary cookies', 'Cookies techniquement nécessaires', 'Cookies técnicamente necesarios'],
    'Statistik- und Analyse-Cookies': ['Statistics and analytics cookies', 'Cookies statistiques et d’analyse', 'Cookies de estadísticas y análisis'],
    '9. Empfänger und Auftragsverarbeitung': ['9. Recipients and processing on behalf', '9. Destinataires et sous-traitance', '9. Destinatarios y tratamiento por cuenta ajena'],
    '10. Datenübermittlung in Drittländer': ['10. Data transfers to third countries', '10. Transfert de données vers des pays tiers', '10. Transferencia de datos a terceros países'],
    '11. Datensicherheit': ['11. Data security', '11. Sécurité des données', '11. Seguridad de los datos'],
    '12. Ihre Rechte als betroffene Person': ['12. Your rights as a data subject', '12. Vos droits en tant que personne concernée', '12. Sus derechos como interesado'],
    'Recht auf Auskunft (Art. 15 DSGVO)': ['Right of access (Art. 15 GDPR)', 'Droit d’accès (art. 15 RGPD)', 'Derecho de acceso (art. 15 RGPD)'],
    'Recht auf Berichtigung (Art. 16 DSGVO)': ['Right to rectification (Art. 16 GDPR)', 'Droit de rectification (art. 16 RGPD)', 'Derecho de rectificación (art. 16 RGPD)'],
    'Recht auf Löschung (Art. 17 DSGVO)': ['Right to erasure (Art. 17 GDPR)', 'Droit à l’effacement (art. 17 RGPD)', 'Derecho de supresión (art. 17 RGPD)'],
    'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)': ['Right to restriction of processing (Art. 18 GDPR)', 'Droit à la limitation du traitement (art. 18 RGPD)', 'Derecho a la limitación del tratamiento (art. 18 RGPD)'],
    'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)': ['Right to data portability (Art. 20 GDPR)', 'Droit à la portabilité des données (art. 20 RGPD)', 'Derecho a la portabilidad de los datos (art. 20 RGPD)'],
    'Widerspruchsrecht (Art. 21 DSGVO)': ['Right to object (Art. 21 GDPR)', 'Droit d’opposition (art. 21 RGPD)', 'Derecho de oposición (art. 21 RGPD)'],
    'Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)': ['Right to withdraw consent (Art. 7(3) GDPR)', 'Droit de retirer son consentement (art. 7, par. 3, RGPD)', 'Derecho a retirar el consentimiento (art. 7.3 RGPD)'],
    '13. Beschwerderecht bei einer Datenschutzaufsichtsbehörde': ['13. Right to lodge a complaint with a data protection supervisory authority', '13. Droit d’introduire une réclamation auprès d’une autorité de contrôle de la protection des données', '13. Derecho a presentar una reclamación ante una autoridad de control de protección de datos'],
    '14. Keine automatisierte Entscheidungsfindung': ['14. No automated decision-making', '14. Absence de décision automatisée', '14. No se adoptan decisiones automatizadas'],
    '15. Änderungen dieser Datenschutzerklärung': ['15. Changes to this Privacy Policy', '15. Modifications de la présente politique de confidentialité', '15. Cambios en esta Política de privacidad']
  };

  const localized = (index) => Object.fromEntries(Object.entries(headings).map(([source, values]) => [source, values[index]]));

  window.mergiuTranslate({
    en: {
      title: 'Privacy Policy | MERGIU',
      description: 'MERGIU privacy policy on the processing of personal data when visiting the website, contacting us and presenting a company.',
      text: localized(0)
    },
    fr: {
      title: 'Politique de confidentialité | MERGIU',
      description: 'Politique de confidentialité de MERGIU concernant le traitement des données personnelles lors de la visite du site, de la prise de contact et de la présentation d’une entreprise.',
      text: localized(1)
    },
    es: {
      title: 'Política de privacidad | MERGIU',
      description: 'Política de privacidad de MERGIU sobre el tratamiento de datos personales al visitar el sitio web, contactar con nosotros y presentar una empresa.',
      text: localized(2)
    }
  });
})();
