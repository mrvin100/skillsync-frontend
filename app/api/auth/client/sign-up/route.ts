import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, firstName, lastName, role } = body;

  console.log("Données d'inscription reçues:", body);

  // validation

  if (!email || !password || !firstName || !lastName || !role) {
    console.error("Erreur de validation: tous les champs sont requis.");
    return NextResponse.json(
      { error: "Tous les champs sont requis." },
      { status: 400 }
    );
  }
  // call api backend to save user
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      role: role.toUpperCase(),
    }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  console.log("Reponse de l'API d'inscription : ", data);

  if (res.ok) {
    // Redirige vers la page de connexion
    return NextResponse.redirect(new URL("/sign-in", request.url));
  } else {
    return NextResponse.json(
      { status: false, data: data.data },
      { status: 400 }
    );
  }
}
