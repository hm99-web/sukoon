/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Optional webhook that receives every booking as JSON (POST) so nothing is
   * lost if the customer doesn't message on WhatsApp. Point it at a Google
   * Apps Script / Formspree / serverless endpoint that notifies the founder.
   * Leave unset to rely solely on the WhatsApp handoff.
   */
  readonly VITE_BOOKING_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
