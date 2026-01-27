"use client";

import { useState, useEffect } from "react";
import { FamilyRSVPWithGuests } from "@/types";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

interface RSVPStats {
  total: number;
  confirmed: number;
  declined: number;
  pending: number;
  totalConfirmedGuests: number;
  totalGuests: number; // Total de invitados según el JSON
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rsvps, setRsvps] = useState<FamilyRSVPWithGuests[]>([]);
  const [stats, setStats] = useState<RSVPStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/rsvp/admin", {
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      if (!response.ok) {
        throw new Error("Contraseña incorrecta");
      }

      const data = await response.json();
      setRsvps(data.data || []);
      setStats(data.stats || null);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message || "Error al autenticar");
    } finally {
      setIsLoading(false);
    }
  };

  const refreshData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/rsvp/admin", {
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }

      const data = await response.json();
      setRsvps(data.data || []);
      setStats(data.stats || null);
    } catch (err: any) {
      setError(err.message || "Error al actualizar datos");
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-300";
      case "declined":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmado";
      case "declined":
        return "No asistirá";
      default:
        return "Pendiente";
    }
  };

  if (!isAuthenticated) {
    return (
      <Section id="admin" background="white">
        <Container>
          <div className="min-h-screen flex items-center justify-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blush/30 rounded-2xl p-8 shadow-soft max-w-md w-full"
            >
              <h1 className="text-3xl font-serif text-rosewood text-center mb-6">
                Panel de Administración
              </h1>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-sans text-rosewood mb-2 font-medium"
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-vintage-pink/50 focus:border-dusty-rose focus:outline-none focus:ring-2 focus:ring-dusty-rose/20 transition-all bg-white text-foreground"
                    placeholder="Ingresa la contraseña"
                    required
                  />
                </div>
                {error && (
                  <p className="text-sm text-soft-berry">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-soft-berry hover:bg-dusty-rose text-white rounded-xl font-sans font-medium transition-all disabled:opacity-50"
                >
                  {isLoading ? "Verificando..." : "Ingresar"}
                </button>
              </form>
            </motion.div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="admin" background="white">
      <Container>
        <div className="min-h-screen py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-serif text-rosewood">
                Panel de Administración RSVP
              </h1>
              <button
                onClick={refreshData}
                disabled={isLoading}
                className="px-4 py-2 bg-dusty-rose hover:bg-soft-berry text-white rounded-lg font-sans text-sm transition-all disabled:opacity-50"
              >
                {isLoading ? "Actualizando..." : "Actualizar"}
              </button>
            </div>
            {error && (
              <div className="p-4 bg-soft-berry/20 border border-soft-berry/30 rounded-xl text-soft-berry mb-4">
                {error}
              </div>
            )}
          </div>

          {/* Estadísticas */}
          {stats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
            >
              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300">
                <div className="text-2xl font-serif text-green-800">
                  {stats.totalConfirmedGuests}
                </div>
                <div className="text-sm text-green-700 font-sans">
                  Invitados Confirmados
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border-2 border-red-300">
                <div className="text-2xl font-serif text-red-800">
                  {stats.declined}
                </div>
                <div className="text-sm text-red-700 font-sans">No asistirán</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-300">
                <div className="text-2xl font-serif text-gray-800">
                  {stats.pending}
                </div>
                <div className="text-sm text-gray-700 font-sans">Pendientes</div>
              </div>
              <div className="bg-vintage-pink/30 rounded-xl p-4 border-2 border-vintage-pink/50">
                <div className="text-2xl font-serif text-rosewood">
                  {stats.totalGuests || 0}
                </div>
                <div className="text-sm text-mauve font-sans">
                  Invitados Totales
                </div>
              </div>
            </motion.div>
          )}

          {/* Lista de RSVPs */}
          <div className="bg-blush/30 rounded-2xl p-6 shadow-soft">
            <h2 className="text-2xl font-serif text-rosewood mb-6">
              Confirmaciones ({rsvps.length})
            </h2>
            <div className="space-y-4">
              {rsvps.length === 0 ? (
                <p className="text-center text-mauve py-8">
                  No hay confirmaciones aún
                </p>
              ) : (
                rsvps.map((rsvp, index) => (
                  <motion.div
                    key={rsvp.familyKey}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl p-6 border-2 border-vintage-pink/50 hover:border-dusty-rose/50 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-serif text-rosewood">
                            Familia: {rsvp.familyKey}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-sans font-medium border ${getStatusColor(
                              rsvp.status
                            )}`}
                          >
                            {getStatusLabel(rsvp.status)}
                          </span>
                        </div>
                        <div className="space-y-1 text-sm text-mauve font-sans">
                          <p>
                            <span className="font-medium">Invitados:</span>{" "}
                            {rsvp.guests.join(", ")} ({rsvp.guests.length} {rsvp.guests.length === 1 ? "persona" : "personas"})
                          </p>
                          {rsvp.confirmedGuests && rsvp.confirmedGuests.length > 0 && (
                            <p>
                              <span className="font-medium text-green-700">
                                Confirmados:
                              </span>{" "}
                              <span className="text-green-800">
                                {rsvp.confirmedGuests.join(", ")} (
                                {rsvp.confirmedGuests.length} persona
                                {rsvp.confirmedGuests.length !== 1 ? "s" : ""}
                                )
                              </span>
                            </p>
                          )}
                          {rsvp.declinedGuests && rsvp.declinedGuests.length > 0 && (
                            <p>
                              <span className="font-medium text-red-700">
                                No asistirán:
                              </span>{" "}
                              <span className="text-red-800">
                                {rsvp.declinedGuests.join(", ")} (
                                {rsvp.declinedGuests.length} persona
                                {rsvp.declinedGuests.length !== 1 ? "s" : ""}
                                )
                              </span>
                            </p>
                          )}
                          {rsvp.allergies && (
                            <p>
                              <span className="font-medium">Alergias:</span>{" "}
                              {rsvp.allergies}
                            </p>
                          )}
                          {rsvp.message && (
                            <p>
                              <span className="font-medium">Mensaje:</span>{" "}
                              {rsvp.message}
                            </p>
                          )}
                          <p className="text-xs text-mauve/70">
                            {new Date(
                              rsvp.updatedAt || rsvp.submittedAt
                            ).toLocaleString("es-GT", {
                              dateStyle: "long",
                              timeStyle: "short",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
