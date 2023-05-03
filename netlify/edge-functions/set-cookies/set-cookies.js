export default async (request, context) => {

  // request.headers.set("cache-control", "public, s-maxage=3600");

  console.log(request)
      context.cookies.set({
        name: 'action',
        value: new Date(),
      })
 
}
