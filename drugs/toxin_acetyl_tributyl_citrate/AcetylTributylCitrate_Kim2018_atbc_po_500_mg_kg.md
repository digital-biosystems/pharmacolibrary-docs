<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Acetyl tributyl citrate&quot;,&quot;href&quot;:&quot;drugs/toxin_acetyl_tributyl_citrate/&quot;},{&quot;label&quot;:&quot;Kim_2018 \u00b7 atbc_po_500_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg&quot;,&quot;label&quot;:&quot;Kim_2018_atbc_iv_10_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_iv_10_mg_kg.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Acetyl tributyl citrate — `AcetylTributylCitrate_Kim2018_atbc_po_500_mg_kg`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">rat</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="Acetyl tributyl citrate" model-id="AcetylTributylCitrate_Kim2018_atbc_po_500_mg_kg" status="needs_review" stale="false" population="male Sprague-Dawley rats" measured-compound="Acetyl tributyl citrate" parameterization="mechanistic" topology="1C"></div>

## Citation
Kim H, Choi MS, Ji YS, Kim IS, Kim GB, Bae IY et al. Pharmacokinetic Properties of Acetyl Tributyl Citrate, a Pharmaceutical Excipient. Pharmaceutics 10(4) (2018).
  ·  DOI: [10.3390/pharmaceutics10040177](https://doi.org/10.3390/pharmaceutics10040177)

## Population and dosing

**Population:** male Sprague-Dawley rats · condition healthy · age group adult.

**Dosing:** 700, 35000 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.80).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (ng·h/mL) | AUC | 2757.1 | ng·h/mL |
| Tmax (h) | tmax | 0.4 | h |
| Cmax (ng/mL) | Cmax | 478.7 | ng/mL |
| F (%) | Fab | 27.4 | % |
| clearance | CL | 75.7 | L/h/kg |
| mean half-life ... 1 μM | t1/2z | 0.23 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.80).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (Fab), so that value has no SI equivalent. Extracted — acetyl tributyl citrate: AUC 2.76e+03 ng·h/mL, tmax 0.4 h, Cmax 479 ng/mL, Fab 27.4 %, CL 75.7 L/h/kg, t1/2z 0.23 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (ng·h/mL) | `Q88` · AUC | 2757.1 | ng·h/mL | 9.926 | kg*s/m3 | (h·ng)/ml | exact (1) | pharmaceutics-10-00177-t003:row4:col2 |
| Tmax (h) | `Q56` · tmax | 0.4 | h | 1440 | s | h | exact (1) | pharmaceutics-10-00177-t003:row5:col2 |
| Cmax (ng/mL) | `Q32` · Cmax | 478.7 | ng/mL | 0.0004787 | kg/m3 | ng/ml | exact (1) | pharmaceutics-10-00177-t003:row6:col2 |
| F (%) | `Q40` · Fab | 27.4 | % |  |  |  | exact (1) | pharmaceutics-10-00177-t003:row9:col2 |
| clearance | `Q22` · CL | 75.7 | L/h/kg | 0.001472 | m3/s | L/h | exact (1) | Kim_2018:other_prose |
| mean half-life ... 1 μM | `Q57` · t1/2z | 0.23 | h | 828 | s | h | toxin_unit_relink (0.85) | Kim_2018:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q22 ('clearance'=75.7) from results prose — parameter table was unreadable
- salvaged Q57 ('mean half-life ... 1 μM'=0.23) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Acetyl tributyl citrate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'atbc / po (500 mg/kg, n = 6)' subgroup of Kim_2018 (paper reports 2 populations: atbc / iv (10 mg/kg, n = 5), atbc / po (500 mg/kg, n = 6))
- molar mass: none of 1 PubChem candidate(s) is 'Acetyl tributyl citrate' (LLM) — left in mass units
- molar mass: none found for 'Acetyl tributyl citrate' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['pharmaceutics-10-00177-t003:row6:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['pharmaceutics-10-00177-t003:row5:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['pharmaceutics-10-00177-t003:row4:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 75.7 | ['Kim_2018:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.3e+03 L/h | ['Kim_2018:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacetyl_tributyl_citrate%5D%20AcetylTributylCitrate_Kim2018_atbc_po_500_mg_kg&body=Drug%3A%20acetyl_tributyl_citrate%0ARecord%3A%20AcetylTributylCitrate_Kim2018_atbc_po_500_mg_kg%0APaper%3A%20Kim_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_acetyl_tributyl_citrate/AcetylTributylCitrate_Kim2018_atbc_po_500_mg_kg%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 12:53 UTC</sub>
