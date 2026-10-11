<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;moxetumomab pasudotox&quot;}]"></div>

# moxetumomab pasudotox

- **generic name:** moxetumomab pasudotox
- **ATC codes:** `L01FB02`
- **DrugBank:** [DB12688](https://go.drugbank.com/drugs/DB12688) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Moxetumomab pasudotox is an anticancer monoclonal antibody drug that was used to treat hairy cell leukemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q14605217](https://www.wikidata.org/wiki/Q14605217) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:22 | 2:34 | 0/1/0 | 0/0/0 | 0/0/0 | 17,321/2,157 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kuruvilla_2020_reference](drugs/drug_moxetumomab_pasudotox/MoxetumomabPasudotox_Kuruvilla2020_reference.md) | — | 1-compartment (no model) | 0 | Kuruvilla D et al., Population pharmacokinetics, efficacy,…, British journal of clinical… (2020) | [10.1111/bcp.14250](https://doi.org/10.1111/bcp.14250) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=moxetumomab_pasudotox) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CD22 (binder), EEF2 (inactivator).</sub>

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
| `Kuruvilla_2020.pdf` | Kuruvilla D et al., Population pharmacokinetics, efficacy,…, British journal of clinical… (2020) | popPK | 10 | [10.1111/bcp.14250](https://doi.org/10.1111/bcp.14250) | [32077130](https://pubmed.ncbi.nlm.nih.gov/32077130) | The paper reports a population PK model for moxetumomab pasudotox with specific numeric clearance values (CL1 and CL2) provided in the abstract. |
| `Wang_2013.pdf` | Wang B et al., Pharmacokinetic and pharmacodynamic com…, Journal of pharmaceutical s… (2013) | popPK | 9 | [10.1002/jps.23343](https://doi.org/10.1002/jps.23343) | [23090886](https://pubmed.ncbi.nlm.nih.gov/23090886) | The paper describes a population PK/PD study of moxetumomab pasudotox in cynomolgus monkeys, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07T17:21:00.362178+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper reports on the enhancement of drug activity by a protein kinase inhibitor (H89) in cell lines, not on the effect of a patient's gene variant or genotype on the drug's PK or PD parameters. |
| PGx | Müller_2018 | not_relevant | 0 | 0 | The paper investigates the structural domains of the drug (Pseudomonas exotoxin) and their impact on efficacy, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Wang_2013 | relevant | 9 | 2 | The paper describes a population PK/PD study of moxetumomab pasudotox in cynomolgus monkeys, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Wei_2018 | not_relevant | 0 | 0 | The paper describes protein engineering to improve pharmacokinetics (half-life) and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:21 UTC</sub>
