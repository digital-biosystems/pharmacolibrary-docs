<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;nintedanib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nintedanib_Schmid2018v2_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hartmann_2026_FVC&quot;,&quot;label&quot;:&quot;Hartmann_2026 \u00b7 FVC&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/pd_Hartmann_2026_FVC.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hartmann_2026_FVC_2&quot;,&quot;label&quot;:&quot;Hartmann_2026 \u00b7 FVC&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/pd_Hartmann_2026_FVC_2.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# nintedanib

- **generic name:** nintedanib
- **ATC codes:** `L01EX09`, `L01XE3`
- **DrugBank:** [DB09079](https://go.drugbank.com/drugs/DB09079) · **PubChem:** [CID 9809715](https://pubchem.ncbi.nlm.nih.gov/compound/9809715)
- **molar mass:** 539.6248 g/mol (C31H33N5O4) — DrugBank
- **groups:** approved, investigational

## About

Nintedanib is a protein kinase inhibitor used to treat idiopathic pulmonary fibrosis and certain types of non-small-cell lung cancer. It is taken orally in capsule form. The medication is authorised in the European Union for these conditions.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q15149723](https://www.wikidata.org/wiki/Q15149723), [Wikipedia](https://en.wikipedia.org/wiki/Nintedanib?oldid=1348387438) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nintedanib | parent | 539.625 | C31H33N5O4 | DrugBank | [9809715](https://pubchem.ncbi.nlm.nih.gov/compound/9809715) | Schmid_2018, Schmid_2018_2 |
| BIBF 1202 | metabolite | 525.609 | C30H31N5O4 | PubChem | [135461425](https://pubchem.ncbi.nlm.nih.gov/compound/135461425) | Schmid_2018_2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Schmid_2018_reference](drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md) | — | 1-compartment (no model) | 4 | Schmid U et al., Population pharmacokinetics of nintedan…, Pulmonary pharmacology & th… (2018) | [10.1016/j.pupt.2017.11.004](https://doi.org/10.1016/j.pupt.2017.11.004) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Schmid_2018_2_reference](drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Schmid U et al., Population pharmacokinetics of nintedan…, Cancer chemotherapy and pha… (2018) | [10.1007/s00280-017-3452-0](https://doi.org/10.1007/s00280-017-3452-0) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hartmann_2026_2_FVC](drugs/drug_nintedanib/pd_Hartmann_2026_2_FVC.md) | absolute FVC ← nintedanib · disease-progression model | — | Hartmann S et al., Exposure-Efficacy Meta-Model of Ninteda…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70132](https://doi.org/10.1002/psp4.70132) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hartmann_2026_2_FVC_Z_score](drugs/drug_nintedanib/pd_Hartmann_2026_2_FVC_Z_score.md) | FVC Z‐score ← nintedanib · disease-progression model | — | Hartmann S et al., Exposure-Efficacy Meta-Model of Ninteda…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70132](https://doi.org/10.1002/psp4.70132) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Hartmann_2026_FVC](drugs/drug_nintedanib/pd_Hartmann_2026_FVC.md) | FVC %predicted ← nintedanib · direct Emax (saturable) effect | ▶ model + simulator | Hartmann S et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70135](https://doi.org/10.1002/psp4.70135) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Koziar_2024_FVC](drugs/drug_nintedanib/pd_Koziar_2024_FVC.md) | Annual rate of FVC decline ← nintedanib · direct linear effect | model (no simulator) | Koziar Vašáková M et al., Short- and long-term clinical outcomes…, Respiratory medicine (2024) | [10.1016/j.rmed.2024.107791](https://doi.org/10.1016/j.rmed.2024.107791) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Hartmann_2026_FVC_2](drugs/drug_nintedanib/pd_Hartmann_2026_FVC_2.md) | FVC Z-score ← nintedanib · direct Emax (saturable) effect | ▶ model + simulator | Hartmann S et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70135](https://doi.org/10.1002/psp4.70135) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Hartmann_2026_2_FVC_predicted](drugs/drug_nintedanib/pd_Hartmann_2026_2_FVC_predicted.md) | the response · model not identified | — | Hartmann S et al., Exposure-Efficacy Meta-Model of Ninteda…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70132](https://doi.org/10.1002/psp4.70132) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:29 | 0:04 | 1/1/0 | 4/2/0 | 0/0/0 | 4,654/166 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 16 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agema_2024 | relevant | 8 | 0 | The study develops a population-PK model for nintedanib, but specific numeric parameter values are not present in the provided evidence. |
| PGx | Agema_2024 | not_relevant | 0 | 0 | The study focuses on PK and PD relationships (dose, FVC decline) but contains no data or analysis regarding pharmacogenomic variants or genotypes. |
| popPK | Chioni_2026 | irrelevant | 0 | 0 | This is a clinical outcome study (pulmonary function and safety) that does not report any pharmacokinetic parameters (CL, V, ka, etc.) for nintedanib. |
| PGx | Chioni_2026 | not_relevant | 0 | 0 | The study reports clinical outcomes (lung function, skin score) of nintedanib triple therapy but does not investigate the impact of genetic variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Epstein-Shochet_2020 | irrelevant | 3 | 0 | The study reports qualitative PK characteristics (non-dose-proportional, tissue partitioning) and pharmacodynamic endpoints, but provides no specific numeric quantitative PK parameters (e.g., CL, Vd, t1/2, ka) in the evidence. |
| PGx | Epstein-Shochet_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of nintedanib (oral vs. inhaled) and does not report on the effects of any gene variant, genotype, or genetic phenotype on these parameters. |
| popPK | Hartmann_2026 | relevant | 9 | 1 | The paper develops a nintedanib population-PK model, but its parameter estimates are only referenced in Table S5, which is not provided. |
| popPK | Hartmann_2026_2 | irrelevant | 2 | 1 | This is a human exposure–efficacy analysis, not a disposition-PK study; popPK details are only referenced in supporting information not provided. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing FVC decline between two drugs, containing no pharmacokinetic parameters for nintedanib. |
| PGx | Kim_2024 | not_relevant | 0 | 0 | The paper compares clinical efficacy (FVC decline) of two drugs but does not report any pharmacogenomic effects or genotype-based differences in PK/PD parameters. |
| popPK | Koziar_2024 | irrelevant | 0 | 0 | The study reports clinical outcomes (mortality, FVC decline) rather than pharmacokinetic parameters. |
| PGx | Koziar_2024 | not_relevant | 0 | 0 | The study investigates clinical outcomes in patients stratified by phenotypes (FVC, age) without assessing genetic variants or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Lalla_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerability study (real-world cohort) reporting FVC decline and dosage reduction rates, not a pharmacokinetic study with clearance, volume, or half-life parameters. |
| PGx | Lalla_2025 | not_relevant | 0 | 0 | The paper compares clinical outcomes and tolerability of nintedanib and pirfenidone but does not contain any data on gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Lenz_2019 | irrelevant | 0 | 0 | The paper analyzes health-related quality of life (HRQoL) outcomes, not pharmacokinetic parameters. |
| PGx | Lenz_2019 | not_relevant | 0 | 0 | The paper reports Health-Related Quality of Life (HRQoL) outcomes from a clinical trial and contains no data on pharmacogenomics, gene variants, or changes in pharmacokinetic/pharmacodynamic parameters based on genetic profiles. |
| popPK | Raghu_2018 | irrelevant | 0 | 0 | The study is a clinical trial of anti-reflux surgery for IPF where nintedanib is only a permitted concomitant therapy, with no PK data reported. |
| PGx | Raghu_2018 | not_relevant | 0 | 0 | The paper describes a surgical intervention for IPF and mentions nintedanib only as permitted concomitant therapy, providing no data on pharmacogenomics or specific PK/PD parameters of nintedanib. |
| PGx | Schmid_2018 | not_relevant | 0 | 0 | The paper describes population pharmacokinetics and covariate effects (age, weight, smoking, race) but does not report the effect of any gene variant/genotype/phenotype on nintedanib PK or PD parameters. |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | This is a human efficacy meta-analysis; it reports treatment effects, not nintedanib disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnintedanib%5D&body=Drug%3A%20nintedanib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nintedanib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 14:56 UTC</sub>
