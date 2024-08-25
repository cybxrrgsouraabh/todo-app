import { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                style={{
                    padding: 5,
                    margin: 10,
                    borderRadius: 10,
                    fontFamily: "fantasy",
                }}
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                }}
            /> <br />

            <input
                style={{
                    padding: 5,
                    margin: 10,
                    borderRadius: 10,
                    fontFamily: "fantasy",
                }}
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);
                }}
            /> <br />

            <button
                style={{
                    padding: 5,
                    margin: 10,
                    borderRadius: 10,
                    fontFamily: "fantasy",
                }}
                onClick={() => {
                    fetch("http://localhost:3001/addTodo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(async (res) => {
                        if (!res.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const value = await res.json();
                        alert("todo created");
                    })
                    .catch((error) => {
                        alert('Error creating todo: ' + error.message);
                    });
                }}
            >
                Add a todo
            </button>
        </div>
    );
}