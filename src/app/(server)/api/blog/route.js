export async function GET() {

    return Response.json('All Blog');

}

export async function POST({ name }) {

    return Response.json(`Blog ${name}`);

}