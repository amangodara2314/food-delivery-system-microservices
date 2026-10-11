class AppError extends Error {
  public readonly statusCode: number;
  public readonly errors: any[] | Record<string, any>;

  constructor(
    message: string,
    statusCode: number = 500,
    errors: any[] | Record<string, any>,
  ) {
    super(message);

    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export { AppError };
