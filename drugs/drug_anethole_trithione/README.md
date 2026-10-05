<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;anethole trithione&quot;}]"></div>

# anethole trithione

- **generic name:** anethole trithione
- **ATC codes:** `A16AX02`
- **DrugBank:** [DB13853](https://go.drugbank.com/drugs/DB13853) · **PubChem:** [CID 2194](https://pubchem.ncbi.nlm.nih.gov/compound/2194)
- **molar mass:** 240.35 g/mol (C10H8OS3) — DrugBank
- **groups:** approved

## About

Anethole trithione is a drug used to treat dry mouth (xerostomia) and has also been used to stimulate saliva and bile flow. It is an approved medicine, used in some countries mainly for dry mouth relief, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4761739](https://www.wikidata.org/wiki/Q4761739) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:55 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 2,369/209 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=anethole_trithione) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TGM2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jing_2006.pdf` | Jing Q et al., HPLC determination of anethole trithion…, Journal of pharmaceutical a… (2006) | popPK | 9 | [10.1016/j.jpba.2006.05.013](https://doi.org/10.1016/j.jpba.2006.05.013) | [16824723](https://pubmed.ncbi.nlm.nih.gov/16824723) | The study reports pharmacokinetics of anethole trithione in rabbits, but specific numeric parameter values (CL, V, etc.) are not present in the provided text, only qualitative comparisons and bioavailability ratios. |

<sub>queue written 2026-10-05T10:55:50.659022+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jing_2006 | relevant | 9 | 2 | The study reports pharmacokinetics of anethole trithione in rabbits, but specific numeric parameter values (CL, V, etc.) are not present in the provided text, only qualitative comparisons and bioavailability ratios. |
| popPK | Nokata_1986 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding anethole trithione or pharmacokinetics. |
| popPK | Wen_2025 | irrelevant | 0 | 0 | The study focuses on a gold nanoprobe for imaging renal GSH, using anethole trithione only as a pharmacological agent to induce changes, without reporting any pharmacokinetic parameters for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
