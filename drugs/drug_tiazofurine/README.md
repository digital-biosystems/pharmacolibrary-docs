<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;tiazofurine&quot;}]"></div>

# tiazofurine

- **generic name:** tiazofurine
- **ATC codes:** `L01XX18`
- **DrugBank:** [DB13243](https://go.drugbank.com/drugs/DB13243) · **PubChem:** not captured
- **molar mass:** 260.267 g/mol (C9H12N2O5S) — DrugBank
- **groups:** experimental

## About

Tiazofurine is an antineoplastic antimetabolite that was investigated as a cancer treatment. It remains an experimental drug and is not an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7800305](https://www.wikidata.org/wiki/Q7800305) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:48 | 4:08 | 0/0/0 | 0/0/0 | 0/0/0 | 44,194/1,789 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tiazofurine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IMPDH1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 12 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grygiel_1985.pdf` | Grygiel JJ et al., Pharmacokinetics of tiazofurin in the p…, Cancer research (1985) | popPK | 10 | not captured | [3986760](https://pubmed.ncbi.nlm.nih.gov/3986760) | The paper reports quantitative PK parameters (clearance, half-lives, AUC ratios) for tiazofurin in rhesus monkeys with numeric values directly in the text. |
| `Jayaram_1992.pdf` | Jayaram HN et al., Clinical pharmacokinetic study of tiazo…, International journal of ca… (1992) | popPK | 10 | [10.1002/ijc.2910510204](https://doi.org/10.1002/ijc.2910510204) | [1568787](https://pubmed.ncbi.nlm.nih.gov/1568787) | The paper reports quantitative pharmacokinetic parameters (half-lives, peak concentrations, AUC ratios) for tiazofurin in humans, though specific clearance or volume of distribution values are not explicitly listed in the text. |
| `Melink_1985.pdf` | Melink TJ et al., Phase I evaluation and pharmacokinetics…, Cancer research (1985) | popPK | 10 | not captured | [3986813](https://pubmed.ncbi.nlm.nih.gov/3986813) | The study is a Phase I clinical trial reporting quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for tiazofurin in humans. |
| `Batist_1985.pdf` | Batist G et al., Phase I and pharmacokinetic study of ti…, Investigational new drugs (1985) | popPK | 9 | [10.1007/BF00170757](https://doi.org/10.1007/BF00170757) | [4086242](https://pubmed.ncbi.nlm.nih.gov/4086242) | The study reports quantitative PK data for tiazofurin (half-life), but only the half-life value is explicitly provided in the text without accompanying volume or clearance parameters. |
| `Redzić_1995.pdf` | Redzić ZB et al., Penetration of [3H] tiazofurin into gui…, European journal of ophthal… (1995) | popPK | 6 | [10.1177/112067219500500211](https://doi.org/10.1177/112067219500500211) | [7549442](https://pubmed.ncbi.nlm.nih.gov/7549442) | The study reports specific transport parameters (Vd, Kin) for tiazofurin in the eye, which are quantitative disposition metrics, though not a full systemic population PK model. |

<sub>queue written 2026-10-06T21:48:08.992426+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arnold_1984 | irrelevant | 2 | 0 | The paper studies tiazofurin (tiazofurine) in animal species and describes triphasic disposition, but provides no specific quantitative PK parameters (CL, V, Q, ka) in the extracted text. |
| popPK | Barbosa_2025 | irrelevant | 0 | 0 | The paper is a review of zebrafish models in immuno-oncology and does not report pharmacokinetic parameters for tiazofurine. |
| popPK | Batist_1985 | relevant | 9 | 3 | The study reports quantitative PK data for tiazofurin (half-life), but only the half-life value is explicitly provided in the text without accompanying volume or clearance parameters. |
| popPK | De_2025 | irrelevant | 0 | 0 | The paper investigates autophagy inhibition in neuroblastoma and its effect on CAR T-cell therapy, with no mention of tiazofurine or its pharmacokinetics. |
| popPK | Monath_2008 | irrelevant | 0 | 0 | The paper is a review on yellow fever treatment that mentions tiazofurin (likely a typo for tiazofurine or related compound) only as an antiviral evaluated in animal models, with no pharmacokinetic data. |
| popPK | Owolabi_2024 | irrelevant | 0 | 0 | The paper investigates the antimicrobial potential of plant extracts against Salmonella Typhi and contains no pharmacokinetic data for tiazofurine. |
| popPK | Redzic_1995 | irrelevant | 2 | 5 | The study measures brain penetration rates (Kin) and distribution volumes in guinea pigs, focusing on BBB transport mechanisms rather than systemic population-pharmacokinetic parameters (CL, Vss) for the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
