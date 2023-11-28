import axiosInstance from ".";

export const getCourseById = async (id) => {
  const course = await axiosInstance.get(`/courses/${id}`);
  return course.data.message;
};

export const createCourse = async (data) => {
  const course = await axiosInstance.post(`/courses`, data);
  return course.data.message;
};

export const getAllCourses = async () => {
  const courses = await axiosInstance.get(`/courses`);
  return courses.data.message;
};
