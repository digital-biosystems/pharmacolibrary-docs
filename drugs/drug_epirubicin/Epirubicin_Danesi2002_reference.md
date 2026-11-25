<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;epirubicin&quot;,&quot;href&quot;:&quot;drugs/drug_epirubicin/&quot;},{&quot;label&quot;:&quot;Danesi_2002 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epirubicin_Robert1994_reference&quot;,&quot;label&quot;:&quot;Robert_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_epirubicin/Epirubicin_Robert1994_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# epirubicin — `Epirubicin_Danesi2002_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> No volume or clearance — not a compartmental population PK model; c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit micromol l-1 h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q88 unit micromol l-1 h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q88 unit micromol l-1 h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="epirubicin" model-id="Epirubicin_Danesi2002_reference" status="rejected" stale="false" population="metastatic breast cancer patients" measured-compound="epirubicin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Danesi R, Innocenti F, Fogli S, Gennari A, Baldini E, Di Paolo A et al. Pharmacokinetics and pharmacodynamics of combination chemotherapy with paclitaxel and epirubicin in breast cancer patients. British journal of clinical pharmacology 53(5):508–518 (2002).
  ·  DOI: [10.1046/j.1365-2125.2002.01579.x](https://doi.org/10.1046/j.1365-2125.2002.01579.x)

## Population and dosing

**Population:** metastatic breast cancer patients · condition metastatic breast cancer · age group adult.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC of epirubicinol | AUC | 0.5 | micromol l-1 h |
| epirubicin AUC | AUC | 0.74 | micromol l-1 h |
| CLTB | Km | -25.35 | l h-1 m-2 |
| AUC | AUC | 3.16 | micromol l-1 h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.077). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model; c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q88 unit micromol l-1 h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q88 unit micromol l-1 h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3; Q88 unit micromol l-1 h ([substance] * [time] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — epirubicinol: AUC 0.5 micromol l-1 h; epirubicin: AUC 0.74 micromol l-1 h, Km -25.4 l h-1 m-2, AUC 3.16 micromol l-1 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has epirubicin, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| AUC of epirubicinol | `Q88` · AUC | 0.5 | micromol l-1 h | µM/(h·l) | llm_confirmed (0.6) | Danesi_2002:abstract, Danesi_2002:abstract, Danesi_2002:abstract, Danesi_2002:abstract |
| epirubicin AUC | `Q88` · AUC | 0.74 | micromol l-1 h | µM/(h·l) | llm_confirmed (0.6) | Danesi_2002:abstract, Danesi_2002:abstract |
| CLTB | `Q1` · Km | -25.35 | l h-1 m-2 | l/(h·m-2) | llm (0.6) | Danesi_2002:abstract, Danesi_2002:abstract, Danesi_2002:abstract |
| AUC | `Q88` · AUC | 3.16 | micromol l-1 h | µM/(h·l) | exact (1) | Danesi_2002:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'epirubicin' — extend the ontology if this is a real PK parameter (source ['Danesi_2002:abstract'])
- dropped unlinked row (NIL): 'followed' — extend the ontology if this is a real PK parameter (source ['Danesi_2002:abstract', 'Danesi_2002:abstract'])
- dropped unlinked row (NIL): 'paclitaxel' — extend the ontology if this is a real PK parameter (source ['Danesi_2002:abstract', 'Danesi_2002:abstract', 'Danesi_2002:abstract', 'Danesi_2002:abstract'])
- unit_dimension_mismatch: 'AUC of epirubicinol' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'epirubicin AUC' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_unknown: 'l h-1 m-2' (Km)
- unit_dimension_mismatch: 'AUC' → Q88 (unit '[substance] * [time] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'tC0.1' — extend the ontology if this is a real PK parameter (source ['Danesi_2002:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=epirubicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged epirubicin→parent ×6, epirubicin→paclitaxel ×4, epirubicin→epirubicinol ×4
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Danesi_2002_metadata.yaml (18 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.077 (1/13 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['epirubicin', 'epirubicinol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc of epirubicinol]` | 0.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc]` | 3.16 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[baseline cltb]` |  | 74.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cltb decrease]` |  | -25.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cltb]` | -25.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[epirubicin auc]` | 0.74 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[epirubicinol auc increase]` |  | +0.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[paclitaxel]` |  | 175 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tc0.1 threshold]` |  | 0.1 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | epirubicin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | epirubicin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | micromol l-1 h ([substance] * [time] / [length] ** 3) | ['Danesi_2002:abstract', 'Danesi_2002:abstract', 'Danesi_2002:abstract', 'Danesi_2002:abstract'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | micromol l-1 h ([substance] * [time] / [length] ** 3) | ['Danesi_2002:abstract', 'Danesi_2002:abstract'] |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | micromol l-1 h ([substance] * [time] / [length] ** 3) | ['Danesi_2002:abstract'] |
| C5_unit_missing_Q1 | fail | [mass] / [length] ** 3 | l h-1 m-2 | ['Danesi_2002:abstract', 'Danesi_2002:abstract', 'Danesi_2002:abstract'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepirubicin%5D%20Epirubicin_Danesi2002_reference&body=Drug%3A%20epirubicin%0ARecord%3A%20Epirubicin_Danesi2002_reference%0APaper%3A%20Danesi_2002%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_epirubicin/Epirubicin_Danesi2002_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 22:43 UTC</sub>
