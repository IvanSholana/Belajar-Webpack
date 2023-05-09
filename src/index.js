require("./support");

import { run } from "./app/app";
import { AlertService } from "./app/alert.service";
import { CalculatorService } from "./app/calculator.service";
import { JokesService } from "./app/jokes.service";

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

alert("Hallo Ivan he❤️");
run(alertService, calculatorService, jokesService);
