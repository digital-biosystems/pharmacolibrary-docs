<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;givosiran&quot;}]"></div>

# givosiran

- **generic name:** givosiran
- **ATC codes:** `A16AX16`
- **DrugBank:** [DB15066](https://go.drugbank.com/drugs/DB15066) · **PubChem:** not captured
- **groups:** approved

## About

**Description.** Givosiran is a small interfering RNA (siRNA) directed towards 5-aminolevulinic acid synthase, a critical enzyme in the heme biosynthesis pathway.[L10202] It is manufactured by Alnylam Pharmaceuticals and was first approved for use in the United States in November 2019 for the treatment of adults with acute hepatic porphyria, a genetic disorder in which the overproduction of toxic heme intermediates leads to neuro-, nephro-, and gastrotoxicity.[L10202] Givosiran represents an important step forward in the treatment of acute hepatic porphyria as it is the first approved pharmacotherapy for the prevention of acute attacks - previous strategies involved non-therapeutic measures (e.g. trigger avoidance), intravenous [hemin] for the treatment of attacks, and liver transplantation in refractory cases.[A187991] Givosiran is the second-ever FDA-approved member of the siRNA drug class (the first being [patisiran]), a new class of drugs promising an important and exciting step forward in the treatment of genetic disorders.

**Indication.** Givosiran is indicated for the treatment of adults with acute hepatic porphyria.[L10202]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 02:21 | 3:57 | 0/0/0 | 0/1/0 | 0/0/0 | 9,007/1,336 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/5 | 4/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Fontana_2026_TTR](drugs/drug_givosiran/pd_Fontana_2026_TTR.md) | serum transthyretin ← vutrisiran · delayed effect through an effect compartment | — | Fontana M et al., Vutrisiran-Mediated Knockdown of Transt…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01651-3](https://doi.org/10.1007/s40262-026-01651-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=givosiran) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…Approximately 5-14% of the dose recovered in urine is unchanged parent drug, and 4-13% is…”</sub> | prose |

<sub>Actors without a tissue in the table: ALAS1 (inhibitor), ALAS1 mRNA (cleavage).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 35 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ayyar_2024.pdf` | Ayyar VS et al., Mechanistic Pharmacokinetics and Pharma…, Journal of pharmaceutical s… (2024) | popPK | 9 | [10.1016/j.xphs.2023.10.026](https://doi.org/10.1016/j.xphs.2023.10.026) | [37871778](https://pubmed.ncbi.nlm.nih.gov/37871778) | The paper describes a mechanistic PK-PD model for givosiran and reports specific parameters like KD and allometric exponents, but standard quantitative disposition parameters (CL, V, Q) are not explicitly listed in the provided text. |
| `Lee_2023.pdf` | Lee J et al., Pharmacokinetic-pharmacodynamic model o…, CPT: pharmacometrics & syst… (2023) | popPK | 9 | [10.1002/psp4.12957](https://doi.org/10.1002/psp4.12957) | [36883675](https://pubmed.ncbi.nlm.nih.gov/36883675) | The paper describes a population PK/PD model for givosiran, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Agarwal_2020.pdf` | Agarwal S et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacology and t… (2020) | popPK | 8 | [10.1002/cpt.1802](https://doi.org/10.1002/cpt.1802) | [31994716](https://pubmed.ncbi.nlm.nih.gov/31994716) | The paper is a Phase I PK study of givosiran, but the evidence only provides qualitative ranges for half-life and metabolite exposure, lacking specific numeric values for clearance, volume, or compartmental parameters. |
| `Fan_2026.pdf` | Fan X et al., A computational model-powered platform…, Molecular therapy. Nucleic… (2026) | popPK | 8 | [10.1016/j.omtn.2026.102936](https://doi.org/10.1016/j.omtn.2026.102936) | [42112102](https://pubmed.ncbi.nlm.nih.gov/42112102) | The paper describes a computational PK/PD model for givosiran, but the specific numeric parameter values are not present in the provided evidence. |
| `Vassiliou_2021.pdf` | Vassiliou D et al., A Drug-Drug Interaction Study Evaluatin…, Clinical pharmacology and t… (2021) | pgx | 7 | [10.1002/cpt.2419](https://doi.org/10.1002/cpt.2419) | [34510420](https://www.ncbi.nlm.nih.gov/pubmed/34510420) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-09-30T02:21:21.050433+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abosalha_2022 | irrelevant | 0 | 0 | The paper is a general review of siRNA therapeutics and does not report specific quantitative pharmacokinetic parameters for givosiran. |
| PD | Abosalha_2022 | not_relevant | 1 | 0 | The text is a general review of siRNA therapeutics and does not provide specific numeric PD parameters or exposure-response data for givosiran. |
| popPK | Agarwal_2020 | relevant | 8 | 2 | The paper is a Phase I PK study of givosiran, but the evidence only provides qualitative ranges for half-life and metabolite exposure, lacking specific numeric values for clearance, volume, or compartmental parameters. |
| popPK | An_2024 | irrelevant | 2 | 0 | The paper is a review article discussing GalNAc-conjugated siRNAs generally, and the provided evidence contains no original quantitative PK parameter values for givosiran. |
| PD | An_2024 | not_relevant | 2 | 1 | The text is an abstract for a review article that discusses PK/PD concepts generally but does not present specific numeric PD parameters or extractable exposure-response data for givosiran. |
| popPK | Ayyar_2024 | relevant | 9 | 2 | The paper describes a mechanistic PK-PD model for givosiran and reports specific parameters like KD and allometric exponents, but standard quantitative disposition parameters (CL, V, Q) are not explicitly listed in the provided text. |
| popPK | Batra_2026 | irrelevant | 0 | 0 | The paper studies a different drug (BioRNA/PD-L1-siRNA) in an in-vitro mechanistic study and does not report pharmacokinetic parameters for givosiran. |
| PD | Batra_2026 | not_relevant | 0 | 0 | The paper studies a different drug (BioRNA/PD-L1-siRNA) in an in vitro setting and does not report any pharmacodynamic or exposure-response data for givosiran. |
| popPK | Berk_2021 | irrelevant | 1 | 0 | The study focuses on a novel siRNA targeting Lin28B, mentioning givosiran only as a structural comparator without reporting quantitative PK parameters for givosiran itself. |
| PD | Berk_2021 | not_relevant | 0 | 0 | The paper focuses on the stability and PK of a novel siRNA scaffold targeting Lin28B, mentioning givosiran only as a structural reference without providing any PD or exposure-response data for it. |
| popPK | Cronin_2025 | irrelevant | 1 | 0 | The paper is a review of oligonucleotide drugs and mentions givosiran only as an approved siRNA in a list, without providing any specific quantitative pharmacokinetic parameters for it. |
| PD | Cronin_2025 | not_relevant | 1 | 0 | The paper is a review discussing the challenges of evaluating drug-drug interactions for RNA therapeutics and does not report specific numeric PD parameters or exposure-response models for givosiran. |
| popPK | Fan_2026 | relevant | 8 | 0 | The paper describes a computational PK/PD model for givosiran, but the specific numeric parameter values are not present in the provided evidence. |
| PD | Fan_2026 | not_relevant | 3 | 0 | The text is an abstract describing a computational platform and mentions givosiran as part of a dataset, but it does not report specific numeric PD parameters or extractable exposure-response relationships for givosiran in this text. |
| popPK | Fontana_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of vutrisiran, not givosiran, which is only mentioned as a comparator in the discussion. |
| popPK | George_2026 | irrelevant | 0 | 0 | The paper investigates siRNA therapy for ovarian cancer and mentions givosiran only as a background example of an approved RNAi drug, providing no pharmacokinetic data for it. |
| PD | George_2026 | not_relevant | 0 | 0 | The paper investigates a novel siRNA (siFXR1-LNA) for ovarian cancer, not givosiran, and does not report any pharmacodynamic or exposure-response parameters for givosiran. |
| popPK | Jeon_2022 | irrelevant | 2 | 0 | The paper is a minireview of siRNA modeling efforts and does not report original quantitative PK parameter values for givosiran. |
| PD | Jeon_2022 | not_relevant | 2 | 0 | The text is a minireview abstract that discusses the state of PK/PD modeling for siRNAs but does not present specific numeric PD parameters or extractable exposure-response data for givosiran. |
| popPK | Lee_2023 | relevant | 9 | 0 | The paper describes a population PK/PD model for givosiran, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Loganathan_2023 | irrelevant | 0 | 0 | The paper is a review of non-coding RNAs and does not contain any pharmacokinetic data or parameters for givosiran. |
| PD | Loganathan_2023 | not_relevant | 0 | 0 | The paper is a general review of non-coding RNAs as biomarkers and therapeutic targets and does not contain any pharmacokinetic or pharmacodynamic data, models, or numeric parameters for givosiran. |
| popPK | McDougall_2022 | irrelevant | 2 | 0 | The paper is a minireview of nonclinical ADME properties of GalNAc-siRNAs generally, and no specific quantitative PK parameter values for givosiran are present in the provided evidence. |
| PD | McDougall_2022 | not_relevant | 2 | 0 | The text is a nonclinical review summarizing ADME and PK/PD translation concepts for GalNAc-siRNAs but does not provide specific numeric PD parameters or extractable concentration-effect curves for givosiran. |
| popPK | Melch_2023 | irrelevant | 2 | 0 | The evidence contains only figure captions for goodness-of-fit plots without any quantitative PK parameter values or model details. |
| PGx | Petrides_2021 | not_relevant | 0 | 0 | The paper reports an adverse effect (hyperhomocysteinemia) caused by the drug's mechanism of action (heme depletion) and discusses MTHFR polymorphisms as a potential contributing factor, but it does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of givosiran itself. |
| popPK | Ranasinghe_2023 | irrelevant | 0 | 0 | The paper is a general introductory review of siRNA technology and does not report specific quantitative pharmacokinetic parameters for givosiran. |
| PD | Ranasinghe_2023 | not_relevant | 1 | 0 | The text is a general introductory review of siRNA technology and mentions givosiran only as a licensed example without providing any specific pharmacokinetic or pharmacodynamic data or models. |
| PGx | Ricci_2021 | not_relevant | 0 | 0 | The paper is a review of kidney involvement in porphyrias and mentions givosiran only as a licensed therapy, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Ricci_2022 | irrelevant | 2 | 0 | The paper is a review article summarizing givosiran's profile, but the provided evidence contains no original quantitative pharmacokinetic parameter values (CL, V, etc.). |
| PD | Ricci_2022 | not_relevant | 2 | 0 | The text is an abstract of a review article that summarizes pharmacodynamics qualitatively but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Sardh_2019 | irrelevant | 2 | 0 | The provided text is an abstract that mentions pharmacokinetic evaluation but does not contain any quantitative PK parameter values (e.g., CL, V, t1/2) for givosiran. |
| PD | Sardh_2019 | not_relevant | 3 | 1 | The text describes a Phase 1 trial with dose escalation and reports qualitative reductions in biomarkers (ALAS1 mRNA, ALA, PBG) and attack rates, but it does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response/dose-response model in the provided abstract. |
| popPK | Sten_2023 | relevant | 8 | 2 | The paper analyzes givosiran PK as part of a class effect study and mentions specific model types, but the specific numeric parameter values (CL, V, Ka) for givosiran are located in the Electronic Supplementary Material (ESM Table S4) which is not provided in the evidence. |
| PD | Sten_2023 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of GalNAc-siRNAs, including dose-proportionality and compartmental models, but does not report any pharmacodynamic (PD) or exposure-response relationships for givosiran. |
| popPK | Tan_2026 | irrelevant | 0 | 0 | The paper focuses on computational prediction of siRNA activity and does not report pharmacokinetic parameters for givosiran. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper focuses on computational prediction of siRNA activity (IC50) using deep learning and does not report pharmacokinetic or pharmacodynamic modeling for givosiran. |
| PGx | To-Figueras_2021 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic side effect (homocysteine elevation) of givosiran but does not investigate how specific gene variants or genotypes modify this effect or any PK parameter. |
| popPK | Vassiliou_2021 | irrelevant | 2 | 0 | The study focuses on drug-drug interactions and CYP450 activity rather than reporting quantitative population pharmacokinetic parameters (CL, V, etc.) for givosiran itself. |
| PD | Vassiliou_2021 | not_relevant | 2 | 1 | The paper describes a qualitative drug-drug interaction study showing differential inhibition of CYP enzymes but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for givosiran. |
| PGx | Vassiliou_2021 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (CYP inhibition) rather than pharmacogenomic effects of gene variants on givosiran's PK/PD. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper is a clinical practice guideline for acute hepatic porphyrias and does not report pharmacogenomic effects on the PK or PD of givosiran. |
| popPK | Yue_2019 | irrelevant | 0 | 0 | The paper is a review of substrate reduction therapy for inborn errors of metabolism and does not report quantitative pharmacokinetic parameters for givosiran. |
| PD | Yue_2019 | not_relevant | 1 | 0 | The text is a general minireview on substrate reduction therapy for inborn errors of metabolism and does not contain specific data, models, or numeric PD parameters for givosiran. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
