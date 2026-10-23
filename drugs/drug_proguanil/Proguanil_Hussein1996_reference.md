<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;proguanil&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/&quot;},{&quot;label&quot;:&quot;Hussein_1996 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Proguanil_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# proguanil — `Proguanil_Hussein1996_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The proguanil record was rejected because a structural parameter carries a dimension mismatch: CL/F is recorded as 13 '%' although clearance must be in volume per time, not a percentage.

<div class="pk-model-meta" hidden drug="proguanil" model-id="Proguanil_Hussein1996_reference" status="rejected" stale="false" population="patients with acute P. falciparum malaria" measured-compound="proguanil" parameterization="apparent" topology="1C"></div>

## Citation
Hussein Z, Eaves CJ, Hutchinson DB, Canfield CJ. Population pharmacokinetics of proguanil in patients with acute P. falciparum malaria after combined therapy with atovaquone. British journal of clinical pharmacology 42(5):589–597 (1996).
  ·  DOI: [10.1111/j.1365-2125.1996.tb00114.x](https://doi.org/10.1111/j.1365-2125.1996.tb00114.x)

## Population and dosing

**Population:** patients with acute P. falciparum malaria · condition acute falciparum malaria · age group mixed · n = 370.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLo higher in Orientals than Blacks and Malays | CL/F | 13 | % |
| final population estimates of CLo in Blacks | CL | 54.0 | l h-1 |
| final population estimates of V/F in children (&lt; or = 15 years) | V/F | 562 | l |
| patients classified as 'poor' metabolizers | fm | 114 |  |
| Tlag,1 | tlag | 0.147 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The proguanil record was rejected because a structural parameter carries a dimension mismatch: CL/F is recorded as 13 '%' although clearance must be in volume per time, not a percentage.**

The parameter labelled 'CLo higher in Orientals than Blacks and Malays' is given as 13 '%' for proguanil, a unit incompatible with oral clearance (CL/F), which the same record elsewhere reports in l h-1 (54.0 l h-1 in Blacks). The record was also built from the abstract alone, so reported summary statistics stood in for a fitted model. Other extracted values include V/F of 562 l in children (≤ 15 years), an absorption lag time of 0.147 h, and an implausible metabolite fraction (fm) of 114 in 'poor' metabolizers, which cannot exceed 1 as a fraction. Extracted — proguanil: CL/F 13 %, CL 54 l h-1, V/F 562 l, fm 114, tlag 0.147 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has proguanil, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLo higher in Orientals than Blacks and Malays | `Q27` · CL/F | 13 | % |  |  | % | llm (0.6) | Hussein_1996:abstract |
| final population estimates of CLo in Blacks | `Q22` · CL | 54.0 | l h-1 | 1.5e-05 | m3/s | l/h | llm (0.6) | Hussein_1996:abstract |
| final population estimates of V/F in children (&lt; or = 15 years) | `Q76` · V/F | 562 | l | 0.562 | m3 | l | llm_confirmed (0.6) | Hussein_1996:abstract |
| patients classified as 'poor' metabolizers | `Q45` · fm | 114 |  |  |  |  | llm (0.6) | Hussein_1996:abstract |
| Tlag,1 | `Q83` · tlag | 0.147 | h | 529.2 | s | h | review_gapfill (0.7) | Cherkaoui-Rbati_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate body weight for CL/F from footnote/prose kept as documentation only (['Hussein_1996:abstract'])
- unit_dimension_mismatch: 'CLo higher in Orientals than Blacks and Malays' → Q27 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: "CLo lower in 'poor' than 'extensive' metabolizers" → Q27 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ("CLo lower in 'poor' than 'extensive' metabolizers", value 17) — already have one for this compound
- dropped duplicate Q27 ('final population estimates of CLo in Orientals', value 61.5) — already have one for this compound
- dropped duplicate Q27 ('final population estimates of CLo in Malays', value 64.3) — already have one for this compound
- covariate body weight for allometric_exponent from footnote/prose kept as documentation only (['Hussein_1996:abstract'])
- dropped duplicate Q76 ('final population estimates of V/F in patients aged &gt; 15 years', value 1629) — already have one for this compound
- dropped unlinked row (NIL): 'mean body weight of children (&lt; or = 15 years)' — extend the ontology if this is a real PK parameter (source ['Hussein_1996:abstract'])
- dropped unlinked row (NIL): 'mean body weight of patients aged &gt; 15 years' — extend the ontology if this is a real PK parameter (source ['Hussein_1996:abstract'])
- unit_dimension_mismatch: 'interpatient variability in CLo' → Q27 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('interpatient variability in CLo', value 22.5) — already have one for this compound
- routed 'interpatient variability in V/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): "patients classified as 'extensive' metabolizers" — extend the ontology if this is a real PK parameter (source ['Hussein_1996:abstract'])
- dropped unlinked row (NIL): 'total patients' — extend the ontology if this is a real PK parameter (source ['Hussein_1996:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=proguanil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Cherkaoui-Rbati_2023's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hussein_1996_metadata.yaml (17 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.182 (2/11 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clo higher in orientals than blacks and malays]` | 13 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[final population estimate of v/f in children]` |  | 562 | only_one_extracted |
| `gpt-oss-120b` | `parameters[final population estimates of clo in blacks]` | 54.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[final population estimates of v/f in children]` | 562 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[orientals vs blacks and malays clo increase]` |  | 13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[patients classified as 'poor' metabolizers]` | 114 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag,1]` | 0.147 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | proguanil | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | proguanil | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hussein_1996:abstract'] |
| C5_dimension_Q27 | fail | dimensionless | % | ['Hussein_1996:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Hussein_1996:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Cherkaoui-Rbati_2023:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 54 L/h | ['Hussein_1996:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 562 L | ['Hussein_1996:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bproguanil%5D%20Proguanil_Hussein1996_reference&body=Drug%3A%20proguanil%0ARecord%3A%20Proguanil_Hussein1996_reference%0APaper%3A%20Hussein_1996%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_proguanil/Proguanil_Hussein1996_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:59 UTC</sub>
