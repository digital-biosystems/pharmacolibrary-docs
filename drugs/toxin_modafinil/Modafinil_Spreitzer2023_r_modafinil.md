<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Modafinil&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/&quot;},{&quot;label&quot;:&quot;Spreitzer_2023 \u00b7 r_modafinil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Modafinil_Darwish2009_reference&quot;,&quot;label&quot;:&quot;Darwish_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Darwish2009_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Tao2010_reference&quot;,&quot;label&quot;:&quot;Tao_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Tao2010_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Thorpy2020_reference&quot;,&quot;label&quot;:&quot;Thorpy_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Thorpy2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Willavize2017_reference&quot;,&quot;label&quot;:&quot;Willavize_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Willavize2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Wong1999v2_reference&quot;,&quot;label&quot;:&quot;Wong_1999_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Wong1999v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Liu2026_control_group&quot;,&quot;label&quot;:&quot;Liu_2026_control_group&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Liu2026_control_group.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Liu2026_gz_group&quot;,&quot;label&quot;:&quot;Liu_2026_gz_group&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Liu2026_gz_group.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Modafinil — `Modafinil_Spreitzer2023_r_modafinil`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span>

> The record is rejected because the steady-state concentration for R-modafinil is recorded in nM, a dimension incompatible with the required mass per volume units.

<div class="pk-model-meta" hidden drug="Modafinil" model-id="Modafinil_Spreitzer2023_r_modafinil" status="rejected" stale="false" population="rats" measured-compound="R-modafinil" parameterization="mechanistic" topology="retention"></div>

## Citation
Spreitzer I, Keife J, Strasser T, Kalaba P, Lubec J, Neuhaus W et al. Pharmacokinetics of Novel Dopamine Transporter Inhibitor CE-123 and Modafinil with a Focus on Central Nervous System Distribution. International journal of molecular sciences 24(23) (2023).
  ·  DOI: [10.3390/ijms242316956](https://doi.org/10.3390/ijms242316956)

## Population and dosing

**Population:** rats · condition healthy · n = 3.

**Dosing:** 1400 mg, intravenous, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 0.90).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Total brain-to-plasma concentration ratio, Kp,brain | Kp | 0.29 | unitless |
| Unbound brain-to-plasma concentration ratio, Kp,uu,brain | fu_tissue | 0.097 | unitless |
| Total steady-state plasma concentration, Cplasma,ss | Css | 5574 | nM |
| Fraction unbound in plasma, fu,plasma | fu | 0.797 | unitless |
| t1/2 | t1/2z | 364 | min |
| apparent total clearance | CL | 19.5 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected because the steady-state concentration for R-modafinil is recorded in nM, a dimension incompatible with the required mass per volume units.**

The parameter Css for R-modafinil has a value of 5574 with the unit nM, which fails the dimension check against the expected mass per volume dimension. This mismatch prevents the conversion of the value into a standard international unit, causing the system to reject the parameter definition. Extracted — R-modafinil: Kp 0.29 unitless, fu_tissue 0.097 unitless, Css 5.57e+03 nM, fu 0.797 unitless, t1/2z 364 min, CL 19.5 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Total brain-to-plasma concentration ratio, Kp,brain | `Q410` · Kp | 0.29 | unitless |  |  | unitless | llm_confirmed (0.6) | ijms-24-16956-t002:row1:col3 |
| Unbound brain-to-plasma concentration ratio, Kp,uu,brain | `Q413` · fu_tissue | 0.097 | unitless |  |  | unitless | llm_corrected (0.6) | ijms-24-16956-t002:row2:col3 |
| Total steady-state plasma concentration, Cplasma,ss | `Q34` · Css | 5574 | nM |  |  | nM | llm (0.6) | ijms-24-16956-t002:row3:col3 |
| Fraction unbound in plasma, fu,plasma | `Q46` · fu | 0.797 | unitless |  |  | unitless | llm_confirmed (0.6) | ijms-24-16956-t002:row4:col3 |
| t1/2 | `Q57` · t1/2z | 364 | min | 2.184e+04 | s | h | half_life_rule (0.95) | Spreitzer_2023:other_prose |
| apparent total clearance | `Q22` · CL | 19.5 | L/h | 5.417e-06 | m3/s | L/h | review_gapfill (0.7) | Thorpy_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'unitless' (Kp)
- unit_dimension_unknown: 'unitless' (fu_tissue)
- unit_dimension_mismatch: 'Total steady-state plasma concentration, Cplasma,ss' → Q34 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: 'unitless' (fu)
- dropped unlinked row (NIL): 'Unbound volume of distribution in brain, Vu,brain' — extend the ontology if this is a real PK parameter (source ['ijms-24-16956-t002:row5:col3'])
- dropped duplicate Q413 ('Fraction unbound in brain homogenate, fu,brain', value '0.23') — already have one for this compound
- dropped duplicate Q410 ('Unbound intracellular-to-extracellular (interstitial) concentration ratio, Kp,uu,cell', value '0.85') — already have one for this compound
- salvaged Q57 ('t1/2'=364) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=R-modafinil
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'r-modafinil' subgroup of Spreitzer_2023 (paper reports 2 populations: r-modafinil, s-ce-123)
- gap-filled Q22 (CL) from Thorpy_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Thorpy_2020:review'] |
| C5_dimension_Q34 | fail | [mass] / [length] ** 3 | nM ([length]) | ['ijms-24-16956-t002:row3:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 19.5 | ['Thorpy_2020:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 19.5 L/h | ['Thorpy_2020:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmodafinil%5D%20Modafinil_Spreitzer2023_r_modafinil&body=Drug%3A%20modafinil%0ARecord%3A%20Modafinil_Spreitzer2023_r_modafinil%0APaper%3A%20Spreitzer_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_modafinil/Modafinil_Spreitzer2023_r_modafinil%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 13:04 UTC</sub>
