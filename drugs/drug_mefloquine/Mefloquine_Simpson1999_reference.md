<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;mefloquine&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/&quot;},{&quot;label&quot;:&quot;Simpson_1999 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mefloquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rattanapunya2015_reference&quot;,&quot;label&quot;:&quot;Rattanapunya_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rattanapunya2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mefloquine_Rufener2018_reference&quot;,&quot;label&quot;:&quot;Rufener_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mefloquine/Mefloquine_Rufener2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mefloquine — `Mefloquine_Simpson1999_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The mefloquine CL/F value of 1.0 is not a clearance in L/h but a dihydroartemisinin geometric mean ratio (90% CI) misread as clearance, causing a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="mefloquine" model-id="Mefloquine_Simpson1999_reference" status="rejected" stale="false" population="patients with acute falciparum malaria" measured-compound="mefloquine" parameterization="apparent" topology="1C"></div>

## Citation
Simpson JA, Price R, ter Kuile F, Teja-Isavatharm P, Nosten F, Chongsuphajaisiddhi T et al. Population pharmacokinetics of mefloquine in patients with acute falciparum malaria. Clinical pharmacology and therapeutics 66(5):472–484 (1999).
  ·  DOI: [10.1016/S0009-9236(99)70010-X](https://doi.org/10.1016/S0009-9236(99)70010-X)

## Population and dosing

**Population:** patients with acute falciparum malaria · condition acute falciparum malaria · age group adult · n = 257.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC(0-infinity) increase, monotherapy | AUC∞ | 50 | % |
| AUC(0-infinity) increase, combined therapy | AUC ratio | 20 | % |
| V/F, split doses of mefloquine monotherapy | V/F | 8.14 | L/kg |
| CL/F (L/h) [Dihydroartemisinin GMR (90 % CI)] | CL/F | 1.0 | L/h |
| absorption rate constant | kabs | 0.28 | h⁻¹ |
| T lag,1 | tlag | 0.147 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The mefloquine CL/F value of 1.0 is not a clearance in L/h but a dihydroartemisinin geometric mean ratio (90% CI) misread as clearance, causing a dimension mismatch on a structural parameter.**

The record for mefloquine in patients with acute falciparum malaria was built from the abstract alone, so reported summary statistics stood in for a fitted model. The parameter labelled 'CL/F (L/h) [Dihydroartemisinin GMR (90 % CI)]' carries the value 1.0 with unit L/h, but the label shows this number is a dihydroartemisinin geometric mean ratio, not an oral clearance in L/h. This dimension mismatch on a structural parameter led to rejection; the other parameters (AUC∞ increase 50%, AUC ratio 20%, V/F 8.14 L/kg, kabs 0.28 h⁻¹, tlag 0.147 h) are consistent with their meanings. Extracted — mefloquine: AUC∞ 50 %, AUC ratio 20 %, V/F 8.14 L/kg, CL/F 1 L/h, kabs 0.28 h⁻¹, tlag 0.147 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of absorption rate constant: this record has 0.28, the second reading none; it also differs on 7 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC(0-infinity) increase, monotherapy | `Q17` · AUC∞ | 50 | % |  |  | % | llm_corrected (0.6) | Simpson_1999:abstract |
| AUC(0-infinity) increase, combined therapy | `Q21` · AUC ratio | 20 | % |  |  | % | llm_corrected (0.6) | Simpson_1999:abstract |
| V/F, split doses of mefloquine monotherapy | `Q76` · V/F | 8.14 | L/kg | 0.5698 | m3 | l/kg | llm_confirmed (0.6) | Simpson_1999:abstract |
| CL/F (L/h) [Dihydroartemisinin GMR (90 % CI)] | `Q27` · CL/F | 1.0 | L/h | 2.778e-07 | m3/s | L/h | review_gapfill (0.7) | Rattanapunya_2015:review |
| absorption rate constant | `Q49` · kabs | 0.28 | h⁻¹ | 7.778e-05 | 1/s | 1/h | review_gapfill (0.7) | Mim_2026:review |
| T lag,1 | `Q83` · tlag | 0.147 | h | 529.2 | s | h | review_gapfill (0.7) | Cherkaoui-Rbati_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC(0-infinity) increase, monotherapy' → Q17 (unit 'dimensionless' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q76 ('V/F, single dose', value 20.37) — already have one for this compound
- unit_dimension_unknown: 'ng/mL x day' (AUC∞)
- dropped duplicate Q17 ('AUC(0-infinity), parasite clearance &lt; 48 hours', value 50373) — already have one for this compound
- dropped duplicate Q17 ('AUC(0-infinity), slower parasite clearance', value 45583) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mefloquine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q27 (CL/F) from Rattanapunya_2015's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Mim_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Cherkaoui-Rbati_2023's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Simpson_1999_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.333 (4/12 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 0.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(0-infinity) increase, combined therapy]` | 20 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(0-infinity) increase, monotherapy]` | 50 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc(0-infinity) increase]` |  | 50 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f (l/h) [dihydroartemisinin gmr (90 % ci)]]` | 1.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t lag,1]` | 0.147 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f, split doses of mefloquine monotherapy]` | 8.14 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` |  | 8.14 | only_one_extracted |

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
| C5_dimension_Q17 | fail | dimensionless | % | ['Simpson_1999:abstract'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Rattanapunya_2015:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Mim_2026:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Simpson_1999:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Cherkaoui-Rbati_2023:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1 L/h | ['Rattanapunya_2015:review'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 570 L | ['Simpson_1999:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmefloquine%5D%20Mefloquine_Simpson1999_reference&body=Drug%3A%20mefloquine%0ARecord%3A%20Mefloquine_Simpson1999_reference%0APaper%3A%20Simpson_1999%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mefloquine/Mefloquine_Simpson1999_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:25 UTC</sub>
