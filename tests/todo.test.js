import chai, { expect } from "chai";
import chaiHttp from "chai-http";

import app from "../src/server";

chai.use(chaiHttp);

describe("Test Todos", () => {
  let token;
  before(done => {
    chai
      .request(app)
      .post("/api/v1/users/login")
      .send({ email: "test@gmail.com", password: "testpassword" })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  describe("Create Todo", () => {
    const result = {};
    before(done => {
      chai
        .request(app)
        .post("/api/v1/todo")
        .send({ title: "newtesttodo", content: "content in todo" })
        .set("Authorization", token)
        .end((err, res) => {
          result.status = res.status;
          result.body = res.body;
          done();
        });
    });

    it("Should return the correct status", () => {
      expect(result.status).to.equal(201);
    });

    it("Should return the correct body content", () => {
      expect(result.body.Message).to.equal("Todo created successfully");
      expect(result.body)
        .to.have.property("newTodo")
        .that.is.a("object");
    });
  });

  describe("Todo testing", () => {
    it("Should get all todos", done => {
      chai
        .request(app)
        .get("/api/v1/todo")
        .set("Authorization", token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.Message).to.equal("Todos retrieved successfully");
          expect(res.body)
            .to.have.property("todos")
            .that.is.a("array");
          done();
        });
    });

    it("Should get a todo", done => {
      chai
        .request(app)
        .get("/api/v1/todo/1")
        .set("Authorization", token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.Message).to.equal("Todo successfully retrieved");
          expect(res.body)
            .to.have.property("todo")
            .that.is.a("object");
          done();
        });
    });

    it("Should complain if no todo", done => {
      chai
        .request(app)
        .get("/api/v1/todo/1000")
        .set("Authorization", token)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.Message).to.equal(
            "You don't have a todo with this id"
          );
          done();
        });
    });

    it("Should test deleting a todo", done => {
      chai
        .request(app)
        .delete("/api/v1/todo/1")
        .set("Authorization", token)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.Message).to.equal("Todo deleted successfully");
          done();
        });
    });
  });
});
