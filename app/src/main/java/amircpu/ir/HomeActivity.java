package amircpu.ir;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.annotation.TargetApi;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.text.Html;
import android.view.LayoutInflater;
import android.view.View;
import android.view.WindowManager;
import android.webkit.PermissionRequest;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class HomeActivity extends AppCompatActivity {
    private static final int MY_PERMISSIONS_REQUEST = 100;
    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR1)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);

        runWebView();
    }

    @Override
    public boolean isActivityTransitionRunning() {
        return super.isActivityTransitionRunning();
    }

    /**
     * Run Web View
     * Index Page
     */
    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR1)
    private boolean runWebView()
    {
        try
        {
            //Init value
            String url = "http://192.168.1.209/";
            WebView myWebView = new WebView(this);

            WebSettings webSettings = myWebView.getSettings();
            webSettings.setLoadsImagesAutomatically(true);
            webSettings.setAllowContentAccess(true);
            webSettings.setJavaScriptEnabled(true);
            webSettings.setAppCacheEnabled(true);
            webSettings.setDomStorageEnabled(true);
            webSettings.setLoadWithOverviewMode(true);
            webSettings.setJavaScriptCanOpenWindowsAutomatically(true);
            webSettings.setPluginState(WebSettings.PluginState.ON);
            webSettings.setMediaPlaybackRequiresUserGesture(false);

            /* CUSTOM USER AGENT */
            webSettings.setUserAgentString("WebApp");

            myWebView.setWebViewClient(new WebViewClient(){
                public void onReceivedError(WebView webView, int errorCode, String description, String failingUrl) {
                    try {
                        webView.stopLoading();
                    } catch (Exception e) {
                    }

                    if (webView.canGoBack()) {
                        webView.goBack();
                    }

                    webView.loadUrl("about:blank");
                    AlertDialog alertDialog = new AlertDialog.Builder(HomeActivity.this).create();
                    alertDialog.setTitle("خطای اتصال");
                    alertDialog.setMessage("لطفاً اتصال اینترنت خود را بررسی کنید و دوباره امتحان کنید.");
                    alertDialog.setButton(DialogInterface.BUTTON_POSITIVE, "امتحان مجدد", new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface dialog, int which) {
                            finish();
                            startActivity(getIntent());
                        }
                    });

                    alertDialog.show();
                    super.onReceivedError(webView, errorCode, description, failingUrl);
                }
            });

            myWebView.setWebChromeClient(new WebChromeClient(){
                @TargetApi(Build.VERSION_CODES.LOLLIPOP)
                @Override
                public void onPermissionRequest(final PermissionRequest request) {
                    request.grant(request.getResources());
                }
            });

            // Here, thisActivity is the current activity
            if (ContextCompat.checkSelfPermission(HomeActivity.this,
                    Manifest.permission.READ_CONTACTS)
                    != PackageManager.PERMISSION_GRANTED) {

                // Should we show an explanation?
                if (ActivityCompat.shouldShowRequestPermissionRationale(HomeActivity.this,
                        Manifest.permission.READ_CONTACTS)) {

                    // Show an expanation to the user *asynchronously* -- don't block
                    // this thread waiting for the user's response! After the user
                    // sees the explanation, try again to request the permission.

                } else {

                    // No explanation needed, we can request the permission.

                    ActivityCompat.requestPermissions(HomeActivity.this,
                            new String[] {
                                    android.Manifest.permission.RECORD_AUDIO,
                                    android.Manifest.permission.MODIFY_AUDIO_SETTINGS,
                                    android.Manifest.permission.WRITE_EXTERNAL_STORAGE,
                                    android.Manifest.permission.CAMERA
                            }, MY_PERMISSIONS_REQUEST);

                }
            }
            setContentView(myWebView);
            myWebView.loadUrl(url);
            return true;
        }
        catch (Exception ex)
        {
            return false;
        }
    }
}
