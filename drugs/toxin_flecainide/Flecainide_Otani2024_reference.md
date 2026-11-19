<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Flecainide&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/&quot;},{&quot;label&quot;:&quot;Otani_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flecainide_Braun1987_reference&quot;,&quot;label&quot;:&quot;Braun_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/Flecainide_Braun1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flecainide_Hertrampf1991_reference&quot;,&quot;label&quot;:&quot;Hertrampf_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/Flecainide_Hertrampf1991_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flecainide_McQuinn1988_reference&quot;,&quot;label&quot;:&quot;McQuinn_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/Flecainide_McQuinn1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flecainide_Perry1989_reference&quot;,&quot;label&quot;:&quot;Perry_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/Flecainide_Perry1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Flecainide_Till1989_reference&quot;,&quot;label&quot;:&quot;Till_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_flecainide/Flecainide_Till1989_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Flecainide — `Flecainide_Otani2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="Flecainide" model-id="Flecainide_Otani2024_reference" status="needs_review" stale="false" population="84-year-old woman" measured-compound="Flecainide" parameterization="mechanistic" topology="1C"></div>

## Citation
Otani N, Wakuda H, Oikawa I, Uemura N, Yasu T. Flecainide Toxicity From Clinical Pharmacology Perspectives. Cureus 16(7):e65884 (2024).
  ·  DOI: [10.7759/cureus.65884](https://doi.org/10.7759/cureus.65884)

## Population and dosing

**Population:** 84-year-old woman · condition acute toxicity · age group elderly · n = 1.

**Dosing:** 100 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The elimination rate constant (k) | kel | 0.0122 | hr−1 |
| calculated half-life | t1/2z | 56.8 | h |
| plasma clearance | CL | 6.7 | mL/min/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — flecainide: kel 0.0122 hr−1, t1/2z 56.8 h, CL 6.7 mL/min/kg.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The elimination rate constant (k) | `Q47` · kel | 0.0122 | hr−1 | 3.389e-06 | 1/s | 1/h | boundary (0.8) | Otani_2024:other_prose |
| calculated half-life | `Q57` · t1/2z | 56.8 | h | 2.045e+05 | s | h | toxin_unit_relink (0.85) | Otani_2024:other_prose |
| plasma clearance | `Q22` · CL | 6.7 | mL/min/kg | 7.817e-06 | m3/s | L/h | boundary (0.8) | Otani_2024:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Total protein' — extend the ontology if this is a real PK parameter (source ['TAB1:row2:col1'])
- dropped unlinked row (NIL): 'Albumin' — extend the ontology if this is a real PK parameter (source ['TAB1:row3:col1'])
- dropped unlinked row (NIL): 'Aspartate aminotransferase' — extend the ontology if this is a real PK parameter (source ['TAB1:row4:col1'])
- dropped unlinked row (NIL): 'Alanine aminotransferase' — extend the ontology if this is a real PK parameter (source ['TAB1:row5:col1'])
- dropped unlinked row (NIL): 'Gamma glutamyl transpeptidase' — extend the ontology if this is a real PK parameter (source ['TAB1:row6:col1'])
- dropped unlinked row (NIL): 'Total bilirubin' — extend the ontology if this is a real PK parameter (source ['TAB1:row7:col1'])
- dropped unlinked row (NIL): 'Blood urea nitrogen' — extend the ontology if this is a real PK parameter (source ['TAB1:row8:col1'])
- dropped unlinked row (NIL): 'Sodium' — extend the ontology if this is a real PK parameter (source ['TAB1:row9:col1'])
- dropped unlinked row (NIL): 'Potassium' — extend the ontology if this is a real PK parameter (source ['TAB1:row10:col1'])
- dropped unlinked row (NIL): 'Chloride' — extend the ontology if this is a real PK parameter (source ['TAB1:row11:col1'])
- dropped unlinked row (NIL): 'Creatinine' — extend the ontology if this is a real PK parameter (source ['TAB1:row12:col1'])
- dropped unlinked row (NIL): 'Estimated glomerular filtration rate (eGFR)' — extend the ontology if this is a real PK parameter (source ['TAB1:row13:col1'])
- dropped unlinked row (NIL): 'Brain natriuretic peptide' — extend the ontology if this is a real PK parameter (source ['TAB1:row15:col1'])
- dropped unlinked row (NIL): 'White blood cells' — extend the ontology if this is a real PK parameter (source ['TAB1:row17:col1'])
- dropped unlinked row (NIL): 'Hemoglobin' — extend the ontology if this is a real PK parameter (source ['TAB1:row18:col1'])
- dropped unlinked row (NIL): 'Hematocrit' — extend the ontology if this is a real PK parameter (source ['TAB1:row19:col1'])
- dropped unlinked row (NIL): 'Platelets' — extend the ontology if this is a real PK parameter (source ['TAB1:row20:col1'])
- table mostly unlinked (17/17 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q47 ('The elimination rate constant (k)'=0.0122) from results prose — parameter table was unreadable
- salvaged Q57 ('calculated half-life'=56.8) from results prose — parameter table was unreadable
- salvaged Q22 ('plasma clearance'=6.7) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Flecainide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table TAB1: unbound_uncertainty
- table TAB1: unparsed_numeric_cell
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.7 | ['Otani_2024:discussion_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28.1 L/h | ['Otani_2024:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflecainide%5D%20Flecainide_Otani2024_reference&body=Drug%3A%20flecainide%0ARecord%3A%20Flecainide_Otani2024_reference%0APaper%3A%20Otani_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_flecainide/Flecainide_Otani2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 20:20 UTC</sub>
