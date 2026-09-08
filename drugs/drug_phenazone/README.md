# phenazone

- **generic name:** phenazone
- **ATC codes:** `N02BB01`, `S02DA03`
- **DrugBank:** [DB01435](https://go.drugbank.com/drugs/DB01435)
- **groups:** approved

## About

**Description.** An analgesic and antipyretic that has been given by mouth and as ear drops. Antipyrine is often used in testing the effects of other drugs or diseases on drug-metabolizing enzymes in the liver. (From Martindale, The Extra Pharmacopoeia, 30th ed, p29)

**Indication.** Antipyrine is an analgesic often used to test effects of other drugs on liver enzymes.

In combination with benzocaine in otic solutions, antipyrine is indicated for the symptomatic relief of acute otitis media arising from various etiologies.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 14:59 | 15:06 | 2/0/0 | 0/2/0 | 0/0/0 | 120,919/10,404 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Doyle_1981](drugs/drug_phenazone/Phenazone_Doyle1981_reference.md) | Doyle E et al., Comparative pharmacokinetics of antipyr…, Toxicology (1981) | [10.1016/0300-483x(81)90097-4](https://doi.org/10.1016/0300-483x(81)90097-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Eichelbaum_1982](drugs/drug_phenazone/Phenazone_Eichelbaum1982_reference.md) | Eichelbaum M et al., Pharmacokinetics and metabolism of anti…, Arzneimittel-Forschung (1982) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Abotaleb_2025](drugs/drug_phenazone/pd_Abotaleb_2025_TNF.md) | Abotaleb A et al., Synthesis and Biological Evaluation of…, ACS pharmacology & translat… (2025) | [10.1021/acsptsci.4c00546](https://doi.org/10.1021/acsptsci.4c00546) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Abotaleb_2025](drugs/drug_phenazone/pd_Abotaleb_2025_unknown.md) | Abotaleb A et al., Synthesis and Biological Evaluation of…, ACS pharmacology & translat… (2025) | [10.1021/acsptsci.4c00546](https://doi.org/10.1021/acsptsci.4c00546) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tanaka_2017](drugs/drug_phenazone/pd_Tanaka_2017_DA.md) | Tanaka S et al., Prediction of sustained fetal toxicity…, British journal of clinical… (2017) | [10.1111/bcp.13352](https://doi.org/10.1111/bcp.13352) |

## Coverage

- **PubMed hits:** 230 matched, 72 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Greisen_1976.pdf` | Greisen G et al., Two compartment analysis of plasma elim…, Acta pharmacologica et toxi… (1976) | popPK | 10 | [10.1111/j.1600-0773.1976.tb03098.x](https://doi.org/10.1111/j.1600-0773.1976.tb03098.x) | [946370](https://pubmed.ncbi.nlm.nih.gov/946370) | The title confirms a two-compartment PK study of phenazone, but the provided evidence contains no numeric parameter values. |
| `Doyle_1981.pdf` | Doyle E et al., Comparative pharmacokinetics of antipyr…, Toxicology (1981) | popPK | 9 | [10.1016/0300-483x(81)90097-4](https://doi.org/10.1016/0300-483x(81)90097-4) | [7268788](https://pubmed.ncbi.nlm.nih.gov/7268788) | The study reports quantitative PK parameters (Vd, t1/2) for phenazone in non-human primates, but specific numeric values for clearance are not explicitly listed in the text. |
| `Eichelbaum_1982.pdf` | Eichelbaum M et al., Pharmacokinetics and metabolism of anti…, Arzneimittel-Forschung (1982) | popPK | 9 | not captured | [7201837](https://pubmed.ncbi.nlm.nih.gov/7201837) | The study reports quantitative PK parameters (half-life, bioavailability) for phenazone in humans, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| `Chernyak_2016.pdf` | Chernyak YI et al., Impact of dioxins on antipyrine metabol…, Toxicology letters (2016) | pgx | 8 | [10.1016/j.toxlet.2016.04.006](https://doi.org/10.1016/j.toxlet.2016.04.006) | [27067104](https://www.ncbi.nlm.nih.gov/pubmed/27067104) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Huber_1996.pdf` | Huber R et al., Pharmacokinetics of pantoprazole in man, International journal of cl… (1996) | pgx | 7 | not captured | [8793599](https://www.ncbi.nlm.nih.gov/pubmed/8793599) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Klotz_2007.pdf` | Klotz U, Antiarrhythmics: elimination and dosage…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746120-00002](https://doi.org/10.2165/00003088-200746120-00002) | [18027986](https://www.ncbi.nlm.nih.gov/pubmed/18027986) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Matzke_2000.pdf` | Matzke GR et al., Evaluation of the influence of diabetes…, Pharmacotherapy (2000) | pgx | 7 | [10.1592/phco.20.3.182.34775](https://doi.org/10.1592/phco.20.3.182.34775) | [10678296](https://www.ncbi.nlm.nih.gov/pubmed/10678296) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Pienimäki_1997.pdf` | Pienimäki P et al., Pharmacokinetics of oxcarbazepine and c…, Epilepsia (1997) | pgx | 7 | [10.1111/j.1528-1157.1997.tb01122.x](https://doi.org/10.1111/j.1528-1157.1997.tb01122.x) | [9070593](https://www.ncbi.nlm.nih.gov/pubmed/9070593) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chernyak_2020.pdf` | Chernyak YI et al., CYP3A Polymorphism and Chronic Mercury…, Bulletin of experimental bi… (2020) | pgx | 5 | [10.1007/s10517-020-04738-4](https://doi.org/10.1007/s10517-020-04738-4) | [32146629](https://www.ncbi.nlm.nih.gov/pubmed/32146629) | metadata signals extractable PGX data (CYP3A) |

<sub>queue written 2026-08-28T14:53:06.481522+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abotaleb_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro pharmacological evaluation of a new compound (metamorphine) and does not report any pharmacokinetic parameters for phenazone. |
| PD | Baggot_1992 | not_relevant | 1 | 0 | The text is a general review of veterinary pharmacokinetics that mentions phenazone only to compare intrinsic hepatic clearance rates between species, without providing any specific dose-response data, concentration-effect curves, or numeric PD parameters. |
| PGx | Brosen_1990 | not_relevant | 0 | 0 | The paper discusses phenazone only as an inducer of P450 enzymes, not as the substrate whose PK/PD is being analyzed for genetic variation. |
| PD | Brune_2001 | not_relevant | 1 | 0 | The text is a qualitative review discussing the pharmacological properties of phenazone and COX-2 inhibitors without providing any numeric PD parameters or concentration-effect data. |
| PGx | Chernyak_2016 | not_relevant | 2 | 5 | The paper reports the impact of environmental dioxin exposure and smoking on antipyrine metabolism, not a pharmacogenomic effect of a specific gene variant on a PK/PD parameter. |
| PGx | Chernyak_2020 | not_relevant | 5 | 5 | The study examines the association between CYP3A genotypes and 4-hydroxyantipyrine excretion in the context of mercury intoxication, rather than reporting a direct pharmacogenomic effect on phenazone PK/PD parameters. |
| PD | Crooks_1976 | not_relevant | 0 | 0 | The text is a general review of pharmacokinetics in the elderly and does not contain any specific data, analysis, or numeric parameters for phenazone. |
| popPK | Cuny_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of salicylates (acetylsalicylic acid), not phenazone. |
| PD | Davey_1988 | not_relevant | 0 | 0 | The paper is a review of quinolone drug interactions and does not contain any data, analysis, or numeric parameters for phenazone. |
| PGx | DeVane_2001 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of quetiapine, not phenazone, and does not report pharmacogenomic effects. |
| PGx | Eichelbaum_1985 | not_relevant | 0 | 0 | The paper studies carbamazepine metabolism and explicitly states that its epoxidation was not correlated with the metabolism of phenazone (antipyrine). |
| PGx | Eichelbaum_1986 | not_relevant | 0 | 0 | The paper discusses the pharmacogenetics of sparteine metabolism, not phenazone. |
| popPK | Elsheikh_1991 | irrelevant | 0 | 0 | The study investigates antipyrine and sulphadimidine, not phenazone. |
| PD | Galtier_1996 | not_relevant | 0 | 0 | The paper focuses on hepatic drug metabolism and pharmacokinetics in sheep, does not mention phenazone, and provides no numeric pharmacodynamic parameters or exposure-response relationships. |
| PD | Gomha_2015 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for DPP-IV inhibition and qualitative in vivo hypoglycemic effects, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50, slope) linking drug concentration to effect. |
| popPK | Greisen_1976 | relevant | 10 | 0 | The title confirms a two-compartment PK study of phenazone, but the provided evidence contains no numeric parameter values. |
| PD | Gwilt_1991 | not_relevant | 1 | 0 | The text is a review that qualitatively mentions altered dose-response in diabetes but provides no numeric PD parameters or extractable concentration-effect data for phenazone. |
| PGx | Huber_1996 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of pantoprazole, not phenazone, and does not report pharmacogenomic effects. |
| PGx | Huber_1996_2 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of pantoprazole, not phenazone, and does not report pharmacogenomic effects. |
| PGx | Jürgens_2002 | not_relevant | 0 | 0 | The paper investigates the effect of acute hypoxia on CYP enzyme activity using probe drugs (sparteine, cortisol, caffeine, mephenytoin, antipyrine) and does not mention phenazone or any genetic variants. |
| PGx | Kalow_1982 | not_relevant | 0 | 0 | The paper discusses antipyrine (phenazone) only as a general example of a probe drug in the context of ethnic differences and does not report specific pharmacogenomic effects or quantitative PK/PD data for it. |
| PGx | Kearns_1993 | not_relevant | 0 | 0 | The paper reviews drug metabolism in cystic fibrosis but does not mention phenazone or report pharmacogenomic effects on its PK/PD parameters. |
| PGx | Klotz_2007 | not_relevant | 0 | 0 | The paper reviews antiarrhythmics and hepatic impairment, but does not mention phenazone or specific gene variants affecting its PK/PD. |
| PGx | Landes_1995 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of lansoprazole and only mentions phenazone as a probe drug in a general statement about minimal interaction risk, without reporting any pharmacogenomic effects on phenazone. |
| popPK | Leece_1986 | irrelevant | 0 | 0 | The paper investigates the effects of terphenyls on rat hepatic enzymes and does not report pharmacokinetic parameters for phenazone. |
| PD | Leece_1986 | not_relevant | 0 | 0 | The paper studies the effects of terphenyls and polychlorinated terphenyls on rat hepatic enzymes, not phenazone, and does not report a pharmacodynamic exposure-response relationship for phenazone. |
| PD | Levy_1995 | not_relevant | 0 | 0 | The text is a pharmacokinetic review of dipyrone (phenazone) that reports PK parameters (bioavailability, half-life, clearance) but contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Levy_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 4-methyl-amino-antipyrine (MAA), the active metabolite of dipyrone, not phenazone. |
| popPK | Lockwood_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of antipyrine (phenazone) in rats, not phenazone (aminopyrine), and does not report parameters for the target drug. |
| PGx | Marques_2002 | not_relevant | 0 | 0 | The study investigates the CYP isoforms involved in albendazole metabolism using antipyrine as a marker, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Matzke_2000 | not_relevant | 0 | 0 | The study investigates the effect of diabetes mellitus (a disease state) on antipyrine metabolism, not the effect of a specific gene variant or genotype. |
| PGx | Murdock_1975 | not_relevant | 0 | 0 | The paper studies antipyrine (phenazone) pharmacokinetics in infants but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Nakamura_2024 | irrelevant | 0 | 0 | The study focuses on antipyrine, metoprolol, and atenolol, not phenazone. |
| popPK | Nakayama_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine, not phenazone. |
| PD | Nishio_2005 | not_relevant | 2 | 1 | The paper analyzes the correlation between a CYP450 activity marker (antipyrine clearance) and toxicity, but does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for phenazone or the chemotherapy agents. |
| PD | Park_1990 | not_relevant | 1 | 0 | The text is a review discussing methods for assessing enzyme induction/inhibition and mentions phenazone (antipyrine) only as a probe drug, without reporting any specific pharmacokinetic or pharmacodynamic data or numeric parameters. |
| PD | Philip_2024 | not_relevant | 0 | 0 | The paper focuses on molecular docking and simulation of pyrazolone ligands and reports an IC50 for a specific compound (APAU) against MCF-7 cells, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for phenazone. |
| PGx | Pienimäki_1997 | not_relevant | 0 | 0 | The paper studies oxcarbazepine and carbamazepine, not phenazone, and does not report pharmacogenomic effects. |
| popPK | Preiss_1985 | irrelevant | 0 | 0 | The study focuses on adriamycin and antipyrine (phenazone is not the subject drug, and antipyrine is a different compound), so it does not report PK parameters for phenazone. |
| PGx | Ranek_1993 | not_relevant | 0 | 0 | The paper investigates drug metabolism (antipyrine, metronidazole, etc.) in subjects with halothane hepatitis but does not mention phenazone. |
| PD | Steinijans_1994 | not_relevant | 0 | 0 | The paper is a review of pantoprazole drug interactions and does not report any pharmacodynamic or exposure-response data for phenazone. |
| PD | Steinijans_1996 | not_relevant | 0 | 0 | The paper is a review of pantoprazole drug interactions and does not report any pharmacodynamic or exposure-response data for phenazone. |
| PD | Steinijans_1996_2 | not_relevant | 0 | 0 | The paper is a review of pantoprazole drug interactions and does not report any pharmacodynamic or exposure-response data for phenazone. |
| popPK | Tanaka_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ketoprofen, not phenazone. |
| PGx | Ueyama_2007 | not_relevant | 0 | 0 | The paper investigates the effect of diabetes on diazinon toxicity and antipyrine clearance, not the effect of a gene variant on phenazone. |
| PD | Venkataramanan_1989 | not_relevant | 1 | 0 | The text is a review that mentions phenazone only as a probe for oxidative metabolism (PK) and states kinetics are normal, without providing any numeric PD parameters or concentration-effect relationships. |
| PD | Vesell_1983 | not_relevant | 0 | 0 | The paper is a review of methods for assessing pharmacokinetic variability using antipyrine and does not report any pharmacodynamic or exposure-response data for phenazone. |
| PGx | Vetticaden_1988 | not_relevant | 0 | 0 | The paper is a general review of pharmacogenetics and does not report specific data or effects for phenazone. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | The provided evidence is only a conference header with no study data, parameters, or mention of phenazone. |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for phenazone. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving macrolides and mentions phenazone only as a rare interaction partner, without reporting any pharmacogenomic effects or specific PK/PD parameter changes. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_phenazone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
