<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;glycine&quot;}]"></div>

# glycine

- **generic name:** glycine
- **ATC codes:** `B05CX03`
- **DrugBank:** [DB00145](https://go.drugbank.com/drugs/DB00145) · **PubChem:** [CID 750](https://pubchem.ncbi.nlm.nih.gov/compound/750)
- **molar mass:** 75.0666 g/mol (C2H5NO2) — DrugBank
- **groups:** approved, investigational, nutraceutical, vet_approved

## About

Glycine, a proteinogenic amino acid that also acts as a neurotransmitter, is used as an irrigating solution and has been used in peptic ulcer disease. It is an approved, generally available compound, also approved for veterinary use and considered a nutraceutical.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q620730](https://www.wikidata.org/wiki/Q620730) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:14 | 9:55 | 0/0/0 | 1/1/0 | 0/0/0 | 713,221/17,469 | einfracz / qwen3.8-27b | 62 | 14/69 | 59/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Xu_2025_hTRPC5_current](drugs/drug_glycine/pd_Xu_2025_hTRPC5_current.md) | TRPC5 current ← N-palmitoyl glycine · direct Emax (saturable) effect | — | Xu H et al., N-palmitoyl glycine differentially modu…, Communications biology (2025) | [10.1038/s42003-025-09296-x](https://doi.org/10.1038/s42003-025-09296-x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Xu_2025_hTRPM4_current](drugs/drug_glycine/pd_Xu_2025_hTRPM4_current.md) | TRPM4 current ← N-palmitoyl glycine · direct sigmoid Emax (Hill) effect | — | Xu H et al., N-palmitoyl glycine differentially modu…, Communications biology (2025) | [10.1038/s42003-025-09296-x](https://doi.org/10.1038/s42003-025-09296-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">monkey</span> | [Pereira_2024_ARGS](drugs/drug_glycine/pd_Pereira_2024_ARGS.md) | ARGS ← M6495 · indirect response — drug inhibits the production of ARGS | — | Pereira JNS et al., Translational pharmacokinetic and pharm…, Journal of pharmacokinetics… (2024) | [10.1007/s10928-024-09958-z](https://doi.org/10.1007/s10928-024-09958-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glycine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AGXT (substrate), AGXT2 (product), ALAS1 (substrate), ALAS2 (substrate), AMT (substrate), BAAT (substrate), DLD (substrate), GARS1 (substrate), GATM (substrate), GCAT (substrate), GCSH (substrate), GLDC (substrate), GLRA1 (target), GLRA2 (target), GLRA3 (target), GLRB (target), GLYAT (substrate), GLYATL1 (substrate), GLYATL2 (substrate), GNMT (substrate), GPR18 (substrate), GRIN2A (target), GRIN2C (target), GRIN3B (substrate), GSS (substrate), PIPOX (product), SHMT1 (product), SHMT2 (product), SLC16A10 (inhibitor), SLC16A10 (substrate), SLC32A1 (substrate), SLC36A1 (substrate), SLC6A5 (substrate), SLC6A9 (substrate), Serine hydroxymethyltransferase (product).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3763 matched, 222 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Deutz_2025.pdf` | Deutz NEP et al., The acute changes in intracellular amin…, Clinical nutrition (Edinbur… (2025) | popPK | 8 | [10.1016/j.clnu.2025.07.026](https://doi.org/10.1016/j.clnu.2025.07.026) | [40784157](https://pubmed.ncbi.nlm.nih.gov/40784157) | The study reports quantitative compartmental PK changes (specifically a +35% increase in clearance) for glycine in a sepsis model, but lacks absolute numeric parameter values (e.g., specific CL in mL/min or V in L) which are likely in the full text or supplementary data. |
| `Modi_1995.pdf` | Modi NB et al., Pharmacokinetics and pharmacodynamics o…, Journal of cardiovascular p… (1995) | pd | 5 | [10.1097/00005344-199506000-00006](https://doi.org/10.1097/00005344-199506000-00006) | [7564333](https://www.ncbi.nlm.nih.gov/pubmed/7564333) | metadata signals extractable PD data (IC50) |
| `Virginio_1997.pdf` | Virginio C et al., Glycine-activated whole cell and single…, Brain research. Development… (1997) | pd | 5 | [10.1016/s0165-3806(96)00164-2](https://doi.org/10.1016/s0165-3806(96)00164-2) | [9027402](https://www.ncbi.nlm.nih.gov/pubmed/9027402) | metadata signals extractable PD data (IC50) |
| `Ault_1994.pdf` | Ault B et al., GABAA receptor-mediated excitation of n…, Neuropharmacology (1994) | pd | 4 | [10.1016/0028-3908(94)90104-x](https://doi.org/10.1016/0028-3908(94)90104-x) | [8183434](https://www.ncbi.nlm.nih.gov/pubmed/8183434) | metadata signals extractable PD data (EC50) |
| `Berger_1995.pdf` | Berger ML, On the true affinity of glycine for its…, Journal of pharmacological… (1995) | pd | 4 | [10.1016/1056-8719(95)00028-g](https://doi.org/10.1016/1056-8719(95)00028-g) | [8563036](https://www.ncbi.nlm.nih.gov/pubmed/8563036) | metadata signals extractable PD data (IC50) |
| `Brosnan_2007.pdf` | Brosnan RJ et al., Ammonia has anesthetic properties, Anesthesia and analgesia (2007) | pd | 4 | [10.1213/01.ane.0000264072.97705.0f](https://doi.org/10.1213/01.ane.0000264072.97705.0f) | [17513636](https://www.ncbi.nlm.nih.gov/pubmed/17513636) | metadata signals extractable PD data (EC50) |
| `Bukanova_2017.pdf` | Bukanova JV et al., The influence of acidic media on the ef…, Neurochemistry international (2017) | pd | 4 | [10.1016/j.neuint.2017.09.007](https://doi.org/10.1016/j.neuint.2017.09.007) | [28919253](https://www.ncbi.nlm.nih.gov/pubmed/28919253) | metadata signals extractable PD data (EC50) |
| `Chen_2018.pdf` | Chen F et al., Analysis of RPA190 revealed multiple po…, Pest management science (2018) | pd | 4 | [10.1002/ps.4893](https://doi.org/10.1002/ps.4893) | [29457681](https://www.ncbi.nlm.nih.gov/pubmed/29457681) | metadata signals extractable PD data (EC50) |
| `Clos_1996.pdf` | Clos MV et al., Effect of 1-aminocyclopropanecarboxylic…, British journal of pharmaco… (1996) | pd | 4 | [10.1111/j.1476-5381.1996.tb15484.x](https://doi.org/10.1111/j.1476-5381.1996.tb15484.x) | [8799560](https://www.ncbi.nlm.nih.gov/pubmed/8799560) | metadata signals extractable PD data (Emax) |
| `Habibi_2023.pdf` | Habibi S et al., The Haemonchus contortus LGC-39 subunit…, International journal for p… (2023) | pd | 4 | [10.1016/j.ijpddr.2023.04.001](https://doi.org/10.1016/j.ijpddr.2023.04.001) | [37054482](https://www.ncbi.nlm.nih.gov/pubmed/37054482) | metadata signals extractable PD data (EC50) |
| `Henzi_1992.pdf` | Henzi V et al., L-proline activates glutamate and glyci…, Molecular pharmacology (1992) | pd | 4 | not captured | [1349155](https://www.ncbi.nlm.nih.gov/pubmed/1349155) | metadata signals extractable PD data (EC50) |
| `Hughes_2020.pdf` | Hughes ME et al., Many Proline Residues in the Extracellu…, ACS chemical neuroscience (2020) | pd | 4 | [10.1021/acschemneuro.0c00320](https://doi.org/10.1021/acschemneuro.0c00320) | [32786326](https://www.ncbi.nlm.nih.gov/pubmed/32786326) | metadata signals extractable PD data (EC50) |
| `Chen_2025.pdf` | Chen Y et al., 1β-Hydroxydeoxycholic acid as an endoge…, Drug metabolism and disposi… (2025) | pgx | 7 | [10.1016/j.dmd.2025.100141](https://doi.org/10.1016/j.dmd.2025.100141) | [40914146](https://www.ncbi.nlm.nih.gov/pubmed/40914146) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Gilissen_2000.pdf` | Gilissen RA et al., Human hepatic metabolism of a novel 2-c…, Xenobiotica; the fate of fo… (2000) | pgx | 7 | [10.1080/004982500433273](https://doi.org/10.1080/004982500433273) | [11055263](https://www.ncbi.nlm.nih.gov/pubmed/11055263) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Giegling_2011.pdf` | Giegling I et al., Glutamatergic gene variants impact the…, Pharmacogenetics and genomi… (2011) | pgx | 5 | [10.1097/FPC.0b013e32833efb18](https://doi.org/10.1097/FPC.0b013e32833efb18) | [20859245](https://www.ncbi.nlm.nih.gov/pubmed/20859245) | metadata signals extractable PGX data (SLC6A5) |
| `Madhuri_2021.pdf` | Madhuri V et al., Osteogenesis imperfecta: Novel genetic…, Annals of human genetics (2021) | pgx | 5 | [10.1111/ahg.12403](https://doi.org/10.1111/ahg.12403) | [32770541](https://www.ncbi.nlm.nih.gov/pubmed/32770541) | metadata signals extractable PGX data (SLC34A1) |
| `Pérez-Solís_2021.pdf` | Pérez-Solís D et al., Novel UGT1A1 Gene Mutations in a Boy wi…, Journal of pediatric geneti… (2021) | pgx | 5 | [10.1055/s-0040-1714361](https://doi.org/10.1055/s-0040-1714361) | [34849280](https://www.ncbi.nlm.nih.gov/pubmed/34849280) | metadata signals extractable PGX data (UGT1A1) |

<sub>queue written 2026-10-07T15:10:06.488451+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2023 | not_relevant | 0 | 0 | The paper studies plant physiology (maize) and nickel toxicity, not human pharmacogenomics or glycine drug pharmacokinetics/pharmacodynamics. |
| popPK | Abd_2025 | irrelevant | 0 | 0 | The study is a recombinant protein expression and antiviral activity analysis of a peptide containing glycine, not a pharmacokinetic study of free glycine. |
| PD | Abd_2025 | not_relevant | 0 | 0 | The paper reports antiviral activity (EC50) for a recombinant peptide (shepherin II), not for the drug glycine. |
| popPK | Abdelsattar_2026 | irrelevant | 0 | 0 | The study analyzes glycine as a metabolite biomarker for liver disease diagnosis, not as a subject drug for pharmacokinetic evaluation. |
| PD | Abdelsattar_2026 | not_relevant | 0 | 0 | The paper is a cross-sectional metabolomics study using machine learning for disease classification and does not report any pharmacodynamic or exposure-response relationship for glycine. |
| popPK | Ackaert_2010 | irrelevant | 0 | 0 | The study investigates 5-OH-DPAT prodrugs (including glycine-5-OH-DPAT), not glycine itself as a subject drug with its own disposition parameters. |
| popPK | Ahrens_2009 | irrelevant | 0 | 0 | The study investigates the pharmacological modulation of glycine receptors by ajulemic acid using in vitro patch clamp techniques, not the pharmacokinetics of glycine itself. |
| popPK | Akbari_2024 | irrelevant | 0 | 0 | The paper is a mechanistic/chemical engineering study on CO2 fixation pathways using glycine as a metabolic intermediate, not a pharmacokinetic study of glycine as a drug. |
| popPK | Alam_2017 | irrelevant | 0 | 0 | The study evaluates the antiemetic and antioxidant activity of N-(2-mercaptopropionyl) glycine (MPG) in pigeons, not the pharmacokinetic parameters of glycine itself. |
| popPK | Ali_2026 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of ivermectin, baicalin, and DL-kavain on glycine receptors, not the pharmacokinetics of glycine as a drug. |
| PGx | Alkim_2022 | not_relevant | 0 | 0 | The paper studies E. coli metabolic pathways (threonine/glycine) and is unrelated to pharmacogenomics or drug PK/PD. |
| popPK | Arias_2020 | irrelevant | 0 | 0 | The paper investigates the pharmacodynamics and molecular mechanisms of coronaridine congeners (GABA/glycine receptor modulators) and does not report any pharmacokinetic parameters for glycine. |
| PGx | Arribas-Carreira_2024 | not_relevant | 0 | 0 | The study investigates a metabolic disease mechanism (glycine metabolism) rather than the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Artigas_2018 | not_relevant | 0 | 0 | The paper investigates aluminum stress in rhizobia and soybeans, which is unrelated to human pharmacogenomics or the PK/PD of the drug glycine. |
| popPK | Ault_1994 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Ault_1994 | not_relevant | 0 | 0 | The paper investigates the mechanism of GABAA receptor-mediated excitation in a rat spinal cord preparation and does not report a pharmacodynamic exposure-response or dose-response relationship for glycine. |
| popPK | Bagheri_2024 | irrelevant | 0 | 0 | The study is a metabolomic analysis of bariatric surgery outcomes where glycine is a measured metabolite, not a subject drug for pharmacokinetic parameter estimation. |
| popPK | Barbara_2009 | irrelevant | 0 | 0 | The paper investigates the electrophysiological effects of N-arachidonoyl glycine (NAGly) on calcium channels, not the pharmacokinetics of the amino acid glycine itself. |
| popPK | Barsch_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of glycine transporters and receptors, not a pharmacokinetic study reporting disposition parameters for glycine. |
| popPK | Bartkowiak_2026 | irrelevant | 0 | 0 | The paper is a transcriptomic study in zebrafish focusing on GABA modulators (ivermectin, propofol) and does not report any pharmacokinetic parameters for glycine. |
| PD | Bartkowiak_2026 | not_relevant | 0 | 0 | The paper focuses on transcriptomic gene expression changes in zebrafish neurons following exposure to ivermectin and propofol, and does not report any pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response relationships for glycine. |
| popPK | Bayliss_2000 | irrelevant | 0 | 0 | The paper discusses the molecular mechanism of nuclear transport and mentions glycine only as an amino acid residue in nucleoporins, not as a drug subject to pharmacokinetic analysis. |
| popPK | Berger_1995 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | Berk_1976 | irrelevant | 0 | 0 | The study focuses on bilirubin pharmacokinetics and erythrokinetics, using glycine only as a radioactive label for erythrocytes, not as the subject drug for PK parameter estimation. |
| popPK | Blakebrough-Hall_2022 | irrelevant | 0 | 0 | The study is an epidemiological analysis of bovine respiratory disease outcomes where glycine is merely a measured diagnostic metabolite, not the subject of a pharmacokinetic study. |
| popPK | Blevins_1995 | irrelevant | 0 | 0 | The study is an in vitro pharmacological assessment of NMDA receptor sensitivity where glycine acts as a co-agonist, not a pharmacokinetic study of glycine's disposition. |
| popPK | Bodet-Milin_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a bispecific antibody (TF2) and a peptide (IMP288) for radioimmunotherapy, not glycine as a subject drug. |
| PGx | Bonelli_2020 | not_relevant | 0 | 0 | The paper reports metabolic changes associated with a disease phenotype (MacTel) rather than pharmacokinetic or pharmacodynamic effects of a drug administration. |
| PD | Boutin_1993 | not_relevant | 0 | 0 | The paper describes the purification and biochemical characterization of an enzyme (N-myristoyltransferase) and reports an IC50 for a synthetic inhibitor, but it does not report a pharmacodynamic or exposure-response relationship for the drug glycine. |
| popPK | Brosnan_2007 | irrelevant | 0 | 0 | no_text gate: only 33 chars of text extracted (&lt; 400) |
| PD | Brosnan_2007 | not_relevant | 0 | 0 | The paper discusses the anesthetic properties of ammonia, not glycine, and does not report any pharmacodynamic or exposure-response relationship for glycine. |
| PD | Bukanova_2017 | not_relevant | 4 | 2 | The paper describes qualitative dose-dependent effects of protons and Aβ on glycine receptor function but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for glycine itself. |
| popPK | Bühler_2015 | irrelevant | 0 | 0 | The study is a dental materials analysis examining the surface roughness of human teeth after exposure to air polishing powders containing glycine, not a pharmacokinetic study of glycine. |
| popPK | Cantwell_2026 | irrelevant | 0 | 0 | The study characterizes a GlyT2 inhibitor (RPI-GLYT2-82) and reports PK parameters for the inhibitor in mice, not for glycine. |
| PD | Carling_1993 | not_relevant | 3 | 2 | The paper reports in vitro binding affinities (IC50, Kb) and a single in vivo ED50 for a specific compound, but does not provide a concentration-effect curve, dose-response relationship, or PK/PD model for glycine itself. |
| PGx | Cenacchi_2015 | not_relevant | 0 | 0 | The paper describes the general metabolism of a PDE4 inhibitor in various species and does not report on glycine pharmacokinetics or any pharmacogenomic effects. |
| popPK | Chang_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of norfloxacin-glycine acetate (a formulation), measuring the disposition of the active drug norfloxacin, not glycine. |
| popPK | Chayrov_2022 | irrelevant | 0 | 0 | The study focuses on the neuroprotective effects and physicochemical properties (solubility) of novel memantine analogues containing glycine derivatives, not the pharmacokinetics of glycine itself. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| PD | Chen_2018 | not_relevant | 0 | 0 | The paper analyzes genetic mutations in Phytophthora infestans associated with metalaxyl resistance, not the pharmacodynamics of glycine. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper focuses on a drug-drug interaction (fluconazole inhibiting CYP3A) and biomarker utility, containing no data on genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Chen_2025_2 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for remimazolam, not glycine. |
| PD | Chen_2025_2 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for remimazolam, but it does not include any pharmacodynamic (PD) modeling, exposure-response analysis, or numeric PD parameters. |
| PGx | Claassens_2022 | not_relevant | 0 | 0 | This paper focuses on synthetic biology and metabolic engineering of the reductive glycine pathway, not on pharmacogenomics. |
| popPK | Clos_1996 | irrelevant | 0 | 0 | no_text gate: only 138 chars of text extracted (&lt; 400) |
| PD | Clos_1996 | not_relevant | 0 | 0 | The paper investigates the effect of 1-aminocyclopropanecarboxylic acid (ACC) on NMDA-stimulated noradrenaline release, not glycine. |
| PGx | Cros_2016 | not_relevant | 0 | 0 | The paper studies the effect of FGFR4 polymorphism on Everolimus efficacy (oncology), not on the pharmacokinetics or pharmacodynamics of the drug Glycine. |
| popPK | Darwish_2025 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of trofinetide, not glycine. |
| PD | Darwish_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (popPK) modeling and exposure simulations to validate dosing regimens; it does not report any pharmacodynamic (PD) or exposure-response modeling, nor does it provide numeric PD parameters (e.g., Emax, EC50) for trofinetide. |
| popPK | Deutz_2025 | relevant | 8 | 2 | The study reports quantitative compartmental PK changes (specifically a +35% increase in clearance) for glycine in a sepsis model, but lacks absolute numeric parameter values (e.g., specific CL in mL/min or V in L) which are likely in the full text or supplementary data. |
| PGx | Ellis_1995 | not_relevant | 0 | 0 | The paper studies CYP2D6 enzyme mutants and their catalytic activity toward debrisoquine and metoprolol, not the pharmacokinetics or pharmacodynamics of glycine. |
| PGx | Feltrin_2020 | not_relevant | 0 | 0 | The paper studies herb-drug interactions involving *Glycine max* (soybean) extracts, not the pharmacokinetics or pharmacodynamics of the amino acid glycine, and does not report pharmacogenomic effects. |
| popPK | Ferl_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a radiolabeled RGD peptide tracer (64Cu-DOTA-RGD) in mice, not the amino acid glycine. |
| popPK | Frouni_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug bitopertin (a glycine transporter inhibitor), not for glycine itself. |
| popPK | Fucile_1999 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study of glycine as a neurotransmitter, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Furukawa_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological analysis of glycine's effect on neurons, not a pharmacokinetic study of glycine disposition. |
| PD | Furukawa_1994 | not_relevant | 4 | 0 | The text mentions EC50 values for glycine but does not provide the specific numeric values or data points required to extract or derive the PD parameters. |
| popPK | Fürtauer_2019 | irrelevant | 0 | 0 | The study is a plant physiological investigation of subcellular metabolite dynamics in Arabidopsis, not a pharmacokinetic study of glycine as a drug. |
| PGx | Gao_1995 | not_relevant | 0 | 0 | The paper reports on a protein engineering modification (fusion peptide) to improve pharmacokinetics of an enzyme (SOD), not a human genetic variant affecting glycine PK/PD. |
| PGx | Gao_2021 | not_relevant | 0 | 0 | The paper studies soybean genetics (Glycine max) and carotenoid metabolism, not human pharmacogenomics of the drug glycine. |
| popPK | Gapińska_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the GlyT1 inhibitor SSR504734, not glycine itself, and glycine is only measured as a neurotransmitter biomarker. |
| PD | Gapińska_2025 | not_relevant | 2 | 1 | The paper reports qualitative changes in seizure thresholds and neurotransmitter levels following treatment with a GlyT1 inhibitor, but does not provide numeric concentration-effect curves, dose-response parameters (e.g., EC50, Emax), or a formal PK/PD model for glycine. |
| popPK | Germann_2016 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of propofol analogues on glycine receptors, not the pharmacokinetics of glycine as a drug. |
| popPK | Giacometti_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Dalbavancin, not glycine. |
| PD | Giacometti_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) modeling of Dalbavancin using Neural ODEs and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Giegling_2011 | not_relevant | 2 | 1 | The paper investigates the effect of SLC6A5 variants (glycine transporter) on the pharmacodynamic response (motor side effects) of haloperidol, not the PK/PD of glycine itself. |
| PGx | Gilissen_2000 | not_relevant | 0 | 0 | The paper investigates the general hepatic metabolism and enzyme kinetics (CYP2C9, UGT1A1) of the drug in pooled human samples or healthy volunteers, but it does not report data on how specific genetic variants or genotypes alter these pharmacokinetic parameters. |
| PGx | Grasso_2022 | not_relevant | 0 | 0 | The paper investigates the metabolomic profile of alkaptonuria (a metabolic disease involving HGD gene variants) and mentions glycine only as part of a general metabolic pathway; it does not report the effect of a gene variant on the pharmacokinetic or pharmacodynamic parameters of the drug glycine. |
| popPK | Gu_2023 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of buprenorphine and naloxone, not glycine. |
| PD | Gu_2023 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) of buprenorphine and naloxone; it does not report any pharmacodynamic (PD) data, exposure-response relationships, or numeric PD parameters (e.g., Emax, EC50) for glycine or any other drug. |
| popPK | Gu_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of LOXL4 in lung cancer and T cell exhaustion using acetyldigoxin, containing no pharmacokinetic data or mention of glycine. |
| PD | Gu_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of acetyldigoxin (a LOXL4 inhibitor) in lung cancer and does not report any pharmacodynamic or exposure-response data for glycine. |
| popPK | Habibi_2023 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Habibi_2023 | not_relevant | 0 | 0 | The paper describes the molecular characterization of a chloride channel subunit in a parasite and does not report pharmacodynamic or exposure-response data for the drug glycine. |
| PD | Hadad_1995 | not_relevant | 2 | 1 | The paper discusses anticonvulsant activity and PK profiles but does not provide numeric PD parameters (e.g., ED50, EC50) or an explicit exposure-response curve for glycine or its derivatives in the provided text. |
| popPK | Hahn_2021 | relevant | 4 | 5 | The study models the volume kinetics of a 1.5% glycine infusion solution (glycine acts as the marker/volume expander) in humans using a two-compartment model, reporting rate constants (k10, k12, k21) and half-lives, though it is a fluid dynamics study rather than a traditional molecular PK study. |
| PGx | Hall_2007 | not_relevant | 0 | 0 | The paper reports a germline mutation associated with spontaneous renal tumors in rats, not a pharmacokinetic or pharmacodynamic parameter of the drug glycine. |
| popPK | Hamilton_2024 | irrelevant | 0 | 0 | The study concerns fungicide resistance in *Fusarium virguliforme* affecting soybean (*Glycine max*); the term "glycine" refers to the plant genus, not the amino acid drug, and no pharmacokinetic parameters are reported. |
| PD | Hamilton_2024 | not_relevant | 0 | 0 | The paper reports fungicide sensitivity (EC50) for a fungal pathogen, not a pharmacodynamic relationship for the drug glycine. |
| PGx | Han_2018 | not_relevant | 0 | 0 | The paper studies pharmacogenomic associations for vitamin D deficiency and pain genes, but does not report PK or PD parameters for glycine. |
| popPK | Handford_1996 | irrelevant | 0 | 0 | The paper characterizes the molecular structure and functional expression of the glycine receptor, not the pharmacokinetics of glycine as a drug. |
| popPK | Hanke_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for iclepertin (a GlyT1 inhibitor), not for glycine itself. |
| PGx | Hanke_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic/pharmacodynamic models involving patient demographics (age, race, weight) but does not report the effect of any specific gene variant or genotype on PK/PD parameters. |
| PGx | Harland_1995 | not_relevant | 0 | 0 | The study investigates thalidomide-induced neuropathy and uses glycine conjugation (via aspirin metabolism) only as a general pharmacogenetic probe to assess metabolic status, rather than reporting a genetic effect on the pharmacokinetics or pharmacodynamics of glycine itself. |
| PGx | Hegedűs_2025 | not_relevant | 0 | 0 | The paper describes the synthesis of glycine analogs and their cytotoxicity in cell lines; it does not investigate the pharmacokinetics or pharmacodynamics of glycine itself, nor does it involve genetic variants. |
| popPK | Helfer_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for pentobarbital, not glycine. |
| PD | Helfer_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model and dosing simulations for pentobarbital, but it does not contain any pharmacodynamic (PD) or exposure-response analysis, nor does it report numeric PD parameters (e.g., Emax, EC50). |
| PD | Henjum_2007 | not_relevant | 3 | 2 | The paper reports an IC50 for a glycine transporter inhibitor (sarcosine), which is a pharmacodynamic parameter for the inhibitor, but does not report a concentration-effect or dose-response relationship for glycine itself. |
| popPK | Henzi_1992 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Hiroyama_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the PET tracer 18F-FPP-RGD2, not glycine. |
| popPK | Hoke_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gavestinel (a glycine site antagonist), not glycine itself. |
| popPK | Hughes_2020 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | Hughes_2020 | not_relevant | 0 | 0 | The paper focuses on the structural role of proline residues in the glycine receptor and does not report pharmacodynamic or exposure-response relationships with numeric parameters. |
| PGx | Ishii_2007 | not_relevant | 0 | 0 | The paper discusses fungal resistance to fungicides via mutations in the cytochrome b gene, which is unrelated to the pharmacokinetics or pharmacodynamics of glycine in humans. |
| PGx | Jin_2023 | not_relevant | 0 | 0 | The paper is a review of folate metabolism's role in Staphylococcus aureus infection and does not report pharmacogenomic effects on the PK/PD of glycine. |
| PGx | Johnson-Arbor_2022 | not_relevant | 0 | 0 | The paper is a mini-review of ivermectin and mentions P-gp polymorphisms as a general factor for toxicity, but it does not report a specific study linking a gene variant to a measured PK or PD parameter of glycine. |
| PGx | Jonsson-Schmunk_2016 | not_relevant | 0 | 0 | The paper discusses the regulation of CYP3A4 by integrins during viral infection, not a pharmacogenomic effect on the PK/PD of glycine. |
| popPK | Junghans_2023 | irrelevant | 2 | 0 | Glycine is used as a stable isotope tracer to measure protein synthesis rates, not to characterize its own pharmacokinetic disposition parameters (CL, V, ka). |
| PGx | Kakunaga_1984 | not_relevant | 0 | 0 | The paper discusses a mutation in the beta-actin gene resulting in a glycine substitution, which is unrelated to the pharmacokinetics or pharmacodynamics of glycine as a drug. |
| popPK | Kang_2022 | irrelevant | 0 | 0 | The paper investigates the immunomodulatory effects of glycine on neutrophil bactericidal activity and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for glycine. |
| popPK | Kellner_2021 | irrelevant | 0 | 0 | The paper describes NMDA receptor mutations and functional electrophysiology in oocytes, not the pharmacokinetics of glycine as a drug. |
| popPK | Khouqeer_2025 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics and resistance mechanisms of FLT3 inhibitors (quizartinib, gilteritinib) in leukemia cells and does not involve glycine as a subject drug or report any pharmacokinetic parameters for it. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The paper is a structural biology study on NMDA receptors where glycine is used as a co-agonist, not a subject drug for pharmacokinetic analysis. |
| popPK | Kittichaiworakul_2026 | irrelevant | 0 | 0 | The study investigates the effects of an herbal extract on gut microbiota and obesity in rats, mentioning glycine metabolism only as a KEGG pathway prediction result rather than reporting pharmacokinetic parameters for glycine. |
| PD | Kittichaiworakul_2026 | not_relevant | 0 | 0 | The paper investigates the effects of a plant extract on gut microbiota and metabolic markers in rats, with no pharmacodynamic modeling or exposure-response analysis for glycine. |
| popPK | Klein_1988 | irrelevant | 0 | 0 | The study uses glycine only as a tracer to measure whole-body protein kinetics (synthesis/catabolism rates), not the pharmacokinetic parameters (CL, V) of glycine itself. |
| popPK | Klein_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of alprazolam, not glycine. |
| PD | Klein_2026 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PK) modeling and safety/tolerability data (VAS scores) but does not perform a pharmacodynamic (PD) or exposure-response analysis linking alprazolam concentrations to effect parameters (e.g., Emax, EC50). |
| popPK | Krzyzanski_2017 | irrelevant | 0 | 0 | The study focuses on red blood cell survival kinetics using 14C-glycine as a labeling agent, not on the pharmacokinetic disposition parameters (CL, V, etc.) of glycine itself. |
| popPK | Kumamoto_1995 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study measuring NMDA receptor currents, where glycine acts as a co-agonist/modulator rather than as a subject drug for pharmacokinetic analysis. |
| popPK | Lamberti_2026 | irrelevant | 0 | 0 | The paper studies mRNA translation dynamics and is not a pharmacokinetic study of glycine. |
| PD | Lamberti_2026 | not_relevant | 0 | 0 | The paper focuses on mRNA translation dynamics and ribosome occupancy modeling, not on the pharmacodynamic exposure-response relationship of glycine. |
| popPK | Landry_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methyl chloride, and glycine appears only as a component of a metabolite (N-(methylthioacetyl)glycine), not as the subject drug. |
| popPK | Lees_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of GV150526, a glycine antagonist, not the drug glycine itself. |
| PGx | Lennard_1989 | not_relevant | 0 | 0 | The paper studies timolol, not glycine. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper investigates genetic markers for soybean seed protein content and has no relation to pharmacokinetics or pharmacodynamics of the drug glycine. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of remimazolam, not glycine. |
| PD | Liang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PopPK and PBPK) modeling for dose recommendation and does not report any pharmacodynamic, exposure-response, or dose-response analysis or parameters. |
| PGx | Lim_2024 | not_relevant | 0 | 0 | The paper investigates the physiological role of endogenous amino acids (serine/glycine) in a disease context, not the pharmacokinetics or pharmacodynamics of glycine as a drug administered to a subject. |
| PGx | Lindahl_2016 | not_relevant | 1 | 2 | The paper investigates genetic variants (COL1A1/COL1A2) affecting the pharmacodynamic response (BMD/fracture) to Pamidronate, not the drug glycine. |
| popPK | Linh_2026 | irrelevant | 0 | 0 | The paper describes a computational fragment library for kinase inhibitor design and does not contain any pharmacokinetic data for glycine. |
| PD | Linh_2026 | not_relevant | 0 | 0 | The paper describes a computational pipeline for fragment-based drug discovery (CustomKinFragLib) and contains no pharmacodynamic, exposure-response, or dose-response data for glycine or any other compound. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper studies the pathogen Pythium aristosporum in plants (rice, soybean), not the pharmacokinetics of the drug glycine. |
| PD | Liu_2022 | not_relevant | 0 | 0 | The paper reports fungicide efficacy (EC50) for an oomycete pathogen, not a pharmacodynamic relationship for the drug glycine. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetics for the drug ciprofol, not glycine. |
| PD | Liu_2024 | not_relevant | 4 | 3 | The paper reports a population PK model and an exposure-safety analysis for hypotension, but explicitly states that no meaningful association was observed, and no numeric PD parameters (Emax, EC50, etc.) are provided. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper investigates a TRPV1 pentapeptide inhibitor and does not report pharmacokinetic parameters for glycine. |
| popPK | Luzzi_1988 | irrelevant | 0 | 0 | The paper is a pharmacological study on neurotransmitter receptors in guinea-pigs where glycine acts as a modulator, not a drug subject for pharmacokinetic analysis. |
| PD | Luzzi_1988 | not_relevant | 3 | 2 | The paper reports a qualitative potentiation of glutamate by glycine at a single concentration (10^-5 M) without providing a dose-response curve or numeric PD parameters for glycine itself. |
| PGx | Madhuri_2021 | not_relevant | 0 | 0 | The paper is a clinical exome study on genetic variants in Osteogenesis Imperfecta and has no data on the pharmacokinetics or pharmacodynamics of the drug glycine. |
| popPK | Maher_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ivermectin (a glycine receptor agonist) in mice, not the drug glycine itself. |
| PGx | Mahmoud_2022 | not_relevant | 0 | 0 | The paper investigates the genetic basis of root growth in watermelon and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of glycine. |
| PGx | MahmoudianDehkordi_2019 | not_relevant | 0 | 0 | The paper investigates the association between gut microbiome/bile acid profiles and Alzheimer's disease, not the pharmacokinetic or pharmacodynamic effects of glycine (or any drug) on a host parameter based on genotypes. |
| PGx | Manjunath_2022 | not_relevant | 0 | 0 | The study investigates the transcriptomic and metabolomic effects of the drug Disarib on a cancer model, observing that glycine levels are altered by the treatment, but it does not report a pharmacogenomic effect (gene variant affecting glycine PK/PD). |
| PGx | Mardon_1969 | not_relevant | 0 | 0 | The paper investigates the morphological dimorphism of Candida albicans influenced by amino acids, not the pharmacogenomics of human glycine metabolism or drug PK/PD. |
| popPK | Marques_2026 | irrelevant | 0 | 0 | The study models the pharmacokinetics of propranolol and omeprazole, not glycine. |
| PD | Marques_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic (PK) modeling (PBPK and popPK) and drug-drug interactions for propranolol and omeprazole, with no pharmacodynamic (PD) or exposure-response analysis reported. |
| popPK | Mastriani_2021 | irrelevant | 0 | 0 | The paper is a genomic evolutionary analysis of SARS-CoV-2 viruses and does not contain any pharmacokinetic data for glycine. |
| PGx | Mayr_2014 | not_relevant | 0 | 0 | The text describes genetic defects in lipoic acid biosynthesis and mitochondrial enzyme function, not the pharmacokinetics or pharmacodynamics of the drug glycine. |
| PGx | McClung_1992 | not_relevant | 0 | 0 | The paper describes the genetic regulation of the cytosolic serine hydroxymethyltransferase gene in Neurospora crassa, not a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of glycine as a drug in a relevant clinical or physiological context. |
| popPK | McNamara_1990 | irrelevant | 0 | 0 | The study investigates the role of glycine in NMDA-induced neurotoxicity in cell culture (mechanistic/pharmacological), not the pharmacokinetics or disposition of glycine. |
| PGx | Mebus_1992 | not_relevant | 0 | 0 | The paper describes the metabolism of 2-methoxyethanol in mice and does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Miskei_2026 | irrelevant | 0 | 0 | The paper concerns APOBEC3-mediated mutagenesis in Herpes Simplex Virus 1 and does not contain any pharmacokinetic data for glycine. |
| PD | Miskei_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of APOBEC-mediated mutagenesis in HSV-1 and does not report any pharmacodynamic or exposure-response relationship for glycine. |
| popPK | Mockeliunas_2022 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of linezolid, not glycine. |
| PD | Mockeliunas_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of linezolid and precision dosing, not glycine, and does not report any pharmacodynamic or exposure-response relationship for glycine. |
| popPK | Molino_1986 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of chenodeoxycholic acid (a bile acid), where glycine is mentioned only as part of the conjugated metabolite name (chenodeoxycholylglycine), not as the subject drug. |
| popPK | Montani_2026 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of benzothiazole derivatives for skin diseases, with no pharmacokinetic data or mention of glycine as a subject drug. |
| PD | Montani_2026 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel benzothiazole derivatives, not a pharmacodynamic or exposure-response relationship for the drug glycine. |
| popPK | Mould_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on LSD1 inhibitors containing a glycine-derived scaffold, not a pharmacokinetic study of glycine as a subject drug. |
| PD | Mould_2017 | not_relevant | 3 | 2 | The paper reports a single EC50 value for a specific compound in a cellular assay, which is a static potency metric rather than a dynamic pharmacodynamic (exposure-response) relationship or model. |
| popPK | Mørkve_2009 | irrelevant | 0 | 0 | This is an in vitro electrophysiology study characterizing glycine receptor biophysics in rat retina, not a pharmacokinetic study of glycine disposition. |
| popPK | Neumeyer_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of NNZ-2591 (an insulin-like growth factor 1 metabolite analog), not the drug glycine itself. |
| popPK | Nie_2025 | irrelevant | 0 | 0 | The study focuses on immune tolerance to uricase (UOX) for gout treatment in mice and rats, and does not report pharmacokinetic parameters for glycine. |
| PD | Nie_2025 | not_relevant | 0 | 0 | The paper focuses on immune tolerance and PK of uricase, not glycine, and does not report a concentration-effect or dose-response model with numeric PD parameters for glycine. |
| PGx | Noguchi_2014 | not_relevant | 0 | 0 | The paper investigates allele-specific siRNA silencing of mutant COL6A1 mRNA in muscular dystrophy, not the pharmacogenomics of glycine PK/PD. |
| PGx | Nolasco_2026 | not_relevant | 0 | 0 | The study investigates the effect of a gene variant on clinical outcomes of mepolizumab, not on the PK or PD of glycine. |
| PGx | Owens_1992 | not_relevant | 0 | 0 | The paper studies deoxycytidine kinase mutations affecting resistance to chemotherapy agents, not the pharmacokinetics or pharmacodynamics of the drug glycine. |
| popPK | Park_1998 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for norfloxacin (an antibiotic) in rabbits, with glycine only mentioned as a formulation excipient (glycine acetate) rather than the subject drug. |
| popPK | Park_2003 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of norfloxacin-glycine acetate, a prodrug/ester derivative of norfloxacin, rather than glycine as the subject drug. |
| PGx | Perea-Gil_2022 | not_relevant | 1 | 1 | The paper investigates the effect of kinase inhibitors on serine/glycine levels in a dilated cardiomyopathy model and does not report pharmacogenomic effects on PK/PD parameters of glycine itself. |
| popPK | Pereira_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the nanobody M6495, not for the drug glycine. |
| popPK | Phillips_2026 | irrelevant | 0 | 0 | The paper focuses on the mechanism of NMDA receptor inhibition by memantine and ketamine, not the pharmacokinetics of glycine. |
| PD | Phillips_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of memantine (an NMDA receptor antagonist) and does not report any pharmacodynamic or exposure-response data for glycine. |
| popPK | Piro_2021 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology and molecular biology study of glycine receptor mutations, not a pharmacokinetic study reporting disposition parameters for glycine as a drug. |
| popPK | Plakas_1990 | irrelevant | 0 | 0 | The study examines the pharmacokinetics of benzoic acid in channel catfish, using hippuric acid (the glycine conjugate) only as a comparative note to mammalian metabolism, not reporting PK parameters for glycine itself. |
| popPK | Plath_1996 | irrelevant | 0 | 0 | The study uses [15N]glycine as a stable isotope tracer to measure protein turnover rates, not to assess the pharmacokinetic disposition (clearance, volume, half-life) of glycine as a drug. |
| PGx | Popović_2017 | not_relevant | 0 | 0 | The study concerns plant physiology and water stress in poplar tissue culture, not human pharmacogenomics. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study focusing on glycine's role in metabolic maturation and enzyme activity in cell lines, not pharmacokinetic disposition. |
| PD | Pozo_2026 | not_relevant | 2 | 1 | The study compares metabolic effects between two distinct glycine concentrations (low vs. high) using statistical tests, but does not fit a dose-response model or report numeric PD parameters like Emax or EC50. |
| PGx | Pérez-Solís_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamic effect of phenobarbital on bilirubin levels in a patient with UGT1A1 mutations, not the pharmacokinetics/pharmacodynamics of glycine. |
| PGx | Qin_2025 | not_relevant | 0 | 0 | The paper reports oncogenic mechanisms involving serine metabolism and a ZNF526 variant, but it does not study the pharmacokinetics or pharmacodynamics of the drug glycine. |
| PGx | Revsin_1977 | not_relevant | 0 | 0 | The paper investigates valine metabolism in metabolic disorders and does not report pharmacokinetic or pharmacodynamic parameters for glycine influenced by genetic variants. |
| popPK | Reymann_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intestinal transport mechanisms in rat jejunum, not a pharmacokinetic study reporting systemic disposition parameters (CL, V, t1/2) for glycine. |
| PGx | Riera_2021 | not_relevant | 0 | 0 | The paper focuses on machine learning for soybean yield estimation and does not involve human pharmacogenomics or glycine pharmacokinetics. |
| popPK | Rognås_2025 | irrelevant | 0 | 0 | The study models the pharmacokinetics and pharmacodynamics of bitopertin (a drug) and its effects on erythropoiesis, not the disposition of glycine itself. |
| popPK | Rohwer_2021 | irrelevant | 0 | 0 | The study is an in vitro enzymatic kinetics investigation of glycine N-acyltransferase variants, not a pharmacokinetic study of glycine disposition. |
| PD | Rohwer_2021 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Michaelis-Menten/Hill parameters) for GLYAT variants, not in vivo pharmacodynamic exposure-response or dose-response relationships for the drug glycine. |
| PGx | Rome_2022 | not_relevant | 0 | 0 | The paper studies endogenous metabolic phenotypes in GNMT knockout mice, not the PK/PD of a drug. |
| PGx | Rosati_2018 | not_relevant | 0 | 0 | The paper studies plant metabolism and fungal infection, not human pharmacogenomics or glycine pharmacokinetics/pharmacodynamics. |
| popPK | Rothuizen_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bilirubin, using glycine only as a radiolabeled tracer for hemoglobin synthesis, not as the subject drug. |
| popPK | Schofield_2004 | irrelevant | 0 | 0 | The study is a molecular biology investigation into glycine receptor subunit structure and function, not a pharmacokinetic study of glycine as a drug. |
| PGx | Schulke_2021 | not_relevant | 5 | 8 | The study reports enzyme kinetic changes (specific activity/KM) for a GLYAT variant acting on endogenous glycine substrates, not a pharmacokinetic or pharmacodynamic parameter of glycine as a therapeutic drug. |
| PGx | Schwartz_2005 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect of a beta1-adrenergic receptor variant on the response to betaxolol, not a change in a PK or PD parameter of the drug glycine. |
| PGx | Sellner_2021 | not_relevant | 0 | 0 | The paper is a molecular dynamics simulation study of Cytochrome P450 Reductase structure; the mention of glycine refers to an amino acid residue (Gly141) involved in protein conformation, not the drug glycine or its PK/PD. |
| popPK | Shelton_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of receptor channel physiology, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Shen_2022 | not_relevant | 0 | 0 | The paper describes the clinical phenotype and genetic basis of a serine deficiency disorder, not the pharmacokinetics or pharmacodynamics of glycine. |
| popPK | Shi_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bornyl caffeate and caffeic acid in rats, mentioning glycine only as one of the metabolic conjugation pathways (glycine conjugation), but glycine is not the subject drug being modeled. |
| popPK | Simard_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of monoclonal antibodies targeting glycine receptors, not the pharmacokinetics of the amino acid glycine. |
| PGx | Sinn_2022 | not_relevant | 0 | 0 | The paper characterizes the enzymatic function of AGMAT/GDAH (guanidino acid hydrolase) and its variants, rather than reporting pharmacogenomic effects on the PK/PD of glycine as a drug. |
| popPK | Solntseva_2023 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of glycine receptor modulation by corticosteroids, not a pharmacokinetic study of glycine disposition. |
| PD | Solntseva_2023 | not_relevant | 0 | 0 | The paper discusses the pharmacological modulation of glycine receptors by corticosteroids but does not report a pharmacokinetic/pharmacodynamic (PK/PD) model or exposure-response analysis for glycine itself with numeric PD parameters. |
| PGx | Soyata_2021 | not_relevant | 0 | 0 | The paper reviews drug-herb interactions involving soy isoflavones and does not report pharmacogenomic effects or focus on the drug glycine. |
| popPK | Stephens_1989 | irrelevant | 0 | 0 | The study investigates the pharmacological action of TRH-glycine (a peptide hormone precursor) on gastric acid secretion, not the population pharmacokinetics of the amino acid glycine as a drug. |
| popPK | Storgaard_2026 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of delta-9-tetrahydrocannabinol (THC), not glycine. |
| PD | Storgaard_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for THC and its metabolite, but it does not include any pharmacodynamic (PD) data, exposure-response analysis, or numeric PD parameters. |
| PGx | Sun_2016 | not_relevant | 0 | 0 | The study investigates the expression of endogenous metabolic proteins in thyroid cancer tissues and their prognostic value, not the pharmacokinetics or pharmacodynamics of glycine as an administered drug. |
| popPK | Sun_2026 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying PEG impurities in peptides and contains no pharmacokinetic data for glycine. |
| PD | Sun_2026 | not_relevant | 0 | 0 | The paper describes an analytical method (HPLC-CAD) for quantifying free PEG impurities in peptide drugs and does not report any pharmacodynamic or exposure-response data for glycine or any other drug. |
| popPK | T_2026 | irrelevant | 0 | 0 | The paper is an in silico study on antibacterial inhibitors of SaFtsZ and does not involve glycine pharmacokinetics or any quantitative disposition parameters. |
| PD | T_2026 | not_relevant | 0 | 0 | The paper is an in silico study (virtual screening, docking, MD, DFT) for a SaFtsZ inhibitor and contains no pharmacodynamic, exposure-response, or dose-response data for glycine or any other drug. |
| PD | Tikunov_2017 | not_relevant | 4 | 4 | The paper reports dose-response parameters (EC50) for fructose, not glycine; glycine is used only as a tracer in the medium. |
| PGx | Tlaye_2025 | not_relevant | 2 | 0 | The study focuses on pharmacogenomics of aspirin (not glycine), and while it mentions a glycine-related enzyme (GLYAT) for aspirin metabolism, it does not report a pharmacokinetic or pharmacodynamic effect of a glycine drug being modified by a gene variant. |
| popPK | Traynelis_1990 | irrelevant | 0 | 0 | The paper investigates the electrophysiological properties of NMDA receptors (specifically proton inhibition) and uses glycine as a co-agonist in an in vitro setting, not as a drug subject to pharmacokinetic analysis. |
| PGx | Turlin_2022 | not_relevant | 0 | 0 | The paper focuses on synthetic biology and metabolic engineering of bacteria for formate assimilation, not human pharmacogenomics or glycine pharmacokinetics. |
| PGx | Umapathysivam_2026 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on GLP-1 receptor agonist response, not on a pharmacokinetic or pharmacodynamic parameter of glycine. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rLj-RGD3 (a platelet fibrinogen receptor antagonist protein), not the drug glycine. |
| PGx | Weller_2025 | not_relevant | 0 | 0 | The paper reports on a covalent inhibitor targeting a cancer driver mutation (RAS G12D), not the pharmacokinetics or pharmacodynamics of the amino acid glycine. |
| PGx | Wells_2025 | not_relevant | 0 | 0 | The paper investigates the role of pyruvate kinase splice variants in cardiac fibroblast metabolism and remodeling after myocardial infarction; it does not study a pharmacokinetic or pharmacodynamic parameter of the amino acid glycine or a drug metabolized by glycine-related pathways. |
| popPK | Wutzke_1983 | irrelevant | 0 | 0 | The study uses glycine as a tracer for nitrogen metabolism/protein turnover, not for the pharmacokinetic disposition of glycine itself. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper investigates the electrophysiological mechanism of N-palmitoyl glycine (PalGly) on ion channels in the context of Brugada syndrome, not the pharmacokinetic disposition (CL, V, ka) of free glycine. |
| PGx | Xun_2025 | not_relevant | 0 | 0 | The paper reports a bioanalytical method for bile acids, not a pharmacogenomic effect on a PK/PD parameter of glycine. |
| PGx | Yang_2022 | not_relevant | 0 | 0 | The provided text is technical metadata from the GROBID software and contains no scientific content regarding pharmacogenomics or glycine. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacology of a new NMDA receptor modulator (Y36) where glycine is only an agonist/ligand for receptor binding, not the subject drug for PK analysis. |
| popPK | Yang_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of DEHA and MEHA, not glycine. |
| PD | Yang_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PBPK modeling) of DEHA and MEHA, with no mention of glycine or any pharmacodynamic/exposure-response analysis. |
| PGx | Zastrozhin_2017 | not_relevant | 0 | 0 | The study investigates the pharmacogenetics of haloperidol, not glycine. |
| PGx | Zhan_2025 | not_relevant | 0 | 0 | The paper investigates the causal relationship between amino acid levels (including glycine) and sarcopenia using Mendelian Randomization, rather than assessing pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of glycine as a therapeutic agent. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The paper describes a metabolic disorder involving the accumulation of isobutyryl glycine, not a pharmacokinetic or pharmacodynamic effect of the drug glycine influenced by a gene variant. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper describes a machine learning model for peptide toxicity prediction and does not report pharmacokinetic parameters for glycine. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper describes a machine learning model for predicting peptide toxicity based on amino acid sequences and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for glycine. |
| PGx | Zhao_2019 | not_relevant | 0 | 0 | The paper concerns soybean transformation and epigenetics, not human pharmacogenomics or glycine pharmacokinetics. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | This is a mechanistic/pharmacology study on NMDA receptor agonists, not a pharmacokinetic study of glycine. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | This is a mechanistic pharmacology study of Schisandrin B's effect on glycine receptors, not a pharmacokinetic study of glycine disposition parameters. |
| popPK | Zheng_2016 | irrelevant | 0 | 0 | This is a PET imaging study evaluating radiotracers for glycine transporters (GlyT1) in baboons, not a study of glycine's pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper is a dataset of acid dissociation constants (pKa) and contains no pharmacokinetic disposition parameters (CL, V, t1/2) for glycine. |
| PD | Zheng_2026 | not_relevant | 0 | 0 | The paper reports a dataset of acid dissociation constants (pKa) and machine learning models for predicting them, which is unrelated to pharmacodynamic exposure-response or dose-response relationships for glycine. |
| popPK | Zhu_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ciprofol, not glycine. |
| popPK | Zhu_2026_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of denosumab (a monoclonal antibody), not glycine. |
| PD | Zhu_2026_2 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) and clinical efficacy (BMD changes) for a denosumab biosimilar, but it does not report a pharmacodynamic (PD) model or exposure-response relationship with numeric PD parameters (e.g., Emax, EC50). |
| PGx | Ziegler_2024 | not_relevant | 0 | 0 | The paper reports on a high-throughput assay for bile acids in cholestatic diseases, not a pharmacogenomic effect on the PK/PD of glycine. |
| PGx | de_2004 | not_relevant | 0 | 0 | The paper discusses MDMA pharmacokinetics and the limited impact of CYP2D6 polymorphisms on MDMA toxicity, not glycine. |
| popPK | van_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of remoxipride, with glycine mentioned only as an endogenous metabolite in a pathway, not as the subject drug for PK parameter estimation. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
