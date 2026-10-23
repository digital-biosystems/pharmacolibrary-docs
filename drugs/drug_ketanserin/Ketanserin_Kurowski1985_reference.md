<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;ketanserin&quot;,&quot;href&quot;:&quot;drugs/drug_ketanserin/&quot;},{&quot;label&quot;:&quot;Kurowski_1985 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ketanserin_Hanff2005_reference&quot;,&quot;label&quot;:&quot;Hanff_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketanserin/Ketanserin_Hanff2005_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketanserin_Michiels1988_reference&quot;,&quot;label&quot;:&quot;Michiels_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketanserin/Ketanserin_Michiels1988_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ketanserin_Trenk1983_reference&quot;,&quot;label&quot;:&quot;Trenk_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ketanserin/Ketanserin_Trenk1983_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ketanserin — `Ketanserin_Kurowski1985_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-10-05 09:27 UTC) predates the latest extraction (2026-10-06 15:40 UTC); the status shown comes from the current checks. No volume or clearance — not a compartmental population PK model.

<div class="pk-model-meta" hidden drug="ketanserin" model-id="Ketanserin_Kurowski1985_reference" status="rejected" stale="true" population="elderly subjects" measured-compound="ketanserin" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Kurowski M. Bioavailability and pharmacokinetics of ketanserin in elderly subjects. European journal of clinical pharmacology 28(4):411–417 (1985).
  ·  DOI: [10.1007/BF00544359](https://doi.org/10.1007/BF00544359)

## Population and dosing

**Population:** elderly subjects · condition healthy · age group elderly · n = &gt;=21.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| absolute bioavailability of ketanserin tablets | Fab | 52.7 | % |
| relative bioavailability compared to a solution containing an equal quantity of active compound | Frel | 85.5 | % |
| peak | Cmax | 103.8 | ng/ml |
| half-life | t1/2z | 17.7 | h |
| AUC over one dosing interval at steady-state | AUCSS | 666 | ng X h/ml |
| AUC extrapolated to infinity | AUC∞ | 1200 | ng X h/ml |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. Only the abstract was available, so reported summary statistics stand in for a fitted model.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ketanserin, the second reading unknown; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| absolute bioavailability of ketanserin tablets | `Q40` · Fab | 52.7 | % |  |  |  | llm_confirmed (0.6) | Kurowski_1985:abstract |
| relative bioavailability compared to a solution containing an equal quantity of active compound | `Q87` · Frel | 85.5 | % |  |  |  | llm_confirmed (0.6) | Kurowski_1985:abstract |
| peak | `Q32` · Cmax | 103.8 | ng/ml |  |  | ng/ml | exact (1) | Kurowski_1985:abstract |
| half-life | `Q57` · t1/2z | 17.7 | h | 6.372e+04 | s | h | llm (0.6) | Kurowski_1985:abstract |
| AUC over one dosing interval at steady-state | `Q18` · AUCSS | 666 | ng X h/ml |  |  | (h·ng)/ml | llm_corrected (0.6) | Kurowski_1985:abstract |
| AUC extrapolated to infinity | `Q17` · AUC∞ | 1200 | ng X h/ml |  |  | (h·ng)/ml | llm_corrected (0.6) | Kurowski_1985:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'aged' — extend the ontology if this is a real PK parameter (source ['Kurowski_1985:abstract'])
- dropped unlinked row (NIL): 'tablets' — extend the ontology if this is a real PK parameter (source ['Kurowski_1985:abstract'])
- dropped unlinked row (NIL): 'solution' — extend the ontology if this is a real PK parameter (source ['Kurowski_1985:abstract'])
- dropped unlinked row (NIL): 'injectable solution' — extend the ontology if this is a real PK parameter (source ['Kurowski_1985:abstract'])
- dropped unlinked row (NIL): 'after' — extend the ontology if this is a real PK parameter (source ['Kurowski_1985:abstract'])
- unit_dimension_mismatch: 'average terminal elimination half-life' → Q57 (unit '[mass] / [length] ** 3' vs ontology '[time]') — route to review
- dropped duplicate Q57 ('average terminal elimination half-life', value 15.4) — already have one for this compound
- unit_dimension_unknown: 'ng X h/ml' (AUCSS)
- unit_dimension_unknown: 'ng X h/ml' (AUC∞)
- dropped duplicate Q32 ('mean peak plasma level', value 155.1) — already have one for this compound
- dropped unlinked row (NIL): 'after dosing' — extend the ontology if this is a real PK parameter (source ['Kurowski_1985:abstract'])
- dropped duplicate Q57 ('terminal half-life', value 19.1) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ketanserin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=noncompartmental; 15/15 row label(s) assigned, 0 linked by role; re-tagged ketanserin→parent ×14
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Kurowski_1985_metadata.yaml (15 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['ketanserin', 'ketanserinol', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[1.8-times the auc in one dosing interval]` |  | 1.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absolute bioavailability of ketanserin tablets]` | 52.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[absolute bioavailability of ketanserin tablets]` |  | 52.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[after]` |  | 0.97 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc extrapolated to infinity]` | 1200 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc extrapolated to infinity]` |  | 1200 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc over one dosing interval at steady-state]` | 666 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc over one dosing interval at steady-state]` |  | 666 | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life]` | 17.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life]` |  | 17.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peak]` | 103.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peak]` |  | 103.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability compared to a solution containing an equal quantity of active compound]` | 85.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability compared to a solution containing an equal quantity of active compound]` |  | 85.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tablets]` |  | 40 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ketanserin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ketanserin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Kurowski_1985:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kurowski_1985:abstract'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | ng X h/ml | ['Kurowski_1985:abstract'] |
| C5_unit_missing_Q18 | fail | [mass] * [time] / [length] ** 3 | ng X h/ml | ['Kurowski_1985:abstract'] |
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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bketanserin%5D%20Ketanserin_Kurowski1985_reference&body=Drug%3A%20ketanserin%0ARecord%3A%20Ketanserin_Kurowski1985_reference%0APaper%3A%20Kurowski_1985%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ketanserin/Ketanserin_Kurowski1985_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 15:40 UTC</sub>
