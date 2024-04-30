import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { 
    Form,
    Input, 
    Switcher, 
    Title, 
    Wrapper, 
    Error 
} from "../components/auth-components";
import GithubButton from "../components/github-btn";

export default function Login() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = async (e : React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value},
        } = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if (isLoading || email === "" || password === "") return;
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch(e) {
            if(e instanceof FirebaseError) {
                setError(e.message);
            }
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <Wrapper>
            <img src="/logo.png"/>
            <Title>Log in</Title>
            <Form onSubmit={onSubmit}>
                <Input
                    onChange={onChange}
                    name="email"
                    value={email}
                    placeholder="Email"
                    type="email"
                    required
                />
                <Input
                    onChange={onChange}
                    name="password"
                    value={password}
                    placeholder="Password"
                    type="password"
                    required
                />
                <Input
                    type="submit"
                    value={isLoading ? "Loading..." : "Log in"}
                />
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Don't you have an account?{" "}
                <Link to="/create-account">Create One &rarr;</Link>
            </Switcher>
            <GithubButton />
        </Wrapper>
    );
}