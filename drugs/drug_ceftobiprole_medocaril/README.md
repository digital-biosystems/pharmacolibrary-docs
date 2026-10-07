<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftobiprole medocaril&quot;}]"></div>

# ceftobiprole medocaril

- **generic name:** ceftobiprole medocaril
- **ATC codes:** `J01DI01`
- **DrugBank:** [DB14733](https://go.drugbank.com/drugs/DB14733) · **PubChem:** not captured
- **molar mass:** 690.66 g/mol (C26H26N8O11S2) — DrugBank
- **groups:** approved

## About

Ceftobiprole medocaril is an antibacterial drug, a cephalosporin-type beta-lactam, intended for treating bacterial infections of the skin and soft tissues. It is approved and used in some countries, but marketing authorisation was refused in the European Union, so it is not available there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27294766](https://www.wikidata.org/wiki/Q27294766) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:44 | 0:13 | 0/0/0 | 0/0/0 | 0/0/0 | 27,733/871 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ceftobiprole_medocaril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ramzy_2025.pdf` | Ramzy S et al., Eco-Friendly Fluorescent Probe-Based Qu…, Luminescence : the journal… (2025) | popPK | 10 | [10.1002/bio.70393](https://doi.org/10.1002/bio.70393) | [41432924](https://pubmed.ncbi.nlm.nih.gov/41432924) | The paper reports quantitative pharmacokinetic parameters (clearance, half-life, Cmax) for ceftobiprole medocaril in rats, and these numeric values are explicitly listed in the evidence text. |

<sub>queue written 2026-10-07T10:44:02.435654+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barbour_2009 | irrelevant | 2 | 1 | The text is a general review/overview providing only qualitative descriptions and rough ranges (e.g., "approximately 3-4h", "22%") rather than specific quantitative PK parameter estimates (CL, V, Q, ka) from a compartmental or population model. |
| popPK | Torres_2016 | irrelevant | 2 | 3 | The paper is a review that summarizes pharmacokinetic parameters, but it does not report the results of a primary population pharmacokinetic study or modeling for ceftobiprole_medocaril. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
