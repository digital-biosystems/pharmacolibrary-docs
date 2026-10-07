<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;imidafenacin&quot;}]"></div>

# imidafenacin

- **generic name:** imidafenacin
- **ATC codes:** `G04BD14`
- **DrugBank:** [DB09262](https://go.drugbank.com/drugs/DB09262) · **PubChem:** [CID 6433090](https://pubchem.ncbi.nlm.nih.gov/compound/6433090)
- **molar mass:** 319.408 g/mol (C20H21N3O) — DrugBank
- **groups:** investigational

## About

Imidafenacin is a drug for urinary frequency and incontinence, belonging to the urologicals class. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6003989](https://www.wikidata.org/wiki/Q6003989) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:33 | 0:27 | 0/0/0 | 0/0/0 | 0/0/0 | 6,753/450 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imidafenacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hasegawa_2013.pdf` | Hasegawa C et al., Population pharmacokinetics and exposur…, Drug metabolism and pharmac… (2013) | popPK | 10 | [10.2133/dmpk.dmpk-12-rg-062](https://doi.org/10.2133/dmpk.dmpk-12-rg-062) | [23089801](https://pubmed.ncbi.nlm.nih.gov/23089801) | The paper describes a population pharmacokinetic model for imidafenacin, but the abstract provides only qualitative descriptions without any numeric parameter values (e.g., CL, V, Q). |
| `Ohno_2008.pdf` | Ohno T et al., Population pharmacokinetic analysis of…, Drug metabolism and pharmac… (2008) | popPK | 10 | [10.2133/dmpk.23.456](https://doi.org/10.2133/dmpk.23.456) | [19122340](https://pubmed.ncbi.nlm.nih.gov/19122340) | The study is a population PK analysis for imidafenacin, but specific numeric parameter values (CL, V, Ka, etc.) are not provided in the text or tables, only qualitative trends and method descriptions. |

<sub>queue written 2026-10-07T09:32:56.718940+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hasegawa_2013 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for imidafenacin, but the abstract provides only qualitative descriptions without any numeric parameter values (e.g., CL, V, Q). |
| PGx | Kanayama_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and enzyme identification (CYP3A4, UGT1A4) but does not report pharmacogenomic effects of genetic variants on PK/PD parameters. |
| popPK | Ohno_2008 | relevant | 10 | 1 | The study is a population PK analysis for imidafenacin, but specific numeric parameter values (CL, V, Ka, etc.) are not provided in the text or tables, only qualitative trends and method descriptions. |
| PGx | Ohno_2008_2 | not_relevant | 0 | 0 | The study reports general pharmacokinetics in healthy subjects but does not investigate or report any genotype-based variations (pharmacogenomics). |
| PGx | Ohno_2008_3 | not_relevant | 0 | 10 | The study reports a drug-drug interaction effect of itraconazole (a CYP3A4 inhibitor) on imidafenacin PK, but it does not investigate or report the impact of any genetic variant, genotype, or phenotypic gene expression on these parameters. |
| popPK | Takeda_2013 | irrelevant | 0 | 0 | This is a clinical efficacy study for overactive bladder symptoms and does not report any pharmacokinetic parameters for imidafenacin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
