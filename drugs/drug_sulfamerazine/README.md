<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;sulfamerazine&quot;}]"></div>

# sulfamerazine

- **generic name:** sulfamerazine
- **ATC codes:** `D06BA06`, `J01ED07`, `J01EE07`
- **DrugBank:** [DB01581](https://go.drugbank.com/drugs/DB01581) · **PubChem:** [CID 5325](https://pubchem.ncbi.nlm.nih.gov/compound/5325)
- **molar mass:** 264.304 g/mol (C11H12N4O2S) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Sulfamerazine is a long-acting sulfonamide antibiotic used to treat bacterial infections, including topical skin use and combination therapy with trimethoprim. It has been withdrawn from human use, though it remains approved for veterinary purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415196](https://www.wikidata.org/wiki/Q415196) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sulfamerazine | parent | 264.304 | C11H12N4O2S | DrugBank | [5325](https://pubchem.ncbi.nlm.nih.gov/compound/5325) | Hayashi_1979 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:58 | 0:35 | 0/1/0 | 0/0/0 | 0/0/0 | 52,425/2,670 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Hayashi_1979_reference](drugs/drug_sulfamerazine/Sulfamerazine_Hayashi1979_reference.md) | — | 1-compartment (no model) | 2 | Hayashi M et al., Disposition of sulfonamides in food-pro…, American journal of veterin… (1979) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sulfamerazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hayashi_1979.pdf` | Hayashi M et al., Disposition of sulfonamides in food-pro…, American journal of veterin… (1979) | popPK | 10 | not captured | [525876](https://pubmed.ncbi.nlm.nih.gov/525876) | The text explicitly reports quantitative parameters for sulfamerazine in ewe lambs, including half-life (6.6 h), absorption rate constant (0.433 h^-1), and bioavailability (81%). |
| `Roliński_1984.pdf` | Roliński Z et al., Pharmacokinetic analysis of the level o…, Polish journal of pharmacol… (1984) | popPK | 9 | not captured | [6611547](https://pubmed.ncbi.nlm.nih.gov/6611547) | The study reports quantitative PK parameters (half-life) for sulfamerazine in calves using a one-compartment model, though clearance and volume values are not explicitly listed in the evidence. |

<sub>queue written 2026-10-07T21:58:02.223881+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartlett_2013 | irrelevant | 0 | 0 | The study assesses toxicity (LC50/EC50) in an aquatic invertebrate rather than pharmacokinetic parameters for sulfamerazine. |
| popPK | Losch_1980 | irrelevant | 2 | 0 | The paper describes the mathematical model structure for sulfamerazine in domestic mammals but does not provide specific quantitative parameter values (CL, V, Ka, etc.) for a single species. |
| popPK | Peiker_1982 | irrelevant | 2 | 0 | The abstract describes a pharmacokinetic study but does not provide any numeric parameter values in the extracted evidence. |
| popPK | Roliński_1984 | relevant | 9 | 4 | The study reports quantitative PK parameters (half-life) for sulfamerazine in calves using a one-compartment model, though clearance and volume values are not explicitly listed in the evidence. |
| popPK | Wei_2018 | irrelevant | 0 | 0 | The paper is an ISO standard describing a bacterial luminescence test for water quality and does not study sulfamerazine or provide any pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:58 UTC</sub>
