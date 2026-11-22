<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Aniline&quot;,&quot;href&quot;:&quot;drugs/toxin_aniline/&quot;},{&quot;label&quot;:&quot;Miura_2021 \u00b7 2_6_dimethyl_aniline&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Aniline — `Aniline_Miura2021_2_6_dimethyl_aniline`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The aniline rat record was rejected for lacking fitted kinetic parameters like half-life or volume, leaving only observed exposure metrics and one unconvertible unit.

<div class="pk-model-meta" hidden drug="Aniline" model-id="Aniline_Miura2021_2_6_dimethyl_aniline" status="rejected" stale="false" population="rats" measured-compound="Aniline" parameterization="mechanistic" topology="1C"></div>

## Citation
Miura T, Kamiya Y, Murayama N, Shimizu M, Yamazaki H. Differences in Pharmacokinetics and Haematotoxicities of Aniline and Its Dimethyl Derivatives Orally Administered in Rats. Biological & pharmaceutical bulletin 44(11):1775–1780 (2021).
  ·  DOI: [10.1248/bpb.b21-00589](https://doi.org/10.1248/bpb.b21-00589)

## Population and dosing

**Population:** rats · condition healthy.

**Dosing:** 1750 mg, oral, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Fraction absorbed × intestinal avail- | Fab | 0.292 |  |
| Volume of systemic circulation V Hepatic clearance CL h (L/h) | CLH | 0.123 | L/h |
| Renal clearance | CLR | 0.013 | L/h |
| C max in plasma | Cmax | 3910 | ng/mL |
| AUC 0-4 in plasma | AUC | 9080 | h*ng/mL |
| Molecular weight | MW | 121 | g/mol |
| Plasma unbound frac- | fu | 0.317 |  |
| Blood-plasma concen- | Vnorm | 0.920 |  |
| Liver-plasma concentra- | Kp | 1.20 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The aniline rat record was rejected for lacking fitted kinetic parameters like half-life or volume, leaving only observed exposure metrics and one unconvertible unit.**

The review identified the model as an exposure or outcome study rather than a kinetic model because it lacked fitted kinetic quantities such as half-lives or rate constants. Although hepatic and renal clearances were listed, they were treated as observed data rather than structural model parameters. Additionally, one reported unit could not be converted to standard SI units, preventing proper integration into the system. Extracted — aniline: Fab 0.292, CLH 0.123 L/h, CLR 0.013 L/h, Cmax 3.91e+03 ng/mL, AUC 9.08e+03 h*ng/mL, MW 121 g/mol, fu 0.317, Vnorm 0.92, … (+1).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Fraction absorbed × intestinal avail- | `Q40` · Fab | 0.292 |  | 0.292 |  |  | llm_confirmed (0.6) | tab_1:row3:col6 |
| Volume of systemic circulation V Hepatic clearance CL h (L/h) | `Q25` · CLH | 0.123 | L/h | 3.417e-08 | m3/s | l/h | llm_confirmed (0.6) | tab_1:row7:col6 |
| Renal clearance | `Q26` · CLR | 0.013 | L/h | 3.611e-09 | m3/s | L/h | exact (1) | tab_1:row8:col6 |
| C max in plasma | `Q32` · Cmax | 3910 | ng/mL |  |  | ng/mL | llm (0.6) | tab_1:row13:col6 |
| AUC 0-4 in plasma | `Q88` · AUC | 9080 | h*ng/mL |  |  | h*ng/mL | llm_confirmed (0.6) | tab_1:row14:col6 |
| Molecular weight | `Q374` · MW | 121 | g/mol |  |  | g/mol | exact (1) | Miura_2021_table_1:row0:col6, Miura_2021_table_p3_1:row0:col6 |
| Plasma unbound frac- | `Q46` · fu | 0.317 |  | 0.317 |  |  | llm_confirmed (0.6) | Miura_2021_table_1:row5:col6 |
| Blood-plasma concen- | `Q352` · Vnorm | 0.920 |  |  |  |  | llm (0.6) | Miura_2021_table_1:row7:col6 |
| Liver-plasma concentra- | `Q410` · Kp | 1.20 |  |  |  |  | llm (0.6) | Miura_2021_table_1:row9:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Apparent permeability'; source reconciliation required
- table representations disagree for 'Fraction absorbed × intestinal avail-'; source reconciliation required
- table representations disagree for 'Volume of systemic circulation V Hepatic clearance CL h (L/h)'; source reconciliation required
- table representations disagree for 'Renal clearance'; source reconciliation required
- table representations disagree for 'C max in plasma'; source reconciliation required
- table representations disagree for 'AUC 0-4 in plasma'; source reconciliation required
- dropped unlinked row (NIL): 'Apparent permeability' — extend the ontology if this is a real PK parameter (source ['tab_1:row1:col6'])
- dropped unlinked row (NIL): 'Octanol-water partition' — extend the ontology if this is a real PK parameter (source ['Miura_2021_table_1:row1:col6'])
- dropped unlinked row (NIL): 'Acid dissociation con-' — extend the ontology if this is a real PK parameter (source ['Miura_2021_table_1:row3:col6'])
- dropped unlinked row (NIL): 'Octanol–water partition coefficient' — extend the ontology if this is a real PK parameter (source ['Miura_2021_table_p3_1:row1:col6'])
- dropped unlinked row (NIL): 'Acid dissociation constant (base)' — extend the ontology if this is a real PK parameter (source ['Miura_2021_table_p3_1:row2:col6'])
- dropped duplicate Q46 ('Plasma unbound fraction', value '0.317') — already have one for this compound
- dropped duplicate Q410 ('Blood–plasma concentration ratio', value '0.920') — already have one for this compound
- dropped duplicate Q410 ('Liver–plasma concentration ratio', value '1.20') — already have one for this compound
- dropped value-less row: 'AUC 0-4'
- dropped value-less row: 'Hepatic intrinsic clearance CL h,int'
- implicit units: 'Renal clearance' → L/h (from the popPK convention: "The table explicitly lists 'Hepatic intrinsic clearance CL h,int' with units of 'L/h'. Renal clearance is another cleara")
- implicit units: 'C max in plasma' → ng/mL (from the popPK convention: 'C_max is a plasma concentration. In LC-MS/MS studies of drugs in rats, concentrations in the range of thousands (e.g., 3')
- implicit units: 'AUC 0-4 in plasma' → h*ng/mL (from the popPK convention: "AUC is the area under the concentration-time curve. With concentration in ng/mL (see above) and time in h (from '0-4 h' ")
- implicit units: 'Molecular weight' → g/mol (from the popPK convention: 'Molecular weight of Aniline (C6H7N) is 93.13 g/mol. The value 121 likely corresponds to one of the dimethyl derivatives ')
- implicit units: 'Blood-plasma concen-' — the LLM proposed 'ratio', whose dimension does not fit Q352; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Aniline
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: '2,6-dimethyl-aniline' subgroup of Miura_2021 (paper reports 7 populations: 2,3-dimethyl-aniline, 2,4-dimethyl-aniline, 2,5-dimethyl-aniline, 2,6-dimethyl-aniline, 3,5-dimethyl-aniline, aniline, n,2-dimethyl-aniline)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table tab_1: unparsed_numeric_cell
- table tab_1: representations disagree; selected evidence retained, not merged
- table Miura_2021_table_1: units_need_context
- companion parameter table 1 transcribed (42 record(s))
- table Miura_2021_table_p3_1: units_need_context
- companion parameter table p3_1 transcribed (42 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q25 | pass | [length] ** 3 / [time] |  | ['tab_1:row7:col6'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['tab_1:row8:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tab_1:row13:col6'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Miura_2021_table_1:row0:col6', 'Miura_2021_table_p3_1:row0:col6'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_1:row14:col6'] |
| C5_unit_missing_Q352 | fail | [length] ** 3 |  | ['Miura_2021_table_1:row7:col6'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baniline%5D%20Aniline_Miura2021_2_6_dimethyl_aniline&body=Drug%3A%20aniline%0ARecord%3A%20Aniline_Miura2021_2_6_dimethyl_aniline%0APaper%3A%20Miura_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_aniline/Aniline_Miura2021_2_6_dimethyl_aniline%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 19:29 UTC</sub>
