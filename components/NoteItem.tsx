import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Note } from "../types/Note";

interface NoteItemProps {
    note: Note;
    onDelete: (id: string) => void;
}


const NoteItem = ({ note, onDelete }: NoteItemProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.content}>{note.content}</Text>
            <Text style={styles.date}>{note.date}</Text>
            <Button title="Delete" onPress={() => onDelete(note.id)} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    content: {
        fontSize: 16,
        marginBottom: 5,
    },
    date: {
        fontSize: 14,
        color: "#666",
    },
});

export default NoteItem;