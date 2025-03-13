export async function GET(
  request: Request,
  { params }: { params: Promise<{ entity: string }> }
) {
  const entity = (await params).entity
  console.log('aloha entity', entity)

  const responseOptions: ResponseInit = {
    statusText: 'Aloha honua'
  }

  return new Response('hi', responseOptions)
}
