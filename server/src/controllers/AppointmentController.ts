import { Request, Response } from "express";
import { Citi, Crud } from "../global";

class AppointmentController implements Crud {
  constructor(private readonly citi = new Citi("Appointment")) {}
  create = async (request: Request, response: Response) => {
    const { appointmentType, appointmentDate, doctorName, patientId } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      appointmentType,
      appointmentDate,
      doctorName,
      patientId
    );
    if (isAnyUndefined) return response.status(400).send();

    const newAppointment = { appointmentType, appointmentDate, doctorName, patientId };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newAppointment);

    return response.status(httpStatus).send({ message });
  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { appointmentType, appointmentDate, doctorName, patientId } = request.body;

    const updatedValues = { appointmentType, appointmentDate, doctorName, patientId };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };

  findById = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, value } = await this.citi.findById(id);

    return response.status(httpStatus).send({ value });
  };
}

export default new AppointmentController();
