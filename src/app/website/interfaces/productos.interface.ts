export interface Producto {
  id:          number;
  title:       string;
  description: string;
  img:         string;
  examples:    Example[];
}

export interface Example {
  img:  string;
  desc: string;
}

export interface Cliente {
  id:          number;
  title:       string;
  description: string;
  img:         string;
}
