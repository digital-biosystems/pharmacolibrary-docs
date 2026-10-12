<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;droperidol&quot;,&quot;href&quot;:&quot;drugs/drug_droperidol/&quot;},{&quot;label&quot;:&quot;Fischler_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Droperidol_Foo2016_reference&quot;,&quot;label&quot;:&quot;Foo_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_droperidol/Droperidol_Foo2016_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# droperidol — `Droperidol_Fischler1986_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The droperidol two-compartment record was rejected because its structure leaves a compartment with no path from the dose, and it was built from the paper's abstract alone, with reported summary statistics standing in for a fitted model.**

The record for droperidol in anesthetized patients reports t1/2α 1.4 min, t1/2β 103.8 min, blood clearance 14.1 L/h, and a volume of distribution of 2.04 l/kg labeled 'Vd beta' but recorded as the peripheral compartment volume, an inconsistency in what the parameter represents. The structural check found an unreachable or orphan compartment, i.e. part of the model has no path from the dose, so the record was refused. Because only the paper's abstract was read, the reported summary statistics stood in for a fitted model rather than values derived from the full publication; no comparison was left uncomputed. Extracted — droperidol: t1/2α 1.4 min, t1/2β 104 min, CLb 14.1 L/h, V2 2.04 l/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has droperidol, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Fischler M et al., The pharmacokinetics of droperidol in a…, Anesthesiology (1986)
  ·  DOI: [10.1097/00000542-198604000-00012](https://doi.org/10.1097/00000542-198604000-00012)

<div class="pk-model-meta" hidden drug="droperidol" model-id="Droperidol_Fischler1986_reference" status="rejected" stale="false" population="anesthetized patients" measured-compound="droperidol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t 1/2 pi | `Q59` · t1/2α | 1.4 | min | 84.0 | [min] | not captured | llm (0.6) | Fischler_1986:abstract | — | not captured |
| t 1/2 beta | `Q60` · t1/2β | 103.8 | min | 6228.0 | [min] | not captured | llm_corrected (0.6) | Fischler_1986:abstract | — | not captured |
| total body clearance | `Q23` · CLb | 14.1 | L/h | 3.916666666666667e-06 | L/h | not captured | llm_corrected (0.6) | Fischler_1986:abstract | — | not captured |
| Vd beta | `Q64` · V2 | 2.04 | l/kg | 0.1428 | [l] / [kg] | not captured | llm_corrected (0.6) | Fischler_1986:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q59 ('t 1/2 alpha', value 14.3) — already have one for this compound
- unit_dimension_unknown: 'ml X min-1 X kg-1' (CLb)
- implicit units: 'total body clearance' → L/h (from the popPK convention: 'No unit stated in text or table caption. Blood clearance in population PK is conventionally expressed in L/h; a value of')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=droperidol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Fischler_1986_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t 1/2 alpha]` | not captured | 14.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 beta]` | 103.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 beta]` | not captured | 103.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 pi]` | 1.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 pi]` | not captured | 1.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | 14.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | not captured | 14.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd beta]` | 2.04 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd beta]` | not captured | 2.04 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | droperidol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | droperidol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Fischler_1986:abstract'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Fischler_1986:abstract'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Fischler_1986:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Fischler_1986:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.1 | not captured | not captured | ['Fischler_1986:abstract'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q23 | pass | clearance within physiological range | 14.1 L/h | not captured | not captured | ['Fischler_1986:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 143 L | not captured | not captured | ['Fischler_1986:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_droperidol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fischler_1986` / `Fischler_1986::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 15:27 UTC</sub>
