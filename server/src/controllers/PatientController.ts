import { Request, Response } from "express";
import { Citi, Crud } from "../global";

class PatientController implements Crud {
    constructor(private readonly citi = new Citi("Patient")) {}
    create = async (request: Request, response: Response) => {  
        const { patientName, patientAge, tutorName, problemDescription, animalType } = request.body;

        const isAnyUndefined = this.citi.areValuesUndefined(   
            patientName,
            patientAge,
            tutorName,
            problemDescription,
            animalType
        );
        if (isAnyUndefined) return response.status(400).send();

        const newPatient = { patientName, patientAge, tutorName, problemDescription, animalType };
        const { httpStatus, message } = await this.citi.insertIntoDatabase(newPatient);

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
        const { patientName, patientAge, tutorName, problemDescription, animalType } = request.body;

        const updatedValues = { patientName, patientAge, tutorName, problemDescription, animalType };
        
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
export default new PatientController();
