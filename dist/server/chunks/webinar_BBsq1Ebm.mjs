const BASE_URL = "https://api.systeme.io/api";
const API_KEY = "vrxtoesi5lkm5peb206tyyhr3buxs9zswb85bln6ymfzkwtzy8yxacyc4rxc4m5d";
async function systemeRequest(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "X-API-Key": API_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers
    }
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }
  const text = await response.text();
  if (!text) {
    return {};
  }
  return JSON.parse(text);
}

const TAG_ID = Number("2116590");
async function createContact(lead) {
  return systemeRequest("/contacts", {
    method: "POST",
    body: JSON.stringify({
      email: lead.email,
      fields: [
        {
          slug: "first_name",
          value: lead.firstname
        },
        {
          slug: "surname",
          value: lead.lastname
        }
      ]
    })
  });
}
async function addTag(contactId) {
  return systemeRequest(
    `/contacts/${contactId}/tags`,
    {
      method: "POST",
      body: JSON.stringify({
        tagId: TAG_ID
      })
    }
  );
}

const POST = async ({ request, redirect }) => {
  try {
    const form = await request.formData();
    const origin = request.headers.get("origin");
    if (origin && origin !== "https://pedia-360.com" && origin !== "https://www.pedia-360.com") {
      return new Response("Forbidden", {
        status: 403
      });
    }
    const website = form.get("website")?.toString().trim();
    if (website) {
      return Response.json({ success: true });
    }
    const firstname = form.get("name")?.toString().trim();
    const lastname = form.get("lastname")?.toString().trim();
    const email = form.get("email")?.toString().trim().toLowerCase();
    if (!firstname || !lastname || !email) {
      return new Response("Todos los campos son obligatorios.", {
        status: 400
      });
    }
    const contact = await createContact({
      firstname,
      lastname,
      email
    });
    await addTag(contact.id);
    return redirect("/welcome-webinar", 302);
  } catch (error) {
    console.error(error);
    return new Response("Ocurrió un error al registrar el webinar.", {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
