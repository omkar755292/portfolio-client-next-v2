export async function GET() {

    return Response.json('All Project');

}

export async function POST({name}) {

    console.log(name);

    return Response.json(`Project ${name}`);

}