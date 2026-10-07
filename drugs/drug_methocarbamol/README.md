<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03B&quot;,&quot;href&quot;:&quot;atc/M03B.md&quot;},{&quot;label&quot;:&quot;methocarbamol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methocarbamol_Rumpler2014_reference&quot;,&quot;label&quot;:&quot;Rumpler_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methocarbamol/Methocarbamol_Rumpler2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# methocarbamol

- **generic name:** methocarbamol
- **ATC codes:** `M03BA03`
- **DrugBank:** [DB00423](https://go.drugbank.com/drugs/DB00423) · **PubChem:** [CID 4107](https://pubchem.ncbi.nlm.nih.gov/compound/4107)
- **molar mass:** 241.2405 g/mol (C11H15NO5) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Methocarbamol is a centrally acting muscle relaxant used for painful muscle spasm, cramps, tetanus and inflammatory myopathy. It is an approved medicine, also approved for veterinary use, and is used fairly widely, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411456](https://www.wikidata.org/wiki/Q411456) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methocarbamol | parent | 241.24 | C11H15NO5 | DrugBank | [4107](https://pubchem.ncbi.nlm.nih.gov/compound/4107) | Rumpler_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:55 | 3:37 | 1/0/0 | 0/0/0 | 0/0/0 | 137,364/4,530 | einfracz / qwen3.8-27b | 9 | 2/0 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Rumpler_2014_reference](drugs/drug_methocarbamol/Methocarbamol_Rumpler2014_reference.md) | ▶ model + simulator | 1-compartment, oral | 8 | Rumpler MJ et al., The pharmacokinetics of methocarbamol a…, Journal of veterinary pharm… (2014) | [10.1111/jvp.12068](https://doi.org/10.1111/jvp.12068) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=methocarbamol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CA1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 31 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rumpler_2014.pdf` | Rumpler MJ et al., The pharmacokinetics of methocarbamol a…, Journal of veterinary pharm… (2014) | popPK | 10 | [10.1111/jvp.12068](https://doi.org/10.1111/jvp.12068) | [23859819](https://pubmed.ncbi.nlm.nih.gov/23859819) | The paper reports quantitative pharmacokinetic parameters (CL, Vss, t1/2, F) for methocarbamol in horses with numeric values clearly present in the text. |
| `Knych_2016.pdf` | Knych HK et al., Pharmacokinetics of methocarbamol and p…, Journal of veterinary pharm… (2016) | popPK | 8 | [10.1111/jvp.12298](https://doi.org/10.1111/jvp.12298) | [26924025](https://pubmed.ncbi.nlm.nih.gov/26924025) | The study characterizes the pharmacokinetics of methocarbamol in horses using compartmental analysis, but no specific numeric parameter values are provided in the extracted evidence. |

<sub>queue written 2026-10-07T02:54:27.630719+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bertin_2023 | irrelevant | 0 | 0 | The paper describes a machine learning platform (RECOVER) for discovering synergistic drug combinations in cancer cell lines and does not contain any pharmacokinetic data or studies on methocarbamol. |
| popPK | Knych_2016 | relevant | 8 | 0 | The study characterizes the pharmacokinetics of methocarbamol in horses using compartmental analysis, but no specific numeric parameter values are provided in the extracted evidence. |
| PGx | Moody_2018 | not_relevant | 0 | 0 | The paper studies drug-drug interactions (inhibition of opioid metabolism) involving methocarbamol, but does not report any pharmacogenomic effects (gene variants) on methocarbamol's PK or PD. |
| popPK | Schmith_2019 | irrelevant | 0 | 0 | The study focuses on the QT interval effects of buprenorphine, and methocarbamol is only mentioned as a comedication that may affect heart rate, with no pharmacokinetic parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:54 UTC</sub>
