export interface Resultado {
  //Este prototipado no es completo.
  //faltan muchos objetos dentro de results que no hemos
  //puesto, aun asi funciona!!
  //o sea, no hace falta poner toda la estructura, solo la que necesitemos
  results: [
    {
      gender: string;
      name: {
        title: string;
        first: string;
        last:string;
      };
    }
  ];
  info: {
    seed: string;
    results: number;
    page: number;
    version:string;
  };
}
