<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09I&quot;,&quot;href&quot;:&quot;atc/V09I.md&quot;},{&quot;label&quot;:&quot;Iobenguane&quot;}]"></div>

# Iobenguane

- **generic name:** Iobenguane
- **ATC codes:** `V09IX01`, `V09IX02`, `V10XA02`
- **DrugBank:** [DB06704](https://go.drugbank.com/drugs/DB06704) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Iobenguane is a radiopharmaceutical used both to detect certain tumours in nuclear imaging and, in a radioactive iodine form, for treatment. It is an approved medicine and is also being studied for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27286037](https://www.wikidata.org/wiki/Q27286037) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:10 | 10:30 | 0/0/0 | 0/0/0 | 0/0/0 | 268,658/2,995 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 1/12 | 13/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=iobenguane) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SLC6A2 (modulator), SLC6A2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 362 matched, 39 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aubry_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic interaction between ceftazidime/avibactam and colistin in vitro, and does not report pharmacokinetic parameters for iobenguane. |
| PGx | Brooks_2010 | not_relevant | 0 | 0 | The paper is a review of imaging techniques for Parkinson's disease and does not report pharmacogenomic effects on the PK/PD of iobenguane. |
| popPK | DeSantes_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for enoblituzumab, not iobenguane. |
| popPK | De_2025 | irrelevant | 0 | 0 | The paper describes the development of novel LIFR/GPBAR1 modulators for liver fibrosis and does not study the pharmacokinetics of iobenguane. |
| PGx | DuBois_2015 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic association (UGT1A1) with toxicity (thrombocytopenia) from irinotecan, not a PK/PD effect on iobenguane. |
| popPK | Durcan_2023 | irrelevant | 0 | 0 | The study investigates 123I-FP-CIT SPECT imaging for dopaminergic loss in MCI, and while I-MIBG (iobenguane) is mentioned as a baseline cardiac scan, no pharmacokinetic parameters for iobenguane are reported. |
| popPK | Grkovski_2022 | irrelevant | 0 | 0 | The study investigates F-18 meta-fluorobenzylguanidine (MFBG) as a PET radiotracer, not the drug iobenguane (I-123 MIBG), which is only used as a concurrent comparator. |
| popPK | Hachamovitch_2015 | irrelevant | 0 | 0 | The study uses iobenguane (as 123I-mIBG) as a diagnostic imaging agent for risk stratification and does not report pharmacokinetic parameters. |
| PGx | Havekes_2008 | not_relevant | 0 | 0 | The paper discusses diagnostic sensitivity of MIBG in different genetic syndromes, not pharmacokinetic or pharmacodynamic parameters of the drug itself. |
| popPK | Henry_1986 | irrelevant | 0 | 0 | The paper is an in-vitro molecular pharmacology study of chromaffin granule transporters using m-iodobenzylguanidine as a substrate, not a pharmacokinetic study of iobenguane. |
| PGx | Ilias_2017 | not_relevant | 0 | 0 | The paper is a review of functional imaging modalities for paragangliomas and does not report pharmacokinetic or pharmacodynamic parameters of iobenguane. |
| popPK | Jaster_2025 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of psilocin (metabolite of psilocybin) in mice, not iobenguane. |
| popPK | Jourdain_2026 | irrelevant | 0 | 0 | The paper studies the pharmacology of marine natural products (leucettamine B, nacryline, pinctazole) for bone healing and does not mention iobenguane. |
| PGx | Karuppasamy_2022 | not_relevant | 0 | 0 | The paper reports a case of hereditary pheochromocytoma associated with an SDHA mutation and uses MIBG for diagnosis, but it does not report any pharmacogenomic effect of the gene variant on the pharmacokinetic or pharmacodynamic parameters of iobenguane. |
| popPK | Ligon_2023 | irrelevant | 0 | 0 | The study evaluates guadecitabine in patients with dSDH-deficient tumors and does not report pharmacokinetic parameters for iobenguane. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a synthetic foldamer M4 for Alzheimer's disease, not the drug iobenguane. |
| popPK | Loesberg_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial effects and cytotoxicity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Morozumi_1996 | not_relevant | 0 | 0 | The paper describes physiological variations in sympathetic activity affecting MIBG uptake in healthy volunteers, not a pharmacogenomic effect of a gene variant. |
| popPK | Navid_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetics for the monoclonal antibody hu14.18K322A, not for the drug iobenguane (which is only mentioned as a diagnostic imaging agent, I-123 MIBG). |
| popPK | Rabinovitch_1993 | irrelevant | 2 | 0 | The study uses iobenguane (MIBG) as a diagnostic imaging agent to assess cardiac sympathetic function, not to characterize its systemic pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Raffel_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the PET tracer N-11C-guanyl-meta-octopamine, not iobenguane. |
| popPK | Sebo_2026 | irrelevant | 0 | 0 | The paper studies the mechanism of action of metformin in mice and does not report pharmacokinetic parameters for iobenguane. |
| popPK | Shinohara_2018 | irrelevant | 0 | 0 | The paper reports absorbed radiation dose calculations for I-125 and I-131 MIBG in a tumor model, not pharmacokinetic parameters (CL, V, t1/2) for iobenguane. |
| PGx | Takahashi_2014 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy of diflunisal in TTR Val30Met patients and does not report pharmacokinetic or pharmacodynamic parameters of iobenguane. |
| PGx | Umemura_2013 | not_relevant | 0 | 0 | The paper investigates the diagnostic accuracy of MIBG imaging for differentiating Parkinson's disease from MSA, not the effect of gene variants on MIBG pharmacokinetics or pharmacodynamics. |
| popPK | Varga_2025 | irrelevant | 0 | 0 | The paper describes the structure-guided design and pharmacology of a delta opioid receptor partial agonist (C6-Quino), not the pharmacokinetics of iobenguane. |
| popPK | Wang_2026 | irrelevant | 2 | 0 | The study focuses on dosimetry and time-integrated activity (TIA) estimation for radiation therapy planning, not on reporting standard pharmacokinetic parameters like clearance (CL) or volume of distribution (V) for iobenguane. |
| popPK | Wu_2016 | irrelevant | 2 | 2 | The study reports myocardial volume of distribution (VT) from SPECT imaging, which is a tissue uptake parameter rather than a systemic pharmacokinetic parameter (CL, V, Q, ka) for the drug itself. |
| popPK | Wu_2018 | irrelevant | 2 | 0 | The study reports tissue volume of distribution (VT) from SPECT imaging, not systemic pharmacokinetic parameters (CL, V, ka) for iobenguane. |
| popPK | Yau_2008 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of MIBG on neointimal hyperplasia in porcine arteries and does not report pharmacokinetic parameters such as clearance or volume of distribution. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
