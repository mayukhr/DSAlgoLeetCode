// https://www.geeksforgeeks.org/dsa/program-to-find-transpose-of-a-matrix/

export type matrix = number[][];

export function transpose(input_matrix: matrix): matrix {
    const input_matrix_row_count: number = input_matrix.length;
    const input_matrix_col_count: number = input_matrix[0].length;

    const result_matrix: matrix = new Array(input_matrix_col_count).fill(0)
        .map(() => new Array(input_matrix_row_count).fill(0));
    
    // traverse by double-loop through the input_matrix and populate result_matrix
    for (let i = 0; i < input_matrix_row_count; i++) {
        for (let j = 0; j < input_matrix_col_count; j++) {
            result_matrix[j][i] = input_matrix[i][j];
        }
    }
    return result_matrix;
}

// const input_matrix: matrix = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]];
const input_matrix: matrix =[[1, 2],[9, -2]]
const result: matrix = transpose(input_matrix);

console.log(result);

// export function transpose(input_matrix: matrix): matrix {
//     const input_matrix_row_count: number = input_matrix.length;
//     const input_matrix_col_count: number = input_matrix[0].length;

//     const result_matrix: matrix = new Array(input_matrix_col_count).fill(0)
//         .map(() => new Array(input_matrix_row_count).fill(0));

//     // traverse by double-loop through the input_matrix and populate result_matrix
//     // result is (cols × rows): result[i][j] = input[j][i]
//     for (let i = 0; i < input_matrix_col_count; i++) {
//         for (let j = 0; j < input_matrix_row_count; j++) {
//             result_matrix[i][j] = input_matrix[j][i];
//         }
//     }
//     return result_matrix;
// }