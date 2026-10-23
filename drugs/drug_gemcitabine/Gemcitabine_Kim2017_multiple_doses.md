<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;gemcitabine&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/&quot;},{&quot;label&quot;:&quot;Kim_2017 \u00b7 multiple_doses&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gemcitabine_Doi2017_reference&quot;,&quot;label&quot;:&quot;Doi_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/Gemcitabine_Doi2017_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gemcitabine_Serdjebi2017_reference&quot;,&quot;label&quot;:&quot;Serdjebi_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/Gemcitabine_Serdjebi2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gemcitabine_Terranova2021_reference&quot;,&quot;label&quot;:&quot;Terranova_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/Gemcitabine_Terranova2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gemcitabine_Jiang2008_reference&quot;,&quot;label&quot;:&quot;Jiang_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/Gemcitabine_Jiang2008_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gemcitabine_RamnLpez2012_reference&quot;,&quot;label&quot;:&quot;Ram\u00f3n-L\u00f3pez_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/Gemcitabine_RamnLpez2012_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Yao_2023_Tumor_volume&quot;,&quot;label&quot;:&quot;Yao_2023 \u00b7 Tumor volume&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/pd_Yao_2023_Tumor_volume.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gemcitabine — `Gemcitabine_Kim2017_multiple_doses`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Erlotinib metabolites lacked metabolic rate constants and a unit for a gemcitabine parameter could not be converted to standard SI units.

<div class="pk-model-meta" hidden drug="gemcitabine" model-id="Gemcitabine_Kim2017_multiple_doses" status="rejected" stale="false" population="rats" measured-compound="erlotinib, OSI-420, OSI-413" parameterization="apparent" topology="general_linear"></div>

## Citation
Kim TH, Shin S, Kim S, Bulitta JB, Weon KY, Joo SH et al. Alterations in Pharmacokinetics of Gemcitabine and Erlotinib by Concurrent Administration of Hyangsayukgunja-Tang, a Gastroprotective Herbal Medicine. Molecules (Basel, Switzerland) 22(9) (2017).
  ·  DOI: [10.3390/molecules22091515](https://doi.org/10.3390/molecules22091515)

## Population and dosing

**Population:** rats · condition healthy.

**Dosing:** 700, 1400 mg, iv, oral, single.

**Dosed compound ≠ measured compound:** dosed gemcitabine, erlotinib, measured erlotinib, OSI-420, OSI-413.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C0 (ng/mL) | C0 | 10098.7 | ng/mL |
| AUCall (ng·h/mL) | AUClast | 29383.8 | ng·h/mL |
| AUCinf (ng·h/mL) | AUC∞ | 29705.9 | ng·h/mL |
| Vz/F (L/kg) | V/F | 5.2 | L/kg |
| CL/F (mL/min/kg) | CL/F | 5.7 | mL/min/kg |
| Vss (L/kg) | Vss | 1.9 | L/kg |
| Cmax (ng/mL) | Cmax | 722 | ng/mL |
| AUCmeta/AUCparent | AUC ratio | 0.70 |  |
| Tmax (h) | tmax | 1.5 | h |
| Tmax (hr) | tmax | 3.7 | hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.786). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Erlotinib metabolites lacked metabolic rate constants and a unit for a gemcitabine parameter could not be converted to standard SI units.**

The model structure included erlotinib metabolites OSI-420 and OSI-413, but the links from erlotinib to these metabolites had no defined flow parameters, leaving them structurally orphaned. Additionally, a specific unit reported for a gemcitabine parameter could not be resolved to standard SI units, preventing the derivation of a usable value. These issues meant the model had undefined compartments and incomplete parameter data. Extracted — gemcitabine: C0 1.01e+04 ng/mL, AUClast 2.94e+04 ng·h/mL, AUC∞ 2.97e+04 ng·h/mL, V/F 5.2 L/kg, CL/F 5.7 mL/min/kg, Vss 1.9 L/kg; dFdU: Cmax 722 ng/mL, AUC ratio 0.7, tmax 1.5 h; erlotinib: tmax 3.7 hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has gemcitabine, erlotinib, the second reading gemcitabine and erlotinib; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C0 (ng/mL) | `Q86` · C0 | 10098.7 | ng/mL |  |  | ng/ml | exact (1) | Kim_2017_table_1:row2:col4 |
| AUCall (ng·h/mL) | `Q74` · AUClast | 29383.8 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Kim_2017_table_1:row3:col4, Kim_2017_table_1:row11:col4, Kim_2017_table_2:row4:col4 |
| AUCinf (ng·h/mL) | `Q17` · AUC∞ | 29705.9 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Kim_2017_table_1:row4:col4, Kim_2017_table_1:row12:col4, Kim_2017_table_2:row5:col4, Kim_2017_table_2:row12:col4 |
| Vz/F (L/kg) | `Q76` · V/F | 5.2 | L/kg | 0.364 | m3 | l/kg | exact (1) | Kim_2017_table_1:row5:col4, Kim_2017_table_2:row7:col4 |
| CL/F (mL/min/kg) | `Q27` · CL/F | 5.7 | mL/min/kg | 6.65e-06 | m3/s | ml/(min·kg) | exact (1) | Kim_2017_table_1:row6:col4, Kim_2017_table_2:row6:col4 |
| Vss (L/kg) | `Q65` · Vss | 1.9 | L/kg | 0.133 | m3 | l/kg | exact (1) | Kim_2017_table_1:row7:col4 |
| Cmax (ng/mL) | `Q32` · Cmax | 722 | ng/mL |  |  | ng/ml | exact (1) | Kim_2017_table_1:row10:col4, Kim_2017_table_2:row3:col4 |
| AUCmeta/AUCparent | `Q21` · AUC ratio | 0.70 |  |  |  |  | llm (0.6) | Kim_2017_table_1:row13:col4 |
| Tmax (h) | `Q56` · tmax | 1.5 | h | 5400 | s | h | exact (1) | Kim_2017_table_2:row2:col4, Kim_2017_table_2:row9:col4 |
| Tmax (hr) | `Q56` · tmax | 3.7 | hr | 1.332e+04 | s | h | exact (1) | Kim_2017_table_2:row15:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Gemcitabine' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_1:row1:col4', 'Kim_2017_table_1:row1:col5'])
- unit_dimension_mismatch: 'C0 (ng/mL)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'dFdU' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_1:row8:col4', 'Kim_2017_table_1:row8:col5'])
- dropped unlinked row (NIL): 'Erlotinib' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_2:row1:col4', 'Kim_2017_table_2:row1:col5'])
- dropped unlinked row (NIL): 'OSI-420' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_2:row8:col4', 'Kim_2017_table_2:row8:col5'])
- dropped unlinked row (NIL): 'OSI-413' — extend the ontology if this is a real PK parameter (source ['Kim_2017_table_2:row14:col4', 'Kim_2017_table_2:row14:col5'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=erlotinib, OSI-420, OSI-413
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- status held at route_to_review — not promoted
- population split: 'multiple doses' subgroup of Kim_2017 (paper reports 3 populations: multiple doses, population mean (bsv), single dose)
- row roles: 6 per-group rows of gemcitabine summary_statistic but 6 reference group(s) — kept as printed
- row roles: 3 per-group rows of dFdU summary_statistic but 3 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: Clearance for OSI-420 in control group, Clearance for OSI-413 in control group
- row roles (LLM): model_class=compartmental; 33/33 row label(s) assigned, 25 linked by role; re-tagged parent→erlotinib ×18, parent→OSI-420 ×13, parent→OSI-413 ×13, parent→gemcitabine ×64, parent→dFdU ×40
- molar mass: no plausible PubChem entry for 'erlotinib, OSI-420, OSI-413' ('no full name in the paper') — left in mass units
- molar mass: none found for 'erlotinib, OSI-420, OSI-413' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'erlotinib, OSI-420, OSI-413', not gemcitabine — the review values are the parent's

**Extraction notes:**
- unparsed cell Kim_2017_table_1:row1:col3 = '9.8 ± 0.8 *'
- unparsed cell Kim_2017_table_1:row5:col2 = '4.6 ± 1.0 *'
- unparsed cell Kim_2017_table_1:row9:col4 = '5.6 ± 2.2 *'
- companion parameter table 1 transcribed (54 record(s))
- unparsed cell Kim_2017_table_2:row10:col4 = '114.7 ± 15.6 *'
- unparsed cell Kim_2017_table_2:row11:col4 = '865 ± 223.8 *'
- unparsed cell Kim_2017_table_2:row13:col4 = '0.08 ± 0.01 *'
- unparsed cell Kim_2017_table_2:row16:col4 = '649.4 ± 115.6 *'
- unparsed cell Kim_2017_table_2:row17:col4 = '5671.4 ± 1018.4 *'
- unparsed cell Kim_2017_table_2:row18:col4 = '5697.5 ± 1007.6 *'
- unparsed cell Kim_2017_table_2:row19:col4 = '0.47 ± 0.07 *'
- companion parameter table 2 transcribed (75 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.786 (11/14 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['erlotinib', 'osi-420', 'metabolism'], ['erlotinib', 'osi-413', 'metabolism']] | [['erlotinib', 'osi-420', 'metabolism'], ['erlotinib', 'osi-413', 'metabolism'], ['gemcitabine', 'dfdu', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | gemcitabine, erlotinib | gemcitabine and erlotinib | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | erlotinib, OSI-420, OSI-413 | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Kim_2017_table_1:row4:col4', 'Kim_2017_table_1:row12:col4', 'Kim_2017_table_2:row5:col4', 'Kim_2017_table_2:row12:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Kim_2017_table_1:row6:col4', 'Kim_2017_table_2:row6:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Kim_2017_table_1:row10:col4', 'Kim_2017_table_2:row3:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Kim_2017_table_2:row2:col4', 'Kim_2017_table_2:row9:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Kim_2017_table_2:row15:col4'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Kim_2017_table_1:row7:col4'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['Kim_2017_table_1:row3:col4', 'Kim_2017_table_1:row11:col4', 'Kim_2017_table_2:row4:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Kim_2017_table_1:row5:col4', 'Kim_2017_table_2:row7:col4'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng/mL | ['Kim_2017_table_1:row2:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.9 L/h | ['Kim_2017_table_1:row6:col4', 'Kim_2017_table_2:row6:col4'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 133 L | ['Kim_2017_table_1:row7:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 364 L | ['Kim_2017_table_1:row5:col4', 'Kim_2017_table_2:row7:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgemcitabine%5D%20Gemcitabine_Kim2017_multiple_doses&body=Drug%3A%20gemcitabine%0ARecord%3A%20Gemcitabine_Kim2017_multiple_doses%0APaper%3A%20Kim_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gemcitabine/Gemcitabine_Kim2017_multiple_doses%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:45 UTC</sub>
