export default async (request, context) => {

  console.log(request)
      context.cookies.set({
        name: 'action',
        value: new Date(),
      })
 
}
