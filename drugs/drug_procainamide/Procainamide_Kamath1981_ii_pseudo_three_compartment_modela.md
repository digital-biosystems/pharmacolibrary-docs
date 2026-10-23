<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;procainamide&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/&quot;},{&quot;label&quot;:&quot;Kamath_1981 \u00b7 ii_pseudo_three_compartment_modela&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Procainamide_Grasela1984_reference&quot;,&quot;label&quot;:&quot;Grasela_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Grasela1984_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Papich1986_reference&quot;,&quot;label&quot;:&quot;Papich_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Papich1986_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Ellis1994_reference&quot;,&quot;label&quot;:&quot;Ellis_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Ellis1994_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Kamath1981_i_one_compartment_open_model&quot;,&quot;label&quot;:&quot;Kamath_1981_i_one_compartment_open_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Kamath1981_i_one_compartment_open_model.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# procainamide — `Procainamide_Kamath1981_ii_pseudo_three_compartment_modela`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> C5 dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="procainamide" model-id="Procainamide_Kamath1981_ii_pseudo_three_compartment_modela" status="rejected" stale="false" population="rats" measured-compound="procainamide" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Kamath BL, Lai CM, Gupta SD, Durrani MJ, Yacobi A. Pharmacokinetics of procainamide and N-acetylprocainamide in rats. Journal of pharmaceutical sciences 70(3):299–302 (1981).
  ·  DOI: [10.1002/jps.2600700319](https://doi.org/10.1002/jps.2600700319)

## Population and dosing

**Population:** rats · condition healthy.

**Dosing:** 5250 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α, hr-1 | λ1 | 2.70 | hr-1 |
| β, hr-1 | kel | 0.327 | hr-1 |
| Half-life, hr | t1/2z | 2.22 | hr |
| kf, hr-1 | kfm | 0.254 | hr-1 |
| CLr, liters/hr/kg | CLR | 0.919 | liters/hr/kg |
| Rat 1 Vd, liters/kg m | V | 0.831 | L/kg |
| Rat 1 Cl,, liters/hr/kg m | CL | 2.1 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.176). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (λ1), so that value has no SI equivalent. Extracted — procainamide: λ1 2.7 hr-1, kel 0.327 hr-1, t1/2z 2.22 hr, CLR 0.919 liters/hr/kg, V 0.831 L/kg, CL 2.1 L/h/kg; N-acetylprocainamide: kfm 0.254 hr-1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has procainamide, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α, hr-1 | `Q67` · λ1 | 2.70 | hr-1 |  |  | 1/h | exact (1) | Kamath_1981_table_2:row1:col2 |
| β, hr-1 | `Q47` · kel | 0.327 | hr-1 | 9.083e-05 | 1/s | 1/h | exact (1) | Kamath_1981_table_2:row2:col2 |
| Half-life, hr | `Q57` · t1/2z | 2.22 | hr | 7992 | s | h | llm (0.6) | Kamath_1981_table_2:row3:col2 |
| kf, hr-1 | `Q305` · kfm | 0.254 | hr-1 | 7.056e-05 | 1/s | 1/h | exact (1) | Kamath_1981_table_2:row9:col2 |
| CLr, liters/hr/kg | `Q26` · CLR | 0.919 | liters/hr/kg | 1.787e-05 | m3/s | l/(h·kg) | exact (1) | Kamath_1981_table_2:row13:col2 |
| Rat 1 Vd, liters/kg m | `Q61` · V | 0.831 | L/kg | 0.05817 | m3 | L | boundary (0.8) | Kamath_1981:discussion_prose |
| Rat 1 Cl,, liters/hr/kg m | `Q22` · CL | 2.1 | L/h/kg | 4.083e-05 | m3/s | L/h | boundary (0.8) | Kamath_1981:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'α, hr-1' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- salvaged Q61 ('Rat 1 Vd, liters/kg m'=0.831) from results prose — parameter table was unreadable
- salvaged Q22 ('Rat 1 Cl,, liters/hr/kg m'=2.1) from results prose — parameter table was unreadable
- implicit units: 'Rat 1 Vd, liters/kg m' → L/kg (from the paper text: "Table II lists the parameter 'vd(p), liters/k' and the Discussion text states 'The renal clearance of I was 1.92 litersh")
- implicit units: 'Rat 1 Cl,, liters/hr/kg m' → L/h/kg (from the paper text: "Table II lists the parameter 'Cl,, liters/hr/k' and the Discussion text explicitly states 'The renal clearance of I was ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=procainamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- population split: 'ii, pseudo-three-compartment modela (n = 7)' subgroup of Kamath_1981 (paper reports 4 populations: i, one-compartment open model (n = 8), ii, pseudo-three-compartment modela (n = 7), ii, two-compartment open modelb (n = 8), mean)
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 54 linked by role; re-tagged parent→N-acetylprocainamide ×31

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- unparsed cell Kamath_1981_table_2:row9:col1 = '0.248d'
- transposed table Kamath_1981_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.176 (3/17 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl]` |  | 2.10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr]` | 0.919 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr]` |  | 0.919 | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-life]` | 2.22 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-life]` |  | 2.22 | only_one_extracted |
| `gpt-oss:120b` | `parameters[rat 1 cl,, liters/hr/kg m]` | 2.1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[rat 1 vd, liters/kg m]` | 0.831 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` |  | 0.831 | only_one_extracted |
| `gpt-oss:120b` | `parameters[α]` | 2.70 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[α]` |  | 2.70 | only_one_extracted |
| `gpt-oss:120b` | `parameters[β]` | 0.327 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[β]` |  | 0.327 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | procainamide | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | procainamide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kamath_1981:discussion_prose'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Kamath_1981_table_2:row13:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Kamath_1981_table_2:row9:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Kamath_1981_table_2:row2:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kamath_1981_table_2:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kamath_1981:discussion_prose'] |
| C5_dimension_Q67 | fail | 1 / [time] | hr-1 | ['Kamath_1981_table_2:row1:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.1 | ['Kamath_1981:discussion_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 147 L/h | ['Kamath_1981:discussion_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 58.2 L | ['Kamath_1981:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprocainamide%5D%20Procainamide_Kamath1981_ii_pseudo_three_compartment_modela&body=Drug%3A%20procainamide%0ARecord%3A%20Procainamide_Kamath1981_ii_pseudo_three_compartment_modela%0APaper%3A%20Kamath_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_procainamide/Procainamide_Kamath1981_ii_pseudo_three_compartment_modela%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-08 20:23 UTC</sub>
