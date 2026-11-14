<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Azelastine&quot;,&quot;href&quot;:&quot;drugs/toxin_azelastine/&quot;},{&quot;label&quot;:&quot;Dings_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azelastine_Park2010_test&quot;,&quot;label&quot;:&quot;Park_2010_test&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_azelastine/Azelastine_Park2010_test.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azelastine_Peter1995_reference&quot;,&quot;label&quot;:&quot;Peter_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_azelastine/Azelastine_Peter1995_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Azelastine_Qi2023_reference&quot;,&quot;label&quot;:&quot;Qi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_azelastine/Azelastine_Qi2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Azelastine — `Azelastine_Dings2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Azelastine" model-id="Azelastine_Dings2022_reference" status="rejected" stale="false" population="adults" measured-compound="Azelastine" parameterization="mechanistic" topology="retention"></div>

## Citation
Dings C, Meiser P, Holzer F, Flegel M, Selzer D, Nagy E et al. Pharmacometric Modeling of the Impact of Azelastine Nasal Spray on SARS-CoV-2 Viral Load and Related Symptoms in COVID-19 Patients. Pharmaceutics 14(10):2059 (2022).
  ·  DOI: [10.3390/pharmaceutics14102059](https://doi.org/10.3390/pharmaceutics14102059)

## Population and dosing

**Population:** adults · condition healthy · age group adult.

**Dosing:** 0.2, 1 mg, other, multiple.

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| kel | kel | 49.9 | day−1 |  |
| ALAG | tlag | 6.51 | days | 3.2 |
| γ | t1/2γ | 1.92 | day−1 | 6.7 |
| π | equation variable | 398 | day−1 |  |
| volume | V | 0.28 | mL |  |
| absorption rate | kabs | 100.0 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| kel | `Q47` · kel | 49.9 | day−1 | 0.0005775 | 1/s | 1/d |  | exact (1) | pharmaceutics-14-02059-t002:row2:col1 |
| ALAG | `Q83` · tlag | 6.51 | days | 5.625e+05 | s | d | 3.2 | exact (1) | pharmaceutics-14-02059-t002:row4:col1 |
| γ | `Q89` · t1/2γ | 1.92 | day−1 |  |  | 1/d | 6.7 | llm (0.6) | pharmaceutics-14-02059-t002:row6:col1 |
| π | `Q900` · equation variable | 398 | day−1 |  |  | 1/d |  | llm (0.6) | pharmaceutics-14-02059-t002:row9:col1 |
| volume | `Q61` · V | 0.28 | mL | 2.8e-07 | m3 | L |  | review_gapfill (0.7) | Dings_2022:review |
| absorption rate | `Q49` · kabs | 100.0 | h−1 | 0.02778 | 1/s | 1/h |  | review_gapfill (0.7) | Dings_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'AE' routed out of structural estimates ('IIV ALAG 58.0 (16.1%/9%) %CV estimated Interindividual variability on ALAG')
- unit_dimension_mismatch: 'γ' → Q89 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): 'δ' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-02059-t002:row7:col1'])
- unit_dimension_unknown: '-' (kel)
- dropped duplicate Q47 ('k', value '0.08') — already have one for this compound
- dropped unlinked row (NIL): 'δE' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-02059-t002:row12:col1'])
- dropped PD-category row 'm' → Q340 (alpha_progression, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-02059-t002:row13:col1'])
- unit_dimension_unknown: '-' (equation variable)
- dropped duplicate Q900 ('r', value '10') — already have one for this compound
- dropped unlinked row (NIL): 'ϕ' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-02059-t002:row15:col1'])
- dropped unlinked row (NIL): 'I0' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-02059-t002:row16:col1'])
- dropped unlinked row (NIL): 'M0' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-02059-t002:row17:col1'])
- dropped unlinked row (NIL): 'T0' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-02059-t002:row18:col1'])
- dropped PD-category row 'EmaxA' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-02059-t002:row19:col1'])
- dropped PD-category row 'EC50A' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-02059-t002:row20:col1'])
- routed 'Sex—ω' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Age—ω' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped PD-category row 'Kout' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-02059-t002:row26:col1'])
- dropped PD-category row 'EmaxI' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-02059-t002:row27:col1'])
- dropped PD-category row 'hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-14-02059-t002:row29:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Azelastine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Dings_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Dings_2022's review values (primary lacked it)

**Extraction notes:**
- table pharmaceutics-14-02059-t002: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['pharmaceutics-14-02059-t002:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Dings_2022:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Dings_2022:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['pharmaceutics-14-02059-t002:row4:col1'] |
| C5_dimension_Q89 | fail | [time] | day−1 (1 / [time]) | ['pharmaceutics-14-02059-t002:row6:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.00028 L | ['Dings_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazelastine%5D%20Azelastine_Dings2022_reference&body=Drug%3A%20azelastine%0ARecord%3A%20Azelastine_Dings2022_reference%0APaper%3A%20Dings_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_azelastine/Azelastine_Dings2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 06:23 UTC</sub>
