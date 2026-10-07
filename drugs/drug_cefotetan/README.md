<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefotetan&quot;}]"></div>

# cefotetan

- **generic name:** cefotetan
- **ATC codes:** `J01DC05`
- **DrugBank:** [DB01330](https://go.drugbank.com/drugs/DB01330) · **PubChem:** [CID 53025](https://pubchem.ncbi.nlm.nih.gov/compound/53025)
- **molar mass:** 575.619 g/mol (C17H17N7O8S4) — DrugBank
- **groups:** approved, investigational

## About

Cefotetan is a cephalosporin antibiotic used to treat bacterial infections such as sepsis, abscesses, urinary tract infections, peritonitis, and gram-negative or staphylococcal infections. It is an approved antibiotic, though it does not appear to be authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2602246](https://www.wikidata.org/wiki/Q2602246) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cefotetan | parent | 575.619 | C17H17N7O8S4 | DrugBank | [53025](https://pubchem.ncbi.nlm.nih.gov/compound/53025) | Sugiyama_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:27 | 3:25 | 0/2/1 | 0/0/0 | 0/0/0 | 58,385/34,707 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q17 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Sugiyama_1986_reference](drugs/drug_cefotetan/Cefotetan_Sugiyama1986_reference.md) | — | 1-compartment (no model) | 5 | Sugiyama H et al., [Transfer of cefotetan into exudates fr…, The Japanese journal of ant… (1986) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ohkawa_1983_reference](drugs/drug_cefotetan/Cefotetan_Ohkawa1983_reference.md) | — | 1-compartment (no model) | 0 | Ohkawa M et al., Pharmacokinetics of cefotetan in normal…, Antimicrobial agents and ch… (1983) | [10.1128/AAC.23.1.31](https://doi.org/10.1128/AAC.23.1.31) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Smith_1986_reference](drugs/drug_cefotetan/Cefotetan_Smith1986_reference.md) | — | 1-compartment (no model) | 0 | Smith BR et al., Cefotetan pharmacokinetics in volunteer…, Antimicrobial agents and ch… (1986) | [10.1128/AAC.29.5.887](https://doi.org/10.1128/AAC.29.5.887) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cefotetan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sugiyama_1986.pdf` | Sugiyama H et al., [Transfer of cefotetan into exudates fr…, The Japanese journal of ant… (1986) | popPK | 10 | not captured | [3463777](https://pubmed.ncbi.nlm.nih.gov/3463777) | The study reports quantitative PK parameters (Vd, T1/2, AUC) for cefotetan in humans derived from a two-compartment model analysis. |

<sub>queue written 2026-10-07T10:24:42.758181+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Moine_2013 | irrelevant | 1 | 0 | The study is a pharmacodynamic modeling simulation that uses PK parameters obtained from published literature rather than measuring them, and no specific numeric PK values for cefotetan are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:26 UTC</sub>
