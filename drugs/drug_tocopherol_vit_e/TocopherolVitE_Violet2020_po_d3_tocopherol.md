<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;tocopherol (vit E)&quot;,&quot;href&quot;:&quot;drugs/drug_tocopherol_vit_e/&quot;},{&quot;label&quot;:&quot;Violet_2020 \u00b7 po_d3_tocopherol&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tocopherol (vit E) — `TocopherolVitE_Violet2020_po_d3_tocopherol`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:41 UTC (Rejected), but the paper was screened again on 2026-10-07 17:04 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The record was rejected because the elimination rate constant kel of alpha-tocopherol was reported with the unit 'Ke' instead of a dimensioned unit (value 0.019), a dimension mismatch that could not be converted to SI.

<div class="pk-model-meta" hidden drug="tocopherol (vit E)" model-id="TocopherolVitE_Violet2020_po_d3_tocopherol" status="rejected" stale="true" population="women with obesity-associated hepatosteatosis and healthy controls" measured-compound="d6-α-tocopherol" parameterization="mechanistic" topology="1C"></div>

## Citation
Violet PC, Ebenuwa IC, Wang Y, Niyyati M, Padayatty SJ, Head B et al. Vitamin E sequestration by liver fat in humans. JCI insight 5(1) (2020).
  ·  DOI: [10.1172/jci.insight.133309](https://doi.org/10.1172/jci.insight.133309)

## Population and dosing

**Population:** women with obesity-associated hepatosteatosis and healthy controls · condition obesity-associated hepatosteatosis · age group adult.

**Dosing:** 2, 5 mg, oral, iv, single.

**Dosed compound ≠ measured compound:** dosed deuterated α-tocopherols, measured d6-α-tocopherol.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Elimination rate (Ke) | kel | 0.022 | Ke |
| Half-life (h) | t1/2z | 31.5 | h |
| Cmax (µM)A | Cmax | 0.28 |  |
| Tmax (h)B | tmax | 11.4 | h |
| AUC0–72h (µM × h)C | AUCt | 10.7 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the elimination rate constant kel of alpha-tocopherol was reported with the unit 'Ke' instead of a dimensioned unit (value 0.019), a dimension mismatch that could not be converted to SI.**

The kel parameter for alpha-tocopherol carries the verbatim unit 'Ke' — the label text rather than a physical unit — so its dimension check failed and no SI value could be assigned, since that unit could not be converted. The record also contains a fractional absorption parameter (0–72 hours) that was left without a value; a second reader assigned it 0.537, and further disagreed on the dose compound and primary analyte, reading them as d6-α-tocopherol rather than alpha-tocopherol. The reported PK values themselves (t1/2z 39.0 h, Cmax 0.20 µM, tmax 8.5 h, AUC0–72h 8.6 µM×h) are consistent with the reported kel of 0.019. Extracted — alpha-tocopherol: kel 0.019 Ke, t1/2z 39 h, Cmax 0.2, tmax 8.5, AUCt 8.6.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has deuterated α-tocopherols, the second reading deuterated α-tocopherol (d3 and d6); it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Elimination rate (Ke) | `Q47` · kel | 0.022 | Ke |  |  | ke | exact (1) | Violet_2020_table_2:row0:col4 |
| Half-life (h) | `Q57` · t1/2z | 31.5 | h | 1.134e+05 | s | h | llm (0.6) | Violet_2020_table_2:row2:col4 |
| Cmax (µM)A | `Q32` · Cmax | 0.28 |  |  |  |  | llm_confirmed (0.6) | Violet_2020_table_2:row4:col4 |
| Tmax (h)B | `Q56` · tmax | 11.4 | h | 4.104e+04 | s | h | llm_confirmed (0.6) | Violet_2020_table_2:row6:col4 |
| AUC0–72h (µM × h)C | `Q19` · AUCt | 10.7 |  |  |  |  | llm (0.6) | Violet_2020_table_2:row10:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'po d3-α-tocopherol' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Elimination rate (Ke)' → Q47 (unit '[current] * [time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q19 ('AUC0–8h (µM × h)C', value '1.19') — already have one for this compound
- implicit units: 'Cmax (µM)A' — the LLM proposed 'µM', whose dimension does not fit Q32; left unset
- implicit units: 'Tmax (h)B' → h (from the paper text: "The provided parameter list includes the unit in parentheses immediately following the parameter name: 'Tmax (h)B = 11.4")
- implicit units: 'AUC0–72h (µM × h)C' — the LLM proposed 'µM × h', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=d6-α-tocopherol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'po d3-α-tocopherol' subgroup of Violet_2020 (paper reports 2 populations: iv d6-α-tocopherol, po d3-α-tocopherol)
- molar mass: no plausible PubChem entry for 'd6-α-tocopherol' ('d6-α-tocopherol') — left in mass units
- molar mass: none found for 'tocopherol_vit_e' — its concentrations stay mass-only
- molar mass: none found for 'd6-α-tocopherol' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-72h (um × h)c].value` | 10.7 | 17.5 | mismatch |
| `gpt-oss-120b` | `parameters[cmax (um)a].value` | 0.28 | 0.48 | mismatch |
| `gpt-oss-120b` | `parameters[elimination rate].value` | 0.022 | 0.024 | mismatch |
| `gpt-oss-120b` | `parameters[half-life].value` | 31.5 | 30.0 | mismatch |
| `gpt-oss-120b` | `parameters[tmax (h)b].value` | 11.4 | 7.7 | mismatch |
| `gpt-oss-120b` | `parameters[vldl % enrichment, auc]` |  | 24.4 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | deuterated α-tocopherols | deuterated α-tocopherol (d3 and d6) | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | d6-α-tocopherol | deuterated α-tocopherol (d3 and d6) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | fail |  |  |  |  |  |
| C2_base_Q47 | fail | 0.022 | 0.024 | 1.091 | 0.05 | footnote reference category |
| C2_base_Q56 | fail | 11.4 | 7.7 | 0.6754 | 0.05 | footnote reference category |
| C2_base_Q57 | pass | 31.5 | 30 | 0.9524 | 0.05 | footnote reference category |
| C5_dimension_Q47 | fail | [current] * [time] | Ke |  |  | ['Violet_2020_table_2:row0:col4'] |
| C5_dimension_Q56 | pass | [time] |  |  |  | ['Violet_2020_table_2:row6:col4'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Violet_2020_table_2:row2:col4'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 |  |  |  | ['Violet_2020_table_2:row10:col4'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  |  |  | ['Violet_2020_table_2:row4:col4'] |
| C8_topology | pass |  |  |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btocopherol_vit_e%5D%20TocopherolVitE_Violet2020_po_d3_tocopherol&body=Drug%3A%20tocopherol_vit_e%0ARecord%3A%20TocopherolVitE_Violet2020_po_d3_tocopherol%0APaper%3A%20Violet_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tocopherol_vit_e/TocopherolVitE_Violet2020_po_d3_tocopherol%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 17:04 UTC</sub>
