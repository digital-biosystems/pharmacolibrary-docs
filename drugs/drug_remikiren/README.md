<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09X&quot;,&quot;href&quot;:&quot;atc/C09X.md&quot;},{&quot;label&quot;:&quot;remikiren&quot;}]"></div>

# remikiren

- **generic name:** remikiren
- **ATC codes:** `C09XA01`
- **DrugBank:** [DB00212](https://go.drugbank.com/drugs/DB00212) · **PubChem:** [CID 6324659](https://pubchem.ncbi.nlm.nih.gov/compound/6324659)
- **molar mass:** 630.838 g/mol (C33H50N4O6S) — DrugBank
- **groups:** experimental

## About

Remikiren is a renin inhibitor developed as an antihypertensive drug for high blood pressure. It remained experimental and was never marketed, so it is not in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417432](https://www.wikidata.org/wiki/Q417432) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:43 | 1:12 | 0/0/0 | 0/0/0 | 0/0/0 | 17,014/833 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=remikiren) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: REN (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kleinbloesem_1993.pdf` | Kleinbloesem CH et al., Hemodynamics, biochemical effects, and…, Clinical pharmacology and t… (1993) | popPK | 10 | [10.1038/clpt.1993.74](https://doi.org/10.1038/clpt.1993.74) | [8491068](https://pubmed.ncbi.nlm.nih.gov/8491068) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance ~900 ml/min, volume of distribution ~70 L, bioavailability &lt;1%) for remikiren in humans. |
| `Coassolo_1996.pdf` | Coassolo P et al., Pharmacokinetics of remikiren, a potent…, Xenobiotica; the fate of fo… (1996) | popPK | 9 | [10.3109/00498259609046712](https://doi.org/10.3109/00498259609046712) | [8730924](https://pubmed.ncbi.nlm.nih.gov/8730924) | The paper reports pharmacokinetic parameters for remikiren in multiple species, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only qualitative descriptions and ranges (e.g., MRT &lt;= 1.5 h, bioavailability &lt;= 6%). |
| `Weber_1993.pdf` | Weber C et al., Multiple dose pharmacokinetics and conc…, British journal of clinical… (1993) | pd | 5 | [10.1111/j.1365-2125.1993.tb00413.x](https://doi.org/10.1111/j.1365-2125.1993.tb00413.x) | [12959271](https://www.ncbi.nlm.nih.gov/pubmed/12959271) | metadata signals extractable PD data (concentrationeffect) |
| `Bansal_2026.pdf` | Bansal N et al., Drug repurposing for renin inhibition:…, Molecular diversity (2026) | pd | 4 | [10.1007/s11030-025-11253-z](https://doi.org/10.1007/s11030-025-11253-z) | [40549296](https://www.ncbi.nlm.nih.gov/pubmed/40549296) | metadata signals extractable PD data (IC50) |
| `Linz_1994.pdf` | Linz W et al., Effects of the renin inhibitor N-[N-(3-…, Arzneimittel-Forschung (1994) | pd | 4 | not captured | [7945514](https://www.ncbi.nlm.nih.gov/pubmed/7945514) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T09:43:25.098548+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bohlender_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of renin (REN), not remikiren, which is only used as a blocking agent. |
| popPK | Coassolo_1996 | relevant | 9 | 2 | The paper reports pharmacokinetic parameters for remikiren in multiple species, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only qualitative descriptions and ranges (e.g., MRT &lt;= 1.5 h, bioavailability &lt;= 6%). |
| PGx | Lachurié_1995 | not_relevant | 0 | 0 | The study reports no difference in pharmacodynamic parameters (blood pressure, hormone levels) between ACE genotype groups, concluding there is no pharmacogenomic effect. |
| popPK | Richter_1996 | irrelevant | 2 | 0 | The study reports qualitative distribution data via autoradiography and mentions high plasma clearance but provides no quantitative PK parameter values (CL, V, t1/2) in the evidence. |
| popPK | Rongen_1995 | irrelevant | 2 | 0 | The paper is a review discussing renin inhibitors generally and mentions remikiren's efficacy, but it does not report specific quantitative pharmacokinetic parameters (CL, V, etc.) for remikiren in the provided text. |
| popPK | Weber_1993 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
