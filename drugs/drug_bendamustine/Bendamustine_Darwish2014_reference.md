<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;bendamustine&quot;,&quot;href&quot;:&quot;drugs/drug_bendamustine/&quot;},{&quot;label&quot;:&quot;Darwish_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bendamustine_Kim2018_reference&quot;,&quot;label&quot;:&quot;Kim_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bendamustine/Bendamustine_Kim2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bendamustine_Radhakrishnan2019_reference&quot;,&quot;label&quot;:&quot;Radhakrishnan_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bendamustine/Bendamustine_Radhakrishnan2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bendamustine — `Bendamustine_Darwish2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected because the absorption rate constant for bendamustine was incorrectly defined with time units instead of inverse time.

<div class="pk-model-meta" hidden drug="bendamustine" model-id="Bendamustine_Darwish2014_reference" status="rejected" stale="false" population="pediatric patients with relapsed/refractory acute leukemia" measured-compound="bendamustine" parameterization="mechanistic" topology="1C"></div>

## Citation
Darwish M, Megason G, Bond M, Hellriegel E, Robertson P, Grasela T et al. Population pharmacokinetics and pharmacokinetics/pharmacodynamics of bendamustine in pediatric patients with relapsed/refractory acute leukemia. Current medical research and opinion 30(11):2305–2315 (2014).
  ·  DOI: [10.1185/03007995.2014.941976](https://doi.org/10.1185/03007995.2014.941976)

## Population and dosing

**Population:** pediatric patients with relapsed/refractory acute leukemia · condition relapsed/refractory acute leukemia · age group mixed · n = &gt;43.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Peak plasma concentrations of bendamustine (Cmax) occurred at the end of infusion | Cmax | 1 | h |
| area under the curve values from time 0-24 h | AUCt | 8240 | ng*h/mL |
| clearance | CL | 31.7 | L/h |
| Vplasma = V1 + V2 | V | 19.7 | L |
| K a | kabs | 6.0 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected because the absorption rate constant for bendamustine was incorrectly defined with time units instead of inverse time.**

The record, built solely from the abstract, lists the absorption rate constant as 6.0 h−1. However, the review flagged a dimension mismatch for this structural parameter. This indicates a conflict between the expected dimensionless or rate-based definition and the extracted units. Extracted — bendamustine: Cmax 1 h, AUCt 8.24e+03 ng*h/mL, CL 31.7 L/h, V 19.7 L, kabs 6 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has bendamustine, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Peak plasma concentrations of bendamustine (Cmax) occurred at the end of infusion | `Q32` · Cmax | 1 | h |  |  | h | llm_confirmed (0.6) | Darwish_2014:abstract |
| area under the curve values from time 0-24 h | `Q19` · AUCt | 8240 | ng*h/mL |  |  | (h·ng)/ml | llm_corrected (0.6) | Darwish_2014:abstract |
| clearance | `Q22` · CL | 31.7 | L/h | 8.806e-06 | m3/s | L/h | review_gapfill (0.7) | Darwish_2014_2:review |
| Vplasma = V1 + V2 | `Q61` · V | 19.7 | L | 0.0197 | m3 | L | review_gapfill (0.7) | Kim_2018:review |
| K a | `Q49` · kabs | 6.0 | h−1 | 0.001667 | 1/s | 1/h | review_gapfill (0.7) | Lammers_2017:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Peak plasma concentrations of bendamustine (Cmax) occurred at the end of infusion' → Q32 (unit '[time]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q32 ('Model-predicted mean Cmax', value 6806) — already have one for this compound
- dropped unlinked row (NIL): 'mild renal dysfunction' — extend the ontology if this is a real PK parameter (source ['Darwish_2014:abstract'])
- dropped unlinked row (NIL): 'hepatic dysfunction' — extend the ontology if this is a real PK parameter (source ['Darwish_2014:abstract'])
- dropped unlinked row (NIL): 'cytochrome P450 1A2 inhibitors' — extend the ontology if this is a real PK parameter (source ['Darwish_2014:abstract'])
- dropped unlinked row (NIL): 'cytochrome P450 1A2 inducers' — extend the ontology if this is a real PK parameter (source ['Darwish_2014:abstract'])
- dropped unlinked row (NIL): 'recommended dose' — extend the ontology if this is a real PK parameter (source ['Darwish_2014:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bendamustine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Darwish_2014_2's review values (primary lacked it)
- gap-filled Q61 (V) from Kim_2018's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Lammers_2017's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Darwish_2014_metadata.yaml (8 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[area under the curve values from time 0-24 h]` | 8240 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[area under the curve values from time 0-24 h]` |  | 8240 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 31.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 6.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mild hepatic (n =]` |  | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[model-predicted mean cmax]` |  | 6806 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peak plasma concentrations of bendamustine (cmax) occurred at the end of infusion (about]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peak plasma concentrations of bendamustine (cmax) occurred at the end of infusion]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vplasma = v1 + v2]` | 19.7 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | bendamustine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | bendamustine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Darwish_2014:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Darwish_2014_2:review'] |
| C5_dimension_Q32 | fail | [time] | h | ['Darwish_2014:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Lammers_2017:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kim_2018:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 31.7 | ['Darwish_2014_2:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 31.7 L/h | ['Darwish_2014_2:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 19.7 L | ['Kim_2018:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbendamustine%5D%20Bendamustine_Darwish2014_reference&body=Drug%3A%20bendamustine%0ARecord%3A%20Bendamustine_Darwish2014_reference%0APaper%3A%20Darwish_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bendamustine/Bendamustine_Darwish2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:09 UTC</sub>
