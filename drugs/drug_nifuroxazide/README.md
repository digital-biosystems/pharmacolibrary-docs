<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;nifuroxazide&quot;}]"></div>

# nifuroxazide

- **generic name:** nifuroxazide
- **ATC codes:** `A07AX03`
- **DrugBank:** [DB13855](https://go.drugbank.com/drugs/DB13855)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 14:45 | 10:29 | 0/0/0 | 2/0/0 | 0/0/0 | 126,791/9,658 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/0 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2023](drugs/drug_nifuroxazide/pd_Li_2023_CCK8_absorbance.md) | Li C et al., Nifuroxazide Activates the Parthanatos…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0159](https://doi.org/10.1158/1535-7163.MCT-22-0159) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2023](drugs/drug_nifuroxazide/pd_Li_2023_Co_IP_signal.md) | Li C et al., Nifuroxazide Activates the Parthanatos…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0159](https://doi.org/10.1158/1535-7163.MCT-22-0159) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2023](drugs/drug_nifuroxazide/pd_Li_2023_Western_blot_intensity.md) | Li C et al., Nifuroxazide Activates the Parthanatos…, Molecular cancer therapeuti… (2023) | [10.1158/1535-7163.MCT-22-0159](https://doi.org/10.1158/1535-7163.MCT-22-0159) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Roquini_2023](drugs/drug_nifuroxazide/pd_Roquini_2023_adult_worm_viability.md) | Roquini V et al., The Existing Drug Nifuroxazide as an An…, Microbiology spectrum (2023) | [10.1128/spectrum.01393-23](https://doi.org/10.1128/spectrum.01393-23) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Roquini_2023](drugs/drug_nifuroxazide/pd_Roquini_2023_egg_output.md) | Roquini V et al., The Existing Drug Nifuroxazide as an An…, Microbiology spectrum (2023) | [10.1128/spectrum.01393-23](https://doi.org/10.1128/spectrum.01393-23) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Roquini_2023](drugs/drug_nifuroxazide/pd_Roquini_2023_fecal_egg_burden.md) | Roquini V et al., The Existing Drug Nifuroxazide as an An…, Microbiology spectrum (2023) | [10.1128/spectrum.01393-23](https://doi.org/10.1128/spectrum.01393-23) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Roquini_2023](drugs/drug_nifuroxazide/pd_Roquini_2023_intestinal_egg_burden.md) | Roquini V et al., The Existing Drug Nifuroxazide as an An…, Microbiology spectrum (2023) | [10.1128/spectrum.01393-23](https://doi.org/10.1128/spectrum.01393-23) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Roquini_2023](drugs/drug_nifuroxazide/pd_Roquini_2023_worm_burden.md) | Roquini V et al., The Existing Drug Nifuroxazide as an An…, Microbiology spectrum (2023) | [10.1128/spectrum.01393-23](https://doi.org/10.1128/spectrum.01393-23) |

## Coverage

- **PubMed hits:** 24 matched, 23 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hayder_2008.pdf` | Hayder N et al., In vitro antioxidant and antigenotoxic…, Toxicology in vitro : an in… (2008) | pd | 4 | [10.1016/j.tiv.2007.11.015](https://doi.org/10.1016/j.tiv.2007.11.015) | [18222061](https://www.ncbi.nlm.nih.gov/pubmed/18222061) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-11T14:43:53.239105+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almulhim_2026 | irrelevant | 0 | 0 | The paper focuses on the synthesis, structural characterization, and in-vitro biological activity of metal complexes of nifuroxazide, containing no pharmacokinetic data. |
| PD | Almulhim_2026 | not_relevant | 3 | 2 | The paper reports in vitro biological activity (MIC, IC50, inhibition %) for metal complexes of nifuroxazide, but does not provide a pharmacokinetic (PK) or exposure-response (PD) model, nor does it establish a concentration-effect curve for the drug itself in a physiological context. |
| popPK | Ammar_2008 | irrelevant | 0 | 0 | The study is an in-vitro genotoxicity/antioxidant assay where nifuroxazide is used as a mutagenic agent, not a pharmacokinetic study. |
| PD | Ammar_2008 | not_relevant | 0 | 0 | The paper investigates the antimutagenic and antioxidant effects of plant extracts against nifuroxazide-induced mutagenicity, rather than characterizing the pharmacodynamic or exposure-response relationship of nifuroxazide itself. |
| popPK | Bouhlel_2007 | irrelevant | 0 | 0 | The study investigates the antimutagenic and antioxidant properties of plant extracts using nifuroxazide only as a mutagenic agent in a bacterial assay, not as a subject for pharmacokinetic analysis. |
| PD | Bouhlel_2007 | not_relevant | 0 | 0 | The paper investigates the antimutagenic and antioxidant effects of plant extracts on nifuroxazide-induced genotoxicity, not the pharmacodynamic or exposure-response relationship of nifuroxazide itself. |
| popPK | Cedillo-Rivera_1992 | irrelevant | 0 | 0 | The paper is an in-vitro susceptibility study of Giardia lamblia, not a pharmacokinetic study, and nifuroxazide is only tested for anti-parasitic activity. |
| PD | Cedillo-Rivera_1992 | not_relevant | 3 | 2 | The paper reports only a qualitative description of "modest" activity for nifuroxazide without providing specific numeric PD parameters like IC50 or Emax. |
| popPK | Ceruti_2022 | relevant | 4 | 2 | The study reports a qualitative PK profile (half-life ~40 min) and specific concentration values at single time points, but lacks a full compartmental model or standard quantitative parameters like CL and V. |
| popPK | Cevik_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in vitro antimicrobial activity of nifuroxazide analogs, containing no pharmacokinetic data. |
| PD | Cevik_2017 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study reporting the synthesis and in vitro MIC/IC50 values of new compounds, not a pharmacokinetic or pharmacodynamic modeling study for nifuroxazide. |
| popPK | Delgado-Maldonado_2025 | irrelevant | 0 | 0 | The paper is an in-vitro study evaluating the synthesis and biological activity (antiparasitic/antibacterial) of nifuroxazide derivatives, reporting IC50 and MIC values rather than pharmacokinetic parameters. |
| popPK | Elloumi-Mseddi_2019 | irrelevant | 0 | 0 | The paper is an in-vitro cytotoxicity study evaluating anti-tumour activity and does not report any pharmacokinetic parameters for nifuroxazide. |
| popPK | Glupczynski_1988 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on antibiotic eradication of C. pylori and contains no pharmacokinetic parameters for nifuroxazide. |
| popPK | Hayder_2008 | irrelevant | 0 | 0 | The paper concerns in vitro antioxidant properties of myricetin derivatives and does not involve nifuroxazide or pharmacokinetic parameters. |
| PD | Hayder_2008 | not_relevant | 0 | 0 | The paper studies myricetin derivatives from Myrtus communis, not nifuroxazide, and focuses on in vitro antioxidant/antigenotoxic effects without reporting nifuroxazide PD parameters. |
| popPK | Kampert_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on nanoparticle delivery and combinatorial therapy where nifuroxazide is a co-administered agent, not the subject of a pharmacokinetic analysis. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on nifuroxazide's effect on prostate cancer cells (in vitro/in vivo) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Limem-Ben_2009 | irrelevant | 0 | 0 | The paper investigates the biological activity of plant extracts, using nifuroxazide only as a genotoxic agent in a mutagenicity assay, and contains no pharmacokinetic data. |
| PD | Limem-Ben_2009 | not_relevant | 0 | 0 | The paper investigates plant extracts and mentions nifuroxazide only as a genotoxic agent in a mutagenicity assay, providing no pharmacodynamic or exposure-response data for nifuroxazide itself. |
| popPK | Misra_2019 | irrelevant | 0 | 0 | The paper focuses on the synthesis, self-assembly, and anti-cancer efficacy of a nifuroxazide prodrug, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Molina_1997 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for microsporidiosis where nifuroxazide is used as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Palace-Berl_2013 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on anti-Trypanosoma cruzi derivatives and does not report pharmacokinetic parameters for nifuroxazide. |
| PD | Palace-Berl_2013 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel 5-nitro-2-furfuriliden derivatives and compares them to nifurtimox, but does not report any pharmacodynamic or exposure-response relationship for nifuroxazide. |
| popPK | Palace-Berl_2015 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting in-vitro anti-trypanocidal activity (IC50) and does not contain any pharmacokinetic parameters for nifuroxazide. |
| popPK | Roquini_2023 | irrelevant | 0 | 0 | The paper is an in vitro, in vivo, and in silico study of nifuroxazide's antischistosomal activity and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | S_2026 | irrelevant | 0 | 0 | The paper is a study on the synthesis and characterization of metal complexes of nifuroxazide, not a pharmacokinetic study, and contains no PK parameters. |
| PD | S_2026 | not_relevant | 4 | 3 | The paper reports an IC50 value (56.97 μM) for the NiABNF complex in an anti-inflammatory assay, but it does not provide the full dose-response curve data or parameters (like Emax or slope) required to derive a complete PD relationship, and the focus is on the metal complex rather than nifuroxazide alone. |
| popPK | Saber_2022 | irrelevant | 2 | 0 | The study reports relative bioavailability and tissue accumulation ratios but does not provide specific quantitative pharmacokinetic parameters (e.g., CL, V, ka, t1/2) for nifuroxazide. |
| popPK | Tod_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amikacin, not nifuroxazide. |
| PD | Tod_1998 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) study of amikacin, not nifuroxazide, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Wei_2021 | irrelevant | 0 | 0 | The study focuses on the immunomodulatory effects of vincristine and uses nifuroxazide only as a mechanistic STAT3 inhibitor in in-vitro assays, reporting no pharmacokinetic parameters. |
| PD | Wei_2021 | not_relevant | 1 | 0 | The paper reports an IC50 for vincristine, not nifuroxazide, and only qualitatively describes the effect of nifuroxazide on PD-L1 expression without providing numeric dose-response parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_nifuroxazide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
