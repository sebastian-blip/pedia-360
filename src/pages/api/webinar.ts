import type { APIRoute } from "astro";
import { createContact, addTag } from "../../services/systeme";

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const form = await request.formData();

    // Validar el origen de la petición
    const origin = request.headers.get("origin");

    if (
      origin &&
      origin !== "https://pedia-360.com" &&
      origin !== "https://www.pedia-360.com"
    ) {
      return new Response("Forbidden", {
        status: 403,
      });
    }

    // Honeypot
    const website = form.get("website")?.toString().trim();

    if (website) {
      return Response.json({ success: true });
    }

    const firstname = form.get("name")?.toString().trim();
    const lastname = form.get("lastname")?.toString().trim();
    const email = form.get("email")?.toString().trim().toLowerCase();

    if (!firstname || !lastname || !email) {
      return new Response("Todos los campos son obligatorios.", {
        status: 400,
      });
    }

    const contact = await createContact({
      firstname,
      lastname,
      email,
    });

    await addTag(contact.id);

    return redirect("/welcome-webinar", 302);

  } catch (error) {
    console.error(error);

    return new Response("Ocurrió un error al registrar el webinar.", {
      status: 500,
    });
  }
};