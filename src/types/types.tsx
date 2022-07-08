export type Data = {
     
    name: string;
    email:string;
     
  };
  
  export type FormProps = {
    addAvatar: (newData: Data) => void;
  };