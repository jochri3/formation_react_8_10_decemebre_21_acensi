import IContact from "../@types/i-contact";
import api from "./api";

const URL = "contacts";

const urlBuilder = (id?: number) => {
  return id ? `${URL}/${id}` : URL;
};

export const fetchAll = () => {
  return api({
    url: urlBuilder(),
    method: "get",
  });
};

export const fetchById = (id: number) => {
  return api({
    url: urlBuilder(id),
    method: "get",
  });
};

export const deleteOne = (id: number) => {
  return api({
    url: urlBuilder(id),
    method: "delete",
  });
};

export const updateOne = (data: IContact) => {
  return api({
    url: urlBuilder(data.id),
    method: "put",
  });
};

export const createOne = (data: IContact) => {
  return api({
    url: urlBuilder(),
    method: "post",
  });
};
