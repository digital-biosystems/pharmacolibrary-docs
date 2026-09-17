<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;polymyxin B&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PolymyxinB_Chauzy2022_reference&quot;,&quot;label&quot;:&quot;Chauzy_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Chauzy2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Chen2022_reference&quot;,&quot;label&quot;:&quot;Chen_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Chen2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Lakota2018_reference&quot;,&quot;label&quot;:&quot;Lakota_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Lakota2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# polymyxin B

- **generic name:** polymyxin B
- **ATC codes:** `A07AA05`, `J01XB02`, `S01AA18`, `S02AA11`, `S03AA03`
- **DrugBank:** [DB00781](https://go.drugbank.com/drugs/DB00781)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Polymyxin B was discovered in the 1940s[A176429]. They are basic polypeptides of about eight amino acids and have cationic detergent action on cell membranes[A176426]. Polymyxin B is used for infections with gram-negative organisms, but may be neurotoxic and nephrotoxic[A176426,FDA Label]. All gram-positive bacteria, fungi, and the gram-negative cocci, are resistant[A176426]. It is appropriate for treatment of infections of the urinary tract, meninges, and blood stream, caused by susceptible strains of _Pseudomonas aeruginosa_[FDA Label]. Polymyxin B has a narrow therapeutic index and so its use is limited and unlikely to be used first line[A176429].

**Indication.** Polymyxin B is indicated for the treatment of infections of the urinary tract, meninges, and blood stream, caused by susceptible strains of <i>Pseudomonas aeruginosa</i>[L52160].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 15:46 | 18:25 | 2/0/1 | 5/0/0 | 0/0/0 | 281,813/18,078 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 0/3 | 16/1 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: F, Cl, Vd, ka, Tlag, k12, k21 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Chauzy_2022_reference](drugs/drug_polymyxin_b/PolymyxinB_Chauzy2022_reference.md) | Chauzy A et al., PKPD Modeling of the Inoculum Effect of, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.842921](https://doi.org/10.3389/fphar.2022.842921) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Chen_2022_reference](drugs/drug_polymyxin_b/PolymyxinB_Chen2022_reference.md) | Chen N et al., Population pharmacokinetics of polymyxi…, Annals of translational med… (2022) | [10.21037/atm-22-236](https://doi.org/10.21037/atm-22-236) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Lakota_2018_reference](drugs/drug_polymyxin_b/PolymyxinB_Lakota2018_reference.md) | Lakota EA et al., Personalizing Polymyxin B Dosing Using…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.00483-18](https://doi.org/10.1128/AAC.00483-18) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Akrong_2022](drugs/drug_polymyxin_b/pd_Akrong_2022_viable_bacterial_burden.md) | Akrong G et al., A New Pharmacokinetic-Pharmacodynamic M…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01789-21](https://doi.org/10.1128/AAC.01789-21) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chauzy_2022](drugs/drug_polymyxin_b/pd_Chauzy_2022_Acinetobacter_baumannii_bacterial_count.md) | Chauzy A et al., PKPD Modeling of the Inoculum Effect of, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.842921](https://doi.org/10.3389/fphar.2022.842921) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hanafin_2025](drugs/drug_polymyxin_b/pd_Hanafin_2025_SCr.md) | Hanafin PO et al., Population Pharmacokinetic/Toxicodynami…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3729](https://doi.org/10.1002/cpt.3729) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mahadevan_2026](drugs/drug_polymyxin_b/pd_Mahadevan_2026_bacterial_load.md) | Mahadevan R et al., A mechanism-based pharmacokinetic/pharm…, Antimicrobial agents and ch… (2026) | [10.1128/aac.00782-25](https://doi.org/10.1128/aac.00782-25) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Soeorg_2026](drugs/drug_polymyxin_b/pd_Soeorg_2026_bacterial_count.md) | Soeorg H et al., Pharmacokinetic-pharmacodynamic modelin…, Antimicrobial agents and ch… (2026) | [10.1128/aac.00274-26](https://doi.org/10.1128/aac.00274-26) |

## Coverage

- **PubMed hits:** 151 matched, 41 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hanafin_2023.pdf` | Hanafin PO et al., A population pharmacokinetic model of p…, Clinical microbiology and i… (2023) | popPK | 10 | [10.1016/j.cmi.2023.05.018](https://doi.org/10.1016/j.cmi.2023.05.018) | [37217076](https://pubmed.ncbi.nlm.nih.gov/37217076) | The paper describes a population PK model for polymyxin B, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence text. |
| `Li_2023.pdf` | Li X et al., Population pharmacokinetics of polymyxi…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15855](https://doi.org/10.1111/bcp.15855) | [37461291](https://pubmed.ncbi.nlm.nih.gov/37461291) | The paper reports a population pharmacokinetic model for polymyxin B with explicit numeric values for clearance (2.43 L/h) and volume of distribution (23.11 L) in the text. |
| `Manchandani_2018.pdf` | Manchandani P et al., Population Pharmacokinetics of Polymyxi…, Clinical pharmacology and t… (2018) | popPK | 10 | [10.1002/cpt.981](https://doi.org/10.1002/cpt.981) | [29238962](https://pubmed.ncbi.nlm.nih.gov/29238962) | The paper reports quantitative population PK parameters (clearance and volume of distribution) for polymyxin B with specific numeric values present in the text. |
| `Matcha_2026.pdf` | Matcha S et al., Population pharmacokinetics of polymyxi…, Clinical microbiology and i… (2026) | popPK | 10 | [10.1016/j.cmi.2026.05.036](https://doi.org/10.1016/j.cmi.2026.05.036) | [42229684](https://pubmed.ncbi.nlm.nih.gov/42229684) | The paper is a population PK study for polymyxin B, but the specific numeric parameter values (CL, V, Q) are not present in the provided text, which only describes covariate effects and model structure. |
| `Wang_2022.pdf` | Wang P et al., Population pharmacokinetics of polymyxi…, International journal of an… (2022) | popPK | 10 | [10.1016/j.ijantimicag.2022.106599](https://doi.org/10.1016/j.ijantimicag.2022.106599) | [35526750](https://pubmed.ncbi.nlm.nih.gov/35526750) | The paper is a population PK study of polymyxin B, but the specific numeric parameter values (CL, V, Q) are not listed in the provided text, only AUC and dosing recommendations. |
| `Rao_2021.pdf` | Rao GG et al., Antibiotic pharmacokinetic/pharmacodyna…, International journal of an… (2021) | pd | 5 | [10.1016/j.ijantimicag.2021.106368](https://doi.org/10.1016/j.ijantimicag.2021.106368) | [34058336](https://www.ncbi.nlm.nih.gov/pubmed/34058336) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Wang_2020.pdf` | Wang C et al., Pharmacokinetic/Pharmacodynamic Modelin…, Microbial drug resistance (… (2020) | pd | 5 | [10.1089/mdr.2019.0152](https://doi.org/10.1089/mdr.2019.0152) | [31794682](https://www.ncbi.nlm.nih.gov/pubmed/31794682) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Yi_2022.pdf` | Yi W et al., Polymyxin B, Frontiers in cellular and i… (2022) | pd | 4 | [10.3389/fcimb.2022.866357](https://doi.org/10.3389/fcimb.2022.866357) | [35419296](https://www.ncbi.nlm.nih.gov/pubmed/35419296) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-11T15:36:40.470322+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akrong_2022 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic (PD) modeling of the inoculum effect, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for polymyxin B. |
| popPK | Bian_2021 | irrelevant | 2 | 0 | The paper is a PK/PD breakpoint study that utilizes population PK parameters from a separate Phase I trial rather than reporting original quantitative disposition parameters (CL, V, etc.) for polymyxin B in the evidence provided. |
| PGx | Brumfield_2017 | not_relevant | 0 | 0 | The paper describes laboratory techniques for characterizing Vibrio cholerae biotypes, including polymyxin B resistance assays, but does not report pharmacogenomic effects on human PK or PD parameters. |
| PGx | Brumfield_2018 | not_relevant | 0 | 0 | The paper describes using polymyxin B resistance as a phenotypic marker to classify Vibrio cholerae biotypes, not a pharmacogenomic effect on the drug's PK or PD parameters in humans. |
| PGx | Cho_2026 | not_relevant | 0 | 0 | The paper describes a bacterial peptide (TimP) that sensitizes bacteria to polymyxin B, which is a microbiological mechanism of action, not a human pharmacogenomic effect on PK or PD parameters. |
| popPK | Hanafin_2023 | relevant | 10 | 0 | The paper describes a population PK model for polymyxin B, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided evidence text. |
| popPK | Hanafin_2025 | relevant | 10 | 2 | The paper is a population PK/TD study for polymyxin B, but the specific numeric PK parameter values (CL, V, Q) are derived from a previously published model (ref 33) and are not explicitly listed in the provided evidence, which focuses on toxicodynamic parameters and fAUC exposures. |
| PGx | Hussein_2024 | not_relevant | 0 | 0 | The paper investigates the antibacterial synergy and metabolic mechanisms of polymyxin B and teixobactin in bacteria, containing no data on human pharmacogenomics or PK/PD parameters. |
| PGx | Jain_2009 | not_relevant | 0 | 0 | The paper focuses on the formulation and antimicrobial activity of silver nanoparticles, mentioning polymyxin B only in the context of drug interaction synergy, with no pharmacogenomic data. |
| PGx | Khalid_2023 | not_relevant | 0 | 0 | The paper describes a biofilm model for chronic wound infections and tests antimicrobial tolerance, but does not investigate pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of polymyxin B. |
| PGx | Khuntia_2021 | not_relevant | 0 | 0 | The paper is an epidemiological review of cholera in Odisha, India, and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of polymyxin B. |
| PGx | Lenhard_2019 | not_relevant | 0 | 0 | The paper investigates bacterial co-culture interactions and does not report any human pharmacogenomic effects on polymyxin B PK or PD. |
| PGx | Li_2009 | not_relevant | 0 | 0 | The paper describes a bioassay for mycotoxins where polymyxin B is used as a permeation enhancer, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The paper investigates environmental co-contamination (copper and tetracycline) inducing antibiotic resistance in E. coli, not the effect of human gene variants on the pharmacokinetics or pharmacodynamics of polymyxin B. |
| popPK | Mahadevan_2026 | irrelevant | 2 | 0 | The study is a mechanism-based PK/PD simulation using static concentration time-kill data and does not report original quantitative disposition parameters (CL, V, Q, ka) for polymyxin B, relying instead on cited population PK models for exposure simulations. |
| PGx | Masubuchi_2008 | not_relevant | 0 | 0 | The paper studies the effect of inflammation on hepatic CYP450 enzymes in rats and uses polymyxin B only as a tool to neutralize endotoxin, not as the subject of a pharmacogenomic study. |
| popPK | Matcha_2026 | relevant | 10 | 2 | The paper is a population PK study for polymyxin B, but the specific numeric parameter values (CL, V, Q) are not present in the provided text, which only describes covariate effects and model structure. |
| PGx | Mir_2026 | not_relevant | 0 | 0 | The paper characterizes bacterial antimicrobial resistance (genotype-phenotype concordance of resistance genes) rather than human pharmacogenomic effects on polymyxin B PK/PD. |
| PGx | Mishra_2008 | not_relevant | 0 | 0 | The paper investigates the effect of LPS on P-glycoprotein function in cell lines, using polymyxin B only as a control agent to block TLR4, and does not report pharmacogenomic effects on polymyxin B's PK or PD. |
| PGx | Mohiuddin_2020 | not_relevant | 0 | 0 | The paper investigates bacterial persistence and metabolic inhibitors in E. coli and P. aeruginosa, not human pharmacogenomics or PK/PD parameters of polymyxin B. |
| popPK | Qin_2026 | irrelevant | 2 | 0 | The study is a nephrotoxicity analysis using simulated exposure metrics (AUC, Cmax, Cmin) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, Q, ka) or a compartmental model for polymyxin B. |
| popPK | Rao_2021 | irrelevant | 0 | 0 | The provided evidence consists only of a title suggesting a review or methodological paper on PK/PD modeling, with no specific quantitative pharmacokinetic parameters for polymyxin B present. |
| PD | Rao_2021 | not_relevant | 1 | 0 | The text is a title of a review article and does not contain the full text or specific numeric PD parameters for polymyxin B. |
| popPK | Soeorg_2026 | irrelevant | 2 | 0 | The study is an in-vitro pharmacodynamic (PD) modeling paper using time-kill data, not a pharmacokinetic (PK) study reporting quantitative disposition parameters (CL, V, etc.) for polymyxin B. |
| PGx | Teo_2023 | not_relevant | 0 | 0 | The paper reports in vitro antimicrobial susceptibility of bacterial isolates to polymyxin B, not the effect of human gene variants on the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Van_2016 | not_relevant | 0 | 0 | The paper describes a bacterial mutation affecting virulence and phagocytosis resistance, not a human pharmacogenomic variant affecting polymyxin B PK or PD. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The provided evidence contains only the paper title and no quantitative pharmacokinetic parameters or data for polymyxin B. |
| PD | Wang_2020 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, results, or any numeric PD parameters for polymyxin B. |
| popPK | Wang_2022 | relevant | 10 | 2 | The paper is a population PK study of polymyxin B, but the specific numeric parameter values (CL, V, Q) are not listed in the provided text, only AUC and dosing recommendations. |
| popPK | Wang_2024 | irrelevant | 2 | 2 | The paper is a systematic review that reports only summary ranges of parameters from other studies rather than original quantitative PK data for a specific population. |
| PGx | Wei_2026 | not_relevant | 0 | 0 | The paper investigates bacterial wbp gene variants and their impact on virulence and clinical prognosis, not human pharmacogenomic variants affecting polymyxin B pharmacokinetics or pharmacodynamics. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper investigates the synergistic antibacterial activity of simeprevir and polymyxins against MRSA, but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Yi_2022 | irrelevant | 0 | 0 | The evidence contains only the drug name with no pharmacokinetic data, study details, or numeric parameters. |
| PD | Yi_2022 | not_relevant | 0 | 0 | The provided text contains only the drug name "Polymyxin B" and lacks any data, analysis, or parameters regarding pharmacodynamics or exposure-response relationships. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper investigates environmental antibiotic-induced tolerance in bacteria, not human pharmacogenomics or PK/PD parameters. |
| PGx | Zhao_2022 | not_relevant | 0 | 0 | The paper investigates the evolutionary dynamics of bacterial resistance to polymyxin B, not the effect of human gene variants on the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Zhou_2008 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP1A2 downregulation in sepsis and uses polymyxin B only as a tool to neutralize endotoxin, not to study pharmacogenomic effects on its PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_polymyxin_b`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
