<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Rosuvastatin&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/&quot;},{&quot;label&quot;:&quot;Costales_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rosuvastatin_Silveira2021_reference&quot;,&quot;label&quot;:&quot;Silveira_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/Rosuvastatin_Silveira2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_at_stea&quot;,&quot;label&quot;:&quot;Piscitelli_2024_rosuvastatin_encorafenib_at_steady_state&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_at_stea.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_single&quot;,&quot;label&quot;:&quot;Piscitelli_2024_rosuvastatin_encorafenib_single_dose&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_rosuvastatin/Rosuvastatin_Piscitelli2024_rosuvastatin_encorafenib_single.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Rosuvastatin — `Rosuvastatin_Costales2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Rosuvastatin" model-id="Rosuvastatin_Costales2021_reference" status="rejected" stale="false" population="virtual populations of healthy subjects" measured-compound="Rosuvastatin" parameterization="mechanistic" topology="1C"></div>

## Citation
Costales C, Lin J, Kimoto E, Yamazaki S, Gosset JR, Rodrigues AD et al. Quantitative prediction of breast cancer resistant protein mediated drug-drug interactions using physiologically-based pharmacokinetic modeling. CPT: pharmacometrics & systems pharmacology 10(9):1018–1031 (2021).
  ·  DOI: [10.1002/psp4.12672](https://doi.org/10.1002/psp4.12672)

## Population and dosing

**Population:** virtual populations of healthy subjects · condition healthy · age group adult.

**Dosing:** 10, 80 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 69 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Mol Weight (g/mol) | MW | 481.5 | g/mol |
| Unbound fraction in gut | fu | 1.00 | ~25% |
| Colon absorption/basolateral scalar | FG | 0.08 | ~25% |
| Intestinal OATP2B1 CLint,T (µl/min) | CLint | 0.002 | µl/min |
| BCRP Km (µM) | Km | 10.8 | µM |
| Steady‐state volume of distribution (L/kg) | Vss | 0.121 | L/kg |
| CLPD basal (hepatic and renal) (µl/min/106) | CL_PD | 1.1 | mL/min/kg |
| Fa.Fg | Fab | 0.30 |  |
| ka(1/h) | kabs | 0.5 | 1/h |
| Cmax(µM) | Cmax | 0.01 | µM |
| MW | MW | 412 | g/mol |
| fu | fu | 0.04 | ~25% |
| ka(1/h) | kabs | 2.78 | 1/h |
| Cmax(µM) | Cmax | 10.71 | µM |
| MW | MW | 1202 | g/mol |
| fu | fu | 0.068 | ~25% |
| Fa.Fg | Fab | 0.82 |  |
| ka(1/h) | kabs | 0.58 | 1/h |
| Cmax(µM) | Cmax | 1.19 | µM |
| MW | MW | 399 | g/mol |
| fu | fu | 0.08 | ~25% |
| ka(1/h) | kabs | 0.07 | 1/h |
| Cmax(µM) | Cmax | 4.01 | µM |
| MW | MW | 882 | g/mol |
| fu | fu | 0.001 | ~25% |
| Fa.Fg | Fab | 0.57 |  |
| ka(1/h) | kabs | 0.27 | 1/h |
| Cmax(µM) | Cmax | 0.16 | µM |
| MW | MW | 767 | g/mol |
| fu | fu | 0.012 | ~25% |
| Fa.Fg | FG | 0.89 | ~25% |
| ka(1/h) | kabs | 0.77 | 1/h |
| Cmax(µM) | Cmax | 1.0 | µM |
| MW | MW | 664.8 | g/mol |
| fu | fu | 0.197 | ~25% |
| ka(1/h) | kabs | 2.88 | 1/h |
| Cmax(µM) | Cmax | 1.30 | µM |
| MW | MW | 580 | g/mol |
| MW | MW | 250 | g/mol |
| fu | fu | 0.008 | ~25% |
| ka(1/h) | kabs | 2 | 1/h |
| Cmax(µM) | Cmax | 117.2 | µM |
| MW | MW | 705.6 | g/mol |
| fu | fu | 0.016 | ~25% |
| Fa.Fg | Fab | 0.59 |  |
| ka(1/h) | kabs | 0.6 | 1/h |
| Cmax(µM) | Cmax | 1.9 | µM |
| MW | MW | 823 | g/mol |
| fu | fu | 0.116 | ~25% |
| Fa.Fg | FG | 0.92 | ~25% |
| ka(1/h) | kabs | 0.94 | 1/h |
| Cmax(µM) | Cmax | 15.7 | µM |
| MW | MW | 883 | g/mol |
| fu | fu | 0.003 | ~25% |
| Fa.Fg | Fab | 0.731 |  |
| ka(1/h) | kabs | 0.78 | 1/h |
| Cmax(µM) | Cmax | 0.66 | µM |
| Vss (L/kg) | Vss | 0.32 | L/kg |
| HLM CLint (μL/min/mg protein) | CLint | 64.8 | μL/min/mg protein |
| B/P | KD | 1.36 |  |
| fu,gut | fu_tissue | 1 |  |
| CL (iv) (L/h) | CL | 14 | L/h |
| Peff,man (10-4 cm/s) | Kp_derm | 0.16 | cm/s |
| Vss (L/kg) | Vss | 0.865 | L/kg |
| Kp scalar | Kp | 2.7 |  |
| CLiv (L/h) | CL | 1.8 | L/h |
| CYP3A CLint (µL/min/pmol) | CLint | 0.089 | µL/min/pmol |
| CLrenal (L/h) | CLR | 0.49 | L/h |
| theta_clint_cyp3a4 | theta_clint_cyp3a4 | 0.272 |  |
| RIF V (L) Population | V | 24.7 | L |

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
| Mol Weight (g/mol) | `Q374` · MW | 481.5 | g/mol | 0.4815 |  | g/(m·ol) | llm (0.6) | psp412672-tbl-0002:row1:col1, Costales_2021_table_S3:row0:col1 |
| Unbound fraction in gut | `Q46` · fu | 1.00 | ~25% |  |  | ~25% | llm_confirmed (0.6) | psp412672-tbl-0002:row7:col1 |
| Colon absorption/basolateral scalar | `Q41` · FG | 0.08 | ~25% |  |  | ~25% | llm (0.6) | psp412672-tbl-0002:row10:col1 |
| Intestinal OATP2B1 CLint,T (µl/min) | `Q3` · CLint | 0.002 | µl/min |  |  | µl/min | llm_confirmed (0.6) | psp412672-tbl-0002:row11:col1 |
| BCRP Km (µM) | `Q1` · Km | 10.8 | µM |  |  | µM | llm_confirmed (0.6) | psp412672-tbl-0002:row13:col1 |
| Steady‐state volume of distribution (L/kg) | `Q65` · Vss | 0.121 | L/kg | 0.00847 | m3 | l/kg | llm_corrected (0.6) | psp412672-tbl-0002:row15:col1 |
| CLPD basal (hepatic and renal) (µl/min/106) | `Q358` · CL_PD | 1.1 | mL/min/kg | 1.283e-06 | m3/s | L/h | llm_confirmed (0.6) | psp412672-tbl-0002:row19:col1 |
| Fa.Fg | `Q40` · Fab | 0.30 |  | 0.3 |  |  | llm (0.6) | Costales_2021_table_S1:row0:col5, Costales_2021_table_S1:row1:col5, Costales_2021_table_S1:row3:col5, Costales_2021_table_S1:row5:col5, Costales_2021_table_S1:row11:col5, Costales_2021_table_S1:row15:col5, Costales_2021_table_S1:row18:col5, Costales_2021_table_S1:row19:col5, Costales_2021_table_S1:row22:col5, Costales_2021_table_S1:row23:col5, Costales_2021_table_S1:row24:col5, Costales_2021_table_S1:row25:col5, Costales_2021_table_S1:row28:col5, Costales_2021_table_S1:row30:col5 |
| ka(1/h) | `Q49` · kabs | 0.5 | 1/h | 0.0001389 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row0:col6, Costales_2021_table_S1:row1:col6, Costales_2021_table_S1:row3:col6, Costales_2021_table_S1:row5:col6, Costales_2021_table_S1:row11:col6, Costales_2021_table_S1:row15:col6, Costales_2021_table_S1:row18:col6, Costales_2021_table_S1:row19:col6, Costales_2021_table_S1:row22:col6, Costales_2021_table_S1:row23:col6, Costales_2021_table_S1:row24:col6, Costales_2021_table_S1:row25:col6, Costales_2021_table_S1:row28:col6, Costales_2021_table_S1:row30:col6 |
| Cmax(µM) | `Q32` · Cmax | 0.01 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row0:col7, Costales_2021_table_S1:row1:col7, Costales_2021_table_S1:row3:col7, Costales_2021_table_S1:row5:col7, Costales_2021_table_S1:row11:col7, Costales_2021_table_S1:row12:col7, Costales_2021_table_S1:row15:col7, Costales_2021_table_S1:row18:col7, Costales_2021_table_S1:row19:col7, Costales_2021_table_S1:row22:col7, Costales_2021_table_S1:row23:col7, Costales_2021_table_S1:row24:col7, Costales_2021_table_S1:row25:col7, Costales_2021_table_S1:row28:col7, Costales_2021_table_S1:row30:col7 |
| MW | `Q374` · MW | 412 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row2:col2 |
| fu | `Q46` · fu | 0.04 | ~25% | 0.04 |  | ~25% | exact (1) | Costales_2021_table_S1:row2:col3 |
| ka(1/h) | `Q49` · kabs | 2.78 | 1/h | 0.0007722 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row2:col6 |
| Cmax(µM) | `Q32` · Cmax | 10.71 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row2:col7 |
| MW | `Q374` · MW | 1202 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row4:col2 |
| fu | `Q46` · fu | 0.068 | ~25% | 0.068 |  | ~25% | exact (1) | Costales_2021_table_S1:row4:col3 |
| Fa.Fg | `Q40` · Fab | 0.82 |  | 0.82 |  |  | llm (0.6) | Costales_2021_table_S1:row4:col5 |
| ka(1/h) | `Q49` · kabs | 0.58 | 1/h | 0.0001611 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row4:col6 |
| Cmax(µM) | `Q32` · Cmax | 1.19 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row4:col7 |
| MW | `Q374` · MW | 399 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row6:col2, Costales_2021_table_S1:row7:col2 |
| fu | `Q46` · fu | 0.08 | ~25% | 0.08 |  | ~25% | exact (1) | Costales_2021_table_S1:row6:col3, Costales_2021_table_S1:row7:col3 |
| ka(1/h) | `Q49` · kabs | 0.07 | 1/h | 1.944e-05 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row6:col6 |
| Cmax(µM) | `Q32` · Cmax | 4.01 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row6:col7, Costales_2021_table_S1:row7:col7 |
| MW | `Q374` · MW | 882 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row8:col2 |
| fu | `Q46` · fu | 0.001 | ~25% | 0.001 |  | ~25% | exact (1) | Costales_2021_table_S1:row8:col3 |
| Fa.Fg | `Q40` · Fab | 0.57 |  | 0.57 |  |  | llm (0.6) | Costales_2021_table_S1:row8:col5 |
| ka(1/h) | `Q49` · kabs | 0.27 | 1/h | 7.5e-05 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row8:col6 |
| Cmax(µM) | `Q32` · Cmax | 0.16 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row8:col7 |
| MW | `Q374` · MW | 767 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row9:col2 |
| fu | `Q46` · fu | 0.012 | ~25% | 0.012 |  | ~25% | exact (1) | Costales_2021_table_S1:row9:col3 |
| Fa.Fg | `Q41` · FG | 0.89 | ~25% | 0.89 |  | ~25% | llm (0.6) | Costales_2021_table_S1:row9:col5 |
| ka(1/h) | `Q49` · kabs | 0.77 | 1/h | 0.0002139 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row9:col6 |
| Cmax(µM) | `Q32` · Cmax | 1.0 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row9:col7 |
| MW | `Q374` · MW | 664.8 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row13:col2 |
| fu | `Q46` · fu | 0.197 | ~25% | 0.197 |  | ~25% | exact (1) | Costales_2021_table_S1:row13:col3 |
| ka(1/h) | `Q49` · kabs | 2.88 | 1/h | 0.0008 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row13:col6 |
| Cmax(µM) | `Q32` · Cmax | 1.30 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row13:col7 |
| MW | `Q374` · MW | 580 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row14:col2 |
| MW | `Q374` · MW | 250 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row16:col2 |
| fu | `Q46` · fu | 0.008 | ~25% | 0.008 |  | ~25% | exact (1) | Costales_2021_table_S1:row16:col3, Costales_2021_table_S1:row17:col3 |
| ka(1/h) | `Q49` · kabs | 2 | 1/h | 0.0005556 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row16:col6 |
| Cmax(µM) | `Q32` · Cmax | 117.2 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row16:col7, Costales_2021_table_S1:row17:col7 |
| MW | `Q374` · MW | 705.6 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row20:col2, Costales_2021_table_S1:row21:col2 |
| fu | `Q46` · fu | 0.016 | ~25% | 0.016 |  | ~25% | exact (1) | Costales_2021_table_S1:row20:col3, Costales_2021_table_S1:row21:col3 |
| Fa.Fg | `Q40` · Fab | 0.59 |  | 0.59 |  |  | llm (0.6) | Costales_2021_table_S1:row20:col5 |
| ka(1/h) | `Q49` · kabs | 0.6 | 1/h | 0.0001667 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row20:col6 |
| Cmax(µM) | `Q32` · Cmax | 1.9 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row20:col7, Costales_2021_table_S1:row21:col7 |
| MW | `Q374` · MW | 823 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row26:col2, Costales_2021_table_S1:row27:col2 |
| fu | `Q46` · fu | 0.116 | ~25% | 0.116 |  | ~25% | exact (1) | Costales_2021_table_S1:row26:col3, Costales_2021_table_S1:row27:col3 |
| Fa.Fg | `Q41` · FG | 0.92 | ~25% | 0.92 |  | ~25% | llm (0.6) | Costales_2021_table_S1:row26:col5, Costales_2021_table_S1:row27:col5 |
| ka(1/h) | `Q49` · kabs | 0.94 | 1/h | 0.0002611 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row26:col6, Costales_2021_table_S1:row27:col6 |
| Cmax(µM) | `Q32` · Cmax | 15.7 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row26:col7, Costales_2021_table_S1:row27:col7 |
| MW | `Q374` · MW | 883 | g/mol |  |  | g/(m·ol) | exact (1) | Costales_2021_table_S1:row29:col2 |
| fu | `Q46` · fu | 0.003 | ~25% | 0.003 |  | ~25% | exact (1) | Costales_2021_table_S1:row29:col3 |
| Fa.Fg | `Q40` · Fab | 0.731 |  | 0.731 |  |  | llm (0.6) | Costales_2021_table_S1:row29:col5 |
| ka(1/h) | `Q49` · kabs | 0.78 | 1/h | 0.0002167 | 1/s | 1/h | exact (1) | Costales_2021_table_S1:row29:col6 |
| Cmax(µM) | `Q32` · Cmax | 0.66 | µM |  |  | µM | exact (1) | Costales_2021_table_S1:row29:col7 |
| Vss (L/kg) | `Q65` · Vss | 0.32 | L/kg | 0.0224 | m3 | l/kg | exact (1) | Costales_2021_table_S2:row12:col1 |
| HLM CLint (μL/min/mg protein) | `Q3` · CLint | 64.8 | μL/min/mg protein |  |  | µl/(min·mg·protein) | llm_confirmed (0.6) | Costales_2021_table_S2:row15:col1 |
| B/P | `Q331` · KD | 1.36 |  |  |  |  | llm (0.6) | Costales_2021_table_S3:row3:col1 |
| fu,gut | `Q413` · fu_tissue | 1 |  |  |  |  | llm_corrected (0.6) | Costales_2021_table_S3:row8:col1 |
| CL (iv) (L/h) | `Q22` · CL | 14 | L/h | 3.889e-06 | m3/s | l/h | space_fold (0.95) | Costales_2021_table_S3:row14:col1 |
| Peff,man (10-4 cm/s) | `Q412` · Kp_derm | 0.16 | cm/s |  |  | cm/s | llm (0.6) | Costales_2021_table_S4:row8:col1 |
| Vss (L/kg) | `Q65` · Vss | 0.865 | L/kg | 0.06055 | m3 | l/kg | exact (1) | Costales_2021_table_S4:row13:col1, Costales_2021_table_S4:row13:col2 |
| Kp scalar | `Q410` · Kp | 2.7 |  |  |  |  | llm_confirmed (0.6) | Costales_2021_table_S4:row14:col1, Costales_2021_table_S4:row14:col2 |
| CLiv (L/h) | `Q22` · CL | 1.8 | L/h | 5e-07 | m3/s | l/h | route_fold (0.9) | Costales_2021_table_S4:row16:col2 |
| CYP3A CLint (µL/min/pmol) | `Q3` · CLint | 0.089 | µL/min/pmol |  |  | µl/(min·pM) | llm_confirmed (0.6) | Costales_2021_table_S4:row17:col1 |
| CLrenal (L/h) | `Q26` · CLR | 0.49 | L/h | 1.361e-07 | m3/s | l/h | llm (0.6) | Costales_2021_table_S4:row19:col1 |
| theta_clint_cyp3a4 | `Q900` · theta_clint_cyp3a4 | 0.272 |  |  |  |  |  | Costales_2021_table_S2:row14:col1 |
| RIF V (L) Population | `Q61` · V | 24.7 | L | 0.0247 | m3 | L | review_gapfill (0.7) | Barnett_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'source' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'log P' — extend the ontology if this is a real PK parameter (source ['psp412672-tbl-0002:row2:col1', 'Costales_2021_table_S3:row1:col1'])
- dropped unlinked row (NIL): 'pKa 1 (Monoprotic acid)' — extend the ontology if this is a real PK parameter (source ['psp412672-tbl-0002:row3:col1'])
- dropped unlinked row (NIL): 'Blood‐to‐plasma ratio' — extend the ontology if this is a real PK parameter (source ['psp412672-tbl-0002:row4:col1'])
- unit_dimension_unknown: '~25%' (fu)
- dropped unlinked row (NIL): 'Caco−2 permeability (10−6 cm/s)' — extend the ontology if this is a real PK parameter (source ['psp412672-tbl-0002:row8:col1'])
- dropped unlinked row (NIL): 'Permeability Scalar' — extend the ontology if this is a real PK parameter (source ['psp412672-tbl-0002:row9:col1'])
- unit_dimension_unknown: '~25%' (FG)
- unit_dimension_mismatch: 'Intestinal OATP2B1 CLint,T (µl/min)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped unlinked row (NIL): 'Intestinal BCRP Jmax (pmol/min)' — extend the ontology if this is a real PK parameter (source ['psp412672-tbl-0002:row12:col1'])
- unit_dimension_mismatch: 'BCRP Km (µM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_unknown: '~25%' (CLint)
- dropped duplicate Q3 ('OAT3 CLint,T (µl/min/106cells)', value None) — already have one for this compound
- dropped duplicate Q3 ('Renal MRP4 CLint,T (µl/min/106cells)', value None) — already have one for this compound
- unit_dimension_unknown: 'µl/min/106' (CL_PD)
- dropped duplicate Q3 ('Hepatic OATP2B1 CLint,T (µl/min/million cells)', value None) — already have one for this compound
- dropped duplicate Q3 ('OATP1B1 CLint,T (µl/min/million cells)', value None) — already have one for this compound
- dropped duplicate Q3 ('OATP1B3 CLint,T (µl/min/million cells)', value None) — already have one for this compound
- dropped duplicate Q3 ('Hepatic BCRP CLint,T (µl/min/million cells)', value None) — already have one for this compound
- dropped duplicate Q3 ('Hepatic MRP4 CLint,T (µl/min/million cells)', value None) — already have one for this compound
- dropped duplicate Q374 ('MW', value '558.6') — already have one for this compound
- dropped duplicate Q46 ('fu', value '0.051') — already have one for this compound
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row0:col4', 'Costales_2021_table_S1:row1:col4', 'Costales_2021_table_S1:row3:col4', 'Costales_2021_table_S1:row5:col4', 'Costales_2021_table_S1:row11:col4', 'Costales_2021_table_S1:row15:col4', 'Costales_2021_table_S1:row18:col4', 'Costales_2021_table_S1:row19:col4', 'Costales_2021_table_S1:row22:col4', 'Costales_2021_table_S1:row23:col4', 'Costales_2021_table_S1:row24:col4', 'Costales_2021_table_S1:row25:col4', 'Costales_2021_table_S1:row28:col4', 'Costales_2021_table_S1:row30:col4'])
- unit_dimension_mismatch: 'Cmax(µM)' → Q32 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row0:col8', 'Costales_2021_table_S1:row1:col8', 'Costales_2021_table_S1:row3:col8', 'Costales_2021_table_S1:row5:col8', 'Costales_2021_table_S1:row11:col8', 'Costales_2021_table_S1:row12:col8', 'Costales_2021_table_S1:row18:col8', 'Costales_2021_table_S1:row19:col8', 'Costales_2021_table_S1:row22:col8', 'Costales_2021_table_S1:row23:col8', 'Costales_2021_table_S1:row24:col8', 'Costales_2021_table_S1:row25:col8', 'Costales_2021_table_S1:row28:col8', 'Costales_2021_table_S1:row30:col8'])
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row2:col4'])
- dropped unlinked row (NIL): 'Fa.Fg' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row2:col5'])
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row2:col8'])
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row4:col4'])
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row4:col8'])
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row6:col4', 'Costales_2021_table_S1:row7:col4'])
- dropped unlinked row (NIL): 'Fa.Fg' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row6:col5'])
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row6:col8'])
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row8:col4'])
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row9:col4'])
- dropped PD-category row 'References a' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Costales_2021_table_S1:row9:col8'])
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row10:col8'])
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row13:col4'])
- dropped unlinked row (NIL): 'Fa.Fg' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row13:col5'])
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row13:col8'])
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row14:col8'])
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row16:col4', 'Costales_2021_table_S1:row17:col4'])
- dropped unlinked row (NIL): 'Fa.Fg' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row16:col5'])
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row16:col8'])
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row20:col4', 'Costales_2021_table_S1:row21:col4'])
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row20:col8'])
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row26:col4', 'Costales_2021_table_S1:row27:col4'])
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row26:col8', 'Costales_2021_table_S1:row27:col8'])
- dropped unlinked row (NIL): 'Rb' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row29:col4'])
- dropped unlinked row (NIL): 'References a' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S1:row29:col8'])
- dropped duplicate Q374 ('Molecular Weight (g/mol)', value '412.4') — already have one for this compound
- dropped unlinked row (NIL): 'log P' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S2:row1:col1'])
- dropped unlinked row (NIL): 'BP input type' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S2:row4:col1'])
- dropped duplicate Q46 ('fu,plasma', value '0.04') — already have one for this compound
- dropped unlinked row (NIL): 'Peff,man (10-4 cm/s)' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S2:row9:col1'])
- dropped unlinked row (NIL): 'Solubility (mg/mL)' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S2:row10:col1'])
- unit_dimension_unknown: 'μL/min/mg protein' (CLint)
- dropped duplicate Q46 ('fu,plasma', value '0.068') — already have one for this compound
- dropped duplicate Q40 ('fa', value '0.821') — already have one for this compound
- dropped duplicate Q49 ('ka (1/h)', value '0.585') — already have one for this compound
- dropped unlinked row (NIL): 'PCaco-2(10E-06 cm/s)' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S3:row9:col1'])
- dropped unlinked row (NIL): 'Scalar' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S3:row10:col1'])
- dropped duplicate Q65 ('Vss (L/kg)', value '1.79') — already have one for this compound
- unit_dimension_mismatch: 'OATP1B1 Ki,u (µM)' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped duplicate Q1 ('OATP1B1 Ki,u (µM)', value '0.01437') — already have one for this compound
- dropped duplicate Q374 ('Molecular Weight (g/mol)', value '398.852') — already have one for this compound
- dropped unlinked row (NIL): 'log P' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S4:row1:col1', 'Costales_2021_table_S4:row1:col2'])
- dropped unlinked row (NIL): 'pKa (acid/base)' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S4:row3:col1', 'Costales_2021_table_S4:row3:col2'])
- dropped unlinked row (NIL): 'B/P' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S4:row4:col1'])
- dropped duplicate Q46 ('fu,plasma', value '0.08') — already have one for this compound
- dropped unlinked row (NIL): 'Caco-2 permeability (10-6 cm/s)' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S4:row9:col1'])
- dropped unlinked row (NIL): 'Solubility at pH 6.8 (mg/mL)' — extend the ontology if this is a real PK parameter (source ['Costales_2021_table_S4:row11:col1'])
- unit_dimension_mismatch: 'CYP3A CLint (µL/min/pmol)' → Q3 (unit '[length] ** 3 / [time] / [substance]' vs ontology '[length] ** 3 / [mass] / [time]') — route to review
- dropped duplicate Q3 ('Additional HLM CLint (µL/min/mg)', value '13.1') — already have one for this compound
- dropped PD-category row 'Pgp Ki,u (µM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Costales_2021_table_S4:row21:col1', 'Costales_2021_table_S4:row21:col2'])
- unit inherited for MW (Q374): 'g/mol' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for fu (Q46): '~25%' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for FG (Q41): '~25%' from a same-Q-code sibling (this row's label had no unit)
- implicit units: 'CLPD basal (hepatic and renal) (µl/min/106)' → mL/min/kg (from the paper text: "The paper text states: 'Rosuvastatin renal clearance (~ 2.6 ml/min/kg)...'. Although the table caption header mentions '")
- implicit units: 'HLM CLint (μL/min/mg protein)' — the LLM proposed 'µL/min/mg protein', whose dimension does not fit Q3; left unset
- implicit units: 'B/P' — the LLM proposed 'dimensionless', whose dimension does not fit Q331; left unset
- implicit units: 'Peff,man (10-4 cm/s)' → cm/s (from the paper text: "The table caption provided in the prompt explicitly includes the scaling factor in the parameter name: 'Peff,man (10-4 c")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Rosuvastatin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- pharmacogenetic covariate 'theta_clint_cyp3a4' (cyp3a4) — PGx domain
- status held at "Needs review" — not promoted
- gap-filled Q61 (V) from Barnett_2018's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table psp412672-tbl-0002: unparsed_numeric_cell
- transposed table Costales_2021_table_S1: logical view retains original source coordinates
- companion parameter table S1 transcribed (190 record(s))
- table Costales_2021_table_S2: unparsed_numeric_cell
- companion parameter table S2 transcribed (9 record(s))
- table Costales_2021_table_S3: unparsed_numeric_cell
- companion parameter table S3 transcribed (12 record(s))
- table Costales_2021_table_S4: unparsed_numeric_cell
- companion parameter table S4 transcribed (21 record(s))
- no LLM table selection; kept 4 deterministically-scored parameter table(s)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 68 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | µM ([length]) | ['psp412672-tbl-0002:row13:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Costales_2021_table_S3:row14:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Costales_2021_table_S4:row16:col2'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Costales_2021_table_S4:row19:col1'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | µl/min ([length] ** 3 / [time]) | ['psp412672-tbl-0002:row11:col1'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [mass] / [time] | µL/min/pmol ([length] ** 3 / [time] / [substance]) | ['Costales_2021_table_S4:row17:col1'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row0:col7', 'Costales_2021_table_S1:row1:col7', 'Costales_2021_table_S1:row3:col7', 'Costales_2021_table_S1:row5:col7', 'Costales_2021_table_S1:row11:col7', 'Costales_2021_table_S1:row12:col7', 'Costales_2021_table_S1:row15:col7', 'Costales_2021_table_S1:row18:col7', 'Costales_2021_table_S1:row19:col7', 'Costales_2021_table_S1:row22:col7', 'Costales_2021_table_S1:row23:col7', 'Costales_2021_table_S1:row24:col7', 'Costales_2021_table_S1:row25:col7', 'Costales_2021_table_S1:row28:col7', 'Costales_2021_table_S1:row30:col7'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row2:col7'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row4:col7'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row6:col7', 'Costales_2021_table_S1:row7:col7'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row8:col7'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row9:col7'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row13:col7'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row16:col7', 'Costales_2021_table_S1:row17:col7'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row20:col7', 'Costales_2021_table_S1:row21:col7'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row26:col7', 'Costales_2021_table_S1:row27:col7'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | µM ([length]) | ['Costales_2021_table_S1:row29:col7'] |
| C5_dimension_Q358 | pass | [length] ** 3 / [time] |  | ['psp412672-tbl-0002:row19:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['psp412672-tbl-0002:row1:col1', 'Costales_2021_table_S3:row0:col1'] |
| C5_dimension_Q412 | pass | [length] / [time] |  | ['Costales_2021_table_S4:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row0:col6', 'Costales_2021_table_S1:row1:col6', 'Costales_2021_table_S1:row3:col6', 'Costales_2021_table_S1:row5:col6', 'Costales_2021_table_S1:row11:col6', 'Costales_2021_table_S1:row15:col6', 'Costales_2021_table_S1:row18:col6', 'Costales_2021_table_S1:row19:col6', 'Costales_2021_table_S1:row22:col6', 'Costales_2021_table_S1:row23:col6', 'Costales_2021_table_S1:row24:col6', 'Costales_2021_table_S1:row25:col6', 'Costales_2021_table_S1:row28:col6', 'Costales_2021_table_S1:row30:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row2:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row4:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row6:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row8:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row9:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row13:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row16:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row20:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row26:col6', 'Costales_2021_table_S1:row27:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Costales_2021_table_S1:row29:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Barnett_2018:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['psp412672-tbl-0002:row15:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Costales_2021_table_S2:row12:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Costales_2021_table_S4:row13:col1', 'Costales_2021_table_S4:row13:col2'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [mass] / [time] | μL/min/mg protein | ['Costales_2021_table_S2:row15:col1'] |
| C5_unit_missing_Q331 | fail | [mass] / [length] ** 3 |  | ['Costales_2021_table_S3:row3:col1'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row2:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row4:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row6:col2', 'Costales_2021_table_S1:row7:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row8:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row9:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row13:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row14:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row16:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row20:col2', 'Costales_2021_table_S1:row21:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row26:col2', 'Costales_2021_table_S1:row27:col2'] |
| C5_unit_missing_Q374 | fail | [mass] / [substance] | g/mol | ['Costales_2021_table_S1:row29:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14 | ['Costales_2021_table_S3:row14:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14 L/h | ['Costales_2021_table_S3:row14:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.8 L/h | ['Costales_2021_table_S4:row16:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 24.7 L | ['Barnett_2018:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 8.47 L | ['psp412672-tbl-0002:row15:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 22.4 L | ['Costales_2021_table_S2:row12:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 60.5 L | ['Costales_2021_table_S4:row13:col1', 'Costales_2021_table_S4:row13:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brosuvastatin%5D%20Rosuvastatin_Costales2021_reference&body=Drug%3A%20rosuvastatin%0ARecord%3A%20Rosuvastatin_Costales2021_reference%0APaper%3A%20Costales_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_rosuvastatin/Rosuvastatin_Costales2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 17:40 UTC</sub>
