<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;tralokinumab&quot;}]"></div>

# tralokinumab

- **generic name:** tralokinumab
- **ATC codes:** `D11AH07`
- **DrugBank:** [DB12169](https://go.drugbank.com/drugs/DB12169) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tralokinumab is a monoclonal antibody used to treat dermatitis (atopic skin inflammation). It is an approved medicine, though its use appears limited to dermatological care rather than broad application.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7833105](https://www.wikidata.org/wiki/Q7833105) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:03 | 0:42 | 1/1/0 | 0/0/0 | 0/0/0 | 35,778/1,707 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Soehoel_2022_reference](drugs/drug_tralokinumab/Tralokinumab_Soehoel2022_reference.md) | held back | 1-compartment, oral | 6 | Soehoel A et al., Population Pharmacokinetics of Tralokin…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1113](https://doi.org/10.1002/cpdd.1113) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Baverel_2015_reference](drugs/drug_tralokinumab/Tralokinumab_Baverel2015_reference.md) | — | 1-compartment (no model) | 0 | Baverel PG et al., Pharmacokinetics of tralokinumab in ado…, British journal of clinical… (2015) | [10.1111/bcp.12725](https://doi.org/10.1111/bcp.12725) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tralokinumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL13 (antibody), IL13 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baverel_2015.pdf` | Baverel PG et al., Pharmacokinetics of tralokinumab in ado…, British journal of clinical… (2015) | popPK | 10 | [10.1111/bcp.12725](https://doi.org/10.1111/bcp.12725) | [26182954](https://pubmed.ncbi.nlm.nih.gov/26182954) | The study reports a population PK model for tralokinumab and provides specific numeric clearance values for adolescents in the abstract. |
| `Baverel_2018.pdf` | Baverel PG et al., Dose-Exposure-Response Relationship of…, Clinical pharmacology and t… (2018) | popPK | 10 | [10.1002/cpt.803](https://doi.org/10.1002/cpt.803) | [28758192](https://pubmed.ncbi.nlm.nih.gov/28758192) | The study describes a population PK/PD model for tralokinumab but provides no numeric PK parameter values in the provided text. |
| `Baverel_2018_2.pdf` | Baverel P et al., A randomized, placebo-controlled, singl…, Drug metabolism and pharmac… (2018) | popPK | 8 | [10.1016/j.dmpk.2017.12.001](https://doi.org/10.1016/j.dmpk.2017.12.001) | [29622380](https://pubmed.ncbi.nlm.nih.gov/29622380) | The paper reports PK parameters for tralokinumab in humans, but only provides summary statistics (t1/2 range) in the text, with detailed numeric model parameters likely in figures or supplementary material not provided. |

<sub>queue written 2026-10-07T08:03:24.162206+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baverel_2018 | relevant | 10 | 0 | The study describes a population PK/PD model for tralokinumab but provides no numeric PK parameter values in the provided text. |
| popPK | Baverel_2018_2 | relevant | 8 | 3 | The paper reports PK parameters for tralokinumab in humans, but only provides summary statistics (t1/2 range) in the text, with detailed numeric model parameters likely in figures or supplementary material not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:03 UTC</sub>
