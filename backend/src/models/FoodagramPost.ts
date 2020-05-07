// export interface TodoItem {
//   userId: string
//   todoId: string
//   createdAt: string
//   name: string
//   dueDate: string
//   done: boolean
//   attachmentUrl?: string
// }

export interface FoodagramPost {
  userId: string
  postId: string
  createdAt: string
  title: string
  attachmentUrl?: string
  likes: number
}
