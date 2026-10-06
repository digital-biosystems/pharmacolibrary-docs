<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;brotizolam&quot;}]"></div>

# brotizolam

- **generic name:** brotizolam
- **ATC codes:** `N05CD09`
- **DrugBank:** [DB09017](https://go.drugbank.com/drugs/DB09017) · **PubChem:** [CID 2451](https://pubchem.ncbi.nlm.nih.gov/compound/2451)
- **molar mass:** 393.689 g/mol (C15H10BrClN4S) — DrugBank
- **groups:** approved, withdrawn

## About

Brotizolam is a benzodiazepine-type sedative that was used as a hypnotic for sleep problems. It was approved in some countries but has been withdrawn and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q850074](https://www.wikidata.org/wiki/Q850074) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:47 | 3:47 | 0/0/0 | 1/0/0 | 0/0/0 | 69,600/1,405 | ollama / glm-5.3-flash | 3 | 0/0 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tanaka_1983_PPR_latency](drugs/drug_brotizolam/pd_Tanaka_1983_PPR_latency.md) | maximum prolongation of photopalpebral reflex (PPR) latency ← brotizolam · direct linear effect | — | Tanaka M et al., Effect of brotizolam on the averaged ph…, British journal of clinical… (1983) | [10.1111/j.1365-2125.1983.tb02307.x](https://doi.org/10.1111/j.1365-2125.1983.tb02307.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=brotizolam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bechtel_1986.pdf` | Bechtel WD et al., Blood level, excretion, and metabolite…, Arzneimittel-Forschung (1986) | popPK | 6 | not captured | [3718580](https://pubmed.ncbi.nlm.nih.gov/3718580) | Human mass-balance study with half-lives (9.5 h radioactivity, 4.4 h unchanged) and excretion fractions, but no CL/V or full compartmental parameter values in the evidence. |

<sub>queue written 2026-10-06T19:46:59.401809+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Osanai_2004 | not_relevant | 0 | 0 | Drug-drug interaction (itraconazole/CYP3A4 inhibition), not a gene variant/genotype/phenotype effect. |
| PGx | Otani_2003 | not_relevant | 3 | 2 | Review mentions brotizolam is metabolized by CYP3A4 and affected by inhibitors/inducers, but no gene variant effect on PK/PD parameters is quantified. |
| PGx | Senda_1997 | not_relevant | 2 | 5 | Identifies CYP3A4 as the enzyme metabolizing brotizolam via in vitro microsome studies, but no gene variant/genotype/phenotype effect on PK/PD parameters is reported. |
| PGx | Tokairin_2005 | not_relevant | 3 | 5 | Drug interaction (erythromycin/CYP3A4 inhibition) affecting brotizolam PK, not a gene variant/genotype/phenotype effect. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
