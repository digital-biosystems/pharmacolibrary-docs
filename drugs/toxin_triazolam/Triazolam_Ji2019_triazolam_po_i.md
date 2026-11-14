<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Triazolam&quot;,&quot;href&quot;:&quot;drugs/toxin_triazolam/&quot;},{&quot;label&quot;:&quot;Ji_2019 \u00b7 triazolam_po_i&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Triazolam — `Triazolam_Ji2019_triazolam_po_i`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Triazolam" model-id="Triazolam_Ji2019_triazolam_po_i" status="needs_review" stale="false" population="virtual healthy volunteers" measured-compound="Triazolam" parameterization="mechanistic" topology="1C"></div>

## Citation
Ji B, Liu S, Xue Y, He X, Man VH, Xie XQ et al. Prediction of Drug-Drug Interactions Between Opioids and Overdosed Benzodiazepines Using Physiologically Based Pharmacokinetic (PBPK) Modeling and Simulation. Drugs in R&D 19(3):297–305 (2019).
  ·  DOI: [10.1007/s40268-019-00282-3](https://doi.org/10.1007/s40268-019-00282-3)

## Population and dosing

**Population:** virtual healthy volunteers · condition healthy · age group adult · n = 100.

**Dosing:** 0.1, 4, 10, 30, 500 mg / mg/kg, other, single.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight (g/mol) | MW | 343.20 | g/mol |
| B:P | Kp | 0.62 |  |
| fu | fu | 0.179 |  |
| Ka (1/h) | kabs | 1.75 | 1/h |
| fa | equation variable | 1 |  |
| Vss (L/kg) | Vss | 0.48 | L/kg |
| CLR (L/h) | CLR | 0.274 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight (g/mol) | `Q374` · MW | 343.20 | g/mol | 0.3432 |  | g/(m·ol) | exact (1) | Ji_2019_table_S1:row0:col7 |
| B:P | `Q410` · Kp | 0.62 |  |  |  |  | llm (0.6) | Ji_2019_table_S1:row3:col7 |
| fu | `Q46` · fu | 0.179 |  | 0.179 |  |  | exact (1) | Ji_2019_table_S1:row4:col7 |
| Ka (1/h) | `Q49` · kabs | 1.75 | 1/h | 0.0004861 | 1/s | 1/h | exact (1) | Ji_2019_table_S1:row5:col7 |
| fa | `Q900` · equation variable | 1 |  | 1 |  |  | llm (0.6) | Ji_2019_table_S1:row6:col7 |
| Vss (L/kg) | `Q65` · Vss | 0.48 | L/kg | 0.0336 | m3 | l/kg | exact (1) | Ji_2019_table_S1:row8:col7 |
| CLR (L/h) | `Q26` · CLR | 0.274 | L/h | 7.611e-08 | m3/s | l/h | exact (1) | Ji_2019_table_S1:row24:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'triazolam po (i)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Log Po:w' — extend the ontology if this is a real PK parameter (source ['Ji_2019_table_S1:row1:col7'])
- dropped value-less row: 'AUC'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'tmax'
- dropped value-less row: 'N/A'
- dropped value-less row: 'PK'
- dropped value-less row: 'SD'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Triazolam
- population split: 'triazolam po (i)' subgroup of Ji_2019 (paper reports 2 populations: oral triazolam 0.25 mg (0–24 h), triazolam po (i))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table Ji_2019_table_1: logical view retains original source coordinates
- table Tab1: representations disagree; selected evidence retained, not merged
- table Ji_2019_table_S1: unparsed_numeric_cell
- companion parameter table S1 transcribed (65 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Ji_2019_table_S1:row24:col7'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Ji_2019_table_S1:row0:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ji_2019_table_S1:row5:col7'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Ji_2019_table_S1:row8:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 33.6 L | ['Ji_2019_table_S1:row8:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btriazolam%5D%20Triazolam_Ji2019_triazolam_po_i&body=Drug%3A%20triazolam%0ARecord%3A%20Triazolam_Ji2019_triazolam_po_i%0APaper%3A%20Ji_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_triazolam/Triazolam_Ji2019_triazolam_po_i%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 07:02 UTC</sub>
