<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Propylene glycol&quot;,&quot;href&quot;:&quot;drugs/toxin_propylene_glycol/&quot;},{&quot;label&quot;:&quot;Olafuyi_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Propylene glycol — `PropyleneGlycol_Olafuyi2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="Propylene glycol" model-id="PropyleneGlycol_Olafuyi2025_reference" status="needs_review" stale="false" population="adults and term neonates" measured-compound="Propylene glycol" parameterization="mechanistic" topology="1C"></div>

## Citation
Olafuyi O, Michelet R, Garle M, Allegaert K. Exploring the Impact of Developmental Clearance Saturation on Propylene Glycol Exposure in Adults and Term Neonates Using Physiologically Based Pharmacokinetic Modeling. Journal of clinical pharmacology 65(3):272–284 (2025).
  ·  DOI: [10.1002/jcph.6150](https://doi.org/10.1002/jcph.6150)

## Population and dosing

**Population:** adults and term neonates · condition healthy · age group mixed.

**Dosing:** 52.5, 525000 mg, iv, multiple.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Systemic CL (L/h) | CL | 0.083 | L/h |
| Hepatic CL (L/h) | CLH | 0.063 | L/h |
| Renal CL (L/h) | CLR | 0.011 | L/h |
| DMSO tlag(h) | tlag | 13.52 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — propylene glycol: CL 0.083 L/h, CLH 0.063 L/h, CLR 0.011 L/h, tlag 13.5 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Systemic CL (L/h) | `Q22` · CL | 0.083 | L/h | 2.306e-08 | m3/s | l/h | llm_confirmed (0.6) | jcph6150-tbl-0003:row2:col1, jcph6150-tbl-0003:row2:col3 |
| Hepatic CL (L/h) | `Q25` · CLH | 0.063 | L/h | 1.75e-08 | m3/s | l/h | llm_corrected (0.6) | jcph6150-tbl-0003:row3:col1, jcph6150-tbl-0003:row3:col3 |
| Renal CL (L/h) | `Q26` · CLR | 0.011 | L/h | 3.056e-09 | m3/s | l/h | llm_corrected (0.6) | jcph6150-tbl-0003:row4:col1, jcph6150-tbl-0003:row4:col3 |
| DMSO tlag(h) | `Q83` · tlag | 13.52 | h | 4.867e+04 | s | h | review_gapfill (0.7) | Sim_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'ratio' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Adult' — extend the ontology if this is a real PK parameter (source ['Olafuyi_2025_table_S2:row1:col2', 'Olafuyi_2025_table_S2:row1:col3', 'Olafuyi_2025_table_S2:row1:col4'])
- dropped unlinked row (NIL): 'Full term neonate' — extend the ontology if this is a real PK parameter (source ['Olafuyi_2025_table_S2:row5:col2', 'Olafuyi_2025_table_S2:row5:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Propylene glycol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Sim_2025's review values (primary lacked it)

**Extraction notes:**
- table jcph6150-tbl-0003: unparsed_numeric_cell
- table Olafuyi_2025_table_2: no_numeric_grid
- table Olafuyi_2025_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (0 record(s))
- table Olafuyi_2025_table_S2: unknown_column_role
- table Olafuyi_2025_table_S2: missing_label
- table Olafuyi_2025_table_S2: units_need_context
- table Olafuyi_2025_table_S2: ragged_grid
- companion parameter table S2 transcribed (8 record(s))
- LLM selected parameter table(s) 2, 3, S2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['jcph6150-tbl-0003:row2:col1', 'jcph6150-tbl-0003:row2:col3'] |
| C5_dimension_Q25 | pass | [length] ** 3 / [time] |  | ['jcph6150-tbl-0003:row3:col1', 'jcph6150-tbl-0003:row3:col3'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['jcph6150-tbl-0003:row4:col1', 'jcph6150-tbl-0003:row4:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Sim_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.083 | ['jcph6150-tbl-0003:row2:col1', 'jcph6150-tbl-0003:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.083 L/h | ['jcph6150-tbl-0003:row2:col1', 'jcph6150-tbl-0003:row2:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropylene_glycol%5D%20PropyleneGlycol_Olafuyi2025_reference&body=Drug%3A%20propylene_glycol%0ARecord%3A%20PropyleneGlycol_Olafuyi2025_reference%0APaper%3A%20Olafuyi_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_propylene_glycol/PropyleneGlycol_Olafuyi2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 20:09 UTC</sub>
