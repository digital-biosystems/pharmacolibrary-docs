<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;domiphen&quot;}]"></div>

# domiphen

- **generic name:** domiphen
- **ATC codes:** `A01AB06`
- **DrugBank:** [DB11594](https://go.drugbank.com/drugs/DB11594)
- **groups:** approved

## About

**Description.** Domiphen bromide is a quaternary ammonium compound that is predominantly employed as a topically administered antiseptic agent.

**Indication.** Anti-infective (topical), it is used for the treatment of Acute Infectious Dental Diseases and other conditions.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 00:02 | 1:24 | 0/0/0 | 1/0/0 | 0/0/0 | 29,573/1,082 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Biosca_2019](drugs/drug_domiphen/pd_Biosca_2019_unknown.md) | Biosca A et al., An ImmunoPEGliposome for Targeted Antim…, Pharmaceutics (2019) | [10.3390/pharmaceutics11070341](https://doi.org/10.3390/pharmaceutics11070341) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Long_2014.pdf` | Long Y et al., Inhibition of HERG potassium channels b…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.05.002](https://doi.org/10.1016/j.ejphar.2014.05.002) | [24846011](https://www.ncbi.nlm.nih.gov/pubmed/24846011) | metadata signals extractable PD data (IC50) |
| `Long_2021.pdf` | Long Y et al., Proarrhythmic effects induced by benzet…, Toxicology and applied phar… (2021) | pd | 4 | [10.1016/j.taap.2021.115731](https://doi.org/10.1016/j.taap.2021.115731) | [34592322](https://www.ncbi.nlm.nih.gov/pubmed/34592322) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-18T00:02:03.317310+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biosca_2019 | irrelevant | 0 | 0 | The paper is an in-vitro nanomedicine study focusing on liposome formulation and antimalarial activity, reporting no pharmacokinetic parameters for domiphen. |
| popPK | Chen_2006 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying domiphen in bioprocess intermediates, not a pharmacokinetic study of domiphen as a drug. |
| popPK | Goerke_2005 | irrelevant | 0 | 0 | The paper describes a bioprocess purification method using domiphen bromide as a reagent, not a pharmacokinetic study of domiphen as a drug. |
| popPK | Hu_2021 | irrelevant | 0 | 0 | The paper is an in-vitro antimicrobial study reporting MIC and MBC values, not a pharmacokinetic study with disposition parameters for domiphen. |
| PD | Hu_2021 | not_relevant | 2 | 1 | The paper reports antimicrobial susceptibility (MIC, MBC, MBEC50) and synergy (FIC) data, which are pharmacological endpoints but do not constitute a pharmacodynamic (exposure-response) model with parameters like Emax or EC50 for the drug's effect on a physiological target. |
| popPK | Long_2014 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| popPK | Long_2021 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper is a mechanistic antimicrobial study focusing on domiphen's interaction with bacterial enzymes and membranes, not a pharmacokinetic study reporting disposition parameters. |
| PD | Xu_2024 | not_relevant | 0 | 0 | The paper describes antimicrobial synergy and in vivo efficacy but does not report pharmacokinetic data or numeric exposure-response/dose-response parameters for domiphen. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
