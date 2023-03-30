import React from "react";
import { useForm } from "react-hook-form";

import {
    Col,
    Button,
    Row,
    Container,
    Card,
    Form,
} from "react-bootstrap";

export default function UseForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = () => {
        reset();
    };
    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={10} lg={8} xs={12}>
                    <div className="border border-3 border-primary"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold mb-2 text-uppercase">Brand</h2>
                                <p className=" mb-5">Please enter your details to join us!</p>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            className="mb-3"
                                            controlId="formFullName"
                                        >
                                            <Form.Label className="text-center">
                                                Your full name
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter name"
                                                name="full_name"
                                                {...register("full_name", {
                                                    required: {
                                                        value: true,
                                                        message: "Enter your Full Name"
                                                    }
                                                })}
                                            />
                                            {errors.full_name?.type === "required" && (
                                                <span style={{ color: "red" }}>
                                                    {errors.full_name.message}
                                                </span>
                                            )}
                                        </Form.Group>

                                        <Form.Group
                                            as={Col}
                                            className="mb-3"
                                            controlId="formPhoneNumber"
                                        >
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter phone number"
                                                name="phone"
                                                {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: "Please Enter Phone No.",
                                                    },
                                                    minLength: 10,
                                                    maxLength: 15,
                                                })}
                                            />
                                            {errors.phone?.type === "required" && (
                                                <span style={{ color: "red" }}> {errors.phone.message} </span>
                                            )}
                                            {errors.phone?.type === "minLength" && (
                                                <span style={{ color: "red" }}> Phone number must be at least 10 digits </span>
                                            )}
                                            {errors.phone?.type === "maxLength" && (
                                                <span style={{ color: "red" }}> Phone number max 15 digit </span>
                                            )}
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            className="mb-3"
                                            controlId="formUsername"
                                        >
                                            <Form.Label className="text-center">
                                                Email address
                                            </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter username"
                                                    name="email"
                                                    {...register("email", {
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "Please Enter Valid Email",
                                                        },
                                                        required: {
                                                            value : true,
                                                            message: "Please Enter Email",
                                                        }   
                                                    })}
                                                />
                                                {errors.email?.type === "required" && (
                                                    <span style = {{ color : "red"}}> {errors.email.message} </span>
                                                )}
                                        </Form.Group>

                                        <Form.Group
                                            as={Col}
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name ="password"
                                            {...register("password",{
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                                                    message: "Please Enter Valid Password",
                                                },
                                                required: {
                                                    value : true,
                                                    message: "Please Enter Password",
                                                } 
                                            }) }
                                            />
                                            {errors.password?.type === "required" && (
                                                <span style={{ color : "red"}} >{errors.password.message} </span>
                                            )}
                                            {errors.password?.type === "pattern" && (
                                                <span style={{ color : "red"}} >{errors.password.message} </span>
                                            )}
                                        </Form.Group>
                                    </Row>
                                    <div className="d-grid">
                                        <Button variant="primary" type="submit">
                                            Sign Up
                                        </Button>
                                    </div>
                                </Form>
                                <div className="mt-3">
                                    <p className="mb-0  text-center">
                                        Already have an account?{" "}
                                        <a href="{''}" className="text-primary fw-bold">
                                            Sign In
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
