<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;epanolol&quot;}]"></div>

# epanolol

- **generic name:** epanolol
- **ATC codes:** `C07AB10`
- **DrugBank:** [DB13757](https://go.drugbank.com/drugs/DB13757) · **PubChem:** not captured
- **molar mass:** 369.421 g/mol (C20H23N3O4) — DrugBank
- **groups:** experimental

## About

Epanolol is a selective beta blocker that was developed as an antihypertensive drug. It is considered experimental and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4859855](https://www.wikidata.org/wiki/Q4859855) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 16:16 | 1:24 | 0/0/0 | 0/0/0 | 0/0/0 | 8,479/339 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=epanolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB3 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cockshott_1989.pdf` | Cockshott ID, Pharmacokinetics of epanolol (ICI 141,2…, Drugs 38 Suppl (1989) | popPK | 10 | [10.2165/00003495-198900382-00005](https://doi.org/10.2165/00003495-198900382-00005) | [2575975](https://pubmed.ncbi.nlm.nih.gov/2575975) | The text explicitly reports quantitative PK parameters for epanolol, including clearance (2.1 L/min), half-lives (7 min, 3 h, 20 h), and bioavailability (7-8%). |
| `Laher_1990.pdf` | Laher MS et al., ICI 141,292 (epanolol)--pharmacokinetic…, European journal of clinica… (1990) | popPK | 9 | [10.1007/BF02657061](https://doi.org/10.1007/BF02657061) | [1980462](https://pubmed.ncbi.nlm.nih.gov/1980462) | The paper reports quantitative PK parameters (Cmax, tmax, t1/2, AUC) for epanolol in humans, with values clearly present in the text. |
| `Hosie_1990.pdf` | Hosie J et al., Pharmacokinetics of epanolol after acut…, British journal of clinical… (1990) | popPK | 8 | [10.1111/j.1365-2125.1990.tb03644.x](https://doi.org/10.1111/j.1365-2125.1990.tb03644.x) | [1968755](https://pubmed.ncbi.nlm.nih.gov/1968755) | The study reports quantitative PK parameters (Cmax, Tmax, t1/2, AUC) for epanolol, but lacks explicit clearance (CL) or volume (V) values. |
| `Marlier_1990.pdf` | Marlier R et al., Pharmacokinetics of epanolol in elderly…, Arzneimittel-Forschung (1990) | popPK | 8 | not captured | [1970734](https://pubmed.ncbi.nlm.nih.gov/1970734) | The study reports quantitative PK parameters (Cmax, Tmax, t1/2) for epanolol in humans, but lacks explicit values for clearance (CL) or volume of distribution (V). |
| `Vigholt-Sørensen_1991.pdf` | Vigholt-Sørensen E et al., Comparative effects of beta-adrenocepto…, Pharmacology & toxicology (1991) | pd | 4 | [10.1111/j.1600-0773.1991.tb01309.x](https://doi.org/10.1111/j.1600-0773.1991.tb01309.x) | [1687080](https://www.ncbi.nlm.nih.gov/pubmed/1687080) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-01T16:15:58.024019+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fitzgerald_1993 | irrelevant | 0 | 0 | The paper is a commentary/review discussing clinical utility and pharmacodynamics, not a pharmacokinetic study reporting quantitative disposition parameters for epanolol. |
| PD | Fitzgerald_1993 | not_relevant | 1 | 0 | The text is a qualitative review/commentary summarizing the clinical utility of partial agonists and does not report specific numeric PD parameters or concentration-effect data for epanolol. |
| popPK | Harry_1989 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic aspects (agonist activity, hemodynamic effects) and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Harry_1989 | not_relevant | 2 | 1 | The text is a qualitative review summarizing pharmacological properties and clinical effects without providing specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Lefebvre_1990 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of digoxin (the subject drug) to assess interaction with epanolol, and no quantitative PK parameters for epanolol are reported. |
| PD | Lefebvre_1990 | not_relevant | 2 | 1 | The paper reports qualitative changes in hemodynamic indices (QS2I, PEPI) when epanolol is added to digoxin, but it does not provide a concentration-effect or dose-response analysis for epanolol, nor does it report numeric PD parameters (Emax, EC50, etc.) for epanolol. |
| popPK | Vigholt-Sørensen_1991 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Vigholt-Sørensen_1991 | not_relevant | 0 | 0 | The paper studies beta-adrenoceptor partial agonists on isolated rat atrium and does not mention epanolol or report any exposure-response or dose-response data for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
