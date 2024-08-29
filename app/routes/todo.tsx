import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";


type Todo = {
    id: number;
    title: string;
};


export const loader = async () => {
    const response = await fetch('http://localhost:3000/todos');
    const todos: Todo[] = await response.json();
    return json(todos);
};

export const Todos = () => {
    const todos = useLoaderData<typeof loader>();

    return (
        <div>
            <h1>TODO List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        <Form method="post">
                            <input type="hidden" name="id" value={todo.id} />
                            <button type="submit" name="_action" value="delete">Delete</button>
                        </Form>
                    </li>
                ))}
            </ul>
            <Form method="post">
                <input type="text" name="text" placeholder="New TODO" required />
                <button type="submit" name="_action" value="add">Add</button>
            </Form>
        </div>
    );
}

export const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const actionType = formData.get('_action');

    if (actionType === 'add') {
        const title = formData.get('text') as string;
        await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        });
    } else if (actionType === 'delete') {
        const id = formData.get('id') as string;
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE',
        });
    }

    return redirect('/');
};