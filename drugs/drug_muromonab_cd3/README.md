<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;muromonab-CD3&quot;}]"></div>

# muromonab-CD3

- **generic name:** muromonab-CD3
- **ATC codes:** `L04AG01`
- **DrugBank:** [DB00075](https://go.drugbank.com/drugs/DB00075) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

It has been withdrawn from the market and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416494](https://www.wikidata.org/wiki/Q416494) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 18:19 | 8:48 | 0/0/0 | 1/1/0 | 0/0/0 | 940,254/9,633 | einfracz / qwen3.8-27b | 45 | 6/34 | 43/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Cheng_2016_tumor_growth](drugs/drug_muromonab_cd3/pd_Cheng_2016_tumor_growth.md) | tumor growth biomarker turnover ← muromonab_cd3 | — | Cheng M et al., Successful engineering of a highly pote…, Oncoimmunology (2016) | [10.1080/2162402X.2016.1168557](https://doi.org/10.1080/2162402X.2016.1168557) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Debray_2003_none](drugs/drug_muromonab_cd3/pd_Debray_2003_none.md) | none ← none · model not identified | — | Debray D et al., Therapy for acute rejection in pediatri…, Paediatric drugs (2003) | [10.2165/00128072-200305020-00002](https://doi.org/10.2165/00128072-200305020-00002) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=muromonab_cd3).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD247 (unknown), CD3D (unknown), CD3E (binder), CD3G (unknown), FCGR3B (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 834 matched, 112 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alsuliman_2017 | not_relevant | 0 | 0 | The paper discusses MDR1/P-gp expression in T cells and chemotherapy resistance in AML, but does not mention muromonab_cd3 or any pharmacogenomic effect on its PK/PD parameters. |
| popPK | Augustin_2026 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics and safety of MAGE-A4-TCB, not muromonab_cd3. |
| PGx | Avila_2004 | not_relevant | 0 | 0 | The study reports long-term transplant survival outcomes based on HLA matching and immunosuppression protocols, not pharmacogenomic effects on PK/PD parameters of muromonab_cd3. |
| popPK | Bender_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for mosunetuzumab (a CD20xCD3 bispecific antibody), not muromonab_cd3. |
| popPK | Biris_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of anti-thymocyte globulin (ATG), not muromonab_cd3. |
| popPK | Bovens_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rituximab, not muromonab_cd3. |
| popPK | Bravo_2026 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of odronextamab, a different bispecific antibody, and does not contain data for muromonab_cd3. |
| popPK | Campanile_2026 | irrelevant | 0 | 0 | The paper focuses on PBPK modeling of mRNA-encoded antibodies in mice and does not mention or model muromonab_cd3. |
| PGx | Cecka_1997 | not_relevant | 0 | 0 | The paper is a registry report on kidney transplant outcomes and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of muromonab-cd3. |
| popPK | Cheng_2016 | irrelevant | 0 | 0 | The paper describes the engineering and efficacy of a GD2/CD3 bispecific antibody (hu3F8-scBA), not the pharmacokinetics of muromonab-CD3. |
| popPK | Chiocchetti_2006 | irrelevant | 0 | 0 | The paper studies the effects of L-glutamate on T-cell death and mentions anti-CD3 antibodies only as a tool to induce apoptosis, not as the subject of pharmacokinetic analysis. |
| popPK | Christenson_2026 | irrelevant | 0 | 0 | The paper is a clinical trial of copanlisib and nivolumab for colorectal cancer and does not contain any pharmacokinetic data for muromonab_cd3. |
| popPK | Conti_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium-regulated inositol phosphate metabolism in permeabilized murine T cells and does not report pharmacokinetic parameters for muromonab_cd3. |
| popPK | Croese_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for IBC-Ab002 (an anti-PD-L1 antibody), not muromonab-cd3. |
| popPK | Deluce_2026 | irrelevant | 0 | 0 | The paper studies a novel Fc-T54 fusion protein for immunotherapy and contains no data for muromonab_cd3. |
| popPK | Digiovanni_2026 | irrelevant | 0 | 0 | The paper investigates IRAK1 signaling and chemoresistance in NSCLC, with no mention of muromonab_cd3 pharmacokinetics. |
| popPK | Draheim_2004 | irrelevant | 0 | 0 | The study investigates the anti-inflammatory mechanism of a phosphodiesterase 4 inhibitor (AWD 12-281) in human cells, not the pharmacokinetics of muromonab_cd3. |
| popPK | El-Tayeb_2009 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity of nucleoside prodrugs for adenosine A2A receptors and does not involve muromonab_cd3 or its pharmacokinetics. |
| PGx | Flechner_1998 | not_relevant | 0 | 0 | The paper is a clinical trial comparing acyclovir and ganciclovir for CMV prophylaxis and does not report pharmacogenomic effects on PK/PD parameters for muromonab_cd3. |
| popPK | Gong_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for talquetamab, not muromonab_cd3. |
| popPK | Gu_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study of LOXL4 and T-cell exhaustion in mice and does not report any pharmacokinetic parameters for muromonab_cd3. |
| popPK | Guo_2026 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and antitumor efficacy of an oncolytic vaccinia virus in mice and contains no pharmacokinetic data for muromonab_cd3. |
| PGx | Haga_2024 | not_relevant | 0 | 0 | The paper focuses on Hepatitis C virus vaccine antigens and immune cell activation, with no mention of muromonab_cd3 or pharmacogenomics. |
| popPK | Hahn_2025 | irrelevant | 0 | 0 | The study investigates the immunological effects of estrogen in male primates and does not involve the drug muromonab_cd3 or its pharmacokinetics. |
| popPK | Han_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug SHR-2010 (an anti-MASP-2 antibody), not for muromonab_cd3. |
| popPK | Hibma_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for elranatamab, not muromonab_cd3. |
| popPK | Hill_1995 | irrelevant | 0 | 0 | The paper investigates the pharmacology of WIN 17317-3, a potassium channel antagonist, and contains no data on the pharmacokinetics of muromonab_cd3. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper is an immunological study of necrotizing enterocolitis using CyTOF and transcriptomics; it does not report pharmacokinetic parameters for muromonab_cd3. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Fanastomig (EMB-02), not muromonab_cd3. |
| popPK | Kivisäkk_2009 | irrelevant | 0 | 0 | The study focuses on the immunological effects of natalizumab in MS patients and does not report any pharmacokinetic parameters for muromonab_cd3. |
| popPK | Korol_2026 | irrelevant | 0 | 0 | The paper studies GABA_A receptor agonists in T cells and does not mention muromonab_cd3 or report any pharmacokinetic parameters for it. |
| popPK | Lappas_2005 | irrelevant | 0 | 0 | The paper studies adenosine receptor signaling in murine T cells and does not report any pharmacokinetic parameters for muromonab-cd3. |
| popPK | Lebrec_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for SBT115301, not muromonab_cd3. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper reports on the structural engineering of anti-CD3 antibodies to reduce polyreactivity; it does not contain clinical pharmacogenomic data linking gene variants to PK/PD parameters of muromonab-cd3. |
| popPK | Loing_1996 | irrelevant | 0 | 0 | The paper describes a cell-based functional assay for lipopeptide delivery using anti-CD3 antibodies for activation, and does not report any pharmacokinetic parameters for muromonab-CD3. |
| popPK | Lykhopiy_2026 | irrelevant | 0 | 0 | The paper describes the engineering and functional characterization of IL-2 receptor agonistic antibodies, not the pharmacokinetics of muromonab_cd3. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | The paper investigates B7-H6-targeted bispecific antibodies and IL-15 fusion proteins in tumor models, not the pharmacokinetics of muromonab-CD3. |
| PGx | Martin-Donaire_2007 | not_relevant | 0 | 0 | The paper investigates the CD154 gene in the context of rheumatoid arthritis susceptibility and uses anti-CD3 antibodies as a non-specific stimulant in vitro, rather than evaluating the effect of genetics on the pharmacokinetics or pharmacodynamics of the specific drug muromonab_cd3. |
| popPK | Mi_2026 | irrelevant | 0 | 0 | The study focuses on nanoparticle delivery systems in tumor-bearing mice and does not report PK parameters for muromonab_cd3. |
| popPK | Nelson_2026 | irrelevant | 0 | 0 | The paper investigates the therapeutic effects of interleukin-10 on sulfur dioxide-induced lung injury in mice and does not mention muromonab_cd3 or report pharmacokinetic parameters for it. |
| popPK | Nie_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and immune tolerance of uricase (UOX) conjugates in mice and rats, and does not mention or study the drug muromonab_cd3. |
| PGx | Nishida_2013 | not_relevant | 0 | 0 | The paper discusses NK cell immunotherapy and mentions anti-CD3 antibodies only as a reagent for T-cell depletion, not as a study of muromonab-cd3 pharmacogenomics. |
| PGx | Norman_1991 | not_relevant | 0 | 0 | The study focuses on transplant outcomes and immunosuppression strategies, with no pharmacogenomic data or specific analysis of muromonab-CD3 PK/PD parameters linked to genetic variants. |
| popPK | Oonishi_1988 | irrelevant | 0 | 0 | This is an in-vitro binding study analyzing receptor affinity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Oosterhuis_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of prednisolone, not muromonab_cd3. |
| popPK | Pan_2020 | irrelevant | 0 | 0 | The study focuses on the engineering and efficacy of novel multispecific antibodies (NAPPA), and while it mentions an anti-CD3 scFv derived from Muromonab-CD3 (OKT3), it does not report pharmacokinetic parameters for Muromonab-CD3 itself. |
| popPK | Papathanasiou_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for belantamab mafodotin, which is a different drug than muromonab_cd3. |
| PGx | Pascher_2005 | not_relevant | 0 | 0 | The paper discusses TNF-alpha inhibitors in transplantation and mentions muromonab only in passing regarding resistant rejection; it does not report a pharmacogenomic effect on the PK or PD of muromonab. |
| PGx | Perri_2017 | not_relevant | 0 | 0 | The paper focuses on the down-regulation of the PTPN22 gene using siRNA and its effect on T cell signaling, without evaluating the pharmacokinetic or pharmacodynamic parameters of muromonab-CD3. |
| PGx | Peterlin_2024 | not_relevant | 0 | 0 | The paper reports the PK of ABBV-184, not muromonab_cd3, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Peterson_1998 | not_relevant | 0 | 0 | The paper investigates recombinant human interleukin-11 (rhIL-11) in a rat model, not muromonab_cd3, and reports no pharmacogenomic data for the specified drug. |
| popPK | Pool_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of horse anti-thymocyte globulin (ATGAM), not muromonab_cd3. |
| popPK | Reek_1999 | irrelevant | 0 | 0 | The study evaluates blood transfusion requirements and does not report any pharmacokinetic parameters for muromonab_cd3. |
| popPK | Rhee_2026 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on GPCR degradation via GTACs and does not contain any pharmacokinetic data or mention of muromonab_cd3. |
| PGx | Rizvi_2002 | not_relevant | 0 | 0 | The paper reports outcomes of pediatric renal transplants and mentions the use of OKT3 for rejection treatment, but does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of muromonab-cd3. |
| popPK | Sanchez_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for cibisatamab, not muromonab_cd3. |
| popPK | Schmidt_1987 | irrelevant | 0 | 0 | The paper describes the immunosuppressive effects of a recombinant retroviral protein (p15E) on T-cell proliferation, not the pharmacokinetics of muromonab_cd3. |
| popPK | Scrivens_2005 | irrelevant | 0 | 0 | The paper describes the functional expression of the P2Y14 receptor in murine T-lymphocytes and does not report any pharmacokinetic parameters for muromonab_cd3. |
| popPK | Sinnollareddy_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of epcoritamab, not muromonab_cd3. |
| popPK | Stadler_2016 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of a different drug (6PHU3, an anti-CLDN6/CD3 bispecific antibody) and does not report pharmacokinetic parameters for muromonab-CD3. |
| PGx | Stein_2019 | not_relevant | 2 | 3 | The study investigates the effect of FcγRIIA polymorphisms on cytokine responses to generic mouse anti-CD3 antibodies, not the specific pharmacokinetic or pharmacodynamic parameters of the therapeutic monoclonal antibody muromonab-CD3 (OKT3) in a clinical context. |
| PGx | Thakur_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of chemosensitization by bispecific antibodies in pancreatic cancer cell lines and does not report any pharmacogenomic effects on PK/PD parameters for muromonab_cd3. |
| popPK | Verdonk_2026 | irrelevant | 0 | 0 | The study investigates pembrolizumab pharmacodynamics (T-cell signaling) in NSCLC patients and does not report pharmacokinetic parameters for muromonab_cd3. |
| popPK | Wan_2013 | irrelevant | 0 | 0 | The paper investigates the immunomodulatory mechanism of astragaloside II and contains no pharmacokinetic data or mention of muromonab-CD3. |
| popPK | Wiczling_2010 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for otelixizumab (TRX4), a different anti-CD3 antibody, not muromonab_cd3. |
| popPK | Xia_1999 | irrelevant | 0 | 0 | The paper is an immunological study on CTLA-4 expression in mouse T cells and does not report any pharmacokinetic parameters for muromonab-CD3. |
| popPK | Xing_2012 | irrelevant | 0 | 0 | The paper studies HIV latency-reversing agents in cell models and does not report pharmacokinetic parameters for muromonab_cd3. |
| popPK | Xu_2015 | irrelevant | 0 | 0 | The paper describes a new bispecific antibody (hu3F8-BsAb) containing a CD3 fragment, not the pharmacokinetics of muromonab-CD3 itself. |
| popPK | Ye_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for iberdomide, not muromonab_cd3. |
| popPK | Zhao_2003 | irrelevant | 0 | 0 | The study investigates the immunological mechanism of action of paclitaxel and vinblastine on murine mastocytoma cells using an anti-CD3 antibody, containing no pharmacokinetic data for muromonab-CD3. |
| PGx | Zhao_2025 | not_relevant | 0 | 0 | The paper does not study muromonab_cd3 or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | van_2026 | irrelevant | 0 | 0 | The paper is a preclinical study in pigs focusing on the neurophysiological effects of resiniferatoxin on myocardial infarction, containing no pharmacokinetic data for muromonab_cd3. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
