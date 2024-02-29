import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface TypeTodos {
  _id: number;
  title: string;
  todos: [
    {
      _id: number;
      todoTitle: string;
    }
  ];
}

interface TypeInitialState {
  data: TypeTodos[];
  loading: boolean;
  error: boolean;
}

const initialState: TypeInitialState = {
  data: [],
  loading: false,
  error: false,
};

interface TypeTodoNewData {
  title: string;
}

export interface TypeColumnNewTodoData {
  title: string;
  todos: [
    {
      _id: number;
      todoTitle: string;
    }
  ];
}

interface TypeColumnData {
  id?: number;
  title?: string;
  newTodoData: TypeColumnNewTodoData;
}

export interface TypeItem {
  title: string;
  todos: {
    _id: number;
    todoTittle: string;
  };
}

const link =
  "https://api.elchocrud.pro/api/v1/76639132a17ef568ed4c6c5d08aac225/trello_todos";

export const postTodos = createAsyncThunk(
  "todo/postTodo",
  async (newData: TypeTodoNewData) => {
    try {
      const response = (await axios.post(link, newData)).data;
      return response;
    } catch (e) {
      console.error(e);
    }
  }
);

export const getTodos = createAsyncThunk("todo/getTodo", async () => {
  try {
    const response = (await axios.get(link)).data;
    return response;
  } catch (e) {
    console.error(e);
  }
});

export const patchTodos = createAsyncThunk(
  "todo/patchTodo",
  async ({ id, newTodoData }: TypeColumnData) => {
    try {
      const response = (await axios.patch(`${link}/${id}`, newTodoData)).data;
      return response;
    } catch (e) {
      console.error(e);
    }
  }
);

export const putTodoTitle = createAsyncThunk(
  "todo/putTodo",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async ({ id, newData }: { id: number; upTodoTitle: any }) => {
    try {
      const response = (await axios.put(`${link}/${id}`, newData)).data;
      console.log(response);

      return response;
    } catch (e) {
      console.error(e);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(postTodos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(postTodos.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getTodos.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(patchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(patchTodos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(patchTodos.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(putTodoTitle.pending, (state) => {
        state.loading = true;
      })
      .addCase(putTodoTitle.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(putTodoTitle.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const todoReducer = todoSlice.reducer;
