<?php

namespace app\Services;

require 'vendor/autoload.php';

use Dompdf\Dompdf;

class PdfService {

	public function exportToPdf($html)
    {
        
        $dompdf = new DOMPDF();
        $dompdf->load_html($html);
        $dompdf->render();
        $output = $dompdf->output();

        return $output;
	}
}

?>