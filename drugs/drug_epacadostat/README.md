<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;epacadostat&quot;}]"></div>

# epacadostat

- **generic name:** epacadostat
- **ATC codes:** `L01XX58`
- **DrugBank:** [DB11717](https://go.drugbank.com/drugs/DB11717) · **PubChem:** [CID 91826917](https://pubchem.ncbi.nlm.nih.gov/compound/91826917)
- **molar mass:** 438.23 g/mol (C11H13BrFN7O4S) — DrugBank
- **groups:** investigational

## About

Epacadostat is an investigational antineoplastic agent studied for the treatment of cancer. It is not an approved medicine; it remains under clinical investigation and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q126607104](https://www.wikidata.org/wiki/Q126607104) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:43 | 0:07 | 0/0/0 | 0/0/1 | 0/0/0 | 4,804/809 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Shi_2017_KYN](drugs/drug_epacadostat/pd_Shi_2017_KYN.md) | kynurenine ← epacadostat · indirect response — drug stimulates the production of kynurenine | — | Shi JG et al., Population Pharmacokinetic and Pharmaco…, Journal of clinical pharmac… (2017) | [10.1002/jcph.855](https://doi.org/10.1002/jcph.855) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Shi_2017_TRP](drugs/drug_epacadostat/pd_Shi_2017_TRP.md) | tryptophan ← epacadostat · indirect response — drug inhibits the production of tryptophan | — | Shi JG et al., Population Pharmacokinetic and Pharmaco…, Journal of clinical pharmac… (2017) | [10.1002/jcph.855](https://doi.org/10.1002/jcph.855) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=epacadostat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IDO1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shi_2017.pdf` | Shi JG et al., Population Pharmacokinetic and Pharmaco…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.855](https://doi.org/10.1002/jcph.855) | [27990653](https://pubmed.ncbi.nlm.nih.gov/27990653) | The paper describes a population PK model for epacadostat in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-06T20:43:16.028442+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Boer_2016 | not_relevant | 0 | 0 | The paper characterizes the metabolic pathways of epacadostat (UGT1A9, P450s, gut microbiota) but does not report on gene variants/genotypes/phenotypes affecting PK or PD parameters. |
| popPK | Liu_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the discovery of new IDO1 inhibitors, not the pharmacokinetics of epacadostat. |
| popPK | Shi_2017 | relevant | 10 | 2 | The paper describes a population PK model for epacadostat in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
