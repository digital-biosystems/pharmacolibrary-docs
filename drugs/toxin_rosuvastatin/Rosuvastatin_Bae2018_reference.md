<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Rosuvastatin&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/&quot;},{&quot;label&quot;:&quot;Bae_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rosuvastatin_Silveira2021_reference&quot;,&quot;label&quot;:&quot;Silveira_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/Rosuvastatin_Silveira2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_at_stea&quot;,&quot;label&quot;:&quot;Piscitelli_2024_rosuvastatin_encorafenib_at_steady_state&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_at_stea.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_single&quot;,&quot;label&quot;:&quot;Piscitelli_2024_rosuvastatin_encorafenib_single_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_single.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Rosuvastatin — `Rosuvastatin_Bae2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Rosuvastatin" model-id="Rosuvastatin_Bae2018_reference" status="rejected" stale="false" population="Healthy Korean subjects" measured-compound="Rosuvastatin" parameterization="apparent" topology="1C"></div>

## Citation
Bae SH, Park WS, Han S, Park GJ, Lee J, Hong T et al. Physiologically-based pharmacokinetic predictions of intestinal BCRP-mediated drug interactions of rosuvastatin in Koreans. The Korean journal of physiology & pharmacology : official journal of the Korean Physiological Society and the Korean Society of Pharmacology 22(3):321–329 (2018).
  ·  DOI: [10.4196/kjpp.2018.22.3.321](https://doi.org/10.4196/kjpp.2018.22.3.321)

## Population and dosing

**Population:** Healthy Korean subjects · condition healthy · age group adult.

**Dosing:** 80 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight (g/mol) | MW | 514.62 | g/mol |
| fu,plasma | fu | 0.005 |  |
| fu,liver | fu_tissue | 0.013 |  |
| Fa | FR | 0.72 |  |
| ka (h⁻¹) | kabs | 0.68 | h⁻¹ |
| CLpo (L/h) | CL/F | 25.2 | L/h |
| Ki,BCRP (μM) | kic | 0.005 | μM |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight (g/mol) | `Q374` · MW | 514.62 | g/mol | 0.5146 |  | g/(m·ol) | exact (1) | Bae_2018_table_p3_1:row0:col1 |
| fu,plasma | `Q46` · fu | 0.005 |  | 0.005 |  |  | llm_confirmed (0.6) | Bae_2018_table_p3_1:row5:col1, Bae_2018_table_p3_1:row5:col3 |
| fu,liver | `Q413` · fu_tissue | 0.013 |  |  |  |  | llm_corrected (0.6) | Bae_2018_table_p3_1:row6:col1 |
| Fa | `Q43` · FR | 0.72 |  | 0.72 |  |  | llm (0.6) | Bae_2018_table_p3_1:row8:col1, Bae_2018_table_p3_1:row8:col3 |
| ka (h⁻¹) | `Q49` · kabs | 0.68 | h⁻¹ | 0.0001889 | 1/s | 1/h | exact (1) | Bae_2018_table_p3_1:row9:col1, Bae_2018_table_p3_1:row9:col3 |
| CLpo (L/h) | `Q27` · CL/F | 25.2 | L/h | 7e-06 | m3/s | l/h | exact (1) | Bae_2018_table_p3_1:row10:col1 |
| Ki,BCRP (μM) | `Q350` · kic | 0.005 | μM |  |  | µM | llm (0.6) | Bae_2018_table_p3_1:row13:col1, Bae_2018_table_p3_1:row13:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'logD7.4' — extend the ontology if this is a real PK parameter (source ['Bae_2018_table_p3_1:row1:col1'])
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['Bae_2018_table_p3_1:row2:col1'])
- dropped unlinked row (NIL): 'B/P ratio' — extend the ontology if this is a real PK parameter (source ['Bae_2018_table_p3_1:row4:col1', 'Bae_2018_table_p3_1:row4:col3'])
- dropped duplicate Q413 ('fu,gut', value '0.015') — already have one for this compound
- dropped unlinked row (NIL): 'Ki,OATP1B1,hepatic (μM)' — extend the ontology if this is a real PK parameter (source ['Bae_2018_table_p3_1:row11:col1', 'Bae_2018_table_p3_1:row11:col3'])
- dropped unlinked row (NIL): 'Ki,OATP1B3,hepatic (μM)' — extend the ontology if this is a real PK parameter (source ['Bae_2018_table_p3_1:row12:col1', 'Bae_2018_table_p3_1:row12:col3'])
- unit_dimension_mismatch: 'Ki,BCRP (μM)' → Q350 (unit '[length]' vs ontology '1 / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Rosuvastatin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 3 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table T3: no_numeric_grid
- final table T3: no supported point estimates; targeted recovery unresolved
- table Bae_2018_table_p3_1: ambiguous_numeric_format
- table Bae_2018_table_p3_1: unparsed_numeric_cell
- companion parameter table p3_1 transcribed (21 record(s))
- toxin: the located table(s) gave no kinetic value — 21 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Bae_2018_table_p3_1:row10:col1'] |
| C5_dimension_Q350 | fail | 1 / [time] | μM ([length]) | ['Bae_2018_table_p3_1:row13:col1', 'Bae_2018_table_p3_1:row13:col3'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Bae_2018_table_p3_1:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Bae_2018_table_p3_1:row9:col1', 'Bae_2018_table_p3_1:row9:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 25.2 L/h | ['Bae_2018_table_p3_1:row10:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brosuvastatin%5D%20Rosuvastatin_Bae2018_reference&body=Drug%3A%20rosuvastatin%0ARecord%3A%20Rosuvastatin_Bae2018_reference%0APaper%3A%20Bae_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_rosuvastatin/Rosuvastatin_Bae2018_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 17:39 UTC</sub>
