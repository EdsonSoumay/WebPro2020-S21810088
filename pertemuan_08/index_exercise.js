let account = 
{
    Name: "Edson",
    Expenses: [],
    addExpenses: function(description, amount)
        {
        this.Expenses.push({"description": description, "amount": amount})
        },
        getAccountSumary : function ()
        {
            let TotalExpenses = 0;
            this.Expenses.forEach(function(el)
                {
                    TotalExpenses = TotalExpenses + el.amount;
                }
            )
            return TotalExpenses;
        }
}
account.addExpenses("Kredit di bank perbulan", 700000);
account.addExpenses("Biaya fitness perbulan",150000);
console.log("Total biaya yang " + account.Name + " keluarkan bulan ini adalah " + account.getAccountSumary() + " Rupiah");

