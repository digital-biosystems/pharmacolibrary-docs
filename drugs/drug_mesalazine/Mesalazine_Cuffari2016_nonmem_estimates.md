<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;mesalazine&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/&quot;},{&quot;label&quot;:&quot;Cuffari_2016 \u00b7 nonmem_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_nonmem_estimates&quot;,&quot;label&quot;:&quot;Cuffari_2016_nonmem_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_multimatrix_mesalamine&quot;,&quot;label&quot;:&quot;Cuffari_2016_multimatrix_mesalamine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_multimatrix_mesalamine.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mesalazine — `Mesalazine_Cuffari2016_nonmem_estimates`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span>

<div class="pk-model-meta" hidden drug="mesalazine" model-id="Mesalazine_Cuffari2016_nonmem_estimates" status="not_simulated" stale="false" population="children and adolescents with ulcerative colitis" measured-compound="5-ASA" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Cuffari C, Pierce D, Korczowski B, Fyderek K, Van Heusen H, Hossack S et al. Randomized clinical trial: pharmacokinetics and safety of multimatrix mesalamine for treatment of pediatric ulcerative colitis. Drug design, development and therapy 10:593–607 (2016).
  ·  DOI: [10.2147/DDDT.S95316](https://doi.org/10.2147/DDDT.S95316)

## Population and dosing

**Population:** children and adolescents with ulcerative colitis · condition ulcerative colitis · age group mixed · n = fifty-two.

**Dosing:** 2100, 4200, 7000 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed mesalazine, measured 5-ASA.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, CLm/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 8 extracted, plus 6 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates/Mesalazine_Cuffari2016_nonmem_estimates.svg" alt="Mesalazine_Cuffari2016_nonmem_estimates diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Not simulated": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CLR/F (L/h) | CLR | 1.01 | L/h |
| CLM/F (L/h) | CLm/F | 75.9 | L/h |
| Vc/F (L) | V1/F | 70.1 | L |
| CLRM/F (L/h) | CL/F | 2.27 | L/h |
| VcM/F (L) | V1/F | 5.31 | L |
| Ka1 (h−1) | kabs | 0.0207 | h−1 |
| ALAG1 (h) | tlag | 4.31 | h |
| F1 | Fab | 0.413 |  |
| clr_f_wt | clr_f_wt | 0.75 |  |
| clrm_f_wt | clrm_f_wt | 0.75 |  |
| clnrm_f_wt | clnrm_f_wt | 0.75 |  |
| vcm_f_wt | vcm_f_wt | 1 |  |
| theta_clm_f_wt_power | theta_clm_f_wt_power | 0.75 |  |
| theta_v1_f_wt_power | theta_v1_f_wt_power | 1 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The mesalazine parent–metabolite record was not published because the simulated structure was a one-compartment enteral model instead of the parent–metabolite topology, and the builder's apparent-clearance assumption (F=1, Fm=1, no molar correction) was rejected.**

The record defines 5-ASA with a metabolite Ac-5-ASA formed in the central compartment, but the simulation used a single-compartment enteral model rather than the required parent–metabolite structure. The model builder substituted F=1, Fm=1 and no molar correction, an apparent-parameterization assumption judged not acceptable. In addition, covariate effects such as the weight effects on clearance (0.75) and volume (1) were defined but only the reference individual was simulated, so those scenarios were not exercised. A second reader also disagreed on several extracted values, including the metabolite clearance CLm/F of 75.9 L/h and the renal clearance covariate forms. Extracted — mesalazine: CLR 1.01 L/h, CLm/F 75.9 L/h, V1/F 70.1 L, kabs 0.0207 h−1, tlag 4.31 h, Fab 0.413; Ac-5-ASA: CL/F 2.27 L/h, V1/F 5.31 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has mesalazine, the second reading mesalamine; it also differs on 24 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CLR/F (L/h) | `Q26` · CLR | 1.01 | L/h | 2.806e-07 | m3/s | l/h | llm (0.6) | ts2-dddt-10-593:row2:col1, ts2-dddt-10-593:row2:col2, ts2-dddt-10-593:row2:col3, Cuffari_2016_table_5:row1:col1, Cuffari_2016_table_5:row1:col2, Cuffari_2016_table_5:row1:col3 |
| CLM/F (L/h) | `Q351` · CLm/F | 75.9 | L/h | 2.108e-05 | m3/s | l/h | exact (1) | ts2-dddt-10-593:row3:col1, ts2-dddt-10-593:row3:col2, ts2-dddt-10-593:row3:col3, Cuffari_2016_table_5:row2:col1, Cuffari_2016_table_5:row2:col2, Cuffari_2016_table_5:row2:col3 |
| Vc/F (L) | `Q290` · V1/F | 70.1 | L | 0.0701 | m3 | l | exact (1) | ts2-dddt-10-593:row4:col1, ts2-dddt-10-593:row4:col2, ts2-dddt-10-593:row4:col3, Cuffari_2016_table_5:row3:col1, Cuffari_2016_table_5:row3:col2, Cuffari_2016_table_5:row3:col3 |
| CLRM/F (L/h) | `Q27` · CL/F | 2.27 | L/h | 6.306e-07 | m3/s | l/h | exact (1) | ts2-dddt-10-593:row5:col1, ts2-dddt-10-593:row5:col2, ts2-dddt-10-593:row5:col3, Cuffari_2016_table_5:row4:col1, Cuffari_2016_table_5:row4:col2, Cuffari_2016_table_5:row4:col3 |
| VcM/F (L) | `Q290` · V1/F | 5.31 | L | 0.00531 | m3 | l | exact (1) | ts2-dddt-10-593:row7:col1, ts2-dddt-10-593:row7:col2, ts2-dddt-10-593:row7:col3, Cuffari_2016_table_5:row6:col1, Cuffari_2016_table_5:row6:col2, Cuffari_2016_table_5:row6:col3 |
| Ka1 (h−1) | `Q49` · kabs | 0.0207 | h−1 | 5.75e-06 | 1/s | 1/h | exact (1) | ts2-dddt-10-593:row8:col1, ts2-dddt-10-593:row8:col2, ts2-dddt-10-593:row8:col3, Cuffari_2016_table_5:row7:col1, Cuffari_2016_table_5:row7:col2, Cuffari_2016_table_5:row7:col3 |
| ALAG1 (h) | `Q83` · tlag | 4.31 | h | 1.552e+04 | s | h | exact (1) | ts2-dddt-10-593:row10:col1, ts2-dddt-10-593:row10:col2, ts2-dddt-10-593:row10:col3, Cuffari_2016_table_5:row9:col1, Cuffari_2016_table_5:row9:col2, Cuffari_2016_table_5:row9:col3 |
| F1 | `Q40` · Fab | 0.413 |  |  |  |  | exact (1) | ts2-dddt-10-593:row12:col1, ts2-dddt-10-593:row12:col2, ts2-dddt-10-593:row12:col3, Cuffari_2016_table_5:row11:col1, Cuffari_2016_table_5:row11:col2, Cuffari_2016_table_5:row11:col3 |
| clr_f_wt | `Q900` · clr_f_wt | 0.75 |  |  |  |  |  | ts2-dddt-10-593:row13:col1, Cuffari_2016_table_5:row12:col1 |
| clrm_f_wt | `Q900` · clrm_f_wt | 0.75 |  |  |  |  |  | ts2-dddt-10-593:row16:col1, Cuffari_2016_table_5:row15:col1 |
| clnrm_f_wt | `Q900` · clnrm_f_wt | 0.75 |  |  |  |  |  | ts2-dddt-10-593:row17:col1, Cuffari_2016_table_5:row16:col1 |
| vcm_f_wt | `Q900` · vcm_f_wt | 1 |  |  |  |  |  | ts2-dddt-10-593:row18:col1, Cuffari_2016_table_5:row17:col1 |
| theta_clm_f_wt_power | `Q900` · theta_clm_f_wt_power | 0.75 |  |  |  |  |  | ts2-dddt-10-593:row14:col1, Cuffari_2016_table_5:row13:col1 |
| theta_v1_f_wt_power | `Q900` · theta_v1_f_wt_power | 1 |  |  |  |  |  | ts2-dddt-10-593:row15:col1, Cuffari_2016_table_5:row14:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω2CLR' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2CLM' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2Vc' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2CLRM' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2CLNRM' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2VcM' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2Ka1' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2Ka3' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2ALAG1' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2ALAG3' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2F1' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'σ2prop, plasma 5-ASA' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ2prop, urine 5-ASA' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ2prop, plasma Ac-5-ASA' routed out of structural estimates ('Residual variability')
- table section residual_error: 'σ2prop, urine Ac-5-ASA' routed out of structural estimates ('Residual variability')
- dropped duplicate Q27 ('CLNRM/F (L/h)', value '66.7') — already have one for this compound
- dropped duplicate Q49 ('Ka3 (h−1)', value '0.165') — already have one for this compound
- dropped duplicate Q83 ('ALAG3 (h)', value '14.0') — already have one for this compound
- covariate level 'CLR/F~WT' → Q900:clr_f_wt = 0.75 (power on Q26)
- covariate level 'CLRM/F~WT' → Q900:clrm_f_wt = 0.75 (power on Q26)
- covariate level 'CLNRM/F~WT' → Q900:clnrm_f_wt = 0.75 (power on Q26)
- covariate level 'VcM/F~WT' → Q900:vcm_f_wt = 1 (power on Q26)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=5-ASA
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- population split: 'nonmem estimates' subgroup of Cuffari_2016 (paper reports 2 populations: multimatrix mesalamine, nonmem estimates)
- row roles: 5 per-group rows of 5-ASA summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of Ac-5-ASA summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 40/40 row label(s) assigned, 60 linked by role; re-tagged parent→5-ASA ×132, parent→Ac-5-ASA ×52
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell ts2-dddt-10-593:row20:col4 = '42.5c'
- unparsed cell ts2-dddt-10-593:row21:col4 = '33.9c'
- unparsed cell ts2-dddt-10-593:row22:col4 = '64.2c'
- unparsed cell ts2-dddt-10-593:row23:col4 = '36.5c'
- unparsed cell ts2-dddt-10-593:row24:col4 = '28.7c'
- unparsed cell ts2-dddt-10-593:row25:col4 = '15.0c'
- unparsed cell ts2-dddt-10-593:row26:col4 = '165c'
- unparsed cell ts2-dddt-10-593:row27:col4 = '137c'
- unparsed cell ts2-dddt-10-593:row28:col4 = '50.6c'
- unparsed cell ts2-dddt-10-593:row29:col4 = '15.0c'
- unparsed cell ts2-dddt-10-593:row30:col4 = '81.4c'
- unparsed cell ts2-dddt-10-593:row32:col4 = '36.9d'
- unparsed cell ts2-dddt-10-593:row33:col4 = '6.00d'
- unparsed cell ts2-dddt-10-593:row34:col4 = '28.8d'
- unparsed cell ts2-dddt-10-593:row35:col4 = '6.00d'
- unparsed cell Cuffari_2016_table_2:row7:col1 = '29.4a (14.5)'
- companion parameter table 2 transcribed (34 record(s))
- unparsed cell Cuffari_2016_table_5:row19:col4 = '42.5c'
- unparsed cell Cuffari_2016_table_5:row20:col4 = '33.9c'
- unparsed cell Cuffari_2016_table_5:row21:col4 = '64.2c'
- unparsed cell Cuffari_2016_table_5:row22:col4 = '36.5c'
- unparsed cell Cuffari_2016_table_5:row23:col4 = '28.7c'
- unparsed cell Cuffari_2016_table_5:row24:col4 = '15.0c'
- unparsed cell Cuffari_2016_table_5:row25:col4 = '165c'
- unparsed cell Cuffari_2016_table_5:row26:col4 = '137c'
- unparsed cell Cuffari_2016_table_5:row27:col4 = '50.6c'
- unparsed cell Cuffari_2016_table_5:row28:col4 = '15.0c'
- unparsed cell Cuffari_2016_table_5:row29:col4 = '81.4c'
- unparsed cell Cuffari_2016_table_5:row31:col4 = '36.9d'
- unparsed cell Cuffari_2016_table_5:row32:col4 = '6.00d'
- unparsed cell Cuffari_2016_table_5:row33:col4 = '28.8d'
- unparsed cell Cuffari_2016_table_5:row34:col4 = '6.00d'
- companion parameter table 5 transcribed (76 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.167 (5/30 fields) | 25 |

<details><summary>25 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag1]` |  | 4.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag1]` | 4.31 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f]` | 75.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f]` |  | 75.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clnrm_f_wt]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clr/f]` |  | 1.01 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clr/f]` | 1.01 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clr_f_wt]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clrm/f].covariate_forms` | [] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[clrm_f_wt]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` |  | 0.413 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | 0.413 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1]` |  | 0.0207 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1]` | 0.0207 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_wt_power]` |  | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_clm_f_wt_power]` | 0.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q351_wt_power]` |  | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q79_wt_power]` |  | 0.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_wt_power]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_f_wt_power]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 70.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 70.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcm/f].covariate_forms` | ['power'] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[vcm_f_wt]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | mesalazine | mesalamine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['ts2-dddt-10-593:row2:col1', 'ts2-dddt-10-593:row2:col2', 'ts2-dddt-10-593:row2:col3', 'Cuffari_2016_table_5:row1:col1', 'Cuffari_2016_table_5:row1:col2', 'Cuffari_2016_table_5:row1:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['ts2-dddt-10-593:row5:col1', 'ts2-dddt-10-593:row5:col2', 'ts2-dddt-10-593:row5:col3', 'Cuffari_2016_table_5:row4:col1', 'Cuffari_2016_table_5:row4:col2', 'Cuffari_2016_table_5:row4:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['ts2-dddt-10-593:row4:col1', 'ts2-dddt-10-593:row4:col2', 'ts2-dddt-10-593:row4:col3', 'Cuffari_2016_table_5:row3:col1', 'Cuffari_2016_table_5:row3:col2', 'Cuffari_2016_table_5:row3:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['ts2-dddt-10-593:row7:col1', 'ts2-dddt-10-593:row7:col2', 'ts2-dddt-10-593:row7:col3', 'Cuffari_2016_table_5:row6:col1', 'Cuffari_2016_table_5:row6:col2', 'Cuffari_2016_table_5:row6:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['ts2-dddt-10-593:row3:col1', 'ts2-dddt-10-593:row3:col2', 'ts2-dddt-10-593:row3:col3', 'Cuffari_2016_table_5:row2:col1', 'Cuffari_2016_table_5:row2:col2', 'Cuffari_2016_table_5:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['ts2-dddt-10-593:row8:col1', 'ts2-dddt-10-593:row8:col2', 'ts2-dddt-10-593:row8:col3', 'Cuffari_2016_table_5:row7:col1', 'Cuffari_2016_table_5:row7:col2', 'Cuffari_2016_table_5:row7:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['ts2-dddt-10-593:row10:col1', 'ts2-dddt-10-593:row10:col2', 'ts2-dddt-10-593:row10:col3', 'Cuffari_2016_table_5:row9:col1', 'Cuffari_2016_table_5:row9:col2', 'Cuffari_2016_table_5:row9:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.27 L/h | ['ts2-dddt-10-593:row5:col1', 'ts2-dddt-10-593:row5:col2', 'ts2-dddt-10-593:row5:col3', 'Cuffari_2016_table_5:row4:col1', 'Cuffari_2016_table_5:row4:col2', 'Cuffari_2016_table_5:row4:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 70.1 L | ['ts2-dddt-10-593:row4:col1', 'ts2-dddt-10-593:row4:col2', 'ts2-dddt-10-593:row4:col3', 'Cuffari_2016_table_5:row3:col1', 'Cuffari_2016_table_5:row3:col2', 'Cuffari_2016_table_5:row3:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 5.31 L | ['ts2-dddt-10-593:row7:col1', 'ts2-dddt-10-593:row7:col2', 'ts2-dddt-10-593:row7:col3', 'Cuffari_2016_table_5:row6:col1', 'Cuffari_2016_table_5:row6:col2', 'Cuffari_2016_table_5:row6:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 5 scholar param(s) emitted or defaulted | 5 covered | all structural parameters accounted for |
| T3_shared_parameters |  | pass | 5 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | apparent_assumption: not acceptable | LLM adjudication → deterministic rule |
| T1_tmax | reference | skipped | 6 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 9 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 2 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 9 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 7.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 2 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates/Mesalazine_Cuffari2016_nonmem_estimates_modelica.zip" download>Mesalazine_Cuffari2016_nonmem_estimates_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates/Mesalazine_Cuffari2016_nonmem_estimates_fmi.zip" download>Mesalazine_Cuffari2016_nonmem_estimates_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates/Mesalazine_Cuffari2016_nonmem_estimates_matlab.zip" download>Mesalazine_Cuffari2016_nonmem_estimates_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates/Mesalazine_Cuffari2016_nonmem_estimates_matlab_simbio.zip" download>Mesalazine_Cuffari2016_nonmem_estimates_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates/Mesalazine_Cuffari2016_nonmem_estimates_sbml.zip" download>Mesalazine_Cuffari2016_nonmem_estimates_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates/Mesalazine_Cuffari2016_nonmem_estimates_cellml.zip" download>Mesalazine_Cuffari2016_nonmem_estimates_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.1531 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 1.552e+04 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 0.0021 | kg |
| input | model | `Cl` | 2.108e-05 | m3/s |
| input | model | `VdPerKg` | 0.001001 | m3/kg |
| input | model | `ka` | 5.75e-06 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Cuffari C, Pierce D, Korczowski B, Fyderek K, Van Heusen H, Hossack S et al. Randomized clinical trial: pharmacokinetics and safety of multimatrix mesalamine for treatment of pediatric ulcerative colitis. Drug design, development and therapy 10:593–607 (2016). [doi:10.2147/DDDT.S95316](https://doi.org/10.2147/DDDT.S95316)

**This record:** Pharmacolibrary v26.09, model `Mesalazine_Cuffari2016_nonmem_estimates`. <https://pharmacolibrary.github.io/#/drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates>

```bibtex
@misc{pharmacolibrary_MesalazineCuffari2016nonmemestimates,
  title  = {{Pharmacolibrary model Mesalazine_Cuffari2016_nonmem_estimates}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates},
  note   = {Parameters from doi:10.2147/DDDT.S95316},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 2100 mg, single dose, first-order absorption (ka 0.0207 /h, lag 259 min, F 1).

<dbs-fmusim paramsurl="drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates/Mesalazine_Cuffari2016_nonmem_estimates_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates/Mesalazine_Cuffari2016_nonmem_estimates_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Mesalazine_Cuffari2016_nonmem_estimates_params.json` · controls `Mesalazine_Cuffari2016_nonmem_estimates_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmesalazine%5D%20Mesalazine_Cuffari2016_nonmem_estimates&body=Drug%3A%20mesalazine%0ARecord%3A%20Mesalazine_Cuffari2016_nonmem_estimates%0APaper%3A%20Cuffari_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-04 19:36 UTC</sub>
