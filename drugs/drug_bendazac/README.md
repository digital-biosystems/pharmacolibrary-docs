<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M02A&quot;,&quot;href&quot;:&quot;atc/M02A.md&quot;},{&quot;label&quot;:&quot;bendazac&quot;}]"></div>

# bendazac

- **generic name:** bendazac
- **ATC codes:** `M02AA11`, `S01BC07`
- **DrugBank:** [DB13501](https://go.drugbank.com/drugs/DB13501) · **PubChem:** not captured
- **molar mass:** 282.299 g/mol (C16H14N2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Bendazac is a non-steroidal anti-inflammatory drug that was used topically for joint and muscular pain and as an ophthalmic anti-inflammatory agent. It appears to have been withdrawn from use, as it is listed as withdrawn despite once being approved.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q862414](https://www.wikidata.org/wiki/Q862414) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bendazac | parent | 282.299 | C16H14N2O3 | DrugBank | — | Valeri_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:43 | 4:36 | 0/2/0 | 0/0/0 | 0/0/0 | 14,802/33,338 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chen_1997_reference](drugs/drug_bendazac/Bendazac_Chen1997_reference.md) | — | 1-compartment (no model) | 0 | Chen XX et al., Pharmacokinetics of bendazac lysine in…, Zhongguo yao li xue bao = A… (1997) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Valeri_1985_reference](drugs/drug_bendazac/Bendazac_Valeri1985_reference.md) | — | 1-compartment (no model) | 1 | Valeri P et al., Investigations on the ocular pharmacoki…, Experimental and molecular… (1985) | [10.1016/0014-4800(85)90065-6](https://doi.org/10.1016/0014-4800(85)90065-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bendazac) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Free radicals (blocker), PTGS1 (unknown), PTGS2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_1997.pdf` | Chen XX et al., Pharmacokinetics of bendazac lysine in…, Zhongguo yao li xue bao = A… (1997) | popPK | 10 | not captured | [10072958](https://pubmed.ncbi.nlm.nih.gov/10072958) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, T1/2, AUC) for bendazac lysine in a 2-compartment model, with values directly present in the abstract. |
| `Rovei_1987.pdf` | Rovei V et al., Pharmacokinetics of bendazac-lysine and…, European journal of clinica… (1987) | popPK | 10 | [10.1007/BF00637567](https://doi.org/10.1007/BF00637567) | [3691618](https://pubmed.ncbi.nlm.nih.gov/3691618) | The study reports population pharmacokinetic parameters (V/F, CL/F, t1/2) for bendazac, but the specific numeric values are not present in the provided abstract text. |
| `Rovei_1988.pdf` | Rovei V et al., The pharmacokinetics of bendazac-lysine…, European journal of clinica… (1988) | popPK | 10 | [10.1007/BF00561370](https://doi.org/10.1007/BF00561370) | [3197747](https://pubmed.ncbi.nlm.nih.gov/3197747) | The abstract reports qualitative pharmacokinetic parameters for bendazac (clearance, volume, half-life) in humans, but specific numeric values are not provided in the evidence. |
| `Valeri_1985.pdf` | Valeri P et al., Investigations on the ocular pharmacoki…, Experimental and molecular… (1985) | popPK | 9 | [10.1016/0014-4800(85)90065-6](https://doi.org/10.1016/0014-4800(85)90065-6) | [4065307](https://pubmed.ncbi.nlm.nih.gov/4065307) | The study reports quantitative half-lives for bendazac in various ocular compartments and plasma in rabbits, representing specific disposition parameters. |

<sub>queue written 2026-10-07T01:39:09.422714+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Rovei_1987 | relevant | 10 | 2 | The study reports population pharmacokinetic parameters (V/F, CL/F, t1/2) for bendazac, but the specific numeric values are not present in the provided abstract text. |
| popPK | Rovei_1988 | relevant | 10 | 3 | The abstract reports qualitative pharmacokinetic parameters for bendazac (clearance, volume, half-life) in humans, but specific numeric values are not provided in the evidence. |
| popPK | Saso_1999 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on protein denaturation where bendazac serves only as a comparator drug, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:42 UTC</sub>
