<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ravidasvir&quot;}]"></div>

# ravidasvir

- **generic name:** ravidasvir
- **ATC codes:** `J05AP13`
- **DrugBank:** [DB15652](https://go.drugbank.com/drugs/DB15652) · **PubChem:** not captured
- **molar mass:** 762.912 g/mol (C42H50N8O6) — DrugBank
- **groups:** investigational

## About

Ravidasvir is an investigational antiviral drug studied for the treatment of hepatitis C virus infections. It is not an approved medicine and remains under investigation, with no marketing authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25101668](https://www.wikidata.org/wiki/Q25101668) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:31 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 12,638/660 | ollama / glm-5.3-flash | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ravidasvir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Genome polyprotein (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Panjasawatwong_2024.pdf` | Panjasawatwong N et al., Population pharmacokinetics of ravidasv…, Antimicrobial agents and ch… (2024) | popPK | 10 | [10.1128/aac.00008-24](https://doi.org/10.1128/aac.00008-24) | [38767383](https://pubmed.ncbi.nlm.nih.gov/38767383) | Population PK of ravidasvir in humans with a two-compartment model, but numeric parameter values (CL/F, Vd/F, Q) are not present in the evidence, likely in tables/supplement not provided. |

<sub>queue written 2026-10-07T16:31:18.785417+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abu_2026 | not_relevant | 0 | 0 | Trial of treatment duration vs SVR12; no gene variant or PK/PD parameter reported. |
| PGx | Andrieux-Meyer_2021 | not_relevant | 0 | 0 | Trial reports efficacy/safety and lists PK objectives, but no gene variant/genotype effect on ravidasvir PK or PD parameters is reported. |
| PGx | Esmat_2017 | not_relevant | 0 | 0 | Clinical efficacy/safety trial of ravidasvir+sofosbuvir with no genetic variant or PK/PD parameter data reported. |
| PGx | Gomaa_2021 | not_relevant | 0 | 0 | Abstract only mentions HCV genotype (viral) and efficacy/safety, no host gene variant effect on ravidasvir PK/PD parameters. |
| PGx | Hafez_2018 | not_relevant | 0 | 0 | Narrative review with no gene variant/genotype effects on ravidasvir PK or PD parameters reported. |
| PGx | Hefnawy_2020 | not_relevant | 0 | 0 | Paper reports an analytical method and rat PK of ravidasvir with no gene variant/genotype/phenotype effects on PK or PD parameters. |
| PGx | Kao_2018 | not_relevant | 2 | 3 | Reports viral NS5A resistance variants and SVR12 outcomes only, with no host pharmacogenomic effect on ravidasvir PK or PD parameters. |
| PGx | Muhamad_2026 | not_relevant | 0 | 0 | The paper examines treatment duration and viral load as predictors of time to HCV RNA suppression; no gene variant/genotype/phenotype effect on ravidasvir PK/PD is reported (HCV genotype is viral, not host pharmacogenomics). |
| popPK | Panjasawatwong_2024 | relevant | 10 | 3 | Population PK of ravidasvir in humans with a two-compartment model, but numeric parameter values (CL/F, Vd/F, Q) are not present in the evidence, likely in tables/supplement not provided. |
| PGx | Xiao_2020 | not_relevant | 0 | 0 | Study reports efficacy/safety and cytokine changes for ravidasvir therapy, with no gene variant/genotype effects on PK or PD parameters. |
| PGx | Xu_2019 | not_relevant | 3 | 3 | IL28B genotype and NS5A polymorphisms are analyzed only as subgroups for SVR12 efficacy, not as modifiers of ravidasvir PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
