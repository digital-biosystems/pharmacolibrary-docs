<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;becaplermin&quot;}]"></div>

# becaplermin

- **generic name:** becaplermin
- **ATC codes:** `A01AD08`, `D03AX06`
- **DrugBank:** [DB00102](https://go.drugbank.com/drugs/DB00102) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Becaplermin, a recombinant platelet-derived growth factor, was used to help heal skin ulcers such as venous ulcers and other wounds.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2313188](https://www.wikidata.org/wiki/Q2313188) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-03 23:44 | 5:12 | 0/0/0 | 1/0/0 | 0/0/0 | 193,133/5,174 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 6/36 | 13/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Yoshikawa_2001_35S](drugs/drug_becaplermin/pd_Yoshikawa_2001_35S.md) | proteoglycan synthesis ← PDGF-BB · direct linear effect | — | Yoshikawa Y et al., Dose-related cellular effects of platel…, Acta orthopaedica Scandinav… (2001) | [10.1080/00016470152846646](https://doi.org/10.1080/00016470152846646) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Yoshikawa_2001_Hyp](drugs/drug_becaplermin/pd_Yoshikawa_2001_Hyp.md) | collagen synthesis ← PDGF-BB · direct linear effect | — | Yoshikawa Y et al., Dose-related cellular effects of platel…, Acta orthopaedica Scandinav… (2001) | [10.1080/00016470152846646](https://doi.org/10.1080/00016470152846646) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Yoshikawa_2001_Pro](drugs/drug_becaplermin/pd_Yoshikawa_2001_Pro.md) | noncollagen protein synthesis ← PDGF-BB · direct linear effect | — | Yoshikawa Y et al., Dose-related cellular effects of platel…, Acta orthopaedica Scandinav… (2001) | [10.1080/00016470152846646](https://doi.org/10.1080/00016470152846646) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Yoshikawa_2001_Thy](drugs/drug_becaplermin/pd_Yoshikawa_2001_Thy.md) | DNA synthesis ← PDGF-BB · direct linear effect | — | Yoshikawa Y et al., Dose-related cellular effects of platel…, Acta orthopaedica Scandinav… (2001) | [10.1080/00016470152846646](https://doi.org/10.1080/00016470152846646) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=becaplermin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: A2M (modulator), PDGFRA (target), PDGFRB (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 209 matched, 92 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knorr_1997.pdf` | Knorr M et al., Proliferative response of cultured huma…, Graefe's archive for clinic… (1997) | pd | 4 | [10.1007/BF00946945](https://doi.org/10.1007/BF00946945) | [9349953](https://www.ncbi.nlm.nih.gov/pubmed/9349953) | metadata signals extractable PD data (EC50) |
| `Rooney_1994.pdf` | Rooney BC et al., Production of platelet-derived growth f…, FEBS letters (1994) | pd | 4 | [10.1016/0014-5793(94)80411-7](https://doi.org/10.1016/0014-5793(94)80411-7) | [8313971](https://www.ncbi.nlm.nih.gov/pubmed/8313971) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-03T23:42:40.833509+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Abdulraheem_2026 | irrelevant | 0 | 0 | The paper focuses on drug repositioning for ouabain and helenalin in pulmonary fibrosis and does not study becaplermin. |
| PD | Al-Abdulraheem_2026 | not_relevant | 0 | 0 | The paper focuses on drug repositioning of ouabain and helenalin for pulmonary fibrosis and does not mention becaplermin or report any pharmacodynamic parameters for it. |
| popPK | Attia_2023 | irrelevant | 0 | 0 | The study investigates olaratumab, gemcitabine, and docetaxel in soft tissue sarcoma and does not involve becaplermin. |
| PD | Attia_2023 | not_relevant | 0 | 0 | The paper is a clinical trial report for olaratumab, gemcitabine, and docetaxel, and does not contain any pharmacodynamic or exposure-response analysis for becaplermin. |
| popPK | Barale_2018 | irrelevant | 0 | 0 | The paper studies simvastatin's effects on inflammation and platelet activation, and does not mention becaplermin or report any pharmacokinetic parameters for it. |
| PD | Barale_2018 | not_relevant | 0 | 0 | The paper investigates simvastatin, not becaplermin, and reports clinical outcomes and correlations with LDL-C rather than a pharmacodynamic exposure-response model for the target drug. |
| popPK | Barrett_1996 | irrelevant | 0 | 0 | The paper investigates PDGF receptor expression regulation in fibroblasts and does not contain any pharmacokinetic data for becaplermin. |
| PD | Barrett_1996 | not_relevant | 0 | 0 | The paper investigates PDGFR expression regulation in fibroblasts and does not involve the drug becaplermin or report any pharmacodynamic parameters for it. |
| popPK | Bobkova_2025 | irrelevant | 0 | 0 | The paper is a systematic review of in vitro pharmacological effects of PI3K/AKT/mTOR inhibitors on rheumatoid arthritis synoviocytes and does not report pharmacokinetic parameters for becaplermin. |
| PD | Bobkova_2025 | not_relevant | 1 | 0 | The paper is a systematic review and meta-analysis of preclinical in vitro studies on PI3K/AKT/mTOR inhibitors in rheumatoid arthritis synoviocytes; it does not report specific pharmacokinetic or pharmacodynamic data for becaplermin, nor does it provide extractable numeric PD parameters (e.g., Emax, EC50) for this drug. |
| popPK | Calvo_2026 | irrelevant | 0 | 0 | The paper focuses on combination therapy design for diffuse midline glioma and does not involve becaplermin or its pharmacokinetics. |
| PD | Calvo_2026 | not_relevant | 0 | 0 | The paper focuses on network-based drug combination design for glioma and does not mention becaplermin or report any pharmacodynamic parameters. |
| popPK | Carmona_2026 | irrelevant | 0 | 0 | The paper is an in vitro study on equine tendon inflammation and platelet-rich plasma, containing no data on becaplermin pharmacokinetics. |
| popPK | Carmona_2026_2 | irrelevant | 0 | 0 | The paper is a study on canine platelet-rich gel biomaterials and NSAID effects, containing no data on becaplermin pharmacokinetics. |
| popPK | Chacon-Alberty_2026 | irrelevant | 0 | 0 | The paper is a biomarker analysis of cell therapy in heart failure patients and does not involve becaplermin or pharmacokinetic modeling. |
| popPK | Chae_2020 | irrelevant | 0 | 0 | The paper is a tutorial on quantitative systems pharmacology and dynamical systems, focusing on a cell circuit model for inflammation and fibrosis, with no mention of becaplermin or its pharmacokinetic parameters. |
| PD | Chae_2020 | not_relevant | 0 | 0 | The paper is a tutorial on dynamical systems theory and QSP concepts using a generic inflammation/fibrosis model; it does not report any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for becaplermin. |
| popPK | Chuang_2026 | irrelevant | 0 | 0 | The study investigates the transcriptomic effects of a TDO2 inhibitor (680C91) in fibroid xenografts and does not involve becaplermin or report any pharmacokinetic parameters. |
| PD | Chuang_2026 | not_relevant | 0 | 0 | The paper studies the TDO2 inhibitor 680C91, not becaplermin, and reports transcriptomic changes without any exposure-response or dose-response modeling. |
| popPK | Dagher_2025 | irrelevant | 0 | 0 | The paper describes a high-throughput immunoassay platform (nELISA) for cytokine profiling and does not contain any pharmacokinetic data for becaplermin. |
| PD | Dagher_2025 | not_relevant | 0 | 0 | The paper describes a high-throughput protein profiling platform (nELISA) and does not report any pharmacodynamic or exposure-response data for becaplermin. |
| popPK | Denk_1999 | irrelevant | 0 | 0 | The paper is an in-vitro study on corneal fibroblast proliferation and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Denk_1999 | not_relevant | 0 | 0 | The paper investigates the effect of heparin on corneal fibroblast proliferation, not becaplermin. |
| popPK | Doumit_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell proliferation and does not report any pharmacokinetic parameters for becaplermin. |
| PD | Doumit_1993 | not_relevant | 0 | 0 | The paper studies growth factors (bFGF, EGF, etc.) in cell culture and does not mention becaplermin or report any pharmacodynamic parameters for it. |
| popPK | Drexler_2025 | irrelevant | 0 | 0 | The paper investigates serotonergic neuron-glioma interactions in brain cancer and does not involve becaplermin or any pharmacokinetic parameters. |
| PD | Drexler_2025 | not_relevant | 0 | 0 | The paper investigates serotonergic neuron-glioma interactions and does not mention becaplermin or report any pharmacodynamic parameters for it. |
| popPK | Fahimipour_2026 | irrelevant | 0 | 0 | The study investigates the in vitro release kinetics of PDGF-BB from graft materials, not the pharmacokinetics of becaplermin. |
| popPK | Feldmann_2021 | irrelevant | 0 | 0 | The paper focuses on the mutagenesis of PDGFRα-Fc for HCMV inhibition and does not report pharmacokinetic parameters for becaplermin. |
| popPK | Ferrer_2025 | irrelevant | 0 | 0 | The paper investigates oolong tea compounds and breast cancer mechanisms, containing no data on becaplermin pharmacokinetics. |
| PD | Ferrer_2025 | not_relevant | 0 | 0 | The paper investigates the antioxidant and electron-shuttling properties of Oolong tea compounds and their in silico binding to cancer proteins; it does not report any pharmacokinetic or pharmacodynamic data for becaplermin. |
| PGx | Frame_2017 | not_relevant | 0 | 0 | The paper studies the vasoactive effects of fibronectin-derived peptides (EVA-1) and does not involve becaplermin or pharmacogenomics. |
| popPK | Gardner_2024 | irrelevant | 0 | 0 | The paper studies olaratumab, nabpaclitaxel, and gemcitabine in pancreatic cancer and does not mention becaplermin or report any pharmacokinetic parameters for it. |
| PD | Gardner_2024 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy and safety of olaratumab in pancreatic cancer and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for becaplermin. |
| popPK | Graminski_1994 | irrelevant | 0 | 0 | The paper describes an in-vitro bioassay for PDGF receptor function and does not report pharmacokinetic parameters for becaplermin. |
| PD | Graminski_1994 | not_relevant | 0 | 0 | The paper describes a bioassay for PDGF-BB receptor function and does not involve the drug becaplermin. |
| popPK | Graves_1996 | irrelevant | 0 | 0 | The paper describes a mechanistic signaling pathway study in human arterial smooth muscle cells and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Graves_1996 | not_relevant | 0 | 0 | The paper studies the mechanism of action of PDGF in smooth muscle cells and does not mention becaplermin or report any pharmacokinetic or pharmacodynamic modeling for it. |
| popPK | Ho_2005 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro antiproliferative activity of PDGF receptor inhibitors, not the pharmacokinetics of becaplermin. |
| PD | Ho_2005 | not_relevant | 0 | 0 | The paper reports in vitro kinase inhibition and antiproliferative IC50s for a different compound (JNJ-10198409), not becaplermin, and contains no pharmacodynamic or exposure-response analysis. |
| popPK | Hooshmand-Rad_1997 | irrelevant | 0 | 0 | The paper investigates cell signaling pathways (PI3-kinase and Rac) in endothelial cells and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Hooshmand-Rad_1997 | not_relevant | 0 | 0 | The paper investigates the signaling pathway of PDGF and the effect of the inhibitor wortmannin, not the pharmacodynamics of becaplermin. |
| popPK | Horgan_2024 | irrelevant | 0 | 0 | The paper investigates inflammatory and hormonal responses to water immersion in rugby players and does not involve becaplermin or pharmacokinetic modeling. |
| popPK | Kabra_2021 | irrelevant | 0 | 0 | The paper studies a different drug (SBR-294) for liver fibrosis and does not mention becaplermin or report its pharmacokinetic parameters. |
| PD | Kabra_2021 | not_relevant | 0 | 0 | The paper studies SBR-294, not becaplermin. |
| popPK | Khedri_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on liver fibrosis and exosomes, and does not involve becaplermin or report any pharmacokinetic parameters. |
| PD | Khedri_2024 | not_relevant | 0 | 0 | The paper studies WJ-MSC exosomes, not becaplermin. |
| popPK | Kim_2015 | irrelevant | 0 | 0 | The paper studies the in vitro effects of Chrysanthemum boreale on vascular smooth muscle cells and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Kim_2015 | not_relevant | 0 | 0 | The paper studies Chrysanthemum boreale floral water, not becaplermin. |
| PGx | Kirchmeyer_2023 | not_relevant | 0 | 0 | The paper investigates the impact of the PNPLA3 I148M variant on circulating cytokine levels in liver disease patients, not on the pharmacokinetics or pharmacodynamics of becaplermin. |
| popPK | Knorr_1995 | irrelevant | 0 | 0 | The study investigates the effect of PDGF on cytosolic calcium in cultured retinal pericytes and does not report pharmacokinetic parameters for becaplermin. |
| PD | Knorr_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of PDGF (Platelet-Derived Growth Factor), not becaplermin. |
| popPK | Knorr_1997 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Knorr_1997 | not_relevant | 0 | 0 | The paper studies the effect of platelet-derived growth factor (PDGF) on fibroblasts, not becaplermin, and does not report any pharmacodynamic parameters for becaplermin. |
| popPK | Kovalenko_1997 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of AG1296 on PDGF receptors and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Kovalenko_1997 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of AG1296, not becaplermin, and does not report any pharmacodynamic parameters for the target drug. |
| popPK | Kozawa_1995 | irrelevant | 0 | 0 | The paper investigates the mechanism of platelet-derived growth factor on phospholipase D in osteoblast-like cells and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Kozawa_1995 | not_relevant | 0 | 0 | The paper studies the mechanism of action of PDGF-BB on phospholipase D in osteoblasts and does not report any pharmacokinetic or pharmacodynamic modeling for becaplermin. |
| popPK | LeGrand_1993 | irrelevant | 0 | 0 | The paper is a histologic study of growth factor dose responses in sponge implants and does not report pharmacokinetic parameters for becaplermin. |
| PD | LeGrand_1993 | not_relevant | 0 | 0 | The paper evaluates dose responses for growth factors (PDGF, bFGF, etc.) in a sponge implant model and does not mention becaplermin or report any PD parameters for it. |
| popPK | Li_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and wound healing efficacy of PDGF-BB (becaplermin) in rats, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Liao_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for lucitanib, not becaplermin. |
| PD | Liao_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for lucitanib, not becaplermin, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper focuses on the cellular hierarchy and therapeutic targets (CDK6) in diffuse hemispheric glioma, with no mention of becaplermin or pharmacokinetic parameters. |
| PD | Liu_2024 | not_relevant | 0 | 0 | The paper focuses on the cellular origin of glioma and identifies CDK6 as a target, but it does not report any pharmacodynamic or exposure-response analysis for becaplermin. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study characterizes the variability of angiome biomarkers in healthy participants and does not involve becaplermin or its pharmacokinetics. |
| popPK | Lokker_1997 | irrelevant | 0 | 0 | The paper is a mechanistic study of PDGF receptor binding and signaling, not a pharmacokinetic study of becaplermin. |
| PD | Lokker_1997 | not_relevant | 0 | 0 | The paper investigates the structural biology of PDGF receptors and the mechanism of action of monoclonal antibodies, not the pharmacodynamics of becaplermin. |
| popPK | Majid_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lenvatinib, not becaplermin. |
| PD | Majid_2024 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for lenvatinib, not becaplermin. |
| popPK | Manshadi_2026 | irrelevant | 0 | 0 | The paper is a computational simulation of anti-VEGF therapy (Bevacizumab, Ranibizumab, Brolucizumab) and does not involve becaplermin or report any pharmacokinetic parameters. |
| PD | Manshadi_2026 | not_relevant | 0 | 0 | The paper is a computational simulation study of anti-VEGF agents (Bevacizumab, Ranibizumab, Brolucizumab) and does not involve becaplermin or report any pharmacodynamic parameters. |
| popPK | March_1993 | irrelevant | 0 | 0 | The paper investigates the antiproliferative effects of 8-methoxypsoralen and UVA on bovine smooth muscle cells and does not involve becaplermin or pharmacokinetic parameters. |
| PD | March_1993 | not_relevant | 0 | 0 | The paper investigates 8-methoxypsoralen (8-MOP) and UVA, not becaplermin. |
| popPK | Matsuno_2002 | irrelevant | 0 | 0 | The paper studies quinazoline derivatives as PDGF receptor inhibitors and does not involve becaplermin or report its pharmacokinetic parameters. |
| PD | Matsuno_2002 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and qualitative in vivo efficacy (percent inhibition) for a different class of drugs (quinazoline derivatives), not becaplermin, and lacks a formal exposure-response or dose-response model with derivable PD parameters. |
| popPK | Maximova_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of infliximab, not becaplermin. |
| PD | Maximova_2023 | not_relevant | 0 | 0 | The paper investigates infliximab, not becaplermin, and focuses on PK and cytokine changes rather than a specific PD model for the target drug. |
| popPK | Mayr_2025 | irrelevant | 0 | 0 | The study focuses on avapritinib for glioma treatment and does not report pharmacokinetic parameters for becaplermin. |
| PD | Mayr_2025 | not_relevant | 0 | 0 | The paper focuses on avapritinib, not becaplermin, and does not report specific numeric PD parameters for the queried drug. |
| PGx | Minniti_2020 | not_relevant | 0 | 0 | The paper studies hematopoietic stem cells and chemokines in sickle cell disease, not the pharmacokinetics or pharmacodynamics of becaplermin. |
| popPK | Mor_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CM-101 (a monoclonal antibody), not becaplermin. |
| PD | Mor_2024 | not_relevant | 3 | 2 | The paper reports PK parameters and qualitative changes in biomarkers (CCL24, fibrosis markers) but does not provide a formal PD model, Emax/EC50 parameters, or a quantitative concentration-effect curve for becaplermin (CM-101). |
| popPK | Mullins_1994 | irrelevant | 0 | 0 | The paper studies a PDGF receptor antagonist (SCH 13929) and does not involve becaplermin or report any pharmacokinetic parameters. |
| PD | Mullins_1994 | not_relevant | 0 | 0 | The paper studies SCH 13929, not becaplermin. |
| popPK | Möbus_2025 | irrelevant | 0 | 0 | The paper investigates the transcriptomic response of endothelial cells to bleomycin and TGF-beta in the context of pulmonary fibrosis and does not involve becaplermin or pharmacokinetic modeling. |
| PD | Möbus_2025 | not_relevant | 0 | 0 | The paper investigates the effects of bleomycin and TGF-beta on endothelial cells, not becaplermin, and does not report pharmacodynamic parameters for the target drug. |
| popPK | Nånberg_1993 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on PDGF and Ras signaling, not a pharmacokinetic study of becaplermin. |
| PD | Nånberg_1993 | not_relevant | 0 | 0 | The paper studies the mechanism of action of PDGF on Ras in permeabilized fibroblasts and does not involve the drug becaplermin or report any pharmacokinetic/pharmacodynamic modeling. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data for becaplermin. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not mention becaplermin or report any specific pharmacodynamic or exposure-response data. |
| popPK | Orlandi_2010 | irrelevant | 0 | 0 | The paper investigates the role of Flt-1 in vascular smooth muscle cell apoptosis and contains no pharmacokinetic data for becaplermin. |
| PD | Orlandi_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of Flt-1 signaling in vascular smooth muscle cells and does not report any pharmacodynamic or exposure-response data for becaplermin. |
| popPK | Osterhout_2026 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Osterhout_2026 | not_relevant | 0 | 0 | The paper reports biomarker changes for seralutinib, not becaplermin, and does not provide exposure-response or dose-response PD parameters. |
| popPK | Othberg_1995 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on PDGF effects on neurons and does not involve becaplermin or pharmacokinetic parameters. |
| popPK | Palanisamy_2023 | irrelevant | 0 | 0 | The study is an in vitro/in silico investigation of Nigella sativa extracts and does not involve becaplermin or report any pharmacokinetic parameters. |
| PD | Palanisamy_2023 | not_relevant | 0 | 0 | The paper studies Nigella sativa extracts, not becaplermin, and reports no pharmacodynamic parameters for the target drug. |
| PGx | Park_2026 | not_relevant | 0 | 0 | The paper investigates cytokine profiles in moyamoya disease and does not mention becaplermin or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Pierce_1989 | irrelevant | 0 | 0 | The paper studies the wound-healing effects of PDGF and TGF-beta, not the pharmacokinetics of becaplermin. |
| PD | Pierce_1989 | not_relevant | 0 | 0 | The paper studies PDGF and TGF-beta in a rat wound model, not becaplermin, and does not report any exposure-response or dose-response PD parameters for becaplermin. |
| popPK | Prakash_2026 | irrelevant | 0 | 0 | The paper is a review on phytochemicals and nanotechnology for Type 2 Diabetes and does not mention becaplermin or report any pharmacokinetic parameters for it. |
| PD | Prakash_2026 | not_relevant | 0 | 0 | The paper is a review on phytochemicals and nanotechnology for Type 2 Diabetes and does not mention becaplermin or report any pharmacodynamic parameters. |
| popPK | Prazdnova_2026 | irrelevant | 0 | 0 | The paper is an in silico study on Bacillus lipopeptides and has no relation to becaplermin pharmacokinetics. |
| PD | Prazdnova_2026 | not_relevant | 0 | 0 | The paper is a computational study (molecular docking and dynamics) of Bacillus lipopeptides and does not involve becaplermin or report any pharmacodynamic exposure-response data. |
| popPK | Resink_1995 | irrelevant | 0 | 0 | The paper investigates the mitogenic effects of lipoproteins on vascular smooth muscle cells and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Resink_1995 | not_relevant | 0 | 0 | The paper studies the mitogenic effects of lipoproteins (LDL/HDL) on vascular smooth muscle cells and does not mention becaplermin or report any PD parameters for it. |
| popPK | Roberts_2005 | irrelevant | 0 | 0 | The paper studies the pharmacology of CP-673,451, not becaplermin. |
| popPK | Rooney_1994 | irrelevant | 0 | 0 | The paper describes the production and binding characteristics of the PDGFR-beta receptor in E. coli and contains no pharmacokinetic data for becaplermin. |
| PD | Rooney_1994 | not_relevant | 0 | 0 | The paper describes the expression and ligand binding characterization of PDGFR-beta in E. coli, not the pharmacodynamics of becaplermin. |
| popPK | Rothman_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of imatinib, not becaplermin. |
| popPK | Sabuda-Widemann_2009 | irrelevant | 0 | 0 | The paper investigates the mechanistic effects of mycophenolic acid on rat mesangial cells and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Sabuda-Widemann_2009 | not_relevant | 0 | 0 | The paper investigates mycophenolic acid (MPA), not becaplermin. |
| popPK | Sachinidis_1996 | irrelevant | 0 | 0 | The paper investigates the effects of gangliosides on PDGF signaling in vascular smooth muscle cells and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Sachinidis_1996 | not_relevant | 0 | 0 | The paper investigates the effects of gangliosides (GM1, GM2, GM3) on PDGF signaling, not becaplermin. |
| popPK | Sanches_2026 | irrelevant | 0 | 0 | The paper focuses on biomarkers for papillary thyroid cancer and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Sanches_2026 | not_relevant | 0 | 0 | The paper focuses on biomarker discovery for papillary thyroid cancer using machine learning and omics data, and does not contain any pharmacodynamic or exposure-response analysis for becaplermin. |
| popPK | Sappington_2026 | irrelevant | 0 | 0 | The paper describes computational protein binder design and does not contain any pharmacokinetic data for becaplermin. |
| PD | Sappington_2026 | not_relevant | 0 | 0 | The paper describes the computational design and structural characterization of protein binders, not the pharmacodynamics of becaplermin. |
| PGx | Sarkar_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of a glutaminase inhibitor (CB-839) in vascular biology and does not mention becaplermin or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Schmitz_2015 | irrelevant | 0 | 0 | The study investigates cetuximab pharmacokinetics/perfusion in head and neck cancer, not becaplermin. |
| popPK | Schulz_2024 | irrelevant | 0 | 0 | The paper investigates synovial fluid biomarkers and MRI changes in osteoarthritis patients after surgery and does not involve becaplermin or pharmacokinetic parameters. |
| popPK | Shen_2007 | irrelevant | 0 | 0 | The paper studies the antitumor effects of antibodies against PDGFR and VEGFR, not the pharmacokinetics of becaplermin. |
| PD | Shen_2007 | not_relevant | 0 | 0 | The paper studies becaplermin's target (PDGFR) using a different antibody (1B3) and does not report any pharmacodynamic or exposure-response data for becaplermin itself. |
| popPK | Shreiber_2001 | irrelevant | 0 | 0 | The paper investigates the mechanistic effects of PDGF-BB on fibroblast behavior in vitro and does not report any pharmacokinetic parameters for becaplermin. |
| popPK | Spacey_1998 | irrelevant | 0 | 0 | The paper describes a different drug (3744W) and focuses on in-vitro kinase inhibition, not becaplermin pharmacokinetics. |
| PD | Spacey_1998 | not_relevant | 0 | 0 | The paper discusses the compound 3744W (an indolocarbazole), not becaplermin. |
| popPK | Sroka_2010 | irrelevant | 0 | 0 | The paper studies roscovitine derivatives (LGR1406) in vascular smooth muscle cells and does not involve becaplermin. |
| PD | Sroka_2010 | not_relevant | 0 | 0 | The paper studies LGR1406 and roscovitine, not becaplermin. |
| popPK | Takagishi_2021 | irrelevant | 0 | 0 | The study investigates the therapeutic efficacy of PDGF-B modified nanoparticles in mice and does not report pharmacokinetic parameters for becaplermin. |
| PD | Takagishi_2021 | not_relevant | 0 | 0 | The paper studies PDGF-B modified nanoparticles, not becaplermin, and does not report pharmacodynamic parameters for becaplermin. |
| popPK | Thomopoulos_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of growth factors on tendon fibroblasts and does not report pharmacokinetic parameters for becaplermin. |
| PD | Thomopoulos_2005 | not_relevant | 0 | 0 | The paper studies growth factors (PDGF-BB, bFGF, etc.) in an in vitro cell culture model, not becaplermin, and does not report pharmacokinetic or pharmacodynamic parameters for the target drug. |
| popPK | Toki_2001 | irrelevant | 0 | 0 | The paper describes the isolation and biochemical properties of a novel cyclic peptide (RP-1776) that inhibits PDGF binding, and does not involve becaplermin or pharmacokinetic parameters. |
| PD | Toki_2001 | not_relevant | 0 | 0 | The paper studies the mechanism of action of a novel cyclic peptide (RP-1776) and does not report any pharmacodynamic or exposure-response data for becaplermin. |
| popPK | Vantler_2010 | irrelevant | 0 | 0 | The paper investigates the cardioprotective effects of PDGF-BB (becaplermin) in rat heart tissue, focusing on apoptosis and contractility rather than pharmacokinetic parameters. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | The paper is a review on nanocarriers for phytochemicals in diabetic wound healing and does not mention becaplermin or report any pharmacokinetic parameters. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | The paper is a review on nanocarrier delivery of phytochemicals for diabetic wound healing and does not mention becaplermin or report any pharmacodynamic parameters. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper investigates cytokine changes after HCV clearance and does not mention becaplermin or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Wierzbicki_2026 | irrelevant | 0 | 0 | The paper investigates HIF pathway modulation in renal cell carcinoma and does not mention becaplermin or report any pharmacokinetic parameters for it. |
| popPK | Xia_2026 | irrelevant | 0 | 0 | The study investigates the toxicological effects of cytarabine on mouse testes and does not involve becaplermin or its pharmacokinetics. |
| PD | Xia_2026 | not_relevant | 0 | 0 | The paper investigates the toxicological effects of cytarabine (Ara-C) on the testis, not becaplermin, and does not report pharmacodynamic parameters for the target drug. |
| popPK | Yagi_1997 | irrelevant | 0 | 0 | The paper studies a different compound (Ki6783) and focuses on PDGF receptor inhibition, not becaplermin pharmacokinetics. |
| PD | Yagi_1997 | not_relevant | 0 | 0 | The paper studies Ki6783, not becaplermin. |
| popPK | Yoshikawa_2001 | irrelevant | 0 | 0 | The study investigates the in vitro effects of PDGF-BB on rabbit tendon synthesis and does not report pharmacokinetic parameters for becaplermin. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper investigates Ph-triazole for pancreatic cancer and does not mention becaplermin or report any pharmacokinetic parameters. |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper investigates Ph-triazole, not becaplermin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
