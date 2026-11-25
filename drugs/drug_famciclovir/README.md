<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;famciclovir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Famciclovir_Schenkel2013_reference&quot;,&quot;label&quot;:&quot;Schenkel_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# famciclovir

- **generic name:** famciclovir
- **ATC codes:** `J05AB09`, `S01AD07`
- **DrugBank:** [DB00426](https://go.drugbank.com/drugs/DB00426) · **PubChem:** [CID 3324](https://pubchem.ncbi.nlm.nih.gov/compound/3324)
- **molar mass:** 321.3318 g/mol (C14H19N5O4) — DrugBank
- **groups:** approved, investigational

## About

Famciclovir is a nucleoside analogue antiviral used to treat herpes zoster and genital herpes. It is given orally as tablets and has improved bioavailability compared to its active form. It is widely used and approved for medical use, with generic versions available in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q420186](https://www.wikidata.org/wiki/Q420186), [Wikipedia](https://en.wikipedia.org/wiki/Famciclovir?oldid=1383930701) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| famciclovir | parent | 321.332 | C14H19N5O4 | DrugBank | [3324](https://pubchem.ncbi.nlm.nih.gov/compound/3324) | Blumer_2010, Griffioen_2024, Ogungbenro_2009, Schenkel_2013 |
| penciclovir | metabolite | 253.262 | C10H15N5O3 | PubChem | [135398748](https://pubchem.ncbi.nlm.nih.gov/compound/135398748) | Blumer_2010, Griffioen_2024, Ogungbenro_2009, Schenkel_2013 |

## Start here

> **Schenkel_2013_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients undergoing cataract surgery. [Run it in the simulator](drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference.md?tab=Simulation) · [record](drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Blumer_2010_reference](drugs/drug_famciclovir/Famciclovir_Blumer2010_reference.md) | — | 1-compartment (no model) | 1 | Blumer J et al., Single-dose pharmacokinetics of famcicl…, Antimicrobial agents and ch… (2010) | [10.1128/AAC.01508-09](https://doi.org/10.1128/AAC.01508-09) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T3_param_coverage</sub> | [Schenkel_2013_reference](drugs/drug_famciclovir/Famciclovir_Schenkel2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 9 | Schenkel F et al., Intraocular penetration of penciclovir…, The Journal of antimicrobia… (2013) | [10.1093/jac/dkt064](https://doi.org/10.1093/jac/dkt064) |
| <span class="pk-rf" hidden data-species="other animal" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Griffioen_2024_reference](drugs/drug_famciclovir/Famciclovir_Griffioen2024_reference.md) | — | 1-compartment (no model) | 8 | Griffioen JA et al., Penciclovir pharmacokinetics after oral…, American journal of veterin… (2024) | [10.2460/ajvr.24.02.0039](https://doi.org/10.2460/ajvr.24.02.0039) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub> | [Ogungbenro_2009_reference](drugs/drug_famciclovir/Famciclovir_Ogungbenro2009_reference.md) | — | 1-compartment (no model) | 7 (+1 cov.) | Ogungbenro K et al., Population pharmacokinetics and optimal…, British journal of clinical… (2009) | [10.1111/j.1365-2125.2009.03479.x](https://doi.org/10.1111/j.1365-2125.2009.03479.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:00 | 0:04 | 2/2/0 | 0/0/0 | 0/0/0 | 3,584/151 | einfracz / qwen3.8-27b | 10 | 3/7 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 17 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bacon_1996 | irrelevant | 0 | 0 | The study is an in-vitro antiviral activity assay of penciclovir, containing no pharmacokinetic parameters or models. |
| PGx | Bacon_1996 | not_relevant | 0 | 0 | The paper describes in vitro antiviral activity (PD) of penciclovir versus acyclovir but does not report any pharmacogenomic effects based on gene variants. |
| PGx | Blumer_2010 | not_relevant | 0 | 0 | The paper focuses on the effect of age, body weight, and postconceptional age (maturation) on famciclovir pharmacokinetics, with no analysis of genetic variants or genotypes. |
| popPK | Bordicchia_2021 | irrelevant | 0 | 0 | This is a feline calicivirus study with no famciclovir pharmacokinetic parameters reported. |
| popPK | Das_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro antiviral mechanism of new amide analogues, with no population pharmacokinetic modeling or quantitative disposition parameters for famciclovir. |
| PGx | Das_2023 | not_relevant | 0 | 0 | The paper describes the synthesis and antiviral efficacy of new non-nucleoside analogues, not the pharmacogenomics of famciclovir. |
| popPK | Enosi_2019 | irrelevant | 0 | 0 | This is an in-vitro antiviral study of NITD008 and reports no famciclovir pharmacokinetic parameters. |
| popPK | Fumian_2018 | irrelevant | 0 | 0 | Famciclovir was tested only for in-vitro antiviral activity, with no pharmacokinetic disposition parameters reported. |
| popPK | Kim_2007 | irrelevant | 0 | 0 | The paper reports the synthesis and in vitro antiviral activity of nucleoside analogues, containing no pharmacokinetic data for famciclovir. |
| PGx | Kim_2007 | not_relevant | 0 | 0 | The paper focuses on the synthesis of novel nucleoside derivatives and their antiviral activity against viruses, containing no information regarding famciclovir or pharmacogenomics. |
| PGx | Ogungbenro_2009 | not_relevant | 0 | 0 | The paper reports a population PK model using demographic (age, weight) and physiological (creatinine clearance) covariates, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK parameters. |
| popPK | Ramesh_2025 | irrelevant | 0 | 0 | The paper models the progression of autosomal dominant tubulointerstitial kidney disease (eGFR decline) and does not involve famciclovir or any pharmacokinetic parameters. |
| PGx | Ramesh_2025 | not_relevant | 0 | 0 | The paper analyzes the progression of kidney disease (eGFR decline) in patients with genetic mutations (ADTKD), but it does not involve the drug famciclovir or report a pharmacogenomic effect on its pharmacokinetics or pharmacodynamics. |
| popPK | Romanowski_2021 | irrelevant | 0 | 0 | The study measures filociclovir antiviral activity, not famciclovir pharmacokinetics, and reports no famciclovir disposition parameters. |
| PGx | Schenkel_2013 | not_relevant | 0 | 0 | The study investigates pharmacokinetics based on demographic and physiopathological covariates (creatinine clearance, body weight, ACE inhibitors) but does not report any genetic variants or pharmacogenomic data. |
| popPK | Spraider_2020 | irrelevant | 0 | 0 | This porcine ventilation study reports no famciclovir pharmacokinetic parameters. |
| popPK | Spraider_2024 | irrelevant | 0 | 0 | The study concerns ventilator settings and respiratory compliance in cardiac surgery patients, with no pharmacokinetic data for famciclovir. |
| PGx | Spraider_2024 | not_relevant | 0 | 0 | The paper analyzes sex-related differences in mechanical ventilation parameters (tidal volume, compliance) and does not involve famciclovir or pharmacogenomics. |
| popPK | Tollefson_2022 | irrelevant | 0 | 0 | The study reports in vitro antiviral potency (EC50) of filociclovir against adenovirus, not pharmacokinetic parameters (CL, V, ka) for famciclovir or its metabolites in a subject. |
| PGx | Tollefson_2022 | not_relevant | 0 | 0 | The paper discusses the antiviral efficacy of filociclovir against adenovirus and does not mention famciclovir or any pharmacogenomic effects. |
| popPK | Yajima_2017 | irrelevant | 0 | 0 | The study focuses on the in vitro anti-herpetic mechanisms of amenamevir, acyclovir, and foscavir, with famciclovir mentioned only as a comparator drug without any pharmacokinetic data. |
| PGx | Yajima_2017 | not_relevant | 0 | 0 | The paper describes the antiviral mechanism of amenamevir and compares it with acyclovir and famciclovir, but it does not report any pharmacogenomic studies or gene variants affecting the PK/PD of famciclovir. |
| popPK | Yan_2024 | irrelevant | 0 | 0 | The paper investigates the antiviral activity of handelin against feline calicivirus and does not involve famciclovir or any pharmacokinetic parameters. |
| PGx | Yan_2024 | not_relevant | 0 | 0 | The paper concerns feline calicivirus and handelin, with no mention of famciclovir or pharmacogenomics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfamciclovir%5D&body=Drug%3A%20famciclovir%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_famciclovir/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 13:38 UTC</sub>
