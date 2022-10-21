export enum ErrorTypes { 
  InvalidMongoId = 'InvalidMongoId',
  EntityNotFound = 'EntityNotFound',
}

type ErrorResponseObject = { 
  message: string;
  httpStatus: number,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must have a 24 characters hexadecimal',
    httpStatus: 400,
  },
};