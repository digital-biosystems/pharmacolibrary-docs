<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;Levothyroxine&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/&quot;},{&quot;label&quot;:&quot;Geola_1981 \u00b7 before_therapy&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levothyroxine_Younis2018_reference&quot;,&quot;label&quot;:&quot;Younis_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levothyroxine/Levothyroxine_Younis2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Levothyroxine — `Levothyroxine_Geola1981_before_therapy`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; kuptake has no unit.

<div class="pk-model-meta" hidden drug="Levothyroxine" model-id="Levothyroxine_Geola1981_before_therapy" status="needs_review" stale="false" population="hypothyroid patient with Hashimoto&#39;s thyroiditis" measured-compound="thyroxine" parameterization="mechanistic" topology="1C"></div>

## Citation
Geola FL, Hershman JM, Reed AW, Premachandra BN. Circulating thyroid hormone autoantibodies in a hypothyroid patient: effect on thyroxine metabolic clearance rate. The Journal of clinical endocrinology and metabolism 53(3):580–586 (1981).
  ·  DOI: [10.1210/jcem-53-3-580](https://doi.org/10.1210/jcem-53-3-580)

## Population and dosing

**Population:** hypothyroid patient with Hashimoto's thyroiditis · condition hypothyroidism · age group adult · n = The provided text is a case report describing a single 53-year-old male patient. The title and abstract explicitly refer to 'a Hypothyroid Patient' and 'In a 53-yr-old man'. No other subjects are mentioned in the available text..

**Dosed compound ≠ measured compound:** dosed levothyroxine, measured thyroxine.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 24-h thyroid 129I uptake (%) | kuptake | 11.9 |  |
| MS437 = | CL | 24.13 | mL/min/kg |
| V* | V | 47.0 | liter |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; kuptake has no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Inada_1975, Latif_2015) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. Extracted — levothyroxine: kuptake 11.9, CL 24.1 mL/min/kg, V 47 liter.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has levothyroxine, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 24-h thyroid 129I uptake (%) | `Q349` · kuptake | 11.9 |  |  |  |  | llm (0.6) | Geola_1981_table_1:row8:col1 |
| MS437 = | `Q22` · CL | 24.13 | mL/min/kg | 2.815e-05 | m3/s | L/h | review_gapfill (0.7) | Latif_2015:review |
| V* | `Q61` · V | 47.0 | liter | 0.047 | m3 | L | review_gapfill (0.7) | Inada_1975:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'T4 in extracted serum (µg/ 100 ml)b' — extend the ontology if this is a real PK parameter (source ['Geola_1981_table_1:row1:col1'])
- dropped unlinked row (NIL): 'T3 in unextracted serum (ng/100 ml)c' — extend the ontology if this is a real PK parameter (source ['Geola_1981_table_1:row2:col1'])
- dropped unlinked row (NIL): 'T3 in extracted serum (ng/ 100 ml)c' — extend the ontology if this is a real PK parameter (source ['Geola_1981_table_1:row3:col1'])
- dropped unlinked row (NIL): 'rT3 in extracted serum (ng/ 100 ml)' — extend the ontology if this is a real PK parameter (source ['Geola_1981_table_1:row4:col1'])
- dropped unlinked row (NIL): 'T3 uptake' — extend the ontology if this is a real PK parameter (source ['Geola_1981_table_1:row5:col1'])
- dropped unlinked row (NIL): 'TSH (µU/ml)' — extend the ontology if this is a real PK parameter (source ['Geola_1981_table_1:row6:col1'])
- dropped unlinked row (NIL): '6-h thyroid 129I uptake (%)' — extend the ontology if this is a real PK parameter (source ['Geola_1981_table_1:row7:col1'])
- dropped unlinked row (NIL): 'Cholesterol (mg/100 ml)' — extend the ontology if this is a real PK parameter (source ['Geola_1981_table_1:row11:col1'])
- dropped unlinked row (NIL): 'Free T4 (ng/dl)d' — extend the ontology if this is a real PK parameter (source ['Geola_1981_table_1:row13:col1'])
- table mostly unlinked (9/10 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- implicit units: '24-h thyroid 129I uptake (%)' — the LLM proposed '%', whose dimension does not fit Q349; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=thyroxine
- status held at "Needs review" — not promoted
- population split: 'before therapy' subgroup of Geola_1981 (paper reports 2 populations: after therapy a, before therapy)
- gap-filled Q22 (CL) from Latif_2015's review values (primary lacked it)
- gap-filled Q61 (V) from Inada_1975's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- table Geola_1981_table_1: unbound_uncertainty
- table Geola_1981_table_1: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[24-h thyroid 129i uptake]` | 11.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cholesterol]` |  | 158 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t3 in unextracted serum (ng/100 ml)c]` |  | 74 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t4 in extracted serum (ug/ 100 ml)b]` |  | 1.4 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | levothyroxine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | thyroxine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Latif_2015:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Inada_1975:review'] |
| C5_unit_missing_Q349 | fail | 1 / [time] |  | ['Geola_1981_table_1:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 24.13 | ['Latif_2015:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 101 L/h | ['Latif_2015:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 47 L | ['Inada_1975:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevothyroxine%5D%20Levothyroxine_Geola1981_before_therapy&body=Drug%3A%20levothyroxine%0ARecord%3A%20Levothyroxine_Geola1981_before_therapy%0APaper%3A%20Geola_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levothyroxine/Levothyroxine_Geola1981_before_therapy%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 00:26 UTC</sub>
