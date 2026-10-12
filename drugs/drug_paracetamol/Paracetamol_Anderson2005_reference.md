<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;paracetamol&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/&quot;},{&quot;label&quot;:&quot;Anderson_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paracetamol_Anderson2015_reference&quot;,&quot;label&quot;:&quot;Anderson_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/Paracetamol_Anderson2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hannam_2018_PPPM&quot;,&quot;label&quot;:&quot;Hannam_2018 \u00b7 PPPM&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Hannam_2018_PPPM.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Anderson_2015_VAS&quot;,&quot;label&quot;:&quot;Anderson_2015 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Anderson_2015_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Gibb_2008_VAS&quot;,&quot;label&quot;:&quot;Gibb_2008 \u00b7 VAS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_paracetamol/pd_Gibb_2008_VAS.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# paracetamol — `Paracetamol_Anderson2005_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.235), gpt-oss:120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The paracetamol record from Anderson_2005 was rejected because a structural parameter carries a dimension mismatch and the metabolite paracetamol, formed from propacetamol, has no path from the dose.**

The parameter labelled 'CL std /F oral ...' was extracted with value 19.3 and unit 'a', a unit that could not be converted to SI, so it reached the record without an SI value and its dimension does not match a structural parameter. The metabolite paracetamol (formed from propacetamol at the central site) has no path from the dose, making it an unlinked metabolite. A second reader also disputed several fields, including the dose compound (propacetamol versus paracetamol), the absence of a propacetamol-to-paracetamol hydrolysis link, and three parameters (72.1, 0.885, 0.476) recorded as null here. Extracted — paracetamol: kfm 0.007 a, CLm/F 1.87 L/h, V2 45 L, V/F 0.82 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has none, the second reading propacetamol → paracetamol (hydrolysis); it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:29:54.597848+00:00) predates the upstream re-run (2026-10-07 06:04:49.390541+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `propacetamol`, measured `paracetamol`.

## Citation
Anderson BJ et al., Pediatric intravenous paracetamol (prop…, Paediatric anaesthesia (2005)
  ·  DOI: [10.1111/j.1460-9592.2005.01455.x](https://doi.org/10.1111/j.1460-9592.2005.01455.x)

<div class="pk-model-meta" hidden drug="paracetamol" model-id="Paracetamol_Anderson2005_reference" status="rejected" stale="true" population="children" measured-compound="paracetamol" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL std /F oral (lAEh )1 70 kg )1 ) V 2std /F oral (lAE70 kg )1 ) Q std /F oral (lAEh )1 70 kg )1 ) V 3std /F oral (lAE70 kg )1 ) | `Q27` · CL/F | 19.3 | a | not captured | [a] | not captured | llm_corrected (0.6) | tab_0:row4:col3 | — | not captured |
| T 1/2 hyd (h) ¼ ln(2)/K a | `Q95` · t1/2ka | 0.007 | a | not captured | [a] | not captured | llm (0.6) | tab_0:row5:col1, tab_0:row5:col2, tab_0:row5:col4 | — | not captured |
| F iv/oral | `Q900` · equation variable | 0.499 | a | not captured | [a] | not captured | llm (0.6) | tab_0:row6:col1, tab_0:row6:col4 | — | not captured |
| T CL | `Q370` · CLfm | 26.6 | b | not captured | [b] | not captured | llm_corrected (0.6) | tab_0:row9:col1, tab_0:row9:col4 | — | not captured |
| apparent volume of distribution of the S(-) enantiomer | `Q76` · V/F | 0.82 | L/kg | 0.0574 | L | not captured | review_gapfill (0.7) | Anderson_2015:review | — | not captured |
| Tlag | `Q83` · tlag | 4.2 | min | 252.0 | h | not captured | review_gapfill (0.7) | Gibb_2008:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CL std /F oral (lAEh )1 70 kg )1 ) V 2std /F oral (lAE70 kg )1 ) Q std /F oral (lAEh )1 70 kg )1 ) V 3std /F oral (lAE70 kg )1 )' → Q27 (unit '[time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q900 ('b CL', value '0.885') — already have one for this compound
- unit_dimension_mismatch: 'T CL' → Q370 (unit '[length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q900 ('b vol', value '0.476') — already have one for this compound
- dropped unlinked row (NIL): 'T vol' — extend the ontology if this is a real PK parameter (source ['tab_0:row11:col1', 'tab_0:row11:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=paracetamol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q76 (V/F) from Anderson_2015's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Gibb_2008's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_0:row4:col1 = '16.3 24.0 54.7 30.4'
- unparsed cell tab_0:row4:col2 = '40.4 54.7 115 31.7'
- unparsed cell tab_0:row4:col4 = '5.7 22.0 17.7 18.0'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.235 (4/17 fields) | 13 |
| `gpt-oss:120b` | not confirmed | 0.167 (3/18 fields) | 15 |

<details><summary>28 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['propacetamol', 'paracetamol', 'hydrolysis']] | mismatch |
| `gpt-oss-120b` | `parameters[19.7]` | not captured | 69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution of the s(-) enantiomer]` | 0.82 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[b cl]` | not captured | 0.885 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl std /f oral (laeh )1 70 kg )1 ) v 2std /f oral (lae70 kg )1 ) q std /f oral (laeh )1 70 kg )1 ) v 3std /f oral (lae70 kg )1 )]` | not captured | 19.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl std /f oral (laeh )1 70 kg )1 ) v 2std /f oral (lae70 kg )1 ) q std /f oral (laeh )1 70 kg )1 ) v 3std /f oral (lae70 kg )1 )]` | 19.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f iv/oral]` | not captured | 0.499 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f iv/oral]` | 0.499 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f oral]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 hyd (h) 1⁄4 ln(2)/k a].parameter_id` | Q95 | Q305 | mismatch |
| `gpt-oss-120b` | `parameters[t cl]` | 26.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 4.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v 2 /f oral]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [] | [['propacetamol', 'paracetamol', 'hydrolysis']] | mismatch |
| `gpt-oss:120b` | `parameters[22.2]` | not captured | 72.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[b cl]` | not captured | 0.885 | only_one_extracted |
| `gpt-oss:120b` | `parameters[b vol]` | not captured | 0.476 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl std /f oral (laeh )1 70 kg )1 ) v 2std /f oral (lae70 kg )1 ) q std /f oral (laeh )1 70 kg )1 ) v 3std /f oral (lae70 kg )1 )].parameter_id` | Q900 | Q27 | mismatch |
| `gpt-oss:120b` | `parameters[clearance increased from 27 weeks pca]` | 1.87 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f iv/oral]` | not captured | 0.499 | only_one_extracted |
| `gpt-oss:120b` | `parameters[peripheral volume of distribution decreased from 27 weeks pca]` | 45.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q/f oral]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2 hyd (h) 1⁄4 ln(2)/k a].parameter_id` | Q305 | Q95 | mismatch |
| `gpt-oss:120b` | `parameters[t cl]` | not captured | 26.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v 2 /f oral]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v 3 /f oral]` | not captured | 1 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | propacetamol | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | paracetamol | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | fail | [time] | a | not captured | not captured | ['tab_0:row4:col3'] |
| C5_dimension_Q370 | fail | [length] ** 2 | b | not captured | not captured | ['tab_0:row9:col1', 'tab_0:row9:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Anderson_2015:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Gibb_2008:review'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['tab_0:row5:col1', 'tab_0:row5:col2', 'tab_0:row5:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 57.4 L | not captured | not captured | ['Anderson_2015:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_paracetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Anderson_2005` / `Anderson_2005::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:04 UTC</sub>
