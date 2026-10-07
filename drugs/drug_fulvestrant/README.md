<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;fulvestrant&quot;}]"></div>

# fulvestrant

- **generic name:** fulvestrant
- **ATC codes:** `L02BA03`
- **DrugBank:** [DB00947](https://go.drugbank.com/drugs/DB00947) · **PubChem:** [CID 17756771](https://pubchem.ncbi.nlm.nih.gov/compound/17756771)
- **molar mass:** 606.78 g/mol (C32H47F5O3S) — DrugBank
- **groups:** approved, investigational

## About

Fulvestrant is an estrogen receptor antagonist used to treat breast cancer. It is an approved medicine, authorised in the European Union for breast cancer.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5508491](https://www.wikidata.org/wiki/Q5508491) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:16 | 1:50 | 0/1/0 | 1/0/0 | 0/0/0 | 213,246/10,549 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Robertson_2004_reference](drugs/drug_fulvestrant/Fulvestrant_Robertson2004_reference.md) | — | 1-compartment (no model) | 0 | Robertson JF et al., Pharmacokinetic profile of intramuscula…, Clinical pharmacokinetics (2004) | [10.2165/00003088-200443080-00003](https://doi.org/10.2165/00003088-200443080-00003) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Chigutsa_2026_TS](drugs/drug_fulvestrant/pd_Chigutsa_2026_TS.md) | Tumor size ← abemaciclib + fulvestrant · disease-progression model | — | Chigutsa E et al., Longitudinal Tumor Size and Survival Mo…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70212](https://doi.org/10.1002/cpt.70212) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fulvestrant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ESR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Daripelli_2026.pdf` | Daripelli S et al., Model-based steady state pharmacokineti…, Xenobiotica; the fate of fo… (2026) | popPK | 9 | [10.1080/00498254.2026.2637031](https://doi.org/10.1080/00498254.2026.2637031) | [41744318](https://pubmed.ncbi.nlm.nih.gov/41744318) | The study reports population PK parameters (clearance, volume) for fulvestrant in mice, but the specific numeric values are not present in the provided evidence. |
| `Robertson_2004.pdf` | Robertson JF et al., Pharmacokinetic profile of intramuscula…, Clinical pharmacokinetics (2004) | popPK | 8 | [10.2165/00003088-200443080-00003](https://doi.org/10.2165/00003088-200443080-00003) | [15170367](https://pubmed.ncbi.nlm.nih.gov/15170367) | The paper reports quantitative pharmacokinetic parameters (AUC, Cmax, Cmin, tmax, trough concentrations) and describes a two-compartment model for fulvestrant in humans. |
| `McCormack_2008.pdf` | McCormack P et al., Pharmacokinetic profile of the fulvestr…, Clinical breast cancer (2008) | popPK | 7 | [10.3816/CBC.2008.n.040](https://doi.org/10.3816/CBC.2008.n.040) | [18757262](https://pubmed.ncbi.nlm.nih.gov/18757262) | The study describes a population PK model for fulvestrant, but the only quantitative value provided in the text is the maximum plasma concentration (Cmax), while clearance and volume parameters are not explicitly listed in the evidence. |

<sub>queue written 2026-10-06T22:15:26.509304+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2024 | irrelevant | 0 | 0 | The study is a developmental toxicity assay in zebrafish where fulvestrant is used only as a mechanism-of-action probe (ER antagonist) and no pharmacokinetic parameters are reported. |
| popPK | Chigutsa_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response of abemaciclib, with fulvestrant acting only as a co-administered background therapy and not as the subject of PK parameter estimation. |
| popPK | Daripelli_2026 | relevant | 9 | 0 | The study reports population PK parameters (clearance, volume) for fulvestrant in mice, but the specific numeric values are not present in the provided evidence. |
| popPK | Dick_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channel activity in canine cells and does not report any pharmacokinetic parameters for fulvestrant. |
| popPK | Fang_2023 | irrelevant | 0 | 0 | The paper is a toxicology study on PAHs using fulvestrant solely as an ER-alpha antagonist to neutralize toxicity, not a pharmacokinetic study of fulvestrant. |
| popPK | Fernandez-Teruel_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for capivasertib, while fulvestrant is only mentioned as a co-administered drug. |
| popPK | Fernandez_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for capivasertib (the subject drug), not for fulvestrant, which is only mentioned as a co-administered combination drug. |
| popPK | Hertz_2016 | irrelevant | 0 | 0 | The study analyzes the effect of fulvestrant on anastrozole concentrations and does not report pharmacokinetic parameters for fulvestrant itself. |
| popPK | Kubota_2023 | irrelevant | 0 | 0 | Fulvestrant is used only as a mechanistic control/antagonist to verify estrogen receptor activity in a toxicology study of bisphenols, with no pharmacokinetic data reported. |
| popPK | Lemini_2015 | irrelevant | 0 | 0 | The study evaluates the estrogenic profile of 17βAE2, using fulvestrant only as an antagonist to demonstrate specificity, without reporting any PK parameters for fulvestrant. |
| popPK | Long_2004 | irrelevant | 0 | 0 | The paper is a preclinical efficacy study in mice measuring tumor growth responses to various endocrine therapies, not a pharmacokinetic study reporting disposition parameters for fulvestrant. |
| popPK | Lu_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ribociclib, with fulvestrant mentioned only as a concomitant drug in the covariate analysis. |
| popPK | McCormack_2008 | relevant | 7 | 1 | The study describes a population PK model for fulvestrant, but the only quantitative value provided in the text is the maximum plasma concentration (Cmax), while clearance and volume parameters are not explicitly listed in the evidence. |
| popPK | Ruamyod_2017 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of testosterone on human coronary artery endothelial cells, using fulvestrant only as a negative control antagonist, not as the subject drug for pharmacokinetic analysis. |
| popPK | Slaby_2024 | irrelevant | 0 | 0 | The study is an in vitro receptor bioassay evaluating endocrine disrupting chemicals and does not report pharmacokinetic parameters (CL, V, ka) for fulvestrant. |
| popPK | Tan_2013 | irrelevant | 0 | 0 | This is a clinical efficacy meta-analysis of a drug combination, reporting no pharmacokinetic parameters for fulvestrant. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:15 UTC</sub>
