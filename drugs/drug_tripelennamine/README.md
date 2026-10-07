<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D04A&quot;,&quot;href&quot;:&quot;atc/D04A.md&quot;},{&quot;label&quot;:&quot;tripelennamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tripelennamine_Wasfi2000_reference&quot;,&quot;label&quot;:&quot;Wasfi_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tripelennamine

- **generic name:** tripelennamine
- **ATC codes:** `D04AA04`, `R06AC04`
- **DrugBank:** [DB00792](https://go.drugbank.com/drugs/DB00792) · **PubChem:** [CID 5587](https://pubchem.ncbi.nlm.nih.gov/compound/5587)
- **molar mass:** 255.358 g/mol (C16H21N3) — DrugBank
- **groups:** approved, vet_approved

## About

Tripelennamine is an antihistamine used to treat allergic conditions such as urticaria. It is an approved drug, used both systemically for allergies and topically on the skin to relieve itching, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415203](https://www.wikidata.org/wiki/Q415203) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tripelennamine | parent | 255.358 | C16H21N3 | DrugBank | [5587](https://pubchem.ncbi.nlm.nih.gov/compound/5587) | Wasfi_2000 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:13 | 1:07 | 1/0/0 | 0/0/0 | 0/0/0 | 25,846/4,303 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Wasfi_2000_reference](drugs/drug_tripelennamine/Tripelennamine_Wasfi2000_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Wasfi IA et al., Comparative disposition of tripelennami…, Journal of veterinary pharm… (2000) | [10.1046/j.1365-2885.2000.00261.x](https://doi.org/10.1046/j.1365-2885.2000.00261.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tripelennamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder/regulator | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wasfi_2000.pdf` | Wasfi IA et al., Comparative disposition of tripelennami…, Journal of veterinary pharm… (2000) | popPK | 10 | [10.1046/j.1365-2885.2000.00261.x](https://doi.org/10.1046/j.1365-2885.2000.00261.x) | [11110101](https://pubmed.ncbi.nlm.nih.gov/11110101) | Numeric disposition parameters for tripelennamine are reported directly for horses and camels. |
| `He_2002.pdf` | He N et al., Inhibitory effects of H1-antihistamines…, European journal of clinica… (2002) | pgx | 8 | [10.1007/s00228-001-0399-0](https://doi.org/10.1007/s00228-001-0399-0) | [11936702](https://www.ncbi.nlm.nih.gov/pubmed/11936702) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T15:12:34.311026+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Hamelin_1998 | not_relevant | 0 | 0 | The study measures tripelennamine inhibition of CYP2D6 in vitro, not a gene variant or phenotype effect on tripelennamine PK or PD. |
| PGx | He_2002 | not_relevant | 0 | 0 | The study tests tripelennamine’s in vitro inhibition of CYP2D6, not how a genetic variant or phenotype changes a PK/PD parameter of tripelennamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:12 UTC</sub>
