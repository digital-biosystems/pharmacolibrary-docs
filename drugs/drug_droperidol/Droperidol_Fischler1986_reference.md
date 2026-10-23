<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;droperidol&quot;,&quot;href&quot;:&quot;drugs/drug_droperidol/&quot;},{&quot;label&quot;:&quot;Fischler_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Droperidol_Foo2016_reference&quot;,&quot;label&quot;:&quot;Foo_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_droperidol/Droperidol_Foo2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# droperidol — `Droperidol_Fischler1986_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The droperidol two-compartment record was rejected because its structure leaves a compartment with no path from the dose, and it was built from the paper's abstract alone, with reported summary statistics standing in for a fitted model.

<div class="pk-model-meta" hidden drug="droperidol" model-id="Droperidol_Fischler1986_reference" status="rejected" stale="false" population="anesthetized patients" measured-compound="droperidol" parameterization="mechanistic" topology="1C"></div>

## Citation
Fischler M, Bonnet F, Trang H, Jacob L, Levron JC, Flaisler B et al. The pharmacokinetics of droperidol in anesthetized patients. Anesthesiology 64(4):486–489 (1986).
  ·  DOI: [10.1097/00000542-198604000-00012](https://doi.org/10.1097/00000542-198604000-00012)

## Population and dosing

**Population:** anesthetized patients · condition anesthesia (surgical patients) · age group adult · n = 10.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t 1/2 pi | t1/2α | 1.4 | min |
| t 1/2 beta | t1/2β | 103.8 | min |
| total body clearance | CLb | 14.1 | L/h |
| Vd beta | V2 | 2.04 | l/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The droperidol two-compartment record was rejected because its structure leaves a compartment with no path from the dose, and it was built from the paper's abstract alone, with reported summary statistics standing in for a fitted model.**

The record for droperidol in anesthetized patients reports t1/2α 1.4 min, t1/2β 103.8 min, blood clearance 14.1 L/h, and a volume of distribution of 2.04 l/kg labeled 'Vd beta' but recorded as the peripheral compartment volume, an inconsistency in what the parameter represents. The structural check found an unreachable or orphan compartment, i.e. part of the model has no path from the dose, so the record was refused. Because only the paper's abstract was read, the reported summary statistics stood in for a fitted model rather than values derived from the full publication; no comparison was left uncomputed. Extracted — droperidol: t1/2α 1.4 min, t1/2β 104 min, CLb 14.1 L/h, V2 2.04 l/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has droperidol, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t 1/2 pi | `Q59` · t1/2α | 1.4 | min | 84 | s | min | llm (0.6) | Fischler_1986:abstract |
| t 1/2 beta | `Q60` · t1/2β | 103.8 | min | 6228 | s | min | llm_corrected (0.6) | Fischler_1986:abstract |
| total body clearance | `Q23` · CLb | 14.1 | L/h | 3.917e-06 | m3/s | L/h | llm_corrected (0.6) | Fischler_1986:abstract |
| Vd beta | `Q64` · V2 | 2.04 | l/kg | 0.1428 | m3 | l/kg | llm_corrected (0.6) | Fischler_1986:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
| `gpt-oss-120b` | `parameters[t 1/2 alpha]` |  | 14.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 beta]` | 103.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 beta]` |  | 103.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 pi]` | 1.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 pi]` |  | 1.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | 14.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` |  | 14.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd beta]` | 2.04 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd beta]` |  | 2.04 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | droperidol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | droperidol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Fischler_1986:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Fischler_1986:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Fischler_1986:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Fischler_1986:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.1 | ['Fischler_1986:abstract'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q23 | pass | clearance within physiological range | 14.1 L/h | ['Fischler_1986:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 143 L | ['Fischler_1986:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdroperidol%5D%20Droperidol_Fischler1986_reference&body=Drug%3A%20droperidol%0ARecord%3A%20Droperidol_Fischler1986_reference%0APaper%3A%20Fischler_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_droperidol/Droperidol_Fischler1986_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 15:27 UTC</sub>
