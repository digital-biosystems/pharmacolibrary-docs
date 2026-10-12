<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;sodium stibogluconate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_stibogluconate/&quot;},{&quot;label&quot;:&quot;Jaser_1995 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumStibogluconate_Verrest2021_reference&quot;,&quot;label&quot;:&quot;Verrest_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_stibogluconate/SodiumStibogluconate_Verrest2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium stibogluconate — `SodiumStibogluconate_Jaser1995_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.067). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The sodium stibogluconate (antimony) record was rejected because the equilibrium dissociation constant KD was reported as 0.391 hr-1, a rate dimension, whereas a dissociation constant must carry concentration units.**

In the Jaser_1995 abstract-only record for adults with cutaneous leishmaniasis, the parameter labelled 'kd' with value 0.391 hr-1 is defined as the equilibrium dissociation constant for drug-target binding (koff/kon), which is a ratio of concentrations, not a first-order rate; its hr-1 unit therefore fails the dimensional check on a structural parameter. The record was also built from the abstract alone, so the reported summary statistics stood in for a fitted model. The other antimony parameters (kabs 1.71 hr-1, CL 17.67 L/hr, V 45.7 L, fe 0.8, CLR 12.7 L/hr) are dimensionally consistent with their meanings. Extracted — antimony: kabs 1.71 hr-1, KD 0.391 hr-1, CL 17.7 L/hr, V 45.7 L, fe 0.8, CLR 12.7 L/hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sodium stibogluconate, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `sodium stibogluconate`, measured `antimony`.

## Citation
Jaser MA et al., Pharmacokinetics of antimony in patient…, Pharmaceutical research (1995)
  ·  DOI: [10.1023/a:1016251023427](https://doi.org/10.1023/a:1016251023427)

<div class="pk-model-meta" hidden drug="sodium stibogluconate" model-id="SodiumStibogluconate_Jaser1995_reference" status="rejected" stale="false" population="adults with cutaneous leishmaniasis" measured-compound="antimony" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 1.71 | hr-1 | 0.000475 | [1] / [h] | not captured | exact (1.0) | Jaser_1995:abstract | — | not captured |
| kd | `Q331` · KD | 0.391 | hr-1 | not captured | [1] / [h] | not captured | exact (1.0) | Jaser_1995:abstract | — | not captured |
| TBC | `Q22` · CL | 17.67 | L/hr | 4.9083333333333335e-06 | [l] / [h] | not captured | llm (0.6) | Jaser_1995:abstract | — | not captured |
| Vd | `Q61` · V | 45.7 | L | 0.045700000000000005 | [l] | not captured | exact (1.0) | Jaser_1995:abstract | — | not captured |
| fraction of dose of Sb excreted in the urine | `Q44` · fe | 0.8 | not captured | not captured | not captured | not captured | llm (0.6) | Jaser_1995:abstract | — | not captured |
| renal clearance | `Q26` · CLR | 12.7 | L/hr | 3.5277777777777775e-06 | [l] / [h] | not captured | exact (1.0) | Jaser_1995:abstract | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'kd' → Q331 (unit '1 / [time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped value-less row: 'AUC (low exposure)' (captured trailing unit 'low exposure' for child rows)
- dropped value-less row: 'AUC (high exposure)' (captured trailing unit 'high exposure' for child rows)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (TBC); Q61 (Vd)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=antimony
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'antimony' ('antimony') — left in mass units
- molar mass: none found for 'antimony' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'antimony', not sodium_stibogluconate — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Jaser_1995_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.067 (1/15 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['sodium stibogluconate', 'antimony (sb)', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[area-under-the-curve (auc) low exposure]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fraction of dose of sb excreted in the urine]` | 0.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fraction of dose of sb excreted in the urine]` | not captured | 0.80 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.71 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kd]` | 0.391 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` | 12.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[renal clearance]` | not captured | 12.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tbc]` | 17.67 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total body clearance]` | not captured | 17.67 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 45.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | not captured | 45.7 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sodium stibogluconate | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | antimony | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jaser_1995:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jaser_1995:abstract'] |
| C5_dimension_Q331 | fail | 1 / [time] | hr-1 | not captured | not captured | ['Jaser_1995:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Jaser_1995:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jaser_1995:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 17.67 | not captured | not captured | ['Jaser_1995:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.7 L/h | not captured | not captured | ['Jaser_1995:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 45.7 L | not captured | not captured | ['Jaser_1995:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_sodium_stibogluconate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jaser_1995` / `Jaser_1995::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:53 UTC</sub>
