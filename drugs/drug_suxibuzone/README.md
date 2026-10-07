<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M02A&quot;,&quot;href&quot;:&quot;atc/M02A.md&quot;},{&quot;label&quot;:&quot;suxibuzone&quot;}]"></div>

# suxibuzone

- **generic name:** suxibuzone
- **ATC codes:** `M02AA22`
- **DrugBank:** [DB13232](https://go.drugbank.com/drugs/DB13232) · **PubChem:** not captured
- **molar mass:** 438.473 g/mol (C24H26N2O6) — DrugBank
- **groups:** experimental

## About

Suxibuzone is a non-steroidal anti-inflammatory drug intended for topical treatment of joint and muscular pain. It appears only as an experimental compound and is not an established marketed medicine, so its current use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7650623](https://www.wikidata.org/wiki/Q7650623) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenylbutazone | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:45 | 0:22 | 0/1/0 | 0/0/0 | 0/0/0 | 27,430/2,179 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Delbeke_1993_reference](drugs/drug_suxibuzone/Suxibuzone_Delbeke1993_reference.md) | — | 1-compartment (no model) | 0 | Delbeke FT et al., The disposition of suxibuzone in the ho…, Journal of veterinary pharm… (1993) | [10.1111/j.1365-2885.1993.tb00175.x](https://doi.org/10.1111/j.1365-2885.1993.tb00175.x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jaraiz_1999.pdf` | Jaraiz MV et al., Disposition and tolerance of suxibuzone…, Equine veterinary journal (1999) | popPK | 9 | [10.1111/j.2042-3306.1999.tb03841.x](https://doi.org/10.1111/j.2042-3306.1999.tb03841.x) | [10505957](https://pubmed.ncbi.nlm.nih.gov/10505957) | The paper reports quantitative pharmacokinetic parameters (MRT, Cmax) for the active metabolites (PBZ, OPBZ) of suxibuzone in horses, which constitute the disposition profile of the parent drug given the rapid elimination of the parent compound. |
| `Delbeke_1993.pdf` | Delbeke FT et al., The disposition of suxibuzone in the ho…, Journal of veterinary pharm… (1993) | popPK | 8 | [10.1111/j.1365-2885.1993.tb00175.x](https://doi.org/10.1111/j.1365-2885.1993.tb00175.x) | [8230399](https://pubmed.ncbi.nlm.nih.gov/8230399) | Reports quantitative pharmacokinetic parameters (half-life, terminal rate constant, peak concentration) for the major metabolite phenylbutazone after suxibuzone administration in horses. |

<sub>queue written 2026-10-07T01:45:02.870290+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bognanni_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of a suxibuzone conjugate's effect on proteasome activity, reporting no pharmacokinetic parameters (CL, V, t1/2, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:45 UTC</sub>
