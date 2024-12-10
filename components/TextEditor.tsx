"use client"; 

import React, { useRef } from "react";
import JoditEditor from "jodit-react";

interface JoditEditorProps {
    value: string;
    onChange: (value: string) => void;
    config?: Record<string, any>;
}

const RichTextEditor: React.FC<JoditEditorProps> = ({ value, onChange, config }) => {
    const editor = useRef(null);

    return (
            <JoditEditor
                ref={editor}
                value={value}
                config={{ ...config}}
                onBlur={(newContent) => onChange(newContent)}
                className="h-96"
            />
    );
};

export default RichTextEditor;
