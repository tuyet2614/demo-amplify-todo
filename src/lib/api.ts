import type { Schema } from "amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();
type Todo = {
  title: string;
  content: string;
  isDone: boolean;
};
export const taskService = {
  async createTodo(value: Todo): Promise<void> {
    await client.models.Todo.create({
      title: value.title,
      content: value.content,
    });
  },

  async listTodos() {
    const { data } = await client.models.Todo.list();
    return data;
  },

  async deleteTodo(id: string) {
    await client.models.Todo.delete({ id });
  },

  async updateTodo({ id, value }: { id: string; value: Partial<Todo> }) {
    await client.models.Todo.update({
      id,
      ...value,
    });
  },
};
