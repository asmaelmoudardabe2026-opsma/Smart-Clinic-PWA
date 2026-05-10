<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('appointments', function (Blueprint $table) {
        $table->id();
        // Cette ligne crée le lien avec la table patients
        $table->foreignId('patient_id')->constrained()->onDelete('cascade');
        $table->datetime('date_heure');
        $table->string('motif'); // ex: Consultation, Vaccin, Contrôle
        $table->text('notes')->nullable();
        $table->enum('statut', ['en_attente', 'confirme', 'annule'])->default('en_attente');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
