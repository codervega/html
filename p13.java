import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;

public class ApiFetcher {

    public static void main(String[] args) {
       
        OkHttpClient client = new OkHttpClient();

        
        String apiUrl = "https://api.example.com/data";

        
        Request request = new Request.Builder()
                .url(apiUrl)
                .build();

        try {
            
            Response response = client.newCall(request).execute();

            
            if (response.isSuccessful()) {
                
                ResponseBody responseBody = response.body();

               
                if (responseBody != null) {
                    // Parse the JSON response
                    String jsonResponse = responseBody.string();
                    JSONArray jsonArray = new JSONArray(jsonResponse);

                    // Process each JSON object in the array
                    for (int i = 0; i < jsonArray.length(); i++) {
                        JSONObject jsonObject = jsonArray.getJSONObject(i);

                        // Extract relevant data from the JSON object
                        String id = jsonObject.getString("id");
                        String name = jsonObject.getString("name");
                        int age = jsonObject.getInt("age");

                        // Print the extracted data
                        System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);
                    }
                }
            } else {
                // Handle unsuccessful response
                System.out.println("Failed to fetch data from API: " + response.code() + " " + response.message());
            }
        } catch (IOException e) {
            // Handle IO exception
            e.printStackTrace();
        } catch (Exception e) {
            // Handle other exceptions
            e.printStackTrace();
        }
    }
}
