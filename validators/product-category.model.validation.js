import Joi from 'joi';

const createCategory = Joi.object({
  name: Joi.string().required(),
});

const getSingleProductCategory = Joi.object({
  id: Joi.string().required(),
});

const updateProductCategory = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required(),
});

const deleteProductCategory = Joi.object({
  id: Joi.string().required(),
});

const filterPorudctCategory = Joi.object({
  query: Joi.string().required(),
});

export default{
  createCategory,
  getSingleProductCategory,
  updateProductCategory,
  deleteProductCategory,
  filterPorudctCategory,
};
