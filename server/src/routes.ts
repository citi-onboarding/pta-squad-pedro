import express from "express";
import userController from "./controllers/UserController";
import patientController from "./controllers/PatientController";
import appointmentController from "./controllers/AppointmentController";
import emailController from "./controllers/EmailController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

routes.post("/patient", patientController.create);
routes.get("/patient", patientController.get);
routes.delete("/patient/:id", patientController.delete);
routes.patch("/patient/:id", patientController.update);
routes.get("/patient/:id", patientController.findById);

routes.post("/appointment", appointmentController.create);
routes.get("/appointment", appointmentController.get);
routes.delete("/appointment/:id", appointmentController.delete);
routes.patch("/appointment/:id", appointmentController.update);
routes.get("/appointment/:id", appointmentController.findById);

routes.post("/send-email", emailController.send);

export default routes;
