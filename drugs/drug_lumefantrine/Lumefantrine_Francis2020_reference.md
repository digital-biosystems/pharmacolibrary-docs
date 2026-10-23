<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Lumefantrine&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/&quot;},{&quot;label&quot;:&quot;Francis_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lumefantrine_Kloprogge2018_reference&quot;,&quot;label&quot;:&quot;Kloprogge_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lumefantrine/Lumefantrine_Kloprogge2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lumefantrine — `Lumefantrine_Francis2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The lumefantrine absorption rate constant kabs was reported with unit 'Ka' instead of 1/h, so no SI value could be derived and the record was rejected for a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="Lumefantrine" model-id="Lumefantrine_Francis2020_reference" status="rejected" stale="false" population="nonpregnant adults with uncomplicated malaria, HIV infection, or both" measured-compound="lumefantrine" parameterization="mechanistic" topology="2C"></div>

## Citation
Francis J, Barnes KI, Workman L, Kredo T, Vestergaard LS, Hoglund RM et al. An Individual Participant Data Population Pharmacokinetic Meta-analysis of Drug-Drug Interactions between Lumefantrine and Commonly Used Antiretroviral Treatment. Antimicrobial agents and chemotherapy 64(5) (2020).
  ·  DOI: [10.1128/AAC.02394-19](https://doi.org/10.1128/AAC.02394-19)

## Population and dosing

**Population:** nonpregnant adults with uncomplicated malaria, HIV infection, or both · condition uncomplicated malaria with/without HIV coinfection · age group adult · n = 793.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clearance (CL) (liters/h)c | CL | 3.28 | L/h |
| Central vol of distribution (liters)c | V1 | 60 | L |
| Relative oral bioavailability (F) | Frel | 1 | F |
| Mean absorption transit time (h) | MTT | 2.86 | h |
| No. of hypothetical transit compartments | n_transit | 7.58 |  |
| First-order absorption rate constant (1/h) (Ka) | kabs | 0.727 | Ka |
| Intercompartmental clearance between central and first peripheral compartment (liters/h)c | Q | 0.63 | L/h |
| Vol. of distribution of the first peripheral compartment (liters)c | V2 | 182 | L |
| Intercompartmental clearance between central and second peripheral compartment (liters/h)c | Q3 | 1.55 | L/h |
| Vol. of distribution of the second peripheral compartment (liters)c | V3 | 39.1 | L |
| Lopinavir-ritonavir on F (%) | Fab | 67.2 |  |
| theta_q83_category | theta_q83_category | 4.30 |  |
| theta_q900_category | theta_q900_category | 2.28 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lumefantrine absorption rate constant kabs was reported with unit 'Ka' instead of 1/h, so no SI value could be derived and the record was rejected for a dimension mismatch on a structural parameter.**

In the Francis_2020 lumefantrine model (two-compartment structure), the first-order absorption rate constant kabs has value 0.727 with unit_verbatim 'Ka', which is not a valid unit for a rate constant and could not be converted to SI. All other parameters carry consistent units (CL 3.28 L/h, V1 60 L, MTT 2.86 h, Q 0.63 L/h, V2 182 L, Q3 1.55 L/h, V3 39.1 L). The rejection is therefore limited to this single parameter's unit problem. Extracted — lumefantrine: CL 3.28 L/h, V1 60 L, Frel 1 F, MTT 2.86 h, n_transit 7.58, kabs 0.727 Ka, Q 0.63 L/h, V2 182 L, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of intercompartmental clearance between central and second peripheral compartment (liters/h)c: this record has 1.55, the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clearance (CL) (liters/h)c | `Q22` · CL | 3.28 | L/h | 9.111e-07 | m3/s | L/h | llm_confirmed (0.6) | T3:row1:col1 |
| Central vol of distribution (liters)c | `Q63` · V1 | 60 | L | 0.06 | m3 | L | llm (0.6) | T3:row2:col1 |
| Relative oral bioavailability (F) | `Q87` · Frel | 1 | F |  |  |  | exact (1) | T3:row3:col1 |
| Mean absorption transit time (h) | `Q81` · MTT | 2.86 | h |  |  | h | llm_corrected (0.6) | T3:row4:col1 |
| No. of hypothetical transit compartments | `Q311` · n_transit | 7.58 |  |  |  |  | llm_corrected (0.6) | T3:row5:col1 |
| First-order absorption rate constant (1/h) (Ka) | `Q49` · kabs | 0.727 | Ka |  |  | ka | llm_confirmed (0.6) | T3:row6:col1 |
| Intercompartmental clearance between central and first peripheral compartment (liters/h)c | `Q30` · Q | 0.63 | L/h | 1.75e-07 | m3/s | L/h | llm_confirmed (0.6) | T3:row7:col1 |
| Vol. of distribution of the first peripheral compartment (liters)c | `Q64` · V2 | 182 | L | 0.182 | m3 | L | llm (0.6) | T3:row8:col1 |
| Intercompartmental clearance between central and second peripheral compartment (liters/h)c | `Q308` · Q3 | 1.55 | L/h | 4.306e-07 | m3/s | L/h | llm_corrected (0.6) | T3:row9:col1 |
| Vol. of distribution of the second peripheral compartment (liters)c | `Q77` · V3 | 39.1 | L | 0.0391 | m3 | L | llm (0.6) | T3:row10:col1 |
| Lopinavir-ritonavir on F (%) | `Q40` · Fab | 67.2 |  |  |  |  | llm (0.6) | T3:row15:col1 |
| theta_q83_category | `Q900` · theta_q83_category | 4.30 |  |  |  |  |  | T3:row22:col1 |
| theta_q900_category | `Q900` · theta_q900_category | 2.28 |  |  |  |  |  | T3:row23:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'First-order absorption rate constant (1/h) (Ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Efavirenz on CL (%)' — extend the ontology if this is a real PK parameter (source ['T3:row13:col1'])
- dropped duplicate Q22 ('Lopinavir-ritonavir on CL (%)', value '-50.1') — already have one for this compound
- dropped duplicate Q49 ('Lopinavir-ritonavir on Ka (%)', value '-47.6') — already have one for this compound
- dropped unlinked row (NIL): 'Rifampin-based TB treatment on CL (%)' — extend the ontology if this is a real PK parameter (source ['T3:row17:col1'])
- dropped duplicate Q40 ('First dose in SECAT on F (%)', value '-48.6') — already have one for this compound
- dropped duplicate Q40 ('Consecutive morning doses in SEACAT on F (%)', value '-77.2') — already have one for this compound
- dropped duplicate Q40 ('Uganda studies on F (%)', value '-26.9') — already have one for this compound
- dropped duplicate Q40 ('Nigeria study 1 on F (%)', value '-60.8') — already have one for this compound
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Clearance (CL) (liters/h)c' → L/h (from the paper text: 'Table 3 lists "Clearance (CL) (liters/h)"; text states "the apparent clearance (CL) was 3.28 liters/h".')
- implicit units: 'Central vol of distribution (liters)c' → L (from the paper text: 'Table 3 lists "Central vol of distribution (liters)".')
- implicit units: 'Intercompartmental clearance between central and first peripheral compartment (liters/h)c' → L/h (from the paper text: 'Table 3 lists "Intercompartmental clearance between central and first peripheral compartment (liters/h)".')
- implicit units: 'Vol. of distribution of the first peripheral compartment (liters)c' → L (from the paper text: 'Table 3 lists "Vol. of distribution of the first peripheral compartment (liters)".')
- implicit units: 'Intercompartmental clearance between central and second peripheral compartment (liters/h)c' → L/h (from the paper text: 'Table 3 lists "Intercompartmental clearance between central and second peripheral compartment (liters/h)".')
- implicit units: 'Vol. of distribution of the second peripheral compartment (liters)c' → L (from the paper text: 'Table 3 lists "Vol. of distribution of the second peripheral compartment (liters)".')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lumefantrine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell T3:row1:col2 = '3.14 to 3.46'
- unparsed cell T3:row1:col3 = '20.8+, 15.4++'
- unparsed cell T3:row1:col4 = '18.1 to 23.1, 13.3 to 17.5'
- unparsed cell T3:row2:col2 = '56.3 to 63.9'
- unparsed cell T3:row3:col3 = '30.2+, 56.5+++'
- unparsed cell T3:row3:col4 = '25.4 to 35.6, 53.8 to 58.9'
- unparsed cell T3:row4:col2 = '2.74 to 2.94'
- unparsed cell T3:row4:col3 = '31.9+++'
- unparsed cell T3:row4:col4 = '28.8 to 35.1'
- unparsed cell T3:row5:col2 = '7.06 to 8.10'
- unparsed cell T3:row6:col2 = '0.62 to 0.83'
- unparsed cell T3:row6:col3 = '73.8+++'
- unparsed cell T3:row6:col4 = '67.5 to 80.8'
- unparsed cell T3:row7:col2 = '0.60 to 0.67'
- unparsed cell T3:row7:col3 = '29.1+'
- unparsed cell T3:row7:col4 = '26.1 to 32.4'
- unparsed cell T3:row8:col2 = '171 to 195'
- unparsed cell T3:row9:col2 = '1.43 to 1.72'
- unparsed cell T3:row10:col2 = '37.1 to 41.2'
- unparsed cell T3:row11:col2 = '32.2 to 33.5'
- unparsed cell T3:row12:col2 = '13.9 to 14.4'
- unparsed cell T3:row13:col2 = '81.1 to 99.7'
- unparsed cell T3:row14:col2 = '−53.0 to −46.4'
- unparsed cell T3:row15:col2 = '49.1 to 88.9'
- unparsed cell T3:row16:col2 = '−56.5 to −37.4'
- unparsed cell T3:row17:col2 = '111 to 180'
- unparsed cell T3:row18:col2 = '−54.9 to −41.7'
- unparsed cell T3:row19:col2 = '−80.7 to −73.8'
- unparsed cell T3:row20:col2 = '−32.3 to −20.7'
- unparsed cell T3:row21:col2 = '−73.2 to −47.3'
- unparsed cell T3:row22:col2 = '2.84 to 5.73'
- unparsed cell T3:row23:col2 = '2.05 to 2.55'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (14/21 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[intercompartmental clearance between central and second peripheral compartment (liters/h)c]` | 1.55 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lopinavir-ritonavir on f]` | 67.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean absorption transit time].parameter_id` | Q81 | Q73 | mismatch |
| `gpt-oss-120b` | `parameters[relative oral bioavailability].covariate_forms` | [] | ['additive_shift'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_frel_category]` |  | 2.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q900_category]` | 2.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vol. of distribution of the second peripheral compartment (liters)c]` | 39.1 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['T3:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['T3:row7:col1'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['T3:row9:col1'] |
| C5_dimension_Q49 | fail | [time] | Ka | ['T3:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['T3:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['T3:row8:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['T3:row10:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 3.28 | ['T3:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 3.28 L/h | ['T3:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 60 L | ['T3:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 182 L | ['T3:row8:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blumefantrine%5D%20Lumefantrine_Francis2020_reference&body=Drug%3A%20lumefantrine%0ARecord%3A%20Lumefantrine_Francis2020_reference%0APaper%3A%20Francis_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lumefantrine/Lumefantrine_Francis2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 07:11 UTC</sub>
