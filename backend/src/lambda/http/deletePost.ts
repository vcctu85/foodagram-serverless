import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { decode } from 'jsonwebtoken'
import { getToken } from '../auth/auth0Authorizer'
import { deleteTodo } from '../../business-logic/todos-logic'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId
     console.log(event)
     const jwtToken = getToken(event.headers['Authorization'])
     const userId = decode(jwtToken).sub
    // TODO: Remove a TODO item by id
    console.log("Decoded userId: ", userId)
    console.log("Deleting todo item.")

    const item = await deleteTodo(todoId, userId)

    return {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        item
      })
    }
}

