class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connectionString: string;

  private constructor() {
    this.connectionString = 'db://server:3306';
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public connect(): void {
    console.log(`Conectando ao: ${this.connectionString}`);
  }
}

// criando dias instâncias usando o getInstance
const connection1 = DatabaseConnection.getInstance();
const connection2 = DatabaseConnection.getInstance();

// verificando que são a mesma instância
console.log(connection1 === connection2); // true
connection1.connect(); // Conectando ao: db://server:3306
connection2.connect(); // Conectando ao: db://server:3306
