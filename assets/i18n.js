/* ============================================================
   TEXTOS DE LA WEB (ES / EN)
   ------------------------------------------------------------
   Todo lo que se lee en la página está aquí. En el HTML, cada
   elemento traducible lleva  data-i18n="clave"  y el selector de
   idioma sustituye su contenido con el valor de este diccionario.
   El contenido de los 9 módulos vive aparte, en assets/modules.js.
   ============================================================ */

const I18N = {
  es: {
    /* ---- Navegación ---- */
    nav_home:'Inicio',
    nav_modules:'Qué es',
    nav_features:'Funcionalidades',
    nav_why:'Por qué',
    nav_novedades:'Novedades',
    nav_contact:'Contacto',
    nav_demo:'Solicitar demo',

    /* ---- Hero ---- */
    hero_tag:'💬 Suite omnicanal de atención al cliente',
    hero_title1:'Chat CRM',
    hero_title2:'toda la conversación, en un panel',
    hero_p:'Bandeja compartida, chatbots con IA, tickets, base de conocimiento y campañas de WhatsApp. Nueve módulos que sustituyen a varias herramientas sueltas.',
    hero_btn1:'Solicitar demo',
    hero_btn2:'Ver funcionalidades',
    hero_stat1:'módulos en una sola plataforma',
    hero_stat2:'canales de mensajería',
    hero_stat3:'proveedor de IA: el que tú elijas',
    hero_scroll:'Scroll',

    /* ---- Qué es ---- */
    mod_eyebrow:'Qué es Chat CRM',
    mod_title1:'Todo en un solo',
    mod_title2:'panel',
    mod_p:'Una sola plataforma para toda la conversación con el cliente: nueve módulos que sustituyen a varias herramientas sueltas.',

    /* ---- Funcionalidades ---- */
    feat_eyebrow:'Funcionalidades',
    feat_title1:'El detalle de cada',
    feat_title2:'módulo',
    feat_p:'Elige un módulo para ver qué incluye.',

    /* ---- Por qué ---- */
    why_eyebrow:'Argumentos de venta',
    why_title1:'Por qué',
    why_title2:'Chat CRM',
    why_p:'Lo que conviene destacar ante cada cliente.',
    why1_t:'Todo en uno',
    why1_p:'Chat, bandeja multicanal, tickets, centro de ayuda, bots y campañas en una sola herramienta.',
    why2_t:'IA sin ataduras',
    why2_p:'El cliente elige su proveedor de IA y paga su consumo directamente, sin sobrecostes.',
    why3_t:'Canales sin límite',
    why3_p:'Cobertura muy amplia, incluidos mercados asiáticos, y canal API para cualquier otro.',
    why4_t:'Sin código',
    why4_p:'Bots, flujos y widget se configuran sin programar e instalan en minutos.',

    /* ---- Afiliados ---- */
    aff_eyebrow:'Listo para promocionar',
    aff_title1:'Programa de',
    aff_title2:'afiliados',
    aff_p:'Chat CRM se puede recomendar y revender. Si quieres el informe de producto completo o las condiciones del programa, escríbenos y te lo enviamos.',
    aff_btn:'Quiero las condiciones',

    /* ---- Contacto ---- */
    contact_eyebrow:'Hablemos',
    contact_title1:'Pruébalo con',
    contact_title2:'tu propio negocio',
    contact_p:'Cuéntanos qué canales atiendes hoy y te preparamos una demo con tu caso real.',
    cta_email:'✉️ Escríbenos',
    cta_whatsapp:'💬 Escribir por WhatsApp',
    cta_web:'🌐 retuertographicdesign.com',
    info_email_label:'Email',
    info_web_label:'Web',
    info_demo_label:'Demo',
    info_demo_text:'Te montamos el widget, un bot de ejemplo y la bandeja con tus canales para que lo pruebes antes de decidir.',
    form_title:'Solicita tu demo',
    form_note:'Rellena el formulario y te respondemos con una propuesta y una fecha para verlo en directo.',
    form_fallback:'Formulario no configurado todavía. Mientras tanto, escríbenos directamente:',

    /* ---- Footer / legal ---- */
    footer_legal:'Aviso legal',
    footer_privacy:'Política de privacidad',
    footer_cookies:'Política de cookies',
    legal_modal_title:'Información legal',
    aviso_p1:'En cumplimiento del deber de información del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se informa de que el titular de este sitio web es Retuerto Graphic Design, NIF [PENDIENTE], con domicilio en C. de Calderón de la Barca, 2, Ofi. 3, 38005 Santa Cruz de Tenerife.',
    aviso_p2:'Retuerto Graphic Design no asume responsabilidad derivada de la falta de veracidad, integridad, actualización o precisión de los datos e informaciones contenidos en estas páginas.',
    aviso_p3:'Los textos, imágenes, logotipo y demás contenidos de este sitio son propiedad de Retuerto Graphic Design o de sus licenciantes. Queda prohibida su reproducción, distribución o comunicación pública sin consentimiento expreso.',
    aviso_p4:'Para acceder a algunos servicios (solicitud de demo, contacto comercial) deberás facilitar datos personales, tratados conforme al Reglamento (UE) 2016/679 (RGPD). Puedes ejercer tus derechos escribiendo a <a href="mailto:info@retuertographicdesign.com">info@retuertographicdesign.com</a> o en la dirección indicada arriba.',
    priv_h1:'Protección de datos según el RGPD',
    priv_p1:'Los datos personales que recogemos a través de los formularios de este sitio web (solicitud de demo y contacto) se incorporan a los ficheros de Retuerto Graphic Design.',
    priv_h2:'¿Con qué finalidad tratamos tus datos?',
    priv_l1:'Gestionar tu solicitud de demo de Chat CRM.',
    priv_l2:'Responder a tus consultas comerciales o de soporte.',
    priv_l3:'Preparar presupuestos y condiciones del programa de afiliados.',
    priv_l4:'Enviarte información comercial, solo si nos has dado tu consentimiento expreso.',
    priv_h3:'¿Por cuánto tiempo los conservamos?',
    priv_p2:'Mientras exista una relación comercial contigo o hasta que solicites su supresión, y durante el plazo en que pudieran derivarse responsabilidades legales.',
    priv_h4:'Legitimación y destinatarios',
    priv_p3:'El tratamiento se basa en tu solicitud de información o demo, y en tu consentimiento expreso cuando corresponda. Tus datos no se ceden a terceros ajenos a Retuerto Graphic Design, salvo obligación legal o proveedores tecnológicos necesarios para prestar el servicio.',
    priv_h5:'Tus derechos',
    priv_p4:'Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, cancelación, oposición, limitación y portabilidad escribiendo a <a href="mailto:info@retuertographicdesign.com">info@retuertographicdesign.com</a> o en C. de Calderón de la Barca, 2, Ofi. 3, 38005 Santa Cruz de Tenerife. También puedes oponerte al envío de comunicaciones comerciales en cualquier momento, por el mismo medio.',
    priv_h6:'Propiedad intelectual',
    priv_p5:'Todos los contenidos de este sitio (textos, imágenes, logotipo) son propiedad de Retuerto Graphic Design o de sus licenciantes y están protegidos por la normativa de propiedad intelectual. Queda prohibido su uso no autorizado.',
    cook_h1:'¿Qué son las cookies?',
    cook_p1:'Las cookies son archivos que se descargan en tu equipo al visitar una página web y permiten almacenar y recuperar información sobre tus hábitos de navegación.',
    cook_h2:'Cookies que utilizamos',
    cook_p2:'Este sitio usa cookies técnicas necesarias para su funcionamiento (por ejemplo, para recordar tu idioma preferido) y puede cargar contenido de terceros, como formularios o el propio widget de Chat CRM, que pueden instalar sus propias cookies.',
    cook_h3:'Tipos de cookies',
    cook_l1:'Cookies propias: gestionadas directamente por Retuerto Graphic Design (p. ej., para recordar tu idioma).',
    cook_l2:'Cookies de terceros: instaladas por servicios externos incrustados en la web (p. ej., formularios o el widget de chat).',
    cook_l3:'Cookies técnicas: necesarias para la navegación y el funcionamiento básico del sitio.',
    cook_l4:'Cookies de personalización: recuerdan tus preferencias, como el idioma.',
    cook_h4:'Cómo gestionar las cookies',
    cook_p3:'Puedes permitir, bloquear o eliminar las cookies desde la configuración de tu navegador (Chrome, Firefox, Safari, Edge, Opera). Bloquear algunas cookies puede afectar al funcionamiento del sitio.',
    cook_h5:'Consentimiento',
    cook_p4:'Al continuar navegando por esta web, aceptas el uso de estas cookies según lo descrito en esta política. Puedes cambiar tu decisión en cualquier momento eliminando las cookies desde tu navegador.',

    /* ---- Novedades ---- */
    novedades_eyebrow:'Últimas noticias',
    novedades_title1:'Lo nuevo en',
    novedades_title2:'Chat CRM',
    novedades_empty:'Todavía no hay novedades publicadas. Vuelve pronto.',
    read_more:'Leer más →',
    post_back:'← Volver a novedades',
    share_label:'Compartir:'
  },

  en: {
    /* ---- Navigation ---- */
    nav_home:'Home',
    nav_modules:'What it is',
    nav_features:'Features',
    nav_why:'Why',
    nav_novedades:'News',
    nav_contact:'Contact',
    nav_demo:'Request a demo',

    /* ---- Hero ---- */
    hero_tag:'💬 Omnichannel customer support suite',
    hero_title1:'Chat CRM',
    hero_title2:'every conversation, one panel',
    hero_p:'Shared inbox, AI chatbots, tickets, knowledge base and WhatsApp campaigns. Nine modules that replace a handful of separate tools.',
    hero_btn1:'Request a demo',
    hero_btn2:'See the features',
    hero_stat1:'modules on a single platform',
    hero_stat2:'messaging channels',
    hero_stat3:'AI provider: the one you choose',
    hero_scroll:'Scroll',

    /* ---- What it is ---- */
    mod_eyebrow:'What Chat CRM is',
    mod_title1:'Everything in one',
    mod_title2:'panel',
    mod_p:'A single platform for the whole customer conversation: nine modules that replace a handful of separate tools.',

    /* ---- Features ---- */
    feat_eyebrow:'Features',
    feat_title1:'Every module,',
    feat_title2:'in detail',
    feat_p:'Pick a module to see what it includes.',

    /* ---- Why ---- */
    why_eyebrow:'Selling points',
    why_title1:'Why',
    why_title2:'Chat CRM',
    why_p:'What is worth highlighting with every client.',
    why1_t:'All in one',
    why1_p:'Chat, multichannel inbox, tickets, help centre, bots and campaigns in a single tool.',
    why2_t:'AI with no strings',
    why2_p:'The client picks their AI provider and pays for usage directly, with no markup.',
    why3_t:'Channels without limits',
    why3_p:'Very broad coverage, Asian markets included, plus an API channel for anything else.',
    why4_t:'No code',
    why4_p:'Bots, flows and the widget are configured without programming and installed in minutes.',

    /* ---- Affiliates ---- */
    aff_eyebrow:'Ready to promote',
    aff_title1:'Affiliate',
    aff_title2:'programme',
    aff_p:'Chat CRM can be recommended and resold. If you want the full product report or the programme terms, write to us and we will send them over.',
    aff_btn:'Send me the terms',

    /* ---- Contact ---- */
    contact_eyebrow:'Let’s talk',
    contact_title1:'Try it with',
    contact_title2:'your own business',
    contact_p:'Tell us which channels you handle today and we will prepare a demo with your real case.',
    cta_email:'✉️ Write to us',
    cta_whatsapp:'💬 Message on WhatsApp',
    cta_web:'🌐 retuertographicdesign.com',
    info_email_label:'Email',
    info_web_label:'Website',
    info_demo_label:'Demo',
    info_demo_text:'We set up the widget, a sample bot and the inbox with your channels so you can try it before deciding.',
    form_title:'Request your demo',
    form_note:'Fill in the form and we will reply with a proposal and a date to see it live.',
    form_fallback:'The form is not configured yet. In the meantime, write to us directly:',

    /* ---- Footer / legal ---- */
    footer_legal:'Legal notice',
    footer_privacy:'Privacy policy',
    footer_cookies:'Cookie policy',
    legal_modal_title:'Legal information',
    aviso_p1:'In compliance with the duty of information under Article 10 of Spanish Law 34/2002 on Information Society and E-commerce Services (LSSICE), this website is owned by Retuerto Graphic Design, Tax ID (NIF) [PENDING], with address at C. de Calderón de la Barca, 2, Ofi. 3, 38005 Santa Cruz de Tenerife, Spain.',
    aviso_p2:'Retuerto Graphic Design accepts no liability arising from a lack of accuracy, completeness, timeliness or precision of the data or information contained on these pages.',
    aviso_p3:'The text, images, logo and other content on this site are the property of Retuerto Graphic Design or its licensors. Reproduction, distribution or public communication without express consent is prohibited.',
    aviso_p4:'To access certain services (demo requests, sales enquiries) you will need to provide personal data, processed in accordance with Regulation (EU) 2016/679 (GDPR). You can exercise your rights by writing to <a href="mailto:info@retuertographicdesign.com">info@retuertographicdesign.com</a> or at the address above.',
    priv_h1:'Data protection under the GDPR',
    priv_p1:'Personal data collected through this website’s forms (demo requests and contact) is included in the files of Retuerto Graphic Design.',
    priv_h2:'What do we use your data for?',
    priv_l1:'Handling your Chat CRM demo request.',
    priv_l2:'Answering your sales or support enquiries.',
    priv_l3:'Preparing quotes and affiliate programme terms.',
    priv_l4:'Sending you commercial information, only if you have given your express consent.',
    priv_h3:'How long do we keep it?',
    priv_p2:'For as long as our business relationship continues or until you request its deletion, and for the period during which legal liabilities could arise.',
    priv_h4:'Legal basis and recipients',
    priv_p3:'Processing is based on your request for information or a demo, and on your express consent where applicable. Your data is not shared with third parties outside Retuerto Graphic Design, except where legally required or with technology providers needed to deliver the service.',
    priv_h5:'Your rights',
    priv_p4:'You can exercise your rights of access, rectification, erasure, objection, restriction and portability at any time by writing to <a href="mailto:info@retuertographicdesign.com">info@retuertographicdesign.com</a> or at C. de Calderón de la Barca, 2, Ofi. 3, 38005 Santa Cruz de Tenerife, Spain. You can also object to receiving commercial communications at any time, through the same channel.',
    priv_h6:'Intellectual property',
    priv_p5:'All content on this site (text, images, logo) is the property of Retuerto Graphic Design or its licensors and is protected under intellectual property law. Unauthorised use is prohibited.',
    cook_h1:'What are cookies?',
    cook_p1:'Cookies are files downloaded to your device when you visit a website, allowing information about your browsing habits to be stored and retrieved.',
    cook_h2:'Cookies we use',
    cook_p2:'This site uses technical cookies necessary for it to work (for example, to remember your preferred language) and may load third-party content, such as forms or the Chat CRM widget itself, which may set their own cookies.',
    cook_h3:'Types of cookies',
    cook_l1:'First-party cookies: managed directly by Retuerto Graphic Design (e.g. to remember your language).',
    cook_l2:'Third-party cookies: set by external services embedded on the site (e.g. forms or the chat widget).',
    cook_l3:'Technical cookies: necessary for browsing and the site’s basic operation.',
    cook_l4:'Personalisation cookies: remember your preferences, such as language.',
    cook_h4:'Managing cookies',
    cook_p3:'You can allow, block or delete cookies through your browser settings (Chrome, Firefox, Safari, Edge, Opera). Blocking some cookies may affect how the site works.',
    cook_h5:'Consent',
    cook_p4:'By continuing to browse this site, you accept the use of these cookies as described in this policy. You can change your decision at any time by deleting cookies from your browser.',

    /* ---- News ---- */
    novedades_eyebrow:'Latest news',
    novedades_title1:'What’s new in',
    novedades_title2:'Chat CRM',
    novedades_empty:'No news posted yet. Check back soon.',
    read_more:'Read more →',
    post_back:'← Back to news',
    share_label:'Share:'
  }
};
