import { run } from "./app/app";
import { AlertService } from "./app/alert.service";
import { CalculatorService } from "./app/calculator.service";
import { JokesService } from "./app/jokes.service";
import css from "./style/style.scss";
import * as bootstrap from "bootstrap";

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

alert("Hallo Ivan hehe❤️");
run(alertService, calculatorService, jokesService);
