import { BaseBudgetHandler } from "./base-budget-handler";
import { CustomerBudget } from "./customer-budget";

export class ManagerBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        
        if (budget.total <= 5000) {
            console.log('The manager budget is lower that 5000');
            budget.approved = true;
            return budget;
        }

        return super.handle(budget);
    }
}