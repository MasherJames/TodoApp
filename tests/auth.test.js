import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";

chai.use(chaiHttp);

describe("User Authentication test", () => {
  describe("Non existing path", () => {
    it("Should test a path that does not exist", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.Message).to.equal(
            "URL DOES NOT EXIST, Please counter check"
          );
          done();
        });
    });
  });

  describe("User Registration tests", () => {
    it("Should create a new user with all creds passed", done => {
      const user = {
        username: "usertest",
        email: "test@gmail.com",
        password: "testpassword"
      };
      chai
        .request(app)
        .post("/api/v1/users/register")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.Message).to.equal("Account successfully created");
          done();
        });
    });

    it("Should complain if an existing user is recreated", done => {
      const user = {
        username: "usertest",
        email: "test@gmail.com",
        password: "testpassword"
      };
      chai
        .request(app)
        .post("/api/v1/users/register")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(409);
          expect(res.body.message).to.equal(
            "user with this email already exists"
          );
          done();
        });
    });

    it("Should complain if username field is empty", done => {
      const user = {
        email: "test@gmail.com",
        password: "testpassword"
      };
      chai
        .request(app)
        .post("/api/v1/users/register")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal("username is required");
          done();
        });
    });

    it("Should complain if email field is empty", done => {
      const user = {
        username: "usertest",
        password: "testpassword"
      };
      chai
        .request(app)
        .post("/api/v1/users/register")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal("email is required");
          done();
        });
    });

    it("Should complain if password field is empty", done => {
      const user = {
        username: "usertest",
        email: "test@gmail.com"
      };
      chai
        .request(app)
        .post("/api/v1/users/register")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal("password is required");
          done();
        });
    });

    it("Should complain if username is invalid", done => {
      const user = {
        username: "userte*****",
        email: "test@gmail.com",
        password: "testpassword"
      };
      chai
        .request(app)
        .post("/api/v1/users/register")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal(
            "username must only contain alpha-numeric characters"
          );
          done();
        });
    });

    it("Should complain if username is invalid", done => {
      const user = {
        username: "u",
        email: "test@gmail.com",
        password: "testpassword"
      };
      chai
        .request(app)
        .post("/api/v1/users/register")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal(
            "username length must be at least 3 characters long"
          );
          done();
        });
    });

    it("Should complain if email is invalid", done => {
      const user = {
        username: "usertest",
        email: "test@gmailcom",
        password: "testpassword"
      };
      chai
        .request(app)
        .post("/api/v1/users/register")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal("email must be a valid email");
          done();
        });
    });

    it("Should complain if password is invalid", done => {
      const user = {
        username: "usertest",
        email: "test@gmail.com",
        password: "tes"
      };
      chai
        .request(app)
        .post("/api/v1/users/register")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal(
            "password length must be at least 6 characters long"
          );
          done();
        });
    });

    it("Should complain if password is invalid", done => {
      const user = {
        username: "usertest",
        email: "test@gmail.com",
        password: "tes******"
      };
      chai
        .request(app)
        .post("/api/v1/users/register")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal(
            "password must only contain alpha-numeric characters"
          );
          done();
        });
    });
  });

  describe("User Login test", () => {
    it("Should login a registerd user", done => {
      const registeredUser = {
        email: "test@gmail.com",
        password: "testpassword"
      };
      chai
        .request(app)
        .post("/api/v1/users/login")
        .send(registeredUser)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal("succcessfully loggedin");
          expect(res.body)
            .to.have.property("token")
            .that.is.a("string");
          done();
        });
    });

    it("Should complain on logging in a non-existing user", done => {
      const registeredUser = {
        email: "Masher@gmail.com",
        password: "testpassword"
      };
      chai
        .request(app)
        .post("/api/v1/users/login")
        .send(registeredUser)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.email).to.equal(
            `user with email ${registeredUser.email} does not exist`
          );
          done();
        });
    });

    it("Should complain if password is inncorrect", done => {
      const registeredUser = {
        email: "test@gmail.com",
        password: "incorrectpass"
      };
      chai
        .request(app)
        .post("/api/v1/users/login")
        .send(registeredUser)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body.password).to.equal(
            `Incorrect password for ${registeredUser.email}`
          );
          done();
        });
    });

    it("Should complain if no email", done => {
      const registeredUser = {
        password: "testpassword"
      };
      chai
        .request(app)
        .post("/api/v1/users/login")
        .send(registeredUser)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal("email is required");
          done();
        });
    });

    it("Should complain if no password", done => {
      const registeredUser = {
        email: "test@gmail.com"
      };
      chai
        .request(app)
        .post("/api/v1/users/login")
        .send(registeredUser)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal("password is required");
          done();
        });
    });
  });
});
