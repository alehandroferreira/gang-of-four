class DatabaseConnectionNotSingleton {
  private connectionString: string;

  private constructor() {
    // construtor público permite múltiplas instâncias
    this.connectionString = 'db://server:3306';
  }

  connect(): void {
    console.log(`Conectando ao: ${this.connectionString}`);
  }
}

// criando múltiplas instâncias
const conn1 = new DatabaseConnectionNotSingleton();
const conn2 = new DatabaseConnectionNotSingleton();

// são objetos diferentes na memória
console.log(conn1 !== conn2); // true
