<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticagrelor&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/&quot;},{&quot;label&quot;:&quot;Kathman_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticagrelor_strand2019_reference&quot;,&quot;label&quot;:&quot;\u00c5strand_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_Li2016_reference&quot;,&quot;label&quot;:&quot;Li_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Li2016_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_strand_2019_PRU&quot;,&quot;label&quot;:&quot;\u00c5strand_2019 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/pd_strand_2019_PRU.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ticagrelor — `Ticagrelor_Kathman2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.195). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (Q2, CL_ratio and equation variable), so that value has no SI equivalent. Extracted — ticagrelor: Q2 43.6 %, CL_ratio 25.9 %; ticagrelor active metabolite: V2 10 L; PB2452: CL 5 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ticagrelor, PB2452, the second reading unknown; it also differs on 32 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `ticagrelor, PB2452`, measured `PB2452`.

## Citation
Kathman SJ et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022)
  ·  DOI: [10.1002/psp4.12734](https://doi.org/10.1002/psp4.12734)

<div class="pk-model-meta" hidden drug="ticagrelor" model-id="Ticagrelor_Kathman2022_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="PB2452" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| THETA2 | `Q99` · Q2 | 43.6 | % | not captured | [%] | not captured | llm (0.6) | psp412734-tbl-0003:row7:col4 | — | not captured |
| THETA3 | `Q31` · CL_ratio | 25.9 | % | not captured | [%] | not captured | llm (0.6) | psp412734-tbl-0003:row11:col4 | — | not captured |
| THETA6 | `Q900` · equation variable | 23.6 | % | not captured | [%] | not captured | llm (0.6) | psp412734-tbl-0003:row18:col4 | — | not captured |
| VM2 (L) = EXP(3.74) peripheral volume of TAM | `Q64` · V2 | 10 | L | 0.01 | L | not captured | exact (1.0) | psp412734-tbl-0003:row41:col4 | — | not captured |
| CL_ant (L/h) = EXP(0.631) clearance of PB2452 | `Q22` · CL | 5 | L/h | 1.388888888888889e-06 | L/h | not captured | exact (1.0) | psp412734-tbl-0003:row45:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 12 row(s) → ticagrelor active metabolite (abbreviation 6, m_suffix 6)
- table section iiv: 'THETA1' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'THETA2' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'THETA3' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'THETA4' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Residual variability: CV = 7.11%' routed out of structural estimates ('Interindividual variability')
- conflicting source units for 'VM2 (L) = EXP(3.74) peripheral volume of TAM': [{'unit': '3.74', 'source': 'psp412734-tbl-0003:row41:col0', 'scope': 'label'}, {'unit': '%', 'source': 'psp412734-tbl-0003:row41:col4', 'scope': 'inline'}]
- conflicting source units for 'CL_ant (L/h) = EXP(0.631) clearance of PB2452': [{'unit': '0.631', 'source': 'psp412734-tbl-0003:row45:col0', 'scope': 'label'}, {'unit': '%', 'source': 'psp412734-tbl-0003:row45:col4', 'scope': 'inline'}]
- dropped unlinked row (NIL): 'THETA1' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row3:col4'])
- unit_dimension_mismatch: 'THETA2' → Q99 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'THETA3' → Q31 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'THETA4' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row13:col4'])
- dropped unlinked row (NIL): 'THETA5' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row16:col4'])
- dropped unlinked row (NIL): 'THETA7' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row20:col4'])
- dropped unlinked row (NIL): 'THETA8' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row22:col4'])
- dropped unlinked row (NIL): 'THETA9' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row25:col4'])
- dropped unlinked row (NIL): 'Fixed in model 14' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row27:col4', 'psp412734-tbl-0003:row29:col4', 'psp412734-tbl-0003:row35:col4'])
- dropped unlinked row (NIL): 'THETA10' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row37:col4'])
- dropped unlinked row (NIL): 'Fixed in model a' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row48:col4', 'psp412734-tbl-0003:row50:col4', 'psp412734-tbl-0003:row52:col4'])
- dropped unlinked row (NIL): 'Fixed in model to observed baseline values' — extend the ontology if this is a real PK parameter (source ['psp412734-tbl-0003:row54:col4'])
- implicit units: 'VM2 (L) = EXP(3.74) peripheral volume of TAM' → L (from the paper text: "The paper states 'PB2452 has a clearance of 1.88 L/h and central volume of distribution of 2.86 L.', establishing Liters")
- implicit units: 'CL_ant (L/h) = EXP(0.631) clearance of PB2452' → L/h (from the paper text: "The paper explicitly states 'PB2452 has a clearance of 1.88 L/h', defining the unit for the clearance parameter CL_ant.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=PB2452
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 2 linked by role; re-tagged parent→ticagrelor active metabolite ×1, parent→PB2452 ×1
- molar mass: no plausible PubChem entry for 'ticagrelor active metabolite' ('ticagrelor active metabolite') — left in mass units
- molar mass: no plausible PubChem entry for 'PB2452' ('PB2452') — left in mass units
- molar mass: none found for 'ticagrelor active metabolite' — its concentrations stay mass-only
- molar mass: none found for 'PB2452' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'PB2452', not ticagrelor — the review values are the parent's

**Extraction notes:**
- table psp412734-tbl-0003: unbound_uncertainty
- table psp412734-tbl-0003: unspecified_interval_bound
- table psp412734-tbl-0003: conflicting_units
- table psp412734-tbl-0003: ragged_grid
- table Kathman_2022_table_2: unbound_uncertainty
- table Kathman_2022_table_2: unspecified_interval_bound
- table Kathman_2022_table_2: ragged_grid
- companion parameter table 2 transcribed (32 record(s), model stage 'final')
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.195 (8/41 fields) | 33 |

<details><summary>33 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['ticagrelor', 'tam', 'metabolism']] | [['ticagrelor', 'ticagrelor metabolite', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f (l/h) = exp(2.81) clearance of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f (l/h) = exp(2.81) clearance of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl_ant (l/h) = exp(0.631) clearance of pb2452]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm (l/h) = exp(theta11 + theta10*(log(wt)-4.35)) clearance of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm (l/h) = exp(theta11 + theta10*(log(wt)-4.35)) clearance of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[koff2 = kon*kd2].parameter_id` | Q900 | Q330 | mismatch |
| `gpt-oss-120b` | `parameters[q1/f l (h) = exp(2.34) intercompartmental clearance of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q1/f l (h) = exp(2.34) intercompartmental clearance of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q2m (l/h) = exp(1.48) intercompartment clearance of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_ant (l/h) = exp(-0.765) intercompartmental clearance of pb2452]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q_ant (l/h) = exp(-0.765) intercompartmental clearance of pb2452]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta2]` | 1.05 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta3]` | not captured | -0.770 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta4]` | not captured | 1.24 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta6]` | not captured | 2.98 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q45_category]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q45_category]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q49_category]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q49_category]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1 (l) = exp]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f (l) = exp(5.04) central volume of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f (l) = exp(5.04) central volume of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f (l) = exp(4.02) peripheral volume of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f (l) = exp(4.02) peripheral volume of tica]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_ant (l) = exp(1.05) central volume of pb2452]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v_ant_perp (l) = exp(1.28) peripheral volume of pb2452]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm1 (l) = exp(1.95) central volume of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm1 (l) = exp(1.95) central volume of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm2 (l) = exp(3.74) peripheral volume of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm2 (l) = exp(3.74) peripheral volume of tam]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ticagrelor, PB2452 | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | PB2452 | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412734-tbl-0003:row45:col4'] |
| C5_dimension_Q31 | fail | dimensionless | % | not captured | not captured | ['psp412734-tbl-0003:row11:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412734-tbl-0003:row41:col4'] |
| C5_dimension_Q99 | fail | dimensionless | % | not captured | not captured | ['psp412734-tbl-0003:row7:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.0 | not captured | not captured | ['psp412734-tbl-0003:row45:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5 L/h | not captured | not captured | ['psp412734-tbl-0003:row45:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 10 L | not captured | not captured | ['psp412734-tbl-0003:row41:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_ticagrelor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kathman_2022` / `Kathman_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 18:13 UTC</sub>
