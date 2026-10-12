<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;pirfenidone&quot;,&quot;href&quot;:&quot;drugs/drug_pirfenidone/&quot;},{&quot;label&quot;:&quot;Barranco-Gardu\u00f1o_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pirfenidone_Braim2008_reference&quot;,&quot;label&quot;:&quot;Braim_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pirfenidone/Pirfenidone_Braim2008_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pirfenidone — `Pirfenidone_BarrancoGarduo2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of theta: this record has 0.26, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Barranco-Garduño LM et al., Pharmacokinetic evaluation of two pirfe…, Heliyon (2020)
  ·  DOI: [10.1016/j.heliyon.2020.e05279](https://doi.org/10.1016/j.heliyon.2020.e05279)

<div class="pk-model-meta" hidden drug="pirfenidone" model-id="Pirfenidone_BarrancoGarduo2020_reference" status="rejected" stale="false" population="patients with idiopathic pulmonary fibrosis and chronic hypersensitivity pneumonitis" measured-compound="pirfenidone" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| THETA (4) | `Q900` · equation variable | 0.26 | not captured | not captured | not captured | 31.23 | llm (0.6) | tbl3:row4:col2, tbl3:row4:col3, tbl3:row4:col4, tbl3:row4:col5, tbl3:row4:col6, tbl3:row4:col7 | — | not captured |
| THETA (7) | `Q310` · D1 | 0.02 | h | 72.0 | h | 27.53 | llm (0.6) | tbl3:row7:col2, tbl3:row7:col3, tbl3:row7:col4, tbl3:row7:col5, tbl3:row7:col6, tbl3:row7:col7 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'THETA (1)' — extend the ontology if this is a real PK parameter (source ['tbl3:row1:col1', 'tbl3:row1:col2', 'tbl3:row1:col3', 'tbl3:row1:col4', 'tbl3:row1:col5', 'tbl3:row1:col6', 'tbl3:row1:col7'])
- dropped unlinked row (NIL): 'THETA (2)' — extend the ontology if this is a real PK parameter (source ['tbl3:row2:col2', 'tbl3:row2:col3', 'tbl3:row2:col4', 'tbl3:row2:col5', 'tbl3:row2:col6', 'tbl3:row2:col7'])
- dropped unlinked row (NIL): 'THETA (3)' — extend the ontology if this is a real PK parameter (source ['tbl3:row3:col2', 'tbl3:row3:col3', 'tbl3:row3:col4', 'tbl3:row3:col5', 'tbl3:row3:col6', 'tbl3:row3:col7'])
- dropped unlinked row (NIL): 'THETA (5)' — extend the ontology if this is a real PK parameter (source ['tbl3:row5:col2', 'tbl3:row5:col3', 'tbl3:row5:col4', 'tbl3:row5:col5', 'tbl3:row5:col6', 'tbl3:row5:col7'])
- dropped duplicate Q900 ('THETA (6)', value '12.31') — already have one for this compound
- dropped unlinked row (NIL): 'THETA (8)' — extend the ontology if this is a real PK parameter (source ['tbl3:row8:col2', 'tbl3:row8:col3', 'tbl3:row8:col4', 'tbl3:row8:col5', 'tbl3:row8:col6', 'tbl3:row8:col7'])
- dropped unlinked row (NIL): 'THETA (9)' — extend the ontology if this is a real PK parameter (source ['tbl3:row9:col2', 'tbl3:row9:col3', 'tbl3:row9:col4', 'tbl3:row9:col5', 'tbl3:row9:col6', 'tbl3:row9:col7'])
- dropped unlinked row (NIL): 'THETA (10)' — extend the ontology if this is a real PK parameter (source ['tbl3:row10:col2', 'tbl3:row10:col3', 'tbl3:row10:col4', 'tbl3:row10:col5', 'tbl3:row10:col6', 'tbl3:row10:col7'])
- implicit units: 'THETA (7)' → h (from the popPK convention: 'The parameter description indicates a duration of zero-order input. In population PK studies for oral drugs (like pirfen')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pirfenidone
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tbl3:row5:col1 = 'V2 (L)'
- unparsed cell tbl3:row7:col1 = 'F1'
- unparsed cell tbl3:row8:col1 = 'Ka-FFcov2'
- unparsed cell tbl3:row9:col1 = 'Vd-FFcov2'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.8 (4/5 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta]` | 0.26 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['tbl3:row7:col2', 'tbl3:row7:col3', 'tbl3:row7:col4', 'tbl3:row7:col5', 'tbl3:row7:col6', 'tbl3:row7:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_pirfenidone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Barranco-Garduño_2020` / `Barranco-Garduño_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:10 UTC</sub>
