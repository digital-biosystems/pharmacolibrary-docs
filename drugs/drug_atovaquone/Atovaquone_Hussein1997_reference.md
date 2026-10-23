<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01A&quot;,&quot;href&quot;:&quot;atc/P01A.md&quot;},{&quot;label&quot;:&quot;atovaquone&quot;,&quot;href&quot;:&quot;drugs/drug_atovaquone/&quot;},{&quot;label&quot;:&quot;Hussein_1997 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atovaquone_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atovaquone/Atovaquone_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atovaquone — `Atovaquone_Hussein1997_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The atovaquone record was rejected because CL/F was recorded as 58.5 '%', a percentage that is dimensionally incompatible with an oral clearance, and the record was built from the paper's abstract only.

<div class="pk-model-meta" hidden drug="atovaquone" model-id="Atovaquone_Hussein1997_reference" status="rejected" stale="false" population="patients with acute Plasmodium falciparum malaria" measured-compound="atovaquone" parameterization="apparent" topology="1C"></div>

## Citation
Hussein Z, Eaves J, Hutchinson DB, Canfield CJ. Population pharmacokinetics of atovaquone in patients with acute malaria caused by Plasmodium falciparum. Clinical pharmacology and therapeutics 61(5):518–530 (1997).
  ·  DOI: [10.1016/S0009-9236(97)90132-6](https://doi.org/10.1016/S0009-9236(97)90132-6)

## Population and dosing

**Population:** patients with acute Plasmodium falciparum malaria · condition acute malaria · age group adult · n = 458.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F lower in black subjects | CL/F | 58.5 | % |
| V area/F relationship with weight | Vnorm/F | 7.98 | L/kg |
| V area/F in black subjects | V/F | 345 | L |
| t1/2 in black subjects | t1/2z | 72.9 | hours |
| Tlag,1 | tlag | 0.147 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.231). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The atovaquone record was rejected because CL/F was recorded as 58.5 '%', a percentage that is dimensionally incompatible with an oral clearance, and the record was built from the paper's abstract only.**

The clearance parameter CL/F for atovaquone carries the unit '%', which cannot represent a bioavailability-adjusted clearance (expected volume/time), so the structural parameter fails the dimension check. The record was abstract-only, meaning summary statistics from the abstract stood in for a fitted model rather than values from a full population analysis. Other parameters (Vnorm/F 7.98 L/kg, V/F 345 L, t1/2z 72.9 h, tlag 0.147 h) are present, but the clearance mismatch alone held the record back. Extracted — atovaquone: CL/F 58.5 %, Vnorm/F 7.98 L/kg, V/F 345 L, t1/2z 72.9 hours, tlag 0.147 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atovaquone, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F lower in black subjects | `Q27` · CL/F | 58.5 | % |  |  | % | llm_confirmed (0.6) | Hussein_1997:abstract |
| V area/F relationship with weight | `Q353` · Vnorm/F | 7.98 | L/kg | 0.5586 | m3 | l/kg | llm (0.6) | Hussein_1997:abstract |
| V area/F in black subjects | `Q76` · V/F | 345 | L | 0.345 | m3 | l | llm (0.6) | Hussein_1997:abstract |
| t1/2 in black subjects | `Q57` · t1/2z | 72.9 | hours | 2.624e+05 | s | h | llm_confirmed (0.6) | Hussein_1997:abstract |
| Tlag,1 | `Q83` · tlag | 0.147 | h | 529.2 | s | h | review_gapfill (0.7) | Cherkaoui-Rbati_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- covariate weight for allometric_exponent from footnote/prose kept as documentation only (['Hussein_1997:abstract'])
- unit_dimension_mismatch: 'CL/F lower in black subjects' → Q27 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F in black subjects', value 3.28) — already have one for this compound
- dropped duplicate Q27 ('CL/F in Oriental subjects', value 8.49) — already have one for this compound
- dropped duplicate Q27 ('CL/F in Malay subjects', value 9.13) — already have one for this compound
- dropped duplicate Q76 ('V area/F in Oriental subjects', value 383) — already have one for this compound
- dropped duplicate Q76 ('V area/F in Malay subjects', value 428) — already have one for this compound
- dropped duplicate Q57 ('t1/2 in Oriental subjects', value 31.3) — already have one for this compound
- dropped duplicate Q57 ('t1/2 in Malay subjects', value 32.5) — already have one for this compound
- routed 'interpatient variability in CL/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'interpatient variability in V area/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atovaquone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Cherkaoui-Rbati_2023's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hussein_1997_metadata.yaml (15 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.231 (3/13 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f lower in black subjects]` | 58.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 3.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[linear relationship with weight]` |  | 7.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 in black subjects]` | 72.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  | 72.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag,1]` | 0.147 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v area/f in black subjects]` | 345 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v area/f relationship with weight]` | 7.98 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v area/f]` |  | 345 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | atovaquone | unknown | mismatch |

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
| C5_dimension_Q27 | fail | dimensionless | % | ['Hussein_1997:abstract'] |
| C5_dimension_Q353 | pass | [length] ** 3 |  | ['Hussein_1997:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Hussein_1997:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Hussein_1997:abstract'] |
| C5_dimension_Q83 | pass | [time] |  | ['Cherkaoui-Rbati_2023:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 345 L | ['Hussein_1997:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batovaquone%5D%20Atovaquone_Hussein1997_reference&body=Drug%3A%20atovaquone%0ARecord%3A%20Atovaquone_Hussein1997_reference%0APaper%3A%20Hussein_1997%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atovaquone/Atovaquone_Hussein1997_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 05:17 UTC</sub>
