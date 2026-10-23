<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;ilaprazole&quot;,&quot;href&quot;:&quot;drugs/drug_ilaprazole/&quot;},{&quot;label&quot;:&quot;Jia_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ilaprazole — `Ilaprazole_Jia2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the peripheral compartment is unreachable, so the elimination rate constant of 1.35 1/h cannot function.

<div class="pk-model-meta" hidden drug="ilaprazole" model-id="Ilaprazole_Jia2021_reference" status="rejected" stale="false" population="healthy Chinese adults" measured-compound="ilaprazole" parameterization="mechanistic" topology="2C"></div>

## Citation
Jia R, Zhang F, Wu N, Xu W, Gao H, Liu B et al. Accelerating Development of Benziamidazole-Class Proton Pump Inhibitors: A Mechanism-Based PK/PD Model to Optimize Study Design with Ilaprazole as a Case Drug. Pharmaceutics 13(3) (2021).
  ·  DOI: [10.3390/pharmaceutics13030392](https://doi.org/10.3390/pharmaceutics13030392)

## Population and dosing

**Population:** healthy Chinese adults · condition healthy · age group adult · n = 16.

**Dosing:** 10, 20 mg, iv, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| VC | V1 | 8.80 | L |
| VP | V2 | 3.65 | L |
| θwt | kout_peripheral | 1.35 | 1/h |
| εCP | equation variable | 0.12 |  |
| θsex | θsex | 1.3 |  |
| CLp | CLp | 2.57 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the peripheral compartment is unreachable, so the elimination rate constant of 1.35 1/h cannot function.**

The record defines a peripheral volume (3.65 L) and an irreversible elimination rate constant of 1.35 1/h from that compartment. However, the findings confirm an unreachable compartment in the two-compartment structure. This indicates a structural defect where there is no path from the dose to that elimination site. Extracted — ilaprazole: V1 8.8 L, V2 3.65 L, kout_peripheral 1.35 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ilaprazole, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| VC | `Q63` · V1 | 8.80 | L | 0.0088 | m3 | L | exact (1) | pharmaceutics-13-00392-t001:row3:col3, pharmaceutics-13-00392-t001:row3:col5 |
| VP | `Q64` · V2 | 3.65 | L | 0.00365 | m3 | L | exact (1) | pharmaceutics-13-00392-t001:row4:col3, pharmaceutics-13-00392-t001:row4:col5 |
| θwt | `Q346` · kout_peripheral | 1.35 | 1/h | 0.000375 | 1/s | 1/h | llm (0.6) | pharmaceutics-13-00392-t001:row5:col3 |
| εCP | `Q900` · equation variable | 0.12 |  |  |  |  | llm (0.6) | pharmaceutics-13-00392-t001:row7:col3 |
| θsex | `Q900` · θsex | 1.3 |  |  |  |  |  |  |
| CLp | `Q900` · CLp | 2.57 | L/h | 7.139e-07 | m3/s |  |  | pharmaceutics-13-00392-t001:row1:col3, pharmaceutics-13-00392-t001:row1:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CLp | Q22 | exact |
| MW | Q374 | exact |

## Departures & gaps

**Interpretation flags:**
- column 'η' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q22 ('CLt', value '4.59') — already have one for this compound
- kept covariate coefficient θsex=1.30 (covariate sex) — not an ontology parameter
- implicit units: 'CLp' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for CLp in the provided text or table captions. Based on the value 2.57 and')
- implicit units: 'VC' → L (from the popPK convention: 'The paper does not explicitly state the unit for VC in the provided text or table captions. Based on the value 8.80 and ')
- implicit units: 'VP' → L (from the popPK convention: 'The paper does not explicitly state the unit for VP in the provided text or table captions. Based on the value 3.65 and ')
- implicit units: 'θwt' → 1/h (from the popPK convention: 'The parameter is identified as a first-order rate constant (kout_peripheral). Rate constants are conventionally expresse')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ilaprazole
- bound model equation to Q22 (CL): CLP = θCLP×exp(ηCLP)×(θsex)sex (4)CLt=θCLt×exp(ηCLt) (5)Vc=θVc×exp(ηVc)×(WT70)θWT (6)Vt=θVt×exp(ηVt)
- bound model equation to Q374 (MW): MW = θMW FE4h=θFE4h kout=ηkout×exp(θkout)MA=θMA FE10h=θFE10h kd=ηkd×exp(θkd)MTmax=θMTmax kFE=θ kFE kdeg=ηkdeg×exp(θkdeg)
- Q22 (CL) is equation-defined: value moved to equation-variable 'CLp'; equation kept verbatim
- Q374 (MW) is equation-defined: value moved to equation-variable 'MW'; equation kept verbatim
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-13-00392-t001:row1:col4 = '(2.34, 2.81)'
- unparsed cell pharmaceutics-13-00392-t001:row2:col4 = '(4.22, 5)'
- unparsed cell pharmaceutics-13-00392-t001:row3:col4 = '(8.58, 9.02)'
- unparsed cell pharmaceutics-13-00392-t001:row4:col4 = '(3.63, 3.67)'
- unparsed cell pharmaceutics-13-00392-t001:row5:col4 = '(1.31, 1.39)'
- unparsed cell pharmaceutics-13-00392-t001:row6:col4 = '(1.14, 1.48)'
- LLM selected parameter table(s) 1
- captured model equation CLP = θCLP×exp(ηCLP)×(θsex)sex (4)CLt=θCLt×exp(ηCLt) (5)Vc=θVc×exp(ηVc)×(WT70)θWT (6)Vt=θVt×exp(ηVt)
- captured model equation MW = θMW FE4h=θFE4h kout=ηkout×exp(θkout)MA=θMA FE10h=θFE10h kd=ηkd×exp(θkd)MTmax=θMTmax kFE=θ kFE kdeg=ηkdeg×exp(θkdeg)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (2/18 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clp]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clp]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mw]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mw]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 8.80 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` |  | 8.80 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 3.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` |  | 3.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[εcp]` | 0.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[εcp]` |  | 0.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θsex]` | 1.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θsex]` |  | 1.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θwt]` | 1.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[θwt]` |  | 1.35 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ilaprazole | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ilaprazole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['pharmaceutics-13-00392-t001:row1:col3', 'pharmaceutics-13-00392-t001:row1:col5'] |
| C5_dimension_Q346 | pass | 1 / [time] |  | ['pharmaceutics-13-00392-t001:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['pharmaceutics-13-00392-t001:row3:col3', 'pharmaceutics-13-00392-t001:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['pharmaceutics-13-00392-t001:row4:col3', 'pharmaceutics-13-00392-t001:row4:col5'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 8.8 L | ['pharmaceutics-13-00392-t001:row3:col3', 'pharmaceutics-13-00392-t001:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.65 L | ['pharmaceutics-13-00392-t001:row4:col3', 'pharmaceutics-13-00392-t001:row4:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bilaprazole%5D%20Ilaprazole_Jia2021_reference&body=Drug%3A%20ilaprazole%0ARecord%3A%20Ilaprazole_Jia2021_reference%0APaper%3A%20Jia_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ilaprazole/Ilaprazole_Jia2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 19:29 UTC</sub>
