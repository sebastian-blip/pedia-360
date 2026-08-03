import type { Lead } from "../../types/lead";
import { systemeRequest } from "./client";

const TAG_ID = Number(import.meta.env.SYSTEME_TAG_ID_WEBINAR);

interface SystemeContact {
  id: number;
  email: string;
}

export async function createContact(
  lead: Lead,
): Promise<SystemeContact> {
  return systemeRequest<SystemeContact>("/contacts", {
    method: "POST",
    body: JSON.stringify({
      email: lead.email,
      fields: [
        {
          slug: "first_name",
          value: lead.firstname,
        },
        {
          slug: "surname",
          value: lead.lastname,
        },
      ],
    }),
  });
}

export async function addTag(contactId: number) {
  return systemeRequest(
    `/contacts/${contactId}/tags`,
    {
      method: "POST",
      body: JSON.stringify({
        tagId: TAG_ID,
      }),
    },
  );
}