<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;abemaciclib&quot;,&quot;href&quot;:&quot;drugs/drug_abemaciclib/&quot;},{&quot;label&quot;:&quot;Chigutsa_2020 \u00b7 external_validation_with_phase_iii_data&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abemaciclib — `Abemaciclib_Chigutsa2020_external_validation_with_phase_iii`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the abemaciclib model reports clearance of 22.8 L/h but leaves metabolites M2 and M20 without modeled compartments or identified metabolism-link parameters.

<div class="pk-model-meta" hidden drug="abemaciclib" model-id="Abemaciclib_Chigutsa2020_external_validation_with_phase_iii" status="rejected" stale="false" population="healthy subjects and patients with cancer" measured-compound="abemaciclib" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Chigutsa E, Kambhampati SRP, Karen Sykes A, Posada MM, van der Walt JS, Turner PK. Development and Application of a Mechanistic Population Modeling Approach to Describe Abemaciclib Pharmacokinetics. CPT: pharmacometrics & systems pharmacology 9(9):523–533 (2020).
  ·  DOI: [10.1002/psp4.12544](https://doi.org/10.1002/psp4.12544)

## Population and dosing

**Population:** healthy subjects and patients with cancer · condition cancer, including breast cancer; healthy subjects · age group adult.

**Dosing:** 50, 275 mg, oral.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Bioavailability (F) | Fab | 0.516 | F |
| Half‐life (h) c , c | t1/2z | 20.3 | h |
| AUC0−∞ (ng·h/mL) | AUC∞ | 3360 | ng·h/mL |
| Cmax (ng/mL) | Cmax | 125 | ng/mL |
| Half‐life (h) | t1/2z | 16 | h |
| AUC0−∞ (ng.h/mL) | AUC∞ | 1290 | ng.h/mL |
| theta_q25_hepatic_clearance_l_h | theta_q25_hepatic_clearance_l_h | 23 |  |
| theta_q27_hepatic_apparent_clearance_l_h | theta_q27_hepatic_apparent_clearance_l_h | 21.6 |  |
| plasma clearance | CL | 22.8 | L/h |
| ka | kabs | 0.31 | 1/h) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the abemaciclib model reports clearance of 22.8 L/h but leaves metabolites M2 and M20 without modeled compartments or identified metabolism-link parameters.**

Both metabolites have zero modeled compartments, and each listed metabolism link lacks an identified parameter, matching the orphan-metabolite finding. A reported unit could not be converted to SI, but the record does not specify which parameter’s unit. Extracted — abemaciclib: Fab 0.516 F, t1/2z 20.3 h, AUC∞ 3.36e+03 ng·h/mL, Cmax 125 ng/mL, CL 22.8 L/h, kabs 0.31 1/h); M2 (LSN2839567): t1/2z 16 h, AUC∞ 1.29e+03 ng.h/mL.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Bioavailability (F) | `Q40` · Fab | 0.516 | F |  |  |  | exact (1) | Chigutsa_2020_table_3:row2:col6 |
| Half‐life (h) c , c | `Q57` · t1/2z | 20.3 | h | 7.308e+04 | s | h | llm (0.6) | Chigutsa_2020_table_3:row4:col6 |
| AUC0−∞ (ng·h/mL) | `Q17` · AUC∞ | 3360 | ng·h/mL |  |  | (h·ng)/ml | exact (1) | Chigutsa_2020_table_3:row5:col6, Chigutsa_2020_table_3:row15:col6 |
| Cmax (ng/mL) | `Q32` · Cmax | 125 | ng/mL |  |  | ng/ml | exact (1) | Chigutsa_2020_table_3:row6:col6, Chigutsa_2020_table_3:row11:col6, Chigutsa_2020_table_3:row16:col6 |
| Half‐life (h) | `Q57` · t1/2z | 16 | h | 5.76e+04 | s | h | llm (0.6) | Chigutsa_2020_table_3:row9:col6, Chigutsa_2020_table_3:row14:col6 |
| AUC0−∞ (ng.h/mL) | `Q17` · AUC∞ | 1290 | ng.h/mL |  |  | (h·ng)/ml | exact (1) | Chigutsa_2020_table_3:row10:col6 |
| theta_q25_hepatic_clearance_l_h | `Q900` · theta_q25_hepatic_clearance_l_h | 23 |  |  |  |  |  | Chigutsa_2020_table_3:row3:col6 |
| theta_q27_hepatic_apparent_clearance_l_h | `Q900` · theta_q27_hepatic_apparent_clearance_l_h | 21.6 |  |  |  |  |  | Chigutsa_2020_table_3:row8:col6, Chigutsa_2020_table_3:row13:col6 |
| plasma clearance | `Q22` · CL | 22.8 | L/h | 6.333e-06 | m3/s | L/h | boundary (0.8) | Chigutsa_2020:other_prose |
| ka | `Q49` · kabs | 0.31 | 1/h) | 8.611e-05 | 1/s | 1/h | review_gapfill (0.7) | Fleisher_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Patients a , a 200 mg N = 421' — extend the ontology if this is a real PK parameter (source ['Chigutsa_2020_table_3:row0:col6'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.846' (source ['psp412544-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.968' (source ['psp412544-tbl-0002:footnote', 'psp412544-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '6' (source ['psp412544-tbl-0002:footnote']); the table cell was unparseable — needs review
- unit inherited for t1/2z (Q57): 'h' from a same-Q-code sibling (this row's label had no unit)
- covariate effect for Q25 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- salvaged Q22 ('plasma clearance'=22.8) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abemaciclib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- population split: 'external validation with phase iii data' subgroup of Chigutsa_2020 (paper reports 5 populations: % variability a , a (%see), estimate (%see), external validation with phase iii data, nca(200 mg), semimechanistic model development)
- row roles (LLM): model_class=compartmental; 35/35 row label(s) assigned, 44 linked by role; re-tagged parent→M2 (LSN2839567) ×39, parent→M20 (LSN3106726) ×6, abemaciclib→parent ×4
- molar mass: no plausible PubChem entry for 'M2 (LSN2839567)' ('no full name in the paper') — left in mass units
- molar mass: no plausible PubChem entry for 'M20 (LSN3106726)' ('no full name in the paper') — left in mass units
- molar mass: none found for 'M2 (LSN2839567)' — its concentrations stay mass-only
- molar mass: none found for 'M20 (LSN3106726)' — its concentrations stay mass-only
- skipped review gap-fill of V from Fleisher_2021: its label names a different analyte ('liposomal') — 'VL Vd of liposomal drug'
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Fleisher_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell psp412544-tbl-0002:row1:col2 = '7.08 (fixed) b , b'
- unparsed cell psp412544-tbl-0002:row1:col3 = '0.882 (0.874–0.890)'
- unparsed cell psp412544-tbl-0002:row1:col4 = '7.08 (fixed) b , b'
- unparsed cell psp412544-tbl-0002:row2:col3 = '0.479 (0.453–0.507)'
- unparsed cell psp412544-tbl-0002:row3:col3 = '97.6 (85.0–111)'
- unparsed cell psp412544-tbl-0002:row3:col4 = '71.5 (60.6–83.7)'
- unparsed cell psp412544-tbl-0002:row4:col3 = '51.8 (47.8–56.2)'
- unparsed cell psp412544-tbl-0002:row5:col3 = '1.52 (1.43–1.62)'
- unparsed cell psp412544-tbl-0002:row5:col4 = '70.1 (64.2–77.9)'
- unparsed cell psp412544-tbl-0002:row6:col3 = '604 (563–635)'
- unparsed cell psp412544-tbl-0002:row6:col4 = '65.7 (59.9–72.8)'
- unparsed cell psp412544-tbl-0002:row7:col3 = '3.66 (3.10–4.29)'
- unparsed cell psp412544-tbl-0002:row8:col3 = '152 (132–184)'
- unparsed cell psp412544-tbl-0002:row9:col3 = '3.04 (2.52–3.84)'
- unparsed cell psp412544-tbl-0002:row9:col4 = '810 (533–1278)'
- unparsed cell psp412544-tbl-0002:row10:col3 = '1.76 (1.69–1.80)'
- unparsed cell psp412544-tbl-0002:row11:col3 = '0.401 (0.366–0.432)'
- unparsed cell psp412544-tbl-0002:row12:col3 = '0.306 (0.276–0.339)'
- unparsed cell psp412544-tbl-0002:row13:col2 = 'BSV of 44.9 (27.1) for healthy and 57.9 (39.5) for patients. WSV of 68.1 (5.12) for patients'
- unparsed cell psp412544-tbl-0002:row13:col3 = '235 (199–284)'
- unparsed cell psp412544-tbl-0002:row13:col4 = 'BSV of 44.3 (36.1–54.5) for healthy and 56.7 (44.8–71.2) for patients. WSV of 68.7 (59.6–80.7) for patients'
- unparsed cell psp412544-tbl-0002:row14:col2 = 'BSV of 44.9 (27.1) for healthy and 57.9 (39.5) for patients. WSV of 68.1 (5.12) for patients'
- unparsed cell psp412544-tbl-0002:row14:col3 = '700 (627–775)'
- unparsed cell psp412544-tbl-0002:row14:col4 = 'BSV of 44.3 (36.1–54.5) for healthy and 56.7 (44.8–71.2) for patients. WSV of 68.7 (59.6–80.7) for patients'
- unparsed cell psp412544-tbl-0002:row15:col3 = '241 (218–271)'
- unparsed cell psp412544-tbl-0002:row15:col4 = '42.2 (32.9–50.4)'
- unparsed cell psp412544-tbl-0002:row16:col3 = '454 (417–489)'
- unparsed cell psp412544-tbl-0002:row16:col4 = '42.1 (32.6–51.4)'
- unparsed cell psp412544-tbl-0002:row17:col3 = '0.145 (0.116–0.184)'
- unparsed cell psp412544-tbl-0002:row18:col3 = '−0.0079 (−1.29, 2.65 × 10−7)'
- unparsed cell psp412544-tbl-0002:row19:col3 = '0.872 (0.618–1.06)'
- unparsed cell psp412544-tbl-0002:row20:col3 = '0.982 (0.770–1.12)'
- unparsed cell psp412544-tbl-0002:row21:col3 = '−0.487 (−0.587 to −0.376)'
- unparsed cell psp412544-tbl-0002:row23:col4 = '0.908 (0.869–0.927)'
- companion parameter table 3 transcribed (95 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Chigutsa_2020_table_3:row5:col6', 'Chigutsa_2020_table_3:row15:col6'] |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Chigutsa_2020_table_3:row10:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Chigutsa_2020_table_3:row6:col6', 'Chigutsa_2020_table_3:row11:col6', 'Chigutsa_2020_table_3:row16:col6'] |
| C5_dimension_Q49 | pass |  |  | ['Fleisher_2021:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Chigutsa_2020_table_3:row9:col6', 'Chigutsa_2020_table_3:row14:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 22.8 | ['Chigutsa_2020:other_prose'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 22.8 L/h | ['Chigutsa_2020:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babemaciclib%5D%20Abemaciclib_Chigutsa2020_external_validation_with_phase_iii&body=Drug%3A%20abemaciclib%0ARecord%3A%20Abemaciclib_Chigutsa2020_external_validation_with_phase_iii%0APaper%3A%20Chigutsa_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abemaciclib/Abemaciclib_Chigutsa2020_external_validation_with_phase_iii%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 20:15 UTC</sub>
