# sodium fluoride

- **generic name:** sodium fluoride
- **ATC codes:** `A01AA01`, `A12CD01`
- **DrugBank:** [DB09325](https://go.drugbank.com/drugs/DB09325)
- **groups:** approved, investigational

## About

**Description.** Sodium fluoride is an inorganic chemical compound that is a source of the fluoride ion in many applications, including dental care and radiographic imaging when it is used as [Fluoride ion F-18].[L4894] Sodium fluoride's benefits on dental health were first observed in the 1930s, when individuals in communities with fluoridated drinking water showed less tooth decay than those without fluoridated water. The use of fluoride in dental practice began in the 1940s. Now, sodium fluoride may be found in a variety of gels, varnishes, rinses, toothpaste products, and fluoride treatments provided in dental care.[A181670,A181688] According to the American Dental Association (ADA), thorough evidence reviews have indicated that the use of fluoride to prevent and control dental caries is safe when used correctly and is highly effective in reducing the prevalence of caries.[L7691]

**Indication.** Sodium fluoride in the oral or topical form is indicated for the prevention and control of dental caries and for the maintenance of dental health.[A181652,L7670]  Fluoride supplements in the form of tablets and other formulas may be prescribed to prevent tooth decay in high-risk children aged 6 months to 16 years old whose drinking water source contains low fluoride concentrations.[L7691]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 11:09 | 6:03 | 0/1/0 | 1/1/0 | 0/0/0 | 71,534/4,729 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 3/5 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Setnikar_1990](drugs/drug_sodium_fluoride/SodiumFluoride_Setnikar1990_reference.md) | Setnikar I et al., Relative bioavailability of fluoride fr…, Arzneimittel-Forschung (1990) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yang_2010](drugs/drug_sodium_fluoride/pd_Yang_2010_Vascular_tension.md) | Yang E et al., Calcium sensitization induced by sodium…, The Korean journal of physi… (2010) | [10.4196/kjpp.2010.14.1.51](https://doi.org/10.4196/kjpp.2010.14.1.51) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Discigil_2008](drugs/drug_sodium_fluoride/pd_Discigil_2008_vascular_relaxation.md) | Discigil B et al., High-frequency ultrasonic waves cause e…, Revista brasileira de cirur… (2008) | [10.1590/s0102-76382008000200007](https://doi.org/10.1590/s0102-76382008000200007) |

## Coverage

- **PubMed hits:** 41 matched, 24 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Setnikar_1990.pdf` | Setnikar I et al., Relative bioavailability of fluoride fr…, Arzneimittel-Forschung (1990) | popPK | 9 | not captured | [2346544](https://pubmed.ncbi.nlm.nih.gov/2346544) | The study reports quantitative pharmacokinetic parameters (Cmax, tmax, half-lives, AUC ratio) for fluoride derived from sodium fluoride and sodium monofluorophosphate in humans. |
| `Ramkumar_1991.pdf` | Ramkumar V et al., Distinct pathways of desensitization of…, Molecular pharmacology (1991) | pd | 5 | not captured | [1944235](https://www.ncbi.nlm.nih.gov/pubmed/1944235) | metadata signals extractable PD data (EC50) |
| `Godfrey_1989.pdf` | Godfrey PP et al., Subacute and chronic in vivo lithium tr…, Journal of neurochemistry (1989) | pd | 4 | [10.1111/j.1471-4159.1989.tb09148.x](https://doi.org/10.1111/j.1471-4159.1989.tb09148.x) | [2536074](https://www.ncbi.nlm.nih.gov/pubmed/2536074) | metadata signals extractable PD data (EC50) |
| `Graier_1990.pdf` | Graier WF et al., Effect of sodium fluoride on cytosolic…, Cellular signalling (1990) | pd | 4 | [10.1016/0898-6568(90)90067-k](https://doi.org/10.1016/0898-6568(90)90067-k) | [2174691](https://www.ncbi.nlm.nih.gov/pubmed/2174691) | metadata signals extractable PD data (EC50) |
| `van_1999.pdf` | van den Broek PJ et al., Intracellular activity of trovafloxacin…, The Journal of antimicrobia… (1999) | pd | 4 | [10.1093/jac/44.2.193](https://doi.org/10.1093/jac/44.2.193) | [10473225](https://www.ncbi.nlm.nih.gov/pubmed/10473225) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-10T11:08:18.839366+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeagbo_2003 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of NS-398 on rat aorta where sodium fluoride is used only as a non-specific contractile agent, not as the subject drug for PK analysis. |
| PD | Adeagbo_2003 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of NS-398 (a COX-2 inhibitor) on rat aorta, not sodium fluoride; sodium fluoride is only mentioned as a control agonist that was not significantly altered. |
| popPK | Alves_2007 | irrelevant | 0 | 0 | The study is a materials science investigation into the corrosion resistance of titanium alloys in mouthwashes, not a pharmacokinetic study of sodium fluoride. |
| popPK | Bhattacharjee_2024 | irrelevant | 0 | 0 | The study uses 18F-NaF as a PET imaging tracer to assess bone remodeling in osteoarthritis and reports SUV values, not pharmacokinetic disposition parameters (CL, V, ka) for sodium fluoride. |
| popPK | Clausen_2015 | irrelevant | 0 | 0 | The study investigates phytotoxicity and fluoride uptake in willow trees (plants), not pharmacokinetics in humans or animals. |
| PD | Clausen_2015 | not_relevant | 0 | 0 | The paper focuses on phytotoxicity and fluoride uptake in willow trees, which is an ecological/toxicological study, not a pharmacodynamic (drug-response) analysis for a therapeutic agent. |
| popPK | Cohen_1994 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on calculus formation and does not report any pharmacokinetic parameters for sodium fluoride. |
| popPK | Dibbasey_2024 | irrelevant | 0 | 0 | The study compares glucose stability in sodium fluoride tubes versus serum separator tubes and does not report pharmacokinetic parameters for sodium fluoride as a drug. |
| popPK | Discigil_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological experiment using sodium fluoride as a probe to assess endothelial function, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Dubbels_1983 | not_relevant | 0 | 0 | The paper studies the metabolism of benoxinate, not sodium fluoride; sodium fluoride is only mentioned as an inhibitor of the enzyme. |
| PGx | Edamadaka_2024 | not_relevant | 0 | 0 | The paper is a clinical case report on the diagnostic utility of [18F]NaF-PET/CT imaging for thyroid carcinoma and parathyroid adenoma, and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of sodium fluoride. |
| popPK | Godfrey_1989 | irrelevant | 0 | 0 | The study investigates the effect of lithium on sodium fluoride-stimulated inositol phosphate production (mechanistic/pharmacodynamic), not the pharmacokinetics of sodium fluoride. |
| PD | Godfrey_1989 | not_relevant | 0 | 0 | The paper investigates the effect of lithium on sodium fluoride-stimulated inositol phosphate production, not the pharmacodynamic dose-response relationship of sodium fluoride itself. |
| popPK | Goh_2003 | irrelevant | 0 | 0 | The study is a teratogenicity assay (FETAX) reporting developmental toxicity endpoints (LC50, EC50) rather than pharmacokinetic disposition parameters. |
| popPK | Graier_1990 | irrelevant | 0 | 0 | The study investigates cellular mechanisms (Ca2+ and cGMP levels) in endothelial cells, not pharmacokinetic disposition parameters. |
| popPK | He_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on gingivitis outcomes and does not report any pharmacokinetic parameters for sodium fluoride. |
| popPK | Ramkumar_1991 | irrelevant | 0 | 0 | The paper concerns adenosine receptor desensitization in cell lines and does not involve sodium fluoride pharmacokinetics. |
| PD | Ramkumar_1991 | not_relevant | 0 | 0 | The paper focuses on adenosine receptor desensitization in DDT1 MF-2 cells and does not report any pharmacodynamic or exposure-response data for sodium fluoride. |
| popPK | Ratz_1990 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of muscle activation in rabbit femoral arteries, not a pharmacokinetic study, and reports no disposition parameters for sodium fluoride. |
| popPK | Sachpekidis_2014 | irrelevant | 2 | 3 | The study reports compartmental kinetic parameters (k1, k3, influx) for the radiotracer (18)F-NaF in a diagnostic PET context, not systemic population pharmacokinetic parameters (CL, V, t1/2) for sodium fluoride as a therapeutic drug. |
| popPK | Sachpekidis_2020 | irrelevant | 2 | 1 | The study uses 18F-NaF as a diagnostic PET tracer for prognostic analysis in multiple myeloma rather than reporting population pharmacokinetic parameters (CL, V, etc.) for the drug sodium fluoride. |
| popPK | Watkins_2021 | irrelevant | 2 | 0 | The study reports PET kinetic parameters (K1, Ki) for [18F]sodium fluoride as a diagnostic imaging tracer, not systemic pharmacokinetic disposition parameters (CL, V, ka) for sodium fluoride as a therapeutic drug. |
| popPK | Watkins_2022 | irrelevant | 1 | 0 | The study uses [18F]sodium fluoride as a diagnostic imaging tracer to assess joint function and reports kinetic parameters (Ki, K1) related to tracer uptake, not systemic pharmacokinetic disposition parameters (CL, V, t1/2) for the drug itself. |
| popPK | Yang_2010 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium sensitization in permeabilized smooth muscle, not a pharmacokinetic study, and reports no disposition parameters for sodium fluoride. |
| PGx | Zander_2013 | not_relevant | 0 | 0 | The paper describes a bioanalytical method for Ko143 and mentions sodium fluoride only as a preservative in blood collection tubes, not as the drug of interest or in the context of pharmacogenomics. |
| popPK | van_1999 | irrelevant | 0 | 0 | The paper concerns trovafloxacin, not sodium fluoride, and contains no PK parameters. |
| PD | van_1999 | not_relevant | 0 | 0 | The paper discusses trovafloxacin, not sodium fluoride, and focuses on intracellular activity rather than a specific exposure-response model for the queried drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_sodium_fluoride`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
