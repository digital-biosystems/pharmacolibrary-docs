<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Loxapine&quot;,&quot;href&quot;:&quot;drugs/toxin_loxapine/&quot;},{&quot;label&quot;:&quot;Spyker_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Loxapine_Spyker2014_reference&quot;,&quot;label&quot;:&quot;Spyker_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_loxapine/Loxapine_Spyker2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Loxapine — `Loxapine_Spyker2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; aUC∞ has no unit.

<div class="pk-model-meta" hidden drug="Loxapine" model-id="Loxapine_Spyker2015_reference" status="needs_review" stale="false" population="subjects on chronic, stable antipsychotic regimens" measured-compound="Loxapine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Spyker DA, Riesenberg RA, Cassella JV. Multiple dose pharmacokinetics of inhaled loxapine in subjects on chronic, stable antipsychotic regimens. Journal of clinical pharmacology 55(9):985–994 (2015).
  ·  DOI: [10.1002/jcph.502](https://doi.org/10.1002/jcph.502)

## Population and dosing

**Population:** subjects on chronic, stable antipsychotic regimens · condition schizophrenia or related disorders requiring chronic, stable antipsychotic regimen · n = 24.

**Dosing:** 5, 10 mg, inhaled, multiple, every 4 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Tmax (min)a | tmax | 2 | min |
| Cmax (Dose 1) b (ng/mL)c | Cmax | 69.3 | ng/mL |
| AUCinf 7‐OH‐loxapine (%)cd | AUC∞ | 15.0 |  |
| Half‐life (h)c | t1/2z | 7.1 | h |
| CL/F (mL/h)c | CL/F | 103 | mL/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; aUC∞ has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — loxapine: tmax 2 min, Cmax 69.3 ng/mL, t1/2z 7.1 h, CL/F 103 mL/h; Loxapine metabolites: AUC∞ 15.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Tmax (min)a | `Q56` · tmax | 2 | min | 120 | s | min | llm_confirmed (0.6) | jcph502-tbl-0003:row1:col1, jcph502-tbl-0003:row1:col2 |
| Cmax (Dose 1) b (ng/mL)c | `Q32` · Cmax | 69.3 | ng/mL | 6.93e-05 | kg/m3 | ng/ml | llm_confirmed (0.6) | jcph502-tbl-0003:row2:col1, jcph502-tbl-0003:row2:col2 |
| AUCinf 7‐OH‐loxapine (%)cd | `Q17` · AUC∞ | 15.0 |  |  |  |  | llm_confirmed (0.6) | jcph502-tbl-0003:row5:col1, jcph502-tbl-0003:row5:col2 |
| Half‐life (h)c | `Q57` · t1/2z | 7.1 | h | 2.556e+04 | s | h | llm (0.6) | jcph502-tbl-0003:row8:col1, jcph502-tbl-0003:row8:col2 |
| CL/F (mL/h)c | `Q27` · CL/F | 103 | mL/h | 2.861e-08 | m3/s | ml/h | llm_confirmed (0.6) | jcph502-tbl-0003:row9:col1, jcph502-tbl-0003:row9:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CLA | Q22 | tv_prefix |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('Cmax (Dose 2)(ng/mL)c', value '101') — already have one for this compound
- dropped duplicate Q32 ('Cmax (Dose 3)(ng/mL)c', value '107') — already have one for this compound
- dropped duplicate Q17 ('AUCinf 8‐OH‐loxapine (%)cd', value '103') — already have one for this compound
- dropped duplicate Q17 ('AUCinf Amoxapine(%)cd', value '6.1') — already have one for this compound
- dropped unlinked row (NIL): 'C2 hr – C4 hr (% of Cmax)ce' — extend the ontology if this is a real PK parameter (source ['jcph502-tbl-0003:row10:col1'])
- dropped unlinked row (NIL): 'Thalf‐max (min) ae' — extend the ontology if this is a real PK parameter (source ['jcph502-tbl-0003:row11:col1', 'jcph502-tbl-0003:row11:col2'])
- dropped duplicate Q56 ('Thalf‐max ‐ Tmax (min) ae', value '4.8') — already have one for this compound
- implicit units: 'AUCinf 7‐OH‐loxapine (%)cd' — the LLM proposed '%', whose dimension does not fit Q17; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Loxapine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- bound model equation to Q22 (CL): CLA = TVCL * (BW/70)^0.75
- Q22 (CL) is equation-defined: value moved to equation-variable 'CLA'; equation kept verbatim
- status held at "Needs review" — not promoted
- row roles: 3 per-group rows of Loxapine other but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 12/12 row label(s) assigned, 4 linked by role; re-tagged parent→Loxapine metabolites ×6
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- table jcph502-tbl-0003: unparsed_numeric_cell
- table Spyker_2015_table_2: no_numeric_grid
- table Spyker_2015_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation CLA = TVCL * (BW/70)^0.75
- toxin: the located table(s) gave no kinetic value — 16 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph502-tbl-0003:row9:col1', 'jcph502-tbl-0003:row9:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['jcph502-tbl-0003:row2:col1', 'jcph502-tbl-0003:row2:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['jcph502-tbl-0003:row1:col1', 'jcph502-tbl-0003:row1:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['jcph502-tbl-0003:row8:col1', 'jcph502-tbl-0003:row8:col2'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 |  | ['jcph502-tbl-0003:row5:col1', 'jcph502-tbl-0003:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.103 L/h | ['jcph502-tbl-0003:row9:col1', 'jcph502-tbl-0003:row9:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bloxapine%5D%20Loxapine_Spyker2015_reference&body=Drug%3A%20loxapine%0ARecord%3A%20Loxapine_Spyker2015_reference%0APaper%3A%20Spyker_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_loxapine/Loxapine_Spyker2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 12:53 UTC</sub>
