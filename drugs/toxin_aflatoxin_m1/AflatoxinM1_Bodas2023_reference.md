<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Aflatoxin M1&quot;,&quot;href&quot;:&quot;drugs/toxin_aflatoxin_m1/&quot;},{&quot;label&quot;:&quot;Bodas_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Aflatoxin M1 — `AflatoxinM1_Bodas2023_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

> Only clearance was extracted — no volume; d1 and CLm/F have no unit.

<div class="pk-model-meta" hidden drug="Aflatoxin M1" model-id="AflatoxinM1_Bodas2023_reference" status="needs_review" stale="false" population="lactating Assaf dairy ewes" measured-compound="Aflatoxin M1" parameterization="apparent" topology="1C"></div>

## Citation
Bodas R, Giráldez FJ, Olmedo S, Herrera M, Lorán S, Ariño A et al. The Effects of Aflatoxin B1 Intake in Assaf Dairy Ewes on Aflatoxin M1 Excretion, Milk Yield, Haematology and Biochemical Profile. Animals : an open access journal from MDPI 13(3) (2023).
  ·  DOI: [10.3390/ani13030436](https://doi.org/10.3390/ani13030436)

## Population and dosing

**Population:** lactating Assaf dairy ewes · condition chronic dietary exposure (13-day experimental AFB1 dosing) · age group adult · n = 30.

**Dosed compound ≠ measured compound:** dosed Aflatoxin B1, measured Aflatoxin M1.

> **Species: sheep.** This record comes from an animal study (sheep), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| D | D1 | 18.47 |  |
| average clearance rate (group H) | CLm/F | 86 | % per day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; d1 and CLm/F have no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CLm/F), so that value has no SI equivalent. Extracted — aflatoxin m1: D1 18.5, CLm/F 86 % per day.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[d].value`: this record has 18.47, the second reading 9.14. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| D | `Q310` · D1 | 18.47 |  |  | exact (1) | Bodas_2023_table_5:row1:col11 |
| average clearance rate (group H) | `Q351` · CLm/F | 86 | % per day | % per day | boundary (0.8) | Bodas_2023:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- transposed table Bodas_2023_table_4: rows are variants (C, L, H), the parameters are the column headers (D) — read one record per variant
- transposed table Bodas_2023_table_5: rows are variants (C, L, H), the parameters are the column headers (D) — read one record per variant
- column 'ng afm1/animal and day / g' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ng afm1/animal and day / g × d' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Aspartate aminotransferase (AST, IU/L)' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_3:row1:col2', 'Bodas_2023_table_3:row1:col3', 'Bodas_2023_table_3:row1:col4', 'Bodas_2023_table_3:row1:col5'])
- dropped unlinked row (NIL): 'L' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_3:row2:col2', 'Bodas_2023_table_3:row2:col3', 'Bodas_2023_table_3:row2:col4', 'Bodas_2023_table_3:row5:col2', 'Bodas_2023_table_3:row5:col3', 'Bodas_2023_table_3:row5:col4', 'Bodas_2023_table_3:row8:col2', 'Bodas_2023_table_3:row8:col3', 'Bodas_2023_table_3:row8:col4', 'Bodas_2023_table_3:row11:col2', 'Bodas_2023_table_3:row11:col3', 'Bodas_2023_table_3:row11:col4', 'Bodas_2023_table_3:row14:col2', 'Bodas_2023_table_3:row14:col3', 'Bodas_2023_table_3:row14:col4', 'Bodas_2023_table_3:row17:col2', 'Bodas_2023_table_3:row17:col3', 'Bodas_2023_table_3:row17:col4', 'Bodas_2023_table_3:row20:col2', 'Bodas_2023_table_3:row20:col3', 'Bodas_2023_table_3:row20:col4', 'Bodas_2023_table_3:row23:col2', 'Bodas_2023_table_3:row23:col3', 'Bodas_2023_table_3:row23:col4', 'Bodas_2023_table_5:row2:col1', 'Bodas_2023_table_5:row2:col2', 'Bodas_2023_table_5:row2:col3', 'Bodas_2023_table_5:row2:col4', 'Bodas_2023_table_5:row2:col5', 'Bodas_2023_table_5:row2:col6', 'Bodas_2023_table_5:row2:col7', 'Bodas_2023_table_5:row2:col8'])
- dropped unlinked row (NIL): 'H' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_3:row3:col2', 'Bodas_2023_table_3:row3:col3', 'Bodas_2023_table_3:row3:col4', 'Bodas_2023_table_3:row6:col2', 'Bodas_2023_table_3:row6:col3', 'Bodas_2023_table_3:row6:col4', 'Bodas_2023_table_3:row9:col2', 'Bodas_2023_table_3:row9:col3', 'Bodas_2023_table_3:row9:col4', 'Bodas_2023_table_3:row12:col2', 'Bodas_2023_table_3:row12:col3', 'Bodas_2023_table_3:row12:col4', 'Bodas_2023_table_3:row15:col2', 'Bodas_2023_table_3:row15:col3', 'Bodas_2023_table_3:row15:col4', 'Bodas_2023_table_3:row18:col2', 'Bodas_2023_table_3:row18:col3', 'Bodas_2023_table_3:row18:col4', 'Bodas_2023_table_3:row21:col2', 'Bodas_2023_table_3:row21:col3', 'Bodas_2023_table_3:row21:col4', 'Bodas_2023_table_3:row24:col2', 'Bodas_2023_table_3:row24:col3', 'Bodas_2023_table_3:row24:col4', 'Bodas_2023_table_5:row3:col1', 'Bodas_2023_table_5:row3:col2', 'Bodas_2023_table_5:row3:col3', 'Bodas_2023_table_5:row3:col4', 'Bodas_2023_table_5:row3:col5', 'Bodas_2023_table_5:row3:col6', 'Bodas_2023_table_5:row3:col7', 'Bodas_2023_table_5:row3:col8'])
- dropped unlinked row (NIL): 'Alanine aminotransferase (ALT, IU/L)' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_3:row4:col2', 'Bodas_2023_table_3:row4:col3', 'Bodas_2023_table_3:row4:col4', 'Bodas_2023_table_3:row4:col5'])
- dropped unlinked row (NIL): 'Gamma glutamyl transferase (GGT, IU/L)' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_3:row7:col2', 'Bodas_2023_table_3:row7:col3', 'Bodas_2023_table_3:row7:col4', 'Bodas_2023_table_3:row7:col5'])
- dropped unlinked row (NIL): 'Alkaline phosphatase (ALP, IU/L)' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_3:row10:col2', 'Bodas_2023_table_3:row10:col3', 'Bodas_2023_table_3:row10:col4', 'Bodas_2023_table_3:row10:col5'])
- dropped unlinked row (NIL): 'Total protein (g/dl)' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_3:row13:col2', 'Bodas_2023_table_3:row13:col3', 'Bodas_2023_table_3:row13:col4', 'Bodas_2023_table_3:row13:col5'])
- dropped unlinked row (NIL): 'Albumin (g/dl)' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_3:row16:col2', 'Bodas_2023_table_3:row16:col3', 'Bodas_2023_table_3:row16:col4', 'Bodas_2023_table_3:row16:col5'])
- dropped unlinked row (NIL): 'Urea (mg/dl)' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_3:row19:col2', 'Bodas_2023_table_3:row19:col3', 'Bodas_2023_table_3:row19:col4', 'Bodas_2023_table_3:row19:col5'])
- dropped unlinked row (NIL): 'Creatinine (mg/dl)' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_3:row22:col2', 'Bodas_2023_table_3:row22:col3', 'Bodas_2023_table_3:row22:col4', 'Bodas_2023_table_3:row22:col5'])
- dropped unlinked row (NIL): 'C' — extend the ontology if this is a real PK parameter (source ['Bodas_2023_table_5:row1:col1', 'Bodas_2023_table_5:row1:col2', 'Bodas_2023_table_5:row1:col3', 'Bodas_2023_table_5:row1:col4', 'Bodas_2023_table_5:row1:col5', 'Bodas_2023_table_5:row1:col6', 'Bodas_2023_table_5:row1:col7', 'Bodas_2023_table_5:row1:col8', 'Bodas_2023_table_5:row1:col10', 'Bodas_2023_table_5:row1:col12'])
- table mostly unlinked (11/12 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q22 ('average clearance rate (group H)'=86) from results prose — parameter table was unreadable
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 8 column 4 (char 357)) — units left missing
- metabolite aflatoxin m1: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Aflatoxin M1
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Bodas_2023:prose, Bodas_2023_table_3, Bodas_2023_table_5); populations days / d 1 *, days / d 14, days / d 18, days / d 7 *, ng afm1/l milk / d 1 *, ng afm1/l milk / d 14, ng afm1/l milk / d 16, ng afm1/l milk / d 18, ng afm1/l milk / d 2 *, ng afm1/l milk / d 3 *, ng afm1/l milk / d 4 *, ng afm1/l milk / d 7 * kept as separate records
- row roles (LLM): model_class=other; 0/28 row label(s) assigned, 0 linked by role
- molar mass: none found for 'Aflatoxin B1' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table animals-13-00436-t002: ragged_grid
- table animals-13-00436-t002: representations disagree; selected evidence retained, not merged
- table Bodas_2023_table_3: missing_label
- table Bodas_2023_table_3: unbound_uncertainty
- table Bodas_2023_table_3: unknown_column_role
- table Bodas_2023_table_3: ragged_grid
- companion parameter table 3 transcribed (140 record(s))
- table Bodas_2023_table_4: units_need_context
- companion parameter table 4 transcribed (27 record(s))
- table Bodas_2023_table_5: units_need_context
- companion parameter table 5 transcribed (27 record(s))
- no LLM table selection; kept 4 deterministically-scored parameter table(s)
- toxin: the located table(s) gave no kinetic value — 12 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.833 (5/6 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[d].value` | 18.47 | 9.14 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_unit_missing_Q310 | fail | [time] |  | ['Bodas_2023_table_5:row1:col11'] |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] | % per day | ['Bodas_2023:prose'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baflatoxin_m1%5D%20AflatoxinM1_Bodas2023_reference&body=Drug%3A%20aflatoxin_m1%0ARecord%3A%20AflatoxinM1_Bodas2023_reference%0APaper%3A%20Bodas_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aflatoxin_m1/AflatoxinM1_Bodas2023_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 08:30 UTC</sub>
