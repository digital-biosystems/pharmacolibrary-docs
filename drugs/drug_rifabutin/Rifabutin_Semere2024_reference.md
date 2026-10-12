<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;rifabutin&quot;,&quot;href&quot;:&quot;drugs/drug_rifabutin/&quot;},{&quot;label&quot;:&quot;Semere_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifabutin_Bentley2021_reference&quot;,&quot;label&quot;:&quot;Bentley_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifabutin/Rifabutin_Bentley2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Ding2022_reference&quot;,&quot;label&quot;:&quot;Ding_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifabutin/Rifabutin_Ding2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rifabutin_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifabutin/Rifabutin_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rifabutin — `Rifabutin_Semere2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The rifabutin parent–metabolite model was rejected because the extracted clearance (16.2 L/h) and volume (0.135 L) fall outside plausible physiological windows, indicating a unit or scale extraction error.**

For rifabutin in HIV/TB co-infected children, the record lists total clearance of 16.2 L/h and a volume of distribution of 0.135 L, magnitudes flagged as implausible and consistent with a unit/scale extraction mistake. The metabolite des-rifabutin is formed from rifabutin in the central compartment with zero compartments of its own, linked by a formation clearance. A second reader disputed the analyte naming, reading the metabolite as 25-o-desacetyl rifabutin, and disagreed on whether the 16.2 L/h clearance belongs to this record; bioavailability was left without a value by both readers. Extracted — rifabutin: CL 16.2 L/h, V 0.135 L, kabs 0.16 h−1, tlag 0.825 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has rifabutin, the second reading unknown; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Semere Gebreyesus M et al., Population pharmacokinetics of rifabuti…, Antimicrobial agents and ch… (2024)
  ·  DOI: [10.1128/aac.00354-24](https://doi.org/10.1128/aac.00354-24)

<div class="pk-model-meta" hidden drug="rifabutin" model-id="Rifabutin_Semere2024_reference" status="rejected" stale="false" population="HIV/TB co-infected children" measured-compound="rifabutin" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| clearance conversion | `Q22` · CL | 16.2 | L/h | 4.5e-06 | L/h | not captured | boundary (0.8) | Semere_2024:other_prose | — | not captured |
| volume | `Q61` · V | 0.135 | L | 0.000135 | L | not captured | review_gapfill (0.7) | Chapagain_2022:review | — | not captured |
| Ka | `Q49` · kabs | 0.16 | h−1 | 4.4444444444444447e-05 | 1/h | not captured | review_gapfill (0.7) | Bentley_2021:review | — | not captured |
| LAGAM | `Q83` · tlag | 0.825 | h | 2970.0 | h | not captured | review_gapfill (0.7) | Wang_2020:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Bioavailability, F | Q40 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Clearance (Inhibitable CYP3A4 pathway) (L/h)c'
- dropped value-less row: 'Clearance conversion (AADAC pathway) (L/h)c'
- dropped value-less row: 'Central volume of distribution, VC,P (L)c'
- dropped value-less row: 'Peripheral volume of distribution, VP,P (L)c'
- dropped value-less row: 'Intercompartmental clearance, QP (L/h)c'
- dropped value-less row: 'Absorption rate constant, Ka (1/h)' (captured trailing unit '1/h' for child rows)
- dropped value-less row: 'Absorption lag time, Lag (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'Clearance metabolite (L/h)c'
- dropped value-less row: 'Central volume of distribution, VC,M (L)c'
- dropped value-less row: 'Peripheral volume of distribution, VP,M (L)c'
- dropped value-less row: 'Intercompartmental clearance, QM (L/h)c'
- dropped value-less row: 'LPV/r effect on rifabutin clearance (inhibitable CYP3A4 pathway) (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'LPV/r effect on des-rifabutin clearance (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'Age effect (≤3 years old) on Ka (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'Rifabutin: proportional error (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'Rifabutin: additive error (µg/L)' (captured trailing unit 'µg/L' for child rows)
- dropped value-less row: 'Des-rifabutin: proportional error (%)' (captured trailing unit '%' for child rows)
- dropped value-less row: 'Des-rifabutin: additive error (µg/L)' (captured trailing unit 'µg/L' for child rows)
- salvaged Q22 ('clearance conversion'=16.2) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rifabutin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 19 linked by role; re-tagged parent→des-rifabutin ×10
- gap-filled Q61 (V) from Chapagain_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Bentley_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Wang_2020's review values (primary lacked it)

**Extraction notes:**
- unparsed cell T2:row2:col1 = '13.6 (8.77–18.8)'
- unparsed cell T2:row2:col3 = 'BSV: 20.7 (15.6–26.0)'
- unparsed cell T2:row3:col1 = '16.2 (12.8–20.7)'
- unparsed cell T2:row4:col1 = '185 (135–251)'
- unparsed cell T2:row5:col1 = '232 (171–313)'
- unparsed cell T2:row6:col1 = '25.1 (17.3–33.1)'
- unparsed cell T2:row7:col3 = 'BOV: 71.9 (59.5–85.1)'
- unparsed cell T2:row8:col1 = '1.27 (0.810–2.14)'
- unparsed cell T2:row8:col3 = 'BOV: 118 (84–175)'
- unparsed cell T2:row9:col1 = '0.544 (0.338–0.805)'
- unparsed cell T2:row9:col3 = 'BOV: 74.8 (44.4–105.0)'
- unparsed cell T2:row11:col1 = '106 (82.1–142.0)'
- unparsed cell T2:row11:col3 = 'BSV: 30.8 (23.2–39.2)'
- unparsed cell T2:row12:col1 = '43.0 (25.9–64.4)'
- unparsed cell T2:row13:col1 = '241 (169–322)'
- unparsed cell T2:row14:col1 = '44.4 (31.5–63.3)'
- unparsed cell T2:row16:col1 = '+158 (+105 to +239)'
- unparsed cell T2:row18:col1 = '−76.6 (−79.8 to −73.1)'
- unparsed cell T2:row19:col1 = '−26.0 (−34.1 to −18.1)'
- unparsed cell T2:row20:col1 = '−72.3 (−83.3 to −57.1)'
- unparsed cell T2:row22:col1 = '18.8 (16.3–21.7)'
- unparsed cell T2:row23:col1 = '10.1 (5.24–15.9)'
- unparsed cell T2:row24:col1 = '10.8 (8.41–13.6)'
- unparsed cell T2:row25:col1 = '11.6 (9.75–14.1)'
- unparsed cell T2:row26:col1 = '28.2 (14.6–42.1)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.111 (1/9 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['rifabutin', 'des-rifabutin', 'metabolism']] | [['rifabutin', '25-o-desacetyl rifabutin', 'metabolism']] | mismatch |
| `gpt-oss:120b` | `parameters[bioavailability, f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[bioavailability, f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance conversion]` | 16.2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance conversion]` | not captured | 16.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[zwfa effect (each point below -3) on bioavailabilityd]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | rifabutin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | rifabutin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Bentley_2021:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chapagain_2022:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Wang_2020:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 16.2 | not captured | not captured | ['Semere_2024:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.2 L/h | not captured | not captured | ['Semere_2024:other_prose'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.135 L | not captured | not captured | ['Chapagain_2022:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_rifabutin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Semere_2024` / `Semere_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 11:47 UTC</sub>
