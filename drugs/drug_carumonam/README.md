<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;carumonam&quot;}]"></div>

# carumonam

- **generic name:** carumonam
- **ATC codes:** `J01DF02`
- **DrugBank:** [DB13553](https://go.drugbank.com/drugs/DB13553) · **PubChem:** not captured
- **molar mass:** 466.4 g/mol (C12H14N6O10S2) — DrugBank
- **groups:** experimental

## About

Carumonam is a monobactam antibiotic intended to treat bacterial infections. It remains experimental and is not widely used or authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5047478](https://www.wikidata.org/wiki/Q5047478) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| carumonam | parent | 466.4 | C12H14N6O10S2 | DrugBank | — | Konishi_1991 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:31 | 0:36 | 0/1/0 | 1/1/0 | 0/0/0 | 15,789/924 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Konishi_1991_reference](drugs/drug_carumonam/Carumonam_Konishi1991_reference.md) | — | 1-compartment (no model) | 0 | Konishi K et al., Pharmacokinetics of carumonam (AMA-1080…, Antimicrobial agents and ch… (1991) | [10.1128/AAC.35.6.1048](https://doi.org/10.1128/AAC.35.6.1048) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Whitby_1989_CP](drugs/drug_carumonam/pd_Whitby_1989_CP.md) | Prostatic tissue concentration biomarker turnover ← carumonam | — | Whitby M et al., Penetration of monobactam antibiotics (…, Chemotherapy (1989) | [10.1159/000238629](https://doi.org/10.1159/000238629) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bérubé_1988_None](drugs/drug_carumonam/pd_B_rub_1988_None.md) | None ← None · model not identified | — | Bérubé D et al., Pharmacokinetics of carumonam after sin…, Antimicrobial agents and ch… (1988) | [10.1128/AAC.32.3.354](https://doi.org/10.1128/AAC.32.3.354) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Konishi_1991.pdf` | Konishi K et al., Pharmacokinetics of carumonam (AMA-1080…, Antimicrobial agents and ch… (1991) | popPK | 10 | [10.1128/AAC.35.6.1048](https://doi.org/10.1128/AAC.35.6.1048) | [1929242](https://pubmed.ncbi.nlm.nih.gov/1929242) | The paper reports specific quantitative pharmacokinetic parameters including volume of distribution (Varea), half-lives, and clearance trends for carumonam in human patients. |
| `Bulitta_2009.pdf` | Bulitta JB et al., Comparison of the pharmacokinetics and…, Diagnostic microbiology and… (2009) | popPK | 8 | [10.1016/j.diagmicrobio.2009.06.018](https://doi.org/10.1016/j.diagmicrobio.2009.06.018) | [19748423](https://pubmed.ncbi.nlm.nih.gov/19748423) | The paper reports population PK parameters (clearance, volume) for carumonam, but the specific numeric values for these parameters are not present in the provided abstract evidence, only relative changes and simulation outcomes. |

<sub>queue written 2026-10-07T10:31:07.618943+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bulitta_2009 | relevant | 8 | 3 | The paper reports population PK parameters (clearance, volume) for carumonam, but the specific numeric values for these parameters are not present in the provided abstract evidence, only relative changes and simulation outcomes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:31 UTC</sub>
