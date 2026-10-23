<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;levothyroxine sodium&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine_sodium/&quot;},{&quot;label&quot;:&quot;Inada_1975 \u00b7 t4_kinetic_data_three_compartment_analysis_v_liter&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levothyroxine sodium — `LevothyroxineSodium_Inada1975_t4_kinetic_data_three_compartm`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="levothyroxine sodium" model-id="LevothyroxineSodium_Inada1975_t4_kinetic_data_three_compartm" status="needs_review" stale="false" population="normal adults, hypothyroid patients" measured-compound="levothyroxine (T4), liothyronine (T3)" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Inada M, Kasagi K, Kurata S, Kazama Y, Takayama H, Torizuka K et al. Estimation of thyroxine and triiodothyronine distribution and of the conversion rate of thyroxine to triiodothyronine in man. The Journal of clinical investigation 55(6):1337–1348 (1975).
  ·  DOI: [10.1172/JCI108053](https://doi.org/10.1172/JCI108053)

## Population and dosing

**Population:** normal adults, hypothyroid patients · condition hypothyroidism · age group adult · n = 12.

**Dosing:** 0.15 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed levothyroxine (T4), measured levothyroxine (T4), liothyronine (T3).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Y. O. | equation variable | 42.9 |  |
| M. E. | E | 40.5 |  |
| M. K. (1) | V3 | 28.7 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Extracted — levothyroxine sodium: E 40.5, V3 28.7 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has levothyroxine (T4), the second reading levothyroxine_sodium; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Y. O. | `Q900` · equation variable | 42.9 |  |  |  |  | llm (0.6) | Inada_1975_table_2:row1:col6 |
| M. E. | `Q38` · E | 40.5 |  |  |  |  | llm (0.6) | Inada_1975_table_2:row3:col6 |
| M. K. (1) | `Q77` · V3 | 28.7 | L | 0.0287 | m3 | L | llm (0.6) | Inada_1975_table_2:row12:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'M. U.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row2:col6'])
- dropped unlinked row (NIL): 'I. N.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row4:col6'])
- dropped unlinked row (NIL): 'S. Y.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row5:col6'])
- dropped unlinked row (NIL): 'Mean±SD' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row6:col6', 'Inada_1975_table_2:row13:col6', 'Inada_1975_table_2:row20:col6'])
- dropped unlinked row (NIL): 'Y. U.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row9:col6'])
- dropped unlinked row (NIL): 'K. T.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row10:col6'])
- dropped unlinked row (NIL): 'M. Y. (1)' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row11:col6'])
- dropped unlinked row (NIL): 'M. Y. (2)' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row17:col6'])
- dropped unlinked row (NIL): 'D. K.' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row18:col6'])
- dropped unlinked row (NIL): 'M. K. (2)' — extend the ontology if this is a real PK parameter (source ['Inada_1975_table_2:row19:col6'])
- implicit units: 'M. K. (1)' → L (from the paper text: 'The paper states in the Results section: "Values for total distribution volume of T3 ... averaged 46.6± 12.8 liters/60 k')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=levothyroxine (T4), liothyronine (T3)
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- population split: 't4 kinetic data: three-compartment analysis: v* liter' subgroup of Inada_1975 (paper reports 6 populations: t4 kinetic data: three-compartment analysis: mcr* liter/day, t4 kinetic data: three-compartment analysis: t4dr* µg/day, t4 kinetic data: three-compartment analysis: v* liter, t4 kinetic data: three-compartment analysis: v3* liter, t4 kinetic data: three-compartment analysis: λ03 per day, three-compartment analysis)
- row roles: 7 per-group rows of levothyroxine (T4) summary_statistic but 0 reference group(s) — kept as printed
- row roles: 7 per-group rows of liothyronine (T3) clearance but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 27/27 row label(s) assigned, 123 linked by role; re-tagged parent→liothyronine (T3) ×123
- molar mass: none of 1 PubChem candidate(s) is 'levothyroxine (T4), liothyronine (T3)' (LLM) — left in mass units
- molar mass: none found for 'levothyroxine (T4), liothyronine (T3)' — its concentrations stay mass-only

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- unparsed cell Inada_1975_table_3:row0:col6 = 'λ02 per day'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (1/8 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['levothyroxine (t4)', 'liothyronine (t3)', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[k. t.]` |  | 33.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[m. e.]` | 40.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[m. k.]` | 28.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[y. o.]` | 42.9 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | levothyroxine (T4) | levothyroxine_sodium | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | levothyroxine (T4), liothyronine (T3) | levothyroxine_sodium | mismatch |

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
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Inada_1975_table_2:row12:col6'] |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevothyroxine_sodium%5D%20LevothyroxineSodium_Inada1975_t4_kinetic_data_three_compartm&body=Drug%3A%20levothyroxine_sodium%0ARecord%3A%20LevothyroxineSodium_Inada1975_t4_kinetic_data_three_compartm%0APaper%3A%20Inada_1975%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levothyroxine_sodium/LevothyroxineSodium_Inada1975_t4_kinetic_data_three_compartm%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 09:51 UTC</sub>
