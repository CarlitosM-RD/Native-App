import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import NoteItem from "../components/NoteItem";
import { Note } from "../types/Note";

const NoteScreen = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>(""); 

    const addNote = () => {
        if (title && content) {
            const newNote: Note = {
                id: Date.now().toString(),
                title,
                content,
                date: new Date().toLocaleDateString(),
            };
            setNotes([...notes, newNote]);
            setTitle("");
            setContent("");
        }
    };

    const deleteNote = (id: string) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Titulo"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />
            <TextInput
                placeholder="Contentido"
                value={content}
                onChangeText={setContent}
                style={[styles.input, styles.textarea]}
                multiline
            />
            <Button title="Agregar nota" onPress={addNote} />
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                    onDelete={deleteNote}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    textarea: {
        height: 100,
    },
});

export default NoteScreen;

    