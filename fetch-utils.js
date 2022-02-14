// Enter Supabase Information
const SUPABASE_URL = 'https://kdukidihcdlbgresawun.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkdWtpZGloY2RsYmdyZXNhd3VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NDYsImV4cCI6MTk1OTkxNzQ0Nn0.YtwzCCX2zDt5IzpJ-Uh5Hy4DsanDjeq6lfG72ezSCW4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
    // if (!user) location.replace('../');
}

export async function signupUser(email, password) {

    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}


export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function checkAuth() {
    const user = await getUser();
  
    if (!user) location.replace('../');



}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./other-page');
    }
}

export async function logout() {
    await client.auth.signOut();
    
    return window.location.href = '../';


}
