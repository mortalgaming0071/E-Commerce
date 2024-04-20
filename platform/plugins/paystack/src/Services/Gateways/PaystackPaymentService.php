<?php

namespace Botble\Paystack\Services\Gateways;

use Botble\Paystack\Services\Abstracts\PaystackPaymentAbstract;
use Exception;
use Illuminate\Http\Request;

class PaystackPaymentService extends PaystackPaymentAbstract
{
    /**
     * Make a payment
     *
     * @param Request $request
     *
     * @return mixed
     * @throws Exception
     */
    public function makePayment(Request $request)
    {
    }

    /**
     * Use this function to perform more logic after user has made a payment
     *
     * @param Request $request
     *
     * @return mixed
     */
    public function afterMakePayment(Request $request)
    {
    }
}
