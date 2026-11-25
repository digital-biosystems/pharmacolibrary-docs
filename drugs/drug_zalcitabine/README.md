<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zalcitabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zalcitabine_Ibrahim1991_reference&quot;,&quot;label&quot;:&quot;Ibrahim_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zalcitabine/Zalcitabine_Ibrahim1991_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zalcitabine_Adams1998_reference&quot;,&quot;label&quot;:&quot;Adams_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# zalcitabine

- **generic name:** zalcitabine
- **ATC codes:** `J05AF03`
- **DrugBank:** [DB00943](https://go.drugbank.com/drugs/DB00943) · **PubChem:** [CID 24066](https://pubchem.ncbi.nlm.nih.gov/compound/24066)
- **molar mass:** 211.2178 g/mol (C9H13N3O3) — DrugBank
- **groups:** approved, withdrawn

## About

Zalcitabine is a nucleoside reverse transcriptase inhibitor used to treat HIV infection. It is administered orally in tablet form. Due to limited potency and serious side effects, the drug is now rarely used and has been removed from pharmacies in some countries.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2344582](https://www.wikidata.org/wiki/Q2344582), [Wikipedia](https://en.wikipedia.org/wiki/Zalcitabine?oldid=1382962509) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 2',3'-dideoxycytidine (DDC; zalcitabine) (zalcitabine) | metabolite | 211.221 | C9H13N3O3 | PubChem | [24066](https://pubchem.ncbi.nlm.nih.gov/compound/24066) | Adams_1998, Ibrahim_1991, Kelley_1987 |

## Start here

> **Ibrahim_1991_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> rats administered high-dose DDC. [Run it in the simulator](drugs/drug_zalcitabine/Zalcitabine_Ibrahim1991_reference.md?tab=Simulation) · [record](drugs/drug_zalcitabine/Zalcitabine_Ibrahim1991_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): F</sub> | [Ibrahim_1991_reference](drugs/drug_zalcitabine/Zalcitabine_Ibrahim1991_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 | Ibrahim SS et al., Pharmacokinetics of 2',3'-dideoxycytidi…, Journal of pharmaceutical s… (1991) | [10.1002/jps.2600800110](https://doi.org/10.1002/jps.2600800110) |
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub> | [Kelley_1987_reference](drugs/drug_zalcitabine/Zalcitabine_Kelley1987_reference.md) | — | 1-compartment (no model) | 3 | Kelley JA et al., The disposition and metabolism of 2',3'…, Drug metabolism and disposi… (1987) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: biomarker_kinetics_as_drug_pk</sub> | [Adams_1998_reference](drugs/drug_zalcitabine/Zalcitabine_Adams1998_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Adams JM et al., Zalcitabine population pharmacokinetics…, Antimicrobial agents and ch… (1998) | [10.1128/AAC.42.2.409](https://doi.org/10.1128/AAC.42.2.409) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vortherms_2009_DHFR](drugs/drug_zalcitabine/pd_Vortherms_2009_DHFR.md) | Dihydrofolate reductase activity biomarker turnover ← zalcitabine | — | Vortherms AR et al., Anticancer conjugates and cocktails bas…, Clinical medicine. Oncology (2009) | [10.4137/cmo.s2113](https://doi.org/10.4137/cmo.s2113) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kaneko_2000_ADV](drugs/drug_zalcitabine/pd_Kaneko_2000_ADV.md) | adenovirus replication (ADV 4, ADV 8, ADV 37) ← zalcitabine (ddC) · inhibition effect | — | Kaneko H et al., [Evaluation of antiviral agents for ade…, Nippon Ganka Gakkai zasshi (2000) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 06:02 | 0:04 | 2/1/0 | 1/1/0 | 0/0/0 | 3,892/165 | einfracz / qwen3.8-27b | 30 | 8/21 | 27/3 | 0 |

## Coverage

- **PubMed hits:** 270 matched, 140 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Rahman_2000 | irrelevant | 0 | 0 | The paper is an in vitro genotoxicity study regarding NNK and does not contain any pharmacokinetic data for zalcitabine. |
| PGx | Abdel-Rahman_2000 | not_relevant | 0 | 0 | The study investigates the genotoxicity of NNK (a tobacco carcinogen) and the role of CYP2E1/2D6 variants on chromosome aberrations, not the pharmacokinetics or pharmacodynamics of the drug zalcitabine. |
| popPK | Abu-Serie_2022 | irrelevant | 0 | 0 | The paper studies diethyldithiocarbamate and iron oxide nanoparticles for breast cancer, not zalcitabine pharmacokinetics. |
| PGx | Abu-Serie_2022 | not_relevant | 0 | 0 | The paper discusses a novel nanocomplex of diethyldithiocarbamate and iron oxide nanoparticles for breast cancer, unrelated to zalcitabine pharmacogenomics. |
| PGx | Adams_1998 | not_relevant | 0 | 0 | The study reports population pharmacokinetics but explicitly states that patient covariates (age, sex, weight, creatinine clearance) did not improve the model fit and does not investigate any genetic variants or genotypes. |
| popPK | Ahmed_2020 | irrelevant | 0 | 0 | The paper studies the effects of octopamine receptor agonists on Drosophila melanogaster and does not involve zalcitabine or its pharmacokinetics. |
| PGx | Ahmed_2020 | not_relevant | 0 | 0 | The paper studies gene expression changes in Drosophila induced by octopamine agonists and does not involve zalcitabine or human pharmacogenomics. |
| popPK | Alonso-Navarro_2014 | irrelevant | 0 | 0 | The paper is a review of pharmacogenomic biomarkers for Parkinson's disease and contains no pharmacokinetic data for zalcitabine. |
| PGx | Alonso-Navarro_2014 | not_relevant | 0 | 0 | The paper is a review on genetic biomarkers for Parkinson's disease risk and does not discuss the pharmacokinetics or pharmacodynamics of zalcitabine. |
| popPK | Aquaro_1997 | irrelevant | 0 | 0 | The paper is an in-vitro virology study testing antiviral activity of various drugs (including nucleosides like AZT, ddC, ddI) in primary monocyte/macrophages; it does not report any pharmacokinetic parameters (CL, V, ka, half-life) for zalcitabine (ddC) or any other drug, and contains no quantitative disposition data. |
| PGx | Aquaro_1997 | not_relevant | 0 | 0 | The paper does not mention zalcitabine or report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Asif_2005 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for L-3'-Fd4C in rhesus monkeys, not for zalcitabine. |
| PGx | Asif_2005 | not_relevant | 0 | 0 | The paper reports standard pharmacokinetics of L-3'-Fd4C in rhesus monkeys but contains no data on genetic variants or pharmacogenomic effects. |
| popPK | Atwal_2015 | irrelevant | 0 | 0 | The paper concerns the diagnosis of AADC deficiency via metabolomic profiling and does not report pharmacokinetic parameters for zalcitabine. |
| PGx | Atwal_2015 | not_relevant | 0 | 0 | The paper describes the diagnosis of AADC deficiency using plasma metabolomics and does not report pharmacokinetic or pharmacodynamic effects of zalcitabine or any other drug related to genetic variants. |
| popPK | Balzarini_1998 | irrelevant | 0 | 0 | The paper reports in vitro antiviral efficacy (EC50) of prodrugs against visna virus, containing no pharmacokinetic parameters or data for zalcitabine. |
| PGx | Balzarini_1998 | not_relevant | 0 | 0 | The paper investigates antiviral activity of prodrugs in cells, not pharmacogenomic effects on PK/PD parameters of zalcitabine. |
| popPK | Barry_1997 | irrelevant | 0 | 0 | The paper is a review of protease inhibitors and does not report pharmacokinetic parameters for zalcitabine, which is only mentioned as a comparator therapy. |
| PGx | Barry_1997 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of protease inhibitors and general drug interactions in HIV, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of zalcitabine. |
| popPK | Baruffini_2015 | irrelevant | 0 | 0 | This is an in-vitro study in yeast focusing on mitochondrial toxicity and DNA polymerase polymorphisms, reporting no pharmacokinetic parameters for zalcitabine. |
| PGx | Baruffini_2015 | not_relevant | 4 | 5 | The study reports a genotype effect on mitochondrial toxicity (a toxicodynamic endpoint) in a yeast model, but does not report changes in standard pharmacokinetic (PK) or primary pharmacodynamic (PD) parameters like efficacy or exposure. |
| popPK | Bo_2013 | irrelevant | 0 | 0 | The paper investigates the sulfation and biological activities of konjac glucomannan and contains no data on zalcitabine pharmacokinetics. |
| PGx | Bo_2013 | not_relevant | 0 | 0 | The paper investigates the sulfation and biological activities of konjac glucomannan, not the pharmacogenomics of zalcitabine. |
| popPK | Brennenstuhl_2020 | irrelevant | 0 | 0 | The paper focuses on the quantification of 3-O-methyldopa for diagnosing AADC deficiency and does not report pharmacokinetic parameters for zalcitabine. |
| PGx | Brennenstuhl_2020 | not_relevant | 0 | 0 | The paper focuses on metabolic biomarker analysis for diagnosing AADC deficiency and does not evaluate the pharmacokinetics or pharmacodynamics of zalcitabine. |
| popPK | Broder_1990 | irrelevant | 0 | 0 | The paper discusses the pharmacodynamics and pharmacokinetics of 2',3'-dideoxycytidine (ddC), not zalcitabine. |
| PGx | Broder_1990 | not_relevant | 0 | 0 | The paper discusses the general pharmacokinetics and pharmacodynamics of ddC (zalcitabine) but does not report any gene variant, genotype, or phenotype effects on these parameters. |
| popPK | Chan_1992 | irrelevant | 0 | 0 | The study focuses on in vitro toxicity of AZT, DDC, and DDI in canine cells; zalcitabine is not mentioned or studied. |
| PGx | Chan_1992 | not_relevant | 0 | 0 | The paper studies AZT, DDC, and DDI in canine cells and does not mention zalcitabine (DDI) in the context of human pharmacogenomics or gene-variant effects. |
| popPK | Cheng_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on DOPA decarboxylase inhibitors and does not involve zalcitabine or its pharmacokinetics. |
| PGx | Cheng_2014 | not_relevant | 0 | 0 | The paper reports the synthesis and DDC inhibition of phenanthridium derivatives, with no mention of zalcitabine or any pharmacogenomic effects on drug PK/PD. |
| popPK | Chong_2003 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro anti-HIV activity of didehydro-dideoxyfluoronucleosides, not the pharmacokinetics of zalcitabine. |
| PGx | Chong_2003 | not_relevant | 0 | 0 | The paper discusses the synthesis and anti-HIV activity of experimental nucleoside analogs, not the pharmacogenomics of zalcitabine. |
| popPK | Coleman_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and mechanism of dapsone and its metabolite in an in vitro erythrocyte model, not zalcitabine. |
| PGx | Coleman_1993 | not_relevant | 0 | 0 | The paper concerns dapsone pharmacokinetics and mechanism of action, not zalcitabine, and does not report a pharmacogenomic effect. |
| popPK | Coleman_1994 | irrelevant | 0 | 0 | The paper studies dapsone hydroxylamine in vitro and does not involve zalcitabine. |
| PGx | Coleman_1994 | not_relevant | 0 | 0 | The paper focuses on dapsone pharmacology, not zalcitabine. |
| popPK | Coleman_1999 | irrelevant | 0 | 0 | The paper studies the bioactivation of 4-aminopropiophenone (a cyanide antidote), not zalcitabine. |
| PGx | Coleman_1999 | not_relevant | 0 | 0 | The paper studies the cyanide antidote 4-PAPP, not zalcitabine. |
| PGx | Corominas_2009 | not_relevant | 0 | 0 | The paper studies dopamine-related genetic associations with migraine susceptibility and reports no zalcitabine PK or PD parameters. |
| popPK | Currens_1996 | irrelevant | 0 | 0 | The paper describes the antiviral mechanism of calanolide A and contains no data on the pharmacokinetics of zalcitabine. |
| PGx | Currens_1996 | not_relevant | 0 | 0 | The paper studies the antiviral activity of calanolide A against HIV, not the pharmacogenomics of zalcitabine. |
| popPK | De_2003 | irrelevant | 0 | 0 | The paper is a genetic study on Drosophila melanogaster longevity and Ddc polymorphisms, containing no pharmacokinetic data for zalcitabine. |
| PGx | De_2003 | not_relevant | 0 | 0 | The paper studies the genetic basis of Drosophila longevity and dopamine synthesis, not the pharmacokinetics or pharmacodynamics of zalcitabine. |
| popPK | Devos_2014 | irrelevant | 0 | 0 | The study focuses on L-dopa and DDC polymorphisms in Parkinson's disease, not zalcitabine. |
| PGx | Devos_2014 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of L-dopa, not zalcitabine. |
| popPK | Dhawan_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of FDOPA and 3OMFD in Parkinson's disease, not zalcitabine. |
| PGx | Dhawan_1996 | not_relevant | 0 | 0 | The paper concerns FDOPA PET imaging for Parkinson's disease and does not involve zalcitabine or pharmacogenomics. |
| popPK | Ekins_1997 | irrelevant | 0 | 0 | The paper investigates the in-vitro metabolism of 7-Ethoxy-4-trifluoromethylcoumarin (7-EFC) and does not involve zalcitabine. |
| PGx | Ekins_1997 | not_relevant | 0 | 0 | The paper investigates the metabolism of the probe drug 7-EFC by CYP enzymes and does not mention zalcitabine. |
| popPK | Evans_1985 | irrelevant | 0 | 0 | The study focuses on the radioprotective and radiosensitizing effects of diethyldithiocarbamate (DDC) in mice and does not involve zalcitabine or any pharmacokinetic analysis. |
| PGx | Evans_1985 | not_relevant | 0 | 0 | The paper investigates the radioprotective and radiosensitizing effects of diethyldithiocarbamate (DDC) in mice, not the pharmacokinetics or pharmacodynamics of zalcitabine. |
| popPK | Fragoulis_2019 | irrelevant | 0 | 0 | The paper studies Nrf2 and liver injury in mice and contains no pharmacokinetic data for zalcitabine. |
| PGx | Fragoulis_2019 | not_relevant | 0 | 0 | The paper discusses Nrf2 genotype effects on liver injury/regeneration from DDC diet, not the pharmacokinetics or pharmacodynamics of the drug zalcitabine. |
| popPK | Gao_1994 | irrelevant | 0 | 0 | The paper describes in vitro viral resistance mechanisms for HIV-1 and does not report pharmacokinetic parameters for zalcitabine. |
| PGx | Gao_1994 | not_relevant | 0 | 0 | The paper focuses on HIV-1 viral resistance to nucleoside analogs (AZT, ddI, ddC, d4T) and does not mention zalcitabine or human pharmacogenomic variations. |
| popPK | Gibson_2025 | irrelevant | 0 | 0 | The paper is a developmental biology study on Drosophila melanogaster focusing on the Hippo signaling pathway and cuticle pigmentation, with no mention of the drug zalcitabine or pharmacokinetic parameters. |
| PGx | Gibson_2025 | not_relevant | 0 | 0 | The paper studies Hippo signaling and pigmentation in Drosophila, which is unrelated to the pharmacokinetics or pharmacodynamics of zalcitabine. |
| PGx | Gibson_2026 | not_relevant | 0 | 0 | The paper studies Hippo signaling, pigmentation, and dopamine in Drosophila; it reports no zalcitabine pharmacogenomic effects on PK or PD parameters. |
| popPK | Ginsburg_1997 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of cell injury by diethyldithiocarbamate and nitric oxide in bovine endothelial cells, containing no pharmacokinetic data or mention of zalcitabine. |
| PGx | Ginsburg_1997 | not_relevant | 0 | 0 | The paper investigates the cell toxicity of diethyldithiocarbamate and nitric oxide in tissue culture, does not mention zalcitabine, and contains no pharmacogenomic data. |
| popPK | Gorski_1997 | irrelevant | 0 | 0 | The paper investigates the metabolism of chlorzoxazone (a CYP probe) in vitro and does not mention or report pharmacokinetic data for zalcitabine. |
| PGx | Gorski_1997 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic mechanism of chlorzoxazone (a CYP probe) and does not mention zalcitabine or any pharmacogenomic effect on its PK/PD parameters. |
| popPK | Gründer_2003 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of the PET tracer FDOPA in schizophrenia patients treated with haloperidol, not the disposition parameters of zalcitabine. |
| PGx | Gründer_2003 | not_relevant | 0 | 0 | The paper investigates the effect of haloperidol on dopamine synthesis in schizophrenia patients; it does not report a pharmacogenomic effect on the PK or PD of zalcitabine. |
| popPK | Guo_2006 | irrelevant | 0 | 0 | The paper is about gene expression profiling in endometrial carcinoma and does not mention zalcitabine or any pharmacokinetic parameters. |
| PGx | Guo_2006 | not_relevant | 0 | 0 | The paper studies gene expression in endometrial carcinoma and does not report pharmacokinetic or pharmacodynamic effects of zalcitabine or any other drug. |
| popPK | Gupta_2016 | irrelevant | 0 | 0 | The paper focuses on pharmacogenomics and metabolomics of SSRIs (citalopram/escitalopram) and zalcitabine is not mentioned. |
| PGx | Gupta_2016 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics for SSRI treatment in depression, not zalcitabine. |
| popPK | Haavik_2008 | irrelevant | 0 | 0 | The paper reviews genetics of neurotransmitter pathways and does not mention zalcitabine or report any pharmacokinetic parameters. |
| PGx | Haavik_2008 | not_relevant | 0 | 0 | The paper reviews genetic variants in monoamine neurotransmitter pathway genes and their clinical associations, providing no information on the pharmacokinetics or pharmacodynamics of zalcitabine. |
| popPK | Hanioka_1995 | irrelevant | 0 | 0 | The study investigates the in-vitro biotransformation of toluene in dog liver microsomes, not the pharmacokinetics of zalcitabine. |
| PGx | Hanioka_1995 | not_relevant | 0 | 0 | The paper studies toluene metabolism in dog liver microsomes and does not mention zalcitabine or human pharmacogenomics. |
| popPK | Hardeman_2017 | irrelevant | 1 | 0 | Zalcitabine is used in vitro to alter melanoma-cell metabolism, but no zalcitabine disposition parameters are reported. |
| PGx | Hardeman_2017 | not_relevant | 0 | 0 | The study tests zalcitabine’s metabolic effects on melanoma cells and sensitivity to PLX4720, but reports no gene variant, genotype, or phenotype effect on zalcitabine PK or PD. |
| PGx | Ho_2021 | not_relevant | 0 | 0 | The paper concerns TSPAN5 variants and acamprosate treatment response, not zalcitabine pharmacokinetics or pharmacodynamics. |
| popPK | Hunsucker_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of a nucleotidase enzyme and does not report pharmacokinetic parameters for zalcitabine. |
| PGx | Hunsucker_2001 | not_relevant | 0 | 0 | The paper discusses nucleoside analogs in general (e.g., 2-dA, dCyd, ddCyd) and 5'-nucleotidase I, but does not report pharmacogenomic data for zalcitabine (ddC). |
| popPK | Hyland_2020 | irrelevant | 0 | 0 | The paper concerns the epidemiology and genetics of AADC deficiency and does not report pharmacokinetic parameters for zalcitabine. |
| PGx | Hyland_2020 | not_relevant | 0 | 0 | The paper focuses on the prevalence and diagnosis of AADC deficiency, and does not report on the pharmacokinetic or pharmacodynamic effects of zalcitabine. |
| popPK | Ibrahim_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 2',3'-dideoxycytidine (DDC), not zalcitabine. |
| PGx | Ibrahim_1991 | not_relevant | 0 | 0 | The paper describes pharmacokinetics of 2',3'-dideoxycytidine in rats and does not involve zalcitabine or any gene variant. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The study concerns FDOPA (L-DOPA tracer) pharmacokinetics in Parkinson's disease, not zalcitabine. |
| PGx | Ishikawa_1996 | not_relevant | 0 | 0 | The paper investigates the clinical significance of DOPA decarboxylase activity in Parkinson's disease using FDOPA PET, which is unrelated to the pharmacokinetics or pharmacodynamics of zalcitabine. |
| popPK | Jelnes_2007 | irrelevant | 0 | 0 | The study investigates liver stem cell regeneration in rodents and does not involve zalcitabine or pharmacokinetic parameters. |
| PGx | Jelnes_2007 | not_relevant | 0 | 0 | The paper focuses on the heterogeneity of liver oval cell phenotypes in rodent models of regeneration and does not involve zalcitabine or pharmacogenomics. |
| popPK | Jin_2006 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of transporter interaction (OAT1) and does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) for zalcitabine. |
| PGx | Jin_2006 | not_relevant | 5 | 8 | The study reports transporter-mediated cellular uptake changes in transfected cells (in vitro), but does not report pharmacogenomic effects on human PK/PD parameters based on genotypes. |
| popPK | Johansson_1992 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of disulfiram, not zalcitabine. |
| PGx | Johansson_1992 | not_relevant | 0 | 0 | The paper discusses disulfiram, not zalcitabine, and does not report pharmacogenomic effects on PK/PD parameters for the target drug. |
| popPK | Kaakkola_2010 | irrelevant | 0 | 0 | The paper is a review of COMT inhibitors (entacapone, tolcapone, nebicapone) for Parkinson's disease and does not contain pharmacokinetic data for zalcitabine. |
| PGx | Kaakkola_2010 | not_relevant | 0 | 0 | The paper discusses COMT inhibitors for Parkinson's disease and does not mention zalcitabine or pharmacogenomic effects. |
| popPK | Kaneko_2000 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy assay (EC50/CC50) and does not report pharmacokinetic parameters for zalcitabine. |
| PGx | Kaneko_2000 | not_relevant | 0 | 0 | The paper reports in vitro antiviral efficacy of zalcitabine against adenovirus but contains no pharmacogenomic analysis or gene variant effects. |
| popPK | Kaneko_2001 | irrelevant | 0 | 0 | The paper studies the antiviral activity of NMSO3 against adenovirus in vitro and does not involve zalcitabine pharmacokinetics. |
| PGx | Kaneko_2001 | not_relevant | 0 | 0 | The paper studies the antiviral activity of NMSO3 against adenovirus and does not mention zalcitabine or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Kaneko_2003 | irrelevant | 0 | 0 | The study is an in-vitro antiviral efficacy evaluation using zalcitabine as a comparator, with no pharmacokinetic or disposition parameters reported. |
| PGx | Kaneko_2003 | not_relevant | 0 | 0 | The paper studies the antiviral efficacy of sulfated sialyl lipid against adenovirus, comparing it to zalcitabine, but does not investigate the effect of genetic variants on zalcitabine's pharmacokinetics or pharmacodynamics. |
| popPK | Kelley_1987 | irrelevant | 0 | 0 | The study examines the pharmacokinetics of 2',3'-dideoxycytidine (ddC/zalcitabine), but the evidence provided does not contain the specific quantitative disposition parameters (CL, V, Q) required for population PK modeling, only half-life and qualitative descriptions, and zalcitabine is the subject drug but the prompt asks for specific PK parameters which are not clearly extracted as a model in the text provided. |
| PGx | Kelley_1987 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of zalcitabine in animal models without investigating the impact of specific gene variants or genotypes on these parameters. |
| popPK | Kraemmer_2016 | irrelevant | 0 | 0 | The paper is a clinical-genetic study regarding Parkinson's disease and impulse control disorders, with no pharmacokinetic data for zalcitabine. |
| PGx | Kraemmer_2016 | not_relevant | 0 | 0 | The paper investigates the prediction of impulse control disorders in Parkinson's disease, not the pharmacokinetics or pharmacodynamics of zalcitabine. |
| popPK | Kumar_1994 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro antiviral activity of new thymidine derivatives, not the pharmacokinetics of zalcitabine. |
| PGx | Kumar_1994 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro antiviral activity of prodrugs for FLT, but does not report on zalcitabine or any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Lavigne_2002 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cytochrome P450 enzymes and porphyria, and does not contain any pharmacokinetic data for zalcitabine. |
| PGx | Lavigne_2002 | not_relevant | 0 | 0 | The paper discusses cytochrome P450 enzymes and porphyrinogenic xenobiotics, but does not mention zalcitabine or any pharmacogenomic effects on its PK/PD. |
| popPK | Lee_1994 | irrelevant | 0 | 0 | The paper focuses on the anti-HIV activity and synergy of suksdorfin with nucleosides (ddI, ddC, AZT) and does not report any pharmacokinetic parameters for zalcitabine. |
| PGx | Lee_1994 | not_relevant | 0 | 0 | The paper discusses the antiviral activity of suksdorfin and its synergy with other drugs, but it does not mention zalcitabine or any pharmacogenomic effects on PK/PD parameters. |
| popPK | Li_2012 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological evaluation of HIV-1 inhibitors and does not contain any pharmacokinetic data for zalcitabine. |
| PGx | Li_2012 | not_relevant | 0 | 0 | The paper reports the synthesis and biological evaluation of novel HIV-1 NNRTIs; it does not report pharmacogenomic effects on the PK/PD of zalcitabine. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The paper describes a genetic association study for schizophrenia and contains no pharmacokinetic data for zalcitabine. |
| PGx | Li_2014 | not_relevant | 0 | 0 | The paper discusses schizophrenia treatment resistance and antipsychotic drugs (like clozapine), not zalcitabine. |
| popPK | Li_2018 | irrelevant | 0 | 0 | The paper is a review on the development of injectable drug-device combination products for biologics and does not contain pharmacokinetic data for zalcitabine. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The paper is a review of drug-device combination products for biologics and does not mention zalcitabine or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper reports a DDC genotype association with motor response to levodopa, not zalcitabine. |
| PGx | Li_2020_2 | not_relevant | 0 | 0 | The paper studies dopamine-related variants and heroin-dependence phenotypes, not zalcitabine pharmacokinetics or pharmacodynamics. |
| popPK | Liu_2000 | irrelevant | 0 | 0 | The paper studies the in vitro metabolism of nimodipine, not zalcitabine. |
| PGx | Liu_2000 | not_relevant | 0 | 0 | The paper investigates the metabolism of nimodipine, not zalcitabine. |
| popPK | Lubberink_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the PET tracer [11C]5-Hydroxy-tryptophan, not zalcitabine. |
| PGx | Lubberink_2020 | not_relevant | 0 | 0 | The study is a PET imaging analysis of serotonin biosynthesis in monkeys and does not involve zalcitabine or pharmacogenomics. |
| popPK | Löhle_2018 | irrelevant | 0 | 0 | The paper investigates genetic polymorphisms and dopamine turnover in Parkinson's disease using PET imaging, and contains no pharmacokinetic data for zalcitabine. |
| PGx | Löhle_2018 | not_relevant | 0 | 0 | The study investigates dopamine turnover in Parkinson's disease patients and does not involve the drug zalcitabine. |
| PGx | Löhle_2022 | not_relevant | 0 | 0 | The paper studies MAOB genotype and levodopa-associated dyskinesia in Parkinson’s disease, not zalcitabine pharmacokinetics or pharmacodynamics. |
| PGx | Mastrangelo_2023 | not_relevant | 0 | 0 | This review concerns inherited biogenic amine disorders and reports no pharmacogenomic effects on zalcitabine PK or PD parameters. |
| popPK | Meyer_2020 | irrelevant | 0 | 0 | The paper describes a nanotheranostic platform for atherosclerosis and does not mention zalcitabine or report any pharmacokinetic parameters. |
| PGx | Meyer_2020 | not_relevant | 0 | 0 | The paper describes a nanotheranostic platform for atherosclerosis involving Dopa decarboxylase and does not mention zalcitabine or pharmacogenomic effects on PK/PD parameters. |
| popPK | Micozzi_2014 | irrelevant | 0 | 0 | The paper is a biochemical characterization of cytidine deaminase variants focusing on cytarabine metabolism, with no pharmacokinetic data for zalcitabine. |
| PGx | Micozzi_2014 | not_relevant | 0 | 0 | The study characterizes cytidine deaminase variants and their effect on cytarabine metabolism, but does not mention zalcitabine or report PK/PD parameters for it. |
| popPK | Miesel_1995 | irrelevant | 0 | 0 | The paper investigates the anti-retroviral activity of superoxide dismutase and does not report pharmacokinetic parameters for zalcitabine. |
| PGx | Miesel_1995 | not_relevant | 0 | 0 | The paper studies the antiviral activity of Cu2Zn2 superoxide dismutase and does not mention zalcitabine or pharmacogenomic effects. |
| popPK | Miyano-Kurosaki_1994 | irrelevant | 0 | 0 | The paper describes an in-vitro antiviral activity assay using cell lines and does not report any pharmacokinetic parameters for zalcitabine or any other drug. |
| PGx | Miyano-Kurosaki_1994 | not_relevant | 0 | 0 | The paper evaluates antiviral activity in a cell line assay and does not report pharmacogenomic effects on zalcitabine. |
| popPK | Moreau_2015 | irrelevant | 0 | 0 | The paper is a pharmacogenetic study on Parkinson's disease focusing on l-DOPA and methylphenidate, with no mention of zalcitabine or its pharmacokinetics. |
| PGx | Moreau_2015 | not_relevant | 2 | 0 | The paper analyzes pharmacogenomic effects on the response to l-DOPA and methylphenidate, not zalcitabine. |
| popPK | Nagai_2012 | irrelevant | 0 | 0 | The paper studies disulfiram (DSF) and its metabolite DDC, not zalcitabine; there is no mention of zalcitabine in the evidence. |
| PGx | Nagai_2012 | not_relevant | 0 | 0 | The paper studies the PK/PD of disulfiram eye drops for cataracts and does not investigate zalcitabine or any pharmacogenomic effects. |
| popPK | Niitani_2010 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of transporter inhibition, not a pharmacokinetic study reporting quantitative disposition parameters for zalcitabine. |
| PGx | Niitani_2010 | not_relevant | 0 | 0 | The paper reports on the transport characteristics of mouse CNT1 and its similarity to human CNT1, but does not link specific human genetic variants to changes in PK or PD parameters for zalcitabine. |
| popPK | Nishigaki_1985 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding zalcitabine pharmacokinetics. |
| PGx | Nishigaki_1985 | not_relevant | 0 | 0 | The text contains no information about zalcitabine, gene variants, or pharmacokinetic/pharmacodynamic parameters; it is metadata about a document parsing tool. |
| popPK | Niu_2017 | irrelevant | 0 | 0 | The study investigates the neuroprotective effects of 2',3'-dideoxycytidine (DDC) in a Parkinson's disease model and does not involve zalcitabine or report its pharmacokinetic parameters. |
| PGx | Niu_2017 | not_relevant | 0 | 0 | The paper studies 2',3'-dideoxycytidine (DDC) in a Parkinson's disease model, not zalcitabine, and reports no pharmacogenomic effects on PK/PD parameters. |
| PGx | Oh_2006 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between zalcitabine and NSAIDs in rats, not pharmacogenomic effects of gene variants. |
| popPK | Owens_1992 | irrelevant | 0 | 0 | The paper describes molecular mechanisms of drug resistance (mutations in dCK) in cell lines and does not report pharmacokinetic parameters for zalcitabine. |
| popPK | Pereira_2003 | irrelevant | 0 | 0 | The study is an in-vitro virology assessment of a new drug (APHS) against HIV, and zalcitabine is mentioned only as a comparator for drug-resistant strains, with no PK data reported. |
| PGx | Pereira_2003 | not_relevant | 0 | 0 | The paper reports in vitro drug-drug interactions and antiviral activity, not a pharmacogenomic effect on a PK/PD parameter. |
| popPK | Piechota_2006 | irrelevant | 0 | 0 | The study is an in-vitro investigation of mitochondrial genome expression in HeLa cells and does not report pharmacokinetic parameters for zalcitabine. |
| PGx | Piechota_2006 | not_relevant | 0 | 0 | The study investigates mitochondrial genome responses to inhibitors (thiamphenicol, ethidium bromide, dideoxycytidine) in HeLa cells, not the pharmacogenomics of zalcitabine. |
| popPK | Pontikis_2000 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antiviral activity of AZT and ddC conjugates, with no mention of zalcitabine or its pharmacokinetics. |
| PGx | Pontikis_2000 | not_relevant | 0 | 0 | The paper reports the synthesis and activity of conjugates of other antiretrovirals (AZT, ddC) and does not study zalcitabine or any pharmacogenomic effects. |
| popPK | Premanathan_1997 | irrelevant | 0 | 0 | The paper investigates the antiviral activity of lecithinized superoxide dismutase (PC-SOD) in cell cultures and does not report pharmacokinetic parameters for zalcitabine. |
| PGx | Premanathan_1997 | not_relevant | 0 | 0 | The paper studies an HIV inhibitor (PC-SOD) and its interactions with AZT/ddI/ddC, but does not investigate the pharmacokinetics or pharmacodynamics of zalcitabine (ddC) in relation to any genetic variants. |
| PGx | Prosperi_2012 | not_relevant | 0 | 0 | The study reports toxicity-related discontinuation associated with zalcitabine use, but no gene variant, genotype, or phenotype effect on zalcitabine PK or PD parameters. |
| popPK | Qari_2002 | irrelevant | 0 | 0 | The study is a mechanistic/virological assay for detecting HIV resistance, not a pharmacokinetic study for zalcitabine. |
| PGx | Qari_2002 | not_relevant | 0 | 0 | The paper describes a phenotypic assay for detecting HIV drug resistance mutations (e.g., Q151M) affecting viral reverse transcriptase, not a human pharmacogenomic variant affecting the PK or PD of zalcitabine. |
| popPK | Reed_1989 | irrelevant | 0 | 0 | The paper is a study on 4-ethyl-DDP-induced protoporphyria in hamsters and does not involve zalcitabine or its pharmacokinetics. |
| PGx | Reed_1989 | not_relevant | 0 | 0 | The paper does not mention zalcitabine and focuses on drug-induced protoporphyria in hamsters. |
| popPK | Ren_2014 | irrelevant | 0 | 0 | The paper focuses on DOPA decarboxylase inhibitors and contains no information regarding zalcitabine pharmacokinetics. |
| PGx | Ren_2014 | not_relevant | 0 | 0 | The paper studies novel DOPA decarboxylase inhibitors from Euonymus glabra, which is unrelated to zalcitabine and does not report pharmacogenomic effects. |
| popPK | Rosenblum_2001 | irrelevant | 0 | 0 | The paper is an in-vitro study on the antiviral efficacy (IC50) of nucleoside analogues against retroviruses and does not report pharmacokinetic disposition parameters for zalcitabine. |
| PGx | Rosenblum_2001 | not_relevant | 0 | 0 | The paper tests the activity of NRTIs against different retroviruses in vitro and does not report on human gene variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Sabo_2000 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of nevirapine and lamivudine, with zalcitabine listed only as a background therapy (comparator/co-administered). |
| PGx | Sabo_2000 | not_relevant | 0 | 0 | The study focuses on drug-drug interactions (lamivudine, nevirapine, cotrimoxazole) and does not report pharmacogenomic effects on zalcitabine. |
| popPK | Sahai_1996 | irrelevant | 1 | 0 | This is a review paper discussing general drug interactions of antiretroviral agents and does not report specific quantitative pharmacokinetic parameters for zalcitabine. |
| PGx | Sahai_1996 | not_relevant | 0 | 0 | The text is a general review of drug-drug interactions, not a pharmacogenomic study reporting genotype effects on PK/PD. |
| popPK | Said_2021 | irrelevant | 0 | 0 | The paper studies the formulation of Diethyldithiocarbamate Copper II (DDC-Cu) for breast cancer, not the pharmacokinetics of zalcitabine. |
| PGx | Said_2021 | not_relevant | 0 | 0 | The paper focuses on a drug delivery system for a different compound (DDC-Cu), not zalcitabine, and does not investigate pharmacogenomic effects. |
| popPK | Salvatori_2001 | irrelevant | 0 | 0 | The paper reports in vitro antiviral efficacy (EC50 values) of cytidine analogues, not the pharmacokinetic disposition parameters (CL, V, t1/2) of zalcitabine. |
| PGx | Salvatori_2001 | not_relevant | 0 | 0 | The paper evaluates anti-viral activity of cytidine analogues in an in vitro MVV model and does not report pharmacogenomic effects on the PK or PD of zalcitabine. |
| popPK | Schmider_1997 | irrelevant | 0 | 0 | The paper studies the in vitro metabolism of dextromethorphan, not the pharmacokinetics of zalcitabine. |
| PGx | Schmider_1997 | not_relevant | 0 | 0 | The paper focuses on the in vitro metabolism of dextromethorphan, not zalcitabine. |
| popPK | Schwendener_1999 | irrelevant | 0 | 0 | The study focuses on amphiphilic heterodinucleoside phosphates (dimers) and does not provide population pharmacokinetic parameters for the specific drug zalcitabine (ddC) itself. |
| PGx | Schwendener_1999 | not_relevant | 0 | 0 | The paper describes the synthesis and pharmacological properties of a novel heterodinucleoside compound, not the pharmacogenomics of zalcitabine. |
| popPK | Senek_2020 | irrelevant | 0 | 0 | The population-PK model and numeric parameters are for levodopa, not zalcitabine. |
| PGx | Senek_2020 | not_relevant | 0 | 0 | This paper studies genetic effects on levodopa pharmacokinetics, not zalcitabine. |
| popPK | Shirasaka_1995 | irrelevant | 0 | 0 | The paper focuses on HIV-1 drug resistance mutations and in-vitro IC50 values, not the pharmacokinetics of zalcitabine. |
| PGx | Shirasaka_1995 | not_relevant | 0 | 0 | The paper describes viral resistance mutations (HIV-1 RT genotype) affecting drug sensitivity, not human host pharmacogenomics affecting zalcitabine PK/PD. |
| popPK | Siddique_2009 | irrelevant | 0 | 0 | The paper is an in-vitro study on neuroendocrine tumor cell lines and does not involve zalcitabine or pharmacokinetic parameters. |
| PGx | Siddique_2009 | not_relevant | 0 | 0 | The paper characterizes cell lines for neuroendocrine tumor research and does not involve the drug zalcitabine or pharmacogenomic effects on its PK/PD. |
| popPK | Silveira_2026 | irrelevant | 0 | 0 | The evidence describes the pharmacokinetics of Me-DDC and Me-DTC (likely tyrosine kinase inhibitors like dasatinib or nilotinib metabolites/analogs), not zalcitabine. |
| PGx | Silveira_2026 | not_relevant | 0 | 0 | The paper reports PK data for Me-DDC and Me-DTC (triamterene derivatives), not zalcitabine, and contains no information on genetic variants. |
| popPK | Solimano_1990 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of 2',3'-dideoxycytidine (ddCyd), not zalcitabine. |
| PGx | Solimano_1990 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic modeling strategy for drug delivery using red blood cells, not a pharmacogenomic study involving gene variants. |
| popPK | Solovieva_2019 | irrelevant | 0 | 0 | The paper investigates the cytotoxicity and oxidation mechanism of diethyldithiocarbamate (DDC) and disulfiram (DSF), not the pharmacokinetics of zalcitabine. |
| PGx | Solovieva_2019 | not_relevant | 0 | 0 | The paper studies the interaction between diethyldithiocarbamate and hydroxycobalamin, not the drug zalcitabine, and reports no genetic variants. |
| popPK | Stretcher_1995 | irrelevant | 0 | 0 | The paper is a review discussing the lack of pharmacokinetic data for zalcitabine and does not report any quantitative parameters. |
| PGx | Stretcher_1995 | not_relevant | 0 | 0 | The text states that pharmacokinetic and pharmacodynamic relationships for zalcitabine have not been studied in patients and does not report any genetic variants. |
| popPK | Suphanchaimat_2021 | irrelevant | 0 | 0 | This COVID-19 vaccination and case-finding model reports no zalcitabine pharmacokinetic parameters. |
| popPK | Tanaka_1997 | irrelevant | 0 | 0 | The paper describes the isolation and biological activity of chloropeptins as anti-HIV agents, using zalcitabine only as a comparator for synergistic effects in vitro; it contains no pharmacokinetic data for zalcitabine. |
| PGx | Tanaka_1997 | not_relevant | 0 | 0 | The paper describes the fermentation and characterization of *Streptomyces* strain WK-3419 for chloropeptin production, unrelated to zalcitabine or pharmacogenomics. |
| popPK | Tay_2019 | irrelevant | 0 | 0 | The study focuses on pharmacokinetics of halogenated flame retardants (e.g., BDEs), not the drug zalcitabine. |
| PGx | Tay_2019 | not_relevant | 0 | 0 | The paper analyzes halogenated flame retardants, not the drug zalcitabine, and does not report pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Taylor_1991 | irrelevant | 0 | 0 | The paper studies the antiviral mechanism of 6-O-butanoylcastanospermine (MDL 28,574) in vitro and does not mention zalcitabine or report any pharmacokinetic parameters. |
| PGx | Taylor_1991 | not_relevant | 0 | 0 | The paper discusses the antiviral mechanism and activity of MDL 28,574, not the pharmacokinetics/pharmacodynamics of zalcitabine or the impact of gene variants on zalcitabine. |
| popPK | Törnevik_1990 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism and toxicity of dideoxycytidine (ddCyd) and AZT in cell lines, not the population pharmacokinetics of zalcitabine. |
| PGx | Törnevik_1990 | not_relevant | 0 | 0 | The paper discusses the metabolism and toxicity of zalcitabine (ddC) in CEM cells and its interaction with thymidine/AZT, but does not report on the effect of a specific human gene variant/genotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Ungureanu_2024 | not_relevant | 0 | 0 | The paper assesses drug–drug interactions in prostate cancer treatment and psychotropics, not pharmacogenomic effects on zalcitabine. |
| PGx | Vagany_2021 | not_relevant | 0 | 0 | The paper studies ALAS1 genotype effects on hepatic responses to phenobarbital and 4-ethyl-DDC, not zalcitabine PK or PD parameters. |
| popPK | Vanhove_1997 | irrelevant | 1 | 0 | The study reports exposure-response relationships for drug effects, not specific pharmacokinetic disposition parameters (like CL, V, or half-life) for zalcitabine, and no numeric PK values are present in the evidence. |
| PGx | Vanhove_1997 | not_relevant | 0 | 0 | The paper describes general exposure-response relationships in a clinical trial, but does not investigate the influence of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Volsky_1992 | irrelevant | 0 | 0 | The study evaluates in vitro antiviral activity of HIV-1 inhibitors (AZT, suramin, dideoxycytidine) and does not report pharmacokinetic parameters for zalcitabine. |
| PGx | Volsky_1992 | not_relevant | 0 | 0 | The paper evaluates in vitro assay parameters for HIV-1 replication and drug efficacy but does not investigate the influence of gene variants on the pharmacokinetics or pharmacodynamics of zalcitabine. |
| popPK | Vortherms_2009 | irrelevant | 0 | 0 | The paper is an in-vitro study on methotrexate conjugates and does not involve zalcitabine or pharmacokinetic parameters. |
| PGx | Vortherms_2009 | not_relevant | 0 | 0 | The paper reports in vitro cytotoxicity of drug conjugates and does not involve zalcitabine, pharmacokinetics, or pharmacogenomics. |
| PGx | Vuletić_2021 | not_relevant | 0 | 0 | This review concerns Parkinson’s disease pharmacogenomics and does not report a genotype-related PK or PD effect for zalcitabine. |
| popPK | Wei_2008 | irrelevant | 0 | 0 | The study focuses on electrophysiological effects of diethyldithiocarbamate and sulfur dioxide on rat ventricular myocytes and does not involve zalcitabine or its pharmacokinetics. |
| PGx | Wei_2008 | not_relevant | 0 | 0 | The paper studies the effects of diethyldithiocarbamate and sulfur dioxide on cardiac sodium channels in rats and does not involve zalcitabine or pharmacogenomics. |
| popPK | Weiss_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of BCRP inhibition by anti-HIV drugs, reporting IC50 values for transporter inhibition rather than pharmacokinetic disposition parameters (CL, V, half-life) for zalcitabine. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | The study investigates BCRP inhibition by various drugs but explicitly states that zalcitabine had no effect, and it does not involve any genetic variants or pharmacogenomics. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | The study reports in-vitro antiviral susceptibility (EC50 fold changes) of zalcitabine against various viruses, not pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Witvrouw_2004 | not_relevant | 0 | 0 | The paper evaluates viral susceptibility (EC50) of various HIV strains to antiretrovirals, not the effect of human host gene variants on the pharmacokinetics or pharmacodynamics of zalcitabine. |
| PGx | Xiao_2020 | not_relevant | 0 | 0 | The paper studies melanin synthesis in ladybird beetles and reports no zalcitabine treatment or pharmacokinetic/pharmacodynamic effects. |
| PGx | Xie_2021 | not_relevant | 0 | 0 | The paper studies IDH1 genotype and MRI biomarkers in gliomas, not zalcitabine pharmacokinetics or pharmacodynamics. |
| popPK | Xue_2021 | irrelevant | 0 | 0 | The paper studies a Chinese herbal decoction in mice and does not involve zalcitabine. |
| PGx | Xue_2021 | not_relevant | 0 | 0 | The paper studies a Chinese herbal decoction (Da-Huang-Xiao-Shi) on cholestasis and does not mention zalcitabine or pharmacogenomic effects. |
| popPK | Yusa_1994 | irrelevant | 0 | 0 | The study investigates the antiviral properties of daphnodorins in cell cultures and contains no pharmacokinetic data for zalcitabine. |
| PGx | Yusa_1994 | not_relevant | 0 | 0 | The paper studies daphnodorins, not zalcitabine, and does not report any pharmacogenomic effects. |
| popPK | Zeng_1998 | irrelevant | 0 | 0 | The study investigates the metabolism of ivermectin, not zalcitabine, and does not report any pharmacokinetic parameters for the subject drug. |
| PGx | Zeng_1998 | not_relevant | 0 | 0 | The paper discusses ivermectin metabolism and CYP3A4, but does not mention zalcitabine or any pharmacogenomic effects on its PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzalcitabine%5D&body=Drug%3A%20zalcitabine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zalcitabine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 05:51 UTC</sub>
