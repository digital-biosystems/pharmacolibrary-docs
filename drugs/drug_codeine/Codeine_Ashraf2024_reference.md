<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;codeine&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/&quot;},{&quot;label&quot;:&quot;Ashraf_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Codeine_Guay1987_reference&quot;,&quot;label&quot;:&quot;Guay_1987_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Guay1987_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Guay1988_reference&quot;,&quot;label&quot;:&quot;Guay_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Guay1988_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_KuKanich2016_reference&quot;,&quot;label&quot;:&quot;KuKanich_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_KuKanich2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Thigpen2019_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Codeine_Thigpen2019v2_reference&quot;,&quot;label&quot;:&quot;Thigpen_2019_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_codeine/Codeine_Thigpen2019v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# codeine — `Codeine_Ashraf2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="codeine" model-id="Codeine_Ashraf2024_reference" status="rejected" stale="false" population="ambulatory surgical patients" measured-compound="codeine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Ashraf MW, Poikola S, Neuvonen M, Kiiski JI, Kontinen VK, Olkkola KT et al. Population Pharmacokinetic Quantification of CYP2D6 Activity in Codeine Metabolism in Ambulatory Surgical Patients for Model-Informed Precision Dosing. Clinical pharmacokinetics 63(11):1547–1560 (2024).
  ·  DOI: [10.1007/s40262-024-01433-9](https://doi.org/10.1007/s40262-024-01433-9)

## Population and dosing

**Population:** ambulatory surgical patients · condition surgical · age group adult · n = 997.

**Dosing:** 60 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka,cod | kabs | 8.74 | h-1 |
| CLcod | CL | 110 | L/h |
| Vc,cod | V1 | 427.5 | L |
| CLmor | CL | 357.5 | L/h |
| Vc,mor | V | 22.8 | L |
| fmor | fm | 0.16 |  |
| GENeff | kout_peripheral | 1.00 | 1/h |
| CLC6G | CL | 7.96 | L/h |
| Vc,C6G | V | 5.36 | L |
| CLM3G | CL | 9.45 | L/h |
| Vc,M3G | V | 8.47 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.824). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — codeine: kabs 8.74 h-1, CL 110 L/h, V1 428 L, kout_peripheral 1 1/h; morphine: CL 358 L/h, V 22.8 L, fm 0.16; codeine-6-glucuronide: CL 7.96 L/h, V 5.36 L; morphine-3-glucuronide: CL 9.45 L/h, V 8.47 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of fcod: this record has none, the second reading 0.84; it also differs on 2 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka,cod | `Q49` · kabs | 8.74 | h-1 | 0.002428 | 1/s | 1/h | boundary_llm_dim_refused (0.8) | Tab2:row2:col2 |
| CLcod | `Q22` · CL | 110 | L/h | 3.056e-05 | m3/s | l/h | llm (0.6) | Tab2:row3:col2 |
| Vc,cod | `Q63` · V1 | 427.5 | L | 0.4275 | m3 | l | llm_confirmed (0.6) | Tab2:row4:col2 |
| CLmor | `Q22` · CL | 357.5 | L/h | 9.931e-05 | m3/s | l/h | exact (1) | Tab2:row6:col2 |
| Vc,mor | `Q61` · V | 22.8 | L | 0.0228 | m3 | l | exact (1) | Tab2:row7:col2 |
| fmor | `Q45` · fm | 0.16 |  | 0.16 |  |  | exact (1) | Tab2:row8:col2 |
| GENeff | `Q346` · kout_peripheral | 1.00 | 1/h | 0.0002778 | 1/s | 1/h | llm (0.6) | Tab2:row9:col2 |
| CLC6G | `Q22` · CL | 7.96 | L/h | 2.211e-06 | m3/s | l/h | exact (1) | Tab2:row10:col2 |
| Vc,C6G | `Q61` · V | 5.36 | L | 0.00536 | m3 | l | exact (1) | Tab2:row11:col2 |
| CLM3G | `Q22` · CL | 9.45 | L/h | 2.625e-06 | m3/s | l/h | exact (1) | Tab2:row12:col2 |
| Vc,M3G | `Q61` · V | 8.47 | L | 0.00847 | m3 | l | exact (1) | Tab2:row13:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Fcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col2'])
- dropped unlinked row (NIL): 'εcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col2'])
- dropped unlinked row (NIL): 'εmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col2'])
- dropped unlinked row (NIL): 'εC6G' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col2'])
- dropped unlinked row (NIL): 'εM3G' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2'])
- implicit units: 'GENeff' → 1/h (from the popPK convention: "The parameter 'GENeff' is assigned to 'kout_peripheral', described as a 'First-order rate constant for irreversible elim")
- metabolite volume: 'Vc,mor' Q63→Q61 for morphine — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'Vc,C6G' Q63→Q61 for codeine-6-glucuronide — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'Vc,M3G' Q63→Q61 for morphine-3-glucuronide — it is 1-compartment, so its central volume is its only volume
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CLcod); Q63 (Vc,cod); Q22 (CLmor); Q61 (Vc,mor); Q22 (CLC6G); Q61 (Vc,C6G); Q22 (CLM3G); Q61 (Vc,M3G)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=codeine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 3 metabolites — the templates hold two
- amount-only peripheral compartment: a peripheral output rate (kout_peripheral) is present with no reported volume — model its AMOUNT; concentration is not identifiable without an assumed volume
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 10 linked by role; re-tagged codeine→parent ×8, codeine→morphine ×6, codeine→codeine-6-glucuronide ×3, codeine→morphine-3-glucuronide ×3
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.824 (14/17 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[fcod]` |  | 0.84 | only_one_extracted |
| `gpt-oss-120b` | `parameters[geneff]` | 1.00 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[εmor]` |  | 0.149 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row6:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row10:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row12:col2'] |
| C5_dimension_Q346 | pass | 1 / [time] |  | ['Tab2:row9:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row11:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row13:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row4:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 110 | ['Tab2:row3:col2'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 110 L/h | ['Tab2:row3:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 358 L/h | ['Tab2:row6:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.96 L/h | ['Tab2:row10:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.45 L/h | ['Tab2:row12:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 22.8 L | ['Tab2:row7:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.36 L | ['Tab2:row11:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.47 L | ['Tab2:row13:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 428 L | ['Tab2:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcodeine%5D%20Codeine_Ashraf2024_reference&body=Drug%3A%20codeine%0ARecord%3A%20Codeine_Ashraf2024_reference%0APaper%3A%20Ashraf_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_codeine/Codeine_Ashraf2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 08:52 UTC</sub>
