<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;vorozole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vorozole_Piotrovsky1998_reference&quot;,&quot;label&quot;:&quot;Piotrovsky_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vorozole/Vorozole_Piotrovsky1998_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# vorozole

- **generic name:** vorozole
- **ATC codes:** `L02BG05`
- **DrugBank:** [DB13767](https://go.drugbank.com/drugs/DB13767) · **PubChem:** not captured
- **molar mass:** 324.77 g/mol (C16H13ClN6) — DrugBank
- **groups:** experimental

## About

Vorozole is an aromatase inhibitor studied as an anticancer (antineoplastic) agent. It remains experimental and does not appear to be an approved medicine on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7941876](https://www.wikidata.org/wiki/Q7941876) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vorozole | parent | 324.77 | C16H13ClN6 | DrugBank | — | Piotrovsky_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:28 | 0:07 | 1/0/0 | 0/0/0 | 0/0/0 | 11,515/1,335 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Piotrovsky_1998_reference](drugs/drug_vorozole/Vorozole_Piotrovsky1998_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Piotrovsky VK et al., Effects of demographic variables on vor…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050808](https://doi.org/10.1007/s002800050808) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vorozole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Piotrovsky_1998.pdf` | Piotrovsky VK et al., Effects of demographic variables on vor…, Cancer chemotherapy and pha… (1998) | popPK | 10 | [10.1007/s002800050808](https://doi.org/10.1007/s002800050808) | [9685057](https://pubmed.ncbi.nlm.nih.gov/9685057) | The paper reports a population pharmacokinetic model for vorozole in humans with specific numeric values for CL, Vc, Vp, Q, and ka provided in the abstract/results. |
| `Pareto_2013.pdf` | Pareto D et al., In vivo imaging of brain aromatase in f…, Molecular imaging (2013) | popPK | 8 | [10.2310/7290.2013.00068](https://doi.org/10.2310/7290.2013.00068) | [24447618](https://pubmed.ncbi.nlm.nih.gov/24447618) | The study reports quantitative PK parameters (V_T, K1) for [11C]vorozole in baboons, but specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-10-06T22:28:09.458108+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Pareto_2013 | relevant | 8 | 2 | The study reports quantitative PK parameters (V_T, K1) for [11C]vorozole in baboons, but specific numeric values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:28 UTC</sub>
