<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefuroxime&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/&quot;},{&quot;label&quot;:&quot;Albarellos_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefuroxime_Cao2025_reference&quot;,&quot;label&quot;:&quot;Cao_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Cao2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefuroxime_Hartman2020_reference&quot;,&quot;label&quot;:&quot;Hartman_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Hartman2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefuroxime_Gertler2018_reference&quot;,&quot;label&quot;:&quot;Gertler_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Gertler2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefuroxime_Viberg2006_reference&quot;,&quot;label&quot;:&quot;Viberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefuroxime/Cefuroxime_Viberg2006_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefuroxime — `Cefuroxime_Albarellos2016_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> The record for cefuroxime in beagle dogs was rejected due to a dimension mismatch on the clearance parameter derived from abstract summary statistics.

<div class="pk-model-meta" hidden drug="cefuroxime" model-id="Cefuroxime_Albarellos2016_reference" status="rejected" stale="false" population="beagle dogs" measured-compound="cefuroxime" parameterization="mechanistic" topology="1C"></div>

## Citation
Albarellos GA, Montoya L, Lorenzini PM, Passini SM, Lupi MP, Landoni MF. Pharmacokinetics of cefuroxime after intravenous, intramuscular, and subcutaneous administration to dogs. Journal of veterinary pharmacology and therapeutics 39(1):40–44 (2016).
  ·  DOI: [10.1111/jvp.12239](https://doi.org/10.1111/jvp.12239)

## Population and dosing

**Population:** beagle dogs · condition healthy · age group adult · n = &gt;= 6.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (intramuscular) | Cmax | 22.99 | μg/mL |
| Tmax (intramuscular) | tmax | 0.43 | h |
| bioavailability for the intramuscular and subcutaneous administration (intramuscular) | Fab | 79.70 | % |
| bioavailability for the intramuscular and subcutaneous administration (subcutaneous) | fe | 77.22 | % |
| Elimination half-lives (intravenous) | t1/2z | 1.12 | h |
| mean residence time (intravenous) | MRT | 1.49 | h |
| T &gt; MIC = 50% (subcutaneous) | Ct | 12 | h |
| CL (L/h/kg) Mean (SD) 0.12 mg/kg | CL | 0.011 | L/h/kg |
| Vz (L/kg) Mean (SD) 0.12 mg/kg | V | 0.065 | L/kg |
| Ka (h−1) | kabs | 9.78 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.412). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record for cefuroxime in beagle dogs was rejected due to a dimension mismatch on the clearance parameter derived from abstract summary statistics.**

The extracted data includes a clearance value of 0.011 L/h/kg, which failed a dimensional consistency check within the one-compartment structure. The record was constructed from the abstract alone, meaning these summary statistics substituted for a fitted model. This limitation prevented the verification of the pharmacokinetic parameters, leading to the rejection of the model. Extracted — cefuroxime: Cmax 23 μg/mL, tmax 0.43 h, Fab 79.7 %, fe 77.2 %, t1/2z 1.12 h, MRT 1.49 h, Ct 12 h, CL 0.011 L/h/kg, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of bioavailability: this record has none, the second reading 79.70; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (intramuscular) | `Q32` · Cmax | 22.99 | μg/mL |  |  | µg/ml | exact (1) | Albarellos_2016:abstract |
| Tmax (intramuscular) | `Q56` · tmax | 0.43 | h | 1548 | s | h | exact (1) | Albarellos_2016:abstract |
| bioavailability for the intramuscular and subcutaneous administration (intramuscular) | `Q40` · Fab | 79.70 | % |  |  |  | llm_confirmed (0.6) | Albarellos_2016:abstract |
| bioavailability for the intramuscular and subcutaneous administration (subcutaneous) | `Q44` · fe | 77.22 | % |  |  |  | llm_corrected (0.6) | Albarellos_2016:abstract |
| Elimination half-lives (intravenous) | `Q57` · t1/2z | 1.12 | h | 4032 | s | h | llm (0.6) | Albarellos_2016:abstract |
| mean residence time (intravenous) | `Q53` · MRT | 1.49 | h | 5364 | s | h | exact (1) | Albarellos_2016:abstract |
| T &gt; MIC = 50% (subcutaneous) | `Q75` · Ct | 12 | h |  |  | h | llm (0.6) | Albarellos_2016:abstract |
| CL (L/h/kg) Mean (SD) 0.12 mg/kg | `Q22` · CL | 0.011 | L/h/kg | 2.139e-07 | m3/s | L/h | review_gapfill (0.7) | Cao_2025:review |
| Vz (L/kg) Mean (SD) 0.12 mg/kg | `Q61` · V | 0.065 | L/kg | 0.00455 | m3 | L | review_gapfill (0.7) | Cao_2025:review |
| Ka (h−1) | `Q49` · kabs | 9.78 | h−1 | 0.002717 | 1/s | 1/h | review_gapfill (0.7) | Roelofsen_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('Cmax (subcutaneous)', value '15.37') — already have one for this compound
- dropped duplicate Q56 ('Tmax (subcutaneous)', value '0.99') — already have one for this compound
- dropped duplicate Q57 ('Elimination half-lives (intramuscular)', value '1.13') — already have one for this compound
- dropped duplicate Q53 ('mean residence time (intramuscular)', value '1.79') — already have one for this compound
- dropped duplicate Q57 ('Elimination half-lives (subcutaneous)', value '1.04') — already have one for this compound
- dropped duplicate Q53 ('mean residence time (subcutaneous)', value '2.21') — already have one for this compound
- dropped unlinked row (NIL): 'T &gt; MIC = 50% (intravenous)' — extend the ontology if this is a real PK parameter (source ['Albarellos_2016:abstract'])
- dropped unlinked row (NIL): 'T &gt; MIC = 50% (intramuscular)' — extend the ontology if this is a real PK parameter (source ['Albarellos_2016:abstract'])
- unit_dimension_mismatch: 'T &gt; MIC = 50% (subcutaneous)' → Q75 (unit '[time]' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cefuroxime
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Cao_2025's review values (primary lacked it)
- gap-filled Q61 (V) from Cao_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Roelofsen_2022's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Albarellos_2016_metadata.yaml (15 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.412 (7/17 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bioavailability for the intramuscular and subcutaneous administration]` | 79.70 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability]` |  | 79.70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl (l/h/kg) mean (sd) 0.12 mg/kg]` | 0.011 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-lives]` | 1.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 9.78 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean residence time]` | 1.49 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` |  | 1.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t &gt; mic = 50%]` | 12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1⁄2]` |  | 1.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz (l/kg) mean (sd) 0.12 mg/kg]` | 0.065 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Cao_2025:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Albarellos_2016:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Roelofsen_2022:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Albarellos_2016:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Albarellos_2016:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Albarellos_2016:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Cao_2025:review'] |
| C5_dimension_Q75 | fail | [time] | h | ['Albarellos_2016:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.011 | ['Cao_2025:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.77 L/h | ['Cao_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 4.55 L | ['Cao_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcefuroxime%5D%20Cefuroxime_Albarellos2016_reference&body=Drug%3A%20cefuroxime%0ARecord%3A%20Cefuroxime_Albarellos2016_reference%0APaper%3A%20Albarellos_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cefuroxime/Cefuroxime_Albarellos2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:04 UTC</sub>
