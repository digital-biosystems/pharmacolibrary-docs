<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;abacavir&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/&quot;},{&quot;label&quot;:&quot;Archary_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abacavir_Chupradit2024_reference&quot;,&quot;label&quot;:&quot;Chupradit_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Ji2024_reference&quot;,&quot;label&quot;:&quot;Ji_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Ji2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abacavir — `Abacavir_Archary2019_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="abacavir" model-id="Abacavir_Archary2019_reference" status="extracted" stale="false" population="severely malnourished HIV-infected children" measured-compound="abacavir" parameterization="apparent" topology="3C"></div>

## Citation
Archary M, Mcllleron H, Bobat R, LaRussa P, Sibaya T, Wiesner L et al. Population pharmacokinetics of abacavir and lamivudine in severely malnourished human immunodeficiency virus-infected children in relation to treatment outcomes. British journal of clinical pharmacology 85(9):2066–2075 (2019).
  ·  DOI: [10.1111/bcp.13998](https://doi.org/10.1111/bcp.13998)

## Population and dosing

**Population:** severely malnourished HIV-infected children · condition HIV and severe acute malnutrition · age group mixed · n = &gt;= 75.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
| label | parameter | value | unit |
|---|---|---|---|
| The typical population CL/F (L h -1 /7 kg) of abacavir increased from day 1 to day 14 from 3.33 to 5.86 | CL/F | 3.33 | L h -1 /7 kg |
| apparent central volume of distribution (Vc/F, L/7kg) | V1/F | 4.63 | L/7kg |
| absorption rate (ka, h -1 ) | kabs | 0.97 | h -1 |
| inter-compartmental clearance (Q/F, L h -1 ) | Q | 0.63 | L h -1 |
| peripheral volume of distribution (Vp/F, L) | V2 | 1.65 | L |
| Clearance (CL/F) | CL | 3.33 | L/h/kg |
| Central volume of distribution (Vc/F) | V1 | 4.63 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.1). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has abacavir, the second reading unknown; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The typical population CL/F (L h -1 /7 kg) of abacavir increased from day 1 to day 14 from 3.33 to 5.86 | `Q27` · CL/F | 3.33 | L h -1 /7 kg | 9.25e-06 | m3/s | L/h | boundary (0.8) | Archary_2019:other_prose |
| apparent central volume of distribution (Vc/F, L/7kg) | `Q290` · V1/F | 4.63 | L/7kg | 0.0463 | m3 | L | boundary (0.8) | Archary_2019:other_prose |
| absorption rate (ka, h -1 ) | `Q49` · kabs | 0.97 | h -1 | 0.0002694 | 1/s | 1/h | exact (1) | Archary_2019:other_prose |
| inter-compartmental clearance (Q/F, L h -1 ) | `Q30` · Q | 0.63 | L h -1 | 1.75e-07 | m3/s | L/h | boundary (0.8) | Archary_2019:other_prose |
| peripheral volume of distribution (Vp/F, L) | `Q64` · V2 | 1.65 | L | 0.00165 | m3 | L | boundary_compartment (0.9) | Archary_2019:other_prose |
| Clearance (CL/F) | `Q22` · CL | 3.33 | L/h/kg | 6.475e-05 | m3/s | L/h | exact (1) | Archary_2019:discussion_prose |
| Central volume of distribution (Vc/F) | `Q63` · V1 | 4.63 | L/kg | 0.3241 | m3 | L | boundary_compartment (0.9) | Archary_2019:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age (months)' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row2:col1', 'Archary_2019_table_1:row2:col2'])
- dropped unlinked row (NIL): 'Oedema at admission (N)' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row4:col1', 'Archary_2019_table_1:row4:col2'])
- dropped unlinked row (NIL): 'Rifampicin co-administration (N)' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row5:col1', 'Archary_2019_table_1:row5:col2'])
- dropped unlinked row (NIL): 'Time to ART initiation (days)' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row6:col1', 'Archary_2019_table_1:row6:col2'])
- dropped unlinked row (NIL): 'Weight for Age Z-score' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row8:col1', 'Archary_2019_table_1:row8:col2'])
- dropped unlinked row (NIL): 'Weight (kg)' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row9:col1', 'Archary_2019_table_1:row9:col2'])
- dropped unlinked row (NIL): 'Height (cm)' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row10:col1', 'Archary_2019_table_1:row10:col2'])
- dropped unlinked row (NIL): 'BMI Z-score' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row11:col1', 'Archary_2019_table_1:row11:col2'])
- dropped unlinked row (NIL): 'Mid-upper arm circumference (cm) 11.5 [10.3-12.8] 11.5 [11-13.4]' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row12:col1'])
- dropped unlinked row (NIL): 'Haemoglobin (g•dL -1 )' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row13:col1', 'Archary_2019_table_1:row13:col2'])
- dropped unlinked row (NIL): 'Total Protein (g•dL -1 )' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row14:col1', 'Archary_2019_table_1:row14:col2'])
- dropped unlinked row (NIL): 'Total Protein (g•dL -1 ) -ART initiation' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row15:col1', 'Archary_2019_table_1:row15:col2'])
- dropped unlinked row (NIL): 'Albumin (g•dL -1 ) -Baseline' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row16:col1', 'Archary_2019_table_1:row16:col2'])
- dropped unlinked row (NIL): 'Albumin (g•dL -1 ) -ART initiation 21.5 [15-27.3]' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row17:col1', 'Archary_2019_table_1:row17:col2'])
- dropped unlinked row (NIL): 'Creatinine' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row18:col1', 'Archary_2019_table_1:row18:col2'])
- dropped unlinked row (NIL): 'Cholesterol (mmol•L -1)' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row19:col1', 'Archary_2019_table_1:row19:col2'])
- dropped unlinked row (NIL): 'Triglyceride (mmol•L -1)' — extend the ontology if this is a real PK parameter (source ['Archary_2019_table_1:row20:col1', 'Archary_2019_table_1:row20:col2'])
- table mostly unlinked (17/17 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q27 ('The typical population CL/F (L h -1 /7 kg) of abacavir increased from day 1 to day 14 from 3.33 to 5.86'=3.33) from results prose — parameter table was unreadable
- salvaged Q290 ('apparent central volume of distribution (Vc/F, L/7kg)'=4.63) from results prose — parameter table was unreadable
- salvaged Q49 ('absorption rate (ka, h -1 )'=0.97) from results prose — parameter table was unreadable
- salvaged Q30 ('inter-compartmental clearance (Q/F, L h -1 )'=0.63) from results prose — parameter table was unreadable
- salvaged Q64 ('peripheral volume of distribution (Vp/F, L)'=1.65) from results prose — parameter table was unreadable
- salvaged Q22 ('Clearance (CL/F)'=3.33) from results prose — parameter table was unreadable
- salvaged Q63 ('Central volume of distribution (Vc/F)'=4.63) from results prose — parameter table was unreadable
- implicit units: 'Clearance (CL/F)' → L/h/kg (from the paper text: "The table 'Table 2a: Parameter estimates... for abacavir' lists the unit for 'Clearance (CL/F)' as 'L•h - 1 •7kg - 1'. T")
- implicit units: 'Central volume of distribution (Vc/F)' → L/kg (from the paper text: "The table 'Table 2a: Parameter estimates... for abacavir' lists the unit for 'Central volume of distribution (Vc/F)' as ")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=abacavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Archary_2019_table_1: ragged_grid
- table Archary_2019_table_1: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.1 (2/20 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption rate]` | 0.97 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent central volume of distribution]` | 4.63 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` | 4.63 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` |  | 4.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 3.33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 3.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental clearance]` | 0.63 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental clearance]` |  | 0.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.97 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution]` | 1.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution]` |  | 1.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  | 0.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[the typical population cl/f (l h -1 /7 kg) of abacavir increased from day 1 to day 14 from 3.33 to 5.86]` | 3.33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[typical population cl/f]` |  | 3.33 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 4.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` |  | 1.65 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | abacavir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | abacavir | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Archary_2019:discussion_prose'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Archary_2019:discussion_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 233 L/h | ['Archary_2019:discussion_prose'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 33.3 L/h | ['Archary_2019:other_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 46.3 L | ['Archary_2019:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 324 L | ['Archary_2019:discussion_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.65 L | ['Archary_2019:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babacavir%5D%20Abacavir_Archary2019_reference&body=Drug%3A%20abacavir%0ARecord%3A%20Abacavir_Archary2019_reference%0APaper%3A%20Archary_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abacavir/Abacavir_Archary2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 08:52 UTC</sub>
