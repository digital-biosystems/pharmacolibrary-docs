<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zalcitabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zalcitabine_Adams1998_reference&quot;,&quot;label&quot;:&quot;Adams_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zalcitabine_Ibrahim1991_reference&quot;,&quot;label&quot;:&quot;Ibrahim_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zalcitabine/Zalcitabine_Ibrahim1991_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# zalcitabine

- **generic name:** zalcitabine
- **ATC codes:** `J05AF03`
- **DrugBank:** [DB00943](https://go.drugbank.com/drugs/DB00943) · **PubChem:** [CID 24066](https://pubchem.ncbi.nlm.nih.gov/compound/24066)
- **molar mass:** 211.2178 g/mol (C9H13N3O3) — DrugBank
- **groups:** approved, withdrawn

## About

Zalcitabine is a nucleoside reverse transcriptase inhibitor that was used to treat HIV infection and AIDS. It has been withdrawn and is no longer used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2344582](https://www.wikidata.org/wiki/Q2344582) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zalcitabine (2',3'-dideoxycytidine (DDC; zalcitabine)) | parent | 211.218 | C9H13N3O3 | DrugBank | [24066](https://pubchem.ncbi.nlm.nih.gov/compound/24066) | Adams_1998, Ibrahim_1991, Kelley_1987 |

## Start here

> **Adams_1998_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> HIV-infected patients, n = 44. [Run it in the simulator](drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md?tab=Simulation) · [record](drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 14.8 | L/h | 14.8 liters/h | HIV-infected patients | 44 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Adams_1998_reference](drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md) |
| V | V | 87.6 | L | 87.6 liters | HIV-infected patients | 44 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Adams_1998_reference](drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md) |
| ka | kabs | 50 | 1/h | 50.0 h-1 | HIV-infected patients | 44 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Adams_1998_reference](drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Adams_1998_reference](drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Adams JM et al., Zalcitabine population pharmacokinetics…, Antimicrobial agents and ch… (1998) | [10.1128/AAC.42.2.409](https://doi.org/10.1128/AAC.42.2.409) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): F</sub> | [Ibrahim_1991_reference](drugs/drug_zalcitabine/Zalcitabine_Ibrahim1991_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 | Ibrahim SS et al., Pharmacokinetics of 2',3'-dideoxycytidi…, Journal of pharmaceutical s… (1991) | [10.1002/jps.2600800110](https://doi.org/10.1002/jps.2600800110) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.98).">human + animal</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Kelley_1987_reference](drugs/drug_zalcitabine/Zalcitabine_Kelley1987_reference.md) | — | 1-compartment (no model) | 3 | Kelley JA et al., The disposition and metabolism of 2',3'…, Drug metabolism and disposi… (1987) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:10 | 10:16 | 1/0/2 | 0/0/0 | 0/0/0 | 217,147/46,650 | openai / gpt-6-luna | 30 | 7/17 | 27/3 | 0 |

## Coverage

- **PubMed hits:** 270 matched, 140 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Adams_1998.pdf` | Adams JM et al., Zalcitabine population pharmacokinetics…, Antimicrobial agents and ch… (1998) | popPK | 10 | [10.1128/AAC.42.2.409](https://doi.org/10.1128/AAC.42.2.409) | [9527795](https://pubmed.ncbi.nlm.nih.gov/9527795) | Human population-PK model reports numeric oral clearance and volume of distribution. |
| `Ibrahim_1991.pdf` | Ibrahim SS et al., Pharmacokinetics of 2',3'-dideoxycytidi…, Journal of pharmaceutical s… (1991) | popPK | 10 | [10.1002/jps.2600800110](https://doi.org/10.1002/jps.2600800110) | [1849573](https://pubmed.ncbi.nlm.nih.gov/1849573) | The rat study reports readable quantitative pharmacokinetic parameters for zalcitabine (DDC). |
| `Kelley_1987.pdf` | Kelley JA et al., The disposition and metabolism of 2',3'…, Drug metabolism and disposi… (1987) | popPK | 10 | not captured | [2891473](https://pubmed.ncbi.nlm.nih.gov/2891473) | Zalcitabine pharmacokinetics are reported in animals, including numeric terminal half-lives and a two-compartment model. |
| `Solimano_1990.pdf` | Solimano F et al., A nonlinear three-compartment model for…, Bulletin of mathematical bi… (1990) | popPK | 8 | [10.1007/BF02460809](https://doi.org/10.1007/BF02460809) | [2177675](https://pubmed.ncbi.nlm.nih.gov/2177675) | A three-compartment model for ddCyd is described, but no numeric parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T16:02:24.282607+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdel-Rahman_2000 | not_relevant | 0 | 0 | The paper studies CYP variants and NNK-induced chromosome aberrations, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Abu-Serie_2022 | not_relevant | 0 | 0 | The paper studies nanoparticle treatments for metastatic breast cancer and does not report zalcitabine or a gene-variant effect on its PK or PD. |
| PGx | Ahmed_2020 | not_relevant | 0 | 0 | The paper studies octopamine receptor agonists and gene expression in Drosophila, not zalcitabine or pharmacogenomic effects on its PK/PD. |
| PGx | Alonso-Navarro_2014 | not_relevant | 0 | 0 | The review discusses genetic associations with Parkinson’s disease risk, not genotype effects on zalcitabine pharmacokinetic or pharmacodynamic parameters. |
| popPK | Aquaro_1997 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study, not a pharmacokinetic study, and reports no zalcitabine disposition parameters. |
| popPK | Asif_2005 | irrelevant | 0 | 0 | Numeric pharmacokinetic values are reported for L-3′-Fd4C, not zalcitabine. |
| PGx | Atwal_2015 | not_relevant | 0 | 0 | The paper discusses DDC variants and AADC deficiency, not zalcitabine or a pharmacokinetic/pharmacodynamic effect. |
| popPK | Balzarini_1998 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no zalcitabine pharmacokinetic parameters. |
| PGx | Barry_1997 | not_relevant | 0 | 0 | The paper discusses protease-inhibitor pharmacokinetics and mentions zalcitabine only as combination therapy; it reports no pharmacogenomic effect on a zalcitabine PK/PD parameter. |
| popPK | Bo_2013 | irrelevant | 0 | 0 | This is a polysaccharide sulfation and activity study; zalcitabine (ddC) is only an activity comparator, with no PK parameters reported. |
| PGx | Brennenstuhl_2020 | not_relevant | 0 | 0 | The paper studies newborn screening for AADC deficiency and reports no zalcitabine pharmacogenomic effects on PK or PD parameters. |
| popPK | Chong_2003 | irrelevant | 0 | 0 | This is an in-vitro antiviral chemistry study with no zalcitabine pharmacokinetic parameters. |
| popPK | Coleman_1993 | irrelevant | 0 | 0 | This is an in-vitro dapsone study and reports no zalcitabine pharmacokinetic parameters. |
| popPK | Coleman_1994 | irrelevant | 0 | 0 | This is an in-vitro dapsone study and reports no zalcitabine parameters. |
| popPK | Coleman_1999 | irrelevant | 0 | 0 | The study concerns 4-PAPP, not zalcitabine, and reports no zalcitabine pharmacokinetic parameters. |
| PGx | Corominas_2009 | not_relevant | 0 | 0 | The paper studies dopamine-related genetic associations with migraine susceptibility and reports no zalcitabine PK or PD parameters. |
| popPK | Currens_1996 | irrelevant | 0 | 0 | The paper studies calanolide A’s antiviral activity and reports no zalcitabine pharmacokinetic parameters. |
| PGx | De_2003 | not_relevant | 0 | 0 | The paper studies Drosophila Ddc variants and longevity, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Devos_2014 | not_relevant | 0 | 0 | The paper reports DDC genotype effects on the motor response to L-dopa, not zalcitabine. |
| popPK | Dhawan_1996 | irrelevant | 0 | 0 | The paper studies FDOPA and 3OMFD PET, not zalcitabine, and reports no zalcitabine parameters. |
| PGx | Ekins_1997 | not_relevant | 0 | 0 | The paper examines CYP enzyme probes and does not report a pharmacogenomic effect on any zalcitabine PK or PD parameter. |
| PGx | Fragoulis_2019 | not_relevant | 0 | 0 | The paper studies Nrf2 and DDC-induced liver disease, not zalcitabine pharmacokinetics or pharmacodynamics. |
| popPK | Gao_1994 | irrelevant | 0 | 0 | This is an in-vitro HIV drug-resistance study with no zalcitabine disposition parameters reported. |
| PGx | Gibson_2025 | not_relevant | 0 | 0 | The paper studies Hippo signaling and dopamine metabolism in Drosophila and reports no zalcitabine-related pharmacogenomic effects. |
| PGx | Gibson_2026 | not_relevant | 0 | 0 | The paper studies Hippo signaling, pigmentation, and dopamine in Drosophila; it reports no zalcitabine pharmacogenomic effects on PK or PD parameters. |
| PGx | Ginsburg_1997 | not_relevant | 0 | 0 | The paper studies DDC and nitric oxide effects on cultured endothelial cells and reports no gene variant or zalcitabine PK/PD parameter. |
| PGx | Gorski_1997 | not_relevant | 0 | 0 | The paper studies CYP-mediated chlorzoxazone metabolism, not a pharmacogenomic effect on zalcitabine PK or PD. |
| popPK | Gründer_2003 | irrelevant | 0 | 0 | The paper models FDOPA disposition in humans, not zalcitabine; no zalcitabine parameter values are reported. |
| PGx | Guo_2006 | not_relevant | 0 | 0 | The paper studies gene expression in endometrial carcinoma and reports no zalcitabine pharmacokinetic or pharmacodynamic effects. |
| PGx | Gupta_2016 | not_relevant | 0 | 0 | The paper studies TSPAN5 and ERICH3 associations with serotonin and SSRI outcomes, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Haavik_2008 | not_relevant | 0 | 0 | The text discusses monoamine-pathway gene variants and reports no pharmacogenomic effect on a zalcitabine PK or PD parameter. |
| popPK | Hardeman_2017 | irrelevant | 1 | 0 | Zalcitabine is used in vitro to alter melanoma-cell metabolism, but no zalcitabine disposition parameters are reported. |
| PGx | Hardeman_2017 | not_relevant | 0 | 0 | The study tests zalcitabine’s metabolic effects on melanoma cells and sensitivity to PLX4720, but reports no gene variant, genotype, or phenotype effect on zalcitabine PK or PD. |
| PGx | Ho_2021 | not_relevant | 0 | 0 | The paper concerns TSPAN5 variants and acamprosate treatment response, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Hyland_2020 | not_relevant | 0 | 0 | The paper concerns DDC variants and AADC deficiency, not zalcitabine pharmacokinetics or pharmacodynamics. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The study reports PET kinetic measures for fluorodopa tracers, not zalcitabine. |
| PGx | Jelnes_2007 | not_relevant | 0 | 0 | The paper studies oval-cell phenotypes in rodent liver regeneration and does not examine zalcitabine or pharmacogenomic effects on PK/PD parameters. |
| popPK | Kaneko_2000 | irrelevant | 0 | 0 | This is an in-vitro antiviral efficacy study, not a pharmacokinetic study, and no disposition parameters are reported. |
| popPK | Kaneko_2001 | irrelevant | 0 | 0 | Zalcitabine (ddC) is only an in-vitro comparator, with no disposition parameters reported. |
| popPK | Kaneko_2003 | irrelevant | 0 | 0 | Zalcitabine is an in-vitro antiviral comparator, with no disposition parameters reported. |
| PGx | Kraemmer_2016 | not_relevant | 0 | 0 | The paper studies genetic prediction of impulse control disorders during dopamine replacement therapy, not zalcitabine pharmacokinetics or pharmacodynamics. |
| popPK | Kumar_1994 | irrelevant | 0 | 0 | Zalcitabine is only a comparator in an in-vitro antiviral study, with no zalcitabine disposition parameters reported. |
| PGx | Lavigne_2002 | not_relevant | 0 | 0 | The paper studies cytochrome P450-related porphyrin formation and does not report a zalcitabine pharmacokinetic or pharmacodynamic effect by genotype. |
| popPK | Lee_1994 | irrelevant | 0 | 0 | Zalcitabine (ddC) is only an anti-HIV comparator, and no pharmacokinetic parameters are reported. |
| popPK | Li_2012 | irrelevant | 0 | 0 | This is an in-vitro HIV inhibitor study and reports no zalcitabine pharmacokinetic parameters. |
| PGx | Li_2014 | not_relevant | 0 | 0 | The paper reports a genetic association with treatment-resistant schizophrenia, not a zalcitabine pharmacokinetic or pharmacodynamic parameter. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper reports a DDC genotype association with motor response to levodopa, not zalcitabine. |
| PGx | Li_2020_2 | not_relevant | 0 | 0 | The paper studies dopamine-related variants and heroin-dependence phenotypes, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Liu_2000 | not_relevant | 0 | 0 | The paper studies nimodipine metabolism, not zalcitabine, and reports no genotype-dependent PK or PD effect for zalcitabine. |
| popPK | Lubberink_2020 | irrelevant | 0 | 0 | This monkey PET study models [11C]5-HTP, not zalcitabine, and reports no zalcitabine parameters. |
| PGx | Löhle_2018 | not_relevant | 0 | 0 | The study examines MAOB genotype effects on dopamine turnover in Parkinson’s disease and does not report zalcitabine PK or PD. |
| PGx | Löhle_2022 | not_relevant | 0 | 0 | The paper studies MAOB genotype and levodopa-associated dyskinesia in Parkinson’s disease, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Mastrangelo_2023 | not_relevant | 0 | 0 | This review concerns inherited biogenic amine disorders and reports no pharmacogenomic effects on zalcitabine PK or PD parameters. |
| popPK | Meyer_2020 | irrelevant | 0 | 0 | This nanotheranostic study reports no zalcitabine pharmacokinetics or quantitative disposition parameters. |
| PGx | Micozzi_2014 | not_relevant | 0 | 0 | The paper characterizes cytidine deaminase variants but does not report a pharmacokinetic or pharmacodynamic effect on zalcitabine. |
| popPK | Miesel_1995 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study, with ddC only as a comparator and no zalcitabine disposition parameters. |
| popPK | Miyano-Kurosaki_1994 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity assay, not a pharmacokinetic study, and reports no disposition parameters. |
| PGx | Moreau_2015 | not_relevant | 0 | 0 | The paper studies SLC6A3 genotype associations with response to l-DOPA and methylphenidate, not zalcitabine. |
| popPK | Nishigaki_1985 | irrelevant | 0 | 0 | No paper content or zalcitabine pharmacokinetic values are provided in the evidence. |
| PGx | Piechota_2006 | not_relevant | 0 | 0 | The study examines cellular responses to dideoxycytidine, not how a genetic variant or phenotype changes a zalcitabine PK or PD parameter. |
| popPK | Pontikis_2000 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no zalcitabine pharmacokinetic parameters. |
| popPK | Premanathan_1997 | irrelevant | 0 | 0 | This is an in-vitro SOD antiviral study; zalcitabine (ddC) is only a comparator, with no PK parameters reported. |
| PGx | Prosperi_2012 | not_relevant | 0 | 0 | The study reports toxicity-related discontinuation associated with zalcitabine use, but no gene variant, genotype, or phenotype effect on zalcitabine PK or PD parameters. |
| popPK | Sabo_2000 | irrelevant | 0 | 0 | Zalcitabine was background therapy, but its pharmacokinetics were not modeled or quantified. |
| PGx | Sahai_1996 | not_relevant | 0 | 0 | The paper discusses drug–drug interactions but reports no gene variant, genotype, or phenotype effect on a zalcitabine PK or PD parameter. |
| popPK | Salvatori_2001 | irrelevant | 0 | 0 | This is an in-vitro antiviral study and reports no zalcitabine disposition parameters. |
| PGx | Schmider_1997 | not_relevant | 0 | 0 | The paper studies in vitro dextromethorphan metabolism, not zalcitabine or a pharmacogenomic effect on its PK/PD. |
| popPK | Schwendener_1999 | irrelevant | 1 | 0 | The study concerns ddC-containing conjugates, and no numeric zalcitabine disposition parameters are present in the evidence. |
| popPK | Senek_2020 | irrelevant | 0 | 0 | The population-PK model and numeric parameters are for levodopa, not zalcitabine. |
| PGx | Senek_2020 | not_relevant | 0 | 0 | This paper studies genetic effects on levodopa pharmacokinetics, not zalcitabine. |
| popPK | Siddique_2009 | irrelevant | 0 | 0 | This in-vitro neuroendocrine cell-line study reports no zalcitabine pharmacokinetic parameters. |
| popPK | Silveira_2026 | irrelevant | 0 | 0 | The numeric PK values are for Me-DDC and Me-DTC, not zalcitabine. |
| popPK | Solimano_1990 | relevant | 8 | 0 | A three-compartment model for ddCyd is described, but no numeric parameter values are provided in the evidence. |
| popPK | Suphanchaimat_2021 | irrelevant | 0 | 0 | This COVID-19 vaccination and case-finding model reports no zalcitabine pharmacokinetic parameters. |
| popPK | Tanaka_1997 | irrelevant | 0 | 0 | Zalcitabine is only an in-vitro combination drug, with no zalcitabine disposition parameters reported. |
| popPK | Tay_2019 | irrelevant | 0 | 0 | This study measures flame retardants, not zalcitabine or its metabolite. |
| popPK | Törnevik_1990 | irrelevant | 0 | 0 | This in-vitro cell study reports metabolite pools, not quantitative pharmacokinetic disposition parameters. |
| PGx | Ungureanu_2024 | not_relevant | 0 | 0 | The paper assesses drug–drug interactions in prostate cancer treatment and psychotropics, not pharmacogenomic effects on zalcitabine. |
| PGx | Vagany_2021 | not_relevant | 0 | 0 | The paper studies ALAS1 genotype effects on hepatic responses to phenobarbital and 4-ethyl-DDC, not zalcitabine PK or PD parameters. |
| popPK | Vanhove_1997 | irrelevant | 2 | 0 | The study estimates drug exposure for an exposure-response analysis but reports no quantitative zalcitabine disposition parameters or values. |
| popPK | Volsky_1992 | irrelevant | 0 | 0 | This in-vitro antiviral assay reports EC50 values, not zalcitabine pharmacokinetic disposition parameters. |
| PGx | Vuletić_2021 | not_relevant | 0 | 0 | This review concerns Parkinson’s disease pharmacogenomics and does not report a genotype-related PK or PD effect for zalcitabine. |
| popPK | Wei_2008 | irrelevant | 0 | 0 | This is an electrophysiology study of sulfur dioxide derivatives in rat myocytes and reports no zalcitabine pharmacokinetic parameters. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | The study tests zalcitabine’s inhibition of BCRP in vitro, not how a genetic variant, genotype, or phenotype affects a zalcitabine PK/PD parameter. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility study and reports no zalcitabine disposition parameters. |
| PGx | Xiao_2020 | not_relevant | 0 | 0 | The paper studies melanin synthesis in ladybird beetles and reports no zalcitabine treatment or pharmacokinetic/pharmacodynamic effects. |
| PGx | Xie_2021 | not_relevant | 0 | 0 | The paper studies IDH1 genotype and MRI biomarkers in gliomas, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Xue_2021 | not_relevant | 0 | 0 | The paper studies a herbal decoction’s effects on bile acid metabolism in mice and reports no zalcitabine, genetic variation, or pharmacogenomic PK/PD effect. |
| popPK | Yusa_1994 | irrelevant | 0 | 0 | This is an in-vitro study of daphnodorins and reports no zalcitabine pharmacokinetic parameters. |
| PGx | Zeng_1998 | not_relevant | 0 | 0 | The paper studies CYP3A4-mediated metabolism of ivermectin, not a gene-related PK/PD effect for zalcitabine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:02 UTC</sub>
