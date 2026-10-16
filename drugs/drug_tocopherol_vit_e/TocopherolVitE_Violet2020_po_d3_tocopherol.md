<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;tocopherol (vit E)&quot;,&quot;href&quot;:&quot;drugs/drug_tocopherol_vit_e/&quot;},{&quot;label&quot;:&quot;Violet_2020 \u00b7 po_d3_tocopherol&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tocopherol (vit E) — `TocopherolVitE_Violet2020_po_d3_tocopherol`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), gpt-oss:120b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the elimination rate constant kel of alpha-tocopherol was reported with the unit 'Ke' instead of a dimensioned unit (value 0.019), a dimension mismatch that could not be converted to SI.**

The kel parameter for alpha-tocopherol carries the verbatim unit 'Ke' — the label text rather than a physical unit — so its dimension check failed and no SI value could be assigned, since that unit could not be converted. The record also contains a fractional absorption parameter (0–72 hours) that was left without a value; a second reader assigned it 0.537, and further disagreed on the dose compound and primary analyte, reading them as d6-α-tocopherol rather than alpha-tocopherol. The reported PK values themselves (t1/2z 39.0 h, Cmax 0.20 µM, tmax 8.5 h, AUC0–72h 8.6 µM×h) are consistent with the reported kel of 0.019. Extracted — alpha-tocopherol: kel 0.019 Ke, t1/2z 39 h, Cmax 0.2, tmax 8.5, AUCt 8.6.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has deuterated α-tocopherols, the second reading deuterated α-tocopherol (d3 and d6); it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:41:49.907787+00:00) predates the upstream re-run (2026-10-07 17:04:52.413816+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `deuterated α-tocopherols`, measured `d6-α-tocopherol`.

## Citation
Violet PC et al., Vitamin E sequestration by liver fat in…, JCI insight (2020)
  ·  DOI: [10.1172/jci.insight.133309](https://doi.org/10.1172/jci.insight.133309)

<div class="pk-model-meta" hidden drug="tocopherol (vit E)" model-id="TocopherolVitE_Violet2020_po_d3_tocopherol" status="rejected" stale="true" population="women with obesity-associated hepatosteatosis and healthy controls" measured-compound="d6-α-tocopherol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Elimination rate (Ke) | `Q47` · kel | 0.022 | Ke | not captured | [ke] | not captured | exact (1.0) | Violet_2020_table_2:row0:col4 | — | not captured |
| Half-life (h) | `Q57` · t1/2z | 31.5 | h | 113400.0 | [h] | not captured | llm (0.6) | Violet_2020_table_2:row2:col4 | — | not captured |
| Cmax (µM)A | `Q32` · Cmax | 0.28 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Violet_2020_table_2:row4:col4 | — | not captured |
| Tmax (h)B | `Q56` · tmax | 11.4 | h | 41040.0 | h | not captured | llm_confirmed (0.6) | Violet_2020_table_2:row6:col4 | — | not captured |
| AUC0–72h (µM × h)C | `Q19` · AUCt | 10.7 | not captured | not captured | not captured | not captured | llm (0.6) | Violet_2020_table_2:row10:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (2/10 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.583 (7/12 fields) | 5 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0-72h (um × h)c].value` | 10.7 | 17.5 | mismatch |
| `gpt-oss-120b` | `parameters[cmax (um)a].value` | 0.28 | 0.48 | mismatch |
| `gpt-oss-120b` | `parameters[elimination rate].value` | 0.022 | 0.024 | mismatch |
| `gpt-oss-120b` | `parameters[half-life].value` | 31.5 | 30.0 | mismatch |
| `gpt-oss-120b` | `parameters[tmax (h)b].value` | 11.4 | 7.7 | mismatch |
| `gpt-oss-120b` | `parameters[vldl % enrichment, auc]` | not captured | 24.4 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | deuterated α-tocopherols | deuterated α-tocopherol (d3 and d6) | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | d6-α-tocopherol | deuterated α-tocopherol (d3 and d6) | mismatch |
| `gpt-oss:120b` | `parameters[fractional absorption, 0-72 hoursc]` | not captured | 0.537 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ldl % enrichment, auc]` | not captured | 0.019 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vldl % enrichment, auc]` | not captured | 0.016 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | alpha-tocopherol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | alpha-tocopherol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q47 | fail | 0.022 | 0.024 | 1.0909 | 0.05 | footnote reference category |
| C2_base_Q56 | fail | 11.4 | 7.7 | 0.6754 | 0.05 | footnote reference category |
| C2_base_Q57 | pass | 31.5 | 30.0 | 0.9524 | 0.05 | footnote reference category |
| C5_dimension_Q47 | fail | [current] * [time] | Ke | not captured | not captured | ['Violet_2020_table_2:row0:col4'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Violet_2020_table_2:row6:col4'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Violet_2020_table_2:row2:col4'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Violet_2020_table_2:row10:col4'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Violet_2020_table_2:row4:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tocopherol_vit_e/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Violet_2020` / `Violet_2020::po_d3_tocopherol`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:04 UTC</sub>
