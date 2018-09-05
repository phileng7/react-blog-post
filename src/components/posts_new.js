import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
      <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        ></Field>
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        ></Field>
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        ></Field>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'owerie', content: 'dldfsak'}
  const errors = {};
  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title="Enter a title!";
  }
  if (!values.categories) {
    errors.categories="Enter some categories";
  }
  if (!values.content || values.content.length < 5) {
    errors.content="Enter some content please with more than 5 characters";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);