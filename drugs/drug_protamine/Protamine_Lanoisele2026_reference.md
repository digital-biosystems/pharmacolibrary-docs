<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;protamine&quot;,&quot;href&quot;:&quot;drugs/drug_protamine/&quot;},{&quot;label&quot;:&quot;Lanoisel\u00e9e_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Protamine_Butterworth2002_reference&quot;,&quot;label&quot;:&quot;Butterworth_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protamine/Protamine_Butterworth2002_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# protamine — `Protamine_Lanoisele2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the protamine side of the heparin–protamine binding model is unlinked: protamine has no path from the dose, so the binding link to unfractionated heparin (kant) is not reachable.

<div class="pk-model-meta" hidden drug="protamine" model-id="Protamine_Lanoisele2026_reference" status="rejected" stale="false" population="adults undergoing cardiopulmonary bypass cardiac surgery" measured-compound="unfractionated heparin (anti-Xa activity)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Lanoiselée J, Gibert A, Gouin-Thibault I, Mansour A, Pontis A, Morizot C et al. Optimising protamine dosing for heparin reversal after cardiopulmonary bypass: a population pharmacokinetic-pharmacodynamic study. British journal of anaesthesia 136(3):847–855 (2026).
  ·  DOI: [10.1016/j.bja.2025.11.057](https://doi.org/10.1016/j.bja.2025.11.057)

## Population and dosing

**Population:** adults undergoing cardiopulmonary bypass cardiac surgery · condition cardiac surgery with cardiopulmonary bypass (heparin reversal) · age group adult · n = 68.

**Dosing:** 300, 400 IU/kg, iv, multiple.

**Dosed compound ≠ measured compound:** dosed protamine, measured unfractionated heparin (anti-Xa activity).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| UFH clearance | CL | 1.5 | L h -1 |
| intercompartmental clearance | Q | 0.29 | L h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the protamine side of the heparin–protamine binding model is unlinked: protamine has no path from the dose, so the binding link to unfractionated heparin (kant) is not reachable.**

The model describes unfractionated heparin (anti-Xa activity) in adults undergoing cardiopulmonary bypass cardiac surgery, with a general linear structure and only two extracted parameters: CL 1.5 L h-1 (total clearance) and Q 0.29 L h-1 (intercompartmental clearance), both for heparin. The structure includes a binding link from unfractionated heparin to protamine via the parameter kant, but the check for unreachable or orphan compartments or unlinked metabolites failed, meaning protamine is not connected to the dosing path. No parameter values for protamine itself were extracted, so the binding partner stands as an unlinked species in the model. Extracted — unfractionated heparin (anti-Xa activity): CL 1.5 L h -1, Q 0.29 L h -1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has protamine, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| UFH clearance | `Q22` · CL | 1.5 | L h -1 | 4.167e-07 | m3/s | L/h | boundary (0.8) | Lanoiselée_2026:other_prose |
| intercompartmental clearance | `Q30` · Q | 0.29 | L h -1 | 8.056e-08 | m3/s | L/h | exact (1) | Lanoiselée_2026:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Patients, n' — extend the ontology if this is a real PK parameter (source ['tab_0:row1:col1'])
- dropped unlinked row (NIL): 'Male, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col1'])
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col1'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col1'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['tab_0:row8:col1'])
- dropped unlinked row (NIL): 'Previous cardiac surgery, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1'])
- dropped unlinked row (NIL): 'Minimally invasive, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col1'])
- dropped unlinked row (NIL): 'CABG' — extend the ontology if this is a real PK parameter (source ['tab_0:row12:col1'])
- dropped unlinked row (NIL): 'Valve' — extend the ontology if this is a real PK parameter (source ['tab_0:row13:col1'])
- dropped unlinked row (NIL): 'CABG + valve' — extend the ontology if this is a real PK parameter (source ['tab_0:row14:col1'])
- dropped unlinked row (NIL): 'Heparin rebound, n (%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row29:col1'])
- dropped PD-category row '0 (insignificant)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_0:row34:col1'])
- dropped unlinked row (NIL): '1 (mild)' — extend the ontology if this is a real PK parameter (source ['tab_0:row35:col1'])
- dropped unlinked row (NIL): '2 (moderate)' — extend the ontology if this is a real PK parameter (source ['tab_0:row36:col1'])
- dropped unlinked row (NIL): '3 (severe)' — extend the ontology if this is a real PK parameter (source ['tab_0:row37:col1'])
- dropped unlinked row (NIL): '4 (massive)' — extend the ontology if this is a real PK parameter (source ['tab_0:row38:col1'])
- dropped value-less row: 'anti-Xa'
- dropped value-less row: 'anti-factor Xa activity'
- dropped value-less row: 'CABG'
- dropped value-less row: 'coronary artery bypass grafting'
- dropped value-less row: 'CPB'
- dropped value-less row: 'cardiopulmonary bypass'
- dropped value-less row: 'UDPB'
- dropped value-less row: 'Universal Definition of Perioperative Bleeding'
- dropped value-less row: 'UFH'
- dropped value-less row: 'unfractionated heparin'
- table mostly unlinked (15/16 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q22 ('UFH clearance'=1.5) from results prose — parameter table was unreadable
- salvaged Q30 ('intercompartmental clearance'=0.29) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=unfractionated heparin (anti-Xa activity)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'unfractionated heparin (anti-Xa activity)' ('unfractionated heparin') — left in mass units
- molar mass: none found for 'protamine' — its concentrations stay mass-only
- molar mass: none found for 'unfractionated heparin (anti-Xa activity)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'unfractionated heparin (anti-Xa activity)', not protamine — the review values are the parent's

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (1/9 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['unfractionated heparin', 'protamine', 'binding']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[4]` |  | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance]` | 0.29 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance]` |  | 0.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ufh clearance]` | 1.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ufh clearance]` |  | 1.5 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | protamine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | unfractionated heparin (anti-Xa activity) | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.5 | ['Lanoiselée_2026:other_prose'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['kant'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.5 L/h | ['Lanoiselée_2026:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprotamine%5D%20Protamine_Lanoisele2026_reference&body=Drug%3A%20protamine%0ARecord%3A%20Protamine_Lanoisele2026_reference%0APaper%3A%20Lanoisel%C3%A9e_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_protamine/Protamine_Lanoisele2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 19:26 UTC</sub>
