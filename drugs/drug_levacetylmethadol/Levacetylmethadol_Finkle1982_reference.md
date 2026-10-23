<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;levacetylmethadol&quot;,&quot;href&quot;:&quot;drugs/drug_levacetylmethadol/&quot;},{&quot;label&quot;:&quot;Finkle_1982 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# levacetylmethadol — `Levacetylmethadol_Finkle1982_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The levacetylmethadol record was rejected because the abstract-only source reports only half-lives (t1/2α 2.4 h, t1/2β 37.5 h, t1/2z 38.2 h) with no distribution volume or clearance, and the metabolites nor-LAAM and dinor-LAAM are unlinked.

<div class="pk-model-meta" hidden drug="levacetylmethadol" model-id="Levacetylmethadol_Finkle1982_reference" status="rejected" stale="false" population="human subjects (opioid-dependent/maintenance)" measured-compound="levacetylmethadol" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Finkle BS, Jennison TA, Chinn DM, Ling W, Holmes ED. Plasma and urine disposition of 1-alpha-acetylmethadol and its principal metabolites in man. Journal of analytical toxicology 6(2):100–105 (1982).
  ·  DOI: [10.1093/jat/6.2.100](https://doi.org/10.1093/jat/6.2.100)

## Population and dosing

**Population:** human subjects (opioid-dependent/maintenance) · age group adult · n = 12.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 alpha | t1/2α | 2.4 | hours |
| t1/2 beta | t1/2β | 37.5 | hours |
| terminal half-life | t1/2z | 38.2 | hours |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The levacetylmethadol record was rejected because the abstract-only source reports only half-lives (t1/2α 2.4 h, t1/2β 37.5 h, t1/2z 38.2 h) with no distribution volume or clearance, and the metabolites nor-LAAM and dinor-LAAM are unlinked.**

The paper is an exposure/outcome study: it gives no distribution volume and no clearance or elimination rate for levacetylmethadol, so no compartmental population PK model could be formed from the reported half-lives alone. The metabolites nor-LAAM and dinor-LAAM are formed from levacetylmethadol and nor-LAAM respectively, but their formation links have unknown parameters, leaving them without a usable path from the dose. The record was built from the abstract only, so summary statistics stood in for a fitted model. Extracted — levacetylmethadol: t1/2α 2.4 hours, t1/2β 37.5 hours, t1/2z 38.2 hours.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has levacetylmethadol, the second reading 1-alpha-acetylmethadol; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 alpha | `Q59` · t1/2α | 2.4 | hours | 8640 | s | h | exact (1) | Finkle_1982:abstract |
| t1/2 beta | `Q60` · t1/2β | 37.5 | hours | 1.35e+05 | s | h | exact (1) | Finkle_1982:abstract, Finkle_1982:abstract, Finkle_1982:abstract |
| terminal half-life | `Q57` · t1/2z | 38.2 | hours | 1.375e+05 | s | h | llm (0.6) | Finkle_1982:abstract, Finkle_1982:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=levacetylmethadol
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 3/3 row label(s) assigned, 0 linked by role
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Finkle_1982_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (1/7 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['levacetylmethadol', 'nor-laam', 'metabolism'], ['nor-laam', 'dinor-laam', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[t1/2 alpha]` | 2.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 beta]` | 37.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life]` | 38.2 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | levacetylmethadol | 1-alpha-acetylmethadol | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | levacetylmethadol | 1-alpha-acetylmethadol | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q57 | pass | [time] |  | ['Finkle_1982:abstract', 'Finkle_1982:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Finkle_1982:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Finkle_1982:abstract', 'Finkle_1982:abstract', 'Finkle_1982:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blevacetylmethadol%5D%20Levacetylmethadol_Finkle1982_reference&body=Drug%3A%20levacetylmethadol%0ARecord%3A%20Levacetylmethadol_Finkle1982_reference%0APaper%3A%20Finkle_1982%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_levacetylmethadol/Levacetylmethadol_Finkle1982_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 03:29 UTC</sub>
