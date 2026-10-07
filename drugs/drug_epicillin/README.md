<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;epicillin&quot;}]"></div>

# epicillin

- **generic name:** epicillin
- **ATC codes:** `J01CA07`
- **DrugBank:** [DB13300](https://go.drugbank.com/drugs/DB13300) · **PubChem:** not captured
- **molar mass:** 351.42 g/mol (C16H21N3O4S) — DrugBank
- **groups:** experimental

## About

Epicillin is an antibiotic penicillin with an extended spectrum, developed for treating bacterial infections. It is considered an experimental compound and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5382578](https://www.wikidata.org/wiki/Q5382578) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:02 | 0:35 | 0/0/0 | 0/0/0 | 0/0/0 | 10,010/543 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kienel_1976.pdf` | Kienel G, [Comparison between the pharmacokinetic…, Arzneimittel-Forschung (1976) | popPK | 9 | not captured | [989351](https://pubmed.ncbi.nlm.nih.gov/989351) | The study reports the PK model and qualitative parameters (e.g., volume of distribution, clearance mechanisms) for epicillin in rabbits, but specific numeric values are not present in the provided text. |
| `Guggenbichler_1981.pdf` | Guggenbichler JP et al., [Pharmacokinetic of antibiotics in pati…, Padiatrie und Padologie (1981) | popPK | 8 | not captured | [7301388](https://pubmed.ncbi.nlm.nih.gov/7301388) | The study reports qualitative PK changes (delayed absorption, enhanced renal elimination) for epicillin in cystic fibrosis patients, but no specific numeric parameter values (CL, V, Ka) are provided in the text. |
| `Humair_1981.pdf` | Humair L et al., [A dosage regimen for epicillin in rena…, Arzneimittel-Forschung (1981) | popPK | 7 | not captured | [7195720](https://pubmed.ncbi.nlm.nih.gov/7195720) | The study reports the elimination rate constant (ke) for epicillin in humans with renal impairment, but specific numeric values are not provided in the evidence, only a correlation coefficient. |

<sub>queue written 2026-10-07T10:02:09.590483+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guggenbichler_1981 | relevant | 8 | 2 | The study reports qualitative PK changes (delayed absorption, enhanced renal elimination) for epicillin in cystic fibrosis patients, but no specific numeric parameter values (CL, V, Ka) are provided in the text. |
| popPK | Guggenbichler_1987 | irrelevant | 2 | 0 | The abstract mentions altered elimination rates for epicillin in cystic fibrosis patients but provides no specific quantitative PK parameters (CL, V, t1/2) or numeric values in the text. |
| popPK | Humair_1981 | relevant | 7 | 1 | The study reports the elimination rate constant (ke) for epicillin in humans with renal impairment, but specific numeric values are not provided in the evidence, only a correlation coefficient. |
| popPK | Kienel_1976 | relevant | 9 | 2 | The study reports the PK model and qualitative parameters (e.g., volume of distribution, clearance mechanisms) for epicillin in rabbits, but specific numeric values are not present in the provided text. |
| popPK | Nau_1987 | irrelevant | 1 | 0 | This is a review discussing placental transfer and excretion in milk, but it does not report quantitative systemic disposition parameters (clearance, volume, half-life) for epicillin. |
| popPK | Prandota_1988 | irrelevant | 0 | 0 | The paper is a review discussing general pharmacokinetic changes in cystic fibrosis and mentions delayed absorption of epicillin without providing specific quantitative PK parameters for epicillin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
