<head>
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/core/plugins/social-login/css/social-login.css') }}" /> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

@if (setting('social_login_facebook_enable', true) || setting('social_login_google_enable', true) || setting('social_login_github_enable', true) || setting('social_login_linkedin_enable', true))
    <div class="login-options">
        <br>
        <p style="font-size: 14px">{{ __('Login with social networks') }}</p>
        <ul class="social-icons">
            @if (setting('social_login_facebook_enable', true))
                <li>
                    <a class="social-icon-color facebook" data-original-title="facebook"
                       href="{{ route('auth.social', 'facebook') }}"></a>                      
                </li>
            @endif
            @if (setting('social_login_google_enable', true))
                <li>
                    <a class="social-icon-color googleplus" data-original-title="Google Plus"
                       href="{{ route('auth.social', 'google') }}"></a>
                </li>
            @endif
            @if (setting('social_login_github_enable', true))
                <li>
                    <a class="social-icon-color github" data-original-title="Github"
                       href="{{ route('auth.social', 'github') }}"></a>
                </li>
            @endif
            @if (setting('social_login_linkedin_enable', true))
                <li>
                    <a class="social-icon-color linkedin" data-original-title="linkedin"
                       href="{{ route('auth.social', 'linkedin') }}"></a>
                </li>
            @endif
        </ul>
    </div>
@endif
