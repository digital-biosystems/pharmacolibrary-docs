<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;diclofenac&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/&quot;},{&quot;label&quot;:&quot;van_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diclofenac_Standing2008_reference&quot;,&quot;label&quot;:&quot;Standing_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Standing2008_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diclofenac_Yuan2017_reference&quot;,&quot;label&quot;:&quot;Yuan_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2014_VAS&quot;,&quot;label&quot;:&quot;Hannam_2014 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_diclofenac/pd_Hannam_2014_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diclofenac — `Diclofenac_van2004_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.19), gpt-oss:120b (not confirmed, agreement 0.368). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The diclofenac record was rejected because the volume of distribution is reported as 55 '%' instead of a volume unit, a dimension mismatch on a structural parameter.**

The record, built from the abstract only of van_2004 (children undergoing tonsillectomy), lists diclofenac volume of distribution as 55 with unit '%', which is not a valid dimension for a volume of distribution. The formation clearances to 4'-hydroxydiclofenac (8.41 l.h(-1)) and 5'-hydroxydiclofenac (3.41 l.h(-1)) are labelled with '% CV' in the source text despite carrying l.h(-1) units. A second reader disagreed on several parameter assignments, including the absorption half-time (null versus 14) and the relative bioavailability (1.26 assigned to a differently worded field). Extracted — 4'-hydroxydiclofenac: CLfm 8.41 l.h(-1); 5'-hydroxydiclofenac: CLfm 3.41 l.h(-1); diclofenac: CL 33 l.h(-1) 70 kg(-1), CL 27.5 l.h(-1) 70 kg(-1), t1/2ka 0.613 h, tlag 0.188 h, V 55 %, Frel 1.26 relative bioavailability.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading diclofenac → 4'-hydroxydiclofenac (metabolism); diclofenac → 5'-hydroxydiclofenac (metabolism); it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:26:24.553534+00:00) predates the upstream re-run (2026-10-07 08:02:38.109086+00:00). Current validate status: `rejected`.

## Citation
van der Marel CD et al., Diclofenac and metabolite pharmacokinet…, Paediatric anaesthesia (2004)
  ·  DOI: [10.1111/j.1460-9592.2004.01232.x](https://doi.org/10.1111/j.1460-9592.2004.01232.x)

<div class="pk-model-meta" hidden drug="diclofenac" model-id="Diclofenac_van2004_reference" status="rejected" stale="true" population="children" measured-compound="diclofenac" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| The formation clearance to 4'-hydroxydiclofenac | `Q370` · CLfm | 8.41 | l.h(-1) | 2.3361111111111114e-06 | [l] / [h] | not captured | llm_confirmed (0.6) | van_2004:abstract | — | not captured |
| Clearance by other routes | `Q22` · CL | 33.0 | l.h(-1) 70 kg(-1) | 0.0006416666666666667 | [l] / [[h] · [kg]] | not captured | llm_confirmed (0.6) | van_2004:abstract | — | not captured |
| The suppository formulation had an absorption half-life of | `Q95` · t1/2ka | 0.613 | h | 2206.8 | [h] | not captured | llm_corrected (0.6) | van_2004:abstract | — | not captured |
| with a lag time of | `Q83` · tlag | 0.188 | h | 676.8 | [h] | not captured | llm_confirmed (0.6) | van_2004:abstract | — | not captured |
| The relative bioavailability of the suppository compared with an enteric-coated tablet | `Q87` · Frel | 1.26 | 1 | not captured | not captured | not captured | llm_confirmed (0.6) | van_2004:abstract | — | not captured |
| Vd | `Q61` · V | 0.23 | L | 0.00023 | L | not captured | review_gapfill (0.7) | Karunanidhi_2026:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| The formation clearance of the active metabolite 4'-hydroxydiclofenac contributed 19% of total clearance (44.82 l.h(-1) 70 kg(-1)). | Q371 | not captured | llm_corrected |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): "and to 5'-hydroxydiclofenac" — extend the ontology if this is a real PK parameter (source ['van_2004:abstract'])
- dropped duplicate Q22 ('Elimination clearance of hydroxyl metabolites', value 27.5) — already have one for this compound
- dropped value-less row: "Interoccasion variability of formation clearance to 4'-hydroxydiclofenac, diclofenac volume of distribution, absorption half-time and lag time for the suppository was 36%, 55%, 14% and 119%, respectively."
- unit_dimension_unknown: '% of total clearance' (CLmp)
- dropped duplicate Q22 ('total clearance', value 44.82) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diclofenac
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Karunanidhi_2026's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in van_2004_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.19 (4/21 fields) | 17 |
| `gpt-oss:120b` | not confirmed | 0.368 (7/19 fields) | 12 |

<details><summary>29 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['diclofenac', "4'-hydroxydiclofenac", 'metabolism'], ['diclofenac', "5'-hydroxydiclofenac", 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[absorption half-life]` | not captured | 0.613 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance by other routes]` | not captured | 33.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance by other routes]` | 33.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[diclofenac volume of distribution]` | not captured | 55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination clearance of hydroxyl metabolites]` | not captured | 27.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[formation clearance of the active metabolite 4'-hydroxydiclofenac contributed]` | not captured | 19 | only_one_extracted |
| `gpt-oss-120b` | `parameters[formation clearance to 4'-hydroxydiclofenac]` | not captured | 8.41 | only_one_extracted |
| `gpt-oss-120b` | `parameters[formation clearance to 5'-hydroxydiclofenac]` | not captured | 3.41 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | not captured | 0.188 | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability of the suppository compared with an enteric-coated tablet]` | not captured | 1.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[the formation clearance of the active metabolite 4'-hydroxydiclofenac contributed 19% of total clearance (44.82 l.h(-1) 70 kg(-1)).]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[the formation clearance to 4'-hydroxydiclofenac]` | 8.41 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[the relative bioavailability of the suppository compared with an enteric-coated tablet]` | 1.26 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[the suppository formulation had an absorption half-life of]` | 0.613 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 0.23 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[with a lag time of]` | 0.188 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption half-time]` | not captured | 14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[and to 5'-hydroxydiclofenac]` | 3.41 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[contribution of formation clearance of the active metabolite 4'-hydroxydiclofenac to total clearance]` | not captured | 19 | only_one_extracted |
| `gpt-oss:120b` | `parameters[diclofenac volume of distribution]` | 55 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[diclofenac volume of distribution]` | not captured | 55 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination clearance of hydroxyl metabolites]` | 27.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination clearance of hydroxyl metabolites]` | not captured | 27.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[formation clearance to 5'-hydroxydiclofenac]` | not captured | 3.41 | only_one_extracted |
| `gpt-oss:120b` | `parameters[relative bioavailability of the suppository compared with an enteric-coated tablet]` | not captured | 1.26 | only_one_extracted |
| `gpt-oss:120b` | `parameters[the relative bioavailability of the suppository compared with an enteric-coated tablet]` | 1.26 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | diclofenac | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | diclofenac | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2004:abstract'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['van_2004:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Karunanidhi_2026:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['van_2004:abstract'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['van_2004:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 33.0 | not captured | not captured | ['van_2004:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.31e+03 L/h | not captured | not captured | ['van_2004:abstract'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.23 L | not captured | not captured | ['Karunanidhi_2026:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_diclofenac/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2004` / `van_2004::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:02 UTC</sub>
