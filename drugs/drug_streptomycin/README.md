<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;streptomycin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Streptomycin_Du2013_rats&quot;,&quot;label&quot;:&quot;Du_2013_rats&quot;,&quot;href&quot;:&quot;drugs/drug_streptomycin/Streptomycin_Du2013_rats.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# streptomycin

- **generic name:** streptomycin
- **ATC codes:** `A07AA04`, `J01GA01`, `J04AM01`
- **DrugBank:** [DB01082](https://go.drugbank.com/drugs/DB01082)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Streptomycin, an antibiotic derived from _Streptomyces griseus_, was the first aminoglycoside to be discovered and used in practice in the 1940s.[A233325,A233390] Selman Waksman and eventually Albert Schatz were recognized with the Nobel Prize in Medicine for their discovery of streptomycin and its antibacterial activity.[A233325,A232294] Although streptomycin was the first antibiotic determined to be effective against mycobacterium tuberculosis, it has fallen out of favor due to resistance and is now primarily used as adjunctive treatment in cases of multi-drug resistant tuberculosis.[A233325]

**Indication.** Although streptomycin was the first antibiotic available for the treatment of mycobacterium tuberculosis, it is now largely a second line option due to resistance and toxicity.[A233320] Streptomycin may also be used to treat a variety of other infections caused by susceptible strains of aerobic bacteria where other less toxic agents are ineffective. Examples include: _Yersinia pestis_, _Francisella tularensis_, _Brucella_, _Calymmatobacterium granulomatis_ (donovanosis, granuloma inguinale), _H. ducreyi_ (chancroid), _H. influenzae_ (in respiratory, endocardial, and meningeal infections - concomitantly with another antibacterial agents). _K. pneumoniae_ pneumonia (concomitantly with another antibacterial agent), _E.coli_, _Proteus_, _A.aerogenes_, _K. pneumoniae_, and 
_Enterococcus faecalis_ in urinary tract infections, _Streptococcus viridans_, _Enterococcus faecalis_ (in endocardial infections - concomitantly with penicillin), and Gram-negative bacillary bacteremia (concomitantly with another antibacterial agent).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 20:03 | 2:34 | 0/0/0 | 2/1/0 | 0/0/0 | 119,816/2,154 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 0/0 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Du_2013_rats](drugs/drug_streptomycin/Streptomycin_Du2013_rats.md) | Du B et al., Chemiluminescence determination of stre…, Spectrochimica acta. Part A… (2013) | [10.1016/j.saa.2013.07.007](https://doi.org/10.1016/j.saa.2013.07.007) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lee_2023](drugs/drug_streptomycin/pd_Lee_2023_unknown.md) | Lee EB et al., A Pharmacodynamic Study of Aminoglycosi…, Pharmaceuticals (Basel, Swi… (2023) | [10.3390/ph17010027](https://doi.org/10.3390/ph17010027) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Regoes_2004](drugs/drug_streptomycin/pd_Regoes_2004_unknown.md) | Regoes RR et al., Pharmacodynamic functions: a multiparam…, Antimicrobial agents and ch… (2004) | [10.1128/AAC.48.10.3670-3676.2004](https://doi.org/10.1128/AAC.48.10.3670-3676.2004) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Harding_2022](drugs/drug_streptomycin/pd_Harding_2022_minimum_biocide_eradication_concentration.md) | Harding MW et al., Bactericidal Efficacy of Oxidized Silve…, The plant pathology journal (2022) | [10.5423/PPJ.OA.04.2022.0055](https://doi.org/10.5423/PPJ.OA.04.2022.0055) |

## Coverage

- **PubMed hits:** 42 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhu_2001_2.pdf` | Zhu M et al., Population pharmacokinetics of intraven…, Pharmacotherapy (2001) | popPK | 10 | [10.1592/phco.21.13.1037.34625](https://doi.org/10.1592/phco.21.13.1037.34625) | [11560193](https://pubmed.ncbi.nlm.nih.gov/11560193) | The paper is a population PK study of streptomycin, but the provided evidence contains only the abstract and lacks the specific numeric parameter values (CL, V, etc.). |
| `Du_2013.pdf` | Du B et al., Chemiluminescence determination of stre…, Spectrochimica acta. Part A… (2013) | popPK | 9 | [10.1016/j.saa.2013.07.007](https://doi.org/10.1016/j.saa.2013.07.007) | [23892344](https://pubmed.ncbi.nlm.nih.gov/23892344) | The paper reports quantitative pharmacokinetic parameters (CL/F, half-lives, AUC) for streptomycin in rats, and the specific numeric values are explicitly provided in the text. |
| `Jayachandran_1987.pdf` | Jayachandran C et al., Pharmacokinetics of streptomycin with p…, Veterinary research communi… (1987) | popPK | 9 | [10.1007/BF00346193](https://doi.org/10.1007/BF00346193) | [3672898](https://pubmed.ncbi.nlm.nih.gov/3672898) | The study reports quantitative pharmacokinetic parameters (t1/2, Vd) for streptomycin in she-buffaloes, and the numeric values are explicitly present in the text. |

<sub>queue written 2026-09-11T20:02:04.317291+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bernard_1980 | irrelevant | 0 | 0 | The paper is an electrophysiological study of streptomycin's mechanism of action on frog semicircular canals, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Bernard_1983 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on hair cell physiology and does not report any pharmacokinetic parameters for streptomycin. |
| popPK | Harding_2022 | irrelevant | 0 | 0 | The paper is a plant pathology study evaluating bactericidal efficacy against bacterial biofilms, not a pharmacokinetic study of streptomycin. |
| popPK | Lee_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of acetaminophen, with streptomycin used only as an antibiotic to prepare the animal model. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic (PD) analysis of aminoglycosides against E. coli, reporting MIC and PD parameters (EC50, Hill coefficient) rather than pharmacokinetic (PK) disposition parameters like clearance or volume for streptomycin. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The paper is an in-vitro/plant bioassay study on a new antibacterial agent (Lansiumamide B) where streptomycin is only used as a comparator for efficacy, with no pharmacokinetic data reported. |
| PD | Li_2014 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, EC90) for Lansiumamide B, not streptomycin; streptomycin is only mentioned as a qualitative comparator. |
| popPK | Li_2024 | irrelevant | 0 | 0 | The paper is a study on novel antimicrobial compounds where streptomycin is used only as a positive control for antibacterial activity, with no pharmacokinetic data reported. |
| PD | Li_2024 | not_relevant | 0 | 0 | The paper reports antimicrobial activity (EC50/MIC) for novel pyrazole derivatives, with streptomycin mentioned only as a positive control without any exposure-response or PD modeling. |
| popPK | Lim_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on the antibacterial and antibiofilm activity of essential oil, using streptomycin only as a comparator agent, and contains no pharmacokinetic parameters. |
| PD | Lim_2022 | not_relevant | 0 | 0 | The paper studies the chemical composition and biological activities of Backhousia citriodora essential oil, not the pharmacodynamics of streptomycin. |
| popPK | Louie_2011 | irrelevant | 0 | 0 | The study focuses on moxifloxacin pharmacodynamics, and streptomycin is only mentioned as a comparator standard of care without any PK parameters reported. |
| PD | Louie_2011 | not_relevant | 0 | 0 | The paper focuses on moxifloxacin pharmacodynamics; streptomycin is only mentioned as a standard of care without any PD analysis or parameters. |
| popPK | Matsuhashi_1996 | irrelevant | 0 | 0 | The paper investigates bacterial resistance mechanisms and cellular signaling, not the pharmacokinetics of streptomycin. |
| popPK | Movassaghi_2025 | irrelevant | 0 | 0 | The paper is a proteomic study on the effects of antibiotics on mammalian cell culture, not a pharmacokinetic study, and contains no PK parameters for streptomycin. |
| popPK | Omulo_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study on antimicrobial resistance in E. coli and does not report any pharmacokinetic parameters for streptomycin. |
| popPK | Regoes_2004 | irrelevant | 0 | 0 | The paper reports in-vitro pharmacodynamic parameters (MIC, Hill coefficient) for streptomycin, not pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Soloviev_1977 | irrelevant | 2 | 0 | The study focuses on the relationship between neuromuscular blocking effect and concentration (pharmacodynamics) rather than reporting quantitative pharmacokinetic disposition parameters like clearance or volume for streptomycin. |
| popPK | Tang_2021 | irrelevant | 0 | 0 | The paper is a phytochemical study on fungal/bacterial activity of plant compounds, and streptomycin is only mentioned as a comparator antibiotic, not as the subject of a pharmacokinetic study. |
| PD | Tang_2021 | not_relevant | 0 | 0 | The paper focuses on the isolation and antifungal/antibacterial activity of a plant compound (TDDE); streptomycin is only mentioned as a positive control in a single-concentration assay, with no exposure-response or dose-response analysis performed for it. |
| popPK | Wollenberger_2000 | irrelevant | 0 | 0 | The paper reports ecotoxicity data (EC50/NOEC) for Daphnia magna, not pharmacokinetic parameters for streptomycin. |
| PD | Wollenberger_2000 | not_relevant | 3 | 5 | The paper reports standard ecotoxicological endpoints (EC50, NOEC) for streptomycin in Daphnia magna, which are dose-response metrics but do not constitute a pharmacodynamic (PK/PD) model or exposure-response analysis in the context of drug efficacy or mechanism. |
| popPK | Wrześniok_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of streptomycin's effect on melanocytes and does not report any pharmacokinetic parameters. |
| popPK | Zhu_2001_2 | relevant | 10 | 0 | The paper is a population PK study of streptomycin, but the provided evidence contains only the abstract and lacks the specific numeric parameter values (CL, V, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_streptomycin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
