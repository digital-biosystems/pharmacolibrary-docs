<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;piribedil&quot;}]"></div>

# piribedil

- **generic name:** piribedil
- **ATC codes:** `N04BC08`
- **DrugBank:** [DB12478](https://go.drugbank.com/drugs/DB12478) · **PubChem:** [CID 4850](https://pubchem.ncbi.nlm.nih.gov/compound/4850)
- **molar mass:** 298.346 g/mol (C16H18N4O2) — DrugBank
- **groups:** investigational

## About

Piribedil is a dopamine agonist that has been used to treat Parkinson's disease. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413976](https://www.wikidata.org/wiki/Q413976) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:19 | 1:44 | 0/0/0 | 0/0/0 | 0/0/0 | 12,587/683 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=piribedil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRA2C (target), DRD2 (target), DRD3 (target), DRD4 (target), HTR1A (target), HTR2B (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Simon_2005.pdf` | Simon N et al., End-of-dose akinesia after a single int…, Movement disorders : offici… (2005) | popPK | 6 | [10.1002/mds.20400](https://doi.org/10.1002/mds.20400) | [15726579](https://pubmed.ncbi.nlm.nih.gov/15726579) | Human PK/PD study of piribedil with IV infusion, but no numeric disposition parameters (CL, V, t½) appear in the provided evidence; values likely in figures/supplement not included. |

<sub>queue written 2026-10-06T14:19:23.908117+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Li_2025 | not_relevant | 3 | 4 | Piribedil appears only as a covariate/dosage adjustment; no gene variant is linked to a piribedil-specific PK or PD parameter. |
| popPK | Martinez-Mir_1987 | irrelevant | 0 | 0 | In-vitro pharmacodynamic study of dopamine agonists in guinea-pig atria with no PK parameters for piribedil. |
| popPK | Mueller_1976 | irrelevant | 0 | 0 | Endocrine pharmacodynamic study of piribedil in rats with no pharmacokinetic parameters or numeric disposition values. |
| popPK | Riffee_1981 | irrelevant | 0 | 0 | Pharmacodynamic seizure-threshold study in mice with no PK disposition parameters for piribedil. |
| popPK | Simon_2005 | relevant | 6 | 2 | Human PK/PD study of piribedil with IV infusion, but no numeric disposition parameters (CL, V, t½) appear in the provided evidence; values likely in figures/supplement not included. |
| popPK | Thornburg_1975 | irrelevant | 0 | 0 | Piribedil is only used as a dopaminergic agonist probe in a behavioral pharmacology study; no PK parameters reported. |
| popPK | Yamada_1986 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters for piribedil. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
