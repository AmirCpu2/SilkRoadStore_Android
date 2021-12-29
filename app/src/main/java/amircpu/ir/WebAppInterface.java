package amircpu.ir;

import android.content.Context;
import android.os.Build;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

import androidx.annotation.RequiresApi;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class WebAppInterface {
    Context mContext;

    /** Instantiate the interface and set the context */
    WebAppInterface(Context c) {
        mContext = c;
    }

    /** Show a toast from the web page */
    @JavascriptInterface
    public void showToast(String toast) { Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show(); }

    /** Return Value Test */
    @JavascriptInterface
    public String howTo()
    {
        int[] arr = new int[10];
        arr[0] = 1;
        return "hallo";
    }

    /** CheckHotspot */
    @JavascriptInterface
    public boolean hotspotStatus()
    {
        try
        {
            return ApManager.isApOn(this.mContext);
        }
        catch (Exception ex)
        {
            return false;
        }
    }

    /** CheckHotspot */
    @JavascriptInterface
    public String hotspotAct()
    {
        try
        {
            return ApManager.configApState(this.mContext)+":)";
        }
        catch (Exception ex)
        {
            return ex.toString();
        }
    }

    /** Ajax Method*/
    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @JavascriptInterface
    public String sendGet(String url) throws Exception
    {
        try
        {
            HttpURLConnection httpClient =
                    (HttpURLConnection) new URL(url).openConnection();

            // optional default is GET
            httpClient.setRequestMethod("GET");

            //add request header
            httpClient.setRequestProperty("User-Agent", "Mozilla/5.0");

            int responseCode = httpClient.getResponseCode();
            //System.out.println("\nSending 'GET' request to URL : " + url);
            //System.out.println("Response Code : " + responseCode);

            try (BufferedReader in = new BufferedReader(
                    new InputStreamReader(httpClient.getInputStream()))) {

                StringBuilder response = new StringBuilder();
                String line;

                while ((line = in.readLine()) != null) {
                    response.append(line);
                }

                //Toast Debug
                //showToast(String.format("responseCode:%s",responseCode));
                //print result
                return response.toString();
            }
        }
        catch (Exception ex)
        {
            showToast(String.format("Exception:%s",ex));
            return null;
        }
    }
}