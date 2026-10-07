<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;pipemidic acid&quot;}]"></div>

# pipemidic acid

- **generic name:** pipemidic acid
- **ATC codes:** `J01MB04`
- **DrugBank:** [DB13823](https://go.drugbank.com/drugs/DB13823) · **PubChem:** not captured
- **molar mass:** 303.3165 g/mol (C14H17N5O3) — DrugBank
- **groups:** investigational

## About

Pipemidic acid is a quinolone antibiotic that has been used as a urinary anti-infective to treat bacterial infections of the urinary tract. It is not an approved medicine in major markets today and is considered investigational, having largely fallen out of clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q754986](https://www.wikidata.org/wiki/Q754986) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:54 | 1:35 | 0/0/0 | 0/0/0 | 0/0/0 | 38,700/1,242 | einfracz / qwen3.8-27b | 2 | 0/0 | 1/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pipemidic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 17 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anadón_1990.pdf` | Anadón A et al., Pharmacokinetics of pipemidic acid in c…, American journal of veterin… (1990) | popPK | 10 | not captured | [2240801](https://pubmed.ncbi.nlm.nih.gov/2240801) | The abstract provides complete numeric values for pharmacokinetic parameters (CL, V, t1/2) for pipemidic acid in chickens. |
| `Klinge_1984.pdf` | Klinge E et al., Single- and multiple-dose pharmacokinet…, Antimicrobial agents and ch… (1984) | popPK | 10 | [10.1128/AAC.26.1.69](https://doi.org/10.1128/AAC.26.1.69) | [6476816](https://pubmed.ncbi.nlm.nih.gov/6476816) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for pipemidic acid in humans. |
| `Backhaus_2000.pdf` | Backhaus T et al., The single substance and mixture toxici…, Aquatic toxicology (Amsterd… (2000) | pd | 4 | [10.1016/s0166-445x(99)00069-7](https://doi.org/10.1016/s0166-445x(99)00069-7) | [10814806](https://www.ncbi.nlm.nih.gov/pubmed/10814806) | metadata signals extractable PD data (EC50) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |
| `Valero_1991.pdf` | Valero F et al., Selective in-vitro inhibition of hepati…, The Journal of pharmacy and… (1991) | pd | 4 | [10.1111/j.2042-7158.1991.tb05440.x](https://doi.org/10.1111/j.2042-7158.1991.tb05440.x) | [1676053](https://www.ncbi.nlm.nih.gov/pubmed/1676053) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T11:53:53.951269+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Backhaus_2000 | irrelevant | 0 | 0 | The study is an in-vitro ecotoxicity assessment using bacteria (Vibrio fischeri) and reports toxicity metrics (EC50), not pharmacokinetic parameters for pipemidic acid. |
| popPK | Smith_2019 | irrelevant | 0 | 0 | The paper is a computational/in-vitro study on intravesical delivery mechanics and does not report pharmacokinetic parameters for pipemidic acid. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA-antagonistic effects on receptor binding, not a pharmacokinetic study. |
| popPK | Uehlinger_1996 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of fleroxacin, not pipemidic acid. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between theophylline and pipemidic acid (affecting theophylline clearance), not a pharmacogenomic effect on pipemidic acid. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
