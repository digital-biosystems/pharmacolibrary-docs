<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Testosterone&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/&quot;},{&quot;label&quot;:&quot;Lee_2023 \u00b7 participants_with_updated_pk_observations&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Testosterone_Bi2018_bootstrapa_median&quot;,&quot;label&quot;:&quot;Bi_2018_bootstrapa_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/Testosterone_Bi2018_bootstrapa_median.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Testosterone_Bi2018_final_model_estimate&quot;,&quot;label&quot;:&quot;Bi_2018_final_model_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/Testosterone_Bi2018_final_model_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Testosterone_Torne2007_reference&quot;,&quot;label&quot;:&quot;Torn\u00f8e_2007_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_testosterone/Testosterone_Torne2007_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Testosterone — `Testosterone_Lee2023_participants_with_updated_pk_observatio`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; cL/F has no unit.

<div class="pk-model-meta" hidden drug="Testosterone" model-id="Testosterone_Lee2023_participants_with_updated_pk_observatio" status="needs_review" stale="false" population="men with advanced prostate cancer" measured-compound="Relugolix" parameterization="apparent" topology="1C"></div>

## Citation
Lee TY, Pierrillas PB, Lin YW, de Greef R, Zandvliet AS, Schindler E et al. Population PK and Semimechanistic PK/PD Modeling and Simulation of Relugolix Effects on Testosterone Suppression in Men with Prostate Cancer. Clinical pharmacology and therapeutics 113(1):124-134 (2023).
  ·  DOI: [10.1002/cpt.2743](https://doi.org/10.1002/cpt.2743)

## Population and dosing

**Population:** men with advanced prostate cancer · condition advanced prostate cancer · age group adult · n = 912.

**Dosing:** 120, 360 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| short (0.27 hours (16 minutes)) absorption lag time | tlag | 0.27 | hours |
| estimated exponent for body weight on CL/F | CL/F | 0.322 | allometric scaling with body weight |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; cL/F has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL/F), so that value has no SI equivalent. None of the extracted parameters is testosterone's own; they describe Relugolix. Extracted — Relugolix: tlag 0.27 hours, CL/F 0.322 allometric scaling with body weight.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| short (0.27 hours (16 minutes)) absorption lag time | `Q83` · tlag | 0.27 | hours | 972 | s | h | boundary (0.8) | Lee_2023:prose |
| estimated exponent for body weight on CL/F | `Q27` · CL/F | 0.322 | allometric scaling with body weight |  |  | allometric scaling with body weight | boundary (0.8) | Lee_2023:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age, years' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row0:col8'])
- dropped unlinked row (NIL): 'Mean (SD)' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row1:col8', 'Lee_2023_table_1:row14:col8', 'Lee_2023_table_1:row17:col8'])
- dropped unlinked row (NIL): 'White' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row4:col8'])
- dropped unlinked row (NIL): 'Asian' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row5:col8'])
- dropped unlinked row (NIL): 'Black/African American' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row6:col8'])
- dropped unlinked row (NIL): 'Other (including multiple)' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row7:col8'])
- dropped unlinked row (NIL): 'Not reported' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row8:col8', 'Lee_2023_table_1:row12:col8'])
- dropped unlinked row (NIL): 'Not Hispanic or Latino' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row10:col8'])
- dropped unlinked row (NIL): 'Hispanic or Latino' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row11:col8'])
- dropped unlinked row (NIL): 'Median (min, max)' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row15:col8', 'Lee_2023_table_1:row18:col8'])
- dropped unlinked row (NIL): 'Missing' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row19:col8', 'Lee_2023_table_1:row26:col8'])
- dropped unlinked row (NIL): 'No disease' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row21:col8'])
- dropped unlinked row (NIL): 'Localized' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row22:col8'])
- dropped unlinked row (NIL): 'Locally advanced' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row23:col8'])
- dropped unlinked row (NIL): 'Metastatic' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row24:col8'])
- dropped unlinked row (NIL): 'Not classifiable' — extend the ontology if this is a real PK parameter (source ['Lee_2023_table_1:row25:col8'])
- table mostly unlinked (16/16 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q83 ('short (0.27 hours (16 minutes)) absorption lag time'=0.27) from results prose — parameter table was unreadable
- salvaged Q27 ('estimated exponent for body weight on CL/F'=0.322) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Relugolix
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'participants with updated pk observations (n = 22)' subgroup of Lee_2023 (paper reports 8 populations: c27001 (n = 74), c27002 (n = 110), c27003 (n = 65), for the development of the poppk and poppk/pd models (n = 598), for the validation of the poppk model (n = 87), participants with updated pk observations (n = 22), phase iii hero (n = 87), tb-ak160108 (n = 43))
- molar mass: none of 1 PubChem candidate(s) is 'Relugolix' (LLM) — left in mass units
- molar mass: none found for 'Relugolix' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'Relugolix', not testosterone — the review values are the parent's

**Extraction notes:**
- table Lee_2023_table_1: ragged_grid
- toxin: the located table(s) gave no kinetic value — 3 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | allometric scaling with body weight | ['Lee_2023:prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btestosterone%5D%20Testosterone_Lee2023_participants_with_updated_pk_observatio&body=Drug%3A%20testosterone%0ARecord%3A%20Testosterone_Lee2023_participants_with_updated_pk_observatio%0APaper%3A%20Lee_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_testosterone/Testosterone_Lee2023_participants_with_updated_pk_observatio%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 02:32 UTC</sub>
