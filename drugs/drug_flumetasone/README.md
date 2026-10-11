<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;flumetasone&quot;}]"></div>

# flumetasone

- **generic name:** flumetasone
- **ATC codes:** `D07AB03`, `D07BB01`, `D07CB05`, `D07XB01`, `S02CA02`
- **DrugBank:** [DB00663](https://go.drugbank.com/drugs/DB00663) · **PubChem:** not captured
- **groups:** approved, vet_approved

## About

Flumetasone is a moderately potent corticosteroid used to treat inflammatory skin conditions, applied topically alone or in combinations with antiseptics or antibiotics, and also in ear preparations with antiinfectives. It is an approved medicine and also approved for veterinary use, though it does not appear to have a central European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4383636](https://www.wikidata.org/wiki/Q4383636) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:11 | 0:54 | 0/0/0 | 0/1/0 | 0/0/0 | 17,150/1,398 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Knych_2019_cortisol](drugs/drug_flumetasone/pd_Knych_2019_cortisol.md) | cortisol ← flumetasone · indirect response — drug inhibits the production of cortisol | — | Knych HK et al., Pharmacokinetics of intravenous flumeta…, Equine veterinary journal (2019) | [10.1111/evj.13002](https://doi.org/10.1111/evj.13002) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flumetasone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ESRRA (modulator), ESRRB (modulator), ESRRG (modulator), NR3C1 (target), SERPINA6 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knych_2019.pdf` | Knych HK et al., Pharmacokinetics of intravenous flumeta…, Equine veterinary journal (2019) | popPK | 10 | [10.1111/evj.13002](https://doi.org/10.1111/evj.13002) | [30080272](https://pubmed.ncbi.nlm.nih.gov/30080272) | The abstract explicitly provides quantitative pharmacokinetic parameters (Vss, CL, t1/2) for flumetasone in horses. |
| `Panaretto_1978.pdf` | Panaretto BA et al., The administration of flumethasone, by…, Australian journal of biolo… (1978) | popPK | 6 | [10.1071/bi9780601](https://doi.org/10.1071/bi9780601) | [754682](https://pubmed.ncbi.nlm.nih.gov/754682) | The study reports quantitative metabolic clearance rates (200-700 ml/min) for flumethasone in sheep, although it does not provide a full compartmental model or volume of distribution. |

<sub>queue written 2026-10-07T21:11:14.561952+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lax_2022 | irrelevant | 0 | 0 | This is a clinical trial review on eczema treatment strategies, not a pharmacokinetic study of flumetasone. |
| popPK | Möstl_1985 | irrelevant | 0 | 0 | The study measures endogenous hormone concentrations (androgens/oestrogens) as a biological response to flumetasone, not the pharmacokinetic parameters (CL, V, t1/2) of flumetasone itself. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The study focuses on dexamethasone, and flumetasone is only mentioned as a potential internal standard or likely a typo for flumethasone, with no PK parameters reported for flumetasone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
