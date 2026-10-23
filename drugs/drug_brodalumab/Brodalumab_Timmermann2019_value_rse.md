<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;brodalumab&quot;,&quot;href&quot;:&quot;drugs/drug_brodalumab/&quot;},{&quot;label&quot;:&quot;Timmermann_2019 \u00b7 value_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brodalumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# brodalumab — `Brodalumab_Timmermann2019_value_rse`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Brodalumab's absorption rate constant was rejected because its per-day unit could not be converted to a standard SI unit.

<div class="pk-model-meta" hidden drug="brodalumab" model-id="Brodalumab_Timmermann2019_value_rse" status="rejected" stale="false" population="patients with moderate to severe plaque psoriasis" measured-compound="brodalumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Timmermann S, Hall A. Population pharmacokinetics of brodalumab in patients with moderate to severe plaque psoriasis. Basic & clinical pharmacology & toxicology 125(1):16–25 (2019).
  ·  DOI: [10.1111/bcpt.13202](https://doi.org/10.1111/bcpt.13202)

## Population and dosing

**Population:** patients with moderate to severe plaque psoriasis · condition plaque psoriasis · age group adult.

**Dosing:** 210 mg, sc, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Ka (d−1) | kabs | 0.300 | d−1 | 2.8 |
| V1 (L) | V1 | 4.68 | L | 0.99 |
| CL (L/d) | CL | 0.155 | L/d | 0.20 |
| V max (mg/d) | Vmax | 6.07 | mg/d | 0.53 |
| Km (µg/mL) | Km | 0.02 | µg/mL |  |
| Q (L/d) | Q | 0.328 | L/d | 5.34 |
| V2 (L) | V2 | 2.41 | L | 3.08 |
| F (%) | Fab | 54.8 |  |  |
| theta_q319_weight_power | theta_q319_weight_power | 0.938 |  | 1.1 |
| theta_q319_weight_power | theta_q319_weight_power | 0.767 |  | 1.02 |
| theta_q319_weight_power | theta_q319_weight_power | 0.769 |  | 0.91 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Brodalumab's absorption rate constant was rejected because its per-day unit could not be converted to a standard SI unit.**

The absorption rate constant is reported as 0.300 d−1, but the specific per-day unit was not recognized by the system's unit conversion logic. This prevented the parameter from being properly defined in standard units. Consequently, the model record was refused due to this dimensional mismatch. Extracted — brodalumab: kabs 0.3 d−1, V1 4.68 L, CL 0.155 L/d, Vmax 6.07 mg/d, Km 0.02 µg/mL, Q 0.328 L/d, V2 2.41 L, Fab 54.8.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Ka (d−1) | `Q49` · kabs | 0.300 | d−1 | 3.472e-06 | 1/s | 1/d | 2.8 | exact (1) | bcpt13202-tbl-0003:row1:col1 |
| V1 (L) | `Q63` · V1 | 4.68 | L | 0.00468 | m3 | l | 0.99 | exact (1) | bcpt13202-tbl-0003:row2:col1 |
| CL (L/d) | `Q22` · CL | 0.155 | L/d | 1.794e-09 | m3/s | l/d | 0.20 | exact (1) | bcpt13202-tbl-0003:row3:col1 |
| V max (mg/d) | `Q66` · Vmax | 6.07 | mg/d |  |  | mg/d | 0.53 | special_case (0.95) | bcpt13202-tbl-0003:row4:col1 |
| Km (µg/mL) | `Q1` · Km | 0.02 | µg/mL |  |  | µg/ml |  | exact (1) | bcpt13202-tbl-0003:row5:col1 |
| Q (L/d) | `Q30` · Q | 0.328 | L/d | 3.796e-09 | m3/s | l/d | 5.34 | exact (1) | bcpt13202-tbl-0003:row6:col1 |
| V2 (L) | `Q64` · V2 | 2.41 | L | 0.00241 | m3 | l | 3.08 | exact (1) | bcpt13202-tbl-0003:row7:col1 |
| F (%) | `Q40` · Fab | 54.8 |  |  |  |  |  | exact (1) | bcpt13202-tbl-0003:row8:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.938 |  |  |  |  | 1.1 |  | bcpt13202-tbl-0003:row9:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.767 |  |  |  |  | 1.02 |  | bcpt13202-tbl-0003:row10:col1 |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.769 |  |  |  |  | 0.91 |  | bcpt13202-tbl-0003:row11:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'V max (mg/d)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=brodalumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'value (rse%)' subgroup of Timmermann_2019 (paper reports 3 populations: mean, median, value (rse%))
- molar mass: none found for 'brodalumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Timmermann_2019_table_4:row2:col3 = '1‐6'
- companion parameter table 4 transcribed (10 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (21/21 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['bcpt13202-tbl-0003:row5:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['bcpt13202-tbl-0003:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['bcpt13202-tbl-0003:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['bcpt13202-tbl-0003:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['bcpt13202-tbl-0003:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['bcpt13202-tbl-0003:row7:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/d | ['bcpt13202-tbl-0003:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.155 | ['bcpt13202-tbl-0003:row3:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00646 L/h | ['bcpt13202-tbl-0003:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.68 L | ['bcpt13202-tbl-0003:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.41 L | ['bcpt13202-tbl-0003:row7:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbrodalumab%5D%20Brodalumab_Timmermann2019_value_rse&body=Drug%3A%20brodalumab%0ARecord%3A%20Brodalumab_Timmermann2019_value_rse%0APaper%3A%20Timmermann_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_brodalumab/Brodalumab_Timmermann2019_value_rse%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:36 UTC</sub>
