<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;norethisterone&quot;,&quot;href&quot;:&quot;drugs/drug_norethisterone/&quot;},{&quot;label&quot;:&quot;Li_1991 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Norethisterone_Clements2026_reference&quot;,&quot;label&quot;:&quot;Clements_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_norethisterone/Norethisterone_Clements2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Norethisterone_Jia2026_reference&quot;,&quot;label&quot;:&quot;Jia_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_norethisterone/Norethisterone_Jia2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Norethisterone_Serkland2026_reference&quot;,&quot;label&quot;:&quot;Serkland_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_norethisterone/Norethisterone_Serkland2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Norethisterone_Kwack2026_reference&quot;,&quot;label&quot;:&quot;Kwack_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_norethisterone/Norethisterone_Kwack2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Norethisterone_Nayak2026_reference&quot;,&quot;label&quot;:&quot;Nayak_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_norethisterone/Norethisterone_Nayak2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# norethisterone — `Norethisterone_Li1991_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

> Norethisterone is an orphan compartment with no dose path, and the terminal half-life parameter for norethisterone-3-oxime acetate has a dimension mismatch.

<div class="pk-model-meta" hidden drug="norethisterone" model-id="Norethisterone_Li1991_reference" status="rejected" stale="false" population="rhesus monkeys" measured-compound="norethisterone, norethisterone-3-oxime" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Li DZ, Fu GM, Zuo MD, Zhou MY, Zhao XL, Wang GP et al. Pharmacokinetic studies of norethisterone-3-oxime and norethisterone-3-oxime acetate in rhesus monkey. Journal of Tongji Medical University = Tong ji yi ke da xue xue bao 11(2):81–87 (1991).
  ·  DOI: [10.1007/BF02888093](https://doi.org/10.1007/BF02888093)

## Population and dosing

**Population:** rhesus monkeys · condition healthy.

**Dosed compound ≠ measured compound:** dosed norethisterone-3-oxime, norethisterone-3-oxime acetate, measured norethisterone, norethisterone-3-oxime.

> **Species: monkey.** This record comes from an animal study (monkey), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t 1/2 ka | kabs | 0.21 | h |
| t 1/2 alpha | t1/2α | 1.28 | h |
| t 1/2 beta | kel | 10.01 | h |
| V | V | 0.0636 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.091). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Norethisterone is an orphan compartment with no dose path, and the terminal half-life parameter for norethisterone-3-oxime acetate has a dimension mismatch.**

The record links norethisterone-3-oxime acetate to norethisterone, but norethisterone itself has no incoming dose or production path. The terminal half-life for norethisterone-3-oxime acetate is 10.01 h, but its elimination rate constant is also labeled as t1/2 beta. Since the data is abstract-only, these summary statistics stand in for a fitted model. Extracted — norethisterone-3-oxime acetate: kabs 0.21 h, t1/2α 1.28 h, kel 10 h; norethisterone, norethisterone-3-oxime: V 0.0636 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has norethisterone-3-oxime, norethisterone-3-oxime acetate, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t 1/2 ka | `Q49` · kabs | 0.21 | h |  |  | h | exact (1) | Li_1991:abstract, Li_1991:abstract |
| t 1/2 alpha | `Q59` · t1/2α | 1.28 | h | 4608 | s | h | llm_corrected (0.6) | Li_1991:abstract, Li_1991:abstract |
| t 1/2 beta | `Q47` · kel | 10.01 | h |  |  | h | exact (1) | Li_1991:abstract, Li_1991:abstract |
| V | `Q61` · V | 0.0636 | L/kg | 0.004452 | m3 | L | review_gapfill (0.7) | Hoeben_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 't 1/2 ka' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 't 1/2 beta' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=norethisterone, norethisterone-3-oxime
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 3/3 row label(s) assigned, 4 linked by role; re-tagged norethisterone, norethisterone-3-oxime→norethisterone-3-oxime acetate ×6
- molar mass: no plausible PubChem entry for 'norethisterone, norethisterone-3-oxime' ('norethisterone, norethisterone-3-oxime') — left in mass units
- molar mass: none found for 'norethisterone, norethisterone-3-oxime' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Hoeben_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Li_1991_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.091 (1/11 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['norethisterone-3-oxime', 'norethisterone', 'metabolism'], ['norethisterone acetate', 'norethisterone', 'metabolism'], ['norethisterone-3-oxime acetate', 'norethisterone', 'metabolism'], ['norethisterone-3-oxime acetate', 'norethisterone-3-oxime', 'metabolism']] | [['norethisterone-3-oxime', 'norethisterone', 'metabolism'], ['norethisterone-3-oxime acetate', 'norethisterone-3-oxime', 'hydrolysis'], ['norethisterone acetate', 'norethisterone', 'hydrolysis']] | mismatch |
| `gpt-oss-120b` | `parameters[t 1/2 alpha]` |  | 1.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 alpha]` | 1.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 beta]` |  | 10.01 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 beta]` | 10.01 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 ka]` |  | 0.21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 ka]` | 0.21 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v]` | 0.0636 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | norethisterone-3-oxime, norethisterone-3-oxime acetate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | norethisterone, norethisterone-3-oxime | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | fail | [time] | h | ['Li_1991:abstract', 'Li_1991:abstract'] |
| C5_dimension_Q49 | fail | [time] | h | ['Li_1991:abstract', 'Li_1991:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Li_1991:abstract', 'Li_1991:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hoeben_2026:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none', 'none'] |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.45 L | ['Hoeben_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnorethisterone%5D%20Norethisterone_Li1991_reference&body=Drug%3A%20norethisterone%0ARecord%3A%20Norethisterone_Li1991_reference%0APaper%3A%20Li_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_norethisterone/Norethisterone_Li1991_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 08:40 UTC</sub>
