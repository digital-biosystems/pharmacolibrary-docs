<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;delapril&quot;,&quot;href&quot;:&quot;drugs/drug_delapril/&quot;},{&quot;label&quot;:&quot;Onoyama_1988 \u00b7 metabolite_2_m_2_srf&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# delapril — `Delapril_Onoyama1988_metabolite_2_m_2_srf`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has delapril (cv-3317) → m-1 (cv-3317-cooh) (metabolism); delapril (cv-3317) → m-2 (dkp-cooh) (metabolism); delapril (cv-3317) → m-3 (cv-3317-(5-oh)-cooh) (metabolism), the second reading delapril → m-1 (metabolism); delapril → m-2 (metabolism); delapril → m-3 (metabolism). That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:26:07.536132+00:00) predates the upstream re-run (2026-10-07 05:38:12.733121+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `delapril`, measured `M-1 (CV-3317-COOH)`.

## Citation
Onoyama K et al., Pharmacokinetics of a new angiotensin I…, Clinical pharmacology and t… (1988)
  ·  DOI: [10.1038/clpt.1988.27](https://doi.org/10.1038/clpt.1988.27)

<div class="pk-model-meta" hidden drug="delapril" model-id="Delapril_Onoyama1988_metabolite_2_m_2_srf" status="rejected" stale="true" population="adults with normal and deteriorated kidney function" measured-compound="M-1 (CV-3317-COOH)" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '237 ± 47' — extend the ontology if this is a real PK parameter (source ['Onoyama_1988_table_5:row0:col1', 'Onoyama_1988_table_5:row0:col4'])
- dropped unlinked row (NIL): '2.11 ± 0.33' — extend the ontology if this is a real PK parameter (source ['Onoyama_1988_table_5:row1:col1', 'Onoyama_1988_table_5:row1:col4'])
- dropped unlinked row (NIL): '2.75 ± 0.33' — extend the ontology if this is a real PK parameter (source ['Onoyama_1988_table_5:row2:col1', 'Onoyama_1988_table_5:row2:col4'])
- dropped unlinked row (NIL): '1370 ± 177' — extend the ontology if this is a real PK parameter (source ['Onoyama_1988_table_5:row3:col1', 'Onoyama_1988_table_5:row3:col4'])
- table mostly unlinked (4/4 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=M-1 (CV-3317-COOH)
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 'metabolite 2 (m-2) srf' subgroup of Onoyama_1988 (paper reports 4 populations: metabolite 1 (m-1), metabolite 2 (m-2) nrf, metabolite 2 (m-2) srf, metabolite 3 (m-3))
- row roles: 4 per-group rows of M-1 (CV-3317-COOH) summary_statistic but 4 reference group(s) — kept as printed
- row roles: 4 per-group rows of M-2 (DKP-COOH) summary_statistic but 4 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged parent→M-1 (CV-3317-COOH) ×16, parent→M-2 (DKP-COOH) ×20

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3, 5
- unparsed cell Onoyama_1988_table_3:row1:col5 = '929 ± 145*'
- unparsed cell Onoyama_1988_table_3:row1:col6 = '780 ± 118*'
- unparsed cell Onoyama_1988_table_3:row2:col6 = '2.30 ± 0.17*'
- unparsed cell Onoyama_1988_table_3:row3:col3 = '2.33 ± 0.35*'
- unparsed cell Onoyama_1988_table_3:row3:col5 = '1.90 ± 0.29*'
- unparsed cell Onoyama_1988_table_3:row3:col6 = '3.44 ± 0.81*'
- unparsed cell Onoyama_1988_table_3:row4:col5 = '4225 ± 938*'
- unparsed cell Onoyama_1988_table_3:row4:col6 = '5983 ± 1523*'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (3/4 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['delapril (cv-3317)', 'm-1 (cv-3317-cooh)', 'metabolism'], ['delapril (cv-3317)', 'm-2 (dkp-cooh)', 'metabolism'], ['delapril (cv-3317)', 'm-3 (cv-3317-(5-oh)-cooh)', 'metabolism']] | [['delapril', 'm-1', 'metabolism'], ['delapril', 'm-2', 'metabolism'], ['delapril', 'm-3', 'metabolism']] | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | fail | not captured | 0 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_delapril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Onoyama_1988` / `Onoyama_1988::metabolite_2_m_2_srf`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:38 UTC</sub>
