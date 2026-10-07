<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;enfuvirtide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enfuvirtide_Soy2003_reference&quot;,&quot;label&quot;:&quot;Soy_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enfuvirtide/Enfuvirtide_Soy2003_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enfuvirtide_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enfuvirtide/Enfuvirtide_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# enfuvirtide

- **generic name:** enfuvirtide
- **ATC codes:** `J05AX07`
- **DrugBank:** [DB00109](https://go.drugbank.com/drugs/DB00109) · **PubChem:** not captured
- **groups:** approved

## About

Enfuvirtide is an antiviral drug used to treat HIV infection and HIV/AIDS. It is an approved medicine and is authorised in the European Union for HIV infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423327](https://www.wikidata.org/wiki/Q423327) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| enfuvirtide | parent | 4491.94 | C204H301N51O64 | PubChem | [16130199](https://pubchem.ncbi.nlm.nih.gov/compound/16130199) | Soy_2003 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:42 | 17:15 | 2/1/0 | 5/0/0 | 0/0/0 | 751,904/46,847 | einfracz / qwen3.8-27b | 19 | 0/14 | 19/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Soy_2003_reference](drugs/drug_enfuvirtide/Enfuvirtide_Soy2003_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Soy D et al., Population pharmacokinetics of enfuvirt…, Clinical pharmacology and t… (2003) | [10.1016/j.clpt.2003.09.002](https://doi.org/10.1016/j.clpt.2003.09.002) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Wang_2019_reference](drugs/drug_enfuvirtide/Enfuvirtide_Wang2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Wang C et al., Long-Acting HIV-1 Fusion Inhibitory Pep…, Viruses (2019) | [10.3390/v11090811](https://doi.org/10.3390/v11090811) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2007_reference](drugs/drug_enfuvirtide/Enfuvirtide_Zhang2007_reference.md) | — | 1-compartment (no model) | 0 | Zhang X et al., Population pharmacokinetics of enfuvirt…, Journal of clinical pharmac… (2007) | [10.1177/0091270006299089](https://doi.org/10.1177/0091270006299089) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abdullahi_2026_None](drugs/drug_enfuvirtide/pd_Abdullahi_2026_None.md) | None ← enfuvirtide · model not identified | — | Abdullahi A et al., HIV-1 integrase inhibitor resistance in…, The Journal of antimicrobia… (2026) | [10.1093/jac/dkag300](https://doi.org/10.1093/jac/dkag300) |
| <span class="pk-badge pk-badge--green">extracted</span> | [McCoy_2007_Viral_suppression_to_undetectable_levels](drugs/drug_enfuvirtide/pd_McCoy_2007_Viral_suppression_to_undetectable_levels.md) | Viral suppression ← enfuvirtide · inhibition effect | — | McCoy C, Darunavir: a nonpeptidic antiretroviral…, Clinical therapeutics (2007) | [10.1016/j.clinthera.2007.08.016](https://doi.org/10.1016/j.clinthera.2007.08.016) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mould_2005_HIV_1_RNA](drugs/drug_enfuvirtide/pd_Mould_2005_HIV_1_RNA.md) | HIV-1 ribonucleic acid ← enfuvirtide · direct Emax (saturable) effect | — | Mould DR et al., Population pharmacokinetics and exposur…, Clinical pharmacology and t… (2005) | [10.1016/j.clpt.2005.02.005](https://doi.org/10.1016/j.clpt.2005.02.005) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Soy_2003_HIV_RNA](drugs/drug_enfuvirtide/pd_Soy_2003_HIV_RNA.md) | plasma ribonucleic acid concentrations ← enfuvirtide · disease-progression model | — | Soy D et al., Population pharmacokinetics of enfuvirt…, Clinical pharmacology and t… (2003) | [10.1016/j.clpt.2003.09.002](https://doi.org/10.1016/j.clpt.2003.09.002) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Xu_2017_HIV_1_RNA](drugs/drug_enfuvirtide/pd_Xu_2017_HIV_1_RNA.md) | plasma HIV-1 RNA load ← Enfuvirtide · inhibition effect | — | Xu F et al., Current Status of the Pharmacokinetics…, Current drug metabolism (2017) | [10.2174/1389200218666170724112412](https://doi.org/10.2174/1389200218666170724112412) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=enfuvirtide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C19` substrate, `CYP2E1` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 124 matched, 92 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mould_2005.pdf` | Mould DR et al., Population pharmacokinetics and exposur…, Clinical pharmacology and t… (2005) | popPK | 10 | [10.1016/j.clpt.2005.02.005](https://doi.org/10.1016/j.clpt.2005.02.005) | [15961983](https://pubmed.ncbi.nlm.nih.gov/15961983) | The paper describes a population PK study for enfuvirtide, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence text. |
| `Soy_2003.pdf` | Soy D et al., Population pharmacokinetics of enfuvirt…, Clinical pharmacology and t… (2003) | popPK | 10 | [10.1016/j.clpt.2003.09.002](https://doi.org/10.1016/j.clpt.2003.09.002) | [14663459](https://pubmed.ncbi.nlm.nih.gov/14663459) | The abstract provides specific mean population values for clearance (1.42 L/h) and volume of distribution (5.67 L) for enfuvirtide in pediatric patients. |
| `Stocker_2006.pdf` | Stocker H et al., Pharmacokinetics of enfuvirtide in pati…, Antimicrobial agents and ch… (2006) | popPK | 10 | [10.1128/AAC.50.2.667-673.2006](https://doi.org/10.1128/AAC.50.2.667-673.2006) | [16436725](https://pubmed.ncbi.nlm.nih.gov/16436725) | The paper reports a population PK model for enfuvirtide with qualitative statistics (e.g., 52% IIV in CL), but specific central parameter values (median CL, V, etc.) are not explicitly listed in the provided text. |
| `Zhang_2007.pdf` | Zhang X et al., Population pharmacokinetics of enfuvirt…, Journal of clinical pharmac… (2007) | popPK | 10 | [10.1177/0091270006299089](https://doi.org/10.1177/0091270006299089) | [17389560](https://pubmed.ncbi.nlm.nih.gov/17389560) | The abstract provides explicit numeric values for population CL/F, V/F, and Ka for enfuvirtide. |

<sub>queue written 2026-10-07T13:32:24.202988+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdullahi_2026 | irrelevant | 0 | 0 | The study investigates HIV-1 viral resistance mutations to integrase and capsid inhibitors; enfuvirtide is only listed as a resistance category for scoring, with no pharmacokinetic data reported. |
| popPK | Amer_2025 | irrelevant | 0 | 0 | This is a general review on peptide delivery via the oral cavity and does not report quantitative pharmacokinetic parameters for enfuvirtide. |
| PGx | Arribas_2008 | not_relevant | 0 | 0 | The paper is a review of antiretroviral drugs focusing on raltegravir and does not report any pharmacogenomic studies or effects of gene variants on the PK/PD of enfuvirtide. |
| popPK | Brochot_2015 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for darunavir, not enfuvirtide, which is only mentioned as a concomitant medication in a different study cohort. |
| popPK | Chang_2012 | irrelevant | 0 | 0 | The study focuses on the in vitro antiviral potency of novel IgG-enfuvirtide conjugates and their stability in mice, without reporting pharmacokinetic disposition parameters (CL, V, Q, ka) for enfuvirtide itself. |
| popPK | Cheng_2015 | irrelevant | 4 | 1 | The study reports PK for a novel glycosylated analog (SL-ENF) rather than enfuvirtide itself, and while relative half-lives for the analog are provided, absolute disposition parameters (CL, V, ka) for the subject drug are not available. |
| popPK | Cheng_2016 | irrelevant | 6 | 1 | The study reports PK parameters for an ENF-PEG conjugate, not enfuvirtide itself, and the specific numeric values for clearance, volume, and concentration-time profiles are contained in Figure 4 and supplementary material not provided in the evidence. |
| popPK | Cheng_2024 | relevant | 3 | 4 | Reports a specific half-life value for a T20 conjugate (M5-T20) and T20 in rats, but focuses primarily on the modified compound's PK improvement rather than a comprehensive population PK model for native enfuvirtide. |
| PGx | Chong_2012 | not_relevant | 0 | 0 | The paper describes the biophysical properties and antiviral spectrum of a new drug (Albuvirtide) and does not investigate the effect of host gene variants or genotypes on its PK/PD parameters. |
| PGx | Clark_2004 | not_relevant | 0 | 0 | The text discusses general management of antiretroviral-experienced patients and mentions enfuvirtide only as a new therapeutic option, without reporting any pharmacogenomic data or specific PK/PD changes based on genetic variants. |
| PGx | Clotet_2008 | not_relevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of adding enfuvirtide to HAART and does not report any pharmacogenomic effects or gene variant analyses. |
| popPK | Crawford_2010 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of vicriviroc, not enfuvirtide. |
| popPK | Dailly_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amprenavir, with enfuvirtide serving only as a co-administered agent in one subgroup. |
| PGx | DeJesus_2008 | not_relevant | 0 | 0 | The study assesses clinical efficacy and safety of enfuvirtide but does not report pharmacokinetic or pharmacodynamic parameters modulated by host gene variants or genotypes. |
| popPK | Fan_2025 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of a novel anti-CD4 nanobody (Nb457) and Ibalizumab, mentioning enfuvirtide only as background context for current HIV therapies, with no data provided for enfuvirtide. |
| PGx | Fätkenheuer_2008 | not_relevant | 0 | 0 | The paper analyzes the efficacy of maraviroc across subgroups, including CCR5 delta32 genotype, but does not report how genetic variants affect the pharmacokinetic or pharmacodynamic parameters of enfuvirtide. |
| popPK | Férir_2013 | irrelevant | 0 | 0 | The paper investigates the antiviral activity of the peptide LabyA1, and while it mentions synergistic effects with enfuvirtide in combination studies, it does not provide any pharmacokinetic or pharmacodynamic parameters for enfuvirtide itself. |
| PGx | Gerzenshtein_2005 | not_relevant | 0 | 0 | The paper describes drug-drug interactions with voriconazole and does not report any pharmacogenomic effects on the PK or PD of enfuvirtide. |
| popPK | Grahl_2021 | irrelevant | 0 | 0 | The paper is a molecular docking and molecular dynamics study for SARS-CoV-2 drug repositioning; enfuvirtide is mentioned only as a docking candidate, with no pharmacokinetic parameters reported. |
| popPK | Green_2017 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of etravirine, where enfuvirtide is only a concomitant medication, not the subject drug. |
| PGx | Green_2017 | not_relevant | 0 | 0 | The paper evaluates the pharmacogenomics of etravirine, not enfuvirtide; enfuvirtide is only mentioned as a concomitant medication. |
| PGx | He_2008 | not_relevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic data for a new drug (sifuvirtide) but does not investigate any gene variant or genotype effect. |
| PGx | He_2013 | not_relevant | 0 | 0 | The paper is a review of peptide inhibitors of HIV-1 fusion and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Islam_2024 | irrelevant | 0 | 0 | The paper focuses on the formulation of a lipid nanoparticle for fostemsavir, a different drug, and does not report pharmacokinetic parameters for enfuvirtide. |
| popPK | Kakuda_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for etravirine, where enfuvirtide is only mentioned as a concomitant medication with no impact on clearance, and provides no PK parameters for enfuvirtide. |
| PGx | Kakuda_2010_2 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with etravirine and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of enfuvirtide. |
| PGx | Lalezari_2003 | not_relevant | 0 | 0 | The paper reports clinical trial results for dose-ranging and efficacy but contains no analysis of gene variants or genotypes affecting pharmacokinetics or pharmacodynamics. |
| PGx | Manfredi_2006 | not_relevant | 0 | 0 | The paper is a general review of enfuvirtide that explicitly calls for future pharmacogenomic investigation, indicating that no such findings are reported in the text. |
| popPK | Mould_2005 | relevant | 10 | 0 | The paper describes a population PK study for enfuvirtide, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided evidence text. |
| popPK | Naeger_2007 | irrelevant | 0 | 0 | The study analyzes virologic resistance and efficacy of tipranavir, with enfuvirtide mentioned only as a co-administered drug, and reports no PK parameters. |
| PGx | Patel_2005 | not_relevant | 0 | 0 | The paper describes general PK parameters of enfuvirtide and mentions non-genetic factors like sex, bodyweight, and drug interactions, but does not investigate genetic variants or genotypes. |
| popPK | Qi_2017 | irrelevant | 0 | 0 | The study is an in vitro virological assay measuring the inactivation activity of HIV inhibitors, not a pharmacokinetic study of enfuvirtide. |
| PGx | Rho_2007 | not_relevant | 0 | 0 | The paper discusses nephrotoxicity of ART but does not report any pharmacogenomic effects on PK/PD parameters of enfuvirtide. |
| PGx | Saracino_2009 | not_relevant | 0 | 0 | The paper investigates co-receptor tropism shifts in HIV patients and does not report any pharmacokinetic or pharmacodynamic effects of genetic variants on enfuvirtide. |
| PGx | Si-Mohamed_2007 | not_relevant | 2 | 3 | The study reports HIV gp41 sequence polymorphism rates (genetics of the pathogen) rather than human pharmacogenomics affecting drug PK or PD parameters. |
| popPK | Stewart_2010 | irrelevant | 0 | 0 | The paper describes the discovery and NMR structural characterization of non-peptide entry inhibitors, not a pharmacokinetic study of enfuvirtide. |
| popPK | Stocker_2006 | relevant | 10 | 2 | The paper reports a population PK model for enfuvirtide with qualitative statistics (e.g., 52% IIV in CL), but specific central parameter values (median CL, V, etc.) are not explicitly listed in the provided text. |
| PGx | Teixeira_2010 | not_relevant | 1 | 5 | The paper reports the prevalence of viral gp41 mutations associated with drug resistance in patients, not human pharmacogenomic variants affecting the drug's PK or PD. |
| popPK | Vanangamudi_2023 | irrelevant | 0 | 0 | The paper is a review of NNRTIs and mentions enfuvirtide (EFV/Etv) only in the context of resistance mutations or as a comparator, without reporting any PK parameters for enfuvirtide. |
| popPK | Vingerhoets_2010 | irrelevant | 0 | 0 | The study focuses on the resistance profile and efficacy of etravirine, with enfuvirtide only mentioned as a comparator exclusion criterion in the study population. |
| popPK | Wade_2005 | irrelevant | 0 | 0 | The paper is a general methodological guide for reporting population PK analyses and does not contain any specific data, models, or parameter values for enfuvirtide. |
| popPK | Wang_2009 | irrelevant | 0 | 0 | The paper focuses on the in-vitro efficacy and mechanism of a new peptide, Sifuvirtide, with Enfuvirtide used only as a benchmark; no pharmacokinetic parameters are reported. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for PEGylated C34 peptides (PEG2kC34 and PEG5kC34), not the specific drug enfuvirtide (T20), which is only mentioned as a reference for half-life. |
| popPK | Witvrouw_2003 | irrelevant | 0 | 0 | The study investigates the antiviral mechanism of prostratin in vitro, with enfuvirtide used only as a comparator drug; no PK parameters are reported. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | The study reports in vitro antiviral susceptibility (EC50) of various viruses to enfuvirtide, not pharmacokinetic disposition parameters. |
| PGx | Xu_2017 | not_relevant | 0 | 0 | The text is a general review of HIV entry inhibitors that does not mention any gene variants, genotypes, or phenotypes affecting the PK or PD of enfuvirtide. |
| PGx | Yu_2013 | not_relevant | 0 | 0 | This is a review of antiviral drug discovery targeting HIV gp41; it does not report any pharmacogenomic effects of host gene variants on the pharmacokinetics or pharmacodynamics of enfuvirtide. |
| PGx | Zhang_2004 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction study, not a pharmacogenomic study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:32 UTC</sub>
