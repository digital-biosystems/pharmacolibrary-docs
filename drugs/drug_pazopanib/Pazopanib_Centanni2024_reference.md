<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pazopanib&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/&quot;},{&quot;label&quot;:&quot;Centanni_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pazopanib_Attia2023_reference&quot;,&quot;label&quot;:&quot;Attia_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/Pazopanib_Attia2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pazopanib_Balakirouchenane2020_reference&quot;,&quot;label&quot;:&quot;Balakirouchenane_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/Pazopanib_Balakirouchenane2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pazopanib_Bins2019_base&quot;,&quot;label&quot;:&quot;Bins_2019_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/Pazopanib_Bins2019_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pazopanib_Bins2019_final&quot;,&quot;label&quot;:&quot;Bins_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/Pazopanib_Bins2019_final.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pazopanib_Ozbey2021_reference&quot;,&quot;label&quot;:&quot;Ozbey_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pazopanib/Pazopanib_Ozbey2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pazopanib — `Pazopanib_Centanni2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was refused with sunitinib molecular weight 437.53 g/mol and SU12662, an unlinked metabolite, in a pazopanib model.

<div class="pk-model-meta" hidden drug="pazopanib" model-id="Pazopanib_Centanni2024_reference" status="rejected" stale="false" population="pediatric patients aged 2 years and older" measured-compound="pazopanib" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Centanni M, Zaher O, Elhad D, Karlsson MO, Friberg LE. Physiologically-based pharmacokinetic models versus allometric scaling for prediction of tyrosine-kinase inhibitor exposure from adults to children. Cancer chemotherapy and pharmacology 94(2):297–310 (2024).
  ·  DOI: [10.1007/s00280-024-04678-0](https://doi.org/10.1007/s00280-024-04678-0)

## Population and dosing

**Population:** pediatric patients aged 2 years and older · condition cancer · age group mixed.

**Dosing:** 275, 350, 450, 600 mg/m2, oral, multiple, every 24 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| MW | MW | 437.53 | g/mol |
| Fraction unbound | fu | 0.001 |  |
| systemic clearance in the current analysis | CL | 0.0186 | L/h |
| volume of distribution in the current analysis | V | 5.05 | L |
| k a | kabs | 1.8 | 1/h |
| Tlag | tlag | 0.5 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was refused with sunitinib molecular weight 437.53 g/mol and SU12662, an unlinked metabolite, in a pazopanib model.**

The record is for pazopanib, but lists SU12662 formed from sunitinib and N-desmethyl-imatinib formed from imatinib, with no path from pazopanib dosing to either metabolite. Sunitinib’s molecular-weight value is 437.53 g/mol; that reported unit could not be converted to SI, so the parameter reached the model builder without an SI value. Extracted — sunitinib: MW 438 g/mol, fu 0.001; pazopanib: CL 0.0186 L/h, V 5.05 L, kabs 1.8 1/h, tlag 0.5 h.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| MW | `Q374` · MW | 437.53 | g/mol |  |  | g/mol | exact (1) | Tab2:row1:col6 |
| Fraction unbound | `Q46` · fu | 0.001 |  |  |  |  | exact (1) | Tab2:row21:col6 |
| systemic clearance in the current analysis | `Q22` · CL | 0.0186 | L/h | 5.167e-09 | m3/s | L/h | review_gapfill (0.7) | Attia_2023:review |
| volume of distribution in the current analysis | `Q61` · V | 5.05 | L | 0.00505 | m3 | L | review_gapfill (0.7) | Attia_2023:review |
| k a | `Q49` · kabs | 1.8 | 1/h | 0.0005 | 1/s | 1/h | review_gapfill (0.7) | Balakirouchenane_2020:review |
| Tlag | `Q83` · tlag | 0.5 | h | 1800 | s | h | review_gapfill (0.7) | Balakirouchenane_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code |
|---|---|
| theta_q22_cyp3a4 | Q900 |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'LogP' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col6'])
- dropped unlinked row (NIL): 'Solubility' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col6'])
- dropped unlinked row (NIL): 'pKa1' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col6'])
- dropped unlinked row (NIL): 'pKa2' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col6'])
- dropped unlinked row (NIL): 'pKa3' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col6'])
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'MW' → g/mol (from the popPK convention: 'No unit is stated in the provided text, caption, or footnotes. Molecular weight is conventionally expressed in g/mol, co')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=pazopanib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- row roles (LLM): model_class=pbpk; 22/22 row label(s) assigned, 3 linked by role; re-tagged SU12662→sunitinib ×8, imatinib→sunitinib ×10, parent→sunitinib ×19, pazopanib→sunitinib ×8, parent→imatinib ×6, parent→N-desmethyl-imatinib (NDMI) ×6, parent→SU12662 ×6
- molar mass: none of 1 PubChem candidate(s) is 'SU12662' (LLM) — left in mass units
- molar mass: none found for 'SU12662' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Attia_2023's review values (primary lacked it)
- gap-filled Q61 (V) from Attia_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Balakirouchenane_2020's review values (primary lacked it)
- gap-filled Q83 (tlag) from Balakirouchenane_2020's review values (primary lacked it)

**Extraction notes:**
- unparsed cell Tab2:row1:col7 = '[34, 58, 59]'
- unparsed cell Tab2:row2:col7 = '[34, 58, 60]'
- unparsed cell Tab2:row3:col7 = '[61–63]'
- unparsed cell Tab2:row4:col7 = '[58, 59, 62]'
- unparsed cell Tab2:row5:col7 = '[59, 62]'
- unparsed cell Tab2:row6:col7 = '[59]'
- unparsed cell Tab2:row9:col7 = '[34, 64]'
- unparsed cell Tab2:row10:col7 = '[34, 64]'
- unparsed cell Tab2:row11:col7 = '[64]'
- unparsed cell Tab2:row12:col7 = '[64]'
- unparsed cell Tab2:row13:col7 = '[34]'
- unparsed cell Tab2:row14:col7 = '[34]'
- unparsed cell Tab2:row15:col4 = '3.34 × 10 −8'
- unparsed cell Tab2:row15:col7 = '[34]'
- unparsed cell Tab2:row16:col4 = '2.42 × 10 −8'
- unparsed cell Tab2:row16:col7 = '[34]'
- unparsed cell Tab2:row17:col7 = '[45]'
- unparsed cell Tab2:row20:col4 = 'α1-acid-glycoprotein'
- unparsed cell Tab2:row20:col7 = '[33–35]'
- unparsed cell Tab2:row21:col7 = '[34, 35, 58]'
- companion parameter table 3 transcribed (30 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Attia_2023:review'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Tab2:row1:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Balakirouchenane_2020:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Attia_2023:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Balakirouchenane_2020:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0186 | ['Attia_2023:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0186 L/h | ['Attia_2023:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.05 L | ['Attia_2023:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpazopanib%5D%20Pazopanib_Centanni2024_reference&body=Drug%3A%20pazopanib%0ARecord%3A%20Pazopanib_Centanni2024_reference%0APaper%3A%20Centanni_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pazopanib/Pazopanib_Centanni2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:38 UTC</sub>
